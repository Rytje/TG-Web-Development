let motherDiv = document.querySelector("body > div");

let startButton = document.createElement("button");
startButton.innerText = "Start";
startButton.setAttribute("onclick", "startButtonClick()");

motherDiv.appendChild(startButton);

// General Layout
let quizScreen = document.createElement("div");
quizScreen.id = "quiz-screen";
quizScreen.style.overflow = "hidden";
motherDiv.appendChild(quizScreen);

let finishScreen = document.createElement("div");
finishScreen.id = "finish-screen";
motherDiv.appendChild(finishScreen);

let previousButton = document.createElement("button");
previousButton.innerText = "Vorige";
previousButton.setAttribute("onclick", "previousButtonClick()");

let nextButton = document.createElement("button");
nextButton.innerText = "Volgende";
nextButton.setAttribute("onClick", "nextButtonClick()");

motherDiv.appendChild(previousButton);
motherDiv.appendChild(nextButton);

// Quiz screen layout/content
let title = document.createElement("h1");
title.innerText = "Math Problem";
quizScreen.appendChild(title);

// progress counter
let pagina = 1;
let progressText = document.createElement("span");
progressText.innerText = pagina + " /6";
quizScreen.appendChild(progressText);

// question content
let question1content = document.createElement("div");
let question2content = document.createElement("div");
let question3content = document.createElement("div");
let question4content = document.createElement("div");
let question5content = document.createElement("div");
let question6content = document.createElement("div");
let questionsArray = [question1content, question2content, question3content, question4content, question5content, question6content];

// question 1 content
let questionBox1 = document.createElement("h2");
questionBox1.className = "questionBox";
questionBox1.innerText = "What is 49 - 32";
let ball1 = document.createElement("span");
ball1.className = "ball";
ball1.innerText = 1;
let answer1 = document.createElement("p");
answer1.innerText = "13";
answer1.setAttribute("onclick", "answerClick(1, this)");
let answer2 = document.createElement("p");
answer2.innerText = "17";
answer2.setAttribute("onclick", "answerClick(1, this)");
let ball2 = document.createElement("span");
ball2.className = "ball";
ball2.innerText = 2;
let ball3 = document.createElement("span");
ball3.className = "ball";
ball3.innerText = 3;
let answer3 = document.createElement("p");
answer3.innerText = "-17";
answer3.setAttribute("onclick", "answerClick(1, this)");
let answer4 = document.createElement("p");
answer4.innerText = "16";
answer4.setAttribute("onclick", "answerClick(1, this)");
let ball4 = document.createElement("span");
ball4.className = "ball";
ball4.innerText = 4;
let ball5 = document.createElement("span");
ball5.className = "ball";
ball5.innerText = 5;
let answer5 = document.createElement("p");
answer5.innerText = "697";
answer5.setAttribute("onclick", "answerClick(1, this)");
question1content.appendChild(questionBox1);
question1content.appendChild(ball1);
question1content.appendChild(answer1);
question1content.appendChild(answer2);
question1content.appendChild(ball2);
question1content.appendChild(ball3);
question1content.appendChild(answer3);
question1content.appendChild(answer4);
question1content.appendChild(ball4);
question1content.appendChild(ball5);
question1content.appendChild(answer5);

// question 2 content
let questionBox2 = document.createElement("h2");
questionBox2.className = "questionBox";
questionBox2.innerText = "What is 70 - 14";
let ball6 = document.createElement("span");
ball6.className = "ball";
ball6.innerText = 1;
let answer6 = document.createElement("p");
answer6.innerText = "18";
answer6.setAttribute("onclick", "answerClick(2, this)");
let answer7 = document.createElement("p");
answer7.innerText = "79";
answer7.setAttribute("onclick", "answerClick(2, this)");
let ball7 = document.createElement("span");
ball7.className = "ball";
ball7.innerText = 2;
let ball8 = document.createElement("span");
ball8.className = "ball";
ball8.innerText = 3;
let answer8 = document.createElement("p");
answer8.innerText = "56";
answer8.setAttribute("onclick", "answerClick(2, this)");
let answer9 = document.createElement("p");
answer9.innerText = "55";
answer9.setAttribute("onclick", "answerClick(2, this)");
let ball9 = document.createElement("span");
ball9.className = "ball";
ball9.innerText = 4;
let ball10 = document.createElement("span");
ball10.className = "ball";
ball10.innerText = 5;
let answer10 = document.createElement("p");
answer10.innerText = "57";
answer10.setAttribute("onclick", "answerClick(2, this)");
question2content.appendChild(questionBox2);
question2content.appendChild(ball6);
question2content.appendChild(answer6);
question2content.appendChild(answer7);
question2content.appendChild(ball7);
question2content.appendChild(ball8);
question2content.appendChild(answer8);
question2content.appendChild(answer9);
question2content.appendChild(ball9);
question2content.appendChild(ball10);
question2content.appendChild(answer10);

