const music = document.getElementById('background-music');
const playBtn = document.getElementById('play-btn');
const pauseBtn = document.getElementById('pause-btn');

playBtn.addEventListener('click', () => {
    music.play();
});

pauseBtn.addEventListener('click', () => {
    music.pause();
});

function startQuiz(){
    const username = document.getElementById("username").value;
    const avatarInput = document.getElementById("avatar");
    const avatarFile = avatarInput.files[0];

    if (!username || ! avatarFile) {
        alert("Please enter a username and upload an avatar.");
        return;
    }

    document.getElementById("sign-in-container").style.display = "none";
    document.getElementById("quiz-container").style.display = "block";
    document.getElementById("user-info").style.display = "flex";
    document.getElementById("user-name").textContent = username;
    const avatarURL = URL.createObjectURL(avatarFile);
    document.getElementById("user-avatar").src = avatarURL;
}


const levels = [
    [
        { question: "1. Which component is the brain of a computer?", answers: ["CPU", "Hard Disk", "Motherboard", "RAM"], correctAnswer: 0 },
        { question: "2. What does RAM stand for?", answers: ["Random Access Memory", "Read Access Memory", "Rapid Access Memory", "None of the above"], correctAnswer: 0 },
        { question: "3. Which device is primarily used for data storage?", answers: ["Hard Disk", "Keyboard", "Monitor", "Printer"], correctAnswer: 0 },
        { question: "4. What type of software is used for word processing?", answers: ["Application Software", "Operating System", "Utility Software", "Device Driver"], correctAnswer: 0 },
        { question: "5. Which of the following is an input device?", answers: ["Keyboard", "Speaker", "Printer", "Monitor"], correctAnswer: 0 },
        { question: "6. Which language is primarily used for web development?", answers: ["HTML", "C++", "Java", "Python"], correctAnswer: 0 },
        { question: "7. What is the function of an operating system?", answers: ["To serve as an interface between users and the computer", "Both B and C", "To create documents", "To manage hardware and software resources"], correctAnswer: 0 },
        { question: "8. Which of these is not a type of a computer?", answers: ["Robot", "Desktop", "Laptop", "Tablet"], correctAnswer: 0 },
        { question: "9. Which company developed Windows OS?", answers: ["Microsoft", "Apple", "IBM", "Google"], correctAnswer: 0 },
        { question: "10. What does GUI stand for?", answers: ["Graphic User Interface", "General User Interface", "Guided User Interface", "Generalized User Interface"], correctAnswer: 0 },
        { question: "11. Which of the following is volatile Memory?", answers: ["RAM", "Flash Drive", "ROM", "SSD"], correctAnswer: 0 },
        { question: "12. Which of these is not a programming Language?", answers: ["HTML", "Java", "Javascript", "Python"], correctAnswer: 0 },
        { question: "13. Which device connects a computer to a network?", answers: ["Network Interface Card", "Graphics Card", "Sound Card", "Printer"], correctAnswer: 0 },
        { question: "14. What is a common use of spreadsheets?", answers: ["Managing data and calculations", "Sending Emails", "Editing photos", "Accessing the internet"], correctAnswer: 0 },
        { question: "15. Which of the following is an example of a mobile operating system?", answers: ["Android", "Linux", "macOS", "Windows 10"], correctAnswer: 0 },
        { question: "16. Which of the following stores the BIOS?", answers: ["ROM", "Hard Disk", "Flash Drive", "RAM"], correctAnswer: 0 },
        { question: "17. Which programming language is best for Artificial Intelligence?", answers: ["Python", "HTML", "CSS", "PHP"], correctAnswer: 0 },
        { question: "18. Which of these is a text-based user interface?", answers: ["Command Line Interface", "Desktop", "Mouse", "GUI"], correctAnswer: 0 },
        { question: "19. What is the function of a router?", answers: ["Forward data packets between networks", "Process data", "Display information", "Store Information"], correctAnswer: 0 },
        { question: "20. Which of these is considered secondary storage?", answers: ["Hard Disk", "CPU", "Cache", "RAM"], correctAnswer: 0 },
        { question: "21. What does 'WWW' stand for in a website?", answers: ["World Wide Web", "Web World Wide", "Wide World Web", "World Web Wide"], correctAnswer: 0 }
    ],
    [
        { question: "1. CSS stands for?", answers: ["Cascading Style Sheets", "Colorful Style Sheets", "Computer Style Sheets"], correctAnswer: 0 },
        { question: "2. Which of the following is an input device?", answers: ["Keyboard", "Speaker", "Monitor"], correctAnswer: 0 },
        { question: "3. What is the primary function of Ram in a computer?", answers: ["Temporary storage for active process", "Storing data permanently", "Cooling the system"], correctAnswer: 0 },
        { question: "4. Which of the following is an example of software?", answers: ["Operating System", "Keyboard", "Monitor"], correctAnswer: 0 },
        { question: "5. What does URL stand for?", answers: ["Uniform Resource Locator", "Uniform Routing Link", "Universal Research Locator"], correctAnswer: 0 },
        { question: "6. Which of these is the smallest unit of data in computing?", answers: ["Bit", "Byte", "Megabyte"], correctAnswer: 0 },
        { question: "7. The part of the computer that executes instructions is called the:", answers: ["Processor", "Hard Drive", "Motherboard"], correctAnswer: 0 },
        { question: "8. What type of memory is volatile?", answers: ["ROM", "Cache", "RAM"], correctAnswer: 0 },
        { question: "9. What does GUI stand for?", answers: ["Graphical User Interface", "General User Interface", "Guided User Interface"], correctAnswer: 0 },
        { question: "10. Which of the following is not an operating system?", answers: ["Microsoft Office", "macOS", "Linux"], correctAnswer: 0 },
        { question: "11. Which of the following is not a type of computer network?", answers: ["CPU", "MAN", "WAN"], correctAnswer: 0 },
        { question: "12. In binary code, what does the digit '1' represent?", answers: ["On state", "Error", "Restart"], correctAnswer: 0 },
        { question: "13. What is the function of a router in networking?", answers: ["Forwarding Data packets between networks", "Securing Data", "Formatting Hard drives"], correctAnswer: 0 },
        { question: "14. Which protocal is used to send emails?", answers: ["SMTP", "HTTP", "FTP"], correctAnswer: 0 },
        { question: "15. What does IP stand for in IP address?", answers: ["Internet Protocal", "Internal Protocol", "Information Processor"], correctAnswer: 0 },
        { question: "16. Which of the following is an example of cloud storage?", answers: ["Google Drive", "USB Drive", "CD-ROM"], correctAnswer: 0 },
        { question: "17. The speed of a processor is typically measured in?", answers: ["Gigahertz", "Amperes", "Volts"], correctAnswer: 0 },
        { question: "18. What is the name of the malicious software that replicates itself?", answers: ["Virus", "Worm", "Spyware"], correctAnswer: 0 },
        { question: "19. What does DNS stand for?", answers: ["Domain Name System", "Digital Name Service", "Data Network System"], correctAnswer: 0 },
        { question: "20. Which of the following is an example of open-source software?", answers: ["Linux", "Adobe Photoshop", "Microsoft Word"], correctAnswer: 0 },
        { question: "21. What is the purpose of a firewall in computing?", answers: ["To protect a network from unauthorised access", "To store data", "To backup files"], correctAnswer: 0 },
        { question: "22. What is the primary purpose of virtualization in IT?", answers: ["Creating virtual versions of physical resources", "Encrypitng data", "Printing documents"], correctAnswer: 0 },
        { question: "23. In relational databases, what is a primary key?", answers: ["A unique identifier for a record", "A secondary storage device", "A table's title"], correctAnswer: 0 },
        { question: "24. What is the function of a BIOS in a computer?", answers: ["Initiating hardware during the booting process", "Managing the operating System", "Storing data permanently"], correctAnswer: 0 },
        { question: "25. What is Moore's Law about?", answers: ["The number of transistors on a microchip doubles approximately every two years", "Computers will become absolete in ten years", "AI will surpass human intelligence"], correctAnswer: 0 },
        { question: "26. Which of these is a lossless compression format?", answers: ["PNG", "JPEG", "MP3"], correctAnswer: 0 },
        { question: "27. What is the term for encoding data to prevent unauthorized access?", answers: ["Encryption", "Authentication", "Decryption"], correctAnswer: 0 },
        { question: "28. What is the main function of a kernel in an operating system?", answers: ["Manage system resources and hardware communication", "Protect against viruses", "Display the user interface"], correctAnswer: 0 },
        { question: "29. What does SSL stand for in online security?", answers: ["Secure Sockets Layer", "Secure Software Link", "Server Secure Layer"], correctAnswer: 0 },
        { question: "30. What is the primary purpose of database management system?", answers: ["To store, retrieve, and manage data", "To format hard drives", "To manage Emails"], correctAnswer: 0 },
    ],
    [
        { question: "1. Which is a noun?", answers: ["Apple", "Walk", "Angry"], correctAnswer: 0 },
         { question: "2. Which is the correct plural form of 'child'?", answers: ["Children", "Childs", "Childes"], correctAnswer: 0 },
          { question: "3. Select the correct spelling?", answers: ["Receive", "Recieve", "Recive"], correctAnswer: 0 },
           { question: "4. What is the past tense of 'go'?", answers: ["Went", "Going", "Gone"], correctAnswer: 0 },
            { question: "5. Which word is a verb?", answers: ["Run", "Green", "Happy"], correctAnswer: 0 },
             { question: "6. Identify the adjective: 'The tall man walked slowly'.", answers: ["Tall", "Slowly", "Walked"], correctAnswer: 0 },
              { question: "7. What does the word 'their' signify in this sentence: 'They parked their car'?", answers: ["Ownership", "Possession", "Direction"], correctAnswer: 0 },
               { question: "8. Choose the correct Sentence:", answers: ["She doesn't like apples", "She don't like apples", "She don't likes apples"], correctAnswer: 0 },
                { question: "9. Which sentence is written in active voice?", answers: ["She wrote the letter", "The work has been completed", "The cake is being eaten"], correctAnswer: 0 },
                 { question: "10. Pick the correct word: 'He........the answer correctly'", answers: ["Knew", "Knowing", "Knows"], correctAnswer: 0 },
                  { question: "11. What type of clause is this? 'I will call you when i arrive'", answers: ["Dependent Clause", "Relative clause", "Independent clause"], correctAnswer: 0 },
                   { question: "12. Choose the correct idiom: 'Don't spill the beans' means:", answers: ["Don't reveal a secret", "Don't waste food", "Don't cook beens"], correctAnswer: 0 },
                    { question: "13. Which sentence uses a metaphor", answers: ["The world is a stage", "The cat slept under the tree", "He runs like a cheetah"], correctAnswer: 0 },
                     { question: "14. Select the correctly punctuated sentence:", answers: ["My friend, however, is late", "My friend however is late", "My friend however, is late"], correctAnswer: 0 },
                      { question: "15. What is the superlative form of happy?", answers: ["Happiest", "Happier", "Most happy"], correctAnswer: 0 },
                       { question: "16. Identify the part of speech of the word 'softly' in this sentence: 'She spoke softly'", answers: ["Adverb", "Verb", "Adjective"], correctAnswer: 0 },
                        { question: "17. Which of these is an example of a compound sentence?", answers: ["I went to the market, and i bought some fruits", "The boy who runs fast won the race", "He runs fast"], correctAnswer: 0 },
                         { question: "18. Find the 'synonym' of 'ambigous'?", answers: ["Vague", "Clear", "Simple"], correctAnswer: 0 },
                          { question: "19. Which is a gerund?", answers: ["Running", "Ran", "Runs"], correctAnswer: 0 },
                           { question: "20. Choose the correct word: 'This is the place........ I grew up?", answers: ["That", "Which", "Who"], correctAnswer: 0 },
                            { question: "21. Whar is the meaning of 'Irony'", answers: ["A contrast between expectation and reality", "A serious situation", "A form of exaggeration"], correctAnswer: 0 },
                             { question: "22. Pick the sentence with correct subject-verb agreement", answers: ["The group of students is ready", "The group of students are ready", "The group are ready"], correctAnswer: 0 },
                              { question: "23. Identify the correct sentence structure: 'Although it rained, we still went outside'.", answers: ["Complex sentence", "Compound sentence", "Simple Sentence"], correctAnswer: 0 },
                               { question: "What is a synonym for 'precarious'?", answers: ["Uncertain", "Secure", "Stable"], correctAnswer: 0 },
                                { question: "Choose the correct modal verb: 'You........submit the report tomorrow.'", answers: ["Must", "Can't", "Shouldn't"], correctAnswer: 0 },
                                 { question: "What is the term for a word that sounds the same but has different meaning?", answers: ["Homonym", "Acronym", "Antonym"], correctAnswer: 0 },
                                  { question: "Identify the error: 'If I was rich, I will travel the world.'", answers: ["Incorrect verb tense", "Missing punctuation", "Subject verb agreement"], correctAnswer: 0 },
                                   { question: "Choose the correct phrasal verb: 'He..........his work late at night.'", answers: ["Catches up on", "Turns off", "Gets off"], correctAnswer: 0 },
                                    { question: "What is euphemism?", answers: ["A mild expression for something unpleasant", "A formal announcement", "A harsh statement"], correctAnswer: 0 },
                                     { question: "What is the antecedent in this sentence? 'The boy who was playing lost his ball.'", answers: ["The boy", "Playing", "Lost"], correctAnswer: 0 }                                 
    ],
    [
        { question: "Which of the following is the brain of a computer?", answers: ["CPU", "Monitor", "Hard drive"], correctAnswer: 0 },
        { question: "Which device is used to input text into a computer?", answers: ["Keyboard", "Monitor", "Speaker"], correctAnswer: 0 },
        { question: "What does CPU stand for?", answers: ["Central Processing Unit", "Central Process Unit", "Computer Personal Unit"], correctAnswer: 0 },
        { question: "Which of these is a storage device?", answers: ["Hard disk", "Monitor", "Keyboard"], correctAnswer: 0 },
        { question: "Which key is used to erase characters to the left of the cursor?", answers: ["Backspace", "Tab", "Shift"], correctAnswer: 0 },
        { question: "Which type of software is an operating system?", answers: ["System software", "Application Software", "Utility Software"], correctAnswer: 0 },
        { question: "What does RAM stand for?", answers: ["Random Access Memory", "Remote Access Memory", "Read Access Memory"], correctAnswer: 0 },
        { question: "Which port is commonly used to connect a printer?", answers: ["USB", "HDMI", "VGA"], correctAnswer: 0 },
        { question: "What is the function of an operating system?", answers: ["To manage hardware and software resources", "To browse the internet", "To edit text documents"], correctAnswer: 0 },
        { question: "Which of these is NOT an input device?", answers: ["Monitor", "Scanner", "Microphone"], correctAnswer: 0 },
        { question: "What does 'IP' in IP address stand for?", answers: ["Internet Protocol", "Internet Provider", "Internet Position"], correctAnswer: 0 },
        { question: "Which memory is non-volatile and stores startup instructions?", answers: ["ROM", "RAM", "Cache"], correctAnswer: 0 },
        { question: "Which of these is an example of an open-source operating system?", answers: ["Linux", "iOS", "Windows"], correctAnswer: 0 },
        { question: "What is the smallest unit of data in a computer?", answers: ["Bit", "Byte", "Nibble"], correctAnswer: 0 },
        { question: "What does the term 'Booting' mean in computing?", answers: ["Starting up the computer", "Installing software", "Shutting down the computer"], correctAnswer: 0 },
        { question: "Which protocol is used for transferring files over the internet?", answers: ["FTP", "HTTP", "SMTP"], correctAnswer: 0 },
        { question: "What is the full form of BIOS?", answers: ["Basic Input Output System", "Binary Input Output System", "Binary Intergrated Operating System"], correctAnswer: 0 },
        { question: "What does ALU stand for in a computer system?", answers: ["Arithmetic Logic Unit", "Array Logical Unit", "Advanced Logical Unit"], correctAnswer: 0 },
        { question: "Which of these is a primary Memory device?", answers: ["RAM", "SSD", "Hard Drive"], correctAnswer: 0 },
        { question: "Which generation of computers used Intergrated Circuits?", answers: ["Third Generation", "Second Generation", "Fourth Generation"], correctAnswer: 0 },
        { question: "What does 'GUI' stand for?", answers: ["Graphical User Interface", "General User Interface", "General Unit Interface"], correctAnswer: 0 },
        { question: "Which topology has a central hub?", answers: ["Star", "Bus", "Ring"], correctAnswer: 0 },
        { question: "What is the primary purpose of a firewall?", answers: ["To protect against unauthorised Access", "To manage disk space", "To speed up a computer"], correctAnswer: 0 },
        { question: "Which of these is a type of malware?", answers: ["Trojan Horse", "Firewall", "Operating System"], correctAnswer: 0 },
        { question: "What is the function of DNS in networking?", answers: ["To translate domani names to IP addresses", "To secure Emali", "To monitor internet usage"], correctAnswer: 0 },
        { question: "Which scheduling algorithm is used by most operating systems?", answers: ["Round Robin", "FIFO", "Shortest Job Next"], correctAnswer: 0 },
        { question: "What is the maximum value of an IP address in IPv4?", answers: ["255", "1024", "512"], correctAnswer: 0 },
        { question: "Which logic gate is used to invert a signal?", answers: ["NOT", "XOR", "OR"], correctAnswer: 0 },
        { question: "What is the main function of a device driver?", answers: ["To enable communication between hardware and the operating systen", "To manage power supply", "To monitor performance"], correctAnswer: 0 },
        { question: "Which of these layers is responsible for routing in the OSI model?", answers: ["Network", "Transport", "Data Link"], correctAnswer: 0 },
    ],
    [
        { question: "What is the main function of management?", answers: ["Planning", "Decorating", "Designing"], correctAnswer: 0 },
        { question: "Who is considered the father of modern management?", answers: ["Henri Fayol", "Elton Mayo", "Peter Ducker"], correctAnswer: 0 },
        { question: "Which is not the function of management?", answers: ["Sleeping", "Planning", "Organizing"], correctAnswer: 0 },
        { question: "What does SWOT stand for in management?", answers: ["Strength, Weakness, Opportunity, Threat", "Social Work Opportunity Training", "Skills, Weakness, Operation, Time"], correctAnswer: 0 },
        { question: "Which level of management is responsible for day-to-day management?", answers: ["Middle Level", "Top Level", "Operational Level"], correctAnswer: 0 },
        { question: "Who proposed the concept of Bureaucracy in management?", answers: ["Max Weber", "Elton Mayo", "Henri Fayol"], correctAnswer: 0 },
        { question: "Which of the following is a feature of formal organization?", answers: ["Defined hierarchy", "Informal rules", "Personal relationships"], correctAnswer: 0 },
        { question: "Which managerial skill is most important for middle management?", answers: ["Human skills", "Technical skills", "Analytical skills"], correctAnswer: 0 },
        { question: "The process of delegating authority to surboninates is called:?", answers: ["Decentralization", "Centralization", "Supervision"], correctAnswer: 0 },
        { question: "Maslow's hierarchy of needs starts with:?", answers: ["Physiological needs", "Esteem needs", "Safety needs"], correctAnswer: 0 },
        { question: "Which theory emphasizes 'one best way' to perform tasks?", answers: ["Scientific Management Theory", "Administrative Theory", "Contingency Theory"], correctAnswer: 0 },
        { question: "What is the primary focus of TQM(Total Quality Management)?", answers: ["Continuous improvement", "Budgeting", "Marketing"], correctAnswer: 0 },
        { question: "Who introduced the concept of 'Hawthorne Effect'?", answers: ["Elton Mayo", "Max Weber", "Peter Drucker"], correctAnswer: 0 },
        { question: "A Gantt chart is used for?", answers: ["Project Scheduling", "Market Analysis", "Financial management"], correctAnswer: 0 },
        { question: "What is the span of control?", answers: ["The number of surbodinates a manager can effectively supervise", "The area a manager covers", "The time spent managing employees"], correctAnswer: 0 },
        { question: "Which principle of management states that a subordinate should report to only one superior?", answers: ["Unity of Command", "Equity", "Authority"], correctAnswer: 0 },
        { question: "The term 'Esprit de corps' refers to:?", answers: ["Team spirit", "Authority", "Discipline"], correctAnswer: 0 },
        { question: "Which is NOT one of the 14 principles of management by Henri Fayol?", answers: ["Employee satisfaction", "Authority", "Division of Work"], correctAnswer: 0 },
        { question: "What is 'contingency approach'?", answers: ["Management approach depending on the situation", "An employee-only focus", "Fixed rules for all situations"], correctAnswer: 0 },
        { question: "What is the key characteristic of autocratic leadership?", answers: ["Centralized decision making", "Employee freedom", "Shared authority"], correctAnswer: 0 },
        { question: "Which strategy focuses on reducing costs to gain a competetive advantage?", answers: ["Cost leadership strategy", "Focuses strategy", "Differentiation strategy"], correctAnswer: 0 },
        { question: "Which law is associated with decreasing productivity due to increased workforce beyond a limit?", answers: ["Law of diminishing returns", "Law of supply", "Murphy's law"], correctAnswer: 0 },
        { question: "What is the prinary goal of lean management?", answers: ["Elimination of waste", "Higher investments", "Customer acquistion"], correctAnswer: 0 },
    ],
    [
        { question: "How do you create a folder on Windows?", answers: ["Right-click > New > Folder", "Drag and drop", "Double-click desktop"], correctAnswer: 0 },
        { question: "What is the shortcut to copy text or files in Windows?", answers: ["Ctr + C", "Ctr + X", "Ctr + Z"], correctAnswer: 0 },
        { question: "Which tool in Microsoft Word allows you to check spelling Errors?", answers: ["Spell Check (Review Tab)", "Insert", "Page Layout"], correctAnswer: 0 },
        { question: "What command is used in Linux to list all files is a directory?", answers: ["Is", "cd", "rm"], correctAnswer: 0 },
        { question: "Which key do you press to refresh a webpage in a browser?", answers: ["F5", "F3", "Alt + Tab"], correctAnswer: 0 },
        { question: "How do you open Task Manager on Windows using a shortcut?", answers: ["Ctrl + Shift + Esc", "Alt + F4", "Windows + X"], correctAnswer: 0 },
        { question: "In Excel, which function calculates the total of a range of numbers?", answers: ["=SUM()", "=IF()", "=COUNT()"], correctAnswer: 0 },
        { question: "Which shortcut is used to open a new incognito window in Chrome?", answers: ["Ctrl + Shift + N", "Ctrl + T", "Ctrl + W"], correctAnswer: 0 },
        { question: "What command is used in Linux to create a new file?", answers: ["touch filename", "cat filename", "rm filename"], correctAnswer: 0 },
        { question: "In Adobe photoshop, which tool is used to remove the background?", answers: ["Magic Wand tool", "Lasso tool", "Crop tool"], correctAnswer: 0 },
        { question: "How do you create a bootable USB drive on windows?", answers: ["Use a tool like Rufus or Command prompt with diskpart", "Install directly from ISO", "Restart thr computer"], correctAnswer: 0 },
        { question: "Which command is used in Git to upload changes to a repository?", answers: ["git push", "git clone", "git status"], correctAnswer: 0 },
        { question: "In SQL, how do you retrive all records from a table named 'users'?", answers: ["SELECT * FROM users", "FETCH ALL users", "SELECT * INTO users"], correctAnswer: 0 },
        { question: "What is the purpose of the ping command in networking?", answers: ["Check connectivity to a specific IP or URL", "Block a network device", "Open Network ports"], correctAnswer: 0 },
        { question: "Which Linux command is used to change file permissions?", answers: ["chmod", "chown", "cp"], correctAnswer: 0 },
        { question: "How do you access the BIOS/UEFI setup on most computers?", answers: ["Press Del, Esc, or F2 during startup", "Alt + 4", "Shift + Enter"], correctAnswer: 0 },
        { question: "How do you establish an SSH connection to a remort server?", answers: ["ssh user@hostname", "scp user@hostname", "connect user@hostname"], correctAnswer: 0 },
        { question: "Which tool is used to monitor real-time processes in Linux?", answers: ["top", "Is", "chmod"], correctAnswer: 0 },
        { question: "What is the shortcut to create a virtual desktop in Windows 10/11?", answers: ["Ctrl + Windows + D", "Alt + Tab", "Windows + R"], correctAnswer: 0 },
        { question: "How do you compile a java program?", answers: ["javac filename.java", "compile filename", "python filename.java"], correctAnswer: 0 },
        { question: "What is the default port for HTTPS?", answers: ["443", "22", "80"], correctAnswer: 0 },
        { question: "Which Linux command is used to view the last 10 lines of a file?", answers: ["tail file.txt", "grep file.txt", "nano file.txt"], correctAnswer: 0 },
        { question: "How do you install a Python package using pip?", answers: ["pip install", "pip add", "python-install"], correctAnswer: 0 },
        { question: "In a database, what is the command to delete a table named 'users'?", answers: ["DROP TABLE users", "DELETE users", "TRUNCATE TABLE users"], correctAnswer: 0 },
        { question: "How do you check the disk usage in Linux?", answers: ["df -h", "Is -s", "du -file"], correctAnswer: 0 },
        { question: "Which command is used to create a virtual environment in python?", answers: ["git clone", "git folk", "git pull"], correctAnswer: 0 },
        { question: "Which tool is used to capture network network traffic?", answers: ["Wireshark", "Ping", "Nmap"], correctAnswer: 0 },
        { question: "What is the shortcut to lock your windows PC?", answers: ["Windows + L", "Alt + L", "Ctrl + L"], correctAnswer: 0 },
        { question: "How do you deploy a React app to production?", answers: ["npm run build and host file on server", "react deploy", "npm start"], correctAnswer: 0 },
    ],
   
];

