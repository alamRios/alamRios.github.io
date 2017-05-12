// Documento con funciones trigonométricas

 //sen(z) = sen(x)cosh(y) + icos(x)senh(y)
 function sen(x,y,planoComplejo,Escala){
 	var z_x = Math.sin(x)*Math.cosh(y);
 	var z_y = Math.cos(x)*Math.sinh(y);

 	Czn_x = 250+escalar(Escala,z_x);
	Czn_y = 250-escalar(Escala,z_y);

 	planoComplejo.strokeStyle = '#4286f4';
	trazarComplejo(planoComplejo,Czn_x,Czn_y);
	insertIntoTable('<a style="color:#4286f4;">sen(z)</a>',z_x,z_y);
 }

 //cos(z) = cos(x)cosh(y) - isen(x)senh(y)
 function cos(x,y,planoComplejo,Escala){
 	var z_x = Math.cos(x)*Math.cosh(y);
 	var z_y = -Math.sin(x)*Math.sinh(y);

 	Czn_x = 250+escalar(Escala,z_x);
	Czn_y = 250-escalar(Escala,z_y);

	planoComplejo.strokeStyle = '#428604';
	trazarComplejo(planoComplejo,Czn_x,Czn_y);
	insertIntoTable('<a style="color:#428604;">cos(z)</a>',z_x,z_y);
 }

 //tg(z) = sen(z)/cos(z)
 	//sen(z) = sen(x)cosh(y) + icos(x)senh(y)
 	//cos(z) = cos(x)cosh(y) - isen(x)senh(y)
 function tg(x,y,planoComplejo,Escala){
 	// sin(z)
 	var a = Math.sin(x)*Math.cosh(y);
 	var b = Math.cos(x)*Math.sinh(y);

 	// cos(z)
 	var c = Math.cos(x)*Math.cosh(y);
 	var d = -Math.sin(x)*Math.sinh(y);

 	var divisor = Math.pow(c,2) + Math.pow(d,2);

 	// (a + ib) / (c + id) = (ac+bd)/(c^2 + d^2) + i(bc - ad)/(c^2 + d^2)
 	var z_x = (a*c + b*d)/divisor;
 	var z_y = (b*c - a*d)/divisor;

 	Czn_x = 250+escalar(Escala,z_x);
	Czn_y = 250-escalar(Escala,z_y);

	planoComplejo.strokeStyle = '#000';
	trazarComplejo(planoComplejo,Czn_x,Czn_y);
	insertIntoTable('<a style="color:#000;">tg(z)</a>',z_x,z_y);
 }

  //ctg(z) = 1/tg(z) = cos(z)/sen(z)
 	//sen(z) = sen(x)cosh(y) + icos(x)senh(y)
 	//cos(z) = cos(x)cosh(y) - isen(x)senh(y)
 function ctg(x,y,planoComplejo,Escala){
 	// cos(z)
 	var a = Math.cos(x)*Math.cosh(y);
 	var b = -Math.sin(x)*Math.sinh(y);


 	// sin(z)
 	var c = Math.sin(x)*Math.cosh(y);
 	var d = Math.cos(x)*Math.sinh(y);

 	var divisor = Math.pow(c,2) + Math.pow(d,2);

 	// (a + ib) / (c + id) = (ac+bd)/(c^2 + d^2) + i(bc - ad)/(c^2 + d^2)
 	var z_x = (a*c + b*d)/divisor;
 	var z_y = (b*c - a*d)/divisor;

 	Czn_x = 250+escalar(Escala,z_x);
	Czn_y = 250-escalar(Escala,z_y);

	planoComplejo.strokeStyle = '#428';
	trazarComplejo(planoComplejo,Czn_x,Czn_y);
	insertIntoTable('<a style="color:#428;">ctg(z)</a>',z_x,z_y);
 }

 //csc(z) = 1/sen(z)
 	//sen(z) = sen(x)cosh(y) + icos(x)senh(y)
 function csc(x,y,planoComplejo,Escala){
 	// a = 1 
 	// b = 0

 	// sin(z)
 	var c = Math.sin(x)*Math.cosh(y);
 	var d = Math.cos(x)*Math.sinh(y);

 	var divisor = Math.pow(c,2) + Math.pow(d,2);

 	// (1 + i0) / (c + id) = (c)/(c^2 + d^2) - i(d)/(c^2 + d^2)
 	var z_x = (c)/divisor;
 	var z_y = (-d)/divisor;

 	Czn_x = 250+escalar(Escala,z_x);
	Czn_y = 250-escalar(Escala,z_y);

	planoComplejo.strokeStyle = '#f4b642';
	trazarComplejo(planoComplejo,Czn_x,Czn_y);
	insertIntoTable('<a style="color:#f4b642;">csc(z)</a>',z_x,z_y);
 }
 
 //sec(z) = 1/cos(z)
 	//cos(z) = cos(x)cosh(y) - isen(x)senh(y)
 function sec(x,y,planoComplejo,Escala){
 	// a = 1 
 	// b = 0

 	// cos(z)
 	var c = Math.cos(x)*Math.cosh(y);
 	var d = -Math.sin(x)*Math.sinh(y);

 	var divisor = Math.pow(c,2) + Math.pow(d,2);

 	// (1 + i0) / (c + id) = (c)/(c^2 + d^2) - i(d)/(c^2 + d^2)
 	var z_x = (c)/divisor;
 	var z_y = (-d)/divisor;

 	Czn_x = 250+escalar(Escala,z_x);
	Czn_y = 250-escalar(Escala,z_y);

	planoComplejo.strokeStyle = '#f441cd';
	trazarComplejo(planoComplejo,Czn_x,Czn_y);
	insertIntoTable('<a style="color:#f441cd;">sec(z)</a>',z_x,z_y);
 }