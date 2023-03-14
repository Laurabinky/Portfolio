console.log("hi");

// Navigatie
// menu openen
var openButton = document.querySelector("header > button");

openButton.addEventListener("click", menuOpenen);

function menuOpenen() {
	var deNav = document.querySelector("header > nav");
	
	deNav.classList.add("openen");
}


// menu sluiten 
var sluitButton = document.querySelector("header nav button");

sluitButton.addEventListener("click", menuSluiten);

function menuSluiten() {
	var deNav = document.querySelector("header > nav");
	
	deNav.classList.remove("openen");
}
