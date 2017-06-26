var bigBanner = {
		prev: 'icon_l', //上一张btn的Id，选填
		next: 'icon_r', //下一张btn的Id，选填
		sliderList: 'banner_slider', //轮播图列表Id，必填
		sliderItem: 'banner_yd', //圆圈列表Id，选填
		timeAuto: 5000, //自动轮播间隔时间，选填默认2000毫秒
		transition: 500, //轮播图滚动过度时间，选填默认500毫秒
		pointStyle: ['border', '2px solid #f00'] //圆圈选中样式，有圆圈列表必填；没有圆圈列表不填
	}
	
cBanner(bigBanner); 


var sszxBanner = {
		
		sliderList: 'sszx_ul1', //轮播图列表Id，必填
		sliderItem: 'sszx_ul2', //圆圈列表Id，选填
		timeAuto: 2000, //自动轮播间隔时间，选填默认2000毫秒
		transition: 500, //轮播图滚动过度时间，选填默认500毫秒
		pointStyle: ['border', '2px solid #f00'] //圆圈选中样式，有圆圈列表必填；没有圆圈列表不填

	}
cBanner1(sszxBanner); 

