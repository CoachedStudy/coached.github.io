var windowPass = "";
var whereWeAre = "";
var nextPageLink;

whereWeAre = localStorage.getItem("whereWeAre");

function welcomeFunction() {
var welcomeKeyword = document.getElementById("welcomeInput").value


if (whereWeAre == "passWelcome"){
    windowPass = "opensesame";
    localStorage.setItem("whereWeAre", "passLife");
        nextPageLink = "../sectionwelcome/" 
    console.log (localStorage.getItem("whereWeAre"));
} else if (whereWeAre == "passLife") {
    windowPass = "vita"; 
    localStorage.setItem("whereWeAre", "passAsIs");  
        nextPageLink = "../sectionlife/"
    console.log (localStorage.getItem("whereWeAre"));
} else if (whereWeAre == "passAsIs") {
    windowPass = "dimmi"; 
    localStorage.setItem("whereWeAre", "passToBe");  
        nextPageLink = "../sectionasis/"
    console.log (localStorage.getItem("whereWeAre"));
} else if (whereWeAre == "passToBe") {
    windowPass = "comefaremo"; 
    localStorage.setItem("whereWeAre", "passReflect");  
        nextPageLink = "../sectiontobe/"
    console.log (localStorage.getItem("whereWeAre"));
} else if (whereWeAre == "passReflect") {
    windowPass = "riflettiamoci"; 
    localStorage.setItem("whereWeAre", "passDai");  
        nextPageLink = "../sectionreflect/"
    console.log (localStorage.getItem("whereWeAre"));
}else if (whereWeAre == "passDai") {
    windowPass = "riflettiamoci"; 
    localStorage.setItem("whereWeAre", "passEnd");  
        nextPageLink = "../sectionEnd/"
    console.log (localStorage.getItem("whereWeAre"));
}


if (welcomeKeyword == windowPass) {
    window.open(nextPageLink, "_self");
    console.log (nextPageLink);
//window.location.replace("./sectionwelcome/"); //open in the same window - form element blocks it
console.log (whereWeAre);
}}