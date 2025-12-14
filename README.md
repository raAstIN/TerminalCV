# TerminalCV

A simple and interactive CV/resume website with a terminal theme. This project uses HTML, CSS, and vanilla JavaScript to create a simulated terminal interface where you can display your professional information.

## Features

-   **Interactive Terminal:** A CLI-style interface to navigate your resume.
-   **Typewriter Effect:** Text appears with a typing animation for a more dynamic feel.
-   **Simple Command System:** Pre-defined commands to show different sections of your CV (e.g., `about`, `skills`, `projects`, `contact`).
-   **Easy to Customize:** All CV data is stored in the JavaScript file, making it easy to update.
-   **Responsive Design:** Looks great on different screen sizes.

## Project Structure

```
.
├── index.html          # The main HTML file
├── terminal-style.css  # All the styles for the terminal
├── terminal-script.js  # The core JavaScript for terminal logic and CV data
└── README.md           # This file
```

## Getting Started

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/TerminalCV.git
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd TerminalCV
    ```
3.  **Open `index.html` in your web browser.**
    You can do this by double-clicking the file or by using a live server extension in your code editor.

## Customization

To make this your own CV, you'll primarily need to edit the `terminal-script.js` file.

1.  **Open `terminal-script.js`**.
2.  **Update Commands and Output:** Inside the `commands` object, you can change the text that each command (`help`, `about`, `skills`, etc.) will display. Add your own information here.
    ```javascript
    const commands = {
        help: `
            <p>Available commands:</p>
            <ul class="help-list">
                <li>'about' - Who I am</li>
                <li>'skills' - My skills</li>
                <li>'projects' - My projects</li>
                <li>'contact' - How to contact me</li>
                <li>'clear' - Clear the terminal</li>
            </ul>
        `,
        about: '...Your about me text here...',
        skills: '...Your skills list here...',
        // ... and so on
    };
    ```
3.  **(Optional) Modify Styles:** Open `terminal-style.css` to change colors, fonts, spacing, or anything else related to the visual appearance of the terminal.


