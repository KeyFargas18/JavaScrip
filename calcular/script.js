const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');
const form = document.querySelector('form');

form.addEventListener('submit', sumarInput); //permite escuchar eventos de los usuarios sin mezclar código HTML
//(A QUIÉN -          QUÉ ACCIÓN - CUAL FUNCION, tipo de evento para escuchar., funcion que debe mandar a llamar)

function sumarInput(event){
    console.log({event});
    event.preventDefault(); /*es para que el fomulario no haga lo que por defecto hace
    que es recargar la pagina para enviar en la url lo que escribieron los usuarios, 
    sino que solamente haga lo que nosotros querramos desde js*/
    var resultado = +input1.value + +input2.value;
    pResult.innerText = "Resultado: "+resultado;
}

//OTRA MANERA DE HACERLO

/*btn.addEventListener('click', sumarInput);

function sumarInput(event){
    var resultado = +input1.value + +input2.value;
    pResult.innerText = "Resultado: "+resultado;
}*/

/*para que esto funcione tenemos que ir al button y ponerle la propiedad type="button"
porque por defecto el formulario agarra el ultimo boton para cargar la pagina
*/