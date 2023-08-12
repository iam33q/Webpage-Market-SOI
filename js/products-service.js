let productsListUrl = {
  "Products": [
    {
      "id": "1",
      "name": "Awesome Product 1",
      "price": "28.4",
      "priceAfterDiscount": "25",
      "imageName": "product1",
      "isNew": "TRUE",
      "ratings": "3.2"
    },
    {
      "id": "2",
      "name": "Cool Product 2",
      "price": "63.9",
      "priceAfterDiscount": "40",
      "imageName": "product2",
      "isNew": "FALSE",
      "ratings": "4.8"
    },
    {
      "id": "3",
      "name": "Amazing Product 3",
      "price": "26.4",
      "priceAfterDiscount": "19",
      "imageName": "product3",
      "isNew": "FALSE",
      "ratings": "2.7"
    },
    {
      "id": "4",
      "name": "Huge Product 4",
      "price": "58.1",
      "priceAfterDiscount": "50",
      "imageName": "product4",
      "isNew": "TRUE",
      "ratings": "4.1"
    },
    {
      "id": "5",
      "name": "Tiny Product 5",
      "price": "58.3",
      "priceAfterDiscount": "48",
      "imageName": "product5",
      "isNew": "FALSE",
      "ratings": "5"
    },
    {
      "id": "6",
      "name": "Expensive Product 6",
      "price": "82.4",
      "priceAfterDiscount": "77",
      "imageName": "product6",
      "isNew": "TRUE",
      "ratings": "4.4"
    }
  ]};
function loadProducts(productsListUrl) {
	console.log("Loading JSON...")
	const products = productsListUrl.Products;
	console.log(productsListUrl);
	let cards = '';
	products.forEach(product => {
	let isNewDiv = '';
	if (product.isNew === 'TRUE') {
	isNewDiv = `<div class="new-product">
	<span><i class="fa fa-star checked"></i>New<i class="fa fa-star checked"></i></span>
	</div>`;
	};
	let stars = '';
	const ratings = Math.floor(+product.ratings);
	for (let i = 1; i <= 5; i++) {
		if (i <= ratings) {
		stars = stars + '<i class="fa fa-star checked"></i>';
		} else {
		stars = stars + '<i class="fa fa-star-o"></i>';
		}
	};
	cards = 
	`<section class="prod-list-card" id="${product.id}" >
	    <img class="prod-img" src="./images/${product.imageName}.png">
	    <div>
	        <img src="./images/cart.png">
	        <img src="./images/view.png">
	        <img src="./images/wishlist.png">
	    </div>
	    <div class="list-product-details">
		    <h3>${isNewDiv}<a href="#">${product.name}</a></h3>
		    <h4><div>$${Number.parseFloat(product.priceAfterDiscount-0.01).toFixed(2)}
		    </div><span>$${Number.parseFloat(product.price-0.01).toFixed(2)}</span></h4>
		    <div class="prod-list-ratings">
				${stars}
		    </div>
			<button>Add to Cart</button>
			<button>Buy Now</button>
	    </div>
	</section>
	`;
	document.querySelector('#productsListArea').innerHTML += cards;
});
};		
loadProducts(productsListUrl);