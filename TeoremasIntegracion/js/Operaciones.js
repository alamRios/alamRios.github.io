

function evaluarSen(x,y){
	var z_x = Math.sin(x)*Math.cosh(y);
 	var z_y = Math.cos(x)*Math.sinh(y);
 	return (z_x!=0?z_x.toFixed(2):"") + (z_y!=0?" + i ("+z_y.toFixed(2)+")":"");
}

function evaluarCos(x,y){
	var z_x = Math.cos(x)*Math.cosh(y);
 	var z_y = -Math.sin(x)*Math.sinh(y);
 	return (z_x!=0?z_x.toFixed(2):"") + (z_y!=0?" + i ("+z_y.toFixed(2)+")":"");
}

function evaluarSenH(x,y){
	var z_x = Math.sinh(x)*Math.cos(y);
 	var z_y = Math.cosh(x)*Math.sin(y);
 	return (z_x!=0?z_x.toFixed(2):"") + (z_y!=0?" + i ("+z_y.toFixed(2)+")":"");
}

function evaluarCosH(x,y){
	var z_x = Math.cos(y)*Math.cosh(x);
 	var z_y = Math.sin(y)*Math.sinh(x);
 	return (z_x!=0?z_x.toFixed(2):"") + (z_y!=0?" + i ("+z_y.toFixed(2)+")":"");
}

function evaluarEz(x,y){
	var z_x = Math.pow(Math.E,x) * Math.cos(y);
	var z_y = Math.pow(Math.E,x) * Math.sin(y);
	return (z_x!=0?z_x.toFixed(2):"") + (z_y!=0?" + i ("+z_y.toFixed(2)+")":"");
}

function evaluarZn(x,y){
	var n = (isNaN(parseInt($('#n').val()))?0:parseInt($('#n').val()));
	var z_x = Math.pow(Math.pow(x,2)+Math.pow(y,2),n/2) * Math.cos(n * setArg(setCuadrante(x,y),x,y));
	var z_y = Math.pow(Math.pow(x,2)+Math.pow(y,2),n/2) * Math.sin(n * setArg(setCuadrante(x,y),x,y));
	return (z_x!=0?z_x.toFixed(2):"") + (z_y!=0?" + i("+z_y.toFixed(2)+")":"");
}