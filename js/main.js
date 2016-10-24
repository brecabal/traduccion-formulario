function cambioTexto(){
	document.getElementById("form-signin-heading").innerHTML = "Por favor inicia sesión";
	document.getElementById("inputEmail").placeholder = "Correo Electrónico";
	document.getElementById("inputPassword").placeholder = "Contraseña";
	document.getElementsByTagName('span')[0].innerHTML = "Recordar datos";
	document.getElementsByClassName("btn btn-lg btn-primary btn-block submit-btn")[0].innerHTML = "Iniciar Sesión";

}