function htmlQuestion(questioncard) {
    let question = htmlQuestions[currentquestion];
    let finishedquestion = questionfinish.indexOf('html');
    document.getElementById('hoverhtml').classList.add('border-left-3');
    if (finishedquestion == -1) {
        if (currentquestion < htmlQuestions.length) {
            questioncard.innerHTML = renderQuestion(question, 'htmlQuestions', rightHTMLQuestions, htmlQuestions);
        } else {
            questioncard.innerHTML = renderEndscreen(htmlQuestions, rightHTMLQuestions, 'htmlQuestions', 'HTML');
            questionfinish.push('html');
        }
    } else {
        questioncard.innerHTML = renderEndscreen(htmlQuestions, rightHTMLQuestions, 'htmlQuestions', 'HTML');
    }
}


function cssQuestion(questioncard) {
    let question = cssQuestions[currentquestion];
    let finishedquestion = questionfinish.indexOf('css');
    document.getElementById('hovercss').classList.add('border-left-3');
    if (finishedquestion == -1) {
        if (currentquestion < cssQuestions.length) {
            questioncard.innerHTML = renderQuestion(question, 'cssQuestions', rightCSSQuestions, cssQuestions);
        } else {
            questioncard.innerHTML = renderEndscreen(cssQuestions, rightCSSQuestions, 'cssQuestions', 'CSS');
            questionfinish.push('css');
        }
    } else {
        questioncard.innerHTML = renderEndscreen(cssQuestions, rightCSSQuestions, 'cssQuestions', 'CSS');
    }
}


function jsQuestion(questioncard) {
    let question = jsQuestions[currentquestion];
    let finishedquestion = questionfinish.indexOf('js');
    document.getElementById('hoverjs').classList.add('border-left-3');
    if (finishedquestion == -1) {
        if (currentquestion < jsQuestions.length) {
            questioncard.innerHTML = renderQuestion(question, 'jsQuestions', rightJSQuestions, jsQuestions);
        } else {
            questioncard.innerHTML = renderEndscreen(jsQuestions, rightJSQuestions, 'jsQuestions', 'JavaScript');
            questionfinish.push('js');
        }
    } else {
        questioncard.innerHTML = renderEndscreen(jsQuestions, rightJSQuestions, 'jsQuestions', 'JavaScript');
    }
}

function javaQuestion(questioncard) {
    let question = javaQuestions[currentquestion];
    let finishedquestion = questionfinish.indexOf('java');
    document.getElementById('hoverjava').classList.add('border-left-3');
    if (finishedquestion == -1) {
        if (currentquestion < javaQuestions.length) {
            questioncard.innerHTML = renderQuestion(question, 'javaQuestions', rightJavaQuestions, javaQuestions);
        } else {
            questioncard.innerHTML = renderEndscreen(javaQuestions, rightJavaQuestions, 'javaQuestions', 'Java');
            questionfinish.push('java');
        }
    } else {
        questioncard.innerHTML = renderEndscreen(javaQuestions, rightJavaQuestions, 'javaQuestions');
    }
}