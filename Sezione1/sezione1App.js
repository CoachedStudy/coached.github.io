var CHART1 = document.getElementById("pie-chart1");
var sA1Q = 100;
var sA2Q = 0;
var sA3Q = 0;
var sA4Q = 0;
var sA5Q = 0;
document.getElementById("area1Quantity").value = sA1Q;
document.getElementById("area2Quantity").value = sA2Q;
document.getElementById("area3Quantity").value = sA3Q;
document.getElementById("area4Quantity").value = sA4Q;
document.getElementById("area5Quantity").value = sA5Q;



var pieChartArea1 = new Chart(CHART1, {
    type: 'pie',
    data: {
    labels: ["Area 1", "Area 2", "Area 3", "Area 4", "Area 5"],
      datasets: [{
       // label: "Vote for yourself!",
        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
        data: [sA1Q,sA2Q,sA3Q,sA4Q,sA5Q]    
      }]
  },
    
    options: {
      title: {
        display: true,
        //text: 'Predicted world population (millions) in 2050'
      }
    }
});

function area1Value(value) {
  var valuesSum = +value + +sA2Q + +sA3Q + +sA4Q + +sA5Q;
console.log(valuesSum)
    if (valuesSum <101) {
    sA1Q = value;
    updatePieChart();
}else{
    alert ("La somma supera 100%, diminuire i valori!"); 
    document.getElementById("area1Quantity").value = sA1Q;
    
}}

function area2Value(value) {
   var valuesSum =  +sA1Q + +value + +sA3Q + +sA4Q + +sA5Q;
   if (valuesSum <101) {
   sA2Q = value;
  updatePieChart();
}else{
    alert ("La somma supera 100%, diminuire i valori!"); 
    document.getElementById("area2Quantity").value = sA2Q;
}}

function area3Value(value) {
    var valuesSum =  +sA1Q + +sA2Q + +value + +sA4Q + +sA5Q;
    if (valuesSum <101) {
    sA3Q = value;
    updatePieChart();
}else{
    alert ("La somma supera 100%, diminuire i valori!"); 
    document.getElementById("area3Quantity").value = sA3Q;
}}

function area4Value(value) {
    var valuesSum =  +sA1Q + +sA2Q + +sA3Q + +value + +sA5Q;
    if (valuesSum <101) {
    sA4Q = value;
    updatePieChart();
}else{
    alert ("La somma supera 100%, diminuire i valori!"); 
    document.getElementById("area4Quantity").value = sA4Q;
}}

function area5Value(value) {
    var valuesSum =  +sA1Q + +sA2Q + +sA3Q + +sA4Q + +value;
    if (valuesSum <101) {
    sA5Q = value;
    updatePieChart();
}else{
    alert ("La somma supera 100%, diminuire i valori!"); 
    document.getElementById("area5Quantity").value = sA5Q;
}}

function updatePieChart(){
pieChartArea1.data.datasets.pop()
pieChartArea1.data.datasets.push(
    {
    data: [sA1Q,sA2Q,sA3Q,sA4Q,sA5Q], 
    backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
    labels: [document.getElementById("area1Desc").value, "Area 2", "Area 3", "Area 4", "Area 5"]
    });
    pieChartArea1.update();
  
}
