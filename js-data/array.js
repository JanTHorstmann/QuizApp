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
        "right_answer": 1,
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

let jsQuestions = [
    {
        "question": "Wer hat Javascript erfunden?",
        "answer_1": "Robbie Williams",
        "answer_2": "Lady Gaga",
        "answer_3": "Tim Berners-Lee",
        "answer_4": "Justin Bieber",
        "right_answer": 3,
    },

    {
        "question": "Was wird mit einem < a > Tag bestimmt?",
        "answer_1": "Text Fett",
        "answer_2": "Link",
        "answer_3": "Button",
        "answer_4": "Text Kursiv",
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

let javaQuestions = [
    {
        "question": "Wer hat Java erfunden?",
        "answer_1": "Robbie Williams",
        "answer_2": "Lady Gaga",
        "answer_3": "Tim Berners-Lee",
        "answer_4": "Justin Bieber",
        "right_answer": 3,
    },

    {
        "question": "Was wird mit einem < a > Tag bestimmt?",
        "answer_1": "Text Fett",
        "answer_2": "Link",
        "answer_3": "Button",
        "answer_4": "Text Kursiv",
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
let rightHTMLQuestions = 0;
let rightCSSQuestions = 0;
let rightJSQuestions = 0;
let rightJavaQuestions = 0;
let currentquestion = 0;

let questionfinish = [];