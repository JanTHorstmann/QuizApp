
//-----------------------------------------------------//
//------------shows which page is active---------------//
//-----------------------------------------------------//

function removeAddCssclass(id) {
    document.getElementById('hoverstart').classList.remove('border-left-3');
    document.getElementById('hoverHTML').classList.remove('border-left-3');
    document.getElementById('hoverCSS').classList.remove('border-left-3');
    document.getElementById('hoverJavaScript').classList.remove('border-left-3');
    document.getElementById('hoverJava').classList.remove('border-left-3');
    document.getElementById(`hover${id}`).classList.add('border-left-3');
}

//-----------------------------------------------------//
//-------shows how many questions are answered---------//
//-----------------------------------------------------//

function showStartscreen(id) {
    let questioncard = document.getElementById('currentquestion');
    let rightHTML = countRightQuestion(HTML);
    let rightCSS = countRightQuestion(CSS);
    let rightJS = countRightQuestion(JavaScript);
    let rightJava = countRightQuestion(Java);
    removeAddCssclass(id);
    document.getElementById('hoverstart').classList.add('border-left-3');
    questioncard.innerHTML = renderStartscreen(rightHTML, rightCSS, rightJS, rightJava);
    countQuestion();
}

//-----------------------------------------------------//
//------------------start any quiz---------------------//
//-----------------------------------------------------//

function startQuiz(id, questionarray, array, countid) {
    let questioncard = document.getElementById('currentquestion');
    removeAddCssclass(id);
    if (countid.length < array.length) {
        if (countid.length == 0) {
            questioncard.innerHTML = renderStartQuiz(id, questionarray);
        } else {
            questioncard.innerHTML = continueQuiz(id, questionarray)
        }
    } else {
        let rightanswer = countRightQuestion(countid);
        questioncard.innerHTML = renderEndscreen(id, array, rightanswer, questionarray);
    }
}

//-----------------------------------------------------//
//----------renders questions and endscreen------------//
//-----------------------------------------------------//

function questions(questionarray, array, id, countid) {
    let questioncard = document.getElementById('currentquestion');

    if (countid.length < questionarray.length) {
        questioncard.innerHTML = renderQuestion(questionarray, array, id, countid);
    } else {
        let rightanswer = countRightQuestion(countid);
        questioncard.innerHTML = renderEndscreen(id, questionarray, rightanswer, array);
    }
    countQuestion()
}

//----------------------------------------------------//
//-----------------------answer-----------------------//
//----------------------------------------------------//

function answer(answer, rightanswer, id) {
    let answernumber = answer.slice(-1);

    let bganswer = document.getElementById(answer);
    if (answernumber == rightanswer) {
        bganswer.classList.add('bg_success');
        audio_success.play();
        id.push(1);
    } else {
        audio_fail.play();
        bganswer.classList.add('bg_false');
        id.push(0);
    }
    disableButtons();
}

//----------------------------------------------------//
//------------delete one questionselection------------//
//----------------------------------------------------//

function deleteQuestionArea(id) {
    id.splice(0, id.length);
}

//----------------------------------------------------//
//-------------delete all right questions-------------//
//----------------------------------------------------//

function restartGame() {
    HTML = [];
    CSS = [];
    JavaScript = [];
    Java = [];
    countQuestion();
    showStartscreen('start');
}

//-----------------------------------------------------//
//--------------count right questions------------------//
//-----------------------------------------------------//

function countRightQuestion(id) {
    let sum = 0;
    for (let i = 0; i < id.length; i++) {
        sum += +id[i];
    }
    return sum;
}

//-----------------------------------------------------//
//----------------count progressbar--------------------//
//-----------------------------------------------------//

function countQuestion() {
    let progressbar = document.getElementById('progressbar');
    let rightquestions = countAllQuestions('rightanswer');
    let allquestions = countAllQuestions();
    let percent = Math.round((rightquestions / allquestions) * 100);
    progressbar.innerHTML = `<div id="progress" style="width: ${percent}%;">${percent}%</div>`;
    activateProgressbar(percent);
}


function countAllQuestions(questions) {
    if (questions == 'rightanswer') {
        return rightanswer = HTML.length + CSS.length + JavaScript.length + Java.length;
    } else {
        return allquestions = htmlQuestions.length + cssQuestions.length + jsQuestions.length + javaQuestions.length;
    };
}


function activateProgressbar(percent) {
    let progress = document.getElementById('progress');
    if (percent == 0) {
        progress.classList.add('progress');
    } else {
        progress.classList.add('progressbar');
    };
}

//------------------------------------------------------//
//------------------deactivate buttons------------------//
//------------------------------------------------------//

function disableButtons() {
    document.getElementById('answer_1').onclick = null;
    document.getElementById('answer_2').onclick = null;
    document.getElementById('answer_3').onclick = null;
    document.getElementById('answer_4').onclick = null;
    document.getElementById('next-button').disabled = false;
}