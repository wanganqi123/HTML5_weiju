var jq = $;
 $(window).load(
    function () {
        /*创建幻灯片开始
        */
        var s = new slide();
        s.urls = ['images/first1.png', 'images/first2.png', 'images/first3.png'];//banner图片链接
        s.playTime = 4000;
        s.duration = 800;
        s.easing = "easeInOutQuad";
        s.clickEasing = "easeOutCubic";
        try {
            s.play();
        } catch (e) {
        }
        /*创建幻灯片结束*/
    }
);

/*幻灯片*/
function slide(urls, playTime, duration, easing, clickEasing) {
    var direction = "left";
    var flag = false;
    var prev = 2, num = 0, next = 1;
    var picList = jq("#picList");
    var slide_li = jq('.slide_li');
    var slide_img = jq('.slide_img');
    var thumb = jq("#slideThumb");
    var slideNum, size, tmpnum;
    var _this = this;
    var w;
    _this.urls = urls;//banner图片链接
    _this.playTime = playTime;//设置切换秒数
    _this.duration = duration;//设置滑动延迟秒数
    _this.easing = easing;//滑动效果
    _this.clickEasing = clickEasing;//点击时滑动效果


    /*自动设置切换按钮*/
    function setThumb() {
        size = picList.find("li").length;
        //var links = jq("#picList li img:first");
        var sb = new stringBuffer();
        sb.clear();
        for (var i = 1; i <= size; i++) {
            sb.append("<span class=\"slideNum\"></span>");
        }
        thumb.html(sb.toString());
        slideNum = thumb.find(".slideNum");
        num = (slideNum.width() + parseInt(slideNum.css("margin-right")) + 2) * size + 1;
        slideNum.eq(0).addClass("active");
    }

    //幻灯基本大小设置
    function slideLi(){
        w = 1349;
        slide_li.width(w);
    }

    function titleBar() {
        thumb.width(num + 2);
        jq("#titleBar .slideNum:first").addClass("active");
    }

    //自动播放
    function autoPlay() {
        flag = setInterval
            (
                function () {
                    num = jq("#slideThumb").find(".active").index("#slideThumb .slideNum");
                    if (num == (size - 1)) {
                        num = 0;
                        next = 1;
                        prev = 2;
                    }
                    else {
                        num++;
                        next = (num + 1)%3;
                        prev = (next + 1)%3;
                    }
                    //slide_li.eq(num).fadeIn(_this.duration).siblings().hide();
                    //picList.stop().animate({"margin-left":0 - num * w},{duration:_this.duration, easing:_this.easing});
                    slide_li.eq(prev).siblings().css({'left':0 + w});
                    slide_li.eq(prev).stop().animate({'left':0 - w},_this.duration,function(){
                        $(this).removeClass('.sActive').css({'left':0 + w});
                    });
                    slide_li.eq(num).stop().animate({'left':0},_this.duration);
                    slideNum.removeClass("active").eq(num).addClass("active");
                }, _this.playTime
            );
    }

    //点击事件
    function slideEvent() {
        slideNum.click
            (
                function () {
                    var thisNum = jq(this).index("#slideThumb .slideNum");
                    //slide_li.eq(thisNum).fadeIn(_this.duration).siblings().hide();
                    //picList.stop().animate({"margin-left":0 - jq(this).index("#slideThumb .slideNum") * w},{duration:_this.duration, easing:_this.clickEasing});
                    if(thisNum != num){
                        slide_li.stop();
                        slideNum.removeClass("active").eq(thisNum).addClass("active");
                        slide_li.eq(prev).css({'left':0 + w});
                        slide_li.eq(num).animate({'left':0 - w},_this.duration,function(){
                            if(thisNum == 2){
                                slide_li.eq(0).css({'left':0 + w})
                            }else{
                                $(this).next().css({'left':0 + w})
                            }
                        });
                        slide_li.eq(thisNum).css({'left':0 + w,'z-index':5}).animate({'left':0},_this.duration,function(){
                            slide_li.eq(thisNum).css({'z-index':1}).siblings().css({'left':0 + w});
                        });
                        num = thisNum;
                        next = (num + 1)%3;
                        prev = (next + 1)%3;
                    }else{return false}
                }
            );     
    }

    this.play = function () {
        setThumb();
        titleBar();
		autoPlay();
        slideLi();
		slideEvent();
		if ($.browser.msie && ($.browser.version == "6.0") && !$.support.style) {
			$('.airBottom').attr('src', 'style/images/blank.gif').get(0).runtimeStyle.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='style/images/airBottom.png',sizingMethod='scale')";
		}//修复ie6图片透明
        slide_li.eq(0).removeClass('first').siblings().css({'left':0 + w});
        num = 0;
    }

    //窗口大小变化
    $(window).resize(slideLi);
}

