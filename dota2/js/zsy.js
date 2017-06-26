var banner = document.getElementsByClassName("banner_div")[0];
var banner_img = banner.getElementsByTagName("div");
var icon_left = document.getElementsByClassName("icon_left")[0];
var icon_rigth = document.getElementsByClassName("icon_rigth")[0];
var icon_li = document.getElementsByClassName("banner_yuandian")[0].getElementsByTagName("li");
var banner_timer1 = null;
var banner_onoff = true;
var distance = document.getElementsByClassName("banner")[0].offsetWidth;
var num = 0;


if(window.innerWidth <=1200) {
	document.body.style.width = 1200 + "px";
	document.getElementsByTagName("header")[0].style.width = 1200 + "px";
}else{
	document.body.style.width = "100%";
	document.getElementsByTagName("header")[0].style.width = "100%";
}

window.onresize = function() {

	var daxiao;
	if(window.innerWidth <= 1200) {
		document.body.style.width = 1200 + "px";
		document.getElementsByTagName("header")[0].style.width = 1200 + "px";
		daxiao = 1200;
	}else{ 
		
		document.body.style.width = "100%";
		document.getElementsByTagName("header")[0].style.width = "100%";
		daxiao= document.getElementsByTagName("header")[0].offsetWidth;
		
	}
	distance = daxiao;
	
	for(var i = 0; i < banner_img.length; i++) {
		banner_img[i].style.width = daxiao + "px";
	}

	banner.style.transition = "";

	cBanner(bigBanner); 
	
}

