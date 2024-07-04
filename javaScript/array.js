/**
 Array 
 uma estrutura de dados 
 */
const user = [
  { name: "rodrigo ", age: 23 },
  { name: "samira ", age: 17 },
];

console.log(user[1]);

const user1 = [
  { name: "Reginaldo", age: 40 },
  { name: "lena", age: 35 },
];
user1[1].name = "izabelly";
user1[1].age = 20; /* pode altera mesmo usando o const, mais um intem por vez */

console.log(user1[1]);

/* use os [] com numero para fazer a leitura de cada elemento, lembrando que começa a conta do zero [0 , 1 , 2 ] */
