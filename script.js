const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito=document.querySelector('.parrafito');
const pid = document.querySelector('#pid');
const input = document.querySelector('input');

console.log(input.value)

console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
});

h1.innerHTML = 'Patito <br> lala'; //Convierte todo a codigo html
h1.innerText = 'Hello' //Convierte a texto
console.log(h1.getAttribute('class')); //accedemos a cualquier atributo
h1.setAttribute('class', 'amarillo'); //cambamos el nombre de la clase

h1.classList.add('verde'); //agrega esto a la clase
h1.classList.remove('amarillo'); //elimina este elemento de la clase

input.value='234';

const img = document.createElement('img')
img.setAttribute('src', 'https://evitarquesatanas.com/wp-content/uploads/2019/06/Jesus-name-powerful-2.jpg');
console.log(img);

pid.innerHTML=""
pid.append(img);