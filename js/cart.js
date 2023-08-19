function loadProducts(list) {
	var storage = JSON.parse(localStorage.getItem(list));
	var products = storage.Products;
	let cards = '';
	let totalprice = 0;
	let totalproducts=0;
	for(i of Object.keys(products)){
		let product=products[i];
		console.log(product);
		if(product['Quantity'] == 0 ) continue;
		totalprice += Number.parseInt(product['priceAfterDiscount']);
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
			    <h4><div>$${Number.parseFloat(product.priceAfterDiscount-0.01).toFixed(2)}
			    </div><span>$${Number.parseFloat(product.price-0.01).toFixed(2)}</span></h4>
			    <div class="prod-list-ratings">
					${stars}
			    </div>
			    <span>
				    <label for='update-cart-${product.id}'>Qty: ${product.Quantity}</label>
					<input type="number" id='update-cart-${product.id}' value="${product.Quantity}">
			    </span>
				<button onclick="UpdateCart(${product.id})">Update Cart</button><!-- Insert 0 to delete entry -->
				<button>Buy Now</button>
		    </div>
		</section>`;
		document.querySelector('#productsListArea').innerHTML += cards;
	};
	console.log(totalprice+" "+totalproducts)
	document.querySelector('#totalprice').innerHTML += totalprice;
	document.querySelector('#totalproducts').innerHTML += totalproducts;
};	
function UpdateCart(id){
	var qty = document.querySelector(`#update-cart-${id}`).value;
	var products = JSON.parse(localStorage.getItem('cart'));
	var cart = products.Products; console.log(cart);
	switch(qty){
		case 0: delete cart[id]; break;
		default: cart[id].Quantity = qty; break;
	}
  	localStorage.setItem('cart',JSON.stringify(products));
  	location.reload();
}
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
loadProductList();
loadProducts('cart');
