const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")


function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueToConverted = document.querySelector(".currency-value")

    const dolarToday = 4.92//valores da moedas no dia 
    const euroToday = 5.98
    const libraToday = 6.20
    const pesoToday = 0.0332
    const btcTaday = 190.878

    if (currencySelect.value == "dolar") {//valores a serem covertidos conforme a moeda
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }
    if (currencySelect.value == "euro") {
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }
    if (currencySelect.value == "libra") {
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-Uk", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }
    if (currencySelect.value == "peso") {
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("es-ar", {
            style: "currency",
            currency: "ARS"
        }).format(inputCurrencyValue / pesoToday)
    }
    if (currencySelect.value == "bitcoin") {
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / btcTaday)
    }
       currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)
}

function changeCurrency() {//aplicando stylos conforme a mudança das moeda
    const currencyName = document.getElementById("currency-name")
    const currencyImg = document.querySelector(".currency-img")

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dolar Americano"
        currencyImg.src = "../assets/dolar.png"
    }
    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImg.src = "../assets/Euro.png"
    }
    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra"
        currencyImg.src = "../assets/libra.png"
    }
    if (currencySelect.value == "peso") {
        currencyName.innerHTML = "Peso"
        currencyImg.src = "../assets/peso.png"
    }
    if (currencySelect.value == "bitcoin") {
        currencyName.innerHTML = "bitcoin"
        currencyImg.src = "../assets/bitcoin.png"
    }
    convertValues()

}

currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)