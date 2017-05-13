AmCharts.loadFile( "http://www.macrowonk.com/data/indicators_employment.csv", {}, function( response ) {

  var data = AmCharts.parseCSV( response, {
    "useColumnNames": true,
  });

  var i;
  var year;
  var month;
  var ddate;
  data.pop();

  for (i = 0; i < data.length; i++) {
    fulldate = data[i]["date"].split("/");
    year = fulldate[2];
    month = fulldate[1];
    if (month.length == 1) {
      month = "0" + month;
    }
    ddate = fulldate[0];
    if (ddate.length == 1) {
      ddate = "0" + ddate;
    }
    data[i]["date"] = (year + "-" + month + "-" + ddate);
  }

  var colorts = ["#aa2222", "#2222aa", "#aa22aa", "#aaaa22", "#ff0000", "#00ff00", "#0000ff", "#00ffff"];

  var $CHART$ = AmCharts.makeChart( "$CHART$", {
      "type": "serial",
      "theme": "light",
      "dataProvider": data,
      "dataDateFormat": "YYYY-MM-DD",
      "valueAxes": [{
          "id": "v1",
          "axisAlpha": 0,
          "position": "left",
          "ignoreAxisWidth":true
      }],
      "graphs": [ 
      {
          "balloonText": "AU: <b>[[au_employment_index]]</b>",
          "lineColor": colorts[0],
          "type": "smoothedLine",
          "valueField": "au_employment_index"
      }, {
          "balloonText": "CA: <b>[[ca_employment_index]]</b>",
          "lineColor": colorts[1],
          "type": "line",
          "valueField": "ca_employment_index"
      }, {
          "balloonText": "CN: <b>[[cn_employment_index]]</b>",
          "lineColor": colorts[2],
          "type": "line",
          "valueField": "cn_employment_index"
      }, {
          "balloonText": "EU: <b>[[eu_employment_index]]</b>",
          "lineColor": colorts[3],
          "type": "line",
          "valueField": "eu_employment_index"
      }, {
          "balloonText": "GB: <b>[[gb_employment_index]]</b>",
          "lineColor": colorts[4],
          "type": "line",
          "valueField": "gb_employment_index"
      }, {
          "balloonText": "JP: <b>[[jp_employment_index]]</b>",
          "lineColor": colorts[5],
          "type": "line",
          "valueField": "jp_employment_index"
      }, {
          "balloonText": "US: <b>[[us_employment_index]]</b>",
          "lineColor": colorts[6],
          "type": "line",
          "valueField": "us_employment_index"
      } ],
      "chartScrollbar": {
          "oppositeAxis":false,
          "offset":30,
          "scrollbarHeight": 80,
          "backgroundAlpha": 0,
          "selectedBackgroundAlpha": 0.1,
          "selectedBackgroundColor": "#888888",
          "graphFillAlpha": 0,
          "graphLineAlpha": 0.5,
          "selectedGraphFillAlpha": 0,
          "selectedGraphLineAlpha": 1,
          "autoGridCount":true,
          "color":"#AAAAAA"
      },
      "chartCursor": {
          "pan": true,
          "valueLineEnabled": true,
          "valueLineBalloonEnabled": true,
          "cursorAlpha":1,
          "cursorColor":"#258cbb",
          "limitToGraph":"g1",
          "valueLineAlpha":0.2,
          "valueZoomable":true
      },
      "valueScrollbar": {
      "oppositeAxis": false,
      "offset": 50,
      "scrollbarHeight": 10
      },
      "categoryField": "date",
      "categoryAxis": {
          "parseDates": true,
          "dashLength": 1,
          "minorGridEnabled": true
      },
  });
});