//efeito maquina de escrever Banner
function effectTyperWriter(caracter, loop = true) {
  const textArray = caracter.innerHTML.split("");
  caracter.innerHTML = "";

  textArray.forEach((letra, i) => {
    setTimeout(() => (caracter.innerHTML += letra), 200 * i);
  });

  if (loop) {
    setTimeout(() => effectTyperWriter(caracter, loop), 200 * textArray.length);
  }
}

const titulo = document.getElementById("typeWriter");
effectTyperWriter(titulo);


//validação formulario aula teste
let validarformulario = {
  handleSubmit:(event) => {
    event.preventDefault();
    let enviar = true;
    let inputs = form.querySelectorAll('input');

    validarformulario.limparerro();

    for(let itens=0; itens<inputs.length; itens++ ) {
      let input = inputs[itens];
      let check = validarformulario.checkInput(input);
      if (check !== true) {
        enviar = false;
        validarformulario.exibirerro(input, check);
      }
    }

    if(enviar) {
      form.submit();
    }
  },

  checkInput:(input) => {
      const jasonRegras = input.getAttribute("data-regras");
      const objetoregras = JSON.parse(jasonRegras);

      if(objetoregras !== null) {
        if (objetoregras.requered === 'yes' && input.value == "") {
          return 'erro campo não pode estar vazio, item obrigatorio';
        }

        if(email.value !== "" && input === email){
          padraoemail= /[a-zA-Z0-9]+([._%+-]+[a-zA-Z0-9]+)*@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/
          if(!padraoemail.test(input.value)) {
            return "email invalido"
          }
        }
      }
        return true
      },

  exibirerro: (input, erro) => {
    input.style.borderColor = "red";
    input.style.borderWidth = "3px";

    let erroElemento = document.createElement('p');
    erroElemento.classList.add('erro');
    erroElemento.innerHTML = erro;

    input.parentElement.insertBefore(erroElemento, input.ElementSibling);
  },

  limparerro: () => {
    let erroElementos = document.querySelectorAll(".erro");
    for( let erro=0; erro < erroElementos.length; erro++) {
      erroElementos[erro].remove();
    }
  }
};

function validarinputnome(input) {
  const jasonRegras = input.getAttribute("data-regras");
  const objetoregras = JSON.parse(jasonRegras);

  let erroElementos = document.querySelectorAll(".erronome");
  for( let erro=0; erro < erroElementos.length; erro++) {
    erroElementos[erro].remove();
  }

  let erro = ""

  if(input.value.length < objetoregras.min) {
    erro = `campo deve conter no minimo ${objetoregras.min} caracteres`
    input.style.borderColor = "red";
    input.style.borderWidth = "3px";
  } else if (input.value.length > objetoregras.max ) {
    erro = `campo deve conter no maximo ${objetoregras.max} caracteres`
    input.style.borderColor = "red";
    input.style.borderWidth = "3px";
  } else {
    input.style.borderColor = "#969494";
    input.style.borderWidth = "1px";
  }

  let erroElemento = document.createElement('p');
  erroElemento.classList.add('erronome');
  erroElemento.innerHTML = erro;
  input.parentElement.insertBefore(erroElemento, nome.ElementSibling);
}

function validarinputtelefone(input) {
  const jasonRegras = input.getAttribute("data-regras");
  const objetoregras = JSON.parse(jasonRegras);

  let erroElementos = document.querySelectorAll(".errotel");
  for( let erro=0; erro < erroElementos.length; erro++) {
    erroElementos[erro].remove();
  }

  let erro = ""
  let numero = parseInt(input.value);

  if(isNaN(numero) && input.value !== "") {
    erro = 'só é permitido numero de 0 a 9, isso não é um numero';
    input.style.borderColor = "red";
    input.style.borderWidth = "3px";
  } else if(input.value.length < objetoregras.min) {
    erro = `campo deve conter no minimo ${objetoregras.min} caracteres`
    input.style.borderColor = "red";
    input.style.borderWidth = "3px";
  } else if (input.value.length > objetoregras.max ) {
    erro = `campo deve conter no maximo ${objetoregras.max} caracteres`
    input.style.borderColor = "red";
    input.style.borderWidth = "3px";
  } else {
    input.style.borderColor = "#969494";
    input.style.borderWidth = "1px";
  }

  let erroElemento = document.createElement('p');
  erroElemento.classList.add('errotel');
  erroElemento.innerHTML = erro;
  input.parentElement.insertBefore(erroElemento, nome.ElementSibling);
};

function validarinputcelular(input) {
  const jasonRegras = input.getAttribute("data-regras");
  const objetoregras = JSON.parse(jasonRegras);

  let erroElementos = document.querySelectorAll(".errocel");
  for( let erro=0; erro < erroElementos.length; erro++) {
    erroElementos[erro].remove();
  }
  
  let erro = ""
  let numero = parseInt(input.value);

  if(isNaN(numero) && input.value !== "") {
    erro = 'só é permitido numero de 0 a 9, isso não é um numero';
    input.style.borderColor = "red";
    input.style.borderWidth = "3px";
  }else if(input.value.length < objetoregras.min) {
    erro = `campo deve conter no minimo ${objetoregras.min} caracteres`
    input.style.borderColor = "red";
    input.style.borderWidth = "3px";
  } else if (input.value.length > objetoregras.max ) {
    erro = `campo deve conter no maximo ${objetoregras.max} caracteres`
    input.style.borderColor = "red";
    input.style.borderWidth = "3px";
  } else {
    input.style.borderColor = "#969494";
    input.style.borderWidth = "1px";
  }

  let erroElemento = document.createElement('p');
  erroElemento.classList.add('errocel');
  erroElemento.innerHTML = erro;
  input.parentElement.insertBefore(erroElemento, nome.ElementSibling);
}

function validarinputemail(input){

  let erroElementos = document.querySelectorAll(".erroemail");
  for( let erro=0; erro < erroElementos.length; erro++) {
    erroElementos[erro].remove();
  }

  let erro = ""

  if(email.value !== "" && input === email){
    padraoemail= /[a-zA-Z0-9]+([._%+-]+[a-zA-Z0-9]+)*@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/
    if(!padraoemail.test(input.value)) {
      erro = "email invalido"
      input.style.borderColor = "red";
      input.style.borderWidth = "3px";
    }
  } else {
    input.style.borderColor = "#969494";
    input.style.borderWidth = "1px";
  }

  let erroElemento = document.createElement('p');
  erroElemento.classList.add('erroemail');
  erroElemento.innerHTML = erro;
  input.parentElement.insertBefore(erroElemento, nome.ElementSibling);
}


const form = document.querySelector(".validarform");
const nome = document.getElementById("nome");
const telefone = document.getElementById("telefone");
const celular = document.getElementById("celular");
const email = document.getElementById("email");
const botao = document.querySelector(".botao_enviar")

form.addEventListener('submit', validarformulario.handleSubmit);

nome.addEventListener('input', () => {
  validarinputnome(nome);
});

telefone.addEventListener('input', () => {
  validarinputtelefone(telefone);
});

celular.addEventListener('input', () => {
  validarinputcelular(celular);
});

email.addEventListener('input', () => {
  validarinputemail(email);
})


botao.addEventListener('mouseover', () => {
  botao.style.backgroundColor = "#e00c0c";
  botao.style.color = 'white';
});

botao.addEventListener('mouseout', () => {
  {botao.style.backgroundColor = "#e9e6e6";
    botao.style.color ='black';
  }
});

// efeito silder show depoimentos
var swiper = new Swiper(".swiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 2,
  loop: true,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});