// question 3 content
let questionBox3 = document.createElement("h2");
questionBox3.className = "questionBox";
questionBox3.innerText = "What is 80 - 15";
let ball11 = document.createElement("span");
ball11.className = "ball";
ball11.innerText = 1;
let answer11 = document.createElement("p");
answer11.innerText = "95";
answer11.setAttribute("onclick", "answerClick(3, this)");
let answer12 = document.createElement("p");
answer12.innerText = "85";
answer12.setAttribute("onclick", "answerClick(3, this)");
let ball12 = document.createElement("span");
ball12.className = "ball";
ball12.innerText = 2;
let ball13 = document.createElement("span");
ball13.className = "ball";
ball13.innerText = 3;
let answer13 = document.createElement("p");
answer13.innerText = "75";
answer13.setAttribute("onclick", "answerClick(3, this)");
let answer14 = document.createElement("p");
answer14.innerText = "65";
answer14.setAttribute("onclick", "answerClick(3, this)");
let ball14 = document.createElement("span");
ball14.className = "ball";
ball14.innerText = 4;
let ball15 = document.createElement("span");
ball15.className = "ball";
ball15.innerText = 5;
let answer15 = document.createElement("p");
answer15.innerText = "55";
answer15.setAttribute("onclick", "answerClick(3, this)");
question3content.appendChild(questionBox3);
question3content.appendChild(ball11);
question3content.appendChild(answer11);
question3content.appendChild(answer12);
question3content.appendChild(ball12);
question3content.appendChild(ball13);
question3content.appendChild(answer13);
question3content.appendChild(answer14);
question3content.appendChild(ball14);
question3content.appendChild(ball15);
question3content.appendChild(answer15);

// question 4 content
let questionBox4 = document.createElement("h2");
questionBox4.className = "questionBox";
questionBox4.innerText = "What is 10 - 20";
let ball16 = document.createElement("span");
ball16.className = "ball";
ball16.innerText = 1;
let answer16 = document.createElement("p");
answer16.innerText = "30";
answer16.setAttribute("onclick", "answerClick(4, this)");
let answer17 = document.createElement("p");
answer17.innerText = "10";
answer17.setAttribute("onclick", "answerClick(4, this)");
let ball17 = document.createElement("span");
ball17.className = "ball";
ball17.innerText = 2;
let ball18 = document.createElement("span");
ball18.className = "ball";
ball18.innerText = 3;
let answer18 = document.createElement("p");
answer18.innerText = "-20";
answer18.setAttribute("onclick", "answerClick(4, this)");
let answer19 = document.createElement("p");
answer19.innerText = "20";
answer19.setAttribute("onclick", "answerClick(4, this)");
let ball19 = document.createElement("span");
ball19.className = "ball";
ball19.innerText = 4;
let ball20 = document.createElement("span");
ball20.className = "ball";
ball20.innerText = 5;
let answer20 = document.createElement("p");
answer20.innerText = "-10";
answer20.setAttribute("onclick", "answerClick(4, this)");
question4content.appendChild(questionBox4);
question4content.appendChild(ball16);
question4content.appendChild(answer16);
question4content.appendChild(answer17);
question4content.appendChild(ball17);
question4content.appendChild(ball18);
question4content.appendChild(answer18);
question4content.appendChild(answer19);
question4content.appendChild(ball19);
question4content.appendChild(ball20);
question4content.appendChild(answer20);

