var SKILLCHART = document.getElementById("skillchart");

    var asisObject = {
        AsisKnowledgeID:[],
        knowledgeasis:[],
        knowledgeLevel: [],
};

var asIsKnowledgeCounter = -1; // ID no Counter
var knowledgeLevelDescriptions = ["Beginner", "Average", "Skilled", "Specialist", "Expert"];
var skillLevelMin = 1
var skillLevelMax = 5

var skillChartlabels;
var skillChartKnowledLevel;

var skillChartData = {
   labels: skillChartlabels,
  datasets: [{
    label: "As Is Skills - Abilities & Aptitude",
    backgroundColor: "rgba(200,0,0,0.2)",
    data: skillChartKnowledLevel
  
  }],  
  options: {
    scale: {
        min: skillLevelMin,
        max: skillLevelMax,
    }},
};

var radarChart = new Chart(SKILLCHART, {
  type: 'radar',
  data: skillChartData,
  options: skillChartData.options
});

function updateSkillChart(){
  
  skillChartKnowledLevel = asisObject.knowledgeLevel.slice(0,5);
  skillChartlabels = asisObject.knowledgeasis.slice(0,5);
  skillChartData.datasets[0].data = skillChartKnowledLevel
  skillChartData.labels = skillChartlabels
  
  console.log("asis:" + skillChartData.labels);
  console.log("knowledge:" +  skillChartData.datasets[0].data);
  radarChart.update();

 

}


//-------------Enter Button-----------------
var input = document.getElementById("myInput");
input.addEventListener("keyup", function(event) {
if (event.keyCode === 13) {
event.preventDefault();
document.getElementById("myButton").click();
}
});
//---------------------------------------------

function printAsIsObject (){
    console.log (asisObject.AsisKnowledgeID);
    console.log (asisObject.knowledgeasis);
    console.log (asisObject.knowledgeLevel);
  };
  
  function removeAsIsKnowledgeFromArray (liKnowledge){
    var positionInTheArray = asisObject.AsisKnowledgeID.indexOf(Number(liKnowledge)); // find the position of the 
    //console.log ("deleteposition" + positionInTheArray);
    asisObject.knowledgeasis.splice (positionInTheArray,1);
    asisObject.knowledgeLevel.splice (positionInTheArray,1);
    asisObject.AsisKnowledgeID.splice (positionInTheArray,1);
    var deleteInputArea = document.getElementById ("inputArea" + liKnowledge);
    //console.log("inputArea" + liKnowledge);
    deleteInputArea.remove();
    printAsIsObject();
  };
  
  function addAsIsKnowledgeToArray(liKnowledge){
    asIsKnowledgeCounter++;
    asisObject.AsisKnowledgeID.push (asIsKnowledgeCounter);
    asisObject.knowledgeasis.push (liKnowledge);
    asisObject.knowledgeLevel.push (3);
    printAsIsObject();
};

  function valueUp(LiIndex){
      var positionInTheArray = asisObject.AsisKnowledgeID.indexOf(Number(LiIndex)); // find the position in the array (does not follow the ID, uses ID to find the position in the Array)
        //console.log("array icindeki yeri" + positionInTheArray);
        if  (asisObject.knowledgeLevel[positionInTheArray] < skillLevelMax) {
        asisObject.knowledgeLevel[positionInTheArray]++;
        knowledgeLevelLocal= asisObject.knowledgeLevel[positionInTheArray];
        document.getElementById("valuecounter"+ LiIndex).innerHTML = " Liv.: " + knowledgeLevelLocal + ". "+ knowledgeLevelDescriptions[knowledgeLevelLocal-1] + "  "; // find the position in the array (does not follow the ID, uses ID to find the position in the Array)
        //console.log("sonuc" + asisObject.knowledgeLevel[positionInTheArray]);
  }};

  function valueDown(LiIndex){
    var positionInTheArray = asisObject.AsisKnowledgeID.indexOf(Number(LiIndex)); // find the position of the 
      if  (asisObject.knowledgeLevel[positionInTheArray] > skillLevelMin) {
      asisObject.knowledgeLevel[positionInTheArray]--;
      knowledgeLevelLocal= asisObject.knowledgeLevel[positionInTheArray];
      document.getElementById("valuecounter"+ LiIndex).innerHTML = " Liv.: " + knowledgeLevelLocal + ". "+ knowledgeLevelDescriptions[knowledgeLevelLocal-1] + "  "; // this follows the ID number
     // console.log("sonuc" + asisObject.knowledgeLevel[positionInTheArray]);
  }};



