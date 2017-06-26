var hdzx_nav =document.getElementsByClassName("hdzx_tab_li");
var box_center1_con_div = document.getElementsByClassName("box_center1_con_div")
var dd_hd1 = hdzx_nav[0];
var dd_hd2 = box_center1_con_div[0];

dd_hd2.style.display = "block";


for(var i=0;i<hdzx_nav.length;i++){
	hdzx_nav[i].index = i;
	hdzx_nav[i].onmousemove = function(){
		dd_hd2.style.display = "none";
		box_center1_con_div[this.index].style.display = "block";
		dd_hd2 = box_center1_con_div[this.index];
	}
}
