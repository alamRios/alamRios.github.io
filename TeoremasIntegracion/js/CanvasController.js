// Documento principal de la aplicación

// Función que realiza el dibujo
function graficarComplejo(){
	Modals();
	plano=document.getElementById("PlanoComplejo"); //Asigno a una variable el elemento del html que voy a usar
	planoComplejo=plano.getContext("2d"); //Alisto el canvas para que funcione
	plano.width = plano.width;
	var scale = 1;
	var originx = 250;
	var originy = 250;
	planoComplejo.lineWidth=1; //Defino el ancho de la linea en pixeles
	planoComplejo.strokeStyle = '#000'; //Defino el color en hexagesimal
 	

 	$("#tblCalculos").empty();

 	trazarEjes(planoComplejo);

 	// Obtención de los valores del numero complejo ingresado
 		//Coordenadas para Canvas
		var C_x = (isNaN(parseFloat($('#x').val()))?0:parseFloat($('#x').val()));
		var C_y = (isNaN(parseFloat($('#y').val()))?0:parseFloat($('#y').val()));
		var r = (isNaN(parseFloat($('#r').val()))?0:parseFloat($('#r').val()));
		//Coordenadas plano
		var x  = (isNaN(parseFloat($('#x').val()))?0:parseFloat($('#x').val()));
		var y = (isNaN(parseFloat($('#y').val()))?0:parseFloat($('#y').val()));

		var f = $('#funcion option:selected').text();

	var Escala = setEscala(C_x,C_y,r);
	C_y = 250-escalar(Escala,C_y);
	C_x = 250+escalar(Escala,C_x);

 	trazarComplejo(planoComplejo,C_x,C_y);
 	trazarCircunferencia(planoComplejo,escalar(Escala,r));
 	insertIntoTable(f,x,y,r);
 }

 /*
	-> Config.js Tiene los procedimientos técnicos
	-> Drawer.js Tiene las configuraciones de Canvas
	-> Teorema.js Tiene las funciones y procedimientos matemáticos

 */

