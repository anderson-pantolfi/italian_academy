"use strict";
let currentQuestion = 0;
let numberQuestionCurrent = 1;
let correctAnswers = 0;
const divAreaQuestions = document.getElementById("question-area");
const divResult = document.getElementById("result");
const divprogress = document.getElementById("progress");
const buttonPaginaNiveisteste = document.getElementById("voltar");
const listObjectquestion = verificaTeste();
buttonPaginaNiveisteste.addEventListener("click", () => {
    window.location.href = "selected-nivel.html";
});
showQuestion();
function showQuestion() {
    const ProgressBar = document.getElementById("progress-bar");
    if (listObjectquestion) {
        const totalnumberquestion = listObjectquestion.length;
        if (listObjectquestion[currentQuestion]) {
            const divquestion = document.getElementById("question");
            const divoptions = document.getElementById("options");
            const divquantidadeQuestion = document.getElementById("quantidade-question");
            const questions = listObjectquestion[currentQuestion];
            const porcentagemProgressBar = Math.floor((currentQuestion / totalnumberquestion) * 100);
            ProgressBar.style.width = `${porcentagemProgressBar}%`;
            divResult.style.display = "none";
            divAreaQuestions.style.display = "block";
            divquantidadeQuestion.textContent = `${numberQuestionCurrent} / ${totalnumberquestion}`;
            divquestion.textContent = questions.question;
            divoptions.textContent = "";
            for (const question in questions.option) {
                const div = createElement("div");
                div.setAttribute("data-opt", question);
                div.id = question;
                div.textContent = questions.option[question];
                div.addEventListener("click", selectedoption);
                addElement(divoptions, div);
            }
        }
        else {
            finishTest(totalnumberquestion);
        }
    }
}
function createElement(element) {
    return document.createElement(element);
}
function addElement(parent, element) {
    return parent.appendChild(element);
}
function selectedoption(event) {
    if (event.target) {
        const clikedOption = parseInt(event.target.getAttribute("data-opt"));
        if (listObjectquestion) {
            const resposta = listObjectquestion[currentQuestion].answer;
            if (resposta === clikedOption) {
                event.target.style.backgroundColor = "green";
                event.target.style.color = "white";
                correctAnswers++;
            }
            else {
                event.target.style.backgroundColor = "red";
                event.target.style.color = "white";
                const indiceResposta = resposta.toString();
                const divResposta = document.getElementById(indiceResposta);
                if (divResposta) {
                    divResposta.style.backgroundColor = "green";
                    divResposta.style.color = "white";
                }
            }
            currentQuestion++;
            numberQuestionCurrent++;
            setTimeout(showQuestion, 500);
        }
    }
}
function finishTest(totalquestion) {
    const procentagemAcertos = Math.floor((correctAnswers / totalquestion) * 100);
    divAreaQuestions.style.display = "none";
    divprogress.style.display = "none";
    divResult.style.display = "flex";
    const divYourLevel = document.getElementById("yourlevel");
    const divQuantidadeAcertos = document.getElementById("quantidadeacertos");
    if (procentagemAcertos >= 75) {
        divYourLevel.textContent = "PARABENS!! VOCÊ CONSEGUIU COMPLETAR O NIVEL BASICO";
        divYourLevel.style.color = "green";
    }
    else {
        divYourLevel.textContent = "NÃO DESISTA !! VOCE VAI CONSEGUIR CONTINUE ESTUDANDO";
        divYourLevel.style.color = "red";
    }
    divQuantidadeAcertos.textContent = `VOCE ACERTOU  ${procentagemAcertos}%, ${correctAnswers} de ${totalquestion}`;
}
function verificaTeste() {
    if (document.title === "teste 1") {
        return teste1;
    }
    else if (document.title === "teste 2") {
        return teste2;
    }
    else if (document.title === "teste 3") {
        return teste3;
    }
    else if (document.title === "teste 4") {
        return teste4;
    }
    else if (document.title === "teste 5") {
        return teste5;
    }
    else {
        return teste6;
    }
}
