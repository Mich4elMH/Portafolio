
var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
console.log(lienzo);
dibujarLinea("pink", 10, 300,220, 10);
dibujarLinea("Green", 50, 50,220, 10);
function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle = "red";
    
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
    
}