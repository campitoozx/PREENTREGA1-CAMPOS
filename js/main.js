function verificarEdad() {
    const edad = prompt("Por favor, ingrese su edad:");
    if (edad !== null && parseInt(edad) >= 18) {
        document.getElementById('content').style.display = 'block';
    } else {
        alert("Lo siento, debes ser mayor de edad para acceder a esta herramienta.");
        document.body.innerHTML = "<h1>Acceso Denegado</h1>";
    }
}
function calcularRed() {

    const pcs = parseInt(document.getElementById('pcs').value) || 0;
    const servers = parseInt(document.getElementById('servers').value) || 0;
    const phones = parseInt(document.getElementById('phones').value) || 0;
    const wifi = parseInt(document.getElementById('wifi').value) || 0;


    const pcsPerSwitch = 24; 
    const maxWifiDevicesPerAP = 50; 


    const totalDevices = pcs + servers;
    const switches = Math.ceil(totalDevices / pcsPerSwitch);


    const accessPoints = Math.ceil(wifi / maxWifiDevicesPerAP);


    const routers = 1;


    const resultDiv = document.getElementById('result');
    console.log('Recomendación de Red:');
    console.log(`Cantidad de Switches: ${switches}`);
    console.log(`Cantidad de Puntos de Acceso WiFi: ${accessPoints}`);
    console.log(`Cantidad de Routers: ${routers}`);
    console.log('Cables: Considerar cables  cat6 para conectar PCs y servidores a los switches y switches a los routers.');
}