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


