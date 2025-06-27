const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

inputEl.addEventListener("input", (event) => {
  const trimmedValue = event.currentTarget.value.trim();
  outputEl.textContent = trimmedValue === "" ? "Anonymous" : trimmedValue;
});