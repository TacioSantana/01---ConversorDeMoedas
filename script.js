const covertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValue() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")


    console.log(currencySelect.value)
    const dolarToday = 5.58
    const euroToday = 6.48
    const libraToday = 7.46
    const bitcoinToday = 661604.43

    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)

    }

    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)

    }
    if (currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)

    }
    if (currencySelect.value == "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcoinToday)

    }


    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-br", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

}

function chanheCurrency(){
    const currencyName = document.getElementById("currency-name")
    const currencyImg = document.querySelector(".currency-img")
    if (currencySelect.value == "dolar"){
        currencyName.innerHTML = "Dólar Americano"
        currencyImg.src = "./assets/dolar.png"
    }
    if (currencySelect.value == "euro"){
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./assets/euro.png"
    }
    if (currencySelect.value == "libra"){
        currencyName.innerHTML = "Libra"
        currencyImg.src = "./assets/libra.png"
    }
    if (currencySelect.value == "bitcoin"){
        currencyName.innerHTML = "Bitcoin"
        currencyImg.src = "./assets/bitcoin.png"
    }
    convertValue()

}


currencySelect.addEventListener("change",chanheCurrency)
covertButton.addEventListener("click", convertValue)