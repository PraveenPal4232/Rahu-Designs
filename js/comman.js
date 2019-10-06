document.getElementById("toggle").addEventListener("click", navFunction);
		function navFunction() {
		var element = document.getElementById("my_nav");
		element.classList.toggle("nav_open");
	}
	var prevScrollpos = window.pageYOffset;
	function hide_nav() {
	var currentScrollPos = window.pageYOffset;
  	if (prevScrollpos > currentScrollPos) {
    document.getElementById("sticky").style.top = "0";
  	} else {
	if(window.innerWidth >= 768){
		document.getElementById("sticky").style.top = "-142px";	
	}
	else{
		document.getElementById("sticky").style.top = "-110px";
	}
  	}
  prevScrollpos = currentScrollPos;
	}
	var elmnt = document.querySelector("html");
	window.onscroll = function() {myFunction()};
	function myFunction() {
		hide_nav();
	}