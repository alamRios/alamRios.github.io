// Documento con funciones hiperbolicas

/*
	Usando como funciones básicas
		sinh(z) = sinh(x)cos(y) + icosh(x)sin(y)
		cosh(z) = cos(y)cosh(x) + isinh(x)sin(y)
*/

 // sinh(z) = sinh(x)cos(y) + icosh(x)sin(y)
 function senh(x,y,planoComplejo,Escala){
 	var z_x = Math.sinh(x)*Math.cos(y);
 	var z_y = Math.cosh(x)*Math.sin(y);

 	Czn_x = 250+escalar(Escala,z_x);
	Czn_y = 250-escalar(Escala,z_y);

	planoComplejo.strokeStyle = '#7c0593';
	trazarComplejo(planoComplejo,Czn_x,Czn_y);
	insertIntoTable('<a style="color:#7c0593;">senh(z)</a>',z_x,z_y);
 }

 //cosh(z) = cos(x)cosh(y) - isen(x)senh(y)
 function cosh(x,y,planoComplejo,Escala){
 	var z_x = Math.cos(y)*Math.cosh(x);
 	var z_y = Math.sin(y)*Math.sinh(x);

 	Czn_x = 250+escalar(Escala,z_x);
	Czn_y = 250-escalar(Escala,z_y);

	planoComplejo.strokeStyle = '#926305';
	trazarComplejo(planoComplejo,Czn_x,Czn_y);
	insertIntoTable('<a style="color:#926305;">cosh(z)</a>',z_x,z_y);
 }

 //tgh(z) = senh(z)/cosh(z)
 	// sinh(z) = sinh(x)cos(y) + icosh(x)sin(y)
	// cosh(z) = cos(y)cosh(x) + isinh(x)sin(y)
 function tgh(x,y,planoComplejo,Escala){
 	// sinh(z)
 	var a = Math.sinh(x)*Math.cos(y);
 	var b = Math.cosh(x)*Math.sin(y);

 	// cosh(z)
 	var c = Math.cos(y)*Math.cosh(x);
 	var d = Math.sin(y)*Math.sinh(x);

 	var divisor = Math.pow(c,2) + Math.pow(d,2);

 	// (a + ib) / (c + id) = (ac+bd)/(c^2 + d^2) + i(bc - ad)/(c^2 + d^2)
 	var z_x = (a*c + b*d)/divisor;
 	var z_y = (b*c - a*d)/divisor;

 	Czn_x = 250+escalar(Escala,z_x);
	Czn_y = 250-escalar(Escala,z_y);

	planoComplejo.strokeStyle = '#059164';
	trazarComplejo(planoComplejo,Czn_x,Czn_y);
	insertIntoTable('<a style="color:#059164;">tgh(z)</a>',z_x,z_y);
 }

 //ctgh(z) = 1/tgh(z) = senh(z)/cosh(z)
 	// sinh(z) = sinh(x)cos(y) + icosh(x)sin(y)
	// cosh(z) = cos(y)cosh(x) + isinh(x)sin(y)
 function ctgh(x,y,planoComplejo,Escala){
 	// cosh(z)
 	var a = Math.cos(y)*Math.cosh(x);
 	var b = Math.sin(y)*Math.sinh(x);

 	// sinh(z)
 	var c = Math.sinh(x)*Math.cos(y);
 	var d = Math.cosh(x)*Math.sin(y);

 	var divisor = Math.pow(c,2) + Math.pow(d,2);

 	// (a + ib) / (c + id) = (ac+bd)/(c^2 + d^2) + i(bc - ad)/(c^2 + d^2)
 	var z_x = (a*c + b*d)/divisor;
 	var z_y = (b*c - a*d)/divisor;

 	Czn_x = 250+escalar(Escala,z_x);
	Czn_y = 250-escalar(Escala,z_y);

	planoComplejo.strokeStyle = '#b2a57b';
	trazarComplejo(planoComplejo,Czn_x,Czn_y);
	insertIntoTable('<a style="color:#b2a57b;">ctgh(z)</a>',z_x,z_y);
 }

 //csch(z) = 1/senh(z)
 	// sinh(z) = sinh(x)cos(y) + icosh(x)sin(y)
 function csch(x,y,planoComplejo,Escala){
 	// a = 1 
 	// b = 0

 	// sinh(z)
 	var c = Math.sinh(x)*Math.cos(y);
 	var d = Math.cosh(x)*Math.sin(y);

 	var divisor = Math.pow(c,2) + Math.pow(d,2);

 	// (1 + i0) / (c + id) = (c)/(c^2 + d^2) - i(d)/(c^2 + d^2)
 	var z_x = (c)/divisor;
 	var z_y = (-d)/divisor;

 	Czn_x = 250+escalar(Escala,z_x);
	Czn_y = 250-escalar(Escala,z_y);

	planoComplejo.strokeStyle = '#05918c';
	trazarComplejo(planoComplejo,Czn_x,Czn_y);
	insertIntoTable('<a style="color:#05918c;">csch(z)</a>',z_x,z_y);
 }
 
 //sech(z) = 1/cosh(z)
 	// cosh(z) = cos(y)cosh(x) + isinh(x)sin(y)
 function sech(x,y,planoComplejo,Escala){
 	// a = 1 
 	// b = 0

 	// cosh(z)
 	var c = Math.cos(y)*Math.cosh(x);
 	var d = Math.sin(y)*Math.sinh(x);

 	var divisor = Math.pow(c,2) + Math.pow(d,2);

 	// (1 + i0) / (c + id) = (c)/(c^2 + d^2) - i(d)/(c^2 + d^2)
 	var z_x = (c)/divisor;
 	var z_y = (-d)/divisor;

 	Czn_x = 250+escalar(Escala,z_x);
	Czn_y = 250-escalar(Escala,z_y);

	planoComplejo.strokeStyle = '#910538';
	trazarComplejo(planoComplejo,Czn_x,Czn_y);
	insertIntoTable('<a style="color:#910538;">sech(z)</a>',z_x,z_y);
 }