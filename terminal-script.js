// --- Configuration & Data ---
const skillsData = [
    {
        name: "Web Design & Web App Development",
        category: "Web",
        level: "90%",
        snippet: `<span class="comment">&lt;!-- Modern, responsive websites --&gt;</span>\n<span class="keyword">&lt;div <span class="variable">class</span>=<span class="string">"card"</span>&gt;</span>\n  <span class="keyword">&lt;h2&gt;</span>My Project<span class="keyword">&lt;/h2&gt;</span>\n  <span class="keyword">&lt;p&gt;</span>Built with HTML, CSS, JS, and WordPress.<span class="keyword">&lt;/p&gt;</span>\n<span class="keyword">&lt;/div&gt;</span>`
    },
    {
        name: "Desktop Development",
        category: "Software",
        level: "85%",
        snippet: `<span class="comment"># Building multi-purpose desktop apps with Python</span>\n<span class="keyword">import</span> tkinter <span class="keyword">as</span> tk\n<span class="variable">window</span> = tk.<span class="function">Tk</span>()\n<span class="variable">window</span>.<span class="function">title</span>(<span class="string">"My App"</span>)\n<span class="variable">label</span> = tk.<span class="function">Label</span>(<span class="variable">text</span>=<span class="string">"Hello, GUI!"</span>)\n<span class="variable">label</span>.<span class="function">pack</span>()`
    },
    {
        name: "Bot Development",
        category: "Programming",
        level: "80%",
        snippet: `<span class="comment"># Designing smart Telegram/Discord bots</span>\n<span class="keyword">def</span> <span class="function">start</span>(<span class="variable">update</span>, <span class="variable">context</span>):\n    <span class="variable">context</span>.<span class="variable">bot</span>.<span class="function">send_message</span>(\n        <span class="variable">chat_id</span>=<span class="variable">update</span>.<span class="variable">effective_chat</span>.<span class="variable">id</span>,\n        <span class="variable">text</span>=<span class="string">"I'm a bot, please talk to me!"</span>\n    )`
    },
    {
        name: "Graphic Design",
        category: "Design",
        level: "75%",
        snippet: `<span class="comment">/* Creating visual identities with Photoshop & Illustrator */</span>\n<span class="comment">// From logos and posters to digital banners.</span>\n<span class="variable">.logo</span> {\n  <span class="keyword">font-family</span>: <span class="string">'CustomFont'</span>, <span class="variable">sans-serif</span>;\n  <span class="keyword">color</span>: <span class="variable">#5A4FCF</span>;\n}`
    },
    {
        name: "UI/UX Design",
        category: "Design",
        level: "70%",
        snippet: `<span class="comment">// Designing user-centric interfaces with Figma</span>\n<span class="variable">const</span> <span class="variable">userFlow</span> = [\n  <span class="string">'Onboarding'</span>,\n  <span class="string">'Dashboard'</span>,\n  <span class="string">'Create Project'</span>,\n  <span class="string">'Checkout'</span>\n];`
    },
    {
        name: "Video Editing",
        category: "Content",
        level: "65%",
        snippet: `<span class="comment">&lt;!-- Editing with Adobe Premiere Pro & After Effects --&gt;</span>\n<span class="keyword">&lt;Timeline&gt;</span>\n  <span class="keyword">&lt;Clip <span class="variable">src</span>=<span class="string">"intro.mp4"</span> /&gt;</span>\n  <span class="keyword">&lt;Transition <span class="variable">type</span>=<span class="string">"crossfade"</span> /&gt;</span>\n  <span class="keyword">&lt;Clip <span class="variable">src</span>=<span class="string">"main.mp4"</span> /&gt;</span>\n<span class="keyword">&lt;/Timeline&gt;</span>`
    },
    {
        name: "Security & Networking",
        category: "IT",
        level: "55%",
        snippet: `<span class="prompt">kali@kali:~$</span> <span class="command">nmap -sV 192.168.1.1</span>\n<span class="output">Starting Nmap...</span>\n<span class="output">...</span>`
    }
];

