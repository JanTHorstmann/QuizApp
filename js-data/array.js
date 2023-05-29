let htmlQuestions = [
    {
        "question": "Wer hat HTML erfunden?",
        "answer_1": "Robbie Williams",
        "answer_2": "Lady Gaga",
        "answer_3": "Tim Berners-Lee",
        "answer_4": "Justin Bieber",
        "right_answer": 3,
    },

    {
        "question": "Wie oft darf eine ID verwendet werden?",
        "answer_1": "Für mehrere HTML Tags",
        "answer_2": "Nur einmal",
        "answer_3": "Solange es der gleiche HTML Tag ist öfter",
        "answer_4": "ID´s sind nicht im HTML zu verwenden",
        "right_answer": 2,
    },
    {
        "question": "Was wird mit einem < b > Tag bestimmt?",
        "answer_1": "Text Fett",
        "answer_2": "Link",
        "answer_3": "Button",
        "answer_4": "Text Kursiv",
        "right_answer": 1,
    },
];

let cssQuestions = [
    {
        "question": "Wie wird eine Klasse definiert?",
        "answer_1": "Mit einem '.'",
        "answer_2": "Mit einem '#'",
        "answer_3": "Eine Klasse benötigt kein Sonderzeichen",
        "answer_4": "Die Klassen werden nur im Javascript verwendet",
        "right_answer": 1,
    },

    {
        "question": "Wie wird eine ID definiert?",
        "answer_1": "Mit einem '.'",
        "answer_2": "Mit einem '#'",
        "answer_3": "Eine ID benötigt kein Sonderzeichen",
        "answer_4": "Im CSS werden keine ID´s benutzt",
        "right_answer": 2,
    },
    {
        "question": "Welche CSS-Eigenschaft wird verwendet, um den Hintergrund eines Elements zu ändern?",
        "answer_1": "color",
        "answer_2": "font-size",
        "answer_3": "background-color",
        "answer_4": "border-style",
        "right_answer": 3,
    },
];

let jsQuestions = [
    {
        "question": "Welche Methode wird verwendet, um ein Element in JavaScript auszuwählen und darauf zuzugreifen?",
        "answer_1": "getElementById()",
        "answer_2": "appendChild()",
        "answer_3": "removeChild()",
        "answer_4": "Math.random()",
        "right_answer": 1,
    },

    {
        "question": "Welche Funktion wird verwendet, um eine Zeichenkette in JavaScript in eine Ganzzahl umzuwandeln?",
        "answer_1": "parseFloat()",
        "answer_2": "toFixed()",
        "answer_3": "parseInt()",
        "answer_4": "Math.floor()",
        "right_answer": 3,
    },
    {
        "question": "Welche Methode wird verwendet, um die Länge einer Zeichenkette in JavaScript zu ermitteln?",
        "answer_1": "slice()",
        "answer_2": "length()",
        "answer_3": "indexOf()",
        "answer_4": "Math.round()",
        "right_answer": 2,
    },
];

let javaQuestions = [
    {
        "question": "Welche Schleife wird in Java verwendet, um eine bestimmte Anzahl von Iterationen durchzuführen?",
        "answer_1": "if-Schleife",
        "answer_2": "while-Schleife",
        "answer_3": "for-Schleife",
        "answer_4": "switch-Schleife",
        "right_answer": 3,
    },

    {
        "question": "Welcher Datentyp in Java wird verwendet, um einzelne Zeichen zu speichern?",
        "answer_1": "int",
        "answer_2": "boolean",
        "answer_3": "char",
        "answer_4": "double",
        "right_answer": 3,
    },
    {
        "question": "Welche Methode wird verwendet, um einen neuen Objektinstanz in Java zu erstellen?",
        "answer_1": "create()",
        "answer_2": "new()",
        "answer_3": "instance()",
        "answer_4": "object()",
        "right_answer": 2,
    },
];
let rightHTMLQuestions = 0;
let rightCSSQuestions = 0;
let rightJSQuestions = 0;
let rightJavaQuestions = 0;
let currentquestion = 0;

let questionfinish = ['html'];