// question 5 content
let questionBox5 = document.createElement("h2");
questionBox5.className = "questionBox";
questionBox5.innerText = "What is 56 + 11";
let ball21 = document.createElement("span");
ball21.className = "ball";
ball21.innerText = 1;
let answer21 = document.createElement("p");
answer21.innerText = "65";
answer21.setAttribute("onclick", "answerClick(5, this)");
let answer22 = document.createElement("p");
answer22.innerText = "67";
answer22.setAttribute("onclick", "answerClick(5, this)");
let ball22 = document.createElement("span");
ball22.className = "ball";
ball22.innerText = 2;
let ball23 = document.createElement("span");
ball23.className = "ball";
ball23.innerText = 3;
let answer23 = document.createElement("p");
answer23.innerText = "44";
answer23.setAttribute("onclick", "answerClick(5, this)");
let answer24 = document.createElement("p");
answer24.innerText = "45";
answer24.setAttribute("onclick", "answerClick(5, this)");
let ball24 = document.createElement("span");
ball24.className = "ball";
ball24.innerText = 4;
let ball25 = document.createElement("span");
ball25.className = "ball";
ball25.innerText = 5;
let answer25 = document.createElement("p");
answer25.innerText = "54";
answer25.setAttribute("onclick", "answerClick(5, this)");
question5content.appendChild(questionBox5);
question5content.appendChild(ball21);
question5content.appendChild(answer21);
question5content.appendChild(answer22);
question5content.appendChild(ball22);
question5content.appendChild(ball23);
question5content.appendChild(answer23);
question5content.appendChild(answer24);
question5content.appendChild(ball24);
question5content.appendChild(ball25);
question5content.appendChild(answer25);

// question 6 content
let questionBox6 = document.createElement("h2");
questionBox6.className = "questionBox";
questionBox6.innerText = "What is 21 - 16";
let ball26 = document.createElement("span");
ball26.className = "ball";
ball26.innerText = 1;
let answer26 = document.createElement("p");
answer26.innerText = "5";
answer26.setAttribute("onclick", "answerClick(6, this)");
let answer27 = document.createElement("p");
answer27.innerText = "-5";
answer27.setAttribute("onclick", "answerClick(6, this)");
let ball27 = document.createElement("span");
ball27.className = "ball";
ball27.innerText = 2;
let ball28 = document.createElement("span");
ball28.className = "ball";
ball28.innerText = 3;
let answer28 = document.createElement("p");
answer28.innerText = "10";
answer28.setAttribute("onclick", "answerClick(6, this)");
let answer29 = document.createElement("p");
answer29.innerText = "25";
answer29.setAttribute("onclick", "answerClick(6, this)");
let ball29 = document.createElement("span");
ball29.className = "ball";
ball29.innerText = 4;
let ball30 = document.createElement("span");
ball30.className = "ball";
ball30.innerText = 5;
let answer30 = document.createElement("p");
answer30.innerText = "35";
answer30.setAttribute("onclick", "answerClick(6, this)");
question6content.appendChild(questionBox6);
question6content.appendChild(ball26);
question6content.appendChild(answer26);
question6content.appendChild(answer27);
question6content.appendChild(ball27);
question6content.appendChild(ball28);
question6content.appendChild(answer28);
question6content.appendChild(answer29);
question6content.appendChild(ball29);
question6content.appendChild(ball30);
question6content.appendChild(answer30);


quizScreen.appendChild(question1content);
quizScreen.appendChild(question2content);
quizScreen.appendChild(question3content);
quizScreen.appendChild(question4content);
quizScreen.appendChild(question5content);
quizScreen.appendChild(question6content);

question2content.style.display = "none";
question3content.style.display = "none";
question4content.style.display = "none";
question5content.style.display = "none";
question6content.style.display = "none";

// result stuff
let givenAnswers = [undefined, undefined, undefined, undefined, undefined, undefined];
let correctAnswersCount = 0;

let resultText = document.createElement("p");
resultText.className = "finish-text";
finishScreen.appendChild(resultText);
let restartButton = document.createElement("button");
restartButton.innerText = "Restart";
restartButton.setAttribute("onclick", "restartButtonClick()");
finishScreen.appendChild(restartButton);


// functions
function startButtonClick() {
    startButton.style.display = "none";
    quizScreen.style.display = "block";
    previousButton.style.display = "inline-block";
    nextButton.style.display = "inline-block";
}

function restartButtonClick() {
    location.reload();
    correctAnswersCount = 0;
    givenAnswers = [undefined, undefined, undefined, undefined, undefined, undefined];
    startButton.style.display = "block";
    quizScreen.style.display = "none";
    // previousButton.style.display = "inline-block";
    // nextButton.style.display = "inline-block";
    finishScreen.style.display = "none";
}

function previousButtonClick() {
    if (pagina >= 2 && pagina <= 6) {
        questionsArray[pagina - 2].style.display = "block";
        questionsArray[pagina - 1].style.display = "none";
        pagina--;
        progressText.innerText = pagina + "/6";
    }
}

