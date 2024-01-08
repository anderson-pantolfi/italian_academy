const motivoContato = document.getElementById("motivo_contato");
const subCategoriaMotivo = document.getElementById("subcategoriamotivo");
const divsubmotivo = document.getElementById("submotivo");
const divrespostaPersonalizada = document.getElementById("divrespostaPersonalizada");
const textoDivPersonalizada = document.querySelector('#textoDivPersonalizada')

function limparOpcoes(selectElement) {
    while (selectElement.options.length > 1) {
        selectElement.remove(1);
    }
}

function DivRespostaPersonalizada() {
    textoDivPersonalizada.innerHTML = '';
    if (motivoContato.value === 'sugestao') {
        textoDivPersonalizada.innerHTML = 'Digite sua Sugestão:'
    } else if (motivoContato.value ==='duvidas' && subCategoriaMotivo.value === 'outros') {
        textoDivPersonalizada.innerHTML = 'Digite sua duvida:'
    } else if (motivoContato.value === 'reclamacao' && subCategoriaMotivo.value === 'outros' ) {
        textoDivPersonalizada.innerHTML = 'Digite sua reclamação:'
    } else {
        textoDivPersonalizada.innerHTML = 'Digite o motivo do seu contato:'
    }
}

function displayDivsubMotivo() {
    if (motivoContato.value === "sugestao" || motivoContato.value === 'outros') {
        divsubmotivo.style.display = "none";
    } else {
        divsubmotivo.style.display = "block";
    }
}

function displayDivRespostaPersonalizada(){
    if ( motivoContato.value === "sugestao"|| motivoContato.value === 'outros' || subCategoriaMotivo.value === 'outros') {
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



function criarOpcao(text) {
    let opcao = document.createElement('option');
    opcao.innerText = text;
    return opcao
}

function atribuirValueOpcao(opcao, valor) {
    opcao.value = valor
}


function mostrarOpcaoSubcatecoria() {

    limparOpcoes(subCategoriaMotivo);

    if (motivoContato.value === 'duvidas') {

        displayDivsubMotivo();

        let cancelarPedido = criarOpcao("como cancelar meu pedido ?");
        atribuirValueOpcao(cancelarPedido, "cancelarPedido");
        subCategoriaMotivo.appendChild(cancelarPedido);

        let mudarCartaoCadastrado = criarOpcao("como mudar meu cartao cadastrado ?");
        atribuirValueOpcao(mudarCartaoCadastrado, "mudarCartao");
        subCategoriaMotivo.appendChild(mudarCartaoCadastrado);

        let cancelarRenovacaoAutomatica = criarOpcao("como cancelar renovação automatica ?");
        atribuirValueOpcao(cancelarRenovacaoAutomatica, "cancelarRenovacaoAutomatica" );
        subCategoriaMotivo.appendChild(cancelarRenovacaoAutomatica);

        let metodologiadeEnsino = criarOpcao('Qual é a abordagem de ensino utilizada ela é mais focada na conversação ou na gramática');
        atribuirValueOpcao(metodologiadeEnsino, "metodologiadeEnsino");
        subCategoriaMotivo.appendChild(metodologiadeEnsino)

        let Outros = criarOpcao('outros');
        atribuirValueOpcao(Outros, 'outros')
        subCategoriaMotivo.appendChild(Outros)

    } else if (motivoContato.value === "reclamacao") {

        displayDivsubMotivo();

        let semAcessoPlataforma = criarOpcao('credenciais invalidas, não consigo redefinir minha senha.');
        atribuirValueOpcao(semAcessoPlataforma, "redefinirCredecial");
        subCategoriaMotivo.appendChild(semAcessoPlataforma);

        let plataformaForadeAr = criarOpcao('Area do aluno Fora do ar')
        atribuirValueOpcao(plataformaForadeAr, "plataformaForadeAr");
        subCategoriaMotivo.appendChild(plataformaForadeAr);

        let Outros = criarOpcao('outros');
        atribuirValueOpcao(Outros, 'outros');
        subCategoriaMotivo.appendChild(Outros);

        
    } else {
        displayDivsubMotivo();
        displayDivRespostaPersonalizada()
    }
}



subCategoriaMotivo.addEventListener('change', displayDivRespostaPersonalizada);

motivoContato.addEventListener('change', mostrarOpcoesEMostrarResposta);
