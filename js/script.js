{
    const calculateResult = (currency) => {

        switch (currency) {
            case 4.3605:
                return "EUR"

            case 4.0718:
                return "USD"

            case 5.1733:
                return "USD"

            case 4.5714:
                return "USD"
        }
    }

    const updateResultText = (howMuch, now, walue) => {
        const changed = document.querySelector(".js-changed");
        changed.innerHTML = `${howMuch.toFixed(2)} PLN = <strong>${now.toFixed(2)} ${walue}</strong>`;
    }

    const onFormSubmit = () => {
        const currencyElement = document.querySelector(".js-currency");
        const howMuchElement = document.querySelector(".js-howMuch");

        const currency = parseFloat(currencyElement.value);
        const howMuch = +howMuchElement.value;
        const now = howMuch / currency;

        const walue = calculateResult(currency)

        updateResultText(howMuch, now, walue);
    }

    const init = () => {

        const form = document.querySelector(".form");

        form.addEventListener("input", onFormSubmit);
    }

    init();
}