/*

User Story 2: Change the flag and contact details with respect to the selected country name. 
Add id to the associated elements.
*/

var countryLanguages= {english:"english",hindi:"india",urdu:"pakistan"} // Data
var countryPhones 	= {english:"+44 7123456789",india:"+91 8888888888",pakistan:"+92 8888888888"}
var imageUrls 		= {english: "english.webp",india:"india.png",pakistan:"pakistan.png"}

document.getElementById("country-select").addEventListener('change', function(){
	var selection = document.getElementById("country-select").value; // Language dropdown value
	document.getElementById("flag-image").src = `./images/${imageUrls[countryLanguages[selection]]}`; //
	document.getElementById("telephone-link-wrapper").innerText = countryPhones[countryLanguages[selection]];
});
/*
User Story 3: Create a nav button at the footer to scroll to the top of the webpage by giving id in 
the html file and writing the required css and js as below.
*/
document.getElementById("scrollUp").addEventListener("click", () => {
	window.scroll({
		top: 0,
		left: 0,
		behavior: "smooth",
	});
});