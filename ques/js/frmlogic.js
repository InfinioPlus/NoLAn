var frm = null;

(function() {
	var formWrap = document.getElementById( 'fs-form-wrap' );

	[].slice.call( document.querySelectorAll( 'select.cs-select' ) ).forEach( function(el) {	
		new SelectFx( el, {
			stickyPlaceholder: false,
			onChange: function(val){
				document.querySelector('span.cs-placeholder').style.backgroundColor = val;
			}
		});
	} );

	frm = new FForm( formWrap, {
		onReview : function() {
			classie.add( document.body, 'overview' ); // for demo purposes only
		}
	} );
})();