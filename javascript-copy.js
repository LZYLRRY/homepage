let TERMINAL_TEXT;
let typingSpeed = 200; // Speed in milliseconds

function typeTerminal(terminalInput, terminalText) {
    return new Promise((resolve) => {
        TERMINAL_TEXT = terminalInput;
        terminalText.textContent = ''; // Clear any existing content for this line
        let i = 0;

        function typeChar() {
            if (i < TERMINAL_TEXT.length) {
                terminalText.textContent += TERMINAL_TEXT.charAt(i); // Append one character
                i++;
                setTimeout(typeChar, typingSpeed); // Call the function again after delay
            } else {
                resolve(); // When typing is done, resolve the promise
            }
        }

        typeChar(); // Start the typing effect
    });
}

async function main() {
    let terminal = document.querySelector('.terminal');

    // Set the initial terminal prompt
    terminal.innerHTML = 'laurens-verhagen@webdeveloper:~$ ';

    // Create a new span element for the typing effect
    let terminalText = document.createElement('span');
    terminalText.classList.add('terminal-text');
    terminal.appendChild(terminalText); // Append the typing element to terminal

    // Wait for typeTerminal to finish typing 'pwd'
    await typeTerminal('pwd', terminalText);

    // Append the next output '/home/laurens-verhagen' on a new line
    let output1 = document.createElement('div');
    output1.classList.add('terminal-text');
    output1.textContent = '/home/laurens-verhagen';
    terminal.appendChild(output1); // Append output to terminal

    // Add a custom new prompt (with different text)
    let newPrompt = document.createElement('div');
    newPrompt.innerHTML = 'custom-prompt@different-directory:~$ ';
    terminal.appendChild(newPrompt); // Append new prompt

    // Create a new span for typing the next command (e.g., 'ls')
    terminalText = document.createElement('span'); // Create new span for next command
    terminalText.classList.add('terminal-text');
    newPrompt.appendChild(terminalText); // Append it to the new prompt

    // Wait for the next command 'ls' to be typed
    await typeTerminal('ls', terminalText);

    // Append the output of 'ls' command on a new line (e.g., 'file1 file2 file3')
    let output3 = document.createElement('div');
    output3.classList.add('terminal-text');
    output3.textContent = 'file1 file2 file3';
    terminal.appendChild(output3); // Append output to terminal

    // Add another custom prompt (if needed)
    let finalPrompt = document.createElement('div');
    finalPrompt.innerHTML = 'another-custom-prompt@yet-another-dir:~$ ';
    terminal.appendChild(finalPrompt); // Append final prompt
}

// Run the main function
main();

// NEW CHAT GPT CODE !!

// Main container declaration
const container = document.querySelector('.container');

// Create element declaration
const div1 = document.createElement('div');
const span1 = document.createElement('span');

// Class declaration
const classPrompt = 'prompt';
const classCommand = 'command';

// Add div1
div1.classList.add(classPrompt);
div1.textContent = 'laurens-verhagen@webdeveloper:~$ ';
container.appendChild(div1);

// Add span1
span1.classList.add(classCommand);
div1.appendChild(span1);

// Function typing with Promise
function typePrompt(prompt) {
    return new Promise((resolve) => {
        let i = 0;
        // Select last span element
        const lastSpan = container.lastElementChild.querySelector('span');

        function typeChar() {
            if (i < prompt.length) {
                lastSpan.textContent += prompt.charAt(i);
                i++;
                setTimeout(typeChar, 200); // Delay for typing effect
            } else {
                resolve(); // Resolve the promise when typing is done
            }
        }

        typeChar();
    });
}

// Async function to manage sequential typing
async function runTyping() {
    await typePrompt('pwd');

    const div2 = document.createElement('div');
    const span2 = document.createElement('span');

    // Add div2
    div2.classList.add(classPrompt);
    div2.textContent = 'laurens-verhagen@webdeveloper:~$ ';
    container.appendChild(div2);

    // Add span2
    span2.classList.add(classCommand);
    div2.appendChild(span2);

    wait(2000).then(() => {
        typePrompt('mkdir About Contact');
    });
}

// Start the typing sequence
runTyping();

