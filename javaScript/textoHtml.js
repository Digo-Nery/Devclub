const element = document.querySelector(".banana");

console.log(element.textContent); /* Só html */
console.log(element.innerHTML); /*tras tudo ! permite adicionar html */
console.log(element.innerText); /*leva em conta o css */

const button = document.querySelector(".main-button")
button.backgroundcolor = "red"


function cliqueiNobotao(){
alert("cliquei no botton    ")

}