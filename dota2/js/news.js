var news_navs = document.getElementsByClassName("news_content_ul1")[0].getElementsByTagName("li");
var news_content_div = document.getElementsByClassName("news_content_div");

var dd_clear1 = news_navs[0];
var dd_clear2 = news_content_div[0];
dd_clear1.style.border="1px solid #999";
dd_clear2.style.display = "block";

for(var i=0;i<news_navs.length;i++){
	news_navs[i].index = i;
	news_navs[i].onclick = function(){
		dd_clear1.style.border = "";
		dd_clear2.style.display = "none";
		this.style.border="1px solid #999";
		dd_clear1=this;
		dd_clear2 = news_content_div[this.index];
		news_content_div[this.index].style.display = "block";
	}
}


