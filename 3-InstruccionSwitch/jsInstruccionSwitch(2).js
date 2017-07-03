function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;
switch(mesDelAño)
{
 case "Julio":
 case "Agosto":
             alert("abrigate que hace frio");
             break;

 case "Septiembre":
             alert("Ya pasamos el frio, ahora el calor");
             break;

case"Enero":
case"Febrero":
case"Marzo":
case"Abril":
case"Mayo":
case"Junio":
           alert("Falta para el invierno");
        break;


}




}//FIN DE LA FUNCIÓN