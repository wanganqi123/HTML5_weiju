$(function(){
			var Height = 60; //li的高度
			var pTop = 40; // .lanrenzhijia 的paddding-top的值
			$('.lanrenzhijia1 li').mouseover(function(){
				$(this).addClass('on').siblings().removeClass('on');
				var index = $(this).index();
				var distance = index*(Height+1)+pTop+'px'; //如果你的li有个border-bottom为1px高度的话，这里需要加1
				$('.lanrenzhijia1 .hover').stop().animate({top:distance},150);
			});
		});