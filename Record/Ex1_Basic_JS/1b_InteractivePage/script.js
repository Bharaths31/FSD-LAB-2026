// Display user input in the output div
document.getElementById('displayBtn').addEventListener('click', function () {
    const input = document.getElementById('userInput').value;
    const output = document.getElementById('output');
    if (input.trim() !== '') {
        output.textContent = input;
    } else {
        output.textContent = 'Please enter some text!';
    }
});

// Change background color
document.querySelectorAll('.color-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
        document.body.style.backgroundColor = this.getAttribute('data-color');
    });
});

// Counter functionality
let count = 0;
const counterDisplay = document.getElementById('counterValue');

document.getElementById('incrementBtn').addEventListener('click', function () {
    count++;
    counterDisplay.textContent = count;
});

document.getElementById('decrementBtn').addEventListener('click', function () {
    count--;
    counterDisplay.textContent = count;
});