const rewards = ["Gold Medal", "Silver Medal", "Taiga Medal", "Bronze Medal"];
const randomFacts = [
    "HTML was developed in 1991.",
    "CSS was created by Hakon Wium Lie.",
    "JavaScript was created in 1995.",
    "Taiga designed this website in 2024.",
    "The first computer virus was created in 1983."
];

let currentLevelIndex = 0;
let currentQuestionIndex = 0;
let score = 0;

function startLevel(levelIndex) {
    currentLevelIndex = levelIndex;
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById("menu").style.display = "none";
    document.getElementById("quiz-container").style.display = "block";
    loadQuestion();
}

function loadQuestion() {
    const level = levels[currentLevelIndex];
    const question = level[currentQuestionIndex];
    document.getElementById("question").innerText = question.question;
    const answersContainer = document.getElementById("answers");
    answersContainer.innerHTML = '';

    question.answers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.innerText = answer;
        button.onclick = () => checkAnswer(index);
        answersContainer.appendChild(button);
    });
    document.getElementById("next-question").style.display = "none";
}

function checkAnswer(selectedAnswer) {
    const level = levels[currentLevelIndex];
    const question = level[currentQuestionIndex];

    if (selectedAnswer === question.correctAnswer) {
        document.getElementById("answers").children[selectedAnswer].classList.add("correct");
        score++;
    } else {
        document.getElementById("answers").children[selectedAnswer].classList.add("incorrect");
        document.getElementById("answers").children[question.correctAnswer].classList.add("correct");
    }

    document.getElementById("next-question").style.display = "block";
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < levels[currentLevelIndex].length) {
        loadQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    document.getElementById("quiz-container").style.display = "none";
    document.getElementById("results").style.display = "block";
    
    document.getElementById("score").innerText = `Score: ${score} / ${levels[currentLevelIndex].length}`;
    
    const reward = score >= 2 ? rewards[Math.floor(Math.random() * rewards.length)] : "Participation Medal";
    document.getElementById("reward").innerText = `Reward: ${reward}`;
    
    const fact = randomFacts[Math.floor(Math.random() * randomFacts.length)];
    document.getElementById("random-fact").innerText = `Fun Fact: ${fact}`;
    
    document.getElementById("celebration").style.display = "block";

    document.getElementById("return-home").style.display = "inline-block";
}

function repeatLevel() {
    document.getElementById("results").style.display = "none";
    startLevel(currentLevelIndex);
}

function proceedToNextLevel() {
    if (currentLevelIndex < levels.length - 1) {
        startLevel(currentLevelIndex + 1);
    } else {
        showCompletion();
    }
}

function showCompletion() {
    document.getElementById("results").style.display = "none";
    document.getElementById("completion").style.display = "block";
}

function returnHome() {
    document.getElementById("completion").style.display = "none";
    document.getElementById("results").style.display = "none";
    document.getElementById("menu").style.display = "flex";
}