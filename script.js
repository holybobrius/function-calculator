const input = document.querySelector('.input-n');
const output = document.querySelector('.result');
const button = document.querySelector('.submit');

function calculate(x) {
    let rslt = Math.pow(x, 3) / Math.pow((x-4), 2);
    output.innerHTML = `f(${x}) = ${rslt}`;
}

button.addEventListener('click', () => {
    let number = input.value;
    calculate(number);
})
