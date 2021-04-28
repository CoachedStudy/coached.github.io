var CHART = document.getElementById("pie-chart");
var milanoValue = 5;
var romaValue = 5;
var torinoValue = 5;
var pugliaValue = 5;
var BergamoValue = 5;

var pieChart = new Chart(CHART, {
    type: 'pie',
    data: {
    labels: ["Milano", "Roma", "Torino", "Puglia", "Bergamo"],
      datasets: [{
       // label: "Vote for yourself!",
        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
        data: [milanoValue,romaValue,torinoValue,pugliaValue,BergamoValue]    
      }]
  },
    
    options: {
      title: {
        display: true,
        text: 'Predicted world population (millions) in 2050'
      }
    }
});

function checkRadioMilano(value) {
  milanoValue = value;
  updatePieChart();
}

function checkRadioRoma(value) {
  romaValue = value;
  updatePieChart();
}

function checkRadioTorino(value) {
    torinoValue = value;
    updatePieChart();
}

function checkRadioPuglia(value) {
      pugliaValue = value;
      updatePieChart();
}

function checkRadioBergamo(value) {
        BergamoValue = value;
        updatePieChart();
}

function updatePieChart(){
  pieChart.data.datasets.pop()
  pieChart.data.datasets.push(
    {
    data:[milanoValue,romaValue,torinoValue,pugliaValue,BergamoValue], 
    backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
    labels: ["Milano", "Roma", "Torino", "Puglia", "Bergamo"]
    }
    );
  pieChart.update();
}