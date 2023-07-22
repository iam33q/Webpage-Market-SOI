var countryLanguages= {english:"english",hindi:"india",urdu:"pakistan"} // Data
var countryPhones 	= {english:"+44 7123456789",india:"+91 8888888888",pakistan:"+92 8888888888"}
var imageUrls 		= {english: "english.webp",india:"india.png",pakistan:"pakistan.png"}
$(document).ready(function () {
	document.getElementById("country-select").addEventListener('change', function(){
		document.getElementById("flag-image").src = `./images/${imageUrls[countryLanguages[document.getElementById("country-select").value]]}`; //
		document.getElementById("telephone-link-wrapper").innerText = countryPhones[countryLanguages[document.getElementById("country-select").value]];
	});
	document.getElementById("scrollUp").addEventListener("click", () => {
		window.scroll({
			top: 0,
			left: 0,
			behavior: "smooth",
		});
	});
});
function changeShow(e) {
    e = e || window.event;
    var target = e.target || e.srcElement;	
    var container = target.nextSibling.nextSibling;
    if (container.style.display !== 'none'){container.style.display = "none";target.innerText = "Show"} 
    else { container.style.display = 'flex';target.innerText = "Hide"};
}