var    width = window.innerWidth;
var    height = window.innerHeight;
var    target = {x: 0, y: height};

largeHeader = document.getElementById('large-header');
largeHeader.style.height = height+'px';




function resize(){
	largeHeader.style.height = height+'px';
	largeHeader.style.width = width+'px';
}
window.addEventListener('resize', resize);

// init
addListener();
