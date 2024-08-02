/*
document -> HTML 

getElemntbyid -> trás um elemento pelo id 
getElementByClassName -> trás todos os elementos com essa classe 
getElementByTagName -> trás Todos os elementos com essa ta
getElementByName -> trás todos os elementos com esse Name 

querySelector -> trás um elemento primerio que encontra 
querySelectorAll -> trás todos os elementos que encontra 
*/

/* getElementByid */

const input = document.getElementById("main-input");

console.log(input);

/* getElementByClassName */
const byclass = document.getElementsByClassName("paragrafjs");

console.log(byclass);

/* getElementByTagName  */

const bytag = document.getElementsByTagName("h1");

console.log(bytag);

/* getElementByName */

const Byname = document.getElementsByName("digite aqui");

console.log(Byname);

/* querySelector */

const Selec = document.querySelector(".paragrafjs");

console.log(Selec);

/* querySelectorAll */

const All = document.querySelectorAll(".banana")
console.log(All);