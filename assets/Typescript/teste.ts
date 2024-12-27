let currentQuestion:number = 0;
let numberQuestionCurrent:number = 1; 
let correctAnswers:number = 0
const divAreaQuestions = document.getElementById("question-area") as HTMLDivElement;
const divResult = document.getElementById("result") as HTMLDivElement;
const divprogress = document.getElementById("progress") as HTMLDivElement;
const buttonPaginaNiveisteste = document.getElementById("voltar") as HTMLButtonElement;

let listObjectquestion = verificaTeste()

buttonPaginaNiveisteste.addEventListener("click", ()=>{
    window.location.href = "selected-nivel.html"
});

showQuestion()

function showQuestion(){
    const ProgressBar = document.getElementById("progress-bar") as HTMLDivElement;
    if(listObjectquestion){
        let totalnumberquestion:number = listObjectquestion.length;

        if(listObjectquestion[currentQuestion]){
            const divquestion = document.getElementById("question") as HTMLDivElement;
            const divoptions = document.getElementById("options") as HTMLDivElement;
            const divquantidadeQuestion = document.getElementById("quantidade-question") as HTMLDivElement;


            let questions = listObjectquestion[currentQuestion];


            let porcentagemProgressBar = Math.floor((currentQuestion / totalnumberquestion) * 100)
            ProgressBar.style.width = `${porcentagemProgressBar}%`;

            divResult.style.display = "none";
            divAreaQuestions.style.display = "block";

            divquantidadeQuestion.textContent = `${numberQuestionCurrent} / ${totalnumberquestion}`; 

            

            divquestion.textContent = questions.question;
            divoptions.textContent = "";
            
            for(let question in questions.option){
                let div = createElement("div") as HTMLDivElement;
                div.setAttribute("data-opt", question )
                div.id = question;
                div.textContent = questions.option[question];
                div.addEventListener("click", selectedoption)
                addElement(divoptions, div);
            }

        }else{
            finishTest(totalnumberquestion);
        }
    }
}


function createElement(element:string){
    return document.createElement(element)
}

function addElement(parent:HTMLElement, element:HTMLElement){
    return parent.appendChild(element)
}

function selectedoption(event:Event){
    if(event.target){
        let clikedOption = parseInt((event.target as HTMLElement).getAttribute("data-opt")!);
        if(listObjectquestion){
            let resposta = listObjectquestion[currentQuestion].answer

            if(resposta === clikedOption){
                (event.target as HTMLElement).style.backgroundColor = "green";
                (event.target as HTMLElement).style.color = "white";
                correctAnswers++;
            }else{
                (event.target as HTMLElement).style.backgroundColor = "red";
                (event.target as HTMLElement).style.color = "white";
                let indiceResposta = resposta.toString()
                let divResposta = document.getElementById(indiceResposta) as HTMLDivElement;
                if(divResposta){
                    divResposta.style.backgroundColor = "green";
                    divResposta.style.color = "white";
                }
            }

            currentQuestion++;
            numberQuestionCurrent++;
            setTimeout(showQuestion, 500)
        }
    }
}

function finishTest(totalquestion:number){
    let procentagemAcertos = Math.floor((correctAnswers / totalquestion) * 100)


    divAreaQuestions.style.display = "none";
    divprogress.style.display = "none";
    divResult.style.display = "flex";

    const divYourLevel = document.getElementById("yourlevel") as HTMLDivElement;
    const divQuantidadeAcertos = document.getElementById("quantidadeacertos") as HTMLDivElement;
    
    if(procentagemAcertos >= 75){
        divYourLevel.textContent = "PARABENS!! VOCÊ CONSEGUIU COMPLETAR O NIVEL BASICO";
        divYourLevel.style.color = "green";
    }else{
        divYourLevel.textContent =  "NÃO DESISTA !! VOCE VAI CONSEGUIR CONTINUE ESTUDANDO";
        divYourLevel.style.color = "red"
    }
    
    divQuantidadeAcertos.textContent = `VOCE ACERTOU  ${procentagemAcertos}%, ${correctAnswers} de ${totalquestion}`;
}

function verificaTeste(){
    if(document.title === "teste1"){
        return teste1
    }else if (document.title ==="teste2") {
        return teste2
    }
}