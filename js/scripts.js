console.log(json);
// create an empty data array for our converted json
var dataArray = [];
// creare headers for data array
var headers = ['Year', 'total', 'boys', 'girls'];
// push the headers to the data array
dataArray.push(headers);
// loop through json, converting each object into an appropriate array
json.forEach(function(d){
  dataArray.push([d.Year.toString(),d.total,d.boys,d.girls]);
});

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable(dataArray);

  var options = {
    chartArea: {
      left: 50,
      right: 20,
      bottom: 50,
      right: 100,
    },
    colors: ['#31a354', '#f03b20', '#636363'],
    focusTarget: "category",

    hAxis: {
      title: 'Year'
    },
    vAxis: {
      title: 'Infant mortality rate'
    }

    };

  var chart = new google.visualization.LineChart(document.getElementById('chart'));

  chart.draw(data, options);
}
