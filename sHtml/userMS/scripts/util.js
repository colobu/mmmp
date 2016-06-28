$(function(){
	// 初始化重绘
	loginResize();

	// 修改密码
	$('.rePass').on('click',function(){
		$('.popRepass').find('input').val('');
		$('.popMask').show();
		$('.popRepass').show();
	})
	// 关闭按钮
	$('.icons-close').on('click',function(){
		$('.popMask').hide();
		$(this).parents('.pop').hide();
	})
	// 修改备注
	$('.goNote').on('click',function(){
		$('.popMask').show();
		$('.popNote').show();
	})
	// 联系状态
	$('.goState').on('click',function(){
		if($(this).siblings('.btnState').length<=0){
			$(this).closest('li').siblings().find('.btnState').remove();
			$(this).after('<div class="btnState"><div class="no" onclick="goStateNon(this)">未联系</div><div class="yes" onclick="goStateOver(this)">已联系</div></div>');
		}
	})

	// 模拟
	// 修改密码模拟
	$('.popRepass button').on('click',function(){
		var $oPassword = $('.oPassword');
		var $nPassword = $('.nPassword');
		var $rPassword = $('.nPassword2');
		if($oPassword.val().length<6){
			validation($oPassword, '* 旧密码不正确');
		}else if($nPassword.val().length<6){
			validation($nPassword, '* 新密码不能少于6位数字或字符');
		}else if($nPassword.val()==$oPassword.val()){
			validation($nPassword, '* 新密码不能与旧密码相同');
		}else if($nPassword.val()!=$rPassword.val()){
			validation($rPassword, '* 确认新密码与新密码不一致');
		}else{
			$('.popMask').hide();
			$('.popRepass').hide();
			alert('密码修改成功~');
		}
	})
	$('.popRepass input').focus(function(){
		$(this).removeClass('error').siblings('.validationBox').remove();
	})
	// 退出登录
	$('.logOff').on('click',function(){
		alert('已经退出登录');
		window.location.href="index.html";
	})

})

// 登录页页面尺寸重绘
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

// 收藏
function addFavorite(dom){
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

// 更改联系状态
function goStateOver(dom){
	var _this = $(dom).parents('.table-cell');
	if(!_this.hasClass('over')){
		$(dom).parent().prev().text('已联系');
		$(dom).animate({left:'0'},300);
		$(dom).parent().animate({width:'69px'},300,function(){
			$(dom).parent().remove();
			_this.addClass('over');
		});
	}else{
		$(dom).parent().remove();
	}
}
function goStateNon(dom){
	var _this = $(dom).parents('.table-cell');
	if(_this.hasClass('over')){
		$(dom).parent().prev().text('未联系');
		$(dom).next().animate({left:'0'},300);
		$(dom).parent().animate({width:'69px',left:'15'},300,function(){
			$(dom).parent().remove();
			_this.removeClass('over');
		});
	}else{
		$(dom).parent().remove();
	}
}

// 表单提示
function validation(dom, text){
	if(dom.siblings('.validationBox').length>0){
		dom.siblings('.validationBox').text(text);
	}else{
		dom.after('<div class="validationBox">'+text+'</div>');
		dom.addClass('error');
	}
}