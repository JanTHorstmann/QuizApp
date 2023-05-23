function showQuestion() {
    let questioncard = document.getElementById('currentquestion');
    let question = questions[currentquestion]
    questioncard.innerHTML = renderQuestion(question);
};


function answer(answer) {

}


function renderQuestion(question) {
    return `<h5 class="card-title">${question['question']}</h5>
                <div class="answercard card mb-2" onclick="answer(answer_1)">
                    <div class="card-body">
                        ${question['answer_1']}
                    </div>
                </div>
                <div class="answercard card mb-2" onclick="answer(answer_2)">
                    <div class="card-body">
                        ${question['answer_2']}
                    </div>
                </div>
                <div class="answercard card mb-2" onclick="answer(answer_3)">
                    <div class="card-body">
                        ${question['answer_3']}
                    </div>
                </div>
                <div class="answercard card mb-2" onclick="answer(answer_4)">
                    <div class="card-body">
                        ${question['answer_4']}
                    </div>
                </div>
                <div class="question-footer">
                    <div>
                        <b>1</b> von <b>${questions.length}</b> Fragen
                    </div>
                    <button>Nächste Frage</button>
                </div>`
}