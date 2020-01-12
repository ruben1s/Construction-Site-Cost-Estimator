const asphault = 140;
const ton = 2000;

let width = document.getElementById("width");
let length = document.getElementById("length");
let depth = document.getElementById("depth");
let materialDropdown = document.getElementById("myDropdown");
let option = getVal;

if (option) {
    option = asphault;
}

function getVal() {
    option = materialDropdown.options[materialDropdown.selectedIndex].value;
}

function calculateInput() {
    let wid = parseFloat(width.value);
    let len = parseFloat(length.value);
    let dep = parseFloat(depth.value);
    let opt = option;

    if (wid >= 0 && len >= 0 && dep >= 0) {
    let volume = wid * len * dep;
    let total = (volume * opt) / ton;
    total = parseFloat(total).toFixed(2);
    
    let newText = `The total weight is ${total} tons for the project.`;
    h1 = document.getElementById("results");
    h1.innerHTML = newText;
    } else {
        alert('Please enter values greater than 0.');
    }
}



const calculateEventHandler = calculateBtn.addEventListener('click', calculateInput);

const selectedInputEventHandler = materialDropdown.addEventListener('click', getVal);
