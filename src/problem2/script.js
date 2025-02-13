const apiUrl = "https://interview.switcheo.com/prices.json";
let exchangeRates = {};

async function fetchExchangeRates() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        
        exchangeRates = {};
        data.forEach(item => {
            exchangeRates[item.currency] = item.price;
        });

        updateCurrencyDropdowns(Object.keys(exchangeRates));
    } catch (error) {
        console.error("Error fetching exchange rates:", error);
    }
}

function updateCurrencyDropdowns(currencyList) {
    const fromCurrencySelect = document.getElementById("fromCurrency");
    const toCurrencySelect = document.getElementById("toCurrency");

    fromCurrencySelect.innerHTML = "";
    toCurrencySelect.innerHTML = "";

    currencyList.forEach(currency => {
        const option1 = document.createElement("option");
        const option2 = document.createElement("option");
        option1.value = option2.value = currency;
        option1.textContent = option2.textContent = currency;
        fromCurrencySelect.appendChild(option1);
        toCurrencySelect.appendChild(option2);
    });

    fromCurrencySelect.value = "USD";
    toCurrencySelect.value = "ETH";
}

function convertCurrency() {
    const amount = document.getElementById("amount").value;
    const fromCurrency = document.getElementById("fromCurrency").value;
    const toCurrency = document.getElementById("toCurrency").value;
    const resultElement = document.getElementById("result");

    if (!amount || amount <= 0) {
        resultElement.innerHTML = "Please enter a valid amount!";
        resultElement.style.color = "red";
        return;
    }

    if (!exchangeRates[fromCurrency] || !exchangeRates[toCurrency]) {
        resultElement.innerHTML = "Conversion rate not available.";
        resultElement.style.color = "red";
        return;
    }

    const fromRate = exchangeRates[fromCurrency];
    const toRate = exchangeRates[toCurrency];

    const convertedAmount = ((amount * toRate) / fromRate).toFixed(6);
    resultElement.innerHTML = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
    resultElement.style.color = "green";
}

fetchExchangeRates();
