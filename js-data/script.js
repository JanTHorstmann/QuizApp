function showQuestion(questionSelection, rightquestions) {
    let questioncard = document.getElementById('currentquestion');
    removeCssClass();

    if (questionSelection == 'start') {
        questioncard.innerHTML = renderStartscreen();
    } else {
        
        rightquestions = 0;
        //answerd();
        currentquestion = 0;
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
}


function nextQuestion(questionSelection) {
    currentquestion++;
    questions(questionSelection);
}

function backQuestion(questionSelection) {
    reduceRightAnswer(questionSelection);
    if (currentquestion == 0) {
        showQuestion('start')
    } else {
        currentquestion--;
        questions(questionSelection);
    }
}

function reduceRightAnswer(questionSelection) {
    if (questionSelection == htmlQuestions) {
        if(rightHTMLQuestions == 0){
            return
        } else {
        rightHTMLQuestions--
        }
    };
    if (questionSelection == cssQuestions) {
        if(rightCSSQuestions == 0){
            return
        } else {
        rightCSSQuestions--
        }
    };
    if (questionSelection == jsQuestions) {
        if(rightJSQuestions == 0){
            return
        } else {
        rightJSQuestions--
        }
    };
    if (questionSelection == javaQuestions) {
        if(rightJavaQuestions == 0){
            return
        } else {
        rightJavaQuestions--
        }
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
    let rightquestions = countAllQuestions('rightanswer');
    let allquestions = countAllQuestions();
    let percent = Math.round((rightquestions + 1) / allquestions.length * 100);
    document.getElementById('question-count').innerHTML = `<b>${rightquestions}</b> von <b>${allquestions}</b>`;
    document.getElementById('progressbar').innerHTML = `<div class="progressbar" style="width: ${percent}%;">${percent}%</div>`;
}