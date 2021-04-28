var CHART = document.getElementById("bar-chart");
var firstValue = 0;
var secondValue = 0;
var thirdValue = 0;
var forthValue = 0;
var fifthValue = 0;

var pieChart = new Chart(CHART, {
    type: 'line',
    data: {
    labels: ["1st", "2nd", "3rd", "4th", "5th"],
      datasets: [{
       label: "KNOW THYSELF",
        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
        data: [firstValue,secondValue,thirdValue,forthValue,fifthValue]    
      }]
  },
    
    options: {
      title: {
        display: true,
        text: 'Predicted world population (millions) in 2050'
      }
    }
});

function checkRadio1st(value) {
  firstValue = value;
  updateChart();
}

function checkRadio2nd(value) {
  secondValue = value;
  updateChart();
}

function checkRadio3rd(value) {
    thirdValue = value;
    updateChart();
}

function checkRadio4th(value) {
      forthValue = value;
      updateChart();
}

function checkRadio5th(value) {
        fifthValue = value;
        updateChart();
}

function updateChart(){
  pieChart.data.datasets.pop()
  pieChart.data.datasets.push(
    {
    data:[firstValue,secondValue,thirdValue,forthValue,fifthValue], 
    backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
    labels: ["1st", "2nd", "3rd", "4th", "5th"]
    }
    );
  pieChart.update();
}