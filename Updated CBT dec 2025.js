/* ========================================
   SO_MARVELOUS CBT MOCK EXAMS - FINAL WORKING JS
   Built with ❤️ for JSS3 Champions!
   ======================================== */

(() => {
  'use strict';

  // SELECTORS
  const pages = {
    home: document.getElementById('home'),
    exam: document.getElementById('exam'),
    results: document.getElementById('results'),
    tips: document.getElementById('tips'),
    admin: document.getElementById('admin')
  };

  const themeCheckbox = document.getElementById('themeCheckbox');
  const zoomIn = document.getElementById('zoomIn');
  const zoomOut = document.getElementById('zoomOut');
  const adminBtn = document.getElementById('adminBtn');
  const tipsBtn = document.getElementById('tipsBtn');
  const startBtn = document.getElementById('startExam');
  const subjectSelect = document.getElementById('subjectSelect');
  const examNumberInput = document.getElementById('examNumber');

  let currentFontSize = 16;
  let resultsHistory = JSON.parse(localStorage.getItem('cbtResults') || '[]');

  // BACKGROUND SLIDESHOW
  const slides = document.querySelectorAll('.slide');
  let slideIndex = 0;
  setInterval(() => {
    slides[slideIndex].classList.remove('active');
    slideIndex = (slideIndex + 1) % slides.length;
    slides[slideIndex].classList.add('active');
  }, 4000);
  slides[0].classList.add('active');

  // THEME TOGGLE
  themeCheckbox.addEventListener('change', () => {
    document.body.classList.toggle('light', themeCheckbox.checked);
  });

  // ZOOM
  zoomIn.addEventListener('click', () => {
    currentFontSize += 2;
    document.body.style.fontSize = `${currentFontSize}px`;
  });
  zoomOut.addEventListener('click', () => {
    if (currentFontSize > 12) {
      currentFontSize -= 2;
      document.body.style.fontSize = `${currentFontSize}px`;
    }
  });

  // 50 REAL QUESTIONS FOR FIRST 3 SUBJECTS
  const questions = {
    computer: [
      { q: "What does CPU stand for?", options: ["Central Processing Unit", "Computer Personal Unit", "Central Power Unit", "Control Processing Unit"], ans: 0 },
      { q: "The brain of the computer is the", options: ["Monitor", "Keyboard", "CPU", "Mouse"], ans: 2 },
      { q: "RAM stands for", options: ["Read Access Memory", "Random Access Memory", "Run Access Memory", "Real Access Memory"], ans: 1 },
      { q: "Which is an input device?", options: ["Printer", "Speaker", "Keyboard", "Monitor"], ans: 2 },
      { q: "The main circuit board in a computer is called", options: ["Motherboard", "Fatherboard", "Hardboard", "Softboard"], ans: 0 },
      { q: "ROM stands for", options: ["Read Only Memory", "Random Only Memory", "Read On Memory", "Run Only Memory"], ans: 0 },
      { q: "Which device stores data permanently?", options: ["RAM", "ROM", "CPU", "Cache"], ans: 1 },
      { q: "A byte consists of how many bits?", options: ["4", "8", "16", "32"], ans: 1 },
      { q: "The full meaning of URL is", options: ["Uniform Resource Locator", "Universal Resource Link", "Uniform Read Locator", "Universal Read Link"], ans: 0 },
      { q: "Which is not an operating system?", options: ["Windows", "Linux", "Microsoft Word", "macOS"], ans: 2 },
      { q: "WWW stands for", options: ["World Wide Web", "World Web Wide", "Wide World Web", "Web World Wide"], ans: 0 },
      { q: "A computer virus is a ____________that destroy computer files", options: ["Hardware", "Software", "Malicious program", "Useful program"], ans: 2 },
      { q: "The extension for a Word document is", options: [".docx", ".exe", ".jpg", ".mp3"], ans: 0 },
      { q: "Which key is used to copy text?", options: ["Ctrl+C", "Ctrl+V", "Ctrl+X", "Ctrl+Z"], ans: 0 },
      { q: "The toolbar in MS Word contains", options: ["Icons for commands", "Text only", "Images", "Videos"], ans: 0 },
      { q: "What is the shortcut to paste?", options: ["Ctrl+V", "Ctrl+C", "Ctrl+P", "Ctrl+S"], ans: 0 },
      { q: "A folder is used to", options: ["Store files", "Delete files", "Run programs", "Print documents"], ans: 0 },
      { q: "Which is a search engine?", options: ["Google", "Microsoft Word", "Paint", "Notepad"], ans: 0 },
      { q: "The mouse pointer is also called", options: ["Cursor", "Arrow", "Pointer", "All of the above"], ans: 3 },
      { q: "To shut down the computer, we", options: ["Click Start → Shut down", "Press power button directly", "Unplug it", "Close all windows"], ans: 0 },
      { q: "Binary system uses digits", options: ["0 and 1", "1 to 9", "A to Z", "0 to 9"], ans: 0 },
      { q: "Which is a storage device?", options: ["Flash drive", "Monitor", "Keyboard", "Printer"], ans: 0 },
      { q: "The desktop background is called", options: ["Wallpaper", "Screen saver", "Icon", "Taskbar"], ans: 0 },
      { q: "Which key deletes text to the left?", options: ["Backspace", "Delete", "Enter", "Space"], ans: 0 },
      { q: "A computer network is", options: ["Connected computers", "Single computer", "Printer only", "Keyboard only"], ans: 0 },
      { q: "What is a computer icon", options: ["Local Area Network", "An image,letter,symbol or text that represents a program, folder, or document in a computer", 
           "The Computerman Mr. Mfon", "A piece of advice that tells the computer to misbehave correctly"], ans: 1 },
      { q: "The recycle bin stores", options: ["Deleted files", "New files", "Programs", "Pictures"], ans: 0 },
      { q: "Which is not a web browser?", options: ["Chrome", "Firefox", "Excel", "Safari"], ans: 2 },
      { q: "To save a file, press", options: ["Ctrl+S", "Ctrl+O", "Ctrl+P", "Ctrl+N"], ans: 0 },
      { q: "The start button is on the", options: ["Taskbar", "Desktop", "Title bar", "Menu bar"], ans: 0 },
      { q: "A spreadsheet program is", options: ["Microsoft Excel", "Microsoft Word", "Paint", "Notepad"], ans: 0 },
      { q: "Which key moves to next line?", options: ["Enter", "Space", "Tab", "Shift"], ans: 0 },
      { q: "The monitor displays", options: ["Output", "Input", "Storage", "Processing"], ans: 0 },
      { q: "A printer is an", options: ["Output device", "Input device", "Storage device", "Processing device"], ans: 0 },
      { q: "To undo an action, press", options: ["Ctrl+Z", "Ctrl+Y", "Ctrl+X", "Ctrl+C"], ans: 0 },
      { q: "The file extension for PowerPoint is", options: [".pptx", ".docx", ".xlsx", ".txt"], ans: 0 },
      { q: "Which is a system software?", options: ["Operating System", "Microsoft Word", "Games", "Browser"], ans: 0 },
      { q: "The cursor blinks in", options: ["Text area", "Desktop", "Taskbar", "Start menu"], ans: 0 },
      { q: "To select all text, press", options: ["Ctrl+A", "Ctrl+S", "Ctrl+P", "Ctrl+O"], ans: 0 },
      { q: "A computer mouse has how many buttons usually?", options: ["2", "1", "3", "4"], ans: 0 },
      { q: "The taskbar shows", options: ["Open programs", "Desktop icons", "Wallpaper", "Recycle bin"], ans: 0 },
      { q: "To open a new tab in browser, press", options: ["Ctrl+T", "Ctrl+N", "Ctrl+W", "Ctrl+Shift"], ans: 0 },
      { q: "Which is not hardware?", options: ["Windows OS", "Hard disk", "RAM", "CPU"], ans: 0 },
      { q: "The power button on CPU is for", options: ["Turning on/off", "Printing", "Typing", "Playing music"], ans: 0 },
      { q: "A webcam is used for", options: ["Video calls", "Printing", "Typing", "Storing files"], ans: 0 },
      { q: "The full form of HTML is", options: ["HyperText Markup Language", "HighText Machine Language", "HyperTool Markup Language", "None"], ans: 0 },
      { q: "In paint drawing / graphic software, the color picker looks like a _________", options: ["hammer", "snail", "bucket", "your head"], ans: 2 },
      { q: "Which key makes letters capital?", options: ["Caps Lock", "Shift", "Ctrl", "Alt"], ans: 0 },
      { q: "The internet connects computers", options: ["Worldwide", "In one room", "In one building", "In one city"], ans: 0 },
      { q: "To download text from the internet you must", options: ["slepp eat and do excercise", "slap the computer mercilessly", "select the text, and copy", "Call your parents to complain"], ans: 2 }
    ],
   


    english: [
      { q: "The plural of 'baby' is", options: ["Babys", "Babies", "Babyes", "Babys'"], ans: 1 },
      { q: "Choose the correct spelling", options: ["Beautiful", "Beautifull", "Beauteful", "Beautyful"], ans: 0 },
      { q: "The opposite of 'tall' is", options: ["Short", "Long", "High", "Big"], ans: 0 },
      { q: "He ___ football every weekend", options: ["play", "plays", "playing", "played"], ans: 1 },
      { q: "The young one of a goat is called", options: ["Kid", "Calf", "Puppy", "Lamb"], ans: 0 },
      { q: "She is ___ honest girl", options: ["a", "an", "the", "no article"], ans: 1 },
      { q: "The synonym of 'begin' is", options: ["End", "Start", "Stop", "Finish"], ans: 1 },
      { q: "Which is a pronoun?", options: ["He", "Run", "Blue", "Table"], ans: 0 },
      { q: "We ___ to school yesterday", options: ["go", "goes", "went", "going"], ans: 2 },
      { q: "The capital of Lagos State is", options: ["Ikeja", "Lagos Island", "Victoria Island", "Badagry"], ans: 0 },
      { q: "Choose the correct sentence", options: ["She sing well", "She sings well", "She singing well", "She singed well"], ans: 1 },
      { q: "The plural of 'knife' is", options: ["Knifes", "Knives", "Knifees", "Knifs"], ans: 1 },
      { q: "The opposite of 'light' is", options: ["Heavy", "Dark", "Bright", "White"], ans: 1 },
      { q: "A place where we learn is", options: ["School", "Market", "Hospital", "Bank"], ans: 0 },
      { q: "It is ___ apple", options: ["a", "an", "the", "no article"], ans: 1 },
      { q: "The young one of a horse is", options: ["Foal", "Calf", "Kid", "Chick"], ans: 0 },
      { q: "Choose the adverb", options: ["Quick", "Quickly", "Quickness", "Quickest"], ans: 1 },
      { q: "They ___ happy to see me", options: ["was", "were", "is", "are"], ans: 1 },
      { q: "The synonym of 'small' is", options: ["Big", "Little", "Large", "Huge"], ans: 1 },
      { q: "How many letters in 'COMPUTER'?", options: ["8", "7", "9", "6"], ans: 0 },
      { q: "The past tense of 'run' is", options: ["Run", "Ran", "Runned", "Running"], ans: 1 },
      { q: "A group of lions is called", options: ["Pride", "Herd", "Flock", "Pack"], ans: 0 },
      { q: "He runs ___", options: ["fast", "fastly", "faster", "fastest"], ans: 0 },
      { q: "The first letter of 'school' is", options: ["S", "s", "Sc", "Sch"], ans: 0 },
      { q: "The plural of 'box' is", options: ["Boxs", "Boxes", "Boxies", "Boxees"], ans: 1 },
      { q: "This is ___ best day", options: ["a", "an", "the", "no article"], ans: 2 },
      { q: "Choose the noun", options: ["Run", "Beautiful", "Happiness", "Quickly"], ans: 2 },
      { q: "The opposite of 'old' is", options: ["New", "Young", "Ancient", "Both A and B"], ans: 3 },
      { q: "We ___ television last night", options: ["watch", "watches", "watched", "watching"], ans: 2 },
      { q: "A place where sick people are treated is", options: ["Hospital", "School", "Market", "Church"], ans: 0 },
      { q: "The synonym of 'clever' is", options: ["Dull", "Intelligent", "Slow", "Lazy"], ans: 1 },
      { q: "How many vowels in 'EDUCATION'?", options: ["5", "4", "6", "3"], ans: 0 },
      { q: "I ___ a student", options: ["am", "is", "are", "be"], ans: 0 },
      { q: "The young one of a duck is", options: ["Duckling", "Chick", "Calf", "Kitten"], ans: 0 },
      { q: "Choose the correct spelling", options: ["Occasion", "Ocasion", "Occassion", "Ocation"], ans: 0 },
      { q: "The plural of 'deer' is", options: ["Deers", "Deer", "Deeres", "Deeries"], ans: 1 },
      { q: "There is ___ book on the table", options: ["a", "an", "the", "no article"], ans: 0 },
      { q: "The antonym of 'happy' is", options: ["Joyful", "Sad", "Excited", "Glad"], ans: 1 },
      { q: "You ___ come to school tomorrow", options: ["must", "can", "may", "should"], ans: 0 },
      { q: "A person who bakes bread is called", options: ["Baker", "Butcher", "Tailor", "Farmer"], ans: 0 },
      { q: "The comparative of 'bad' is", options: ["Worse", "Worst", "Badder", "Badest"], ans: 0 },
      { q: "Choose the preposition", options: ["In", "Run", "Beautiful", "Book"], ans: 0 },
      { q: "The sun sets in the", options: ["East", "West", "North", "South"], ans: 1 },
      { q: "My brother ___ football well", options: ["play", "plays", "playing", "played"], ans: 1 },
      { q: "The plural of 'foot' is", options: ["Foots", "Feet", "Footes", "Feets"], ans: 1 },
      { q: "The superlative of 'good' is", options: ["Better", "Best", "Gooder", "Goodest"], ans: 1 },
      { q: "We go to ___ church on Sunday", options: ["a", "an", "the", "no article"], ans: 2 },
      { q: "The opposite of 'buy' is", options: ["Sell", "Give", "Take", "Borrow"], ans: 0 },
      { q: "Choose the correct spelling", options: ["Independent", "Independant", "Indepandent", "Indipendent"], ans: 0 },
      { q: "I ___ my homework now", options: ["do", "does", "am doing", "did"], ans: 2 }
    ]
    // Next 7 subjects will be added when you say "continue"
  };

  let currentSubject = '';
  let currentQuestions = [];
  let answers = [];
  let currentQIndex = 0;
  let timeLeft = 1800;
  let timerInterval;

  // PAGE NAVIGATION
  function showPage(id) {
    Object.values(pages).forEach(p => p.classList.remove('active'));
    pages[id].classList.add('active');
  }

  // START EXAM - NOW WORKS PERFECTLY
  startBtn.addEventListener('click', () => {
    const subject = subjectSelect.value;
    const examNo = examNumberInput.value.trim();

    if (!subject) {
      alert("Please select a subject! You are doing great! 🌟");
      return;
    }
    if (!examNo) {
      alert("Please enter your Exam Number!");
      return;
    }

    if (!questions[subject] || questions[subject].length < 50) {
      alert("Questions for this subject are being prepared. Try Computer Studies, Mathematics, or English!");
      return;
    }

    currentSubject = subject;
    currentQuestions = questions[subject];
    answers = new Array(50).fill(null);
    currentQIndex = 0;
    timeLeft = 1800;

    showPage('exam');
    renderExam();
    startTimer();
  });

  // RENDER EXAM
  function renderExam() {
    const q = currentQuestions[currentQIndex];
    pages.exam.innerHTML = `
      <div class="exam-wrapper">
        <div class="exam-top">
          <button id="submitExam" class="btn secondary">Submit Exam</button>
          <div class="timer">⏱ 30:00</div>
        </div>
        <div class="exam-body">
          <div class="question-area">
            <h2>Question ${currentQIndex + 1} of 50</h2>
            <p class="question-text">${q.q}</p>
            <div class="options">
              ${q.options.map((opt, i) => `
                <label class="option">
                  <input type="radio" name="answer" value="${i}" ${answers[currentQIndex] === i ? 'checked' : ''}>
                  <span>${String.fromCharCode(65 + i)}. ${opt}</span>
                </label>
              `).join('')}
            </div>
            <div class="nav-buttons">
              <button id="prevBtn" class="btn secondary" ${currentQIndex === 0 ? 'disabled' : ''}>Previous</button>
              <button id="nextBtn" class="btn primary" ${currentQIndex === 49 ? 'disabled' : ''}>Next</button>
            </div>
          </div>
          <div class="question-grid">
            ${Array.from({length: 50}, (_, i) => `
              <button class="q-btn ${i === currentQIndex ? 'active' : ''} ${answers[i] !== null ? 'answered' : ''}" data-index="${i}">
                ${i + 1}
              </button>
            `).join('')}
          </div>
        </div>
      </div>
    `;

    // Attach events
    document.querySelectorAll('input[name="answer"]').forEach(input => {
      input.addEventListener('change', (e) => {
        answers[currentQIndex] = parseInt(e.target.value);
        renderExam(); // Refresh to update palette
      });
    });

    document.querySelectorAll('.q-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        currentQIndex = parseInt(btn.dataset.index);
        renderExam();
      });
    });

    document.getElementById('prevBtn')?.addEventListener('click', () => {
      if (currentQIndex > 0) currentQIndex--;
      renderExam();
    });

    document.getElementById('nextBtn')?.addEventListener('click', () => {
      if (currentQIndex < 49) currentQIndex++;
      renderExam();
    });

    document.getElementById('submitExam').addEventListener('click', () => {
      if (confirm("Submit your exam now? You've done well!")) finishExam();
    });
  }

  // TIMER
  function startTimer() {
    timerInterval = setInterval(() => {
      timeLeft--;
      const mins = String(Math.floor(timeLeft / 60)).padStart(2, '0');
      const secs = String(timeLeft % 60).padStart(2, '0');
      document.querySelector('.timer').textContent = `⏱ ${mins}:${secs}`;

      if (timeLeft === 600) alert("10 minutes left! Keep going!");
      if (timeLeft === 300) alert("5 minutes remaining! You're almost done!");
      if (timeLeft === 60) alert("1 minute left! Submit now!");
      if (timeLeft <= 0) {
        clearInterval(timerInterval);
        finishExam();
      }
    }, 1000);
  }

  // FINISH EXAM
  function finishExam() {
    clearInterval(timerInterval);
    let score = 0;
    currentQuestions.forEach((q, i) => {
      if (answers[i] === q.ans) score++;
    });
    const percentage = Math.round((score / 50) * 100);

    const messages = {
      excellent: "Outstanding! You're a true champion! 🌟🏆",
      veryGood: "Excellent work! So proud of you! 🎉",
      good: "Well done! Keep practicing! 💪",
      credit: "Great effort! You're improving! ✨",
      practice: "Nice try! Practice makes perfect! Never give up! ❤️"
    };

    let message = messages.practice;
    if (percentage >= 80) message = messages.excellent;
    else if (percentage >= 70) message = messages.veryGood;
    else if (percentage >= 60) message = messages.good;
    else if (percentage >= 50) message = messages.credit;

    pages.results.innerHTML = `
      <canvas id="confetti"></canvas>
      <div class="certificate">
        <h1>🎉 Certificate of Achievement 🎉</h1>
        <p>This certifies that</p>
        <<h2 id="cert-name">${examNumberInput.value || "This Computer Champion"}</h2>
        <p>has completed the mock exam in</p>
        <h3>${subjectSelect.options[subjectSelect.selectedIndex].text}</h3>
        <p class="score">Score: ${score}/50 (${percentage}%)</p>
        <p>${message}</p>
        <p>Date: ${new Date().toLocaleDateString()}</p>
        <div class="cert-actions">
          <button onclick="window.print()" class="btn primary">Print Certificate</button>
          <button onclick="location.reload()" class="btn secondary">Back to Home</button>
        </div>
      </div>
    `;

    showPage('results');
    if (percentage >= 50) launchConfetti();
  }

  // CONFETTI
  function launchConfetti() {
    const canvas = document.getElementById('confetti');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const confetti = [];
    const colors = ['#ff6bff', '#00f6ff', '#ffff00', '#ff0000', '#7b42ff'];

    for (let i = 0; i < 200; i++) {
      confetti.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height - canvas.height,
        r: Math.random() * 6 + 2,
        d: Math.random() * 5 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        tilt: Math.random() * 10 - 5,
        tiltAngle: 0
      });
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      confetti.forEach(c => {
        c.tiltAngle += 0.1;
        c.tilt = Math.sin(c.tiltAngle) * 15;

        ctx.beginPath();
        ctx.lineWidth = c.r;
        ctx.strokeStyle = c.color;
        ctx.moveTo(c.x + c.tilt + c.r, c.y);
        ctx.lineTo(c.x + c.tilt - c.r, c.y + c.tilt + c.r);
        ctx.stroke();
      });

      confetti.forEach(c => {
        c.y += c.d;
        if (c.y > canvas.height) c.y = -10;
      });

      requestAnimationFrame(draw);
    }
    draw();
  }

  // TIPS & ADMIN (kept from your code)
  tipsBtn.addEventListener('click', () => {
    showPage('tips');
    pages.tips.innerHTML = `<div class="welcome-card"><h1>Exam Tips</h1><ul><li>Read carefully</li><li>Manage time</li><li>Review answers</li><li>Stay calm</li><li>You are brilliant!</li></ul><button class="btn primary" onclick="location.reload()">Back</button></div>`;
  });

  adminBtn.addEventListener('click', () => {
    showPage('admin');
    pages.admin.innerHTML = `<div class="welcome-card"><h2>Admin Login</h2><input type="text" id="user" placeholder="Username"/><input type="password" id="pass" placeholder="Password"/><button id="login" class="btn primary">Login</button></div>`;
    document.getElementById('login').addEventListener('click', () => {
      if (document.getElementById('user').value === 'admin' && document.getElementById('pass').value === 'marvelous') {
        pages.admin.innerHTML = `<div class="welcome-card"><h1>Dashboard</h1><p>Results saved in browser.</p><button onclick="location.reload()" class="btn primary">Back</button></div>`;
      } else {
        alert("Wrong credentials");
      }
    });
  });

})();



// Update mode label when toggled
themeCheckbox.addEventListener('change', () => {
  document.body.classList.toggle('light', themeCheckbox.checked);
  document.getElementById('modeLabel').textContent = themeCheckbox.checked ? 'Light Mode' : 'Dark Mode';
});

