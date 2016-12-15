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
function loginf(){
  $("#light1").hide();
  $("#fade").hide();
  document.getElementById('dlzc').style.display = 'none';
  document.getElementById('dlzcf').style.display = 'block';
}
function loginf1(){
  
}
//实现搜索功能
function search1(){
  if(document.getElementById('search1').style.display == 'none'){
    $("#search1").show(); 
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
function searchqh1(){
  document.getElementById('searchcs1').style.display="block";
  document.getElementById('searchcs2').style.display="none";
  document.getElementById('searchztb1').style.fontWeight = "bold";
  document.getElementById('searchztb2').style.fontWeight = "normal";
}
function searchqh2(){
  document.getElementById('searchcs1').style.display="none";
  document.getElementById('searchcs2').style.display="block";
  document.getElementById('searchztb1').style.fontWeight = "normal";
  document.getElementById('searchztb2').style.fontWeight = "bold";
}
function searchqh1_1(){
  document.getElementById('searchcs1').style.display="block";
  document.getElementById('searchcs2').style.display="block";
  document.getElementById('searchztb1').style.fontWeight = "bold";
  document.getElementById('searchztb2').style.fontWeight = "normal";
}
function searchqh2_1(){
  document.getElementById('searchcs1').style.display="block";
  document.getElementById('searchcs2').style.display="block";
  document.getElementById('searchztb1').style.fontWeight = "normal";
  document.getElementById('searchztb2').style.fontWeight = "bold";
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
      $("#searchcs1").show();
      $("#searchcs2").show();
      $('#searchztb1').attr('onmouseover','searchqh1_1()');
      $('#searchztb2').attr('onmouseover','searchqh2_1()');
      $matches.slideDown();
        } else {
          $('#searchztb1').attr('onmouseover','searchqh1()');
          $('#searchztb2').attr('onmouseover','searchqh2()');
          $("#searchcs1").show();
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


