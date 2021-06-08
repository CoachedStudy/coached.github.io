var CHART1 = document.getElementById("pie-chart1");
var sAQValue=[];
var totalSAQ;

window.onload = function(){
    var labeltag
    for (i = 1; i<6; i++){

    labeltag = "area"+ i+ "label"
    console.log (labeltag);
    document.getElementById(labeltag).style.display = "inline-block"; 
    document.getElementById(labeltag).style.width = "30px"; 
    document.getElementById(labeltag).style.textAlign= "center";
  }
  defineTotalSAQ();
  console.log(sAQValue);
  }

var pieChartArea1 = new Chart(CHART1, {
    type: 'pie',
    data: {
    labels: ["Area 1", "Area 2", "Area 3", "Area 4", "Area 5"],
      datasets: [{
        label: "My focus",
        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
        data: sAQValue
      }]
  },
    
    options: {
      title: {
        display: true,
        text: 'My Focus'
      }
    }
});s

function updatePieChart(){

    pieChartArea1.data.datasets.data = sAQValue;
    pieChartArea1.data.labels = [document.getElementById("area1Desc").value, document.getElementById("area2Desc").value, document.getElementById("area3Desc").value,document.getElementById("area4Desc").value,document.getElementById("area5Desc").value];
    for (i = 0 ; i<5 ; i++){
    if (document.getElementById("area" + (i+1) + "Desc").value =="") {
        sAQValue[i] = 0;
        document.getElementById("area" + (i+1) + "label").innerHTML = 0;
    }}
    pieChartArea1.update();
     
    }
//-------------------------------------------------
function area1up(){areaup(1)}
function area2up(){areaup(2)}
function area3up(){areaup(3)}
function area4up(){areaup(4)}
function area5up(){areaup(5)}

function area1down(){areadown(1)}
function area2down(){areadown(2)}
function area3down(){areadown(3)}
function area4down(){areadown(4)}
function area5down(){areadown(5)}

function defineTotalSAQ(){
    sAQValue[0] = Number(document.getElementById("area1label").innerHTML)
    sAQValue[1] = Number(document.getElementById("area2label").innerHTML)
    sAQValue[2] = Number(document.getElementById("area3label").innerHTML)
    sAQValue[3] = Number(document.getElementById("area4label").innerHTML)
    sAQValue[4] = Number(document.getElementById("area5label").innerHTML)
    totalSAQ = sAQValue[0]+sAQValue[1]+sAQValue[2]+sAQValue[3]+sAQValue[4];
    console.log("saq value" + totalSAQ)
    if (totalSAQ == 100) {return true}
    else if (totalSAQ !== 100) {return false}
}

function areaup(areaIndex){
    var arealabel = "area" + areaIndex + "label"
    var areaDesc = "area" + areaIndex + "Desc"
    if (document.getElementById(areaDesc).value == ""){
        return alert("Inserire la Descrizione!")
    }
    var sAQ
    defineTotalSAQ();
    sAQ = Number(document.getElementById(arealabel).innerHTML);
    console.log(sAQ);
   if (sAQ<100){
    if (totalSAQ<91){
    sAQ = sAQ + 10
    sAQValue[areaIndex-1] = sAQ
    document.getElementById(arealabel).innerHTML = sAQ;
    updatePieChart()
    console.log(sAQValue[areaIndex+1]);
    }else {alert ("La somma supera 100%, diminuire i valori!")}
    }
}

function areadown(areaIndex){
    var arealabel = "area" + areaIndex + "label"
    var sAQ
    var areaDesc = "area" + areaIndex + "Desc"
    if (document.getElementById(areaDesc).value == ""){
        return alert("Inserire la Descrizione!")
    }
    sAQ = Number(document.getElementById(arealabel).innerHTML);
    console.log(sAQ);
   if (sAQ>0){
    sAQ = sAQ - 10
    document.getElementById(arealabel).innerHTML = sAQ;
    sAQValue[areaIndex-1] = sAQ
    updatePieChart()
    console.log(sAQ);
    console.log(arealabel);
    }
}

function saveData(){
    var asisLifeData = {
      philosophy: document.getElementById("lifephilosophy").value,
      achievement1: document.getElementById("myachievements1").value,
      achievement2: document.getElementById("myachievements2").value,
      achievement3: document.getElementById("myachievements3").value,
      focus1: document.getElementById("area1Desc").value,
      focus1value: document.getElementById("area1label").innerHTML,
      focus2: document.getElementById("area2Desc").value,
      focus2value: document.getElementById("area2label").innerHTML,
      focus3: document.getElementById("area3Desc").value,
      focus3value: document.getElementById("area3label").innerHTML,
      focus4: document.getElementById("area4Desc").value,
      focus4value: document.getElementById("area4label").innerHTML,
      focus5: document.getElementById("area5Desc").value,
      focus5value: document.getElementById("area5label").innerHTML,
    };
    
    //----------------Save the Object----------------------
    // Put the object into storage
    localStorage.setItem('asisLifeData', JSON.stringify(asisLifeData));
    
    // Retrieve the object from storage
    var retrievedObject = localStorage.getItem('asisLifeData');
    
    console.log('retrievedObject: ', JSON.parse(retrievedObject));
    //------------------------------------
    
    }

function nextPage(){

    console.log(defineTotalSAQ())
    if (defineTotalSAQ() == true){
        saveData();
    localStorage.setItem("whereWeAre", "passAsIsKnowledge");  
    return true
}
    else if (defineTotalSAQ() == false){
    alert("Il valore totale dei campi devono essere 100%")
    return false
}
 }
