function onload = function(){
	
var xmlhttp;
if(window.XMLHttpRequest){
	xmlhttp = new XMLHttpRequest();
}else{
	xmlhttp = new ActiveXObject("Microsoft.XMLHTTP")
}

xmlhttp.onreadystatechange = function(){
	if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
		var xp = xmlhttp.response;
   		var data = JSON.parse(xp);
   		
   		
	}
}

xmlhttp.open("get","http://192.168.0.0.1:8523/")

xmlhttp.send();
}