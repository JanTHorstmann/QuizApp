function renderQuestion(questionarray, array, id, countid) {
    let question = questionarray[countid.length];

    return `<h2 class="question">${question['question']}</h2>
            <div class="answer flex-column-between">
                <div id="answer_1" class="answercard" onclick="answer('answer_1', '${question['right_answer']}', ${id})">
                    <div class="answer-number text-center">A</div><span>${question['answer_1']}</span>
                </div>
                <div id="answer_2" class="answercard" onclick="answer('answer_2', '${question['right_answer']}', ${id})">
                    <div class="answer-number text-center">B</div><span>${question['answer_2']}</span>
                </div>
                <div id="answer_3" class="answercard" onclick="answer('answer_3', '${question['right_answer']}', ${id})">
                    <div class="answer-number text-center">C</div><span>${question['answer_3']}</span>
                </div>
                <div id="answer_4" class="answercard" onclick="answer('answer_4', '${question['right_answer']}', ${id})">
                    <div class="answer-number text-center">D</div><span>${question['answer_4']}</span>
                </div>
            </div>
            <div class="question-footer">
                    <img src="img/arrowreturn.png">
                <p>${countid.length+1} / ${questionarray.length}</p>
                    <img src="img/arrownext.png" id="next-button" disabled onclick="questions(${array}, '${array}', '${id}', ${id})">
            </div>`
}


function renderStartscreen(rightHTML, rightCSS, rightJS, rightJava) {
    return `
    
    <div class="startselection display-between-center">
                <img src="img/brain result.png" alt="">
                <h2 class="question">Wähle einen Fragenbereich</h2>
            </div>
            <div class="answer flex-column-between">
                <div id="answer_1" class="question-progress">
                    <span>HTML</span><span>${rightHTML} / ${htmlQuestions.length}</span>
                </div>
                <div id="answer_2" class="question-progress">
                    <span>CSS</span><span>${rightCSS} / ${cssQuestions.length}</span>
                </div>
                <div id="answer_3" class="question-progress">
                    <span>Javascript</span><span>${rightJS} / ${jsQuestions.length}</span>
                </div>
                <div id="answer_4" class="question-progress">
                    <span>Java</span><span>${rightJava} / ${javaQuestions.length}</span>
                </div>
            </div>
            <div class="display-right-center">
            <button class="button-replay" onclick="restartGame()">Replay All</button>
            </div>
            `
}


function renderEndscreen(id, questionarray, rightanswer, array) {
    return ` <div class="finished-question">
    <div class="card-body text-center padding-10">
        <img src="img/brain result.png" alt="">
        <h3>Complete</h3>
        <h3>${id} Quiz</h3>
    </div>
    
    <div class="display-center-gap20">
        <h3>Your Score</h3><h3><b>${rightanswer}</b>/<b>${questionarray.length}</b></p></h3>
    </div>
    <div class="padding-10 display-center-center-column">
    <button class="button-startscreen" onclick="showStartscreen('start')">Start</button>
    <button class="button-replay" onclick="deleteQuestionArea(${id}), startQuiz('${id}', '${array}', ${array}, ${id})">Replay</button>
    </div>
    </div>`
}


function renderStartQuiz(typ, questionarray) {
    return `<div class="startselection display-column-center-center font-pt-sans height-100 margin-0">
                <h2 >Welcome to</h2>
                <h2 >The Awesome ${typ} Quiz</h2>
                <span>Ready for the Challenge?</span>
            </div>
            <div class="display-right-center font-pt-sans">
                <button class="button-startchallenge" onclick="questions(${questionarray}, '${questionarray}', '${typ}', ${typ})">START NOW <img src="img/arrownext.png"></button>
            </div>`
}


function continueQuiz(typ, questionarray) {
    return `<div class="startselection display-column-center-center font-pt-sans height-100 margin-0">
                <h2 >Welcome to</h2>
                <h2 >The Awesome ${typ} Quiz</h2>
                <span>Ready for the Challenge?</span>
            </div>
            <div class="display-right-center font-pt-sans">
                <button class="button-startchallenge" onclick="questions(${questionarray}, '${questionarray}', '${typ}', ${typ})">Continue <img src="img/arrownext.png"></button>
            </div>`
}