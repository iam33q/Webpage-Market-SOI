var countryLanguages= {english:"english",hindi:"india",urdu:"pakistan"} // Data
var countryPhones 	= {english:"+44 7123456789",india:"+91 8888888888",pakistan:"+92 8888888888"}
var imageUrls 		= {english: "english.webp",india:"india.png",pakistan:"pakistan.png"}
$(document).ready(function () {
	document.getElementById("country-select").addEventListener('change', function(){
			var selection = document.getElementById("country-select").value; // Language dropdown value
			document.getElementById("flag-image").src = `./images/${imageUrls[countryLanguages[selection]]}`; //
			document.getElementById("telephone-link-wrapper").innerText = countryPhones[countryLanguages[selection]];
		});
	document.getElementById("scrollUp").addEventListener("click", () => {
		window.scroll({
			top: 0,
			left: 0,
			behavior: "smooth",
		});
	});
});

