requirejs.config({
	baseUrl: "lib",
	paths: {
		"customDash-js": "../src/js",
		"customDash-widget": "../src/widgets",
		"text": "bower-components/text",
		"jquery": "bower-components/jquery/dist/jquery",
		"mithril":"bower-components/mithril/mithril.min",
		"charts":"../src/widgets/Barchart/barcharts",
		"csv":"../src/widgets/csv/read-csv",
		"highcharts":"bower-components/highcharts-release/"
	},
	shim: {
		"Modernizr": {
			exports: "Modernizr"
		}
	}
});
require([ 'jquery', 'Modernizr', 'charts', 'csv' ], function ( $, Modernizr, barcharts, csv ) {
	 //barcharts.initialize();
	 csv.initialize();
//	jQuery(document).ready(function(){
//		//m.module(document, app);
//		//m.render(document.getElementById("outputTable"), m(".container"));
//		//console.log('jQuery version: *-------------------------*'); // 1.9.0
//	});
	
 
});
