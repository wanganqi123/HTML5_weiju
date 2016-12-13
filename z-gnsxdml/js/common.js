//easing函数  for ex:easeOutBounce

jQuery.easing.jswing=jQuery.easing.swing;jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(e,f,a,h,g){return jQuery.easing[jQuery.easing.def](e,f,a,h,g)},easeInQuad:function(e,f,a,h,g){return h*(f/=g)*f+a},easeOutQuad:function(e,f,a,h,g){return -h*(f/=g)*(f-2)+a},easeInOutQuad:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f+a}return -h/2*((--f)*(f-2)-1)+a},easeInCubic:function(e,f,a,h,g){return h*(f/=g)*f*f+a},easeOutCubic:function(e,f,a,h,g){return h*((f=f/g-1)*f*f+1)+a},easeInOutCubic:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f+a}return h/2*((f-=2)*f*f+2)+a},easeInQuart:function(e,f,a,h,g){return h*(f/=g)*f*f*f+a},easeOutQuart:function(e,f,a,h,g){return -h*((f=f/g-1)*f*f*f-1)+a},easeInOutQuart:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f+a}return -h/2*((f-=2)*f*f*f-2)+a},easeInQuint:function(e,f,a,h,g){return h*(f/=g)*f*f*f*f+a},easeOutQuint:function(e,f,a,h,g){return h*((f=f/g-1)*f*f*f*f+1)+a},easeInOutQuint:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f*f+a}return h/2*((f-=2)*f*f*f*f+2)+a},easeInSine:function(e,f,a,h,g){return -h*Math.cos(f/g*(Math.PI/2))+h+a},easeOutSine:function(e,f,a,h,g){return h*Math.sin(f/g*(Math.PI/2))+a},easeInOutSine:function(e,f,a,h,g){return -h/2*(Math.cos(Math.PI*f/g)-1)+a},easeInExpo:function(e,f,a,h,g){return(f==0)?a:h*Math.pow(2,10*(f/g-1))+a},easeOutExpo:function(e,f,a,h,g){return(f==g)?a+h:h*(-Math.pow(2,-10*f/g)+1)+a},easeInOutExpo:function(e,f,a,h,g){if(f==0){return a}if(f==g){return a+h}if((f/=g/2)<1){return h/2*Math.pow(2,10*(f-1))+a}return h/2*(-Math.pow(2,-10*--f)+2)+a},easeInCirc:function(e,f,a,h,g){return -h*(Math.sqrt(1-(f/=g)*f)-1)+a},easeOutCirc:function(e,f,a,h,g){return h*Math.sqrt(1-(f=f/g-1)*f)+a},easeInOutCirc:function(e,f,a,h,g){if((f/=g/2)<1){return -h/2*(Math.sqrt(1-f*f)-1)+a}return h/2*(Math.sqrt(1-(f-=2)*f)+1)+a},easeInElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return -(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e},easeOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return g*Math.pow(2,-10*h)*Math.sin((h*k-i)*(2*Math.PI)/j)+l+e},easeInOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k/2)==2){return e+l}if(!j){j=k*(0.3*1.5)}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}if(h<1){return -0.5*(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e}return g*Math.pow(2,-10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j)*0.5+l+e},easeInBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*(f/=h)*f*((g+1)*f-g)+a},easeOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*((f=f/h-1)*f*((g+1)*f+g)+1)+a},easeInOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}if((f/=h/2)<1){return i/2*(f*f*(((g*=(1.525))+1)*f-g))+a}return i/2*((f-=2)*f*(((g*=(1.525))+1)*f+g)+2)+a},easeInBounce:function(e,f,a,h,g){return h-jQuery.easing.easeOutBounce(e,g-f,0,h,g)+a},easeOutBounce:function(e,f,a,h,g){if((f/=g)<(1/2.75)){return h*(7.5625*f*f)+a}else{if(f<(2/2.75)){return h*(7.5625*(f-=(1.5/2.75))*f+0.75)+a}else{if(f<(2.5/2.75)){return h*(7.5625*(f-=(2.25/2.75))*f+0.9375)+a}else{return h*(7.5625*(f-=(2.625/2.75))*f+0.984375)+a}}}},easeInOutBounce:function(e,f,a,h,g){if(f<g/2){return jQuery.easing.easeInBounce(e,f*2,0,h,g)*0.5+a}return jQuery.easing.easeOutBounce(e,f*2-g,0,h,g)*0.5+h*0.5+a}});














