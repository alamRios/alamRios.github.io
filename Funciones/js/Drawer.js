// Documento para controlar los dibujos del plano

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