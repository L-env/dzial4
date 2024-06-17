console.log("Witam wszystkie osoby które tutaj zaglądają!!!");

let currencyElement = document.querySelector(".js-currency");
let howMuchElement = document.querySelector(".js-howMuch");
let changed = document.querySelector(".js-changed");
let form = document.querySelector(".form");

form.addEventListener("input", () => {
    let currency = parseFloat(currencyElement.value);
    let howMuch = +howMuchElement.value;
    let now = howMuch / currency;
    let walue;

    switch (currency) {
        case 4.3605:
            walue = "EUR"
            break;
        case 4.0718:
            walue = "USD"
            break;
        case 5.1733:
            walue = "USD"
            break;
        case 4.5714:
            walue = "USD"
            break;
    }

    changed.innerHTML = `${howMuch.toFixed(2)} PLN = <strong>${now.toFixed(2)} ${walue}</strong>`;
})