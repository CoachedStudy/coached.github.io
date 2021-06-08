var asisObject = {
  AsisKnowledgeID:[],
  knowledgeasis:[],
  knowledgeLevel: [],
};

var tobeObject = {
  AsisKnowledgeID:[],
  knowledgeasis:[],
  knowledgeLevel: [],
};

var finalglobalKnowledgeObject = {
  mentorTodo: [],
  meTodo: [],
  //asis information
  asis: {AsisKnowledgeID:[],
  knowledgeasis:[],
  knowledgeLevel: []
  },
  //tobe information
  tobe: {AsisKnowledgeID:[],
  knowledgeasis:[],
  knowledgeLevel: []
}
}



function printValues(){
  var areaprioritytodo;
  var areadesctodo;
  var arealeveltodo;
  var areapriorityasis;
  var areadescasis;
  var arealevelasis;

  for (i=0;i<5;i++){
    console.log("i:"+ i);
  areaprioritytodo = "area" + i + "prioritytodo";
  areadesctodo = "area" + i + "desctodo";
  arealeveltodo = "area" + i + "leveltodo";

  areapriorityasis = "area" + i + "priorityasis";
  areadescasis = "area" + i + "descasis";
  arealevelasis = "area" + i + "levelasis";
  
  document.getElementById(areaprioritytodo).innerHTML = i+1;
  document.getElementById(areadesctodo).innerHTML = tobeObject.knowledgeasis[i];
  document.getElementById(arealeveltodo).innerHTML = tobeObject.knowledgeLevel[i];
  finalglobalKnowledgeObject.tobe.AsisKnowledgeID[i] = tobeObject.AsisKnowledgeID[i];
  finalglobalKnowledgeObject.tobe.knowledgeasis[i] = tobeObject.knowledgeasis[i];
  finalglobalKnowledgeObject.tobe.knowledgeLevel[i] = tobeObject.knowledgeLevel[i];

  const lowerCasedAsIs = asisObject.knowledgeasis.map(name => name.toLowerCase());
  var indexOfKnowledgeLevelLocal = lowerCasedAsIs.indexOf(String(tobeObject.knowledgeasis[i]));

  if (indexOfKnowledgeLevelLocal !== -1 ) { //The area is in the both lists
    document.getElementById(areapriorityasis).innerHTML = indexOfKnowledgeLevelLocal + 1;
    document.getElementById(areadescasis).innerHTML = asisObject.knowledgeasis[indexOfKnowledgeLevelLocal];
    document.getElementById(arealevelasis).innerHTML = asisObject.knowledgeLevel[indexOfKnowledgeLevelLocal];
    finalglobalKnowledgeObject.asis.AsisKnowledgeID[i] = asisObject.AsisKnowledgeID[indexOfKnowledgeLevelLocal];
    finalglobalKnowledgeObject.asis.knowledgeasis[i] = asisObject.knowledgeasis[indexOfKnowledgeLevelLocal];
    finalglobalKnowledgeObject.asis.knowledgeLevel[i] = asisObject.knowledgeLevel[indexOfKnowledgeLevelLocal];

  } else { // The area is not in the second list
    document.getElementById('area1priorityasis').innerHTML = "-";
    document.getElementById('area1descasis').innerHTML = "-";
    document.getElementById('area1levelasis').innerHTML = "-";
    finalglobalKnowledgeObject.asis.AsisKnowledgeID[i] = "-";
    finalglobalKnowledgeObject.asis.knowledgeasis[i] = "-";
    finalglobalKnowledgeObject.asis.knowledgeLevel[i] ="-"
  }
}
console.log("finalglobal:", finalglobalKnowledgeObject)
}

window.onload = function(){
var retrievedAsisObject = localStorage.getItem('asisKnowledgeData');
var retrievedTobeObject = localStorage.getItem('tobeKnowledgeData');
asisObject = JSON.parse(retrievedAsisObject);
tobeObject = JSON.parse(retrievedTobeObject);
printValues();
}



function saveData(){

//----------------Save the Object----------------------
// Put the object into storage
localStorage.setItem('finalglobalKnowledgeObject', JSON.stringify(finalglobalKnowledgeObject));

// Retrieve the object from storage
var retrievedObject = localStorage.getItem('finalglobalKnowledgeObject');

console.log('retrievedObject: ', JSON.parse(retrievedObject));
//------------------------------------
}

function saveActionPlan(){
  var areaMentor = "";
  var areaMentor = ""
  for (i=0;i<5;i++){
    
    areaMentor = "mentorarea" + i;
    areaMe = "mearea" + i;

    finalglobalKnowledgeObject.mentorTodo[i] = document.getElementById(areaMentor).value;
    finalglobalKnowledgeObject.meTodo[i] = document.getElementById(areaMe).value;
  }
}

function nextPage(){
  saveActionPlan();
  saveData();
   localStorage.setItem("whereWeAre", "passBetterAbilities");
   nextPageLink = "../sectionpass/";
   console.log ("next")
   window.open(nextPageLink, "_self");
}