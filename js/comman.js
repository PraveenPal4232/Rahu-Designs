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
  if (document.body.scrollTop > window || document.documentElement.scrollTop > window.innerHeight) {
	document.getElementById("sticky").style.backgroundColor = "#fff";
	/*
	document.getElementById("logo").firstElementChild.style.color = "#191437";
	document.getElementById("toggle").children[0].style.backgroundColor = "#191437";
	document.getElementById("toggle").children[1].style.backgroundColor = "#191437";
	document.getElementById("toggle").children[2].style.backgroundColor = "#191437";
	*/
  }
	  else{
		document.getElementById("sticky").style.backgroundColor = "transparent";
		/*
		document.getElementById("logo").firstElementChild.style.color = "#fff";
		document.getElementById("toggle").children[0].style.backgroundColor = "#fff";
		document.getElementById("toggle").children[1].style.backgroundColor = "#fff";
		document.getElementById("toggle").children[2].style.backgroundColor = "#fff";
		*/
	  }
	}