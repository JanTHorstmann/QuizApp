function renderQuestion(question, array, rightquestion, selection) {
    return `<h2 class="question">${question['question']}</h2>
            <div class="answer flex-column-between">
                <div id="answer_1" class="answercard" onclick="answer(${array}, 'answer_1')">
                    <div class="answer-number text-center">A</div><span>${question['answer_1']}</span>
                </div>
                <div id="answer_2" class="answercard" onclick="answer(${array}, 'answer_2')">
                    <div class="answer-number text-center">B</div><span>${question['answer_2']}</span>
                </div>
                <div id="answer_3" class="answercard" onclick="answer(${array}, 'answer_3')">
                    <div class="answer-number text-center">C</div><span>${question['answer_3']}</span>
                </div>
                <div id="answer_4" class="answercard" onclick="answer(${array}, 'answer_4')">
                    <div class="answer-number text-center">D</div><span>${question['answer_4']}</span>
                </div>
            </div>
            <div class="question-footer">
                <button id="back-button" onclick="backQuestion(${array})">Back</button>
                <p>${rightquestion} / ${selection.length}</p>
                <button id="next-button" disabled onclick="nextQuestion(${array})">Next</button>
            </div>`
}


function renderStartscreen() {
    return `<div class="startselection display-between-center">
                <img src="img/brain result.png" alt="">
                <h2 class="question">Wähle deinen Fragenbereich</h2>
            </div>
            <div class="answer flex-column-between">
                <div id="answer_1" class="question-progress">
                    <span>HTML</span><span>${rightHTMLQuestions} / ${htmlQuestions.length}</span>
                </div>
                <div id="answer_2" class="question-progress">
                    <span>CSS</span><span>${rightCSSQuestions} / ${cssQuestions.length}</span>
                </div>
                <div id="answer_3" class="question-progress">
                    <span>Javascript</span><span>${rightJSQuestions} / ${jsQuestions.length}</span>
                </div>
                <div id="answer_4" class="question-progress">
                    <span>Java</span><span>${rightJavaQuestions} / ${javaQuestions.length}</span>
                </div>
            </div>
            <div class="padding-10 display-right-center">
                <button class="button-replay" onclick="restartGame()">Replay</button>
            </div>`
}


function renderEndscreen(questions, rightQuestions, selection, quizname) {
    return ` <div class="finished-question">
    <div class="card-body text-center padding-10">
        <img src="img/brain result.png" alt="">
        <h3>Complete</h3>
        <h3>${quizname} Quiz</h3>
    </div>
    
    <div class="display-center-gap20">
        <h3>Your Score</h3><h3><b>${rightQuestions}</b>/<b>${questions.length}</b></p></h3>
    </div>
    <div class="padding-10 display-center-center-column">
    <button class="button-start" onclick="showQuestion('start')">Start</button>
    <button class="button-replay" onclick="deleteQuestionSelection(${selection})">Replay</button>
    </div>
    </div>`
}