/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/

var precioUno;
var precioDos;
var precioTres;
var promedio;
var resultado;

function Sumar () 
{
    precioUno=document.getElementById("PrecioUno").value;
    precioUno=parseInt(precioUno);
    precioDos=document.getElementById("PrecioDos").value;
    precioDos=parseInt(precioDos);
    precioTres=document.getElementById("PrecioTres").value;
    precioTres=parseInt(precioTres);
     
     resultado= precioUno+precioDos+precioTres;
     
     alert(resultado);


   	
}
function Promedio () 
{
    precioUno=document.getElementById("PrecioUno").value;
    precioUno=parseInt(precioUno);
    precioDos=document.getElementById("PrecioDos").value;
    precioDos=parseInt(precioDos);
    precioTres=document.getElement  ById("PrecioTres").value;
    precioTres=parseInt(precioTres);

    resultado= (precioUno+precioDos+precioTres)/3;
    

    alert(resultado);

	
}
function PrecioFinal () 
{
    precioUno=document.getElementById("PrecioUno").value;
    precioUno=parseInt(precioUno);
    precioDos=document.getElementById("PrecioDos").value;
    precioDos=parseInt(precioDos);
    precioTres=document.getElementById("PrecioTres").value;
    precioTres=parseInt(precioTres);

    resultado= (precioUno+precioDos+precioTres)*0.21+ precioUno+precioDos+precioTres

    alert(resultado);
    
	
}