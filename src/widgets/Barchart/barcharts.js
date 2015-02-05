//var app = {};
//app.App = function(data){
//    this.plotCfg = {
//        chart: {
//            renderTo: "plot"
//        },
//        series: [{
//            name: 'USD to EUR',
//            data: usdeur
//        }]
//    };
//};
//app.controller = function(){
//    this.apk = new app.App();
//    this.cfg = this.apk.plotCfg;
//};
//app.plotter = function(ctrl) {
//    return function(elem,isin) {
//        if(!isin) {
//          m.startComputation();
//          var chart = Highcharts.StockChart(ctrl.cfg);
//          m.endComputation();
//        }
//    };
//};
//app.view = function(ctrl) {
//    return  m("html", [ m("body", [
//        m("#plot[style=height:400px]", {config: app.plotter(ctrl)}),
//        //when I set breakpoint here I can see plot for a moment. It disappears when I resume normal script flow
//        m("p", "some text after plot"),
//        ]),
//    ])
//};


//if ( typeof define !== 'function' ) {
//    var define = require( 'amdefine' )( module );
//}

define([ 'jquery', 'highcharts/highcharts', 'highcharts/highcharts-more', 'highcharts/modules/solid-gauge.src' ], function() {
var initialize = function () {
	console.log('jQuery version: *-------------------------*'); // 1.9.0

	$('#container-speed').highcharts({
        title: {
            text: 'Monthly Average Temperature',
            x: -20 //center
        },
        subtitle: {
            text: 'Source: WorldClimate.com',
            x: -20
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        yAxis: {
            title: {
                text: 'Temperature (°C)'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: '°C'
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: 'Tokyo',
            data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
        }, {
            name: 'New York',
            data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
        }, {
            name: 'Berlin',
            data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
        }, {
            name: 'London',
            data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
        }]
    });
//	$(document).ready(function () {
//
////		m.render(document.getElementById("outputTable"), m(".container"));
////		console.log('$.widget is defined? ' + Boolean($.widget));
////		console.log('jQuery.widget is defined? ' + Boolean(jQuery.widget));
//	});
};

return {
	initialize: initialize
};

});
