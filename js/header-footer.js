$(document).ready(function () {
document.getElementById('main-header').innerHTML = `
		<header>
			<header>	
	            <nav class="top-navigation">
	            	<div id="top-navigation-left">
		        		<div class="social-media-icons">
			            	<div class="sm-icon">
			            		<i class="fa fa-facebook" aria-hidden="true"></i>
			            	</div>
			            	<div class="sm-icon">
			            		<i class="fa fa-youtube" aria-hidden="true"></i>
			            	</div>
			            	<div class="sm-icon">
			            		<i class="fa fa-twitter" aria-hidden="true"></i>
			            	</div>
		        		</div>
		        		<div class="search-wrapper">   
							<input type="text" placeholder=" Search Products and Brands" id="search">   
							<i class="fa fa-search" aria-hidden="true"></i>
						</div>
					</div>
	            	<div id="top-navigation-right">
						<div class="telephone-wrapper">
							<div id="telephone-link-wrapper"><a>+91 9008008085</a></div>				
							<div><i class="fa fa-phone" aria-hidden="true"></i></div>
						</div>
						<div class="links">
							<div><a href="download.html">Download App</a></div>			
							<div><a href="./sell.html">Sell on Company</a></div>
						</div>
						<div class="flag">
							<img id="flag-image" src="./images/india.png">
						</div>
						<div class="country-wrapper">
							<select id="country-select" name="language">
								<option value="hindi">Hindi</option>
								<option value="english">English</option>
								<option value="urdu">Urdu</option>
							</select>
						</div>
	            	</div>
	            </nav>
	        </header>
            <nav class="main-navigation">			    
        		<div id="main-navigation-left">
            		<a href="./home.html"><img src="./images/logo.png"></a>
            		<a href="./home.html">Home</a>
            		<a href="./categories.html">Categories</a>
            		<a href="./latest.html">Latest</a>
            		<a href="./blog.html">Blog</a>
            		<a href="./pages.html">Pages</a>
            		<a href="./contact.html">Contact</a>            			
        		</div>
        		<div id="main-navigation-right">
					<a href="./wishlist.html"><img src="./images/wishlist-new.png"></a>
            		<a href="./cart.html"><img src="./images/cart-new.png"></a>
					<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
					  Sign In
					</button>
				</div>
        	</nav>
        </header>
        `;
        document.getElementById('main-footer').innerHTML = `
		<footer>
		    <div>
		        <div class="footer-list">
		            <h6>POLICY INFO</h6>
		            <a href="privacy.html">Privacy Policy</a>
		            <a href="sale-terms.html">Terms of Sale</a>
		            <a href="terms-of-service.html">Terms of Use</a>
		            <a href="report.html">Report Abuse & Takedown Policy</a>
		        </div>
		        <div class="footer-list">
		            <h6>COMPANY</h6>
		            <a href="about.html">Abour Us</a>
		            <a href="our-values.html">Core Values</a>
		            <a href="careers.html">Careers</a>
		            <a href="blog.html">Blog</a>
		            <a href="sitemap.html">Sitemap</a>
		        </div>
		        <div class="footer-list">
		        	<h6>SNAPDEAL BUSINESS</h6>
		        	<a href="">Shopping App</a>
		        	<a href="">Sell on Snapdeal</a>
		        	<a href="">Advertise on Snapdeal</a>
		        	<a href="">Media Enquiries</a>
		        	<a href="">Be an Affiliate</a>
		        </div>
		        <div class="footer-list">
		        	<h6>NEED HELP?</h6>
		        	<a href="">FAQ</a>
		        	<a href="">Contact Us</a>
		        	<a href="">Online Shopping</a>
		        </div>		    
		        <div class="footer-list">
		        	<h6>SUBSCRIBE</h6>
		        	<div id="subscribe-box">
		        		<input type="text" name="subscribe" placeholder="Your email address"><button>Subscribe</button>
		        	</div>
		        	Register now to get updates on promotions and coupons, or 
		        	<a style="color: blue; text-decoration: underline;" href="download.html">Download App</a>
		        </div>		    
		        <a id="scrollUp">
					Scroll Back Up:<i class="fa fa-arrow-up"></i>
				</a>
		    </div>
			<section>
			    <div><h6>Copyright © All rights reserved</h6></div>
			    <div class="social-media">
			        <i class="fa fa-twitter" aria-hidden="true"></i>
			        <i class="fa fa-facebook" aria-hidden="true"></i>
			        <i class="fa fa-behance" aria-hidden="true"></i>
			        <i class="fa fa-globe" aria-hidden="true"></i>
			    </div>
			</section>		
		</footer>
		`;	
});