//StringBuffer功能，用于拼接字符串
function stringBuffer() {
    this._strings = new Array();
}
stringBuffer.prototype.append = function (str) {
    this._strings.push(str);
}
stringBuffer.prototype.toString = function () {
    return this._strings.join("");
}
stringBuffer.prototype.clear = function () {
    this._strings = [];
}
//登录注册实现

//进入登录页（1.从主页等网站直接进去登录页，2.从注册页进入登录页，注册页退出，背景有阴影）
function login(){              
    $("#light1").show(); 
    $("#fade").show(); 
    $("#light2").hide();
}
//登录页退出(无论什么情况，登录页退出时都无阴影)
function close1(){              
    $("#light1").hide();
    $("#fade").hide();
}
//进入注册页（无论什么情况，都在原来的基础上打开注册页，背景有阴影）
function register1(){           
    $("#light2").show(); 
    $("#fade").show();
}
//注册页退出（1.若从登录页进入注册页，完毕后登录页显示，背景有阴影；2.若从主页等网站直接进入注册页，完毕后直接退出，无阴影）
function close2(){              
    if(document.getElementById('light1').style.display=='block'){
         $("#light2").hide();
    }
    else{
        $("#light2").hide();
        $("#fade").hide();
    }
}
//实现搜索功能
function search1(){
  if(document.getElementById('search1').style.display == 'none'){
    $("#search1").show(); 
    $("#searchcs2").hide();
  }
  else{
    $("#search1").hide();
    $("#search2").hide();
  }
}
function search2_1(){
  $("#search1").click(function(e) {  
    $("#search2").show();  
        e.stopPropagation();  
  });  
  $("#search2").click(function(e) {  
    $(this).show();  
      e.stopPropagation();
  });  
  $("#search2_2").click(function(e) {  
    if (true) {
      $("#search2").hide(); 
      e.stopPropagation();
    } 
  });  
  $(document).click(function(event) {  
    if (true) {
      $("#search2").hide(); 
    } 
  });
}


(function ($) {
  jQuery.expr[':'].Contains = function(a,i,m){
      return (a.textContent || a.innerText || "").toUpperCase().indexOf(m[3].toUpperCase())>=0;
  };
  function filterList(header, list) { 
  var form = $("<form>").attr({"class":"filterform","action":"#","method":"post"}),
  input = $("<input>").attr({"class":"filterinput","type":"text","id":"search1","title":"请输入目的地","tabindex":"4","placeholder":"搜目的地","style":"display: none;","onfocus":"search2_1()","onkeydown":"if(event.keyCode==13) return false;"});
  $(form).append(input).appendTo(header);
  $(input)
      .change( function () {
        var filter = $(this).val();
        if(filter) {
      $matches = $(list).find('a:Contains(' + filter + ')').parent();
      $('td', list).not($matches).slideUp();
      $("#searchcs2").show();
      $matches.slideDown();
        } else {
          $("#searchcs2").hide();
          $(list).find("td").slideDown();
        }
        return false;
      })
    .keyup( function () {
        $(this).change();
    });
  }
  $(function () {
    filterList($("#searchform"), $("#searchcslist"));
  });
}(jQuery));










