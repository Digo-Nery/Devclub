const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");

function convertValues() {
  const inputCurrencyValue = document.querySelector(".input-currency").value;
  const currencyvalueToConvert = document.querySelector(
    ".currency-value-to-convert"
  ); // real
  const currencyConvertd = document.querySelector(".currency-value"); // outras moedas

  const dolartoday = 5.2;
  const euroToday = 6.2;
  const inesToday = 7.32;
  const bitcointoday = 373016.78;

  if (currencySelect.value == "dolar") {
    currencyConvertd.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrencyValue / dolartoday);
  }

  if (currencySelect.value == "euro") {
    currencyConvertd.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrencyValue / euroToday);
  }
  if (currencySelect.value == "ines") {
    currencyConvertd.innerHTML = new Intl.NumberFormat("ja-JP", {
      style: "currency",
      currency: "JPY",
    }).format(inputCurrencyValue / inesToday);
  }
  if (currencySelect.value == "bitcoin") {
    currencyConvertd.innerHTML = new Intl.NumberFormat("en-In", {
      maximumFractionDigits: 4,
    }).format(inputCurrencyValue / bitcointoday);
  }

  currencyvalueToConvert.innerHTML = new Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: "BRL",
  }).format(inputCurrencyValue);
}
function changeCurrency() {
  const currencyName = document.getElementById("currency-name");
  const currencyImage = document.querySelector(".currency-img");

  if (currencySelect.value == "dolar") {
    currencyName.innerHTML = "Dólar americano";
    currencyImage.src = "assets/estados-unidos.png";
  }
  if (currencySelect.value == "euro") {
    currencyName.innerHTML = "Euro";
    currencyImage.src = "assets/euro.png";
  }
  if(currencySelect.value == "ines"){
    currencyName.innerHTML = "Ines";
    currencyImage.src = "assets/iene.png";
  }
  if(currencySelect.value == "bitcoin"){
    currencyName.innerHTML = "Bitcoin";
    currencyImage.src = "assets/bitcoin.png"
  }
  convertValues();
}

currencySelect.addEventListener("change", changeCurrency);
convertButton.addEventListener("click", convertValues);
