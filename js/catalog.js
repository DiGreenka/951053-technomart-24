var cart = document.querySelector(".buy");
var popupcart = document.querySelector(".add-cart-invisible");
var closecart = document.querySelector(".close-cart");
var continuecart = document.querySelector(".continue");
cart.addEventListener("click", function(evt) {
	evt.preventDefault();
	popupcart.classList.add("add-cart-show");
});
closecart.addEventListener("click", function(evt) {
	evt.preventDefault();
	popupcart.classList.remove("add-cart-show");
});
continuecart.addEventListener("click", function(evt) {
	evt.preventDefault();
	popupcart.classList.remove("add-cart-show");
});