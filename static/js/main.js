const cryptoForm = document.getElementById('crypto-form');

async function fetchCryptoConversion(cryptoSymbol, currencySymbol) {
  const apiKey =
    'eb4efb03395c2b9ddf754369c88444bac8d34046d33829980b2ea90bde33b3c1';
  let response = await fetch(
    `https://min-api.cryptocompare.com/data/price?fsym=${cryptoSymbol}&tsyms=${currencySymbol}`
  );
  let conversion = await response.json();
  return conversion;
}

cryptoForm.addEventListener('submit', (event) => {
  event.preventDefault();
});
