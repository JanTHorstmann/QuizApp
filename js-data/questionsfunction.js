function htmlQuestion(questioncard) {
    let question = htmlQuestions[currentquestion];
    let finishedquestion = questionfinish.indexOf('html');

    document.getElementById('hoverhtml').classList.add('border-left-3');
    document.getElementById('hovercss').classList.remove('border-left-3');
    document.getElementById('hoverjs').classList.remove('border-left-3');
    document.getElementById('hoverjava').classList.remove('border-left-3');

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
    document.getElementById('hoverhtml').classList.remove('border-left-3');
    document.getElementById('hovercss').classList.add('border-left-3');
    document.getElementById('hoverjs').classList.remove('border-left-3');
    document.getElementById('hoverjava').classList.remove('border-left-3');
    if (finishedquestion == -1) {
        if (currentquestion < cssQuestions.length) {
            questioncard.innerHTML = renderQuestion(question, 'cssQuestions', rightCSSQuestions, cssQuestions);
        } else {
            questioncard.innerHTML = renderEndscreen(cssQuestions, rightCSSQuestions, 'cssQuestions');
            questionfinish.push('css');
        }
    } else {
        questioncard.innerHTML = renderEndscreen(cssQuestions, rightCSSQuestions, 'cssQuestions');
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
            questioncard.innerHTML = renderQuestion(question, 'jsQuestions', rightJSQuestions, jsQuestions);
        } else {
            questioncard.innerHTML = renderEndscreen(jsQuestions, rightJSQuestions, 'jsQuestions');
            questionfinish.push('js');
        }
    } else {
        questioncard.innerHTML = renderEndscreen(jsQuestions, rightJSQuestions, 'jsQuestions');
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
            questioncard.innerHTML = renderQuestion(question, 'javaQuestions', rightJavaQuestions, javaQuestions);
        } else {
            questioncard.innerHTML = renderEndscreen(javaQuestions, rightJavaQuestions, 'javaQuestions', javaQuestions);
            questionfinish.push('java');
        }
    } else {
        questioncard.innerHTML = renderEndscreen(javaQuestions, rightJavaQuestions, 'javaQuestions');
    }
}