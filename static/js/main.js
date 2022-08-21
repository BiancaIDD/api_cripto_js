const cryptoForm = document.getElementById('crypto-form');

async function fetchCryptoConversion(cryptoSymbol, currencySymbol) {
  const apiKey =
    'eb4efb03395c2b9ddf754369c88444bac8d34046d33829980b2ea90bde33b3c1';
  let response = await fetch(
    `https://min-api.cryptocompare.com/data/pricemultifull?fsym=${cryptoSymbol}&tsyms=${currencySymbol}&api_key=${apiKey}`
  );
  let conversion = await response.json();
  return conversion;
}

function showError(error) {
  const formErrorSection = document.getElementById('form-error');
  formErrorSection.style.display = 'block';

  formErrorSection.querySelector('#form-error__message').innerHTML = error;
}

function showConversion(conversion) {
  const informationSection = document.getElementById('information');
  informationSection.style.display = 'block';

  informationSection.querySelector("#information__price")
  informationSection.querySelector("#information__highest-price")
  informationSection.querySelector("#information__lowest-price")
  informationSection.querySelector("#information__variation")
  informationSection.querySelector("#information__last-update")
}

function hideResponseSections() {
  const formErrorSection = document.getElementById('form-error');
  const informationSection = document.getElementById('information');

  formErrorSection.style.display = 'none';
  informationSection.style.display = 'none';
}

async function requestConversion() {
  const currencySelector = document.getElementById('crypto-form__currency');
  const cryptoSelector = document.getElementById('crypto-form__crypto');
  const currencySymbol =
    currencySelector.options[currencySelector.selectedIndex].value;
  const cryptoSymbol =
    cryptoSelector.options[cryptoSelector.selectedIndex].value;

  if (!currencySymbol || !cryptoSymbol) {
    showError('Seleccione ambas monedas...');
  }

  try {
    const conversion = await fetchCryptoConversion(
      cryptoSymbol,
      currencySymbol
    );
    showConversion(conversion);
  } catch (error) {
    showError('No se pudo realizar la conversion');
  }
}

cryptoForm.addEventListener('submit', (event) => {
  event.preventDefault();

  hideResponseSections();
  requestConversion();
});
