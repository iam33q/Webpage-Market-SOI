function addToCart(id){ //Loo
  var card = document.getElementById(id);
  var store = JSON.parse(localStorage.getItem('ProductsList'));
  var products = store.Products;
  var cart = JSON.parse(localStorage.getItem('cart'));
  products.forEach(prod => {
    if(prod.id == id){
      prod['Quantity']=1;
      cart.Products[id]=prod;
    }
  });
  localStorage.setItem('cart',JSON.stringify(cart));
  if(confirm("Product added to cart! Press OK to go to cart.")) window.open("./cart.html", '_self');
}
function loadProducts(list) {
  const products = JSON.parse(localStorage.getItem(list)).Products;
	console.log(products);
  let cards = '';
	products.forEach(product => {
	let isNewDiv = '';
	if (product.isNew === 'TRUE') isNewDiv = `<div class="new-product"><span><i class="fa fa-star checked"></i>New<i class="fa fa-star checked"></i></span></div>`;;
	let stars = '';
	const ratings = Math.floor(+product.ratings);
	for (let i = 1; i <= 5; i++) {
		if (i <= ratings) {stars = stars + '<i class="fa fa-star checked"></i>'}
    else {stars = stars + '<i class="fa fa-star-o"></i>'};
	};
	cards = 
	`<section class="prod-list-card" id="${product.id}" >
	    <img class="prod-img" src="./images/${product.imageName}.png">
	    <div class="hover-icons">
	        <a href="./cart.html"><img src="./images/cart.png"></a>
	        <a href="#"><img src="./images/view.png"></a>
	        <a href="./cart.html"><img src="./images/wishlist.png"></a>
	    </div>
	    <div class="list-product-details">
		    <h3>${isNewDiv}<a href="#">${product.name}</a></h3>
		    <h4><div>$${Number.parseFloat(product.priceAfterDiscount-0.01).toFixed(2)}
		    </div><span>$${Number.parseFloat(product.price-0.01).toFixed(2)}</span></h4>
		    <div class="prod-list-ratings">
				${stars}
		    </div>
			<button onclick="addToCart(${product.id})">Add to Cart</button>
      <button onclick="addToWishlist(${product.id})">Add to Wishlist</button>
			<button>Buy Now</button>
	    </div>
	</section>
	`
;	document.querySelector('#productsListArea').innerHTML += cards;
	});
};		
loadProducts('ProductsList');