function nextButtonClick() {
    if (pagina >= 1 && pagina <= 5 && givenAnswers[pagina - 1] !== undefined) {
        questionsArray[pagina].style.display = "block";
        questionsArray[pagina - 1].style.display = "none";
        pagina++;
        progressText.innerText = pagina + "/6";
    } else if (pagina === 6 && givenAnswers[pagina - 1] !== undefined) {
        resultText.innerText = "Gefeliciteerd je hebt " + correctAnswersCount + " van de 6 vragen goed.";
        quizScreen.style.display = "none";
        finishScreen.style.display = "block";
        nextButton.style.display = "none";
        previousButton.style.display = "none";
    }
}

function answerClick(question, element) {
    switch (question) {
        case 1:
            givenAnswers[question - 1] = element.innerText;
            if (element.innerText == 17) {
                element.style.backgroundColor = "green";
                if (element.previousElementSibling.tagName == "SPAN"){
                    element.previousElementSibling.style.backgroundColor = "green";
                }
                else if (element.nextElementSibling.tagName == "SPAN"){
                    element.nextElementSibling.style.backgroundColor = "green";
                }
                answer1.style.pointerEvents = "none";
                answer2.style.pointerEvents = "none";
                answer3.style.pointerEvents = "none";
                answer4.style.pointerEvents = "none";
                answer5.style.pointerEvents = "none";
                correctAnswersCount++;
            }
            else {
                element.style.backgroundColor = "red";
                if (element.previousElementSibling.tagName == "SPAN"){
                    element.previousElementSibling.style.backgroundColor = "red";
                }
                else if (element.nextElementSibling.tagName == "SPAN"){
                    element.nextElementSibling.style.backgroundColor = "red";
                }
                answer2.style.backgroundColor = "green";
                ball2.style.backgroundColor = "green";
                answer1.style.pointerEvents = "none";
                answer2.style.pointerEvents = "none";
                answer3.style.pointerEvents = "none";
                answer4.style.pointerEvents = "none";
                answer5.style.pointerEvents = "none";
            }
            break;
        case 2:
            givenAnswers[question - 1] = element.innerText;
            if (element.innerText == 56) {
                element.style.backgroundColor = "green";
                if (element.previousElementSibling.tagName == "SPAN"){
                    element.previousElementSibling.style.backgroundColor = "green";
                }
                else if (element.nextElementSibling.tagName == "SPAN"){
                    element.nextElementSibling.style.backgroundColor = "green";
                }
                answer6.style.pointerEvents = "none";
                answer7.style.pointerEvents = "none";
                answer8.style.pointerEvents = "none";
                answer9.style.pointerEvents = "none";
                answer10.style.pointerEvents = "none";
                correctAnswersCount++;
            }
            else {
                element.style.backgroundColor = "red";
                if (element.previousElementSibling.tagName == "SPAN"){
                    element.previousElementSibling.style.backgroundColor = "red";
                }
                else if (element.nextElementSibling.tagName == "SPAN"){
                    element.nextElementSibling.style.backgroundColor = "red";
                }
                answer8.style.backgroundColor = "green";
                ball8.style.backgroundColor = "green";
                answer6.style.pointerEvents = "none";
                answer7.style.pointerEvents = "none";
                answer8.style.pointerEvents = "none";
                answer9.style.pointerEvents = "none";
                answer10.style.pointerEvents = "none";
            }
            break;
        case 3:
            givenAnswers[question - 1] = element.innerText;
            if (element.innerText == 65) {
                element.style.backgroundColor = "green";
                if (element.previousElementSibling.tagName == "SPAN"){
                    element.previousElementSibling.style.backgroundColor = "green";
                }
                else if (element.nextElementSibling.tagName == "SPAN"){
                    element.nextElementSibling.style.backgroundColor = "green";
                }
                answer11.style.pointerEvents = "none";
                answer12.style.pointerEvents = "none";
                answer13.style.pointerEvents = "none";
                answer14.style.pointerEvents = "none";
                answer15.style.pointerEvents = "none";
                correctAnswersCount++;
            }
            else {
                element.style.backgroundColor = "red";
                if (element.previousElementSibling.tagName == "SPAN"){
                    element.previousElementSibling.style.backgroundColor = "red";
                }
                else if (element.nextElementSibling.tagName == "SPAN"){
                    element.nextElementSibling.style.backgroundColor = "red";
                }
                answer14.style.backgroundColor = "green";
                ball14.style.backgroundColor = "green";
                answer11.style.pointerEvents = "none";
                answer12.style.pointerEvents = "none";
                answer13.style.pointerEvents = "none";
                answer14.style.pointerEvents = "none";
                answer15.style.pointerEvents = "none";
            }
            break;
        case 4:
            givenAnswers[question - 1] = element.innerText;
            if (element.innerText == -10) {
                element.style.backgroundColor = "green";
                if (element.previousElementSibling.tagName == "SPAN"){
                    element.previousElementSibling.style.backgroundColor = "green";
                }
                else if (element.nextElementSibling.tagName == "SPAN"){
                    element.nextElementSibling.style.backgroundColor = "green";
                }
                answer16.style.pointerEvents = "none";
                answer17.style.pointerEvents = "none";
                answer18.style.pointerEvents = "none";
                answer19.style.pointerEvents = "none";
                answer20.style.pointerEvents = "none";
                correctAnswersCount++;
            }
            else {
                element.style.backgroundColor = "red";
                if (element.previousElementSibling.tagName == "SPAN"){
                    element.previousElementSibling.style.backgroundColor = "red";
                }
                else if (element.nextElementSibling.tagName == "SPAN"){
                    element.nextElementSibling.style.backgroundColor = "red";
                }
                answer20.style.backgroundColor = "green";
                ball20.style.backgroundColor = "green";
                answer16.style.pointerEvents = "none";
                answer17.style.pointerEvents = "none";
                answer18.style.pointerEvents = "none";
                answer19.style.pointerEvents = "none";
                answer20.style.pointerEvents = "none";
            }
            break;
        case 5:
            givenAnswers[question - 1] = element.innerText;
            if (element.innerText == 67) {
                element.style.backgroundColor = "green";
                if (element.previousElementSibling.tagName == "SPAN"){
                    element.previousElementSibling.style.backgroundColor = "green";
                }
                else if (element.nextElementSibling.tagName == "SPAN"){
                    element.nextElementSibling.style.backgroundColor = "green";
                }
                answer21.style.pointerEvents = "none";
                answer22.style.pointerEvents = "none";
                answer23.style.pointerEvents = "none";
                answer24.style.pointerEvents = "none";
                answer25.style.pointerEvents = "none";
                correctAnswersCount++;
            }
            else {
                element.style.backgroundColor = "red";
                if (element.previousElementSibling.tagName == "SPAN"){
                    element.previousElementSibling.style.backgroundColor = "red";
                }
                else if (element.nextElementSibling.tagName == "SPAN"){
                    element.nextElementSibling.style.backgroundColor = "red";
                }
                answer22.style.backgroundColor = "green";
                ball22.style.backgroundColor = "green";
                answer21.style.pointerEvents = "none";
                answer22.style.pointerEvents = "none";
                answer23.style.pointerEvents = "none";
                answer24.style.pointerEvents = "none";
                answer25.style.pointerEvents = "none";
            }
            break;
        case 6:
            givenAnswers[question - 1] = element.innerText;
            if (element.innerText == 5) {
                element.style.backgroundColor = "green";
                if (element.previousElementSibling.tagName == "SPAN"){
                    element.previousElementSibling.style.backgroundColor = "green";
                }
                else if (element.nextElementSibling.tagName == "SPAN"){
                    element.nextElementSibling.style.backgroundColor = "green";
                }
                answer26.style.pointerEvents = "none";
                answer27.style.pointerEvents = "none";
                answer28.style.pointerEvents = "none";
                answer29.style.pointerEvents = "none";
                answer30.style.pointerEvents = "none";
                correctAnswersCount++;
            }
            else {
                element.style.backgroundColor = "red";
                if (element.previousElementSibling.tagName == "SPAN"){
                    element.previousElementSibling.style.backgroundColor = "red";
                }
                else if (element.nextElementSibling.tagName == "SPAN"){
                    element.nextElementSibling.style.backgroundColor = "red";
                }
                answer26.style.backgroundColor = "green";
                ball26.style.backgroundColor = "green";
                answer26.style.pointerEvents = "none";
                answer27.style.pointerEvents = "none";
                answer28.style.pointerEvents = "none";
                answer29.style.pointerEvents = "none";
                answer30.style.pointerEvents = "none";
            }
            break;
    }
}