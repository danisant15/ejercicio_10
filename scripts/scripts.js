function saludo(){
    let nombre = "Programación" + " Fácil, ";
    let saludo = "Les doy la bienvenida a ";
    let info = " el mejor curso para aprender a programar.";
    let fraseCompleta = saludo + nombre + info;
    console.log(fraseCompleta);
    alert(fraseCompleta);
}

function javascript(){
    let frase = "JavaScript " + "es un lenguaje " + "esencial para crear " + "sitios web poderosos.";
    console.log(frase);
    alert(frase);
}

function numeros(){
    let numeroString1 = "10";
    let numeroString2 = "20";
    let numeroString3 = "30";
    let concatenarNumeros = "10 " + "20 " + "30 " + "son números pares.";
    console.log(concatenarNumeros);
    alert(concatenarNumeros);
}

function datos(){
    var nombre = prompt("Cuál es tu nombre?");
    var edad = prompt("Cuál es tu edad?");
    console.warn(nombre + " " + edad);
    alert(nombre + " " + edad);
}

function sexoedad(){
    let sexo;
    sexo = prompt("Indica si eres hombre o mujer");
    let edad;
    edad = prompt("Introduce tu edad");
    if (sexo == 'hombre' && edad >=18){alert("Puedes entrar, eres mayor de edad.");
    } else if (sexo == 'mujer' && edad >=20){alert("Puedes entrar, eres mayor de edad.");
    } else {alert("No puedes entrar, eres menor de edad.");}
}
