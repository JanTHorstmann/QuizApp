function showQuestion(questionSelection) {
    let questioncard = document.getElementById('currentquestion');

    if (questionSelection == 'htmlQuestions' || htmlQuestions ) {
        htmlQuestion(questioncard);
    }
    if (questionSelection == 'start') {
        questioncard.innerHTML = renderStartscreen();
    }
};

function htmlQuestion(questioncard) {
    let question = htmlQuestions[currentquestion]
    document.getElementById('hoverhtml').classList.add('border-left-3');
    document.getElementById('hovercss').classList.remove('border-left-3');
    document.getElementById('hoverjs').classList.remove('border-left-3');
    document.getElementById('hoverjava').classList.remove('border-left-3');
    if (currentquestion < htmlQuestions.length) {

        let percent = Math.round((currentquestion + 1) / htmlQuestions.length * 100);
        questioncard.innerHTML = renderQuestion(question, 'rightHTMLQuestions', 'htmlQuestions');
        countQuestion(htmlQuestions, percent);
    } else {
        // Endscreen
        questioncard.innerHTML = renderEndscreen();
    }

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
        /*if (questions == cssQuestions) {
            rightCSSQuestions++
        };
        if (questions == jsQuestions) {
            rightJSQuestions++
        };
        if (questions == javaQuestions) {
            rightJavaQuestions++
        };*/
    } else {
        bganswer.classList.add('bg_false');
        document.getElementById(idOfRightanswer).classList.add('bg_success');
    }
    document.getElementById('next-button').disabled = false;
    document.getElementById('back-button').disabled = false;
}


function nextQuestion(count, questionSelection) {
    count++
    currentquestion++;
    showQuestion(questionSelection);
}


function restartGame() {
    rightQuestions = 0;
    currentquestion = 0;
    showQuestion();
}


function countQuestion(question, percent) {
    document.getElementById('question-count').innerHTML = `<b>${currentquestion + 1}</b> von <b>${question.length}</b>`;
    document.getElementById('progressbar').innerHTML = `<div class="progressbar" style="width: ${percent}%;">${percent}%</div>`;
}


