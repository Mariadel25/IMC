document.getElementById('imcForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var weight = parseFloat(document.getElementById('weight').value);
    var height = parseFloat(document.getElementById('height').value);
    
    if (height > 0) {
        var imc = weight / (height * height);
        var category = '';
        
        if (imc < 18.5) {
            category = 'Bajo peso';
        } else if (imc < 24.9) {
            category = 'Normal';
        } else if (imc < 29.9) {
            category = 'Sobrepeso';
        } else {
            category = 'Obesidad';
        }
        
        document.getElementById('result').textContent = `Tu IMC es ${imc.toFixed(2)} (${category}).`;
    } else {
        document.getElementById('result').textContent = 'Por favor, ingresa una altura válida.';
    }
});
