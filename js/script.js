jQuery(document).ready(function($) {
	/*Verification de formulaire lors de la saisie*/
	var email=$('#email');
	var nom=$('#nom');
	var message=$('#message');
	var regexEmail= /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/; 
	nom.blur(function(){
		if(nom.val().length < 4){
			$('<p>Votre nom doit comporter plus de 3 caractères</p>').appendTo('.erreurNom');
		}
	});
	message.blur(function(){
		if(message.val().length < 6){
			$('<p>Votre message doit comporter au moins 6 caractères</p>').appendTo('.erreurMessage');
		}
	});
	email.blur(function(){
		if(!regexEmail.test(email.val())){
			$('<p>Votre email n\'est pas valide</p>').appendTo('.erreurEmail');
		}
	});
	/*Gestion du menu mobile*/
	$('.toggle-menu').click(function(){
	$('body').toggleClass('open-menu');
	});
});