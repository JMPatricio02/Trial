function getvalue(){
	var a = document.forms["form1"]["text1"].value;
	var b = document.forms["form1"]["text2"].value;
	var c= document.forms["form1"]["textarea1"].value;
	localStorage.setItem("Name",a);
	localStorage.setItem("Barangay",b);
	localStorage.setItem("Prayer",c);
};
