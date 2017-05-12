// Documento con el análisis matemático

function evaluarProblema(x,y,r,funcion){
	rZ = Math.sqrt(Math.pow(x,2) + Math.pow(y,2));
	if(rZ<r)// Esto significaria que el punto pertenece a la circunferencia
		return segundoTeorema(x,y,r,funcion);
	else if(rZ>r)
		return primerTeorema(x,y,r);// Si el punto no pertenece a la circuinferencia
	else
		return casoEspecial();
}

function z0eGama(x,y,r){
	rZ = Math.sqrt(Math.pow(x,2) + Math.pow(y,2));
	if(rZ<=r) // Si el punto está dentro la circunferencia
		return true;
	return false;
}

function segundoTeorema(x,y,r,funcion){
	console.log(funcion);
	switch(funcion){
		case 'sen(z)':
			return evaluarSen(x,y);
			break;
		case 'cos(z)':
			return evaluarCos(x,y);
			break;
		case 'senh(z)':
			return evaluarSenH(x,y);
			break;
		case 'cosh(z)':
			return evaluarCosH(x,y);
			break;
		case 'e^z':
			return evaluarEz(x,y);
			break;
		case 'z^n':
			return evaluarZn(x,y);
			break;
	}
}

function primerTeorema(x,y,r){
	return "0";
}

function casoEspecial(){
	return "La integral no puede ser resuleta por estos teoremas.";
}

function explicarResultado(x,y,r){
	rZ = Math.sqrt(Math.pow(x,2) + Math.pow(y,2));
	if(rZ<r)// Esto significaria que el punto pertenece a la circunferencia
		return explicacionSegundoTeorema();
	else if(rZ>r)
		return explicacionPrimerTeorema();// Si el punto no pertenece a la circuinferencia
	else
		return explicacionCasoEspecial();
}

function explicacionSegundoTeorema(){
	return "Dado que la función es derivable en todo punto y el punto z<sub>0</sub> pertenece al interior de la circunferencia, la integral vale 2&pi;i * f(z<sub>0</sub>)";
}

function explicacionPrimerTeorema(){
	return "La integral vale cero porque la función es derivable en todo punto, excepto cuando el denominador sea cero, y dado que el punto z<sub>0</sub> está fuera de la circunferencia, la integral vale cero.";
}

function explicacionCasoEspecial(){
	return "La integral no puede ser resuelta porque el punto z<sub>0</sub> se encuentra sobre la circunferencia.";
}