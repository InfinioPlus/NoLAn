$(document).ready(function(){
	$( "#click" ).click(function() {
		$("<input type=\"text\" id=\"i_am\" >").appendTo(".input");
		var bla = $('#i_am').val();
		$('#i_am').val('bla');
		alert(bla);
		$( "<li><label class=\"fs-field-label fs-anim-upper\" for=\"q1\">"+bla+"</label><input class=\"fs-anim-lower\" id=\"q1\" name=\"q1\" type=\"text\" required/></li>" ).appendTo( ".fs-fields" );
		frm.invoker();
	});
});