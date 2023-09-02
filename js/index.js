let productsListUrl = { "Products": [ { "id": "1", "name": "Awesome Product 1", "price": "28.4", "priceAfterDiscount": "25", "imageName": "product1", "isNew": "TRUE", "ratings": "3.2" }, { "id": "2", "name": "Cool Product 2", "price": "63.9", "priceAfterDiscount": "40", "imageName": "product2", "isNew": "FALSE", "ratings": "4.8" }, { "id": "3", "name": "Amazing Product 3", "price": "26.4", "priceAfterDiscount": "19", "imageName": "product3", "isNew": "FALSE", "ratings": "2.7" }, { "id": "4", "name": "Huge Product 4", "price": "58.1", "priceAfterDiscount": "50", "imageName": "product4", "isNew": "TRUE", "ratings": "4.1" }, { "id": "5", "name": "Tiny Product 5", "price": "58.3", "priceAfterDiscount": "48", "imageName": "product5", "isNew": "FALSE", "ratings": "5" }, { "id": "6", "name": "Expensive Product 6", "price": "82.4", "priceAfterDiscount": "77", "imageName": "product6", "isNew": "TRUE", "ratings": "4.4" } ]};
var countryLanguages= {english:"english",hindi:"india",urdu:"pakistan"} // Data
var countryPhones 	= {english:"+44 7123456789",india:"+91 8888888888",pakistan:"+92 8888888888"}
var imageUrls 		= {english: "english.webp",india:"india.png",pakistan:"pakistan.png"}
$(document).ready(function () {
	document.getElementById("country-select").addEventListener('change', function(){
		document.getElementById("flag-image").src = `./images/${imageUrls[countryLanguages[document.getElementById("country-select").value]]}`; //
		document.getElementById("telephone-link-wrapper").innerText = countryPhones[countryLanguages[document.getElementById("country-select").value]];
	});
	document.getElementById("scrollUp").addEventListener("click", () => {
		window.scroll({top: 0,left: 0,behavior: "smooth",});
	});
});
function changeShow(e) {
    e = e || window.event;
    var target = e.target || e.srcElement;	
    var container = target.nextSibling.nextSibling;
    if (container.style.display !== 'none'){container.style.display = "none";target.innerText = "Show"} 
    else { container.style.display = 'flex';target.innerText = "Hide"};
}
 function AddToList(id,list){
  console.log("ID: "+id+"\nList: "+list);
  var store = JSON.parse(localStorage.getItem('ProductsList'));
  var prodlist = JSON.parse(localStorage.getItem(list));
  var products = store.Products;
  console.log(products);
  products.forEach(prod => {
    console.log(prod);
    if(prod.id == id) {
      prodlist.Products[id]=prod;
      console.log("Product appended.")
      localStorage.setItem(list,JSON.stringify(prodlist));
      console.log(JSON.parse(localStorage.getItem(list)));
      if(confirm("Product added! Press OK to go to "+list)){
        if(list == 'cart') window.open("./cart.html", '_self');
        else if (list == 'Wishlist') window.open("./wishlist.html", '_self');
      }    
    }    
  });
  console.log('Product not found.')
 }
function RemoveFromList(id,list){
  var products = JSON.parse(localStorage.getItem(list));
  delete products.Products[id];
  localStorage.setItem(list,JSON.stringify(products));
  if(confirm("Your "+list+" has been updated! Reload?")) location.reload();
}
function loadProductLists(){
  localStorage.setItem('ProductsList',JSON.stringify(productsListUrl));
  if(!localStorage.getItem('productsLoaded')){
    localStorage.setItem('cart', JSON.stringify({'Products':{},'Coupons':{}}));
    localStorage.setItem('PreviousOrders','{}');
    localStorage.setItem('Wishlist',JSON.stringify({'Products':{}}));
    localStorage.setItem('productsLoaded',true);
    console.log("Products loaded.");
  }
  else console.log("Products list present.");
}
loadProductLists();