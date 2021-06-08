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

var finalglobalAbilitiesObject = {
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
  finalglobalAbilitiesObject.tobe.AsisKnowledgeID[i] = tobeObject.AsisKnowledgeID[i];
  finalglobalAbilitiesObject.tobe.knowledgeasis[i] = tobeObject.knowledgeasis[i];
  finalglobalAbilitiesObject.tobe.knowledgeLevel[i] = tobeObject.knowledgeLevel[i];

  const lowerCasedAsIs = asisObject.knowledgeasis.map(name => name.toLowerCase());
  var indexOfKnowledgeLevelLocal = lowerCasedAsIs.indexOf(String(tobeObject.knowledgeasis[i]));

  if (indexOfKnowledgeLevelLocal !== -1 ) { //The area is in the both lists
    document.getElementById(areapriorityasis).innerHTML = indexOfKnowledgeLevelLocal + 1;
    document.getElementById(areadescasis).innerHTML = asisObject.knowledgeasis[indexOfKnowledgeLevelLocal];
    document.getElementById(arealevelasis).innerHTML = asisObject.knowledgeLevel[indexOfKnowledgeLevelLocal];
    finalglobalAbilitiesObject.asis.AsisKnowledgeID[i] = asisObject.AsisKnowledgeID[indexOfKnowledgeLevelLocal];
    finalglobalAbilitiesObject.asis.knowledgeasis[i] = asisObject.knowledgeasis[indexOfKnowledgeLevelLocal];
    finalglobalAbilitiesObject.asis.knowledgeLevel[i] = asisObject.knowledgeLevel[indexOfKnowledgeLevelLocal];

  } else { // The area is not in the second list
    document.getElementById('area1priorityasis').innerHTML = "-";
    document.getElementById('area1descasis').innerHTML = "-";
    document.getElementById('area1levelasis').innerHTML = "-";
    finalglobalAbilitiesObject.asis.AsisKnowledgeID[i] = "-";
    finalglobalAbilitiesObject.asis.knowledgeasis[i] = "-";
    finalglobalAbilitiesObject.asis.knowledgeLevel[i] ="-"
  }
}
console.log("finalglobal:", finalglobalAbilitiesObject)
}

window.onload = function(){
var retrievedAsisObject = localStorage.getItem('asisAbilitiesData');
var retrievedTobeObject = localStorage.getItem('tobeAbilitiesData');
asisObject = JSON.parse(retrievedAsisObject);
tobeObject = JSON.parse(retrievedTobeObject);
printValues();
}



function saveData(){

//----------------Save the Object----------------------
// Put the object into storage
localStorage.setItem('finalglobalAbilitiesObject', JSON.stringify(finalglobalAbilitiesObject));

// Retrieve the object from storage
var retrievedObject = localStorage.getItem('finalglobalAbilitiesObject');

console.log('retrievedObject: ', JSON.parse(retrievedObject));
//------------------------------------
}

function saveActionPlan(){
  var areaMentor = "";
  var areaMentor = ""
  for (i=0;i<5;i++){
    
    areaMentor = "mentorarea" + i;
    areaMe = "mearea" + i;

    finalglobalAbilitiesObject.mentorTodo[i] = document.getElementById(areaMentor).value;
    finalglobalAbilitiesObject.meTodo[i] = document.getElementById(areaMe).value;
  }
}

function nextPage(){
  saveActionPlan();
  saveData();
   localStorage.setItem("whereWeAre", "final");
   nextPageLink = "../99.final/";
   console.log ("next")
   window.open(nextPageLink, "_self");
}