var advancement ="";
var windowPass = "";
var whereWeAre = "";

localStorage.setItem("whereWeAre", "testPage")
advancement = localStorage.getItem("whereWeAre");

function welcomeFunction() {
var welcomeKeyword = document.getElementById("welcomeInput").value

if (welcomeKeyword == "benvenuti"){
    localStorage.setItem("whereWeAre", "passWelcome")
    nextPageLink = "./sectionpass/";
    window.open(nextPageLink, "_self");
}}