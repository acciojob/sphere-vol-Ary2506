function volume_sphere() {
    let r = parseFloat(document.getElementById("radius").value);
    let volumeField = document.getElementById("volume");

    if (isNaN(r) || r < 0) {
        volumeField.value = "NaN";
        return false;
    }

    let volume = (4/3) * Math.PI * Math.pow(r, 3);
    volumeField.value = volume.toFixed(4);

    return false;
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;