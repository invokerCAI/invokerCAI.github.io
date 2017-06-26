var divNav = document.getElementById("h_l_nav").children;


var arr_nav=[];	
	
for(var i=0;i<divNav.length;i++){
	var l = divNav[i].offsetLeft;
	arr_nav[i] = l;
}

for(var i=0;i<arr_nav.length;i++){
	divNav[i].style.position = "absolute";
	divNav[i].style.left = arr_nav[i]+"px";
}


