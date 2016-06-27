$(function(){
	

	loginResize();
})

function loginResize(){
	var winH = $(window).height();
	var winW = $(window).width();
	var footH = $('#footer').height();
	var bodyH = $('body').height();

	if(bodyH<winH){
		if((winH-footH)<350){
			$('#loginWarp').height(350);
		}else{
			$('#loginWarp').height(winH-footH);
		}
	}
}


$(window).on('resize',function(){
	loginResize();
})


// 首页
function addMe() {
    url = document.URL;  //你自己的主页地址
    title = "七彩部落管理平台";  //你自己的主页名称
    window.external.AddFavorite(url, title);
}