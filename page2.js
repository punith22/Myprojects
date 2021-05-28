function listdisplay(){
	console.log("hello");
	var selected = document.getElementById("myselect").value;
	console.log(selected);
if(selected=='' || selected==null){
		alert("please select the City");
		document.getElementById("myselect").style.border="2px solid red";
		
	}
	switch(selected){
		case ("bangalore"):
			document.getElementById("contentlist").style.visibility="visible";
			document.getElementById("contentlist1").style.visibility="hidden";
			break;
		
		case ("Tumkur"):
			document.getElementById("contentlist1").style.visibility="visible";
			document.getElementById("contentlist").style.visibility="hidden";
			break;
			
		case ("Hassan"):
		document.getElementById("contentlist2").style.visibility="visible";
		document.getElementById("contentlist1").style.visibility="hidden";
		document.getElementById("contentlist3").style.visibility="hidden";
		document.getElementById("contentlist4").style.visibility="hidden";
		document.getElementById("contentlist").style.visibility="hidden";
		break;
		
		case("Mysore"):
			document.getElementById("contentlist3").style.visibility="visible";
		document.getElementById("contentlist1").style.visibility="hidden";
		document.getElementById("contentlist2").style.visibility="hidden";
		document.getElementById("contentlist4").style.visibility="hidden";
		document.getElementById("contentlist").style.visibility="hidden";
			break;
			
		case("Mandya"):
			document.getElementById("contentlist4").style.visibility="visible";
		document.getElementById("contentlist1").style.visibility="hidden";
		document.getElementById("contentlist2").style.visibility="hidden";
		document.getElementById("contentlist3").style.visibility="hidden";
		document.getElementById("contentlist").style.visibility="hidden";
			break;	
	}
	
	
	
}