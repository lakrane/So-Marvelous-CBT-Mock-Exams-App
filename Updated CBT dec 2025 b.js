//Everything has stopped working. Even the zoom buttons, toggle switch, 
//etc are all not working any more. If i select and click on the exams drop down menu to choose an exam to write, 
//it's not responding again. I want you to act as a super detective debugger  and check this js code ...."



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
      { q: "To download text from the internet you must", options: ["slepp eat and do excercise", "slap the computer mercilessly", "select the text, and copy", "Call your parents to complain"], ans: 2 },
    ],
      math: [
  { q: "What is 20% of 150?", options: ["30", "20", "15", "300"], ans: 0 }, // A
  { q: "Simplify: 4/6", options: ["2/3", "1/3", "4/3", "2/6"], ans: 0 }, // A
  { q: "The product of 12 and 8 is", options: ["84", "96", "108", "20"], ans: 1 }, // B
  { q: "What is the square of 9?", options: ["18", "72", "81", "90"], ans: 2 }, // C
  { q: "If 6x = 42, x = ?", options: ["36", "6", "8", "7"], ans: 3 }, // D
  { q: "The perimeter of a square with side 5cm is", options: ["20cm", "25cm", "10cm", "15cm"], ans: 0 }, // A
  { q: "What is 3/4 of 24?", options: ["12", "18", "16", "20"], ans: 1 }, // B
  { q: "The sum of angles in a quadrilateral is", options: ["180°", "270°", "360°", "90°"], ans: 2 }, // C
  { q: "Convert 0.25 to fraction", options: ["1/4", "1/2", "2/5", "1/5"], ans: 0 }, // A
  { q: "What is the LCM of 3 and 4?", options: ["6", "12", "1", "7"], ans: 1 }, // B
  { q: "The area of a rectangle 10cm by 6cm is", options: ["16 cm²", "36 cm²", "60 cm²", "32 cm²"], ans: 2 }, // C
  { q: "What is 50% of 200?", options: ["250", "50", "150", "100"], ans: 3 }, // D
  { q: "Simplify: 15 ÷ 3 × 2", options: ["6", "30", "10", "5"], ans: 2 }, // C
  { q: "A triangle with sides 3cm, 4cm, 5cm is", options: ["Right-angled", "Scalene", "Isosceles", "Equilateral"], ans: 0 }, // A
  { q: "What is the value of π approximately?", options: ["3.0", "4.0", "2.14", "3.14"], ans: 3 }, // D
  { q: "If y = 10, what is 2y + 5?", options: ["15", "25", "20", "30"], ans: 1 }, // B
  { q: "The mean of 5, 10, 15 is", options: ["5", "15", "30", "10"], ans: 3 }, // D
  { q: "What is 8 × 9?", options: ["64", "81", "72", "90"], ans: 2 }, // C
  { q: "The HCF of 12 and 18 is", options: ["3", "9", "6", "36"], ans: 2 }, // C
  { q: "Convert 2.5 to fraction", options: ["2/5", "5/4", "5/2", "1/2"], ans: 2 }, // C
  { q: "The number of sides in an octagon is", options: ["7", "6", "10", "8"], ans: 3 }, // D
  { q: "What is 100 - 35?", options: ["75", "65", "135", "55"], ans: 1 }, // B
  { q: "The volume of a cuboid 2cm × 3cm × 4cm is", options: ["9 cm³", "18 cm³", "24 cm³", "12 cm³"], ans: 2 }, // C
  { q: "What is the next number: 2, 5, 8, 11, ?", options: ["12", "13", "15", "14"], ans: 3 }, // D
  { q: "If a = 5, b = 3, a + b = ?", options: ["2", "15", "1", "8"], ans: 3 }, // D
  { q: "The mode of 4, 4, 5, 6, 7 is", options: ["4", "5", "6", "7"], ans: 0 }, // A
  { q: "What is 10% of 300?", options: ["300", "3", "60", "30"], ans: 3 }, // D
  { q: "A circle has how many sides?", options: ["1", "Infinite", "4", "0"], ans: 3 }, // D
  { q: "The median of 1, 2, 3, 4, 5 is", options: ["2", "4", "5", "3"], ans: 3 }, // D
  { q: "What is 7 × 7?", options: ["42", "56", "63", "49"], ans: 3 }, // D
  { q: "The area of a triangle with base 8cm and height 5cm is", options: ["40 cm²", "13 cm²", "25 cm²", "20 cm²"], ans: 3 }, // D
  { q: "Convert 1/5 to decimal", options: ["0.5", "0.1", "0.25", "0.2"], ans: 3 }, // D
  { q: "What is 45 + 55?", options: ["90", "110", "80", "100"], ans: 3 }, // D
  { q: "The number of faces on a cube is", options: ["8", "4", "12", "6"], ans: 3 }, // D
  { q: "If 4 books cost ₦800, 1 book costs", options: ["₦400", "₦100", "₦3200", "₦200"], ans: 3 }, // D
  { q: "What is the square root of 81?", options: ["8", "10", "11", "9"], ans: 3 }, // D
  { q: "The perimeter of a rectangle 12cm by 5cm is", options: ["60cm", "17cm", "30cm", "34cm"], ans: 3 }, // D
  { q: "What is 25% of 100?", options: ["50", "75", "100", "25"], ans: 3 }, // D
  { q: "Simplify: 10/20", options: ["2/4", "5/10", "1/4", "1/2"], ans: 3 }, // D
  { q: "The product of 15 and 4 is", options: ["19", "11", "56", "60"], ans: 3 }, // D
  { q: "What is 100 ÷ 4?", options: ["20", "30", "40", "25"], ans: 3 }, // D
  { q: "A pentagon has how many angles?", options: ["6", "4", "8", "5"], ans: 3 }, // D
  { q: "What is 3³?", options: ["9", "81", "18", "27"], ans: 3 }, // D
  { q: "If x = 8, what is x - 3?", options: ["11", "24", "6", "5"], ans: 3 }, // D
  { q: "The average of 20, 30, 40 is", options: ["90", "25", "35", "30"], ans: 3 }, // D
  { q: "What is 9 × 8?", options: ["81", "64", "90", "72"], ans: 3 }, // D
  { q: "The sum of 99 + 1 is", options: ["90", "110", "98", "100"], ans: 3 }, // D
  { q: "What is the next number: 10, 20, 30, 40, ?", options: ["45", "60", "35", "50"], ans: 3 }, // D
  { q: "A cube has how many edges?", options: ["6", "8", "4", "12"], ans: 3 }, // D
  { q: "Mr. Mfon Udoinyang in 2023 had 3 computer schools in Uyo, Akwa Ibom State, each with 1500 students. In 2025, he had 5 computer schools, each containing 3000 students. How many students does he have in total in 2025?", 
    options: ["19500", "9500", "45000", "15000"], 
    ans: 3 }, // D = 5 × 3000 = 15,000
  { q: "What is a graphic chart?", 
    options: ["A pictorial diagram of information", "List of items written in a chat box", "Numbers minus text plus photos", "All of the above"], 
    ans: 0 } // A is correct
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
      { q: "I ___ my homework now", options: ["do", "does", "am doing", "did"], ans: 2 },
    ],
