// Documento con procedimientos técnicos

 function insertIntoTable(concepto,zn_x,zn_y){
 	$("#tblCalculos").append( "<tr><td>"+concepto+"</td><td>"+zn_x.toFixed(3)+ (zn_y>0 ?"+":"") + zn_y.toFixed(3) +"<b>i</b> </td></tr>");
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
