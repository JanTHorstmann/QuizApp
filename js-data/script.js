function startQuiz(indexOfQuestion, questionSelection) {

    if (indexOfQuestion == -1) {
        reduceRightAnswer(questionSelection)
        questions(questionSelection);
    } else {
        questions(questionSelection);
    }

}





function showQuestion(questionSelection, index, type) {
    let questioncard = document.getElementById('currentquestion');
    let indexOfQuestion = questionfinish.indexOf(`${index}`)

    
    removeCssClass();

        currentquestion = 0;
        questioncard.innerHTML = renderStartQuiz(indexOfQuestion, questionSelection, type);
    
};


function questions(questionSelection) {
    let questioncard = document.getElementById('currentquestion');
    if (questionSelection == 'htmlQuestions' || questionSelection == htmlQuestions) {
        htmlQuestion(questioncard,);
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
        audio_success.play();

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
        audio_fail.play();
        bganswer.classList.add('bg_false');
        //document.getElementById(idOfRightanswer).classList.add('bg_success');
    }
    disableButtons();
}


function disableButtons() {
    document.getElementById('answer_1').onclick = null;
    document.getElementById('answer_2').onclick = null;
    document.getElementById('answer_3').onclick = null;
    document.getElementById('answer_4').onclick = null;
    document.getElementById('next-button').disabled = false;
}


function nextQuestion(questionSelection) {
    currentquestion++;
    questions(questionSelection);
}

function backQuestion(questionSelection) {
    reduceRightAnswer(questionSelection);
    showQuestion('start');
}

function reduceRightAnswer(questionSelection) {
    if (questionSelection == htmlQuestions || questionSelection == 'htmlQuestions') {
        rightHTMLQuestions = 0
    };
    if (questionSelection == cssQuestions || questionSelection == 'cssQuestions') {
        rightCSSQuestions = 0;
    };
    if (questionSelection == jsQuestions || questionSelection == 'jsQuestions') {
        rightJSQuestions = 0;
    };
    if (questionSelection == javaQuestions || questionSelection == 'javaQuestions') {
        rightJavaQuestions = 0;
    };
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


function deleteQuestionSelection(selection) {
    if (selection == htmlQuestions) {
        rightHTMLQuestions = 0;
        let removefinishquestion = questionfinish.indexOf('html')
        questionfinish.splice(removefinishquestion, 1)
        showQuestion('htmlQuestions');
    };
    if (selection == cssQuestions) {
        rightCSSQuestions = 0;
        let removefinishquestion = questionfinish.indexOf('css')
        questionfinish.splice(removefinishquestion, 1)
        showQuestion('cssQuestions');
    };
    if (selection == jsQuestions) {
        rightJSQuestions = 0;
        let removefinishquestion = questionfinish.indexOf('js')
        questionfinish.splice(removefinishquestion, 1)
        showQuestion('jsQuestions');
    };
    if (selection == javaQuestions) {
        rightJavaQuestions = 0;
        let removefinishquestion = questionfinish.indexOf('java')
        questionfinish.splice(removefinishquestion, 1)
        showQuestion('javaQuestions');
    };
}


function removeCssClass() {
    document.getElementById('hoverstart').classList.remove('border-left-3');
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

function countQuestion() {
    let progressbar = document.getElementById('progressbar');
    let rightquestions = countAllQuestions('rightanswer');
    let allquestions = countAllQuestions();
    let percent = Math.round((rightquestions / allquestions) * 100);
    progressbar.innerHTML = `<div id="progress" style="width: ${percent}%;">${percent}%</div>`;
    activateProgressbar(percent);
    //document.getElementById('question-count').innerHTML = `<b>${rightquestions}</b> von <b>${allquestions}</b>`;
}

function activateProgressbar(percent) {
    let progress = document.getElementById('progress');
    if (percent == 0) {
        progress.classList.add('progress');
    } else {
        progress.classList.add('progressbar');
    };
}