$(function(){
	loginResize();

	$('.rePass').on('click',function(){
		$('.popMask').show();
		$('.popRepass').show();
	})
	$('.icons-close').on('click',function(){
		$('.popMask').hide();
		$(this).parents('.pop').hide();
	})

	$('.goNote').on('click',function(){
		$('.popMask').show();
		$('.popNote').show();
	})

	$('.goState').on('click',function(){
		$(this).toggleClass('over');
	})

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
function addFavorite() {
	url = document.URL;  //你自己的主页地址
    title = "七彩部落管理平台";  //你自己的主页名称
	try {
		window.external.addFavorite(url, title);
	}
	catch (e) {
		try {
			window.sidebar.addPanel(title, url, "");
		}
		catch (e) {
			alert("抱歉，您所使用的浏览器无法完成此操作。\n\n加入收藏失败，请使用Ctrl+D进行添加");
		}
	}
}