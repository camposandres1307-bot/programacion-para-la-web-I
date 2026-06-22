/*// EJERCICIO1
let unidad, cantidad, mi, km, mt;
unidad = parseInt(prompt('Digite 1 para Millas - 2 para Kilometros - 3 para Metros'));
cantidad = prompt('Digite la distancia a convertir');
switch (unidad) {
    case 1: 
        km = cantidad * 1.6093;
        mt = cantidad * 1609.34;
        document.write(cantidad + ' Millas equivalen a ' + km + ' Kilometros y a ' + mt + ' Metros');
        break;
    case 2:
        mi = cantidad * 0.621371;
        mt = cantidad * 1000;
        document.write(cantidad + ' Kilometros equivalen a ' + mi + ' Millas y a ' + mt + ' Metros');

        break;
    case 3:
        mi = cantidad * 0.000621371;
        km = cantidad * 0.001;
        document.write(cantidad + ' Metros equivalen a ' + mi + ' Millas y a ' + km + ' Kilometros');

        break;
    default:
        document.write('Valor INCORRECTO');
        break;

}

// EJERCICIO2
let d1, d2, d3, d4, d5, d6, num, coc;
num = prompt('Digite un numero del 1 al 6');
d6 = num % 10;
coc = Math.trunc(num / 10);
d5 = coc % 10;
coc = Math.trunc(coc/ 10);
d4 = coc % 10;
coc = Math.trunc(coc / 10);
d3 = coc % 10;
coc = Math.trunc(coc / 10);
d2 = coc % 10;
coc = Math.trunc(coc / 10);
d1 = d5 = coc % 10;
document.write(d6 +" " + d5 + " " + d4 + " " + d3 + " " + d2 + " " + d1);

//EJERCICIO 3
let hh, mm, ss;

hh = parseInt(prompt("Digite las horas"));
mm = parseInt(prompt("Digite los minutos"));
ss = parseInt(prompt("Digite los segundos"));

ss = ss + 1;

if (ss == 60) {
    ss = 0;
    mm = mm + 1;
}

if (mm == 60) {
    mm = 0;
    hh = hh + 1;
}

if (hh == 24) {
    hh = 0;
}

document.write("La hora un segundo después es: " 
+ hh + ":" + mm + ":" + ss);

// EJERCICIO 4
let a, b, c, d, x1, x2;

a = parseFloat(prompt("Digite el valor de a"));
b = parseFloat(prompt("Digite el valor de b"));
c = parseFloat(prompt("Digite el valor de c"));

d = (b * b) - (4 * a * c);

if (d > 0) {
    x1 = (-b + Math.sqrt(d)) / (2 * a);
    x2 = (-b - Math.sqrt(d)) / (2 * a);

    document.write("Hay DOS soluciones reales <br>");
    document.write("x1 = " + x1 + "<br>");
    document.write("x2 = " + x2);
}

else if (d == 0) {
    x1 = (-b) / (2 * a);

    document.write("Hay UNA solucion real <br>");
    document.write("x = " + x1);
}

else {
    document.write("Hay DOS soluciones imaginarias");
}

// //EJERCICIO 5
let baja = 0;
let media = 0;
let alta = 0;

while (true) {

    let entrada = prompt("Ingrese una temperatura (99 o -99 para terminar):");

    if (entrada === null) break;

    let temperatura = parseInt(entrada);

   
    if (temperatura === 99 || temperatura === -99) {
        break;
    }

  
    if (isNaN(temperatura)) {
        alert("Ingrese un número válido");
        continue;
    }

  
    if (temperatura < 0) {
        baja++;
    } else if (temperatura <= 51) {
        media++;
    } else {
        alta++;
    }
}


alert(
    "RESULTADOS:\n" +
    "Temperatura baja (<=0°): " + baja + "\n" +
    "Temperatura media (<=50°): " + media + "\n" +
    "Temperatura alta (>=51°): " + alta
);

"Mostrar resultados"
document.write("Temperaturas menores a 0: " + menores + "<br>");
document.write("Temperaturas iguales a 0: " + iguales + "<br>");
document.write("Temperaturas mayores a 0: " + mayores)

// EJERCICIO 6


let numero;
let d1, d2, d3, d4;

numero = prompt("Digite un número de 4 dígitos:");

if (numero.length != 4 || isNaN(numero)) {

    document.write("ERROR: Debe ingresar un número válido de 4 dígitos");

} else {

    d1 = parseInt(numero[0]);
    d2 = parseInt(numero[1]);
    d3 = parseInt(numero[2]);
    d4 = parseInt(numero[3]);

    if (d1 % 2 == 0) {
        document.write("Hay una aeronave en el aire<br>");
    } else {
        document.write("No hay aeronave en el aire<br>");
    }

    switch (d2) {

        case 1:
            document.write("Tipo: Avión militar<br>");
            break;

        case 2:
            document.write("Tipo: Avión civil de carga<br>");
            break;

        case 3:
            document.write("Tipo: Avión civil de pasajeros<br>");
            break;

        case 4:
            document.write("Tipo: Aeronave sin permiso<br>");
            break;

        case 5:
            document.write("Tipo: Aeronave de supertransporte<br>");
            break;

        case 6:
            document.write("Tipo: Aeronave enemiga<br>");
            break;

        case 7:
            document.write("Tipo: Avión mixto<br>");
            break;

        case 8:
            document.write("Tipo: Helicóptero<br>");
            break;

        case 9:
            document.write("Tipo: Globo aerostático<br>");
            break;

        case 0:
            document.write("Tipo: Dirigible<br>");
            break;
    }

    document.write("Distancia: " + d3 + " km<br>");

    if (d4 == 0 || d4 == 1) {
        document.write("Dirección: Norte");
    }
    else if (d4 == 2 || d4 == 3) {
        document.write("Dirección: Sur");
    }
    else if (d4 == 4 || d4 == 5) {
        document.write("Dirección: Oriente");
    }
    else if (d4 == 6 || d4 == 7) {
        document.write("Dirección: Occidente");
    }
    else {
        document.write("Dirección: Desconocida");
    }
} 

    // EJERCICIO 7
    function recogerDatos(){
    let nom, tel, correo, frec, dia;
    let cantA, cantAA, cantAAA, ctotal, vtotal, dcto=0, otrod=0, vfinal, totalPago;

    nom = document.getElementById("cliente").value;     //Se guarda el nombre del cliente en la variable nom
    tel = document.getElementById("tel").value;         //Se guarda el telefono del cliente en la variable tel
    correo = document.getElementById("email").value;    //Se guarda el correo del cliente en la variable correo
    frec = document.getElementById("frec").checked;     //Se guarda el estado del checkbox en la variable frec, si esta marcado se guarda true, si no esta marcado se guarda false
    cantA = document.getElementById("cantA").value;     //Se guarda la cantidad de huevos tipo A en la variable cantA
    cantAA = document.getElementById("cantAA").value;   //Se guarda la cantidad de huevos tipo AA en la variable cantAA
    cantAAA = document.getElementById("cantAAA").value; //Se guarda la cantidad de huevos tipo AAA en la variable cantAAA
    dia = document.getElementById("dia").value;         //Se guarda el día de compra en la variable dia, dependiendo del valor seleccionado se guardará 1, 2 o 3
    
    ctotal = parseInt(cantA) + parseInt(cantAA) + parseInt(cantAAA);//Se calcula el total de huevos comprados sumando las cantidades de cada tipo de huevo, se utiliza parseInt para convertir las cadenas de texto a números enteros
    vtotal = (parseInt(cantA)*600) + (parseInt(cantAA)*700) + (parseInt(cantAAA)*750);//Se calcula el valor total de la compra multiplicando la cantidad de cada tipo de huevo por su precio correspondiente, se utiliza parseInt para convertir las cadenas de texto a números enteros
    if(ctotal>=30 && ctotal<=45){//Se calcula el descuento dependiendo del total de huevos comprados, si el total de huevos comprados esta entre 30 y 45 se aplica un descuento del 10% sobre el valor total de la compra
        dcto = vtotal*0.1;
    } else if(ctotal>=46 && ctotal<=70){//Si el total de huevos comprados esta entre 46 y 70 se aplica un descuento del 15% sobre el valor total de la compra
        dcto = vtotal*0.15;
    } else if(ctotal>=71 && ctotal<=100){//Si el total de huevos comprados esta entre 71 y 100 se aplica un descuento del 20% sobre el valor total de la compra
        dcto = vtotal*0.2;
    } else if(ctotal>100){//Si el total de huevos comprados es mayor a 100 se aplica un descuento del 25% sobre el valor total de la compra
        dcto = vtotal*0.25;
    } else {//Si el total de huevos comprados es menor a 30 no se aplica ningún descuento
        dcto = 0;
    }
    if (frec===true){//Si el cliente es frecuente se aplica un descuento adicional del 2.5% sobre el valor total de la compra después de aplicar el descuento por cantidad de huevos comprados
        otrod = vtotal * 0.025;
        frec = ". Sí";
    } else {
        otrod = 0;
        frec = ". No";
    }

    vfinal = vtotal - dcto - otrod;//Se calcula el valor total de la compra después de aplicar los descuentos restando el descuento por cantidad de huevos comprados y el descuento adicional por ser cliente frecuente al valor total de la compra antes de descuentos 

    switch (dia){
        case "1":
            totalPago = vfinal+(vfinal*0.05);//Si el día de compra es lunes a viernes se aplica un recargo del 5% sobre el valor total de la compra después de aplicar los descuentos
            dia = "de Lunes a Viernes";
            break;
        case "2":
            totalPago = vfinal-(vfinal*0.05);//Si el día de compra es sábado se aplica un descuento del 5% sobre el valor total de la compra después de aplicar los descuentos
            dia = "Sábado";
            break;
        case "3":
            totalPago = vfinal; //Si el día de compra es domingo no se aplica ningún recargo ni descuento adicional sobre el valor total de la compra después de aplicar los descuentos
            dia = "Domingo";
            break;
    }

    alert(nom + ", compró " + cantA + " huevos tipo A, " + cantAA + " huevos tipo AA y " + cantAAA + " huevos tipo AAA, el día " + dia + frec + " es cliente frecuente." + "\nCompró un total de " + ctotal + " huevos por un valor de $" + vtotal + ", con un descuento de $" + dcto + " por cantidad de huevos comprados y un descuento adicional de $" + otrod + " por ser cliente frecuente, el valor total a pagar es de $" + totalPago);

}

    //EJERCICIO 8 
let ajedrez = 0;
let atletismo = 0;
let futbol = 0;
let gimnasia = 0;
let natacion = 0;

for (let i = 1; i <= 10; i++) {
    let deporte = prompt(`Ingrese el deporte de la persona ${i}:`)
                    .toLowerCase();

    switch (deporte) {
        case "ajedrez":
            ajedrez++;
            break;

        case "atletismo":
            atletismo++;
            break;

        case "futbol":
        case "fútbol":
            futbol++;
            break;

        case "gimnasia":
            gimnasia++;
            break;

        case "natacion":
        case "natación":
            natacion++;
            break;

        default:
            alert("Deporte no válido");
            i--; 
            break;
    }
}

    // EJERCICIO9 

const clave = "CESDE2026";
let acceso = false;

for (let i = 1; i <= 3; i++) {
    let contraseña = prompt("Ingrese la contraseña:");

    if (contraseña === clave) {
        alert("Acceso concedido");
        acceso = true;
        break;
    } else {
        alert(`Contraseña incorrecta. Intento ${i} de 3.`);
    }
}

if (!acceso) {
    alert("Alerta, intruso");
} 

    //EJERCICIO10
let contador = 0;
let numero;

while (true) {
    numero = parseInt(prompt("Ingrese un número par:"));

    if (numero % 2 === 0) {
        contador++;
    } else {
        break;
    }
}

document.getElementById("resultado").textContent =
    `Cantidad de números pares ingresados: ${contador}`;
    
//egercicio11
const dias = [
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
    "Domingo"
];


let numero = prompt("Ingrese un número del 1 al 7:");
let resultado = document.getElementById("resultado");


numero = parseInt(numero);


if (isNaN(numero) || numero < 1 || numero > 7) {
    resultado.textContent = "Error: ingrese un número válido entre 1 y 7.";
} else {
    resultado.textContent = "El día es: " + dias[numero - 1];
}
    
//EJERCICIO12
let numeros = prompt("Ingrese números separados por coma (ej: 1,2,3,4)");

numeros = numeros.split(",");

let suma = 0;

for (let i = 0; i < numeros.length; i++) {
    suma += Number(numeros[i]);
}

alert("La suma es: " + suma);
*/
//EJERCICIO13
let numeros = [];
let num;

while (true) {
    num = prompt("Ingrese un número (0 o no numérico para terminar):");

    num = Number(num);

    // condición de salida
    if (isNaN(num) || num === 0) {
        break;
    }

    numeros.push(num);
}

let pares = 0;
let impares = 0;

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        pares++;
    } else {
        impares++;
    }
}
 
alert(
    "Array: " + numeros +
    "\nPares: " + pares +
    "\nImpares: " + impares
);