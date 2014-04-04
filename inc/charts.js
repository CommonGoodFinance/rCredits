google.load('visualization', '1.0', {'packages':['corechart']});
var chartWidth = 400;
var chartHeight = 300;

function drawCharts() {
  acctsChart();
  fundsChart();
  velocityChart();
  bankingChart();
  txChart();
  issuedChart();
}

function acctsChart() {
  var data = new google.visualization.DataTable();
  data.addColumn('date', 'Date');
  data.addColumn('number', 'Personal');
  data.addColumn('number', 'Company');
  data.addColumn('number', 'Not-yet-active');
  data.addRows(acctsData);

  var options = {
    title: 'rCredits Accounts: ' + accts,
    width: chartWidth, height: chartHeight,
    colors: ['green', 'yellow', 'red'],
    series: {
      2: {areaOpacity: 0}
    },
    hAxis: {format: 'MMM d', gridlines: {count: 5}, title: '', titleTextStyle: {color: 'darkgray'}},
    legend: {position: 'bottom'}
  };

  var chart = new google.visualization.AreaChart(document.getElementById('acctsChart'));
  chart.draw(data, options);
}

function fundsChart() {
  var data = new google.visualization.DataTable();
  data.addColumn('date', 'Date');
  data.addColumn('number', 'r');
  data.addColumn('number', 'Held 30+ days');
  data.addColumn('number', 'USD (unused)');
  data.addRows(fundsData);

  var options = {
    title: 'Funds in the rCredits System: ' + funds,
    width: chartWidth, height: chartHeight,
    colors: ['green', 'yellow', 'blue'],
    series: {
      1: {areaOpacity: 0}
    },
    hAxis: {format: 'MMM d', gridlines: {count: 5}, title: '', titleTextStyle: {color: 'darkgray'}},
    legend: {position: 'bottom'}
  };

  var chart = new google.visualization.AreaChart(document.getElementById('fundsChart'));
  chart.draw(data, options);
}

function velocityChart() {
  var data = new google.visualization.DataTable();
  data.addColumn('date', 'Date');
  data.addColumn('number', 'Velocity');
  data.addRows(velocityData);

  var options = {
    title: 'rCredits Circulation Velocity: ' + velocity,
    width: chartWidth, height: chartHeight,
    hAxis: {
      format: 'MMM d',
      gridlines: {count: 5},
      title: 'What fraction of rCredits turn over monthly', 
      titleTextStyle: {color: 'darkgray'}
    },
    legend: 'none'
  };

  var chart = new google.visualization.LineChart(document.getElementById('velocityChart'));
  chart.draw(data, options);
}

function bankingChart() {
  var data = new google.visualization.DataTable();
  data.addColumn('date', 'Date');
  data.addColumn('number', 'USD In');
  data.addColumn('number', 'USD Out');
  data.addRows(bankingData);

  var options = {
    title: 'Monthly Bank Transfers',
    width: chartWidth, height: chartHeight,
    colors: ['green', 'red'],
    series: {
      1: {areaOpacity: 0.5}
    },
    hAxis: {format: 'MMM d', gridlines: {count: 5}, title: '', titleTextStyle: {color: 'darkgray'}},
    legend: {position: 'bottom'}
  };

  var chart = new google.visualization.AreaChart(document.getElementById('bankingChart'));
  chart.draw(data, options);
}

function txChart() {
  var data = new google.visualization.DataTable();
  data.addColumn('date', 'Date');
  data.addColumn('number', 'p2p');
  data.addColumn('number', 'p2b');
  data.addColumn('number', 'b2b');
  data.addColumn('number', 'b2p');
  data.addRows(txData);

  var options = {
    title: 'Monthly Transactions: ' + txs,
    width: chartWidth, height: chartHeight,
    hAxis: {format: 'MMM d', gridlines: {count: 5}, title: '(logarithmic scale)', titleTextStyle: {color: 'darkgray'}},
    vAxis: {logScale: true},
    legend: {position: 'bottom'}
  };

  var chart = new google.visualization.LineChart(document.getElementById('txChart'));
  chart.draw(data, options);
}

function issuedChart() {
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Type');
  data.addColumn('number', 'Amount');
  data.addRows(issuedData);

  var options = {
    title: 'rCredits Issued To-Date: ' + issued,
    width: 500, height: 300,
//    pieStartAngle: 240,
    pieSliceText: 'percentage',
    slices: {1: {offset: 0.5},
             3: {offset: 0.2},
    },    
    is3D: true,
    legend: {position: 'right'}
  };

  var chart = new google.visualization.PieChart(document.getElementById('issuedChart'));
  chart.draw(data, options);
}
