function showQuestion(questionSelection) {
    let questioncard = document.getElementById('currentquestion');
    removeCssClass();

    if (questionSelection == 'start') {
        questioncard.innerHTML = renderStartscreen();
    } else {
        //answerd();
        questions(questionSelection);
    }
    countQuestion();
};


function questions(questionSelection) {
    let questioncard = document.getElementById('currentquestion');
    if (questionSelection == 'htmlQuestions' || questionSelection == htmlQuestions) {

        htmlQuestion(questioncard);

    };
    if (questionSelection == 'cssQuestions' || questionSelection == cssQuestions) {

        cssQuestion(questioncard);
    };
    if (questionSelection == 'jsQuestions' || questionSelection == jsQuestions) {

        jsQuestion(questioncard);
    };
    if (questionSelection == 'javaQuestions' || questionSelection == javaQuestions) {

        javaQuestion(questioncard);
    };
    countQuestion();
}


function answer(questions, answer) {
    let question = questions[currentquestion];
    let answernumber = answer.slice(-1);
    let bganswer = document.getElementById(answer);
    let idOfRightanswer = `answer_${question['right_answer']}`
    if (answernumber == question['right_answer']) {
        bganswer.classList.add('bg_success');
        if (questions == htmlQuestions) {
            rightHTMLQuestions++
        };
        if (questions == cssQuestions) {
            rightCSSQuestions++
        };
        if (questions == jsQuestions) {
            rightJSQuestions++
        };
        if (questions == javaQuestions) {
            rightJavaQuestions++
        };
    } else {
        bganswer.classList.add('bg_false');
        document.getElementById(idOfRightanswer).classList.add('bg_success');
    }
    document.getElementById('next-button').disabled = false;
    document.getElementById('back-button').disabled = false;
}


function nextQuestion(questionSelection) {
    currentquestion++;
    questions(questionSelection);
}

function backQuestion(questionSelection) {
    currentquestion--;
    questions(questionSelection);
}

function restartGame() {
    rightHTMLQuestions = 0;
    rightCSSQuestions = 0;
    rightJSQuestions = 0;
    rightJavaQuestions = 0;
    currentquestion = 0;
    questionfinish.splice(0, 4)
    showQuestion('start');
}


function countQuestion(question, percent) {
    let rightquestions = countAllQuestions('rightanswer');
    let allquestions = countAllQuestions()
    document.getElementById('question-count').innerHTML = `<b>${rightquestions}</b> von <b>${allquestions}</b>`;
    document.getElementById('progressbar').innerHTML = `<div class="progressbar" style="width: ${percent}%;">${percent}%</div>`;
}

function removeCssClass() {
    document.getElementById('hoverhtml').classList.remove('border-left-3');
    document.getElementById('hovercss').classList.remove('border-left-3');
    document.getElementById('hoverjs').classList.remove('border-left-3');
    document.getElementById('hoverjava').classList.remove('border-left-3');
}


function countAllQuestions(questions) {

    if (questions == 'rightanswer') {
        return rightanswer = rightHTMLQuestions + rightCSSQuestions + rightJSQuestions + rightJavaQuestions;
    } else {
        return allquestions = htmlQuestions.length + cssQuestions.length + jsQuestions.length + javaQuestions.length;
    }
}