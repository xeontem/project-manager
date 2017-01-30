var map =  document.getElementById('map');
var mapsrc = map.src;
var hidebutton = document.getElementById('hide');
var showbutton = document.body.children[3];
hidebutton.onclick = function(){
	map.src = null;
};		
showbutton.onclick = function(){
	map.src = mapsrc;
};			