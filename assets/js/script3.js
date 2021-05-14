var suma = document.getElementById("btn-sumar");
var resta = document.getElementById("btn-restar");

suma.addEventListener('click', function () {
    let valor1 = parseInt(document.querySelector("#valor1").value);
    let valor2 = parseInt(document.querySelector("#valor2").value);
    let resultado= valor1+valor2;
    document.querySelector(".resultado").innerHTML =`El resultado es ${resultado}`;

});

resta.addEventListener('click', function () {
    let valor1= parseInt(document.querySelector("#valor1").value);
    let valor2= parseInt(document.querySelector("#valor2").value);
    let resultado = valor1-valor2;
    if (resultado>0) {
        document.querySelector(".resultado").innerHTML= `El resultado eses : ${resultado}`;
    } else {
        document.querySelector(".resultado").innerHTML= `El resultado eses : 0`;
    }    
});


