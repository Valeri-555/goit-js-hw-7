const textInput = document.querySelector ("#name-input");

const output = document.querySelector ("#name-output");

textInput.addEventListener("input", (event) => {
    const inputValue = event.currentTarget.value.trim();

    if (inputValue !== "") {
        output.textContent = inputValue;
    } else {
        output.textContent = "Anonymous";
    }
});