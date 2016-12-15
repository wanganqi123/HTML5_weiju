$(function() {	
    if ($('.idx-inspire-bt').length > 0) {//如果页面存在这个东西 判断每个屏情况


	function begin(){
	    $('.idx-inspire-bt li').height($(window).height());
	    if ($(window).height() >= 680) {
	        $('.idx-inspire-bt li .inner').eq(1).height(668);
	        $('.idx-inspire-bt li .inner').eq(2).height(678);
	        $('.idx-inspire-bt li .inner').eq(3).height(618);
	    }else{
	        $('.idx-inspire-bt li .inner').eq(1).height(550);
	        $('.idx-inspire-bt li .inner').eq(2).height(550);
	        $('.idx-inspire-bt li .inner').eq(3).height(550);
		}
		$('.idx-inspire-bt li .inner').each(function (index) {
		    $(this).css({ 'margin-top': ($(window).height() - $(this).height()) / 2 });
		})
		$('.idx-inspire-bt .pt').css({'top':$(window).height()/2-50})
		//灵感大图幻灯
		$('.idx-inspire-bt .pt a').click(function() {
			var i = $('.idx-inspire-bt .pt a').index($(this));
			$('.idx-inspire-bt .pt a').removeClass('on').eq(i).addClass('on');
			$('html,body').animate({scrollTop:$('.idx-inspire-bt li').eq(i).offset().top});
			return false
		});
	}
	begin();

    $(window).resize(function(){begin()});
	
    $(window).scroll(function(){//滚动时刻按钮判断
		if($(this).scrollTop()>=$('.idx-inspire-bt').offset().top-$(this).height()&&$(this).scrollTop()<$('.idx-inspire-bt').offset().top){//第一屏之前单独判断
			$('.idx-inspire-bt .pt').css({'position':'absolute','top':$(window).height()/2 - 50});
			$('.idx-inspire-bt .pt a').removeClass('on').eq(0).addClass('on');
		}else if($(this).scrollTop()>=$('.idx-inspire-bt').offset().top&&$(this).scrollTop()<$('.idx-inspire-bt').offset().top+$(this).height()*4){//在大屏图范围内
			$('.idx-inspire-bt .pt').css({'position':'fixed','top':$(window).height()/2 - 50});
			if($('.idx-inspire-bt').offset().top<=$(document).scrollTop()&&$('.idx-inspire-bt').offset().top+$(window).height()*1>$(document).scrollTop()){
				$('.idx-inspire-bt .pt a').removeClass('on').eq(0).addClass('on');
			} else if ($('.idx-inspire-bt').offset().top + $(window).height() * 1 <= $(document).scrollTop() && $('.idx-inspire-bt').offset().top + $(window).height() * 2 > $(document).scrollTop()) {
				$('.idx-inspire-bt .pt a').removeClass('on').eq(1).addClass('on');
			} else if ($('.idx-inspire-bt').offset().top + $(window).height() * 2 <= $(document).scrollTop() && $('.idx-inspire-bt').offset().top + $(window).height() * 3 > $(document).scrollTop()) {
				$('.idx-inspire-bt .pt a').removeClass('on').eq(2).addClass('on');
			} else if ($('.idx-inspire-bt').offset().top + $(window).height() * 3 <= $(document).scrollTop() && $('.idx-inspire-bt').offset().top + $(window).height() * 4 > $(document).scrollTop()) {
				$('.idx-inspire-bt .pt a').removeClass('on').eq(3).addClass('on');
			}
		}else if($(this).scrollTop()>=$('.idx-inspire-bt').offset().top+$(this).height()*4){//最后一屏单独判断
			$('.idx-inspire-bt .pt').css({'position':'absolute','top':$(window).height()*4+$(window).height()/2 - 50});
			$('.idx-inspire-bt .pt a').removeClass('on').eq(4).addClass('on');
		}else{
			$('.idx-inspire-bt .pt').css({'position':'absolute','top':$(window).height()/2 - 50})
		}
    });
	
    var bz = 0;//防止连续多重除非滚动
    function sr2() {//上下滚动判断
        $(document).on('mousewheel',function(event, delta) {
            if(bz==0){
                var i = $('.idx-inspire-bt .pt a.on').index();
                if (delta < 0) { //下滚
                    if (i < 4) {
                        if ($('.idx-inspire-bt').offset().top <= $(document).scrollTop() + $(window).height() && $('.idx-inspire-bt').offset().top > $(document).scrollTop()) {
                            i=0;
                            $('html,body').animate({ scrollTop: $('.idx-inspire-bt li').eq(i).offset().top }, function () { bz = 0 });
                            bz = 1;
                        } else if ($('.idx-inspire-bt').offset().top <= $(document).scrollTop() && $('header .header .hr .lgd').length<=0) {//加上判断是否已经登录
                            i++;
                            $('html,body').animate({ scrollTop: $('.idx-inspire-bt li').eq(i).offset().top},function(){ bz=0 });
                            bz=1;
                        }
                    } 
                } else {//上滚
                    if (i > 0) {
                        if ($('.idx-inspire-bt').offset().top + $('.idx-inspire-bt').height() < $(document).scrollTop() + $(window).height() && $('.idx-inspire-bt').offset().top + $('.idx-inspire-bt').height() > $(document).scrollTop()) {
                            i=4;
                            $('html,body').animate({ scrollTop: $('.idx-inspire-bt li').eq(i).offset().top }, function () { bz = 0 });
                            bz = 1;
                        }else if($('.idx-inspire-bt').offset().top+$('.idx-inspire-bt').height()>=$(document).scrollTop()+$(window).height()){
                            i--;
                            $('html,body').animate({scrollTop:$('.idx-inspire-bt li').eq(i).offset().top},function(){bz=0});
                            bz=1;
                        } else if ($('.idx-inspire-bt').offset().top >= $(document).scrollTop() && $('.idx-inspire-bt').offset().top <= $(document).scrollTop()+$(window).height()) {
                            i = 0;
                            $('html,body').animate({ scrollTop: $('.idx-inspire-bt li').eq(i).offset().top }, function () { bz = 0 });
                            bz = 1;
                        }
                    }
                }

            }else{
                return false
            }
        });
    }
	sr2();

}
})