document.addEventListener("DOMContentLoaded", function () {
    const redRange = document.getElementById("redRange");
    const greenRange = document.getElementById("greenRange");
    const blueRange = document.getElementById("blueRange");

    const redInput = document.getElementById("redInput");
    const greenInput = document.getElementById("greenInput");
    const blueInput = document.getElementById("blueInput");

    const colorPicker = document.getElementById("colorPicker");
    const colorBox = document.getElementById("colorBox");
    const hexCode = document.getElementById("hexCode");

    function updateColor() {
        let red = parseInt(redRange.value);
        let green = parseInt(greenRange.value);
        let blue = parseInt(blueRange.value);

        let rgbColor = `rgb(${red}, ${green}, ${blue})`;
        let hexColor = `#${red.toString(16).padStart(2, "0")}${green.toString(16).padStart(2, "0")}${blue.toString(16).padStart(2, "0")}`.toUpperCase();

        colorBox.style.backgroundColor = rgbColor;
        hexCode.textContent = hexColor;
        colorPicker.value = hexColor;

        redInput.value = red;
        greenInput.value = green;
        blueInput.value = blue;
    }

    function updateFromInput() {
        let red = Math.min(255, Math.max(0, parseInt(redInput.value) || 0));
        let green = Math.min(255, Math.max(0, parseInt(greenInput.value) || 0));
        let blue = Math.min(255, Math.max(0, parseInt(blueInput.value) || 0));

        redRange.value = red;
        greenRange.value = green;
        blueRange.value = blue;

        updateColor();
    }

    function updateFromColorPicker() {
        let hex = colorPicker.value;
        let red = parseInt(hex.substring(1, 3), 16);
        let green = parseInt(hex.substring(3, 5), 16);
        let blue = parseInt(hex.substring(5, 7), 16);

        redRange.value = red;
        greenRange.value = green;
        blueRange.value = blue;

        updateColor();
    }

    redRange.addEventListener("input", updateColor);
    greenRange.addEventListener("input", updateColor);
    blueRange.addEventListener("input", updateColor);

    redInput.addEventListener("input", updateFromInput);
    greenInput.addEventListener("input", updateFromInput);
    blueInput.addEventListener("input", updateFromInput);

    colorPicker.addEventListener("input", updateFromColorPicker);

    updateColor();
});
