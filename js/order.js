function loadProducts(list) {
	var storage = JSON.parse(localStorage.getItem(list));
	var products = storage.Products;
	let cards = '';
	let totalprice = 0;
	let totalpricediscounted = 0;
	let totalproducts=0;
	for(i of Object.keys(products)){
		let product=products[i];
		console.log(product);
		if(product['Quantity'] == 0 ) continue;
		totalprice += Number.parseInt(product['price'])*Number.parseInt(product['Quantity']);
		totalpricediscounted += Number.parseInt(product['priceAfterDiscount'])*Number.parseInt(product['Quantity']);
		totalproducts += Number.parseInt(product['Quantity']);
		let isNewDiv = '';
		let stars = '';
		const ratings = Math.floor(+product.ratings);
		for (let i = 1; i <= 5; i++) {
			if (i <= ratings) {
			stars = stars + '<i class="fa fa-star checked"></i>';
			} else {
			stars = stars + '<i class="fa fa-star-o"></i>';
			}};
		cards = 
		`<section class="prod-list-card" id="${product.id}" >
		    <img class="prod-img" src="./images/${product.imageName}.png">
		    <div class="hover-icons">
		        <a href="./cart.html"><img src="./images/cart.png"></a>
		        <a href="#"><img src="./images/view.png"></a>
		        <a href="#"><img src="./images/wishlist.png"></a>
		    </div>
		    <div class="list-product-details">
			    <h3><a href="#">${product.name}</a></h3>
			    <h4><div>$${Number.parseFloat(product.priceAfterDiscount).toFixed(2)}
			    </div><span>$${Number.parseFloat(product.price).toFixed(2)}</span></h4>
			    <div class="prod-list-ratings">
					${stars}
			    </div>
			    <span>
				    <label for='update-cart-${product.id}'>Quantity:<input type="number" id='update-cart-${product.id}' value="${product.Quantity}"></label>
			    </span>
			    <span>
			    </span>
		    </div>
		</section>`;
		document.querySelector('#productsListArea').innerHTML += cards;
	};
	var shippingdate = new Date(Date.now()+1.21e9).toDateString();
	document.querySelector('#shippingdate').innerHTML += shippingdate;
	//shippingdate.getUTCMonth() +" "+shippingdate.getDay();
	document.querySelector('#totalprice').innerHTML +="$"+Number.parseInt(totalprice).toFixed(2);
	document.querySelector('#totalpricediscounted').innerHTML +="$"+Number.parseInt(totalpricediscounted).toFixed(2);
	document.querySelector('#totaldiscount').innerHTML +="$"+(Number.parseInt(totalprice).toFixed(2)-Number.parseInt(totalpricediscounted).toFixed(2));
	document.querySelector('#totalproducts').innerHTML += totalproducts;
};	
function loadProductList(){
  if(!localStorage.getItem('productsLoaded')){
    localStorage.setItem('cart', JSON.stringify({
      'Products':{},
      'Coupons':{}
    }));
    localStorage.setItem('productsLoaded',true);
    console.log("Products loaded.");
  }
  console.log("Products list already present.");
}
loadProducts('order');