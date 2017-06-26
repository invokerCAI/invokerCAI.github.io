var slide_btn = document.getElementById("slide_onff");
var slide_box = document.getElementById("slide_box");
var slide_word = document.getElementById("slide_word");
var slide_word = document.getElementById("slide_word");
var slide_jt = document.getElementById("slide_jt");
var slide_onff=false;



slide_btn.onclick = function(){
	
	if(slide_onff==true){
		slide_box.style.right = "0px";
		slide_box.style.transition = "all 1s";
		slide_word.innerHTML = "收起";
		slide_jt.setAttribute("class","slide_jt_r");
		slide_onff=false;
	}else{
		slide_box.style.right = -slide_box.offsetWidth+"px";
		slide_box.style.transition = "all 1s";
		slide_word.innerHTML = "展开";
		slide_jt.setAttribute("class","slide_jt_l");
		slide_onff=true;
	}

}
