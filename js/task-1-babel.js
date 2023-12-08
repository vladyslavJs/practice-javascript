const colorPalette = document.querySelector(".color-palette");

const output = document.querySelector(".output");

colorPalette.addEventListener("click", selectColor);

//

function selectColor(event) {
    if (event.target.nodeName !== "BUTTON") {
        alert`Oops... Sorry. Try again`;  
    }

    const selectedColor = event.target.dataset.color;
    output.textContent = `Selected color: ${selectedColor}`;
    output.style.color = selectedColor;
}
//
createPaletteItems();

function createPaletteItems() {
    const items = [];
    for (let i = 0; i < 60; i++) {
        const color = getRandomHexColor();
        const item = document.createElement("button");
        item.type = "button";
        item.dataset.color = color;
        item.style.backgroundColor = color;
        item.classList.add("item");
        item.style.border = "1px solid #808080";
        items.push(item);
    }
    colorPalette.append(...items);
}

function getRandomHexColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}






