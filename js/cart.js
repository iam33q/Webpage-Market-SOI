function loadProducts(list) {
	var storage = JSON.parse(localStorage.getItem(list));
	var products = storage.Products;
	let cards = '';
	let totalprice = 0;
	let totalpricediscounted = 0;
	let totalproducts=0;
	for(i of Object.keys(products)){
		console.log(products[i]);
		let product=products[i];
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
		document.querySelector('#productsListArea').innerHTML += 
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
				    <label for='update-cart-${product.id}'>Quantity:<input type="number" id='update-cart-${product.id}' value="${product.Quantity}"><button onclick="UpdateCart(${product.id})">Update Cart</button></label>
			    	
			    </span>
			    <span>
					<button onclick="RemoveFromList(${product.id}, 'cart')">Remove From Cart</button>
					<button onclick="AddToList(${product.id}, 'Wishlist')">Add to Wishlist</button>					
			    </span>
		    </div>
		</section>`;
	};
	document.getElementById('totalprice').innerText +="$"+ totalprice.toFixed(2);
	document.getElementById('totaldiscount').innerText += Number.parseFloat(totalprice-totalpricediscounted).toFixed(2);
	document.getElementById('totalproducts').innerText += totalproducts;
	document.getElementById('totalpricediscounted').innerText += totalpricediscounted.toFixed(2);
};	
function UpdateCart(id){
	var qty = document.querySelector(`#update-cart-${id}`).value;
	console.log(id+"\n"+qty);
	var products = JSON.parse(localStorage.getItem('cart'));
	var cart = products.Products;
	if(qty == 0) delete cart[id];
	else cart[id].Quantity = qty; 
	localStorage.setItem('cart',JSON.stringify(products));
  	alert("Cart Updated!")
  	location.reload();
}
function placeOrder(){
	setTimeout(function() {
		var cart = JSON.parse(localStorage.getItem('cart'));
		var orders = JSON.parse(localStorage.getItem('PreviousOrders'));
		orders[new Date(Date.now()).toString()]=cart; // exact date and time is unique unless two orders are made within the same millisecond
		localStorage.setItem('cart', JSON.stringify({
	      'Products':{},
	      'Coupons':{}
	    }));
		localStorage.setItem('PreviousOrders', JSON.stringify(orders));
		window.open("./order.html","_self");
	}, 0) // Shifting this code in the callback stack ensures that it actually executes.
	alert("Your order has been placed! You will now be redirected.");
};
loadProducts('cart');