basic science: [
  { q: "The process by which plants make food is called", options: ["Respiration", "Photosynthesis", "Transpiration", "Digestion"], ans: 1 },
  { q: "The smallest unit of life is", options: ["Tissue", "Organ", "Cell", "System"], ans: 2 },
  { q: "Which of these is a mammal?", options: ["Snake", "Frog", "Eagle", "Human"], ans: 3 },
  { q: "The earth rotates on its", options: ["Orbit", "Axis", "Equator", "Pole"], ans: 1 },
  { q: "Water freezes at", options: ["100°C", "0°C", "32°C", "212°C"], ans: 1 },
  { q: "The instrument used to measure temperature is", options: ["Barometer", "Thermometer", "Hydrometer", "Anemometer"], ans: 1 },
  { q: "Which planet is known as the Red Planet?", options: ["Venus", "Jupiter", "Mars", "Saturn"], ans: 2 },
  { q: "Energy from the sun is called", options: ["Solar energy", "Wind energy", "Chemical energy", "Nuclear energy"], ans: 0 },
  { q: "The part of the plant that absorbs water is", options: ["Leaf", "Stem", "Root", "Flower"], ans: 2 },
  { q: "A push or pull is called", options: ["Motion", "Force", "Energy", "Work"], ans: 1 },
  { q: "Sound travels fastest in", options: ["Air", "Water", "Vacuum", "Solid"], ans: 3 },
  { q: "The human body has how many bones when born?", options: ["206", "300", "350", "180"], ans: 1 },
  { q: "Which is a renewable source of energy?", options: ["Coal", "Petroleum", "Solar", "Natural gas"], ans: 2 },
  { q: "The chemical symbol for water is", options: ["O2", "H2O", "CO2", "NaCl"], ans: 1 },
  { q: "Friction can be reduced by using", options: ["Sand", "Oil", "Rough surface", "Heavy load"], ans: 1 },
  { q: "The moon reflects light from the", options: ["Stars", "Earth", "Sun", "Planets"], ans: 2 },
  { q: "Which organ pumps blood in the body?", options: ["Lung", "Kidney", "Heart", "Liver"], ans: 2 },
  { q: "Gravity is the force that", options: ["Pushes objects up", "Pulls objects down", "Makes things float", "Stops motion"], ans: 1 },
  { q: "A balanced diet contains", options: ["Only carbohydrates", "All food nutrients", "Only protein", "Only vitamins"], ans: 1 },
  { q: "The process of changing from liquid to gas is", options: ["Condensation", "Evaporation", "Melting", "Freezing"], ans: 1 },
  { q: "Which is a carnivore?", options: ["Cow", "Goat", "Lion", "Rabbit"], ans: 2 },
  { q: "The air we breathe out contains more", options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"], ans: 2 },
  { q: "A magnet attracts", options: ["Plastic", "Wood", "Iron", "Rubber"], ans: 2 },
  { q: "The largest planet in the solar system is", options: ["Earth", "Mars", "Jupiter", "Saturn"], ans: 2 },
  { q: "Eclipse of the sun occurs when", options: ["Earth is between sun and moon", "Moon is between sun and earth", "Sun is between earth and moon", "None"], ans: 1 },
  { q: "Which vitamin helps in blood clotting?", options: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin K"], ans: 3 },
  { q: "The unit of electric current is", options: ["Volt", "Watt", "Ampere", "Ohm"], ans: 2 },
  { q: "Rainfall is measured using", options: ["Thermometer", "Rain gauge", "Barometer", "Hygrometer"], ans: 1 },
  { q: "Which is not a sense organ?", options: ["Eye", "Ear", "Tongue", "Liver"], ans: 3 },
  { q: "Photosynthesis requires", options: ["Sunlight, water, CO2", "Only water", "Only sunlight", "Only soil"], ans: 0 },
  { q: "The hardest substance in the body is", options: ["Bone", "Tooth enamel", "Nail", "Skin"], ans: 1 },
  { q: "Which is a vector quantity?", options: ["Speed", "Distance", "Force", "Mass"], ans: 2 },
  { q: "The boiling point of water in Kelvin is", options: ["273K", "373K", "100K", "0K"], ans: 1 },
  { q: "Acid turns blue litmus paper", options: ["Red", "Blue", "Green", "No change"], ans: 0 },
  { q: "The earth revolves around the", options: ["Moon", "Sun", "Stars", "Jupiter"], ans: 1 },
  { q: "Which is a greenhouse gas?", options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"], ans: 2 },
  { q: "The SI unit of force is", options: ["Joule", "Watt", "Newton", "Pascal"], ans: 2 },
  { q: "A lever has how many classes?", options: ["2", "3", "4", "1"], ans: 1 },
  { q: "The brain is protected by the", options: ["Ribs", "Skull", "Spine", "Pelvis"], ans: 1 },
  { q: "Which is a non-metal?", options: ["Iron", "Copper", "Carbon", "Gold"], ans: 2 },
  { q: "The color of oxygen gas is", options: ["Blue", "Green", "Colorless", "Yellow"], ans: 2 },
  { q: "Simple machine used to raise water from well is", options: ["Pulley", "Lever", "Screw", "Inclined plane"], ans: 0 },
  { q: "The ozone layer protects us from", options: ["Rain", "Ultraviolet rays", "Heat", "Cold"], ans: 1 },
  { q: "Which blood group is universal donor?", options: ["A", "B", "AB", "O"], ans: 3 },
  { q: "The chemical formula for common salt is", options: ["NaCl", "H2O", "CO2", "O2"], ans: 0 },
  { q: "Which is a renewable resource?", options: ["Coal", "Petrol", "Solar energy", "Natural gas"], ans: 2 },
  { q: "The number of planets in solar system is", options: ["7", "8", "9", "10"], ans: 1 },
  { q: "The process of breathing in is called", options: ["Exhalation", "Inhalation", "Respiration", "Digestion"], ans: 1 },
  { q: "Which is not a state of matter?", options: ["Solid", "Liquid", "Gas", "Energy"], ans: 3 },
  { q: "The distance between earth and sun is about", options: ["150 million km", "1 million km", "1000 km", "1 billion km"], ans: 0 }
],

business: [
  { q: "The exchange of goods and services is called", options: ["Production", "Trade", "Consumption", "Distribution"], ans: 1 },
  { q: "A person who buys goods for personal use is", options: ["Wholesaler", "Retailer", "Consumer", "Producer"], ans: 2 },
  { q: "The document that shows ownership in a company is", options: ["Share certificate", "Invoice", "Receipt", "Cheque"], ans: 0 },
  { q: "Money is generally accepted because it is", options: ["Legal tender", "Beautiful", "Heavy", "Colorful"], ans: 0 },
  { q: "The father of Economics is", options: ["Karl Marx", "Adam Smith", "John Keynes", "Alfred Marshall"], ans: 1 },
  { q: "A market where shares are bought and sold is", options: ["Stock exchange", "Supermarket", "Warehouse", "Bank"], ans: 0 },
  { q: "The reward for land as a factor of production is", options: ["Wages", "Interest", "Rent", "Profit"], ans: 2 },
  { q: "Advertising is a form of", options: ["Production", "Promotion", "Distribution", "Consumption"], ans: 1 },
  { q: "A business owned by one person is", options: ["Partnership", "Sole proprietorship", "Limited company", "Cooperative"], ans: 1 },
  { q: "The full meaning of VAT is", options: ["Value Added Tax", "Very Added Tax", "Value At Tax", "Value And Tax"], ans: 0 },
  { q: "Insurance is important because it", options: ["Reduces risk", "Increases profit", "Creates wealth", "All of the above"], ans: 0 },
  { q: "A cheque is issued by a", options: ["Bank", "Customer", "Government", "Company"], ans: 1 },
  { q: "The process of buying and selling online is", options: ["E-commerce", "Banking", "Transport", "Advertising"], ans: 0 },
  { q: "A person who organizes factors of production is", options: ["Consumer", "Entrepreneur", "Worker", "Manager"], ans: 1 },
  { q: "The reward for capital is", options: ["Rent", "Wages", "Interest", "Profit"], ans: 2 },
  { q: "A written agreement between partners is called", options: ["Deed of partnership", "Memorandum", "Articles", "Certificate"], ans: 0 },
  { q: "The main aim of a business is to make", options: ["Loss", "Profit", "Debt", "Fame"], ans: 1 },
  { q: "Transportation helps in", options: ["Moving goods", "Storing goods", "Producing goods", "Selling goods"], ans: 0 },
  { q: "A market where goods are sold in large quantities is", options: ["Retail market", "Wholesale market", "Supermarket", "Local market"], ans: 1 },
  { q: "The Central Bank of Nigeria is responsible for", options: ["Controlling money supply", "Selling goods", "Teaching students", "Building roads"], ans: 0 },
  { q: "A bill of exchange is used for", options: ["Credit transactions", "Cash payment", "Saving money", "Borrowing"], ans: 0 },
  { q: "The document that shows details of goods bought is", options: ["Invoice", "Receipt", "Cheque", "Voucher"], ans: 0 },
  { q: "A cooperative society is owned by", options: ["Government", "Members", "One person", "Bank"], ans: 1 },
  { q: "Communication helps business to", options: ["Pass information", "Store goods", "Produce items", "Pay salaries"], ans: 0 },
  { q: "The full meaning of GDP is", options: ["Gross Domestic Product", "General Domestic Price", "Gross Development Plan", "Government Domestic Policy"], ans: 0 },
  { q: "A person who sells goods in small quantities is", options: ["Wholesaler", "Retailer", "Producer", "Consumer"], ans: 1 },
  { q: "Banking helps in", options: ["Safe keeping of money", "Making clothes", "Teaching", "Farming"], ans: 0 },
  { q: "The reward for labour is", options: ["Profit", "Interest", "Wages", "Rent"], ans: 2 },
  { q: "A limited liability company has", options: ["Unlimited members", "Limited liability", "One owner", "No profit"], ans: 1 },
  { q: "The process of keeping financial records is", options: ["Bookkeeping", "Marketing", "Production", "Distribution"], ans: 0 },
  { q: "A debit note is sent when goods are", options: ["Overcharged", "Undercharged", "Returned", "Damaged"], ans: 1 },
  { q: "The main function of money is as a", options: ["Medium of exchange", "Store of value", "Unit of account", "All of the above"], ans: 3 },
  { q: "A market survey is done to", options: ["Know customer needs", "Produce goods", "Store items", "Transport goods"], ans: 0 },
  { q: "The document used to withdraw money from bank is", options: ["Cheque", "Invoice", "Receipt", "Voucher"], ans: 0 },
  { q: "A public limited company ends with", options: ["Ltd", "Plc", "Co", "Ent"], ans: 1 },
  { q: "Division of labour leads to", options: ["Specialization", "Unemployment", "Confusion", "Loss"], ans: 0 },
  { q: "A credit note is issued when goods are", options: ["Returned", "Overcharged", "Damaged", "All of the above"], ans: 0 },
  { q: "The head of a sole proprietorship is", options: ["Sole proprietor", "Manager", "Director", "Chairman"], ans: 0 },
  { q: "Bank overdraft is a", options: ["Short-term loan", "Long-term loan", "Savings", "Investment"], ans: 0 },
  { q: "A business that is owned by 2-20 people is", options: ["Sole proprietorship", "Partnership", "Limited company", "Cooperative"], ans: 1 },
  { q: "The process of creating utility is", options: ["Production", "Consumption", "Distribution", "Exchange"], ans: 0 },
  { q: "A statement of account shows", options: ["Transactions with bank", "Goods bought", "Workers salary", "Company profit"], ans: 0 },
  { q: "The main source of government revenue is", options: ["Tax", "Donation", "Borrowing", "Fines"], ans: 0 },
  { q: "A person who uses goods and services is", options: ["Producer", "Consumer", "Retailer", "Wholesaler"], ans: 1 },
  { q: "The full meaning of POS is", options: ["Point of Sale", "Place of Service", "Payment of Salary", "Point of Service"], ans: 0 },
  { q: "A business risk that can be insured is", options: ["Fire", "Bad debt", "Theft", "All of the above"], ans: 3 },
  { q: "The document that shows terms of partnership is", options: ["Deed of partnership", "Memorandum of association", "Articles of association", "Certificate of incorporation"], ans: 0 },
  { q: "A market where new shares are issued is", options: ["Primary market", "Secondary market", "Local market", "Foreign market"], ans: 0 },
  { q: "The reward for entrepreneurship is", options: ["Wages", "Interest", "Rent", "Profit"], ans: 3 },
  { q: "A petty cash book is used for", options: ["Small expenses", "Large payments", "Salaries", "Taxes"], ans: 0 }
],
home: [
  { q: "Home Economics is the study of", options: ["Only cooking", "Family living and management", "Only sewing", "Only cleaning"], ans: 1 },
  { q: "A balanced diet must contain", options: ["Carbohydrates only", "All six classes of food", "Protein only", "Vitamins only"], ans: 1 },
  { q: "The main source of protein is", options: ["Rice", "Beans", "Yam", "Bread"], ans: 1 },
  { q: "Vitamin C is found in", options: ["Meat", "Orange", "Egg", "Milk"], ans: 1 },
  { q: "The process of preserving food by heating is", options: ["Drying", "Canning", "Salting", "Smoking"], ans: 1 },
  { q: "A family with father, mother and children is", options: ["Extended family", "Nuclear family", "Polygamous family", "Single parent"], ans: 1 },
  { q: "Good posture helps to", options: ["Prevent back pain", "Make one taller", "Reduce weight", "Increase height"], ans: 0 },
  { q: "The room where food is prepared is", options: ["Bedroom", "Kitchen", "Parlour", "Bathroom"], ans: 1 },
  { q: "A sewing machine is used for", options: ["Cooking", "Stitching clothes", "Washing", "Ironing"], ans: 1 },
  { q: "The nutrient that gives energy is", options: ["Protein", "Carbohydrate", "Vitamin", "Mineral"], ans: 1 },
  { q: "Kwashiorkor is caused by lack of", options: ["Carbohydrate", "Protein", "Vitamin C", "Fat"], ans: 1 },
  { q: "The color of a healthy tongue is", options: ["White", "Pink", "Yellow", "Black"], ans: 1 },
  { q: "Personal hygiene includes", options: ["Bathing regularly", "Wearing dirty clothes", "Not brushing teeth", "Eating with dirty hands"], ans: 0 },
  { q: "A budget is a plan for", options: ["Spending money", "Saving only", "Borrowing", "Lending"], ans: 0 },
  { q: "The first step in laundry is", options: ["Ironing", "Sorting", "Drying", "Folding"], ans: 1 },
  { q: "A good family value is", options: ["Honesty", "Stealing", "Fighting", "Lying"], ans: 0 },
  { q: "The fabric made from cotton is", options: ["Nylon", "Polyester", "Cotton", "Silk"], ans: 2 },
  { q: "Food poisoning can be caused by", options: ["Clean food", "Dirty hands", "Fresh vegetables", "Boiled water"], ans: 1 },
  { q: "The room for sleeping is", options: ["Kitchen", "Bedroom", "Store", "Toilet"], ans: 1 },
  { q: "A stitch used to hold two pieces of fabric temporarily is", options: ["Running stitch", "Tacking stitch", "Back stitch", "Chain stitch"], ans: 1 },
  { q: "The nutrient needed for strong bones is", options: ["Vitamin C", "Calcium", "Iron", "Carbohydrate"], ans: 1 },
  { q: "A healthy meal should be", options: ["Only rice", "Balanced", "Only meat", "Only drinks"], ans: 1 },
  { q: "The process of removing dirt from clothes is", options: ["Laundry", "Cooking", "Bathing", "Sweeping"], ans: 0 },
  { q: "A family budget helps to", options: ["Waste money", "Control spending", "Borrow more", "Spend everything"], ans: 1 },
  { q: "The tool used for cutting fabric is", options: ["Needle", "Scissors", "Pin", "Thimble"], ans: 1 },
  { q: "Goiter is caused by lack of", options: ["Vitamin A", "Iron", "Iodine", "Calcium"], ans: 2 },
  { q: "The sitting room is also called", options: ["Parlour", "Kitchen", "Store", "Garage"], ans: 0 },
  { q: "A good leader in the home should be", options: ["Selfish", "Responsible", "Lazy", "Proud"], ans: 1 },
  { q: "The method of cooking yam by boiling is", options: ["Frying", "Roasting", "Boiling", "Grilling"], ans: 2 },
  { q: "Puberty begins in girls at age", options: ["5-8", "9-14", "15-18", "20+"], ans: 1 },
  { q: "A seam is", options: ["Joining of two fabrics", "Cutting fabric", "Washing clothes", "Ironing"], ans: 0 },
  { q: "The nutrient that helps in blood formation is", options: ["Vitamin C", "Iron", "Calcium", "Protein"], ans: 1 },
  { q: "Family values include", options: ["Love and respect", "Fighting", "Stealing", "Lying"], ans: 0 },
  { q: "The kitchen should be kept", options: ["Dirty", "Clean", "Dark", "Hot"], ans: 1 },
  { q: "A pattern is used for", options: ["Cutting fabric accurately", "Cooking", "Washing", "Cleaning"], ans: 0 },
  { q: "Rickets is caused by lack of", options: ["Vitamin D", "Vitamin C", "Iron", "Protein"], ans: 0 },
  { q: "The dining room is used for", options: ["Sleeping", "Eating", "Bathing", "Cooking"], ans: 1 },
  { q: "A good family relationship is built on", options: ["Hate", "Love", "Anger", "Jealousy"], ans: 1 },
  { q: "The method of food preservation using salt is", options: ["Salting", "Canning", "Freezing", "Drying"], ans: 0 },
  { q: "Menstruation in girls is a sign of", options: ["Puberty", "Illness", "Pregnancy", "Old age"], ans: 0 },
  { q: "A hem is used to", options: ["Finish raw edges", "Join fabrics", "Decorate", "Cut"], ans: 0 },
  { q: "The nutrient for growth and repair is", options: ["Carbohydrate", "Protein", "Fat", "Vitamin"], ans: 1 },
  { q: "A happy family is one with", options: ["Peace", "Fighting", "Noise", "Anger"], ans: 0 },
  { q: "The bathroom should have", options: ["Good ventilation", "No window", "Darkness", "Dirt"], ans: 0 },
  { q: "A dart is used in sewing to", options: ["Give shape", "Join pieces", "Decorate", "Cut"], ans: 0 },
  { q: "Scurvy is caused by lack of", options: ["Vitamin C", "Vitamin A", "Iron", "Calcium"], ans: 0 },
  { q: "The living room should be", options: ["Comfortable", "Dirty", "Hot", "Noisy"], ans: 0 },
  { q: "Courtship is important before", options: ["Friendship", "Marriage", "School", "Work"], ans: 1 },
  { q: "The method of cooking beans by boiling is", options: ["Frying", "Boiling", "Roasting", "Steaming"], ans: 1 },
  { q: "The change from childhood to adulthood is", options: ["Puberty", "Old age", "Infancy", "Marriage"], ans: 0 },
  { q: "A facing is used to", options: ["Neaten edges", "Join sleeves", "Make pockets", "Add buttons"], ans: 0 }
],
civic: [
  { q: "The system of government in Nigeria is", options: ["Monarchy", "Federalism", "Dictatorship", "Communism"], ans: 1 },
  { q: "The head of state in Nigeria is the", options: ["Governor", "President", "Senate President", "Speaker"], ans: 1 },
  { q: "The Nigerian flag has how many colours?", options: ["2", "3", "4", "5"], ans: 0 },
  { q: "The green colour in the Nigerian flag represents", options: ["Peace", "Agriculture", "Unity", "Strength"], ans: 1 },
  { q: "The capital of Nigeria is", options: ["Lagos", "Abuja", "Kano", "Enugu"], ans: 1 },
  { q: "A good citizen should", options: ["Obey laws", "Break rules", "Fight others", "Steal"], ans: 0 },
  { q: "The rule of law means", options: ["No one is above the law", "Only rich people follow law", "Law for poor only", "No law"], ans: 0 },
  { q: "Democracy means government of the people by the people", options: ["For the rich", "For the people", "For the army", "For the king"], ans: 1 },
  { q: "The three arms of government are", options: ["Executive, Legislature, Judiciary", "Police, Army, Navy", "President, Governor, Chairman", "Senate, House, Court"], ans: 0 },
  { q: "The body that makes laws in Nigeria is", options: ["Executive", "National Assembly", "Judiciary", "Police"], ans: 1 },
  { q: "Voting during election is a", options: ["Right", "Crime", "Punishment", "Duty only"], ans: 0 },
  { q: "The Nigerian currency is called", options: ["Dollar", "Pound", "Naira", "Euro"], ans: 2 },
  { q: "The national anthem of Nigeria is", options: ["Arise O Compatriots", "God Save Nigeria", "Nigeria We Hail Thee", "Stand Up Nigeria"], ans: 0 },
  { q: "Human rights include right to", options: ["Life", "Steal", "Fight", "Lie"], ans: 0 },
  { q: "The agency that fights corruption in Nigeria is", options: ["EFCC", "ICPC", "Both A and B", "Police"], ans: 2 },
  { q: "The current constitution of Nigeria was made in", options: ["1960", "1999", "1979", "2010"], ans: 1 },
  { q: "Nigeria gained independence in", options: ["1960", "1963", "1970", "1950"], ans: 0 },
  { q: "The Nigerian pledge says 'to be faithful, loyal and'", options: ["Rich", "Honest", "Strong", "Tall"], ans: 1 },
  { q: "The number of local governments in Nigeria is", options: ["774", "36", "6", "20"], ans: 0 },
  { q: "The symbol of authority in the legislature is", options: ["Mace", "Gavel", "Sword", "Staff"], ans: 0 },
  { q: "The minimum age to vote in Nigeria is", options: ["18", "21", "16", "25"], ans: 0 },
  { q: "A person who loves his country is", options: ["Patriot", "Traitor", "Criminal", "Foreigner"], ans: 0 },
  { q: "The Nigerian police motto is", options: ["To protect and serve", "Peace and unity", "Honour and duty", "Justice for all"], ans: 0 },
  { q: "The body that conducts elections in Nigeria is", options: ["INEC", "EFCC", "ICPC", "NECO"], ans: 0 },
  { q: "The Nigerian coat of arms has how many horses?", options: ["1", "2", "3", "4"], ans: 1 },
  { q: "The black shield in the coat of arms represents", options: ["Fertile soil", "Strength", "Unity", "Peace"], ans: 0 },
  { q: "The eagle in the coat of arms represents", options: ["Strength", "Peace", "Unity", "Fertility"], ans: 0 },
  { q: "The two horses represent", options: ["Dignity", "Speed", "Power", "Beauty"], ans: 0 },
  { q: "The motto of Nigeria is", options: ["Unity and Faith, Peace and Progress", "Peace and Unity", "Faith and Strength", "Progress and Peace"], ans: 0 },
  { q: "The number of senators in Nigeria is", options: ["109", "360", "774", "36"], ans: 0 },
  { q: "The head of the judiciary is", options: ["Chief Justice", "President", "Governor", "Speaker"], ans: 0 },
  { q: "Fundamental human rights are contained in chapter", options: ["II", "IV", "VI", "VIII"], ans: 1 },
  { q: "The Nigerian national pledge was written by", options: ["Prof. Ambrose Ali", "Felicia Adebola Adeyoyin", "Wole Soyinka", "Chinua Achebe"], ans: 1 },
  { q: "The Nigerian anthem has how many stanzas?", options: ["2", "3", "1", "4"], ans: 0 },
  { q: "The Nigerian flag was designed by", options: ["Taiwo Akinkunmi", "Herbert Macaulay", "Nnamdi Azikiwe", "Ahmadu Bello"], ans: 0 },
  { q: "The green-white-green flag was adopted in", options: ["1960", "1959", "1963", "1970"], ans: 0 },
  { q: "The Nigerian currency note has the picture of", options: ["Past leaders", "Animals", "Buildings", "Flowers"], ans: 0 },
  { q: "The highest court in Nigeria is", options: ["Supreme Court", "High Court", "Magistrate Court", "Customary Court"], ans: 0 },
  { q: "The Nigerian police force was established in", options: ["1861", "1930", "1960", "1999"], ans: 0 },
  { q: "The Nigerian military has how many arms?", options: ["3", "2", "4", "1"], ans: 0 },
  { q: "The current Nigerian president is from which party?", options: ["APC", "PDP", "LP", "NNPP"], ans: 0 },
  { q: "The Nigerian legislature is bicameral, meaning", options: ["One house", "Two houses", "Three houses", "No house"], ans: 1 },
  { q: "The upper house is called", options: ["Senate", "House of Representatives", "House of Assembly", "Congress"], ans: 0 },
  { q: "The lower house is called", options: ["Senate", "House of Representatives", "House of Assembly", "Congress"], ans: 1 },
  { q: "The Nigerian constitution is", options: ["Written", "Unwritten", "Flexible", "Traditional"], ans: 0 },
  { q: "The Nigerian government is divided into how many tiers?", options: ["2", "3", "4", "1"], ans: 1 },
  { q: "The tiers are Federal, State and", options: ["Local Government", "Regional", "District", "Zone"], ans: 0 },
  { q: "The Nigerian national symbol includes", options: ["Eagle", "Lion", "Tiger", "Elephant"], ans: 0 },
  { q: "The Nigerian motto is written in", options: ["English", "Latin", "French", "Yoruba"], ans: 1 },
  { q: "The Nigerian coat of arms has a", options: ["Y-shaped support", "Cross", "Star", "Moon"], ans: 0 },
  { q: "The Y-shape represents", options: ["Rivers Niger and Benue", "Unity", "Strength", "Peace"], ans: 0 }
],
crs: [
  { q: "God created the world in how many days?", options: ["6", "7", "5", "8"], ans: 0 },
  { q: "The first man created by God was", options: ["Jesus", "Adam", "Noah", "Abraham"], ans: 1 },
  { q: "The first woman was", options: ["Mary", "Eve", "Sarah", "Rebecca"], ans: 1 },
  { q: "The Bible has how many books?", options: ["66", "39", "27", "73"], ans: 0 },
  { q: "The Old Testament has how many books?", options: ["27", "39", "46", "66"], ans: 1 },
  { q: "The New Testament has how many books?", options: ["27", "39", "46", "66"], ans: 0 },
  { q: "The first four books of the New Testament are called", options: ["Gospels", "Acts", "Epistles", "Revelation"], ans: 0 },
  { q: "Jesus was born in", options: ["Jerusalem", "Nazareth", "Bethlehem", "Capernaum"], ans: 2 },
  { q: "The mother of Jesus is", options: ["Elizabeth", "Mary", "Martha", "Sarah"], ans: 1 },
  { q: "Jesus fed 5000 people with", options: ["5 loaves and 2 fish", "7 loaves", "3 loaves", "12 baskets"], ans: 0 },
  { q: "Jesus turned water into", options: ["Milk", "Wine", "Oil", "Juice"], ans: 1 },
  { q: "The last supper was", options: ["Passover meal", "Breakfast", "Wedding feast", "Birthday"], ans: 0 },
  { q: "Jesus died on the", options: ["Cross", "Tree", "Mountain", "Sea"], ans: 0 },
  { q: "Jesus rose from the dead on the", options: ["Third day", "Seventh day", "First day", "Fourth day"], ans: 0 },
  { q: "The disciple who betrayed Jesus was", options: ["Peter", "John", "Judas Iscariot", "Thomas"], ans: 2 },
  { q: "Jesus had how many disciples?", options: ["12", "10", "7", "70"], ans: 0 },
  { q: "The first martyr in the Bible was", options: ["Stephen", "Paul", "Peter", "James"], ans: 0 },
  { q: "The apostle to the Gentiles was", options: ["Peter", "Paul", "John", "James"], ans: 1 },
  { q: "The book of Revelation was written by", options: ["Paul", "Peter", "John", "Luke"], ans: 2 },
  { q: "The ten commandments were given to", options: ["Moses", "Abraham", "David", "Solomon"], ans: 0 },
  { q: "The first commandment is", options: ["No other gods", "Honour parents", "No stealing", "No killing"], ans: 0 },
  { q: "The beatitudes are found in", options: ["Matthew 5", "John 3", "Luke 2", "Mark 10"], ans: 0 },
  { q: "The Lord's Prayer starts with", options: ["Our Father", "Hail Mary", "Glory be", "Forgive us"], ans: 0 },
  { q: "Jesus was baptized by", options: ["John the Baptist", "Peter", "Paul", "Himself"], ans: 0 },
  { q: "The Holy Spirit came on the disciples at", options: ["Pentecost", "Easter", "Christmas", "Passover"], ans: 0 },
  { q: "The fruit of the Spirit includes", options: ["Love, joy, peace", "Anger, hate, war", "Pride, greed", "Laziness"], ans: 0 },
  { q: "The armour of God includes", options: ["Shield of faith", "Sword of money", "Helmet of pride", "Belt of lies"], ans: 0 },
  { q: "The prodigal son story teaches about", options: ["Forgiveness", "Punishment", "Wealth", "Poverty"], ans: 0 },
  { q: "The good Samaritan helped a", options: ["Jew", "Roman", "Priest", "Levite"], ans: 0 },
  { q: "Jesus said 'I am the'", options: ["Way, truth and life", "King only", "Rich man", "Soldier"], ans: 0 },
  { q: "The greatest commandment is to love God and", options: ["Neighbour", "Yourself only", "Money", "Power"], ans: 0 },
  { q: "Jesus performed how many miracles in John?", options: ["7", "12", "5", "3"], ans: 0 },
  { q: "Lazarus was raised from the dead in", options: ["Bethany", "Jerusalem", "Galilee", "Capernaum"], ans: 0 },
  { q: "The transfiguration happened on a", options: ["Mountain", "Sea", "Desert", "Valley"], ans: 0 },
  { q: "Peter denied Jesus how many times?", options: ["3", "2", "1", "4"], ans: 0 },
  { q: "The road to Damascus experience was for", options: ["Paul", "Peter", "John", "James"], ans: 0 },
  { q: "The first Christian martyr was", options: ["Stephen", "Paul", "Barnabas", "Silas"], ans: 0 },
  { q: "The book of Acts is about", options: ["Early church", "Life of Jesus", "Prophecies", "Psalms"], ans: 0 },
  { q: "Jesus ascended to heaven from", options: ["Mount Olives", "Mount Sinai", "Golgotha", "Bethlehem"], ans: 0 },
  { q: "The gifts of the Holy Spirit include", options: ["Wisdom, knowledge", "Pride, greed", "Anger, hate", "Laziness"], ans: 0 },
  { q: "The parable of the sower teaches about", options: ["God's word", "Farming", "Money", "Food"], ans: 0 },
  { q: "The lost sheep parable shows God's", options: ["Love for sinners", "Anger", "Judgment", "Punishment"], ans: 0 },
  { q: "Jesus calmed the storm on the sea of", options: ["Galilee", "Dead Sea", "Red Sea", "Mediterranean"], ans: 0 },
  { q: "The woman at the well was from", options: ["Samaria", "Jerusalem", "Nazareth", "Bethlehem"], ans: 0 },
  { q: "Zacchaeus was a", options: ["Tax collector", "Fisherman", "Carpenter", "Soldier"], ans: 0 },
  { q: "The crucifixion took place at", options: ["Golgotha", "Bethlehem", "Nazareth", "Capernaum"], ans: 0 },
  { q: "Mary Magdalene was the first to see", options: ["Risen Jesus", "Baby Jesus", "Crucified Jesus", "Baptized Jesus"], ans: 0 },
  { q: "The great commission is to", options: ["Go and make disciples", "Stay at home", "Build churches", "Collect money"], ans: 0 },
  { q: "The day of Pentecost is the birthday of", options: ["The church", "Jesus", "John", "Peter"], ans: 0 },
  { q: "Paul wrote many", options: ["Epistles", "Gospels", "Psalms", "Proverbs"], ans: 0 },
  { q: "The book of Psalms is a book of", options: ["Songs and prayers", "History", "Laws", "Prophecy"], ans: 0 },
  { q: "The fear of the Lord is the beginning of", options: ["Wisdom", "Knowledge", "Riches", "Power"], ans: 0 }
],
gov: [
  { q: "The system of government where power is shared between central and state is", options: ["Unitary", "Federal", "Confederal", "Monarchy"], ans: 1 },
  { q: "Nigeria operates a federal system with how many states?", options: ["36", "30", "37", "40"], ans: 0 },
  { q: "The Nigerian constitution is", options: ["Written", "Unwritten", "Flexible", "Oral"], ans: 0 },
  { q: "The 1999 Constitution was promulgated by", options: ["Military government", "Civilian government", "British government", "Traditional rulers"], ans: 0 },
  { q: "The supreme law of Nigeria is the", options: ["Decree", "Constitution", "Act of parliament", "Edict"], ans: 1 },
  { q: "The head of the executive arm is the", options: ["President", "Speaker", "Chief Justice", "Senate President"], ans: 0 },
  { q: "The legislature makes", options: ["Laws", "Judgments", "Policies", "Decrees"], ans: 0 },
  { q: "The judiciary interprets", options: ["Policies", "Laws", "Decrees", "Edicts"], ans: 1 },
  { q: "The principle of separation of powers was propounded by", options: ["Montesquieu", "John Locke", "Rousseau", "Aristotle"], ans: 0 },
  { q: "The Nigerian legislature is", options: ["Unicameral", "Bicameral", "Tricameral", "No chamber"], ans: 1 },
  { q: "The upper chamber is called", options: ["House of Representatives", "Senate", "House of Assembly", "Congress"], ans: 1 },
  { q: "The lower chamber is called", options: ["Senate", "House of Representatives", "House of Chiefs", "Council"], ans: 1 },
  { q: "The number of senators per state is", options: ["3", "1", "2", "4"], ans: 0 },
  { q: "The head of the Senate is the", options: ["Speaker", "Senate President", "Deputy President", "Clerk"], ans: 1 },
  { q: "The head of the House of Representatives is the", options: ["Speaker", "President", "Chairman", "Leader"], ans: 0 },
  { q: "A bill becomes law when", options: ["Signed by President", "Passed by one house", "Debated only", "Proposed"], ans: 0 },
  { q: "The body that conducts elections is", options: ["EFCC", "INEC", "ICPC", "Police"], ans: 1 },
  { q: "The minimum age to contest for president is", options: ["35", "40", "30", "45"], ans: 0 },
  { q: "The Nigerian political party system is", options: ["One-party", "Two-party", "Multi-party", "No party"], ans: 2 },
  { q: "The current Nigerian government structure is", options: ["Presidential", "Parliamentary", "Monarchical", "Dictatorial"], ans: 0 },
  { q: "The Nigerian president is elected for a term of", options: ["4 years", "5 years", "6 years", "Life"], ans: 0 },
  { q: "The maximum term a president can serve is", options: ["8 years", "12 years", "4 years", "Life"], ans: 0 },
  { q: "The Nigerian vice president succeeds the president if", options: ["President dies/resigns", "President travels", "President is sick for one day", "President loses election"], ans: 0 },
  { q: "The Nigerian cabinet is made up of", options: ["Ministers", "Governors", "Senators", "Judges"], ans: 0 },
  { q: "The civil service is", options: ["Permanent", "Temporary", "Elected", "Appointed by party"], ans: 0 },
  { q: "The head of the civil service is the", options: ["President", "Head of Service", "Permanent Secretary", "Director"], ans: 1 },
  { q: "Local government is the", options: ["First tier", "Second tier", "Third tier", "Fourth tier"], ans: 2 },
  { q: "The chairman of local government is elected for", options: ["3 years", "4 years", "2 years", "5 years"], ans: 0 },
  { q: "The Nigerian police is under the", options: ["Ministry of Defence", "Ministry of Interior", "Presidency", "Judiciary"], ans: 1 },
  { q: "The Nigerian military has how many services?", options: ["3", "2", "4", "1"], ans: 0 },
  { q: "The Nigerian judiciary is headed by the", options: ["Chief Justice of Nigeria", "Attorney General", "President", "Governor"], ans: 0 },
  { q: "The highest court in Nigeria is the", options: ["Supreme Court", "Court of Appeal", "High Court", "Magistrate Court"], ans: 0 },
  { q: "The Nigerian constitution recognizes how many languages as official?", options: ["1", "3", "Many", "None"], ans: 0 },
  { q: "The Nigerian national assembly can override presidential veto with", options: ["2/3 majority", "Simple majority", "Unanimous vote", "No override"], ans: 0 },
  { q: "The Nigerian president can be removed through", options: ["Impeachment", "Election", "Resignation only", "Coup"], ans: 0 },
  { q: "The Nigerian government derives power from the", options: ["Military", "Constitution", "Traditional rulers", "Foreign countries"], ans: 1 },
  { q: "The Nigerian political system promotes", options: ["Federal character", "Tribalism", "Nepotism", "Corruption"], ans: 0 },
  { q: "The Nigerian Senate has how many members?", options: ["109", "360", "774", "36"], ans: 0 },
  { q: "The House of Representatives has how many members?", options: ["360", "109", "774", "36"], ans: 0 },
  { q: "The Nigerian government is divided into", options: ["3 arms", "2 arms", "4 arms", "1 arm"], ans: 0 },
  { q: "The principle of checks and balances prevents", options: ["Abuse of power", "Democracy", "Election", "Voting"], ans: 0 },
  { q: "The Nigerian electoral system uses", options: ["First past the post", "Proportional representation", "Direct election only", "Indirect"], ans: 0 },
  { q: "The Nigerian president must belong to a", options: ["Political party", "Military", "Church", "Family"], ans: 0 },
  { q: "The Nigerian constitution was last amended in", options: ["2010", "2018", "2023", "1999"], ans: 0 },
  { q: "The Nigerian government promotes", options: ["Unity in diversity", "Division", "Tribalism", "War"], ans: 0 },
  { q: "The Nigerian youth service is called", options: ["NYSC", "NYC", "NYS", "NSC"], ans: 0 },
  { q: "The Nigerian anthem was composed by", options: ["Lillian Jean Williams", "John Ikechukwu", "Benedict Odiase", "Eme Etim Akpan"], ans: 2 },
  { q: "The Nigerian pledge was written by", options: ["Prof. Felicia Adeyoyin", "Wole Soyinka", "Chinua Achebe", "Taiwo Akinkunmi"], ans: 0 },
  { q: "The Nigerian flag designer is", options: ["Michael Taiwo Akinkunmi", "Herbert Macaulay", "Nnamdi Azikiwe", "Ahmadu Bello"], ans: 0 },
  { q: "The Nigerian government encourages", options: ["Peaceful co-existence", "Violence", "Corruption", "Division"], ans: 0 },
  { q: "The Nigerian constitution guarantees", options: ["Fundamental human rights", "Only voting rights", "Only property rights", "No rights"], ans: 0 }
],
tourism: [
  { q: "Tourism is the movement of people", options: ["To their homes", "Away from their homes for leisure", "To work only", "To school"], ans: 1 },
  { q: "The main reason for tourism is", options: ["Leisure and recreation", "Only business", "Only education", "Only medical"], ans: 0 },
  { q: "A person who travels for pleasure is called", options: ["Tourist", "Traveller", "Visitor", "All of the above"], ans: 3 },
  { q: "Tourism helps to", options: ["Earn foreign exchange", "Cause pollution only", "Destroy culture", "Increase unemployment"], ans: 0 },
  { q: "The famous rock in Jos is", options: ["Olumo Rock", "Zuma Rock", "Aso Rock", "Shere Hills"], ans: 1 },
  { q: "Yankari Game Reserve is in", options: ["Bauchi State", "Kano State", "Plateau State", "Kaduna State"], ans: 0 },
  { q: "Obudu Cattle Ranch is located in", options: ["Cross River State", "Benue State", "Plateau State", "Taraba State"], ans: 0 },
  { q: "The famous waterfall in Nigeria is", options: ["Gurara Falls", "Victoria Falls", "Niagara Falls", "Angel Falls"], ans: 0 },
  { q: "The National Theatre is in", options: ["Lagos", "Abuja", "Enugu", "Port Harcourt"], ans: 0 },
  { q: "The Durbar festival is celebrated in", options: ["Northern Nigeria", "Eastern Nigeria", "Western Nigeria", "Southern Nigeria"], ans: 0 },
  { q: "Argungu Fishing Festival is in", options: ["Kebbi State", "Kano State", "Sokoto State", "Jigawa State"], ans: 0 },
  { q: "The Osun Osogbo festival is in", options: ["Osun State", "Oyo State", "Ondo State", "Ekiti State"], ans: 0 },
  { q: "Tourism promotes", options: ["Cultural exchange", "Isolation", "Hatred", "War"], ans: 0 },
  { q: "The longest river in Nigeria is", options: ["River Niger", "River Benue", "Cross River", "River Kaduna"], ans: 0 },
  { q: "The highest mountain in Nigeria is", options: ["Chappal Waddi", "Aso Rock", "Idanre Hills", "Olumo Rock"], ans: 0 },
  { q: "The Sukur Cultural Landscape is in", options: ["Adamawa State", "Taraba State", "Borno State", "Gombe State"], ans: 0 },
  { q: "The Kainji Lake National Park is famous for", options: ["Wildlife", "Fishing only", "Swimming", "Boating only"], ans: 0 },
  { q: "Eco-tourism focuses on", options: ["Nature conservation", "City life", "Shopping", "Business"], ans: 0 },
  { q: "The National Museum is located in", options: ["Lagos", "Abuja", "Benin", "Jos"], ans: 0 },
  { q: "The famous Idanre Hills are in", options: ["Ondo State", "Ekiti State", "Ogun State", "Oyo State"], ans: 0 },
  { q: "Tourism creates", options: ["Employment", "Unemployment", "Poverty", "Crime"], ans: 0 },
  { q: "The Calabar Carnival is held in", options: ["Cross River State", "Rivers State", "Akwa Ibom State", "Bayelsa State"], ans: 0 },
  { q: "The Eyo Festival is celebrated in", options: ["Lagos", "Ibadan", "Abeokuta", "Ijebu"], ans: 0 },
  { q: "The New Yam Festival is common among", options: ["Igbo people", "Yoruba people", "Hausa people", "Fulani people"], ans: 0 },
  { q: "Medical tourism means travelling for", options: ["Medical treatment", "Shopping", "Education", "Business"], ans: 0 },
  { q: "The famous Erin Ijesha waterfall is in", options: ["Osun State", "Ondo State", "Ekiti State", "Ogun State"], ans: 0 },
  { q: "Tourism infrastructure includes", options: ["Hotels and roads", "Schools only", "Hospitals only", "Markets only"], ans: 0 },
  { q: "The Nike Art Gallery is in", options: ["Lagos", "Abuja", "Enugu", "Port Harcourt"], ans: 0 },
  { q: "The Gashaka Gumti National Park is in", options: ["Taraba State", "Adamawa State", "Bauchi State", "Plateau State"], ans: 0 },
  { q: "Religious tourism includes visiting", options: ["Holy sites", "Markets", "Schools", "Airports"], ans: 0 },
  { q: "The famous Olumo Rock is in", options: ["Abeokuta", "Ibadan", "Oshogbo", "Ilorin"], ans: 0 },
  { q: "The Lekki Conservation Centre is in", options: ["Lagos", "Abuja", "Port Harcourt", "Calabar"], ans: 0 },
  { q: "Tourism can be classified as", options: ["Domestic and international", "Only domestic", "Only international", "None"], ans: 0 },
  { q: "The benefits of tourism include", options: ["Revenue generation", "Pollution only", "Crime only", "Unemployment"], ans: 0 },
  { q: "The Abuja National Mosque is an example of", options: ["Religious tourism site", "Market", "School", "Hospital"], ans: 0 },
  { q: "The Tinapa Resort is in", options: ["Cross River State", "Akwa Ibom State", "Rivers State", "Bayelsa State"], ans: 0 },
  { q: "The famous Ikogosi Warm Springs is in", options: ["Ekiti State", "Ondo State", "Osun State", "Oyo State"], ans: 0 },
  { q: "Cultural tourism involves", options: ["Festivals and traditions", "Shopping only", "Business meetings", "Medical treatment"], ans: 0 },
  { q: "The National War Museum is in", options: ["Umuahia", "Enugu", "Owerri", "Aba"], ans: 0 },
  { q: "The Ogbunike Cave is in", options: ["Anambra State", "Enugu State", "Imo State", "Abia State"], ans: 0 },
  { q: "Tourism promotes", options: ["Peace and understanding", "War", "Hatred", "Division"], ans: 0 },
  { q: "The famous Awhum Waterfall is in", options: ["Enugu State", "Anambra State", "Ebonyi State", "Imo State"], ans: 0 },
  { q: "The Mambilla Plateau is known for", options: ["Cool climate", "Desert", "Hot weather", "Swamp"], ans: 0 },
  { q: "The Benin Moat is a historical site in", options: ["Edo State", "Delta State", "Ondo State", "Ogun State"], ans: 0 },
  { q: "The Emir's Palace in Kano is an example of", options: ["Cultural heritage", "Modern building", "School", "Hospital"], ans: 0 },
  { q: "The Jos Wildlife Park is famous for", options: ["Animals", "Plants only", "Rocks", "Water"], ans: 0 },
  { q: "The famous Farin Ruwa Falls is in", options: ["Nasarawa State", "Plateau State", "Benue State", "Kogi State"], ans: 0 },
  { q: "Adventure tourism includes", options: ["Hiking and rafting", "Shopping", "Reading", "Sleeping"], ans: 0 },
  { q: "The National Arts Theatre in Lagos is used for", options: ["Cultural performances", "Sports", "Politics", "Business"], ans: 0 },
  { q: "The importance of tourism to Nigeria is", options: ["Economic development", "Only entertainment", "Only education", "None"], ans: 0 },
  { q: "Sustainable tourism means", options: ["Protecting the environment", "Destroying nature", "Building more hotels only", "Increasing prices"], ans: 0 }
],
currentaffairs: [
  { q: "Who is the current President of Nigeria as of 2025?", options: ["Muhammadu Buhari", "Goodluck Jonathan", "Bola Ahmed Tinubu", "Yemi Osinbajo"], ans: 2 }, // C
  { q: "The Nigerian currency is called", options: ["Dollar", "Pound", "Naira", "Cedi"], ans: 2 }, // C
  { q: "Nigeria gained independence in what year?", options: ["1960", "1963", "1970", "1950"], ans: 0 }, // A
  { q: "The capital city of Nigeria is", options: ["Lagos", "Abuja", "Port Harcourt", "Kano"], ans: 1 }, // B
  { q: "How many states are in Nigeria?", options: ["36", "30", "37", "774"], ans: 0 }, // A
  { q: "The Nigerian flag has how many colours?", options: ["2", "3", "4", "5"], ans: 1 }, // B
  { q: "The green colour in the Nigerian flag represents", options: ["Peace", "Agriculture and rich soil", "Unity", "Strength"], ans: 1 }, // B
  { q: "The white colour in the Nigerian flag represents", options: ["Peace and unity", "Agriculture", "Strength", "Fertility"], ans: 0 }, // A
  { q: "The current Senate President of Nigeria (2025) is", options: ["David Mark", "Godswill Akpabio", "Bukola Saraki", "Ahmed Lawan"], ans: 1 }, // B
  { q: "In 2025, Nigeria faced a severe", options: ["Fuel scarcity crisis", "Cost of living crisis", "Electricity surplus", "Free education"], ans: 1 }, // B
  { q: "The removal of fuel subsidy in 2023 caused", options: ["Lower prices", "Higher fuel prices and inflation", "More jobs", "Free transport"], ans: 1 }, // B
  { q: "Mass kidnappings of school children in 2025 occurred mainly in", options: ["Southern Nigeria", "Northwest and North-central Nigeria", "Eastern Nigeria", "Southwest"], ans: 1 }, // B
  { q: "In November 2025, over 300 students were kidnapped from a school in", options: ["Niger State", "Lagos State", "Oyo State", "Enugu State"], ans: 0 }, // A
  { q: "The agency fighting corruption in Nigeria is", options: ["EFCC", "INEC", "NYSC", "NCDC"], ans: 0 }, // A
  { q: "The body that conducts elections in Nigeria is", options: ["EFCC", "INEC", "ICPC", "Police"], ans: 1 }, // B
  { q: "The Nigerian police motto is", options: ["Police is your friend", "To serve and protect", "Justice and fairness", "Peace and security"], ans: 0 }, // A
  { q: "The current Chief Justice of Nigeria (as of 2025) is", options: ["Walter Onnoghen", "Ibrahim Tanko Muhammad", "Olukayode Ariwoola", "Kudirat Kekere-Ekun"], ans: 3 }, // D (update if changed)
  { q: "Nigeria is a member of which organization?", options: ["EU", "AU (African Union)", "NATO", "ASEAN"], ans: 1 }, // B
  { q: "The largest ethnic group in Nigeria is", options: ["Yoruba", "Igbo", "Hausa-Fulani", "Ijaw"], ans: 2 }, // C
  { q: "The Nigerian national anthem is", options: ["Nigeria We Hail Thee", "Arise O Compatriots", "Stand Up Nigeria", "God Bless Nigeria"], ans: 1 }, // B
  { q: "The Nigerian pledge ends with 'so help me God' to be", options: ["Faithful, loyal and honest", "Rich and famous", "Strong and brave", "Wise and clever"], ans: 0 }, // A
  { q: "Democracy Day in Nigeria is celebrated on", options: ["May 29", "June 12", "October 1", "December 25"], ans: 1 }, // B
  { q: "The Nigerian coat of arms has an eagle representing", options: ["Peace", "Strength", "Unity", "Fertility"], ans: 1 }, // B
  { q: "The two horses on the coat of arms represent", options: ["Dignity", "Speed", "Power", "Beauty"], ans: 0 }, // A
  { q: "The black shield represents Nigeria's", options: ["Fertile soil", "Strength", "Unity", "Rivers"], ans: 0 }, // A
  { q: "The Y-shaped band represents", options: ["Rivers Niger and Benue", "Unity", "Strength", "Peace"], ans: 0 }, // A
  { q: "The flowers at the base represent", options: ["Beauty of the nation", "Wealth", "Power", "War"], ans: 0 }, // A
  { q: "The Nigerian motto is", options: ["Unity and Faith, Peace and Progress", "Peace and Unity", "Faith and Strength", "Progress and Peace"], ans: 0 }, // A
  { q: "The number of local governments in Nigeria is", options: ["774", "36", "109", "360"], ans: 0 }, // A
  { q: "The NYSC was established in", options: ["1973", "1960", "1999", "1980"], ans: 0 }, // A
  { q: "The purpose of NYSC is to promote", options: ["National unity", "Wealth", "Education", "Sports"], ans: 0 }, // A
  { q: "The current CBN Governor (2025) is", options: ["Godwin Emefiele", "Yemi Cardoso", "Sanusi Lamido", "Charles Soludo"], ans: 1 }, // B
  { q: "The Nigerian stock exchange is located in", options: ["Abuja", "Lagos", "Port Harcourt", "Kano"], ans: 1 }, // B
  { q: "The official language of Nigeria is", options: ["Hausa", "English", "Yoruba", "Igbo"], ans: 1 }, // B
  { q: "Nigeria is in which continent?", options: ["Asia", "Europe", "Africa", "America"], ans: 2 }, // C
  { q: "The largest city in Nigeria by population is", options: ["Abuja", "Lagos", "Kano", "Ibadan"], ans: 1 }, // B
  { q: "The Nigerian military has how many arms?", options: ["2", "3", "4", "1"], ans: 1 }, // B (Army, Navy, Air Force)
  { q: "The current Minister of Education (2025) is", options: ["Adamu Adamu", "Tunji Alausa", "Mamman Tahir", "Unknown"], ans: 1 }, // B (check latest)
  { q: "The NCDC stands for", options: ["Nigeria Centre for Disease Control", "National Development Centre", "Nigeria Crime Detection Centre", "National Census Department"], ans: 0 }, // A
  { q: "The Nigerian space agency is", options: ["NASRDA", "NASA", "NCDC", "INEC"], ans: 0 }, // A
  { q: "The first Nigerian satellite was launched in", options: ["2003", "1999", "2011", "2020"], ans: 0 }, // A
  { q: "The Nigerian passport colour is", options: ["Blue", "Green", "Red", "Black"], ans: 1 }, // B
  { q: "The Nigerian driving side is", options: ["Left", "Right", "Centre", "Both"], ans: 1 }, // B
  { q: "The Nigerian time zone is", options: ["GMT", "WAT (West Africa Time)", "EST", "PST"], ans: 1 }, // B
  { q: "The Nigerian population is approximately", options: ["100 million", "200 million", "150 million", "300 million"], ans: 1 }, // B (over 200m)
  { q: "The Nigerian GDP is driven mainly by", options: ["Agriculture", "Oil", "Technology", "Tourism"], ans: 1 }, // B
  { q: "The Nigerian oil is found mainly in", options: ["North", "Niger Delta", "West", "East"], ans: 1 }, // B
  { q: "The Nigerian Super Eagles are the national", options: ["Basketball team", "Football team", "Volleyball team", "Athletics team"], ans: 1 }, // B
  { q: "The Nigerian currency symbol is", options: ["$", "₦", "£", "€"], ans: 1 }, // B
  { q: "The Nigerian national dish is often considered", options: ["Jollof rice", "Pounded yam", "Eba", "Suya"], ans: 0 } // A
],
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



// Inside your theme toggle event listener
themeCheckbox.addEventListener('change', () => {
  document.body.classList.toggle('light', themeCheckbox.checked);
  
  // Update label text
  document.getElementById('modeLabel').textContent = themeCheckbox.checked ? 'Light Mode' : 'Dark Mode';
});






//...."what is the problems and give me instant solution. 
//If the text limit is reached i will prompt you to give me more........