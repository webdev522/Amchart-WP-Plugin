AmCharts.loadFile( "csv/au_momentum_leading.csv", {}, function( response ) {

  /**
   * Parse CSV
   */
  var data = AmCharts.parseCSV( response, {
    "useColumnNames": true
  });
  
//   console.log(data);

  /**
   * Create the chart
   */
  var chart = AmCharts.makeChart( "multichart", {
    "type": "serial",
    "theme": "light",
    "dataProvider": data,
    "valueAxes": [ {
      "gridColor": "#FFFFFF",
      "gridAlpha": 0.2,
      "dashLength": 0
    } ],
    "gridAboveGraphs": true,
    // "startDuration": 1,
    "graphs": [ {
      "balloonText": "[[category]]: <b>[[value]]</b>",
      "fillAlphas": 0.8,
      "lineAlpha": 0.2,
      "type": "line",
      "valueField": "leading_momentum"
    }],
    "chartCursor": {
      "categoryBalloonEnabled": false,
      "cursorAlpha": 0,
      "zoomable": false
    },
    "categoryField": "country",
    "categoryAxis": {
      "gridPosition": "start",
      "gridAlpha": 0,
      "tickPosition": "start",
      "tickLength": 20
    }
  } );
});