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

// Function typing
function typePrompt(prompt) {
    return new Promise((resolve) => {

        let i = 0;
        // Select last span element
        const lastSpan = container.lastElementChild.querySelector('span');

        typeChar();

        function typeChar() {
            if (i < prompt.length) {
                lastSpan.textContent += prompt.charAt(i);
                i++;
                setTimeout(typeChar, 125); // Delay for typing effect
            } else {
                resolve();
            }
        };
    }
    );
};

async function type() {
    await typePrompt('pwd');

    const div2 = document.createElement('div');
    div2.classList.add(classCommand);
    div2.textContent = '/home/laurens-verhagen';
    container.appendChild(div2);

    const div3 = document.createElement('div');
    div3.classList.add(classPrompt);
    div3.textContent = 'laurens-verhagen@webdeveloper:~$ '
    container.appendChild(div3);

    const span3 = document.createElement('span');
    span3.classList.add(classCommand);
    div3.appendChild(span3);

    await wait(1000);
    await typePrompt('mkdir About Contact');

    createFolders();
}

function wait(tijdInMs) {
    return new Promise((resolve) => {
        setTimeout(resolve, tijdInMs);
    });
}

function createFolders() {
    const folderNames = ['About', 'Contact'];

    folderNames.forEach(folderName => {
        // Create a new div for the folder
        const folderDiv = document.createElement('div');
        folderDiv.classList.add('folder');

        // Create SVG for the folder icon
        folderDiv.innerHTML = `
            <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 4H2V20H22V8H12L10 4Z" fill="#FFD700" stroke="black" stroke-width="2"/>
            </svg>
            <span>${folderName}</span>
        `;

        // Append the folder div to the container
        container.appendChild(folderDiv);

        // Add a click event listener if needed
        folderDiv.addEventListener('click', () => {
            console.log(`${folderName} folder clicked!`);
        });
    });
}

type();




