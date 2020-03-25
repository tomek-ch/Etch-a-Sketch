let currentColor = 'black';
const paint = div => () => div.style.background = currentColor;

function attachListeners(div) {
    div.addEventListener('mouseover', () => {if (mouse) paint(div)()});
    div.addEventListener('click', paint(div));
    div.addEventListener('mousedown', paint(div));
}

let size = 32;

function makeGrid(size) {
    document.querySelector('#canvas').innerHTML = '';
    for (let i = 0; i < size * size; i++) {
        let div = document.createElement('div');
        div.style.cssText = `width: ${320 / size}px; height: ${320 / size}px;`;
        document.querySelector('#canvas').appendChild(div);
        attachListeners(div);
    }
}

makeGrid(32);

//check if mouse button is pressed down, remove default browser drag & drop behavior
let mouse = 0;
document.body.onmousedown = () => mouse++;
document.body.onmouseup = () => mouse--;
document.body.ondragstart = () => false;
document.body.ondragdrop = () => false;


let colors = ['Pink', 'LightPink', 'HotPink', 'DeepPink', 'PaleVioletRed', 'MediumVioletRed', 'LightSalmon', 'Salmon', 'DarkSalmon', 'LightCoral', 'IndianRed', 'Crimson', 'Firebrick', 'DarkRed', 'Red', 'OrangeRed', 'Tomato', 'Coral', 'DarkOrange', 'Orange', 'Yellow', 'LightYellow', 'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Khaki', 'DarkKhaki', 'Gold', 'Cornsilk', 'BlanchedAlmond', 'Bisque', 'NavajoWhite', 'Wheat', 'Burlywood', 'Tan', 'RosyBrown', 'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru', 'Chocolate', 'SaddleBrown', 'Sienna', 'Brown', 'Maroon', 'DarkOliveGreen', 'Olive', 'OliveDrab', 'YellowGreen', 'LimeGreen', 'Lime', 'LawnGreen', 'Chartreuse', 'GreenYellow', 'SpringGreen', 'MediumSpringGreen', 'LightGreen', 'PaleGreen', 'DarkSeaGreen', 'MediumAquamarine', 'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'Aqua', 'Cyan', 'LightCyan', 'PaleTurquoise', 'Aquamarine', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'LightSteelBlue', 'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue', 'DeepSkyBlue', 'DodgerBlue', 'CornflowerBlue', 'SteelBlue', 'RoyalBlue', 'Blue', 'MediumBlue', 'DarkBlue', 'Navy', 'MidnightBlue', 'Lavender', 'Thistle', 'Plum', 'Violet', 'Orchid', 'Fuchsia', 'Magenta', 'MediumOrchid', 'MediumPurple', 'BlueViolet', 'DarkViolet', 'DarkOrchid', 'DarkMagenta', 'Purple', 'Indigo', 'DarkSlateBlue', 'SlateBlue', 'MediumSlateBlue', 'White', 'Snow', 'Honeydew', 'MintCream', 'Azure', 'AliceBlue', 'GhostWhite', 'WhiteSmoke', 'Seashell', 'Beige', 'OldLace', 'FloralWhite', 'Ivory', 'AntiqueWhite', 'Linen', 'LavenderBlush', 'MistyRose', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray', 'DimGray', 'LightSlateGray', 'SlateGray', 'DarkSlateGray', 'Black'];

//create color palette
for (let color of colors) {
    const xd = document.createElement('figure');
    xd.style.background = color;
    xd.addEventListener('click', () => currentColor = color);
    document.querySelector('#palette').appendChild(xd);
}

document.querySelector('button').addEventListener('click', () => {
    size = prompt('Select size', 32);
    makeGrid(size);
})