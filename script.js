const asphault = 140;
const dirt = 100;
const sand = 125;
const ton = 2000;

let width = document.getElementById("width").value;
let length = document.getElementById("length").value;
let depth = document.getElementById("depth").value;

const calculateBtn = document.getElementById('calculateBtn');
const calculate = () => {
    let volume = width * length * depth;
    let total = (volume * asphault) / ton;
    console.log(`The total cost is \$${total} for the project.`);
}

const calculateEventHandler = calculateBtn.addEventListener('click', calculate);

