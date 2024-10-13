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

    wait(1000).then(() => {
        typePrompt('mkdir About Contact');
    });
}

function wait(tijdInMs) {
    return new Promise((resolve) => {
        setTimeout(resolve, tijdInMs);
    });
}

type();




