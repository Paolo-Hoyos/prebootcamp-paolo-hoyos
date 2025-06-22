function validar() {

    var edadInput = document.getElementById("edad");
    var resultado = document.getElementById("resultado");

    var edad = parseInt(edadInput.value);

    if (isNaN(edad)) {
        resultado.textContent = "Por favor, ingresa una edad válida.";
        return;
    }

    if (edad >= 18) {
        resultado.textContent = "Sí, puedes conducir en Perú.";
    } else {
        resultado.textContent = "No puedes conducir en Perú.";
    }
};
