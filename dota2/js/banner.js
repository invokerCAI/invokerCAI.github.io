/*使用说明：
	cBanner({
		prev: 'prev', //上一张btn的Id，选填
		next: 'next', //下一张btn的Id，选填
		sliderList: 'c_slider_list', //轮播图列表Id，必填
		sliderItem: 'c_slider_item', //圆圈列表Id，必填
		timeAuto: 2000, //自动轮播间隔时间，选填默认2000毫秒
		transition: 500, //轮播图滚动过度时间，选填默认500毫秒
		pointStyle: ['border', '1px solid #f00'] //圆圈选中样式，有圆圈列表必填；没有圆圈列表不填
	});
*/
function cBanner1(obj){
	obj = obj || {};
	obj.sliderAuto = obj.sliderAuto || true;
	obj.timeAuto = obj.timeAuto || 2000;
	obj.transition = obj.transition || 500;
	var btn_prev = document.getElementById(obj.prev) || {};
	var btn_next = document.getElementById(obj.next) || {};
	var c_slider_list = document.getElementById(obj.sliderList);
	var piece = c_slider_list.children;
	var onoff = true;
	var c_slider_item = document.getElementById(obj.sliderItem) || null;
	var c_index = 0;
	var pieceW = piece[0].offsetWidth;
	var timer = null;
	btn_prev.onclick = function() {
		if(onoff) {
			onoff = false;
			cxk(1, 0)
		}
	}
	btn_next.onclick = function() {
		if(onoff) {
			onoff = false;
			cxk(-1, piece.length - 1)
		}
	}
	//点击原点
	if(c_slider_item) {
		var c_slider_item_point = c_slider_item.children;
		var clearPoint = c_slider_item_point[0];
		c_slider_item_point[c_index].style[obj.pointStyle[0]] = obj.pointStyle[1];
		for(var i = 0; i < c_slider_item_point.length; i++) {
			c_slider_item_point[i].index = i;
			c_slider_item_point[i].onclick = function() {
				c_slider_list.style.transition = "";
				c_slider_list.style.left = -clearPoint.index * (piece[0].offsetWidth) + "px";
				if(clearPoint.index != this.index) {
					c_slider_list.style.transition = "all " + obj.transition / 1000 + "s";
					c_slider_list.style.left = -this.index * (piece[0].offsetWidth) + "px";
				}
				clearPoint = this;
				c_index = this.index;
				for(var i = 0; i < c_slider_item_point.length; i++) {
					c_slider_item_point[i].style[obj.pointStyle[0]] = null;
				}
				c_slider_item_point[this.index].style[obj.pointStyle[0]] = obj.pointStyle[1];
			}
		}
	}

	function cxk(num, index) {
		c_index = c_index + num;
		c_index = (c_index + piece.length) % piece.length;
		if(c_index == index) {
			xk = c_index == 0 ? piece.length - 2 : piece.length;
			c_slider_list.style.transition = "";
			c_slider_list.style.left = -(xk - c_index) * pieceW + "px";
			inserPiece(num);
		}
		if(c_slider_item) {
			clearPoint = c_slider_item_point[c_index];
			for(var i = 0; i < c_slider_item_point.length; i++) {
				c_slider_item_point[i].style[obj.pointStyle[0]] = null;
			}
			c_slider_item_point[c_index].style[obj.pointStyle[0]] = obj.pointStyle[1];
		}
		c_slider_list.style.left = c_slider_list.offsetLeft - (pieceW * num) + "px";
		c_slider_list.style.transition = "all " + obj.transition / 1000 + "s";
		setTimeout(function() {
			if(c_index == index) {
				c_slider_list.style.transition = "";
				c_slider_list.style.left = -c_index * pieceW + "px";
				inserPiece(-num);
			}
			onoff = true;
		}, obj.transition)
	}

	function inserPiece(num) {
		if(num > 0) {
			c_slider_list.appendChild(c_slider_list.firstElementChild);
		} else {
			c_slider_list.insertBefore(c_slider_list.lastElementChild, c_slider_list.firstChild);
		}
	}
	if(obj.sliderAuto) {
		for(var i = 0; i < c_slider_item_point.length; i++) {
			c_slider_item_point[i].onmouseover = btn_prev.onmouseover = btn_next.onmouseover = c_slider_list.onmouseover = function() {
				clearInterval(timer);
			};
			c_slider_item_point[i].onmouseout = btn_prev.onmouseout = btn_next.onmouseout = c_slider_list.onmouseout = function() {
				timer = setInterval(btn_prev.onclick, obj.timeAuto);
			}
		}
		timer = setInterval(btn_prev.onclick, obj.timeAuto);
	}
}