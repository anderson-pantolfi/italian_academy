const motivoContato = document.getElementById("motivo_contato") as HTMLSelectElement;
const subCategoriaMotivo = document.getElementById("subcategoriamotivo") as HTMLSelectElement;
const divsubmotivo = document.getElementById("submotivo") as HTMLDivElement;
const divrespostaPersonalizada = document.getElementById("divrespostaPersonalizada") as HTMLDivElement;
const textoDivPersonalizada = document.querySelector("#textoDivPersonalizada") as HTMLDivElement;

function limparOpcoes(selectElement:HTMLSelectElement) {
    while (selectElement.options.length > 1) {
        selectElement.remove(0);
    }
}

function DivRespostaPersonalizada() {
    textoDivPersonalizada.innerHTML = "";
    if (motivoContato.value === "sugestao") {
        textoDivPersonalizada.innerHTML = "Digite sua Sugestão:"
    } else if (motivoContato.value ==="duvidas" && subCategoriaMotivo.value === "outros") {
        textoDivPersonalizada.innerHTML = "Digite sua duvida:"
    } else if (motivoContato.value === "reclamacao" && subCategoriaMotivo.value === "outros" ) {
        textoDivPersonalizada.innerHTML = "Digite sua reclamação:"
    } else {
        textoDivPersonalizada.innerHTML = "Digite o motivo do seu contato:"
    }
}

function displayDivsubMotivo() {
    if (motivoContato.value === "sugestao" || motivoContato.value === "outros") {
        divsubmotivo.style.display = "none";
    } else {
        divsubmotivo.style.display = "block";
    }
}

function displayDivRespostaPersonalizada(){
    if ( motivoContato.value === "sugestao"|| motivoContato.value === "outros" || subCategoriaMotivo.value === "outros") {
        DivRespostaPersonalizada()
        divrespostaPersonalizada.style.display = "block";
    } else {
        divrespostaPersonalizada.style.display = "none";
    }
}

function mostrarOpcoesEMostrarResposta() {
    mostrarOpcaoSubcatecoria();
    displayDivRespostaPersonalizada();
}



function criarOpcao(text:string) {
    const opcao = document.createElement("option");
    opcao.innerText = text;
    return opcao
}

function atribuirValueOpcao(opcao:HTMLOptionElement, valor:string) {
    opcao.value = valor
}


function mostrarOpcaoSubcatecoria() {

    limparOpcoes(subCategoriaMotivo);

    if (motivoContato.value === "duvidas") {

        displayDivsubMotivo();

        const cancelarPedido = criarOpcao("como cancelar meu pedido ?");
        atribuirValueOpcao(cancelarPedido, "cancelarPedido");
        subCategoriaMotivo.appendChild(cancelarPedido);

        const mudarCartaoCadastrado = criarOpcao("como mudar meu cartao cadastrado ?");
        atribuirValueOpcao(mudarCartaoCadastrado, "mudarCartao");
        subCategoriaMotivo.appendChild(mudarCartaoCadastrado);

        const cancelarRenovacaoAutomatica = criarOpcao("como cancelar renovação automatica ?");
        atribuirValueOpcao(cancelarRenovacaoAutomatica, "cancelarRenovacaoAutomatica" );
        subCategoriaMotivo.appendChild(cancelarRenovacaoAutomatica);

        const metodologiadeEnsino = criarOpcao("Qual é a abordagem de ensino utilizada ela é mais focada na conversação ou na gramática");
        atribuirValueOpcao(metodologiadeEnsino, "metodologiadeEnsino");
        subCategoriaMotivo.appendChild(metodologiadeEnsino)

        const Outros = criarOpcao("outros");
        atribuirValueOpcao(Outros, "outros")
        subCategoriaMotivo.appendChild(Outros)

    } else if (motivoContato.value === "reclamacao") {

        displayDivsubMotivo();

        const semAcessoPlataforma = criarOpcao("credenciais invalidas, não consigo redefinir minha senha.");
        atribuirValueOpcao(semAcessoPlataforma, "redefinirCredecial");
        subCategoriaMotivo.appendChild(semAcessoPlataforma);

        const plataformaForadeAr = criarOpcao("Area do aluno Fora do ar")
        atribuirValueOpcao(plataformaForadeAr, "plataformaForadeAr");
        subCategoriaMotivo.appendChild(plataformaForadeAr);

        const Outros = criarOpcao("outros");
        atribuirValueOpcao(Outros, "outros");
        subCategoriaMotivo.appendChild(Outros);

        
    } else {
        displayDivsubMotivo();
        displayDivRespostaPersonalizada()
    }
}



subCategoriaMotivo.addEventListener("change", displayDivRespostaPersonalizada);

motivoContato.addEventListener("change", mostrarOpcoesEMostrarResposta);
