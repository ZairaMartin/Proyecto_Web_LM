const APIKEY = null;
function showLocation(position) {
    const { latitude, longitude } = position.coords;
    const latlongvalue = `${latitude},${longitude}`;
    alert(`Tu geolocalización es ${latlongvalue}`);
}
function errorHandler(err) {
    if (err.code == 1) {
        alert("Error: ¡Acceso denegado!");
    } else if (err.code == 2) {
        alert("Error: La ubucación no está disponible");
    }
}
function getLocation() {
    if (navigator.geolocation) {
        // timeout at 60000 milliseconds (60 seconds)
        var options = { timeout: 60000 };
        navigator.geolocation.getCurrentPosition
            (showLocation, errorHandler, options);
    } else {
        alert("Sorry, browser does not support geolocation!");
    }
}