$(function () {

    function srcFcs() {
        $('.index-srh .ipt input').focusin(function () {
            $('.src-ly').show();
        }).focusout(function () {
            $('.src-ly').hide();
        });
        $('body').click(function () {
            $('.src-ly').hide();
        })
        $('.src-ly,.index-srh .ipt input').click(function (event) {
            event.stopPropagation();
        })
        $('.index-srh .ipt .src-ly .cls').click(function (event) {
            $('.src-ly').hide();
        })
    }
    srcFcs();
    $('.index-srh .ipt .src-ly').hover(function () {
        $('.index-srh .ipt input').unbind('focusin focusout');
    }, function () {
        srcFcs();
    })
    if($(".weixinimg").length==1){
    $('#liweixin').hover(function () {
        $('.touxiangimg,.weixinimg').toggle();
    })
    }
    $('.idx-friend .fr h6 a').hover(function () {
        var idx = $('.idx-friend .fr h6 a').index($(this));
        $(this).addClass('on').siblings().removeClass('on');
        $('.idx-friend .fr ul').removeClass('on').eq(idx).addClass('on');
    })
    $('header .header .hl nav ul li.put').live({
        mouseenter: function () {
            $(this).addClass('show');
        },
        mouseleave: function () {
            $(this).removeClass('show');
        }
    });

    $('header .header .hr .lgd li').live({
        mouseenter: function () {
            $(this).addClass('show');
        },
        mouseleave: function () {
            $(this).removeClass('show');
        }
    });


    $('.idx-brand ul li').not('.lock').find(' .item').hover(function () {
        if ($(this).find('p').length < 0) { return false }
        $(this).stop().animate({
            'bottom': 0
        },
        300)
    },
    function () {
        if ($(this).find('p').length < 0) { return false }
        $(this).stop().animate({
            'bottom': -28
        },
        500)
    })

    function ltH() {
        $('.zl-out,body.find').height($(window).height())
    }
    ltH();
    $(window).resize(function () { ltH() })

    $('.idx-inspire li').height($(window).height());
    $('.idx-inspire .pt').css({ 'top': $(window).height() / 2})
    //灵感大图幻灯
    $('.idx-inspire .pt a').click(function () {
        var i = $('.idx-inspire .pt a').index($(this));
        $('.idx-inspire .pt a').removeClass('on').eq(i).addClass('on');
        $('html,body').animate({ scrollTop: $('.idx-inspire li').eq(i).offset().top });
        return false
    });

    if ($('.idx-inspire').length > 0) {
        sr()
    };

    $('.idx-travels ul li .zl h6').each(function () {
        if ($(this).height() < 55) {
            $(this).css('margin-top', '15px')
        }
    })

    $(window).resize(function () {
        $('html').css({ 'font-size': 100 / 640 * $(window).width() + 'px' })
        $('.idx-inspire li').height($(window).height());
        $('.idx-inspire .pt').css({ 'top': $(window).height() / 2})
        //灵感大图幻灯
        $('.idx-inspire .pt a').click(function () {
            var i = $('.idx-inspire .pt a').index($(this));
            $('.idx-inspire .pt a').removeClass('on').eq(i).addClass('on')
            $('html,body').animate({ scrollTop: $('.idx-inspire li').eq(i).offset().top })
            return false
        });
        $('.idx-travels ul li .zl h6').each(function () {
            if ($(this).height() < 55) {
                $(this).css('margin-top', '15px')
            } else {
                $(this).css('margin-top', '0px')
            }
        })
    })
//幻灯插件
 var iNow = 0;
 var aLi = $(".idx-focus ul li");
 var oList = $(".idx-focus ul");
 var aBtn = $(".pgs i");
 var oNext = $(".bdBtnR");
 var oPrev = $(".bdBtnL");
 var iW=aLi.width();
 var len=aBtn.size();
 var timer = null;
 oList.css({"width":2*iW*len})
 oList.html(oList.html()+oList.html())
  aBtn.live('click mouseover',function()
	{
		iNow=$(this).index();
		fnChange()
		})
	oNext.click(function()
	{
		iNow++;
		if(iNow==len*2)
		{
			oList.css({"left":-(len-1)*iW})
			iNow=len;
			}
		fnChange()
		})
	oPrev.click(function()
	{
		iNow--;
		if(iNow==-1)
		{
			oList.css({"left":-iW*len})
			iNow=len-1;
			}
		fnChange()
		})
	function fnChange()
	{
		aBtn.removeClass("on").eq(iNow%len).addClass("on");
		oList.stop().animate({"left":-iNow*iW})
		}
	autoPlay();
    function autoPlay(){
        timer = setInterval(function(){
            iNow++;
            //iNow=iNow%len;
            if(iNow==len*2){
                oList.css({"left":-iW*(len-1)})
                iNow = len;
            } fnChange();
        },5000)
    }

    $(".idx-focus").hover(function(){
        clearInterval(timer);
		$('.bdBtnL,.bdBtnR').show();
    },function(){
        autoPlay();
		$('.bdBtnL,.bdBtnR').hide();
    })
 
    $(window).scroll(function () {
        if ($('.idx-inspire').length > 0) {
            if ($(this).scrollTop() >= $('.idx-inspire').offset().top - $(this).height() && $(this).scrollTop() < $('.idx-inspire').offset().top) {//第一屏之前单独判断
                $('.idx-inspire .pt').css({ 'position': 'absolute', 'top': $(window).height() / 2});
                $('.idx-inspire .pt a').removeClass('on').eq(0).addClass('on');
            } else if ($(this).scrollTop() >= $('.idx-inspire').offset().top && $(this).scrollTop() < $('.idx-inspire').offset().top + $(this).height() * 2) {
                $('.idx-inspire .pt').css({ 'position': 'fixed', 'top': $(window).height() / 2});
                if ($('.idx-inspire').offset().top <= $(document).scrollTop() && $('.idx-inspire').offset().top + $(window).height() * 1 > $(document).scrollTop()) {
                    $('.idx-inspire .pt a').removeClass('on').eq(0).addClass('on');
                } else if ($('.idx-inspire').offset().top + $(window).height() * 1 <= $(document).scrollTop() && $('.idx-inspire').offset().top + $(window).height() * 2 > $(document).scrollTop()) {
                    $('.idx-inspire .pt a').removeClass('on').eq(1).addClass('on');
                }
            } else if ($(this).scrollTop() >= $('.idx-inspire').offset().top + $(this).height() * 2) {
                $('.idx-inspire .pt').css({ 'position': 'absolute', 'top': $(window).height() * 2 + $(window).height() / 2});
                $('.idx-inspire .pt a').removeClass('on').eq(2).addClass('on');
            } else {
                $('.idx-inspire .pt').css({ 'position': 'absolute', 'top': $(window).height() / 2})
            }
        }
    })

    var bz = 0;
    function sr() {//上下滚动判断
        $(document).on('mousewheel', function (event, delta) {
            if (bz == 0) {
                var i = $('.idx-inspire .pt a.on').index();
                if (delta < 0) { //下滚
                    if (i < 2) {
                        if ($('.idx-inspire').offset().top <= $(document).scrollTop() + $(window).height() && $('.idx-inspire').offset().top > $(document).scrollTop()) {
                            i = 0;
                            $('html,body').animate({ scrollTop: $('.idx-inspire li').eq(i).offset().top }, function () { bz = 0 });
                            bz = 1;
                        } else if ($('.idx-inspire').offset().top <= $(document).scrollTop()) {
                            i++;
                            $('html,body').animate({ scrollTop: $('.idx-inspire li').eq(i).offset().top }, function () { bz = 0 });
                            bz = 1;
                        }
                    }
                } else {//上滚
                    if (i > 0) {
                        if ($('.idx-inspire').offset().top + $('.idx-inspire').height() < $(document).scrollTop() + $(window).height() && $('.idx-inspire').offset().top + $('.idx-inspire').height() > $(document).scrollTop()) {
                            i = 2;
                            $('html,body').animate({ scrollTop: $('.idx-inspire li').eq(i).offset().top }, function () { bz = 0 });
                            bz = 1;
                        } else if ($('.idx-inspire').offset().top + $('.idx-inspire').height() >= $(document).scrollTop() + $(window).height()) {
                            i--;
                            $('html,body').animate({ scrollTop: $('.idx-inspire li').eq(i).offset().top }, function () { bz = 0 });
                            bz = 1;
                        } else if ($('.idx-inspire').offset().top >= $(document).scrollTop() && $('.idx-inspire').offset().top <= $(document).scrollTop() + $(window).height()) {
                            i = 0;
                            $('html,body').animate({ scrollTop: $('.idx-inspire li').eq(i).offset().top }, function () { bz = 0 });
                            bz = 1;
                        }
                    }
                }
            } else {
                return false
            }
        });
    }




    
    $('.idx-inspire li .us img').click(function () {
        var hf = $(this).attr('imghref');
        window.open(hf);
        return false
    })
    $('.idx-inspire li .us p').click(function () {
        var hf = $(this).attr('phref');
        window.open(hf);
        return false
    })
    $('.idx-inspire li a').click(function (event) {
		event.stopPropagation()
		
    })
	

   

   

   




    function FuckIE() {
        if (navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.split(";")[1].replace(/[ ]/g, "") == "MSIE6.0" || navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.split(";")[1].replace(/[ ]/g, "") == "MSIE7.0" || navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.split(";")[1].replace(/[ ]/g, "") == "MSIE8.0" || navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.split(";")[1].replace(/[ ]/g, "") == "MSIE9.0") {
            return true;//是ie6-9
        }
        return false;//不是ie6-9
    }

    //通用input提示
    if (FuckIE()) {
        $('input[placeholder]').each(function () {
            var $this = $(this), pr = $this.attr('placeholder');
            //if($this.attr('type')=='password'){return false}
            $this.val(pr);
            $this.focus(function () {
                if ($this.val() == pr) {
                    $this.val('')
                } else {
                    return false
                }
            }).blur(function () {
                if ($this.val() == '') {
                    $this.val(pr)
                } else {
                    return false
                }
            })
        })
    }


    //注册登录login点击回首页
    $('.lg-tt,.zl-tt').click(function () { window.location.href = 'http://www.lotour.com' })

    //首页标题字符换行
    /*$('.index-s-list li .img em span,.index-b-list li .img em span,.index-ad-item .index-b-list li .img em span').each(function () {
        var ht = $(this).html(), nb = parseInt(ht.length / 2);
        if (ht.length > 6) {
            $(this).addClass('t2');
            $(this).html(ht.substring(0, nb) + '<br/>' + ht.substring(nb, ht.length))
        }
    })*/
    //首页hover背景标签添加
    addIk();
    function addIk(){
        $('.index-s-list li .img,.index-b-list li .img,.index-c-list li .img').each(function(){
            if($(this).find('i').length<=0){
                $(this).append('<i class="i1"></i><i class="i2"></i>');
            }
            if($(this).find('span').height()>30){
                $(this).find('span').addClass('t2')
            }
        })
    }

    //导航收藏功能
    $('header .header .hr .tool a.t4').click(function () {
        var la = $('header .header .hr .tool .t3-layer');
        la.height($(document).height()).show().addClass('t3-layeron');
        la.find('img').css('top', ($(window).height() - la.find('img').height()) / 2);
        la.find('a').css('top', ($(window).height() - la.find('img').height()) / 2+15);
        la.unbind('click').click(function () {
            $(this).hide().removeClass('t3-layeron');
        })
        la.find('img').unbind('click').click(function () {
            return false
        })
        la.find('a').unbind('click').click(function () {
            la.hide().removeClass('t3-layeron');
            return false
        })
        return false
    })
    //底部登录滚动
    $('.idx-inspire-bt li .inner').eq(0).find('a').eq(0).click(function () {
        $('.idx-inspire-bt .pt a').eq(4).click();
    })

    function aj() {




        //兴趣区1
        $.ajax({
            cache: false,
            type: "GET",
            dataType: 'jsonp',
            jsonp: 'callback',
            url: "http://api.lotour.com/brandhome/API/SelectMoreHomeInterest?callback=?",
            success: function (data) {

                var addHtml = '';
                if (data != '没有数据！') {
                    if (data.length > 0) {
                        $.each(data, function (index, item) {
                            var tagHt = '';
                            $.each(item.photo, function (indexIn, itemIn) {
                                tagHt = tagHt
                                    +'<a href="'+itemIn.Author+'" target="_blank" title="'+ itemIn.NickName +'"><img src="'+itemIn.HeadSculpture+'"></a>'
                            })

                            addHtml = addHtml
                            +'<li>'
                                +'<a href="'+item.Url+'" class="img" target="_blank">'
                                    +'<img src="'+item.MobileLogo+'">'
                                    +'<em><span>'+item.HomeName+'</span></em>'
                                    +'<i class="i1"></i><i class="i2"></i>'
                                +'</a>'
                                +'<p class="txt">'
                                    +'有'+ item.TagCount +'种'+ item.HomeName +'灵感等你发现<br>'
                                    +'由'+ item.AuthorCount +'位旅行作家亲历整理'
                                +'</p>'
                                +'<div class="arcer">'
                                        + tagHt
                                        +'<a href="'+item.Url+'" target="_blank"><img src="http://img1.lotour.com/2016/index/arcmore.png"></a>'
                                +'</div>'
                            +'</li>'
                        })

                    }

                    $('.index-s-list ul').eq(0).each(function () {//判断是否有新加 有的话显示右按钮
                        $(this).siblings('.left').addClass('hide');
                        if (addHtml != '') {
                            $(this).append(addHtml);
                            $(this).siblings('.right').removeClass('hide');
                        }
                    })

                    //图片切换绑定
                    $('.index-s-list .in').eq(0).each(function () {
                        var wt = $(this).outerWidth(true), leftBtn = $(this).find('.left'), rightBtn = $(this).find('.right'), list = $(this).find('ul'),liwt=list.find('li').outerWidth(true);
                        list.width(list.find('li').length * 200);
                        var stRt,stRtIn,stRtIn2,stNb=0;
                        rightBtn.bind('mouseenter', function () {

                            var list = $(this).parent('.in').find('ul');

                            leftBtn.removeClass('hide');
                            
                            clearInterval(stRtIn2);
                            stRtIn=setInterval(function(){
                                if(stNb<10){
                                    stNb=stNb+0.01;
                                }else{
                                }
                                list.css({'left': list.position().left - stNb});
                                
                                if (-(list.position().left - wt) >= list.width()) {//如果到最右
                                    clearInterval(stRtIn);
                                    clearInterval(stRtIn2);
                                    list.css({ 'left': -(list.width() - wt) });
                                    rightBtn.addClass('hide');
                                }
                                
                            },25)
                            


                        }).bind('mouseleave', function () {
                            clearInterval(stRtIn);
                            stRtIn2=setInterval(function(){
                                if(stNb>0){
                                    stNb=stNb-0.1;
                                }else{
                                    stNb=0;
                                    clearInterval(stRtIn2);
                                }
                                list.css({'left': list.position().left - stNb});
 
                                if (-(list.position().left - wt) >= list.width()) {//如果到最右
                                    clearInterval(stRtIn);
                                    clearInterval(stRtIn2);
                                    list.css({ 'left': -(list.width() - wt) });
                                    rightBtn.addClass('hide');
                                }
                            },25)
                            
                        });
                        


                        leftBtn.bind('mouseenter', function () {

                            var list = $(this).parent('.in').find('ul');

                            rightBtn.removeClass('hide');
                            
                            clearInterval(stRtIn2);
                            stRtIn=setInterval(function(){
                                if(stNb<10){
                                    stNb=stNb+0.01;
                                }else{
                                }
                                list.css({'left': list.position().left + stNb});
                                
                                if(-list.position().left<=0){
                                    clearInterval(stRtIn);
                                    clearInterval(stRtIn2);
                                    list.css({ 'left': 0 });
                                    leftBtn.addClass('hide');
                                }
                                
                            },25)
                            
                        }).bind('mouseleave', function () {
                            clearInterval(stRtIn);
                            stRtIn2=setInterval(function(){
                                if(stNb>0){
                                    stNb=stNb-0.1;
                                }else{
                                    stNb=0;
                                    clearInterval(stRtIn2);
                                }
                                list.css({'left': list.position().left + stNb});
 
                                if(-list.position().left<=0){
                                    clearInterval(stRtIn);
                                    clearInterval(stRtIn2);
                                    list.css({ 'left': 0 });
                                    leftBtn.addClass('hide');
                                }
                            },25)
                            
                        });

                        leftBtn.bind('click', function () {return false});
                    })

                }

            },
            error: function (xhr, status, errMsg) { alert(decodeURI(errMsg)); }
        });


        //兴趣区2
        $.ajax({
            cache: false,
            type: "GET",
            dataType: 'jsonp',
            jsonp: 'callback',
            url: "http://api.lotour.com/brandhome/API/SelectMoreHomeInterest?callback=?",
            success: function (data) {

                var addHtml = '';
                if (data != '没有数据！') {
                    if (data.length > 0) {
                        $.each(data, function (index, item) {
                            var tagHt = '';
                            $.each(item.photo, function (indexIn, itemIn) {
                                tagHt = tagHt
                                    +'<a href="'+itemIn.Author+'" target="_blank" title="'+ itemIn.NickName +'"><img src="'+itemIn.HeadSculpture+'"></a>'
                            })

                            addHtml = addHtml
                            +'<li>'
                                +'<a href="'+item.Url+'" class="img" target="_blank">'
                                    +'<img src="'+item.MobileLogo+'">'
                                    +'<em><span>'+item.HomeName+'</span></em>'
                                    +'<i class="i1"></i><i class="i2"></i>'
                                +'</a>'
                                +'<p class="txt">'
                                    +'有'+ item.TagCount +'种'+ item.HomeName +'灵感等你发现<br>'
                                    +'由'+ item.AuthorCount +'位旅行作家亲历整理'
                                +'</p>'
                                +'<div class="arcer">'
                                        + tagHt
                                        +'<a href="'+item.Url+'" target="_blank"><img src="http://img1.lotour.com/2016/index/arcmore.png"></a>'
                                +'</div>'
                            +'</li>'
                        })

                    }

                    $('.index-s-list ul').eq(1).each(function () {//判断是否有新加 有的话显示右按钮
                        $(this).siblings('.left').addClass('hide');
                        if (addHtml != '') {
                            $(this).append(addHtml);
                            $(this).siblings('.right').removeClass('hide');
                        }
                    })

                    //图片切换绑定
                    $('.index-s-list .in').eq(1).each(function () {
                        var wt = $(this).outerWidth(true), leftBtn = $(this).find('.left'), rightBtn = $(this).find('.right'), list = $(this).find('ul'),liwt=list.find('li').outerWidth(true);
                        list.width(list.find('li').length * 200);
                        var stRt,stRtIn,stRtIn2,stNb=0;
                        rightBtn.bind('mouseenter', function () {

                            var list = $(this).parent('.in').find('ul');

                            leftBtn.removeClass('hide');
                            
                            clearInterval(stRtIn2);
                            stRtIn=setInterval(function(){
                                if(stNb<10){
                                    stNb=stNb+0.01;
                                }else{
                                }
                                list.css({'left': list.position().left - stNb});
                                
                                if (-(list.position().left - wt) >= list.width()) {//如果到最右
                                    clearInterval(stRtIn);
                                    clearInterval(stRtIn2);
                                    list.css({ 'left': -(list.width() - wt) });
                                    rightBtn.addClass('hide');
                                }
                                
                            },25)
                            


                        }).bind('mouseleave', function () {
                            clearInterval(stRtIn);
                            stRtIn2=setInterval(function(){
                                if(stNb>0){
                                    stNb=stNb-0.1;
                                }else{
                                    stNb=0;
                                    clearInterval(stRtIn2);
                                }
                                list.css({'left': list.position().left - stNb});
 
                                if (-(list.position().left - wt) >= list.width()) {//如果到最右
                                    clearInterval(stRtIn);
                                    clearInterval(stRtIn2);
                                    list.css({ 'left': -(list.width() - wt) });
                                    rightBtn.addClass('hide');
                                }
                            },25)
                            
                        });
                        


                        leftBtn.bind('mouseenter', function () {

                            var list = $(this).parent('.in').find('ul');

                            rightBtn.removeClass('hide');
                            
                            clearInterval(stRtIn2);
                            stRtIn=setInterval(function(){
                                if(stNb<10){
                                    stNb=stNb+0.01;
                                }else{
                                }
                                list.css({'left': list.position().left + stNb});
                                
                                if(-list.position().left<=0){
                                    clearInterval(stRtIn);
                                    clearInterval(stRtIn2);
                                    list.css({ 'left': 0 });
                                    leftBtn.addClass('hide');
                                }
                                
                            },25)
                            
                        }).bind('mouseleave', function () {
                            clearInterval(stRtIn);
                            stRtIn2=setInterval(function(){
                                if(stNb>0){
                                    stNb=stNb-0.1;
                                }else{
                                    stNb=0;
                                    clearInterval(stRtIn2);
                                }
                                list.css({'left': list.position().left + stNb});
 
                                if(-list.position().left<=0){
                                    clearInterval(stRtIn);
                                    clearInterval(stRtIn2);
                                    list.css({ 'left': 0 });
                                    leftBtn.addClass('hide');
                                }
                            },25)
                            
                        });

                        leftBtn.bind('click', function () {return false});
                    })

                }

            },
            error: function (xhr, status, errMsg) { alert(decodeURI(errMsg)); }
        });






















        $.ajax({
            cache: false,
            type: "GET",
            dataType: 'jsonp',
            jsonp: 'callback',
            url: "http://api.lotour.com/brandhome/API/SelectMoreHomeInSide?callback=?&isborad=1",
            success: function (data) {

                            var addHtml = '';
                            if (data != '没有数据！') {
                                if (data.length > 0) {
                                    $.each(data, function (index, item) {
                                        
                                        //if (index < 5) {
                                            var tagHt = '';
                                            $.each(item.TagCollections, function (indexIn, itemIn) {
                                                tagHt = tagHt
                                                    + '<a href="' + itemIn.Url + '" target="_blank">' + itemIn.TagName + '</a>'
                                            })


                                            addHtml = addHtml
                                                + '<li>'
                                                + '<a href="' + item.Url + '" class="img" target="_blank">'
                                                + '<img src="' + item.Pic + '">'
                                                + '<em><span>' + item.Dot + '</span></em>'
                                                + '</a>'
                                                + '<p class="rk clearfix">' + tagHt + '</p>'
                                                + '<h5><a href="' + item.Url + '" target="_blank">' + item.Title + '</a></h5>'
                                                + '<p class="tool"><a href="' + item.RegionUrl + '" target="_blank" title="' + item.RegionName + '">' + item.RegionName + '</a><i>' + item.CountBrowse + '</i></p>'
                                                + '</li>'
                                        //}
                                    })

                                }






                                $('.index-c-item .index-b-list .in ul').eq(0).each(function () {//判断是否有新加 有的话显示右按钮
                                    if (addHtml != '') {
                                        $(this).append(addHtml);
                                        $(this).siblings('.right').removeClass('hide');
                                    }
                                })


                                //重新排序新增li  
                                //$('.index-c-item .index-b-list .in ul').eq(1).find('li')..each(function () {
                                    //if (parseInt(Math.random() * 2) == 0) {//当前li随机插入队尾算法 
                                        //$(this).prependTo($(addHtml));
                                    //}
                                //});

                                //图片切换绑定
                                $('.index-c-item .index-b-list .in').eq(0).each(function () {
                                    var wt = $(this).outerWidth(true), leftBtn = $(this).find('.left'), rightBtn = $(this).find('.right'), list = $(this).find('ul');
                                    list.width(list.find('li').length * 300);
                                    rightBtn.bind('click', function () {
                                        var list = $(this).parent('.in').find('ul');
                                        if (-(list.position().left - 2 * wt) >= list.width()) {//如果到最右
                                            list.stop().animate({ 'left': -(list.width() - wt) });
                                            rightBtn.addClass('hide');
                                        } else {
                                            list.stop().animate({ 'left': list.position().left - wt });
                                        }
                                        leftBtn.removeClass('hide');
                                        return false
                                    });
                                    leftBtn.bind('click', function () {
                                        var list = $(this).parent('.in').find('ul');
                                        if (-(list.position().left) <= wt) {//如果到最左
                                            list.stop().animate({ 'left': 0 });
                                            leftBtn.addClass('hide');
                                        } else {
                                            list.stop().animate({ 'left': list.position().left + wt });
                                        }
                                        rightBtn.removeClass('hide');
                                        return false
                                    });
                                })





                        }




                addIk();//添加hover动画i标签





            },
            error: function (xhr, status, errMsg) { alert(decodeURI(errMsg)); }
        });










        $.ajax({
            cache: false,
            type: "GET",
            dataType: 'jsonp',
            jsonp: 'callback',
            url: "http://api.lotour.com/brandhome/API/SelectMoreHomeInSide?callback=?&isborad=1",
            success: function (data) {

                var addHtml = '';
                if (data != '没有数据！') {
                    if (data.length > 0) {
                        $.each(data, function (index, item) {
                            
                            //if (index < 5) {
                                var tagHt = '';
                                $.each(item.TagCollections, function (indexIn, itemIn) {
                                    tagHt = tagHt
                                        + '<a href="' + itemIn.Url + '" target="_blank">' + itemIn.TagName + '</a>'
                                })


                                addHtml = addHtml
                                    + '<li>'
                                    + '<a href="' + item.Url + '" class="img" target="_blank">'
                                    + '<img src="' + item.Pic + '">'
                                    + '<em><span>' + item.Dot + '</span></em>'
                                    + '</a>'
                                    + '<p class="rk clearfix">' + tagHt + '</p>'
                                    + '<h5><a href="' + item.Url + '" target="_blank">' + item.Title + '</a></h5>'
                                    + '<p class="tool"><a href="' + item.RegionUrl + '" target="_blank" title="' + item.RegionName + '">' + item.RegionName + '</a><i>' + item.CountBrowse + '</i></p>'
                                    + '</li>'
                            //}
                        })

                    }






                    $('.index-c-item .index-b-list .in ul').eq(1).each(function () {//判断是否有新加 有的话显示右按钮
                        if (addHtml != '') {
                            $(this).append(addHtml);
                            $(this).siblings('.right').removeClass('hide');
                        }
                    })


                    //重新排序新增li  
                    //$('.index-c-item .index-b-list .in ul').eq(1).find('li')..each(function () {
                    //if (parseInt(Math.random() * 2) == 0) {//当前li随机插入队尾算法 
                    //$(this).prependTo($(addHtml));
                    //}
                    //});

                    //图片切换绑定
                    $('.index-c-item .index-b-list .in').eq(1).each(function () {
                        var wt = $(this).outerWidth(true), leftBtn = $(this).find('.left'), rightBtn = $(this).find('.right'), list = $(this).find('ul');
                        list.width(list.find('li').length * 300);
                        rightBtn.bind('click', function () {
                            var list = $(this).parent('.in').find('ul');
                            if (-(list.position().left - 2 * wt) >= list.width()) {//如果到最右
                                list.stop().animate({ 'left': -(list.width() - wt) });
                                rightBtn.addClass('hide');
                            } else {
                                list.stop().animate({ 'left': list.position().left - wt });
                            }
                            leftBtn.removeClass('hide');
                            return false
                        });
                        leftBtn.bind('click', function () {
                            var list = $(this).parent('.in').find('ul');
                            if (-(list.position().left) <= wt) {//如果到最左
                                list.stop().animate({ 'left': 0 });
                                leftBtn.addClass('hide');
                            } else {
                                list.stop().animate({ 'left': list.position().left + wt });
                            }
                            rightBtn.removeClass('hide');
                            return false
                        });
                    })





                }









            },
            error: function (xhr, status, errMsg) { alert(decodeURI(errMsg)); }
        });





        $.ajax({
            cache: false,
            type: "GET",
            dataType: 'jsonp',
            jsonp: 'callback',
            url: "http://api.lotour.com/brandhome/API/SelectMoreHomeInSide?callback=?&isborad=2",
            success: function (data) {

                var addHtml = '';
                if (data != '没有数据！') {
                    if (data.length > 0) {
                        $.each(data, function (index, item) {
                            
                            //if (index < 5) {
                                var tagHt = '';
                                $.each(item.TagCollections, function (indexIn, itemIn) {
                                    tagHt = tagHt
                                        + '<a href="' + itemIn.Url + '" target="_blank">' + itemIn.TagName + '</a>'
                                })


                                addHtml = addHtml
                                    + '<li>'
                                    + '<a href="' + item.Url + '" class="img" target="_blank">'
                                    + '<img src="' + item.Pic + '">'
                                    + '<em><span>' + item.Dot + '</span></em>'
                                    + '</a>'
                                    + '<p class="rk clearfix">' + tagHt + '</p>'
                                    + '<h5><a href="' + item.Url + '" target="_blank">' + item.Title + '</a></h5>'
                                    + '<p class="tool"><a href="' + item.RegionUrl + '" target="_blank" title="' + item.RegionName + '">' + item.RegionName + '</a><i>' + item.CountBrowse + '</i></p>'
                                    + '</li>'
                            //}
                        })

                    }






                    $('.index-c-item .index-b-list .in ul').eq(2).each(function () {//判断是否有新加 有的话显示右按钮
                        if (addHtml != '') {
                            $(this).append(addHtml);
                            $(this).siblings('.right').removeClass('hide');
                        }
                    })


                    //重新排序新增li  
                    //$('.index-c-item .index-b-list .in ul').eq(1).find('li')..each(function () {
                    //if (parseInt(Math.random() * 2) == 0) {//当前li随机插入队尾算法 
                    //$(this).prependTo($(addHtml));
                    //}
                    //});

                    //图片切换绑定
                    $('.index-c-item .index-b-list .in').eq(2).each(function () {
                        var wt = $(this).outerWidth(true), leftBtn = $(this).find('.left'), rightBtn = $(this).find('.right'), list = $(this).find('ul');
                        list.width(list.find('li').length * 300);
                        rightBtn.bind('click', function () {
                            var list = $(this).parent('.in').find('ul');
                            if (-(list.position().left - 2 * wt) >= list.width()) {//如果到最右
                                list.stop().animate({ 'left': -(list.width() - wt) });
                                rightBtn.addClass('hide');
                            } else {
                                list.stop().animate({ 'left': list.position().left - wt });
                            }
                            leftBtn.removeClass('hide');
                            return false
                        });
                        leftBtn.bind('click', function () {
                            var list = $(this).parent('.in').find('ul');
                            if (-(list.position().left) <= wt) {//如果到最左
                                list.stop().animate({ 'left': 0 });
                                leftBtn.addClass('hide');
                            } else {
                                list.stop().animate({ 'left': list.position().left + wt });
                            }
                            rightBtn.removeClass('hide');
                            return false
                        });
                    })





                }









            },
            error: function (xhr, status, errMsg) { alert(decodeURI(errMsg)); }
        });




        $.ajax({
            cache: false,
            type: "GET",
            dataType: 'jsonp',
            jsonp: 'callback',
            url: "http://api.lotour.com/brandhome/API/SelectMoreHomeInSide?callback=?&isborad=2",
            success: function (data) {

                var addHtml = '';
                if (data != '没有数据！') {
                    if (data.length > 0) {
                        $.each(data, function (index, item) {
                            //if (index<5) { 
                                var tagHt = '';
                                $.each(item.TagCollections, function (indexIn, itemIn) {
                                    tagHt = tagHt
                                        + '<a href="' + itemIn.Url + '" target="_blank">' + itemIn.TagName + '</a>'
                                })


                                addHtml = addHtml
                                    + '<li>'
                                    + '<a href="' + item.Url + '" class="img" target="_blank">'
                                    + '<img src="' + item.Pic + '">'
                                    + '<em><span>' + item.Dot + '</span></em>'
                                    + '</a>'
                                    + '<p class="rk clearfix">' + tagHt + '</p>'
                                    + '<h5><a href="' + item.Url + '" target="_blank">' + item.Title + '</a></h5>'
                                    + '<p class="tool"><a href="' + item.RegionUrl + '" target="_blank" title="' + item.RegionName + '">' + item.RegionName + '</a><i>' + item.CountBrowse + '</i></p>'
                                    + '</li>'
                            //}
                        })

                    }






                    $('.index-c-item .index-b-list .in ul').eq(3).each(function () {//判断是否有新加 有的话显示右按钮
                        if (addHtml != '') {
                            $(this).append(addHtml);
                            $(this).siblings('.right').removeClass('hide');
                        }
                    })


                    //重新排序新增li  
                    //$('.index-c-item .index-b-list .in ul').eq(1).find('li')..each(function () {
                    //if (parseInt(Math.random() * 2) == 0) {//当前li随机插入队尾算法 
                    //$(this).prependTo($(addHtml));
                    //}
                    //});

                    //图片切换绑定
                    $('.index-c-item .index-b-list .in').eq(3).each(function () {
                        var wt = $(this).outerWidth(true), leftBtn = $(this).find('.left'), rightBtn = $(this).find('.right'), list = $(this).find('ul');
                        list.width(list.find('li').length * 300);
                        rightBtn.bind('click', function () {
                            var list = $(this).parent('.in').find('ul');
                            if (-(list.position().left - 2 * wt) >= list.width()) {//如果到最右
                                list.stop().animate({ 'left': -(list.width() - wt) });
                                rightBtn.addClass('hide');
                            } else {
                                list.stop().animate({ 'left': list.position().left - wt });
                            }
                            leftBtn.removeClass('hide');
                            return false
                        });
                        leftBtn.bind('click', function () {
                            var list = $(this).parent('.in').find('ul');
                            if (-(list.position().left) <= wt) {//如果到最左
                                list.stop().animate({ 'left': 0 });
                                leftBtn.addClass('hide');
                            } else {
                                list.stop().animate({ 'left': list.position().left + wt });
                            }
                            rightBtn.removeClass('hide');
                            return false
                        });
                    })





                }









            },
            error: function (xhr, status, errMsg) { alert(decodeURI(errMsg)); }
        });





    }

    aj();


})

window.onload = function () {

    $('.idx-travels ul li .zl h6').each(function () {
        if ($(this).height() < 55) {
            $(this).css('margin-top', '15px')
        }
    })



 

}