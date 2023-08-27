function loadProducts(list) {
	var storage = JSON.parse(localStorage.getItem(list));
	var products = storage.Products;
	let cards = '';
	let totalprice = 0;
	let totalpricediscounted = 0;
	let totalproducts=0;
	for(i of Object.keys(products)){
		let product=products[i];
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
		cards += 
		`<section class="prod-list-card" id="${product.id}" >
		    <img class="prod-img" src="./images/${product.imageName}.png">
		    <div class="hover-icons">
		        <a href="./cart.html"><img src="./images/cart.png"></a>
		        <a href="#"><img src="./images/view.png"></a>
		        <a href="./cart.html"><img src="./images/wishlist.png"></a>
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
						<button onclick="UpdateCart(${product.id})">Update Cart</button><!-- Insert 0 to delete entry -->
			    </span>
			    <button onclick="addToWishlist(${product.id})">Add to Wishlist</button>
		    </div>
		</section>`;
		document.querySelector('#productsListArea').innerHTML += cards;
	};
	document.querySelector('#totalprice').innerHTML +="$"+Number.parseInt(totalprice).toFixed(2);
	document.querySelector('#totalpricediscounted').innerHTML +="$"+Number.parseInt(totalpricediscounted).toFixed(2);
	document.querySelector('#totaldiscount').innerHTML +="$"+(Number.parseInt(totalprice).toFixed(2)-Number.parseInt(totalpricediscounted).toFixed(2));
	document.querySelector('#totalproducts').innerHTML += totalproducts;
};	
function UpdateCart(id){
	var qty = document.querySelector(`#update-cart-${id}`).value;
	console.log(qty);
	var products = JSON.parse(localStorage.getItem('cart'));
	var cart = products.Products; console.log(cart);
	switch(qty){
		case 0: delete cart[id]; break;
		default: cart[id].Quantity = qty; break;
	}
  	localStorage.setItem('cart',JSON.stringify(products));
  	alert("Cart Updated!")
  	location.reload();
}

function placeOrder(){
	alert("Your order has been placed! You will now be redirected.")
	var cart = JSON.parse(localStorage.getItem('cart'));
	var orders = JSON.parse(localStorage.getItem('PreviousOrders'));
	orders[new Date(Date.now().getMilliseconds()).toString()]=cart; // UNIX date used as order ID because it's pretty unique
	localStorage.setItem('cart', JSON.stringify({
      'Products':{},
      'Coupons':{},
    }));
		localStorage.setItem('PreviousOrders', JSON.stringify(orders));
	var win = window.open("./order.html");
};
loadProductList();
loadProducts('cart');