var write = document.querySelector(".button-contact-item");
var popupwrite = document.querySelector(".write-us-invisible");
var closewrite = document.querySelector(".close-write-us");
write.addEventListener("click", function(evt) {
	evt.preventDefault();
	popupwrite.classList.add("write-us-show");
});
closewrite.addEventListener("click", function(evt) {
	evt.preventDefault();
	popupwrite.classList.remove("write-us-show");
});
var map = document.querySelector(".map");
var popupmap = document.querySelector(".map-invisible");
var closemap = document.querySelector(".close-map");
map.addEventListener("click", function(evt) {
	evt.preventDefault();
	popupmap.classList.add("map-show");
});
closemap.addEventListener("click", function(evt) {
	evt.preventDefault();
	popupmap.classList.remove("map-show");
});