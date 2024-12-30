"use strict";
const validarformularioteste = {
    validarsubmit: (event) => {
        event.preventDefault();
        let enviar = true;
        const Inputs = document.querySelectorAll("input");
        validarformularioteste.limparerros();
        for (let elemento = 0; elemento < Inputs.length; elemento++) {
            const input = Inputs[elemento];
            const erro = validarformularioteste.verificarerro(input);
            if (erro !== true) {
                enviar = false;
                if (typeof erro === "string") {
                    validarformularioteste.exibirerro(input, erro);
                }
            }
            ;
        }
        ;
        if (enviar) {
            formulario.submit();
            window.location.href = "selected-nivel.html";
        }
        ;
    },
    verificarerro: (input) => {
        const requistos = input.getAttribute("date-regras");
        if (requistos) {
            const regras = JSON.parse(requistos);
            if (regras !== null) {
                if (regras.requered === "yes" && input.value === "") {
                    return "obs. voce não prencheu este campo, campo obrigatorio";
                }
            }
        }
        return true;
    },
    exibirerro: (input, erro) => {
        input.style.borderColor = "red";
        input.style.borderWidth = "3px";
        const diverro = document.createElement("p");
        diverro.classList.add("stylediverros");
        diverro.innerHTML = erro;
        if (input.parentElement) {
            input.parentElement.insertBefore(diverro, input.nextElementSibling);
        }
    },
    limparerros: () => {
        const erros = document.querySelectorAll(".stylediverros");
        for (let erro = 0; erro < erros.length; erro++) {
            erros[erro].remove();
        }
    }
};
const formulario = document.getElementById("form_cadastro_teste");
formulario.addEventListener("submit", validarformularioteste.validarsubmit);
