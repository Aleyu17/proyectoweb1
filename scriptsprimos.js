document.addEventListener("DOMContentLoaded", () => {
    const btnEncrypt = document.getElementById('btn-encrypt');
    if (btnEncrypt) {
        btnEncrypt.addEventListener('click', runEncryption);
    }
});

function runEncryption() {
    const textInput = document.getElementById('input-secret');
    const consoleOut = document.getElementById('crypto-console');
    
    if (!textInput || !consoleOut) return;
    
    const text = textInput.value;

    if (!text) {
        consoleOut.style.display = 'block';
        consoleOut.innerText = 'Por favor, introduce un texto para aplicar el algoritmo.';
        return;
    }

    // Claves primas p y q. El producto es n = 3233
    const p = 61;
    const q = 53;
    const n = p * q; 

    let encryptedData = [];
    for (let i = 0; i < text.length; i++) {
        let code = text.charCodeAt(i);
        // Operación matemática basada en aritmética modular con dispersión prima
        let encryptedValue = (code * n) % 104729; 
        encryptedData.push(encryptedValue.toString(16).toUpperCase());
    }

    consoleOut.style.display = 'block';
    consoleOut.innerHTML = `
        <strong>Resultado del Cifrado por Primos:</strong><br>
        <span style="color:#a7f3d0">${encryptedData.join('-')}</span><br><br>
        <small style="color:#64748b">Estatus: Protegido por clave de producto primo (N=${n})</small>
    `;
}