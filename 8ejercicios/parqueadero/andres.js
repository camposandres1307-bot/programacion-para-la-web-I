document
.getElementById("parkingForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    const tipo =
    document.getElementById("tipoVehiculo").value;

    const placa =
    document.getElementById("placa").value.toUpperCase();

    const ingreso =
    new Date(document.getElementById("ingreso").value);

    const salida =
    new Date(document.getElementById("salida").value);

    const pagoCliente =
    Number(document.getElementById("pagoCliente").value);

    // Validar placa
    const regex = /^[A-Z]{3}[0-9]{3}$/;

    if(!regex.test(placa)){
        alert("Placa inválida. Ejemplo: ABC123");
        return;
    }

    // Validar fechas
    if(salida <= ingreso){
        alert("La fecha de salida debe ser mayor.");
        return;
    }

    // Horario parqueadero 5 AM - 12 PM (24:00)
    const horaIngreso = ingreso.getHours();
    const horaSalida = salida.getHours();

    if(horaIngreso < 5 || horaSalida < 5){
        alert("Horario permitido desde las 5:00 AM");
        return;
    }

    // Minutos parqueado
    const minutos =
    Math.ceil((salida - ingreso)/(1000*60));

    // Tarifa
    let tarifa =
    tipo === "Automovil"
    ? 125
    : 95;

    let valor =
    minutos * tarifa;

    // Pico y placa simple
    if(tipo === "Automovil"){

        const ultimoDigito =
        parseInt(placa.charAt(placa.length-1));

        const dia =
        ingreso.getDay();

        let restringidos = [];

        switch(dia){

            case 1:
                restringidos=[1,2];
                break;

            case 2:
                restringidos=[3,4];
                break;

            case 3:
                restringidos=[5,6];
                break;

            case 4:
                restringidos=[7,8];
                break;

            case 5:
                restringidos=[9,0];
                break;
        }

        if(restringidos.includes(ultimoDigito)){
            valor *= 0.75;
        }
    }

    // Ajustar a múltiplo de 50
    valor =
    Math.ceil(valor/50)*50;

    // Validar pago
    if(pagoCliente < valor){
        alert("Dinero insuficiente.");
        return;
    }

    const cambio =
    pagoCliente - valor;

    const denominaciones =
    [50000,20000,10000,5000,2000,1000,500,200,100,50];

    let restante = cambio;

    let detalleCambio = "";

    denominaciones.forEach(den => {

        const cantidad =
        Math.floor(restante/den);

        if(cantidad>0){

            detalleCambio +=
            `${cantidad} x $${den.toLocaleString()}<br>`;

            restante %= den;
        }

    });

    const horas =
    (minutos/60).toFixed(2);

    const registro = {

        fecha:
        ingreso.toLocaleDateString(),

        tipoVehiculo: tipo,

        placa: placa,

        tiempoHoras: horas,

        valorPagar: valor
    };

    document.getElementById("resultado")
    .innerHTML =

    `
    <h2>Resultado</h2>

    <p><b>Tiempo:</b> ${minutos} minutos</p>

    <p><b>Horas:</b> ${horas}</p>

    <p><b>Valor a pagar:</b> $${valor.toLocaleString()}</p>

    <p><b>Pago recibido:</b> $${pagoCliente.toLocaleString()}</p>

    <p><b>Cambio:</b> $${cambio.toLocaleString()}</p>

    <h3>Denominaciones:</h3>

    ${detalleCambio}

    <button class="json-btn"
    onclick='descargarJSON(${JSON.stringify(registro)})'>
    Descargar JSON
    </button>
    `;
});

function descargarJSON(data){

    const contenido =
    JSON.stringify(data,null,4);

    const blob =
    new Blob([contenido],
    {type:"application/json"});

    const url =
    URL.createObjectURL(blob);

    const a =
    document.createElement("a");

    a.href = url;

    a.download =
    "registro_parqueadero.json";

    a.click();

    URL.revokeObjectURL(url);
}