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
		//Coordenadas plano
		var x  = (isNaN(parseFloat($('#x').val()))?0:parseFloat($('#x').val()));
		var y = (isNaN(parseFloat($('#y').val()))?0:parseFloat($('#y').val()));

	var Escala = setEscala(C_x,C_y);

	C_y = 250-escalar(Escala,C_y);
	C_x = 250+escalar(Escala,C_x);


	planoComplejo.strokeStyle = '#f44242';
 	trazarComplejo(planoComplejo,C_x,C_y);

 	// Definición para las funciones del número complejo
 	calcularFunciones(Escala,planoComplejo,x,y);
 }

 // Para el cálculo de las funciones se utilizan las fórmulas
 /*
	Necesarias para graficar los puntos como (x,y)
		sen(z) = sen(x)cosh(y) + icos(x)senh(y)
		cos(z) = cos(x)cosh(y) - isen(x)senh(y)
 */
 function calcularFunciones(Escala,planoComplejo,x,y){
 	// *************************  Filtrar las funciones que se van a generar  *************************
 	// Trigonometricas
 	if($("#seno").is(":checked")) sen(x,y,planoComplejo,Escala);
 	if($("#coseno").is(":checked")) cos(x,y,planoComplejo,Escala);
 	if($("#tg").is(":checked")) tg(x,y,planoComplejo,Escala);
 	if($("#ctg").is(":checked")) ctg(x,y,planoComplejo,Escala);
 	if($("#csc").is(":checked")) csc(x,y,planoComplejo,Escala);
 	if($("#sec").is(":checked")) sec(x,y,planoComplejo,Escala);
 	// Hiperbolicas
 	planoComplejo.strokeStyle = '#b042f4';
 	if($("#senoh").is(":checked")) senh(x,y,planoComplejo,Escala);
 	if($("#cosenoh").is(":checked")) cosh(x,y,planoComplejo,Escala);
 	if($("#tgh").is(":checked")) tgh(x,y,planoComplejo,Escala);
 	if($("#ctgh").is(":checked")) ctgh(x,y,planoComplejo,Escala);
 	if($("#csch").is(":checked")) csch(x,y,planoComplejo,Escala);
 	if($("#sech").is(":checked")) sech(x,y,planoComplejo,Escala);
 }