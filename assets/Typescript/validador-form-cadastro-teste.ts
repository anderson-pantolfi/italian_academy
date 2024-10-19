const validarformularioteste = {
    validarsubmit:(event: Event) => {
        event.preventDefault();
        let enviar:boolean = true;
        let Inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll("input");

        validarformularioteste.limparerros();
        
        for(let elemento:number = 0; elemento < Inputs.length; elemento++){
            let input:HTMLInputElement = Inputs[elemento];
            let erro:boolean | string = validarformularioteste.verificarerro(input);
            if(erro !== true) {
                enviar = false;
                if(typeof erro === "string"){
                    validarformularioteste.exibirerro(input, erro);
                }
            };
        };

        if(enviar) {
            formulario.submit();
            window.location.href = "teste-questao.html";
        };
    },


    verificarerro: (input:HTMLInputElement): boolean | string =>  {
        const requistos = input.getAttribute('date-regras');
        if (requistos){
            const regras = JSON.parse(requistos);
             if(regras !==null){
                if(regras.requered === "yes" && input.value === "") {
                    return 'obs. voce não prencheu este campo, campo obrigatorio'
                }
            }     
        }
        return true
    },


    exibirerro: (input:HTMLInputElement, erro:string) => {
        input.style.borderColor = "red";
        input.style.borderWidth = "3px";

        let diverro:HTMLDivElement = document.createElement("p");
        diverro.classList.add("stylediverros");
        diverro.innerHTML = erro

        if(input.parentElement){
            input.parentElement.insertBefore(diverro, input.nextElementSibling)
        }
    },

    limparerros: () => {
        const erros = document.querySelectorAll(".stylediverros");
        for(let erro = 0; erro < erros.length; erro++) {
            erros[erro].remove();
        }
    }
};

const formulario = document.getElementById('form_cadastro_teste') as HTMLFormElement;
formulario.addEventListener("submit", validarformularioteste.validarsubmit);