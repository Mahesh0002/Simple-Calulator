let fullInput = ''; // Variable to store the full input
const MAX_DISPLAY_LENGTH = 10; // Set the maximum length for the display

function appendToDisplay(value) {
    const display = document.getElementById('display');
    fullInput += value; // Append the value to the full input
    display.value = fullInput.slice(-MAX_DISPLAY_LENGTH); // Show only the rightmost part
    display.scrollLeft = display.scrollWidth; // Scroll to the end of the display
}

function clearDisplay() {
    fullInput = ''; // Clear the full input
    document.getElementById('display').value = ''; // Clear the display
}

function backspace() {
    const display = document.getElementById('display');
    fullInput = fullInput.slice(0, -1); // Remove the last character from full input
    display.value = fullInput.slice(-MAX_DISPLAY_LENGTH); // Update the display
    display.scrollLeft = display.scrollWidth; // Scroll to the end of the display
}

function calculate() {
    const display = document.getElementById('display');
    try {
        const result = eval(fullInput.replace('×', '*')); // Use full input for calculation
        display.value = result.toString(); // Convert result to string for display
        if (display.value.length > MAX_DISPLAY_LENGTH) {
            display.value = display.value.slice(-MAX_DISPLAY_LENGTH); // Show only the rightmost part
        }
        display.scrollLeft = display.scrollWidth; // Scroll to the end of the display
    } catch (error) {
        display.value = 'Error';
    }
}
function scrollLeft() {
    const display = document.getElementById('display');
    const currentLength = fullInput.length;

    // If the full input is longer than the maximum display length
    if (currentLength > MAX_DISPLAY_LENGTH) {
        // Shift the display to the left by one character
        display.value = fullInput.slice(-MAX_DISPLAY_LENGTH - 1, currentLength);
        display.scrollLeft = display.scrollWidth; // Scroll to the end
    }
}