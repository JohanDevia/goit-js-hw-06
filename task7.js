let fontSizeControl = document.getElementById("font-size-control");
let text = document.getElementById("text");

fontSizeControl.addEventListener("input", () => {
  text.style.fontSize = `${fontSizeControl.value}px`;
});
