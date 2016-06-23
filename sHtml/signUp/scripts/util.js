// util.js
$(function(){
	var conL5 = $('.conL5');
	conDot(conL5);
})


// 多行隐藏缩进，需要配合css填写max-height及a.toggleMore样式，其中dotme为dom元素
function conDot(dotme){
	dotme.each(function(){
		var $_this = $(this);
		function appendMore(thisone){
			var len = thisone.children().length;
			if(len>0){
				appendMore(thisone.children().eq(len-1));
			}else{
				thisone.append( ' <a class="toggleMore" href="javascript:void(0);"><span class="open">[全部]</span><span class="close">[收起]</span></a>' );
				// return thisone;
			}
		}
		appendMore($_this);
		// $_this.append( ' <a class="toggleMore" href="javascript:void(0);"><span class="open">[全部]</span><span class="close">[收起]</span></a>' );
		function createDots(){
			$_this.dotdotdot({
				after: 'a.toggleMore'
			});
		}
		function destroyDots(){
			$_this.trigger( 'destroy' );
		}
		createDots();
		if(!$_this.hasClass('is-truncated')){
			$_this.find('a.toggleMore').remove();
		}
		$_this.on(
			'click',
			'a.toggleMore',
			function() {
				$_this.toggleClass( 'opened' );

				if ( $_this.hasClass( 'opened' ) ) {
					destroyDots();
					appendMore($_this);
				} else {
					createDots();
				}
				return false;
			}
		);

	})
}