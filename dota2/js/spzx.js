var spzx_li  = document.getElementsByClassName("spzx_con_tab")[0].getElementsByTagName("li");
var spzx_ul_box = document.getElementsByClassName("spzx_con_con");


////console.log(spzx_ul_box);
//console.log(spzx_li);




spzx_ul_box[0].style.display = "block";
var dd_spxz1 = spzx_li[0];
spzx_li[0].style.border = "1px solid #fff";
for(var i=0;i<spzx_li.length;i++){
	spzx_li[i].index = i;
	spzx_li[i].onclick =function(){
		dd_spxz1.style.border = "";
		this.style.border = "1px solid #fff";
		dd_spxz1 = spzx_li[this.index];
		for(var i=0;i<spzx_ul_box.length;i++){
			spzx_ul_box[i].index =i;
			spzx_ul_box[i].style.display = "none";
		}
			spzx_ul_box[this.index].style.display = "block";

		
	}
}

