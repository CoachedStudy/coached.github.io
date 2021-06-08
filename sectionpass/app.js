var windowPass = "";
var whereWeAre = "";
var nextPageLink;

whereWeAre = localStorage.getItem("whereWeAre");

window.onload = function(){
    
if (whereWeAre == "passWelcome"){
    windowPass = "opensesame";    
    nextPageLink = "../1.sectionwelcome/" 
    console.log (localStorage.getItem("whereWeAre"));
} else if (whereWeAre == "passLife") {
        windowPass = "vita"; 
        nextPageLink = "../2.sectionasislife/"
    console.log (localStorage.getItem("whereWeAre"));
} else if (whereWeAre == "passAsIsKnowledge") {
        windowPass = "dimmi"; 
        nextPageLink = "../3.sectionasisknowledge/"
    console.log (localStorage.getItem("whereWeAre"));
} else if (whereWeAre == "passAsIsAbilities") {
    windowPass = "abile"; 
        nextPageLink = "../4.sectionasisabilities/"
    console.log (localStorage.getItem("whereWeAre"));
} else if (whereWeAre == "passToBeLife") {
    windowPass = "vitafuturo";  
        nextPageLink = "../5.sectiontobelife/"
    console.log (localStorage.getItem("whereWeAre"));
} else if (whereWeAre == "passToBeKnowledge") {
    windowPass = "skillfuturo";  
        nextPageLink = "../6.sectiontobeknowledge/"
    console.log (localStorage.getItem("whereWeAre"));
} else if (whereWeAre == "passToBeAbilities") {
    windowPass = "abileinfuturo";  
        nextPageLink = "../7.sectiontobeabilities/"
    console.log (localStorage.getItem("whereWeAre"));
} else if (whereWeAre == "passBetterKnowledge") {
    windowPass = "saperemeglio";  
        nextPageLink = "../8.sectionbetterknowledge/"
    console.log (localStorage.getItem("whereWeAre"));
} else if (whereWeAre == "passBetterKnowledge") {
    windowPass = "saperemeglio";  
        nextPageLink = "../8.sectionbetterknowledge/"
    console.log (localStorage.getItem("whereWeAre"));
} else if (whereWeAre == "passBetterAbilities") {
    windowPass = "abilemeglio";  
        nextPageLink = "../9.sectionbetterabilities/"
    console.log (localStorage.getItem("whereWeAre"));
}


document.getElementById("sectionpassword").innerHTML = localStorage.getItem("whereWeAre") + ": (" + windowPass + ")";
}

//-------------Enter Button-----------------
var input = document.getElementById("welcomeInput");
input.addEventListener("keyup", function(event) {
if (event.keyCode === 13) {
event.preventDefault();
document.getElementById("welcomeButton").click();
}
});
//---------------------------------------------

function checkPass() {
var welcomeKeyword = document.getElementById("welcomeInput").value

if (welcomeKeyword == windowPass) {
    window.open(nextPageLink, "_self");
    console.log (nextPageLink);
console.log (whereWeAre);
}}