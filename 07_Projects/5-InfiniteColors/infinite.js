// Get references to elements
const body = document.body;
const h1Element = document.querySelector('h1');
const buttons = document.querySelectorAll('button');

let intervalId = null; // Initialize intervalId to null

// Function to generate a random color
const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

// Function to change background color and text/button color
const changeColors = () => {
    const randomColor = getRandomColor();
    body.style.backgroundColor = randomColor;
    h1Element.style.color = getRandomColor(); // Change heading text color
    buttons.forEach(button => {
        button.style.backgroundColor = getRandomColor(); // Change button background color
        button.style.color = getRandomColor(); // Change button text color
    });
};

// Start button click event listener
document.getElementById('start').addEventListener('click', () => {
    if (intervalId === null) { // Check if intervalId is null
        changeColors(); // Change colors immediately
        intervalId = setInterval(changeColors, 2000); // Start interval for changing colors every 2 seconds
    }
});

// Stop button click event listener
document.getElementById('stop').addEventListener('click', () => {
    if (intervalId !== null) { // Check if intervalId is not null
        clearInterval(intervalId); // Clear interval immediately
        intervalId = null; // Reset intervalId to null
        body.style.backgroundColor = '#ffffff'; // Reset background color to white
        h1Element.style.color = '#000000'; // Reset heading text color to black
        buttons.forEach(button => {
            button.style.backgroundColor = '#ff69b4'; // Reset button background color
            button.style.color = '#fff'; // Reset button text color
        });
    }
});
