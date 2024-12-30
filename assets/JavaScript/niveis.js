"use strict";
const buttonPaginaTextePrincipal = document.getElementById("voltar");
buttonPaginaTextePrincipal.addEventListener("click", () => {
    window.location.href = "formcadastroteste.html";
});
const link = [
    "testeone.html",
    "testetwo.html",
    "testetree.html",
    "testefourth.html",
    "testefive.html",
    "testesix.html",
];
const listbutton = document.querySelectorAll(".buttonteste");
listbutton.forEach((button, index) => {
    button.addEventListener("click", () => {
        startTest(index);
    });
});
function startTest(index) {
    window.location.href = link[index];
    console.log(link[index]);
}
