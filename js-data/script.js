function showQuestion() {
    let questioncard = document.getElementById('currentquestion');
    let question = questions[currentquestion]
    if (currentquestion < questions.length) {
        let percent = Math.round((currentquestion + 1) / questions.length * 100);
        console.log(percent);
        questioncard.innerHTML = renderQuestion(question, percent);
    } else {
        // Endscreen
        questioncard.innerHTML = renderEndscreen();
    }
};


function answer(answer) {
    let question = questions[currentquestion];
    let answernumber = answer.slice(-1);
    let bganswer = document.getElementById(answer);
    let idOfRightanswer = `answer_${question['right_answer']}`
    if (answernumber == question['right_answer']) {
        bganswer.classList.add('bg_success');
        rightQuestions++
    } else {
        bganswer.classList.add('bg_false');
        document.getElementById(idOfRightanswer).classList.add('bg_success');
    }
    document.getElementById('next-button').disabled = false
}


function nextQuestion() {
    currentquestion++;
    showQuestion();
}


function renderQuestion(question, percent) {
    return `
    <img src="img/quizcard.png" class="card-img-top">
    <div class="progressbar" style="width: ${percent}%;">${percent}%</div>
    <div class="card-body">
        <h5 class="card-title">${question['question']}</h5>
                    <div id="answer_1" class="answercard card mb-2" onclick="answer('answer_1')">
                        <div class="card-body">
                            ${question['answer_1']}
                        </div>
                    </div>
                    <div id="answer_2" class="answercard card mb-2" onclick="answer('answer_2')">
                        <div class="card-body">
                            ${question['answer_2']}
                        </div>
                    </div>
                    <div id="answer_3" class="answercard card mb-2" onclick="answer('answer_3')">
                        <div class="card-body">
                            ${question['answer_3']}
                        </div>
                    </div>
                    <div id="answer_4" class="answercard card mb-2" onclick="answer('answer_4')">
                        <div class="card-body">
                            ${question['answer_4']}
                        </div>
                    </div>
                    <div class="question-footer">
                        <div>
                            <b>${currentquestion + 1}</b> von <b>${questions.length}</b> Fragen
                        </div>
                        <button id="next-button" disabled onclick="nextQuestion()">Nächste Frage</button>
                    </div>
    </div>`
}


function renderEndscreen() {
    return `
    <div class="card-body text-center">
    <h1>Quiz beedenet!</h1>
    </div>
    <img src="img/cup.png" class="card-img-top text-center">
    <div>Du hast <b>${rightQuestions}</b> von <b>${questions.length}</b> richtig beantwortet</div>
    `
}