//输入框获得焦点时，显示提示内容
function showDesc(obj)
{  
   var id= obj.name;
   document.getElementById(id).style.display="inline";
}
//输入框失去焦点时检验输入内容是否有效
function checkText(obj)
{
   //获取输入框的id值
   var id= obj.name;
   var text=document.getElementById(id.toString().toUpperCase()).value;

   //判断是否为空
   if(text.replace(/\s/g, "")=="")
   {
      document.getElementById(id).innerHTML="<span class='tip'>输入不能为空</span>";
   }
   else
   {
     //组装方法
     //取首字母转换为大写,其余不变
     var firstChar=id.charAt(0).toString().toUpperCase();
     //
     var strsub=id.substring(1,id.length);
     var strMethod="check"+firstChar+strsub+"()";
     var isTrue = eval(strMethod);
     if(isTrue)
     {
         document.getElementById(id).innerHTML="";
     }
   }

   
}
function checkUsernamedl()
{
    //只简单的判断用户名的长度
    var id = document.getElementById("USERNAMEDL");
    var username=id.value;    
    if(username.length > 16)
    {
      document.getElementById(id.name).innerHTML = "<span class='tip'>输入的用户名过长</span>";
      return false;
    } 
    else
        return true;
}
function checkUsername()
{
    //只简单的判断用户名的长度
    var id = document.getElementById("USERNAME");
    var username=id.value;    
    if(username.length > 16)
    {
      document.getElementById(id.name).innerHTML = "<span class='tip'>输入的用户名过长</span>";
      return false;
    } 
    else
        return true;
}
function checkPassworddl()
{
    var id = document.getElementById("PASSWORDDL"); 
    var password = id.value;
    if(password.length < 6)
    {
        document.getElementById(id.name).innerHTML = "<span class='tip'>输入的密码过短</span>";
        return false;
    }
    else if(password.length > 16)
    {
        document.getElementById(id.name).innerHTML = "<span class='tip'>输入的密码过长</span>";
    }
    else
        return true;
}
function checkPassword()
{
    var id = document.getElementById("PASSWORD"); 
    var password = id.value;
    if(password.length < 6)
    {
        document.getElementById(id.name).innerHTML = "<span class='tip'>输入的密码过短</span>";
        return false;
    }
    else if(password.length > 16)
    {
        document.getElementById(id.name).innerHTML = "<span class='tip'>输入的密码过长</span>";
    }
    else
        return true;
}
function checkPassword2()
{
     var id=document.getElementById("PASSWORD");
     var id2=document.getElementById("PASSWORD2");
     var password = id.value;    
     var password2 = id2.value;
     if(password!=password2)
     {
        document.getElementById(id2.name).innerHTML="密码不一致";
        return false;
     }
     return true;    
}
function checkIDNumber()
{
  var id=document.getElementById("IDNUMBER"); 
  var IDNumber =id.value;
  if(IDNumber.length<18||IDNumber.length>19)
  {
    document.getElementById(id.name).innerHTML="身份证号长度有误";
    return false;
  }
  var expr=/([0]{18}[x|y]?)|([1]{18}[x|y]?)/i;
  if(expr.test(IDNumber))
  {
     document.getElementById(id.name).innerHTML="身份证号不可以全'0'或全'1'";
     return false;
  }
  return true;
}
function checkPhoneNumber()
{
// 利用正则表达式对输入数据匹配
   var id=document.getElementById("PHONENUMBER");
   var phone = id.value;     
//匹配到一个非数字字符，则返回false 
   var expr =  /\D/i;
   if(expr.test(phone))
   {
      document.getElementById(id.name).innerHTML="不能输入非数字字符";
      return false;
   }
   return true;

}
function checkEmail()
{
// 利用正则表达式对输入数据匹配
   var id =  document.getElementById("EMAIL")
   var email = id.value;    
//以字母或数字开头，跟上@,字母数字以.com结尾
   var expr =  /^([0-9]|[a-z])+@([0-9]|[a-z])+(\.[c][o][m])$/i;
   if(!expr.test(email))
   {
      document.getElementById(id.name).innerHTML="输入的邮箱格式有误";
      return false;
   }
   return true;
}