const welcomeText = `
<span class="prompt">RastinAlizadeh $</span> <span class="command">./initialize_profile.sh</span>
<div class="output">
Initializing Rastin Alizadeh's Interactive Resume... DONE
Booting kernel... OK
Loading modules...
  [OK] core/bio_loader
  [OK] skills/multi_lang_interpreter
  [OK] experience/timeline_parser
  [OK] contact/data_formatter
All systems go. Welcome!
</div>
<br>
<span class="prompt">RastinAlizadeh $</span> <span class="command">echo "Welcome to my interactive resume!"</span>
<div class="output">
Welcome to my interactive resume!
I'm Rastin Alizadeh, a Developer, Designer, and Content Creator passionate about turning
challenges into creative solutions.
<br>
Navigate using the tabs above to explore:
- <span class="command">about_me.py</span>: Learn more about my background and motivations.
- <span class="command">skills_showcase.js</span>: Discover my technical capabilities.
- <span class="command">experience.log</span>: Review my professional journey.
- <span class="command">contact.json</span>: Find out how to get in touch.
</div>
<br>
<span class="prompt">RastinAlizadeh $</span> <span class="typed-text"></span>
`;


// --- DOM Elements ---
const tabs = document.querySelectorAll('.ide-tab');
const sections = document.querySelectorAll('.terminal-content .section');
const terminalContent = document.getElementById('terminalContent');
const bootSequenceContainer = document.getElementById('bootSequence');
const homeSectionContent = document.getElementById('home');
const skillsSidebar = document.getElementById('skillsSidebar');
const skillsListForSidebar = document.getElementById('skillsListForSidebar');
const skillDetailView = document.getElementById('skillDetailView');


// --- Functions ---

// Typing animation function
function typeText(element, text, speed, callback) {
    let i = 0;
    element.innerHTML = ""; // Clear previous content
    const typingInterval = setInterval(() => {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            terminalContent.scrollTop = terminalContent.scrollHeight; // Auto-scroll
        } else {
            clearInterval(typingInterval);
            if (callback) callback();
        }
    }, speed);
}

// Boot sequence animation
function runBootSequence() {
    const bootTextContainer = bootSequenceContainer.querySelector('div');
    const lines = [
        "INIT: Bootloader v1.2.0",
        "MEMCHK: 2048MB RAM detected... OK",
        "CPU: Quantum Entanglement Processor @ 5.0 GHz (Simulated)",
        "LOADING CORE SYSTEM...",
        "[CORE] Kernel_MK_v2.5 initializing...",
        "[CORE] Mounting /dev/resume_data...",
        "[CORE] Filesystem check... OK",
        "LOADING MODULES:",
        "  [MOD] ui_interface_terminal.mod... LOADED",
        "  [MOD] content_parser_dynamic.mod... LOADED",
        "  [MOD] animation_engine_vfx.mod... LOADED",
        "SYSTEM READY. Awaiting user interaction.",
        "Welcome, guest. Type 'help' for commands (or use tabs).",
        " ",
        "Rastin Alizadeh - Interactive Resume [Version 1.0.0]",
        "(c) 2026 Rastin Alizadeh. All rights reserved.",
        " ",
        "Starting UI..."
    ];
    let lineIndex = 0;
    bootTextContainer.innerHTML = ""; // Clear previous content

    function typeBootLine() {
        if (lineIndex < lines.length) {
            const p = document.createElement('p');
            bootTextContainer.appendChild(p);
            typeText(p, lines[lineIndex], 20, () => { // Faster typing for boot
                lineIndex++;
                bootSequenceContainer.scrollTop = bootSequenceContainer.scrollHeight;
                setTimeout(typeBootLine, lines[lineIndex-1] === " " ? 50 : 100); // Pause for empty lines or short delay
            });
        } else {
            // Boot sequence finished
            setTimeout(() => {
                bootSequenceContainer.style.display = 'none';
                document.getElementById('home').classList.add('active'); // Show home section
                // Start typing welcome message in home section
                const typedTextElement = homeSectionContent.querySelector('.typed-text') || document.createElement('span');
                if (!homeSectionContent.querySelector('.typed-text')) {
                     typedTextElement.className = 'typed-text'; // Ensure it has the class for the cursor
                }
                // Clear existing content and append the structure for typing
                homeSectionContent.innerHTML = welcomeText.replace('<span class="typed-text"></span>', ''); // Remove placeholder
                homeSectionContent.insertAdjacentHTML('beforeend', '<span class="prompt">RastinAlizadeh $ </span><span class="typed-text"></span>');

                const actualTypedElement = homeSectionContent.querySelector('.typed-text');
                typeText(actualTypedElement, "cat README.md", 50, () => {
                    actualTypedElement.style.borderRight = 'none'; // Remove cursor after typing command
                    // Simulate command output
                    const outputDiv = document.createElement('div');
                    outputDiv.className = 'output';
                    outputDiv.innerHTML = welcomeText.substring(welcomeText.indexOf('<div class="output">')); // Get the rest of the welcome message
                    homeSectionContent.innerHTML = welcomeText; // Set the full welcome text directly for proper HTML rendering
                    terminalContent.scrollTop = terminalContent.scrollHeight;
                });

            }, 500);
        }
    }
    typeBootLine();
}


