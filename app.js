requirejs.config({
	baseUrl: "lib",
	paths: {
		"customDash-js": "../src/js",
		"jquery": "bower-components/jquery/dist/jquery",
		"mithril":"bower-components/mithril/mithril.min"
	},
	shim: {
		"Modernizr": {
			exports: "Modernizr"
		}
	}
});
require([ 'jquery', 'customDash-js/read-csv', 'mithril' ], 
	function ( $, csv, mithril ) {
	
	jQuery(document).ready(function(){
		m.render(document.getElementById("outputTable"), m(".container"));
		console.log('jQuery version: *-------------------------*'); // 1.9.0
	});
	
 
});