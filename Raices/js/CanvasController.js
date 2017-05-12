// Documento para controlar los dibujos del plano

// Función que realiza el dibujo
function graficarComplejo(){
	Modals();
	plano=document.getElementById("PlanoComplejo"); //Asigno a una variable el elemento del html que voy a usar
	planoComplejo=plano.getContext("2d"); //Alisto el canvas para que funcione
	plano.width = plano.width;
	planoComplejo.lineWidth=1; //Defino el ancho de la linea en pixeles
	planoComplejo.strokeStyle = '#000'; //Defino el color en hexagesimal
 		
 	$("#tblCalculos").empty();

 	trazarEjes(planoComplejo);

 	// Obtención de los valores del numero complejo ingresado
 		//Coordenadas para Canvas
		var C_x = (isNaN(parseFloat($('#x').val()))?0:parseFloat($('#x').val()));
		var C_y = (parseFloat($('#y').val()));
		//Coordenadas plano
		var x  = (isNaN(parseFloat($('#x').val()))?0:parseFloat($('#x').val()));
		var y = (parseFloat($('#y').val()));

	var Escala = setEscala(C_x,C_y);

	C_y = 250-escalar(Escala,C_y);
	C_x = 250+escalar(Escala,C_x);


	planoComplejo.strokeStyle = '#f44242'; //Defino el color en hexagesimal
 	trazarComplejo(planoComplejo,C_x,C_y);

	planoComplejo.strokeStyle = '#4286f4'; //Defino el color en hexagesimal
 	calcularRaices(Escala,planoComplejo,x,y);
 }

 function Modals(){
	$('#ModalDatos').modal('toggle');

	$("#ModalPlano").draggable({
    handle: ".modal-header"
	}); 
	$('#ModalPlano').modal('toggle');
	$("#ModalCalculos").draggable({
	    handle: ".modal-header"
	}); 
	
 }

 function trazarEjes(planoComplejo){
//EJEX
	planoComplejo.beginPath(); // Pongo el lápiz
	planoComplejo.moveTo(250,0); // lo ubicó para iniciar el dibujo
	planoComplejo.lineTo(250,500); // trazo la linea hasta este punto
	planoComplejo.stroke(); // levanto el lápiz
	planoComplejo.closePath(); // me alisto para realizar otra parte del dibujo
//EJE Y
	planoComplejo.beginPath(); // Pongo el lápiz
	planoComplejo.moveTo(0,250);// lo ubicó para iniciar el dibujo
	planoComplejo.lineTo(500,250);// trazo la linea hasta este punto
	planoComplejo.stroke();// levanto el lápiz
	planoComplejo.closePath();// me alisto para realizar otra parte del dibujo
 }

 function setEscala(C_x,C_y){
 	if(C_x < 0)
 		C_x = C_x * -1;

 	if(C_y < 0)
 		C_y = C_y * -1;

 	if(C_x >= C_y)
 		Escala = 250/C_x;
 	else
 		Escala = 250/C_y;

	return Escala;
 }

 function escalar(Escala,Coor){
 	Coor = Coor * Escala;
 	return Coor;
 }

 function trazarComplejo(planoComplejo,C_x,C_y){
	planoComplejo.beginPath(); // Pongo el lápiz
	
	planoComplejo.moveTo(250,250); // lo ubicó para iniciar el dibujo
	planoComplejo.lineTo(C_x,C_y); // trazo la linea hasta este punto

	planoComplejo.moveTo(C_x,C_y); // lo ubicó para iniciar el dibujo
	planoComplejo.lineTo(C_x > 250 ? C_x - C_x*0.025 : C_x + C_x*0.02,C_y); // trazo la linea hasta este punto

	planoComplejo.moveTo(C_x,C_y); // lo ubicó para iniciar el dibujo
	planoComplejo.lineTo(C_x,C_y > 250 ? C_y - C_y*0.03 : C_y + C_y*0.03); // trazo la linea hasta este punto

	planoComplejo.stroke();// levanto el lápiz
	planoComplejo.closePath();// me alisto para realizar otra parte del dibujo
 }

 // Para el calculo de raíces se utiliza la ecuación de Moivre
 function calcularRaices(Escala,planoComplejo,C_x,C_y){
 	// Obtenemos antes la forma polar de nuestro número
 	var r = Math.pow(C_x,2) + Math.pow(C_y,2);
 		r = Math.pow(r,1/2);
 	var arg = setArg(setCuadrante(C_x,C_y),C_x,C_y);

 	var n = (isNaN(parseInt($('#n').val()))?0:parseInt($('#n').val()));
 	var zn_r = parseFloat(Math.pow(r,(1/n)));
 	var zn_x;
 	var zn_y;

 	var Czn_x;
 	var Czn_y;


 	for (var i = 0; i < n; i++) {
 		// z_k = (r^(1/n))*e^[i(arg + 2PIk)/n]
 		// z_k = (r^(1/n)) * cos((arg + 2PIk)/n) + i (r^(1/n)) * sen((arg + 2PIk)/n)
 		zn_x = zn_r * Math.cos((arg*(Math.PI/180) + (2*Math.PI*i))/n);
 		zn_y = zn_r * Math.sin((arg*(Math.PI/180) + (2*Math.PI*i))/n);

 		$("#tblCalculos").append( "<tr><td>Z_"+i+"</td><td>"+zn_x.toFixed(3)+ (zn_y>0 ?"+":"") + zn_y.toFixed(3) +"<b>i</b> </td></tr>");

 			Czn_x = 250+escalar(Escala,zn_x);
			Czn_y = 250-escalar(Escala,zn_y);
 		trazarComplejo(planoComplejo,Czn_x,Czn_y);
 	}
 }

 function setCuadrante(x,y){
 	var cuadr; 
 	if(x>0 && y>0)
 		cuadr = 1;
 	else if(x<0 && y>0)
 		cuadr = 2;
 	else if(x<0 && y<0)
 		cuadr = 3;
 	else if(x>0 && y<0)
 		cuadr = 4;
 	else if(x==0){
 		cuadr = 5;
 	}else if(y==0){
 		cuadr = 6;
 	}

 	return cuadr;
 }

 function setArg(cuadrante,x,y){
 	var arg; 
 	switch(cuadrante){
 		case 1:
 			arg = Math.atan(y/x);
 			break;
 		case 2: 
 			arg = 90 + Math.atan(y/(x*-1));
 			break;
 		case 3: 
 			arg = 180 + Math.atan((y*-1)/x);
 			break;
 		case 4: 
 			arg = 270 + Math.atan((y*-1)/(x*-1));
 			break;
 		case 5: 
 			arg = 0;
 			break;
 		case 6: 
 			arg = 90;
 			break;	
 	}

 	return arg;
 }
