var bbgx_ul = document.getElementsByClassName("bbgx_lunbo")[0];
var bbgx_li = document.getElementsByClassName("bbgx_lunbo_li");
var btn = document.getElementsByTagName("button");
var onff_bbgx = true;
var arr_bbgx = [];
var arr_zIdex_bbgx = [3, 2, 1, 1, 2];
var mark_bbgx = 0;
var cle_bbgx = null;
for(var i = 0; i < bbgx_li.length; i++) {
	arr_bbgx[i] = {
		top: bbgx_li[i].offsetTop,
		left: bbgx_li[i].offsetLeft,
	}
	bbgx_li[i].dataset.index = i;
}

//console.log(getComputedStyle(bbgx_li[0]));

for(var i = 0; i < arr_bbgx.length; i++) {
	bbgx_li[i].style.top = arr_bbgx[i].top + "px";
	bbgx_li[i].style.left = arr_bbgx[i].left + "px";
}

cle_bbgx = setInterval(move_bbgx, 2000);

bbgx_ul.onmousemove = function() {
	clearInterval(cle_bbgx);
}

bbgx_ul.onmouseout = function() {
	cle_bbgx = setInterval(move_bbgx, 2000);
}

function move_bbgx() {

	if(onff_bbgx == true) {
		onff_bbgx = false;
		mark_bbgx--;
		if(mark_bbgx == -1) {
			mark_bbgx = 4;
		}
		arr_bbgx.push(arr_bbgx.shift());
		arr_zIdex_bbgx.push(arr_zIdex_bbgx.shift());
		for(var i = 0; i < arr_bbgx.length; i++) {
			bbgx_li[i].style.top = arr_bbgx[i].top + "px";
			bbgx_li[i].style.left = arr_bbgx[i].left + "px";
			bbgx_li[i].style.transform = "scale(0.9)";
			bbgx_li[i].style.zIndex = arr_zIdex_bbgx[i];
			if(mark_bbgx == bbgx_li[i].dataset.index) {
				bbgx_li[i].style.transform = "scale(1)";
			}
		}

		setTimeout(function() {
			onff_bbgx = true;
		}, 500)
	}

}