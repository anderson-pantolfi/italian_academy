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
      const email = document.getElementById("email");

      if(objetoregras !== null) {
        if (objetoregras.requered === 'yes' && input.value == "") {
          return 'erro nao pode ser vazio, item obrigatorio';
        }

        if( input.value.length < objetoregras.min) {
            return `campo deve conter no minimo ${objetoregras.min} caracteres`
        }

        if(input.value.length > objetoregras.max) {
          return `campo deve conter no maximo ${objetoregras.max} caracteres`
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
    /*
        input.style.background = '#E00000';
        input.style.color = 'white'*/

        let erroElemento = document.createElement('div');
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

let form = document.querySelector(".validarform");
form.addEventListener('submit', validarformulario.handleSubmit);

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


