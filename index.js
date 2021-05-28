function validateForm(){
	var username = document.getElementById("uname").value;
	var psw = document.getElementById("psw").value;
	
	
	if(username != "punith" || psw != "punith@22"){
		alert("username or password is incorrect");
		document.getElementById("uname").style.border="2px solid red";
		return false;
		
	}
}