// Function to switch tabs
function switchTab(targetId) {
    // Hide all sections
    sections.forEach(section => section.classList.remove('active'));
    // Show target section
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
        targetSection.classList.add('active');
    }

    // Update active tab style
    tabs.forEach(tab => {
        tab.classList.remove('active');
        if (tab.dataset.target === targetId) {
            tab.classList.add('active');
        }
    });

    // Show/hide skills sidebar
    if (targetId === 'skills') {
        skillsSidebar.style.display = 'block';
    } else {
        skillsSidebar.style.display = 'none';
    }
    terminalContent.scrollTop = 0; // Scroll to top of new section
}

// Populate skills sidebar and handle clicks
function populateSkills() {
    const skillsListContainer = document.getElementById('skillsList');
    skillsListContainer.innerHTML = ''; // Clear existing
    skillsData.forEach(skill => {
        // For the main skills list
        const li = document.createElement('li');
        li.className = 'skills-item';
        li.innerHTML = `
            <div class="title-wrapper">
                <h5 class="h5">${skill.name}</h5>
                <data value="${skill.level.replace('%','')}">${skill.level}</data>
            </div>
            <div class="skill-progress-bg">
                <div class="skill-progress-fill" style="width: ${skill.level};"></div>
            </div>
        `;
        skillsListContainer.appendChild(li);

        // For the sidebar
        const sidebarLi = document.createElement('li');
        sidebarLi.textContent = skill.name;
        sidebarLi.dataset.skillName = skill.name;
        sidebarLi.onclick = () => displaySkillDetail(skill.name);
        skillsListForSidebar.appendChild(sidebarLi);
    });
}

// Display skill detail
function displaySkillDetail(skillName) {
    const skill = skillsData.find(s => s.name === skillName);
    if (skill) {
        skillDetailView.innerHTML = `
            <h3>// ${skill.name} (${skill.category})</h3>
            <div class="code-block">
                <pre>${skill.snippet.trim()}</pre>
            </div>
        `;
         // Highlight active skill in sidebar
        document.querySelectorAll('#skillsListForSidebar li').forEach(li => {
            li.classList.remove('active-skill');
            if (li.dataset.skillName === skillName) {
                li.classList.add('active-skill');
            }
        });
    }
     terminalContent.scrollTop = terminalContent.scrollHeight; // Scroll to bottom to ensure visibility
}

// --- Event Listeners ---
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        switchTab(tab.dataset.target);
    });
});

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    runBootSequence(); // Start with boot sequence
    populateSkills();
    // Initially, no tab is "active" in JS logic until boot sequence completes
    // The 'home' tab is visually active by default in HTML.
});