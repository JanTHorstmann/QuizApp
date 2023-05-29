function htmlQuestion(questioncard) {
    let question = htmlQuestions[currentquestion];
    let finishedquestion = questionfinish.indexOf('html');

    document.getElementById('hoverhtml').classList.add('border-left-3');
    document.getElementById('hovercss').classList.remove('border-left-3');
    document.getElementById('hoverjs').classList.remove('border-left-3');
    document.getElementById('hoverjava').classList.remove('border-left-3');

    if (finishedquestion == -1) {
        if (currentquestion < htmlQuestions.length) {
            let percent = Math.round((currentquestion + 1) / htmlQuestions.length * 100);
            questioncard.innerHTML = renderQuestion(question, 'htmlQuestions');
            countQuestion(htmlQuestions, percent);
        } else {
            questioncard.innerHTML = renderEndscreen(htmlQuestions, rightHTMLQuestions);
            questionfinish.push('html');
        }
    } else {
        questioncard.innerHTML = renderEndscreen(htmlQuestions, rightHTMLQuestions);
    }
}


function cssQuestion(questioncard) {
    let question = cssQuestions[currentquestion];
    let finishedquestion = questionfinish.indexOf('css');
    document.getElementById('hoverhtml').classList.remove('border-left-3');
    document.getElementById('hovercss').classList.add('border-left-3');
    document.getElementById('hoverjs').classList.remove('border-left-3');
    document.getElementById('hoverjava').classList.remove('border-left-3');
    if (finishedquestion == -1) {
        if (currentquestion < cssQuestions.length) {
            let percent = Math.round((currentquestion + 1) / cssQuestions.length * 100);
            questioncard.innerHTML = renderQuestion(question, 'cssQuestions');
            countQuestion(cssQuestions, percent);
        } else {
            questioncard.innerHTML = renderEndscreen(cssQuestions, rightCSSQuestions);
            questionfinish.push('css');
        }
    } else {
        questioncard.innerHTML = renderEndscreen(cssQuestions, rightCSSQuestions);
    }
}


function jsQuestion(questioncard) {
    let question = jsQuestions[currentquestion];
    let finishedquestion = questionfinish.indexOf('js');
    document.getElementById('hoverhtml').classList.remove('border-left-3');
    document.getElementById('hovercss').classList.remove('border-left-3');
    document.getElementById('hoverjs').classList.add('border-left-3');
    document.getElementById('hoverjava').classList.remove('border-left-3');
    if (finishedquestion == -1) {
        if (currentquestion < jsQuestions.length) {
            let percent = Math.round((currentquestion + 1) / jsQuestions.length * 100);
            questioncard.innerHTML = renderQuestion(question, 'jsQuestions');
            countQuestion(jsQuestions, percent);
        } else {
            questioncard.innerHTML = renderEndscreen(jsQuestions, rightJSQuestions);
            questionfinish.push('js');
        }
    } else {
        questioncard.innerHTML = renderEndscreen(jsQuestions, rightJSQuestions);
    }
}

function javaQuestion(questioncard) {
    let question = javaQuestions[currentquestion];
    let finishedquestion = questionfinish.indexOf('java');
    document.getElementById('hoverhtml').classList.remove('border-left-3');
    document.getElementById('hovercss').classList.remove('border-left-3');
    document.getElementById('hoverjs').classList.remove('border-left-3');
    document.getElementById('hoverjava').classList.add('border-left-3');
    if (finishedquestion == -1) {
        if (currentquestion < javaQuestions.length) {
            let percent = Math.round((currentquestion + 1) / javaQuestions.length * 100);
            questioncard.innerHTML = renderQuestion(question, 'javaQuestions');
            countQuestion(javaQuestions, percent);
        } else {
            questioncard.innerHTML = renderEndscreen(javaQuestions, rightJavaQuestions);
            questionfinish.push('java');
        }
    } else {
        questioncard.innerHTML = renderEndscreen(javaQuestions, rightJavaQuestions);
    }
}