//--------------------DeleteAllSkills-------
function deleteAllSkills(){
  var inputareaID = ""
  for (i=0; i<asisObject.AsisKnowledgeID.length; i++){  
  inputareaID = "inputArea" + asisObject.AsisKnowledgeID[i]; // find the  Id number of the div component, which follows the asisknowledgeID
  //console.log("input area ID" + inputareaID);
  document.getElementById (inputareaID).remove ();
  }
 printAsIsObject();
};
//-----------------------------------

//------------------ Swith positions in the array-------------

function switchPositionsIntheArray(i, iMinusOne){
  var moveUpIndexArray = [asisObject.AsisKnowledgeID[i], asisObject.knowledgeasis[i],asisObject.knowledgeLevel[i]];
  var moveUpIndexArrayMinusOne = [asisObject.AsisKnowledgeID[iMinusOne],asisObject.knowledgeasis[iMinusOne],asisObject.knowledgeLevel[iMinusOne]];
 // console.log ("moveupindexarray " + moveUpIndexArray);
  //console.log (" minusone " + moveUpIndexArrayMinusOne);
  
  // minus one to index
  asisObject.AsisKnowledgeID[i] = moveUpIndexArrayMinusOne[0];
  asisObject.knowledgeasis[i] = moveUpIndexArrayMinusOne[1];
  asisObject.knowledgeLevel[i] = moveUpIndexArrayMinusOne[2];
  // index to minus one
  asisObject.AsisKnowledgeID[iMinusOne] = moveUpIndexArray[0];
  asisObject.knowledgeasis[iMinusOne] = moveUpIndexArray[1];
  asisObject.knowledgeLevel[iMinusOne] = moveUpIndexArray[2];
 // var moveUpIndexArrayUpdated = [asisObject.AsisKnowledgeID[i], asisObject.knowledgeasis[i],asisObject.knowledgeLevel[i]];
  //var moveUpIndexArrayMinusOneUpdated = [asisObject.AsisKnowledgeID[iMinusOne], asisObject.knowledgeasis[iMinusOne],asisObject.knowledgeLevel[iMinusOne]];
 // console.log ("moveupindexarrayupdated " + moveUpIndexArrayUpdated);
 // console.log (" minusoneupdated " + moveUpIndexArrayMinusOneUpdated);
};

//----------------------------------------------------


//--------------- Skill Reordering--------------------
function reOrderSkills (){
 var idCounter;
 var inputValueLocal;
 var knowledgeLevelLocal;
 var priorityIndex;
    
 for (i=0; i<asisObject.AsisKnowledgeID.length; i++){ 
      idCounter = asisObject.AsisKnowledgeID[i];
      inputValueLocal = asisObject.knowledgeasis[i];
      knowledgeLevelLocal = asisObject.knowledgeLevel[i];
      priorityIndex = i
      addAccessories (priorityIndex, idCounter, inputValueLocal, knowledgeLevelLocal)
  }}

//-------------------- Add Acdessories - Print the Screen for Skills and add the events-------------------

