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

  var chartData1 = [];
  var chartData2 = [];
  var chartData3 = [];
  var chartData4 = [];
  var chartData5 = [];
  var chartData6 = [];
  var chartData7 = [];

  generateChartData(data);

  function generateChartData(data) {
    for (var i = 0; i < data.length; i++) {
      chartData1.push({
        "date": data[i]["date"],
        "value": data[i]["au_employment_index"]
      });
      chartData2.push({
        "date": data[i]["date"],
        "value": data[i]["ca_employment_index"]
      });
      chartData3.push({
        "date": data[i]["date"],
        "value": data[i]["cn_employment_index"]
      });
      chartData4.push({
        "date": data[i]["date"],
        "value": data[i]["eu_employment_index"]
      });
      chartData5.push({
        "date": data[i]["date"],
        "value": data[i]["gb_employment_index"]
      });
      chartData6.push({
        "date": data[i]["date"],
        "value": data[i]["jp_employment_index"]
      });
      chartData7.push({
        "date": data[i]["date"],
        "value": data[i]["us_employment_index"]
      });
    }
  }

  var $CHART$ = AmCharts.makeChart("$CHART$", {
      "type": "stock",
      "dataDateFormat": "YYYY-MM-DD",
      "dataSets": [
          {
              "color": "#b0de09",
              "fieldMappings": [{
                  "fromField": "value",
                  "toField": "value1"
              }],
              "dataProvider": chartData1,
              "categoryField": "date",
              "compared": true
          },

          {
              "color": "#f0de09",
              "fieldMappings": [{
                  "fromField": "value",
                  "toField": "value2"
              }],
              "dataProvider": chartData2,
              "categoryField": "date",
              "compared": true
          },

          {
              "color": "#f05ef9",
              "fieldMappings": [{
                  "fromField": "value",
                  "toField": "value3"
              }],
              "dataProvider": chartData3,
              "categoryField": "date",
              "compared": true
          },

          {
              "color": "#f08e89",
              "fieldMappings": [{
                  "fromField": "value",
                  "toField": "value4"
              }],
              "dataProvider": chartData4,
              "categoryField": "date",
              "compared": true
          },

          {
              "color": "#507ef9",
              "fieldMappings": [{
                  "fromField": "value",
                  "toField": "value5"
              }],
              "dataProvider": chartData5,
              "categoryField": "date",
              "compared": true
          },

          {
              "color": "#f00e59",
              "fieldMappings": [{
                  "fromField": "value",
                  "toField": "value6"
              }],
              "dataProvider": chartData6,
              "categoryField": "date",
              "compared": true
          },

          {
              "color": "#005e00",
              "fieldMappings": [{
                  "fromField": "value",
                  "toField": "value7"
              }],
              "dataProvider": chartData7,
              "categoryField": "date",
              "compared": true
          },
      ],

      "panels": [
          {
              "showCategoryAxis": false,
              "valueAxes": [{
                  "position": "left",
                  "axisAlpha":0,
                  "gridAlpha":0,
                  "labelsEnabled": false,
              }],
              "title": "AU",
              "stockGraphs": [{
                  "id": "g1",
                  "valueField": "value1",
                  "comparable": true,
                  // "fillAlphas": 0.6,
              }]
          }, 

          {
              "showCategoryAxis": false,
              "valueAxes": [{
                  "position": "left",
                  "axisAlpha":0,
                  "gridAlpha":0,
                  "labelsEnabled": false,
              }],
              "title": "CA",
              "stockGraphs": [{
                  "id": "g2",
                  "valueField": "value2",
                  "openField": 0,
                  "comparable": true,
                  "fillAlphas": 0.6,
                  // "fillToGraph": "g1"
              }]
          },

          {
              "showCategoryAxis": false,
              "valueAxes": [{
                  "position": "left",
                  "axisAlpha":0,
                  "gridAlpha":0,
                  "labelsEnabled": false,
              }],
              "title": "CN",
              "stockGraphs": [{
                  "id": "g3",
                  "valueField": "value3",
                  "comparable": true,
                  "fillAlphas": 0.6,
                  // "fillToGraph": 0
              }]
          },

          {
              "showCategoryAxis": false,
              "valueAxes": [{
                  "position": "left",
                  "axisAlpha":0,
                  "gridAlpha":0,
                  "labelsEnabled": false,
              }],
              "title": "EU",
              "stockGraphs": [{
                  "id": "g4",
                  "valueField": "value4",
                  "comparable": true,
                  "fillAlphas": 0.6,
                  // "fillToGraph": 0
              }]
          },

          {
              "showCategoryAxis": false,
              "valueAxes": [{
                  "position": "left",
                  "axisAlpha":0,
                  "gridAlpha":0,
                  "labelsEnabled": false,
              }],
              "title": "GB",
              "stockGraphs": [{
                  "id": "g5",
                  "valueField": "value5",
                  "comparable": true,
                  "fillAlphas": 0.6,
                  // "fillToGraph": 0
              }]
          },

          {
              "showCategoryAxis": false,
              "valueAxes": [{
                  "position": "left",
                  "axisAlpha":0,
                  "gridAlpha":0,
                  "labelsEnabled": false,
              }],
              "title": "JP",
              "stockGraphs": [{
                  "id": "g6",
                  "valueField": "value6",
                  "comparable": true,
                  "fillAlphas": 0.6,
                  // "fillToGraph": 0
              }]
          },

          {
              "showCategoryAxis": false,
              "valueAxes": [{
                  "position": "left",
                  "axisAlpha":0,
                  "gridAlpha":0,
                  "labelsEnabled": false,
              }],
              "title": "US",
              "stockGraphs": [{
                  "id": "g7",
                  "valueField": "value7",
                  "comparable": true,
                  "fillAlphas": 0.6,
                  // "fillToGraph": 0
              }]
          },
      ],
    
      "panelsSettings": {
        "fontFamily": "Arial",
        "creditsPosition": "bottom-right",
        "panelSpacing": 1,
        "marginLeft": 15,
        "marginRight": 15
      },
      
      "balloon": {
        "fontSize": 13
      },

      "chartScrollbarSettings": {
        //"graph": "g1",
        "scrollbarHeight": 40,
        "dragIcon": "dragIconRectSmall",
        "dragIconWidth": 20,
        "dragIconHeight": 40,

        "backgroundAlpha": 0,
        "selectedBackgroundAlpha": 0.1,
        "selectedBackgroundColor": "#888888",
        "graphFillAlpha": 0.5,
        "graphLineAlpha": 0.5,
        "selectedGraphFillAlpha": 0,
        "selectedGraphLineAlpha": 1,
        "color": "#AAAAAA"
      },

      "chartCursorSettings": {
        "fullWidth": true,
        "cursorAlpha": 0.5,
        "cursorColor": '#444444',
        "valueLineAlpha": 0,
        "valueBalloonsEnabled": true,
        "oneBalloonOnly": true
      },
      
      "categoryAxesSettings": {
        "minPeriod": "hh",
        "parseDates": true,
        "equalSpacing": false,
        "gridAlpha": 0,
        "axisAlpha": 0,
        "inside": true,
        "maxSeries": 0
      },

     "periodSelector": {
        "position": "bottom",
        "inputFieldsEnabled": false,
        "periods": [ {
          "period": "DD",
          "selected": true,
          "count": 1,
          "label": "1d"
        }, {
          "period": "DD",
          "selected": true,
          "count": 10,
          "label": "10d"
        }, {
          "period": "MM",
          "selected": true,
          "count": 1,
          "label": "1m"
        }, {
          "period": "MM",
          "selected": true,
          "count": 6,
          "label": "6m"
        }, {
          "period": "YYYY",
          "selected": true,
          "count": 6,
          "label": "1y"
        }, {
          "period": "MAX",
          "label": "MAX"
      } ]
    },

  });
});
