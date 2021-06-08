var ageWelcome;
var knowledgeLevelDescriptions = ["20-30", "30-40", "40-50", "50-60", "60+"];
var ageWelcomeMin = 0;
var ageWelcomeMax = 4;

function emptyAllObjects(){
  localStorage.setItem('welcomeData', JSON.stringify(""));
  localStorage.setItem('asisLifeData', JSON.stringify(""));
  localStorage.setItem('asisKnowledgeData', JSON.stringify(""));
  localStorage.setItem('asisAbilitiesData', JSON.stringify(""));
  localStorage.setItem('tobeLifeData', JSON.stringify(""));
  localStorage.setItem('tobeKnowledgeData', JSON.stringify(""));
  localStorage.setItem('tobeAbilitiesData', JSON.stringify(""));
}

window.onload = function(){
  ageWelcome = 0;
  document.getElementById("agewelcomelabel").innerHTML = knowledgeLevelDescriptions[ageWelcome];
  console.log(ageWelcome);
  emptyAllObjects();
}


function ageWelcomeUp(){
if (ageWelcome <ageWelcomeMax){
  ageWelcome++;
  console.log(ageWelcome);
  document.getElementById("agewelcomelabel").innerHTML = knowledgeLevelDescriptions[ageWelcome];
}

}

function ageWelcomeDown(){
  if (ageWelcome >ageWelcomeMin){
    ageWelcome--;
    console.log(ageWelcome);
    document.getElementById("agewelcomelabel").innerHTML = knowledgeLevelDescriptions[ageWelcome];
  }
  
}

function saveData(){
var welcomeData = {
  name: document.getElementById("name").value,
  profession: document.getElementById("profession").value,
  city: document.getElementById("city").value,
  gender: document.getElementById("gender").value,
  age: document.getElementById("agewelcomelabel").innerHTML
};

//----------------Save the Object----------------------
// Put the object into storage
localStorage.setItem('welcomeData', JSON.stringify(welcomeData));

// Retrieve the object from storage
var retrievedObject = localStorage.getItem('welcomeData');

console.log('retrievedObject: ', JSON.parse(retrievedObject));
//------------------------------------

}


function nextPage(){
  saveData();
   localStorage.setItem("whereWeAre", "passLife");
   nextPageLink = "../sectionpass/";
   console.log ("next")
   window.open(nextPageLink, "_self");
}