// add the skills on the screen and the related buttons
  function addAccessories (priorityIndex,idCounter, inputValueLocal, knowledgeLevelLocal){
    ///write the skill on the screen
    var creatediv = document.createElement("DIV");
    creatediv.className = "inputAreaClass";
    creatediv.id = "inputArea" + idCounter;
    var h = document.createElement("H4");    // Create a <h1> element
    var t = document.createTextNode(inputValueLocal);     // Create a text node
    h.appendChild(t);   
    document.body.appendChild(creatediv);
    creatediv.appendChild(h);

    //create a button element for upvote
    var btnupvote = document.createElement("BUTTON"); 
    if (priorityIndex!==0){
    btnupvote.innerHTML = "▲";
    } else {
    (btnupvote.innerHTML = "■")
    }
    btnupvote.class = "addBtn";
    btnupvote.id = "btnupvalue" + idCounter;
    creatediv.appendChild(btnupvote);

    //give some space between buttons 
    t = document.createTextNode("  ");     // Create a text node
    creatediv.appendChild(t);


    //create a button element for downknowledge value
    var btnvaluedown = document.createElement("BUTTON"); 
    btnvaluedown.innerHTML = "↓";
    btnvaluedown.class = "addBtn";
    btnvaluedown.id = "btnvaluedown" +  idCounter;
    creatediv.appendChild(btnvaluedown);    

    //create a counter text for the knowledge level
    var kLevelValue = document.createElement("LABEL");     // Create a label element
    var kLevelText = document.createTextNode (" Liv.: " + knowledgeLevelLocal + ". "+ knowledgeLevelDescriptions[knowledgeLevelLocal-1] + "  ");
    kLevelValue.id = "valuecounter" +  idCounter;
    creatediv.appendChild(kLevelValue);
    kLevelValue.appendChild(kLevelText);
   // console.log ("labelid" + kLevelValue.id);
    document.getElementById(kLevelValue.id).style.display = "inline-block"; 
    document.getElementById(kLevelValue.id).style.width = "150px"; 
    document.getElementById(kLevelValue.id).style.textAlign= "center";

    //create a button element for upknowledge value
    var btnvalueup = document.createElement("BUTTON"); 
    btnvalueup.innerHTML = "↑";
    btnvalueup.class = "addBtn";
    btnvalueup.id = "btnvalueup" +  idCounter;
    creatediv.appendChild(btnvalueup);
    
    //give some space between buttons
    t = document.createTextNode("  ");     // Create a text node
    creatediv.appendChild(t);

    //create a delete skill button
    var btndelete = document.createElement("BUTTON"); 
    btndelete.innerHTML = "X";
    btndelete.class = "addBtn";
    btndelete.id = "btndelete" +  idCounter;
    creatediv.appendChild(btndelete);
//--------------------------------------------
    //Button Functions
   
    document.getElementById(btndelete.id).onclick = function() {
      var deleteID;
      //console.log (asisObject.AsisKnowledgeID);
      deleteID = btndelete.id.match(/\d/g).join("");
      //console.log ("id number"+deleteID);
      removeAsIsKnowledgeFromArray(deleteID);
      updateSkillChart();
      console.log ("item id"+priorityIndex);
    };

      document.getElementById(btnvalueup.id).onclick = function() {   //add +1 to the knowledgevalue
        var ValueUpID;
        ValueUpID = btnvalueup.id.match(/\d/g).join("");
        //console.log ("id number"+ValueUpID);
        valueUp(ValueUpID);
        updateSkillChart();
    };

      document.getElementById(btnvaluedown.id).onclick = function() {  // substract -1 from the knowledgevalue
        var ValueDownID;
        ValueDownID = btnvaluedown.id.match(/\d/g).join("");
        //console.log ("id number"+ValueDownID);
        valueDown(ValueDownID);
        updateSkillChart();
    };
    if (priorityIndex!==0){
    document.getElementById(btnupvote.id).onclick = function() {  //lift the knowledge one level high
    //  console.log ("moveupbuttonno "+ btnupvote.id)
      var moveUpID = Number(btnupvote.id.match(/\d/g).join(""));
      var moveuppositioninthearray = asisObject.AsisKnowledgeID.indexOf(moveUpID); // find the position of the 
     // console.log ("moveuppositioninthearray" + moveuppositioninthearray);
      var i = moveuppositioninthearray;
      var iMinusOne = moveuppositioninthearray - 1;
      switchPositionsIntheArray(i,iMinusOne);
      deleteAllSkills();
      reOrderSkills();
      updateSkillChart();
    }};

    };       

function newElement() {
  var inputValueLocal = document.getElementById("myInput").value;
  var knowledgeLevelLocal;
  const lowerCasedAsIs = asisObject.knowledgeasis.map(name => name.toLowerCase());
  var indexOfKnowledgeLevelLocal = lowerCasedAsIs.indexOf(inputValueLocal.toLowerCase());
  
  if (inputValueLocal === '') {  // check if the inputarea is empty or the skill already written before
    alert("Devi scrivere qualcosa");
  } else if (indexOfKnowledgeLevelLocal !== -1 ) { 
    alert("Lo skill e' gia' nella lista, devi scrivere un altro skill");
  } else {
    addAsIsKnowledgeToArray (inputValueLocal); // add knowledge value to the array
    
    //find the level of knowledge for each element and print it on the screen
    indexOfKnowledgeLevelLocal = asisObject.knowledgeasis.indexOf(inputValueLocal);
    knowledgeLevelLocal = asisObject.knowledgeLevel [indexOfKnowledgeLevelLocal];
    addAccessories(indexOfKnowledgeLevelLocal, asIsKnowledgeCounter, inputValueLocal, knowledgeLevelLocal);
    //console.log ("idcounter:" + asIsKnowledgeCounter);
    updateSkillChart();
  }
  document.getElementById("myInput").value = "";  
}

function saveData(){
  var asisAbilitiesData = asisObject;
  
  //----------------Save the Object----------------------
  // Put the object into storage
  localStorage.setItem('asisAbilitiesData', JSON.stringify(asisAbilitiesData));
  
  // Retrieve the object from storage
  var retrievedObject = localStorage.getItem('asisAbilitiesData');
  
  console.log('retrievedObject: ', JSON.parse(retrievedObject));
  //------------------------------------
  
  }


function nextPage(){
  if(asisObject.AsisKnowledgeID.length !== 0){
    saveData();
  localStorage.setItem("whereWeAre", "passToBeLife");   
  nextPageLink = "../sectionpass/";
  console.log ("next")
  window.open(nextPageLink, "_self");
}
else {alert("Devi inserire skills per poter procedere")}
}