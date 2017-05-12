// Documento con procedimientos técnicos
 function insertIntoTable(funcion,z0x,z0y,r){
 	$("#tblCalculos").append( "<tr><td>"+funcion+"</td>"+
 		"<td>"+z0x.toFixed(3) + (z0y>0? " + " + z0y.toFixed(3) +"<b>i</b>" : " " ) + "</td>"+
 		"<td>"+r +"</td>"+
 		"</tr>"+
 		"<tr>"+
 		"<td colspan='3'>"+
 			"<center>"+
		 		"<div class='eq-c'>"+
				"<span class='intsuma'>"+
				"<span class='sum'>&int;</span>"+
				"<span class='lim'>&gamma;</span>"+
				"</span>"+
				"<div class='fraction'>"+
				"<span class='fup'><i>"+funcion+"</i></span>"+
				"<span class='bar'>/</span>"+
				  "<span class='fdn'><i>z</i> - <i>("+z0x.toFixed(2) + (z0y>0? " + " + z0y.toFixed(2) +"<b>i</b>" : '' ) + ")</i></span>"+
				"</div>"+
				"d<i>z</i> = "+
					evaluarProblema(z0x,z0y,r,funcion) +
				"</div>"+
			"</center>"+
		"</td>"+
 		"</tr>"+
 		"<tr>"+
 		"<td colspan='3'>"+
 			"<center> "+
		 		explicarResultado(z0x,z0y,r) +		
		 	"</center>"+
		"</td>"+
 		"</tr>");
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
