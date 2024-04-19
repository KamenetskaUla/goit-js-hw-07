const inputName = document.querySelector("#name-input");

const outputName = document.querySelector("#name-output");

inputName.addEventListener("input", () => {
  const trimmedValue = inputName.value.trim();

  if (trimmedValue.length !== 0) {
    outputName.textContent = trimmedValue;
  } else {
    outputName.textContent = "Anonymus";
  }
});
