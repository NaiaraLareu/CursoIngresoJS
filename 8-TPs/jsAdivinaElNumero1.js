/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var contadorIntentos=0
var numeroUsuario;


function comenzar()
{
  numeroSecreto=Math.floor(Math.random()*(101-1)+1);
  console.log(numeroSecreto);

	//Genero el número RANDOM entre 1 y 100
	 
		//alert(numeroSecreto );
	

}

function verificar()
{
	contadorIntentos=contadorIntentos+1;
  numeroUsuario=document.getElementById("numero").value;

  if(numeroSecreto==numeroUsuario)
	{
     alert("gano en" +contador+"intentos");
     contador=0

  }
  else if(numeroUsuario<numeroSecreto)
  
   {
    alert("falta");

   }
   else  
   {
    alert("paso");
}


}

