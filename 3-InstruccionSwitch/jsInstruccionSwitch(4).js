function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;
switch(mesDelAño)
{
    case"Febrero":
               alert("Tiene 28 dias");
              break;
    case"Enero":
    case"Abril":
    case"Junio":
    case"Septiembre":
    case"Noviembre":
              alert("Tiene 30 dias");
               break;
    defaul:
              alert("Tiene 31 dias"); 
              break;
}
//alert (mesDelAño);
	
	



}//FIN DE LA FUNCIÓN