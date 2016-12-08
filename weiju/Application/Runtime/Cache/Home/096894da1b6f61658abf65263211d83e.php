<?php if (!defined('THINK_PATH')) exit();?><html>
<head>
	<title>住哪里</title>
    <meta http-equiv="content-type" content="text/html; charset=utf-8"/>
	  <!-- <link href="css/zhunali_content.css" type="text/css" rel="stylesheet"/> -->
        <!--头部导航轮播图-->
        <link href="/weiju/Public/home/css/nav.css" rel="stylesheet" type="text/css">
        <link type="image/x-icon" rel="icon" href="/weiju/Public/home/images/bitbug_favicon.ico" media="screen" />
        <script type="text/javascript" src="/weiju/Public/home/js/jquery-3.1.1.min.js"></script>
        <script type="text/javascript" src="/weiju/Public/home/js/index.js"></script>
        <!--界面和面包屑-->
        <link rel="stylesheet" href="/weiju/Public/home/css/style.css">
        <script type="text/javascript" src="/weiju/Public/home/js/jquery.min.js"></script>
        <script type="text/javascript" src="/weiju/Public/home/js/style.js"></script>
        <!--竖版菜单导航-->
        <script type="text/javascript" src="/weiju/Public/home/js/jquery.js"></script>
        <script type="text/javascript" src="/weiju/Public/home/js/juheweb.js"></script>
        <!--尾部样式-->
        <link href="/weiju/Public/home/css/footer.css" rel="stylesheet" type="text/css">

    <style>
        *{ 
             margin: 0;
             padding: 0; 
             text-decoration: none;
        }
    ul{
            list-style: none;
        }
    .bnav a{
        color:black;
        }
    .line img{
      width: 1220px
        }
    .content{
        margin-left: 100px;
        margin-right: 100px;
        margin-top: 20px

    }
    .bnav{
        margin-left: 100px;
        margin-right: 100px;
        margin-top: 20px
    }
    .line{
        margin-left: 100px;
        margin-right: 100px;
        margin-top: 20px
    }
    .c_left{
            position: relative;
            width: 600px;
            height: 300px;
            overflow: hidden;
        }
    .pic{
            width:2400px;
            position: absolute;
            left:0;
            animation-name: focusmap;
            animation-duration: 5s;
            animation-iteration-count: infinite;//动画调用可以简写

        }
         @keyframes focusmap {
            0%,30%{
                left: 0;
            }
            35%,65%{
                left: -600px;
            }
            70%,99%{
                left: -1200px;
            }
            100%{
                left: -1800px;
            }
           
        }
      .pic li{
            float: left;
            background: #5dd94e;
        }

      .pic li img {
            width: 600px;
            height: 300px;
        }
    body{
        background-image: url(/weiju/Public/home/images/bg.jpg);
    }
    .liuyan{
      margin-right: 100px;
      margin-left: 100px
    }
     .ch{
        text-align: center;
        margin-bottom: 30px;
    }
    .fengexian{
        text-align: center;
    }
    .c_left{
      float: left;
    }
    .c_right{
      float: left;
      margin-left: 100px;
      background-color: white;
    }
    .c_right td{
        line-height: 2
    }
    .jianjie{
        clear: both
    }
    .jianp{
        margin-top: 10px
    }
    .t1{
        margin-top: 40px;
        margin-bottom: 20px;
        margin-left: 200px
    }
    .table1{
        background-color: white
    }
    .table1 td{
        font-size: 20px;
        line-height: 2
    }
    .h1{
        margin-top: 40px
    }
   .lvke{
    margin-top: 40px
    }
    .line1 img{
        width: 80%;
        margin-top: 40px
    }
    .l_left{
        float: left
    }
    .l_right{
        float: left;
        width: 80%
    }
    .l_left h3{
        margin-left: 20px
    }
    .l_left img{
        width: 70%
    }
    .jubao ul li{
        float:left;
        list-style:none;
        margin-left: 20px
    }
    .jubao ul li a{
        font-size: 20px;
        color:black;
    }
    .jubao{
        margin-top: 100px
    }
    .l_left{
        height: 20%;
    }
    .l1{
        height: 40%
    }
    
    </style>
    <script type="text/javascript">
        window.onload = function (){
            document.getElementById("body").style.zoom = window.screen.width/1366;
        }
        </script>
</head>
<body id="body">
  <!-- 导航栏 -->
   <div id="header">
            <div class="banner" id="slide">
                <ul id="picList">
                    <li class="slide_li first">
                        <div class="imgBg_home"></div>
                        <img class="slide_img" src="/weiju/Public/home/images/first1.jpg" width="100%" height="480px"/> 
                    </li>
                    <li class="slide_li">
                        <div class="imgBg_air"></div>
                        <img class="slide_img" src="/weiju/Public/home/images/first2.jpg" width="100%" height="480px"/>
                    </li>
                    <li class="slide_li">
                        <div class="imgBg_work"></div>
                        <img class="slide_img" src="/weiju/Public/home/images/first3.jpg" width="100%" height="480px"/> 
                    </li>
                </ul>
                <div id="slideThumb"></div>
            </div>
            <div class="lheader">
                <div class="hl">
                    <div class="logo">
                        <h1>
                            <a href="<?php echo U('Home/index/index');?>" title="微距">
                                <img src="/weiju/Public/home/images/u146.gif" width="98px" height="85px">
                            </a>
                        </h1>
                    </div>
                    <div class="menu">
                        <ul>
                            <li>
                                <a href="<?php echo U('Home/index/index');?>" title="首页" class="index">首页</a>
                            </li>
                            <li id="ejdh1">
                                <a href="<?php echo U('Home/yaoqu/yaoqudedifang');?>" title="要去的地方" class="ejdh1">要去的地方</a>
                                <ul>
                                    <li><a href="<?php echo U('Home/yaoqu/content');?>">新南威尔士州</a></li>
                                    <li><a href="<?php echo U('Home/yaoqu/content');?>">昆士兰</a></li>
                                    <li><a href="<?php echo U('Home/yaoqu/content');?>">维多利亚州</a></li>
                                    <li><a href="<?php echo U('Home/yaoqu/content');?>">北领地</a></li>
                                    <li><a href="<?php echo U('Home/yaoqu/content');?>">南澳大利亚</a></li>
                                    <li><a href="<?php echo U('Home/yaoqu/content');?>">西澳大利亚</a></li>
                                </ul>
                            </li>
                            <li id="ejdh2">
                                <a href="<?php echo U('Home/siji/sijituijian');?>" title="四季推荐" class="ejdh2">四季推荐</a>
                                <ul>
                                    <li><a href="<?php echo U('Home/siji/sijituijian');?>">春</a></li>
                                    <li><a href="<?php echo U('Home/siji/sijituijian');?>">夏</a></li>
                                    <li><a href="<?php echo U('Home/siji/sijituijian');?>">秋</a></li>
                                    <li><a href="<?php echo U('Home/siji/sijituijian');?>">冬</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="<?php echo U('Home/xingcheng/xingcheng');?>" title="行程推荐">行程推荐</a>
                            </li>
                            <li id="ejdh3">
                                <a href="<?php echo U('Home/zhuyi/zhuyishixiang');?>" title="注意事项" class="ejdh3">注意事项</a>
                                <ul>
                                    <li><a href="<?php echo U('Home/zhuyi/zhuyishixiang');?>">货币</a></li>
                                    <li><a href="<?php echo U('Home/zhuyi/zhuyishixiang');?>">时区</a></li>
                                    <li><a href="<?php echo U('Home/zhuyi/zhuyishixiang');?>">交通</a></li>
                                    <li><a href="<?php echo U('Home/zhuyi/zhuyishixiang');?>">签证</a></li>
                                    <li><a href="<?php echo U('Home/zhuyi/zhuyishixiang');?>">道路安全</a></li>
                                    <li><a href="<?php echo U('Home/zhuyi/zhuyishixiang');?>">健康安全</a></li>
                                    <li><a href="<?php echo U('Home/zhuyi/zhuyishixiang');?>">实用信息</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="<?php echo U('Home/zhuna/zhunali');?>" title="住哪里" style="background-color:rgba(0,0,0,0.2)!important; filter:Alpha(opacity=30);">住哪里</a>
                            </li>
                            <li><a href="<?php echo U('Home/liuxue/student');?>" title="留学生导游">留学生导游</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="rheader">
                <div class="dlzc">
                    <ul>    
                        <li><a href="javascript:void(0)" title="登录" onclick="login()">登录</a></li>
                        <li>|</li>
                        <li><a href="javascript:void(0)" title="注册" onclick="register1()" title="注册">注册</a></li>
                    </ul>
                </div>
                <div class="search">
                    <a href="#"><img src="/weiju/Public/home/images/u127.jpg" width="20px" height="20px" /></a>
                </div>
            </div>
            <div class="hr1">
                <hr color="#E4E4E4" width=91.5% size=1 align=center noshade>
            </div>
        </div>
        <div id="light1" class="white_content1">
            <a href="javascript:void(0)" onclick="close1()">
                <img src="/weiju/Public/home/images/03q58PICtSW_1024.png" width="18" height="24" id="imgclose">
            </a>
            <form method="post" id="signin1" action="index.html">
                <h1>登录</h1>
                <hr/>
                <div>
                    <label>
                        <p>用户名</p>
                        <p>
                            <input id="USERNAMEDL" name="usernamedl" value="" title="usernamedl" tabindex="4" type="text" onfocus="showDesc(this)" onblur="checkText(this)" placeholder="您的用户名"> 
                        </p>
                        <span id="usernamedl"  class='tip'></span>
                    </label>
                </div>
                <div>
                    <label>
                        <p>密码</p>
                        <p>
                            <input id="PASSWORDDL" name="passworddl" value="" title="password" tabindex="5" type="password"  onfocus="showDesc(this)" onblur="checkText(this)" placeholder="您的密码">
                        </p>
                        <span id="passworddl"  class='tip'></span>
                    </label>
                </div>
                <p class="remember">
                    <label><input type="checkbox" name="自动登录" > 保存密码</label>        
                    <a href=""></a>
                </p>
                <p class="logosub1">
                    <input type="button" name="" value="立即登录">
                </p>
                <div>
                    <p class="toregister">
                        还没有账号？<a href="javascript:void(0)" onclick="register1()">点击这里注册</a>
                    </p>
                </div>
            </form>
        </div>
        <div id="light2" class="white_content2">
            <a href="javascript:void(0)" onclick="close2()">
                <img src="/weiju/Public/home/images/03q58PICtSW_1024.png" width="18" height="24" id="imgclose">
            </a>
            <form method="post" id="signin2" action="index.html">
                <h1>注册</h1>
                <hr/>
                <div class="tregister">
                    <div>
                        <label>
                            <p>用户名<span> *</span></p>
                            <p>
                                <input id="USERNAME" name="username" value="" title="username" tabindex="4" type="text" onfocus="showDesc(this)" onblur="checkText(this)" placeholder="请输入1~16位以内的英文、数字组合" class="inputpp"> 
                            </p>
                            <span id="username"  class='tip'></span>
                        </label>
                    </div>
                    <div style="clear: left;" class="margintop">
                        <label>
                            <p>登录密码<span> *</span></p>
                            <p>
                                <input id="PASSWORD" name="password" value="" title="password" tabindex="5" type="password" onfocus="showDesc(this)" onblur="checkText(this)" placeholder="请输入6~16位以内的英文、数字组合" class="inputpp">
                                <span id="password" class='tip'></span>
                            </p>
                        </label>
                    </div>
                    <div class="margintop">
                        <label>
                            <p>确认密码<span> *</span></p>
                            <p>
                                <input id="PASSWORD2" name="password2" value="" title="password" tabindex="5" type="password" onfocus="showDesc(this)" onblur="checkText(this)" placeholder="请再次输入密码" class="inputpp">
                                <span id="password2"  class='tip'></span>
                            </p>
                        </label>
                    </div>
                    <div class="margintop">
                        <label>
                            <p>姓名</p>
                            <p>
                                <input id="IDname" name="IDname" value="" title="IDname" tabindex="5" type="text" placeholder="请输入您的真实姓名(选填)" class="inputpp">
                            </p>
                        </label>
                    </div>
                    <div class="sex">
                        <p>性别</p>
                        <p>
                            <div class="nan"><input type="radio" name="sex" checked="checked"> 男</div>
                            <div class="nv"><input type="radio" name="sex"> 女</div>
                        </p>
                    </div>
                    <div class="margintop">
                        <label>
                            <p>国家/地区</p>
                            <p>
                                <div>
                                    <input id="place" name="place" value="" title="place" tabindex="5" type="text" placeholder="请输入您所在的国家/地区(选填)" class="inputpp">
                                </div>
                            </p>
                        </label>
                    </div>
                    <div class="IDtype">
                            <p>用户类型<span> *</span></p>
                            <p>
                                <div class="tourist"><label><input type="radio" name="用户类型" checked="checked"> 游客</label></div>
                                <div class="ciceroni"><label><input type="radio" name="用户类型" > 导游</label></div>
                            </p>
                    </div>
                </div>
                <div class="bregister">
                    <div class="logosub2">
                        <a href="javascript:void(0)"  onclick="login()"><input type="button" name="" value="完成注册" style="text-align: center;"></a>
                    </div>
                    <div>
                        <p class="toregister">
                            已拥有账户？<a href="javascript:void(0)" onclick="login()">点击这里登录</a>
                        </p>
                    </div>
                </div>

            </form>
        </div>
        <div id="fade" class="black_overlay">123</div>
  <!-- 面包屑 -->
  <div class="content-header">
                <div id="mbx">
                    <ul id="breadcrumb">
                        <li><a href="<?php echo U('Home/index/index');?>"><span class="icon icon-home"> </span>首页</a></li>
                        <li><a href="<?php echo U('Home/zhuna/zhunali');?>"><span class="icon icon-beaker"> </span> 住哪里</a></li>
                        <li><a href="<?php echo U('Home/zhuna/zhunali_content');?>"><span class="icon icon-beaker"> </span> windsor hotel</a></li>
                    </ul>
                </div>

                <div>
                    <HR style="border:1 dashed #987cb9; margin-left:10%; margin-top:20px; margin-bottom:50px;" width="80%" color=#987cb9 SIZE=1>
                </div>
            </div>

<!-- 内容 -->
<div class="content">
  <h1 class="ch">windsor hotel</h1>
  <!-- 轮播图 -->
 
  <div class="c_left">
    <ul class="pic">
          <li><a href="javascript:;"><img src="/weiju/Public/home/images/zc1.jpg" alt="pic1"></a></li>
          <li><a href="javascript:;"><img src="/weiju/Public/home/images/zc2.jpeg" alt="pic2"></a></li>
          <li><a href="javascript:;"><img src="/weiju/Public/home/images/zc1.jpg" alt="pic1"></a></li>
          <li><a href="javascript:;"><img src="/weiju/Public/home/images/zc2.jpeg" alt="pic2"></a></li>
    </ul>
  </div>
  <!-- 表格 -->
  <div class="c_right">
    <table border="1px" cellspacing="0px">
      <tr>
        <td>景观</td>
        <td>自然</td>
      </tr>
      <tr>
        <td>主题</td>
        <td>探险</td>
      </tr>
      <tr>
        <td>风格</td>
        <td>名家设计</td>
      </tr>
      <tr>
        <td>卧室</td>
        <td>1</td>
      </tr>
      <tr>
        <td>浴室</td>
        <td>1</td>
      </tr>
      <tr>
        <td>可住人数</td>
        <td>2人</td>
      </tr>
      <tr>
        <td>服务</td>
        <td>无线，停车场，餐饮等</td>
      </tr>
    </table>
  </div>

<div class="jianjie">
  <h1>酒店简介</h1>
  <div class="jianp">
  <p>位于墨尔本市中心-商业区，地理位置优越，TheHotelWindsor是墨尔本短途游的理想出发点。在这里，旅客们可轻松前往市区内各大旅游、购物、餐饮地点。酒店的客人能在游览议会大楼、老财政大楼、市博物馆（在老库）等经典景点中愉悦身心。TheHotelWindsor一直致力于为您提供一流的设施与最尊贵的服务，确保您下榻期间愉快、惬意。为了给客人提供更舒适和更便利的服务，酒店配备了停车场、客房服务、洗衣服务/干洗、代客泊车、礼宾接待服务。TheHotelWindsor拥有180间客房，每间客房都装修考究，配有浴袍、空调、茶与咖啡冲泡设备、房内保险箱、液晶电视/等离子电视等顶级设备。除此之外，酒店各种娱乐设施一定会让您在留宿期间享受更多乐趣。TheHotelWindsor是来墨尔本旅游的最佳留宿酒店，为您提供一站式高品质服务。</p>
</div>
  <div class="t1">
<table   border="1px" cellspacing="0px" class="table1">
  <tr>
    <td>免费服务</td>
    <td>早餐 ，  机场接送，旅游咨询，客房服务，入住问候，酒精饮料 </td>
  </tr>
  <tr>
    <td>收费服务</td>
    <td>洗衣服务，按摩服务，成人加床，水疗服务</td>
  </tr>
  <tr>
    <td>别墅设施</td>
    <td>拖鞋，茶与咖啡设备</td>
  </tr>
  <tr>
    <td>综合设施</td>
    <td>徒步旅行，直升飞机观光</td>
  </tr>
  <tr>
    <td>娱乐/活动设施</td>
    <td>泳池，餐厅，吧台，户外用餐区，图书室</td>
  </tr>
  <tr>
    <td>综合设施</td>
    <td>泳池，餐厅，吧台，户外用餐区，图书室</td>
  </tr>
  <tr>
    <td>综合设施</td>
    <td>泳池，餐厅，吧台，户外用餐区，图书室</td>
  </tr>
  </table>
</div>
</div>
</div>
<!-- 旅客留言-->
<p class="fengexian">*******************************************************************************************************************************************************</p>
<div class="liuyan">
  <div class="h1">
  <h1>旅客留言</h1>
  </div>
  <div class="line1">
  <img src="/weiju/Public/home/images/line.png">
  </div>
  <div class="lvke">
    <div class="l1">
    <div class="l_left">
    <img src="/weiju/Public/home/images/zc3.jpg">
    <h3>我去上自习</h3>
    </div>
   <div class="l_right">
    <p>很开心，很喜欢这次旅行，来之前从网站上获取了很多很实用的东西，支持，顶顶顶！</p>
    <br/>
    <div class="jubao">
    <ul>
    <li><a href="#">举报</a></li>
    <li><a href="#">201楼</a></li>
    <li><a href="#">2015-1-1  22:30</a></li>
    <li><a href="#">回复</a></li>
   </ul>
   </div>
   </div>
  </div>
  <div class="l1">
    <div class="l_left">
    <img src="/weiju/Public/home/images/zc3.jpg">
    <h3>我去上自习</h3>
    </div>
   <div class="l_right">
    <p>很开心，很喜欢这次旅行，来之前从网站上获取了很多很实用的东西，支持，顶顶顶！</p>
    <br/>
    <div class="jubao">
    <ul>
    <li><a href="#">举报</a></li>
    <li><a href="#">201楼</a></li>
    <li><a href="#">2015-1-1  22:30</a></li>
    <li><a href="#">回复</a></li>
   </ul>
   </div>
   </div>
  </div>
  
</div>
</div>
<!-- footer -->
<div class="footer">
            <div class="footer">
            <div class="footerjkgz">
                <div class="footer1">
                    <div><label>即刻关注：</label></div>
                    <div><a href="#"><img src="/weiju/Public/home/images/14515034.png" width="50px" height="45px"></a></div>
                    <div><a href="#" class="footera">官方微博</a></div>
                    <div><a href="#"><img src="/weiju/Public/home/images/20161123213710.png" width="50px" height="45px"></a></div>
                    <div><a href="#" class="footera">官方微信</a></div>
                </div>
                <div class="footer2">
                    <div><label class="yqlj_">友情链接：</label></div>
                    <div><a href="http://www.cnta.com/" class="yqlj" target="_blank">国家旅游局</a></div>
                    <div><a href="http://travel.people.com.cn/" class="yqlj" target="_blank">人民网旅游</a></div>
                    <div><a href="http://travel.gmw.cn/index.htm" class="yqlj" target="_blank">光明网旅游</a></div>
                </div>
            </div>
            <div class="hr2">
                <hr color="#E4E4E4" size=1 align=center noshade>
            </div>
            <div class="footerliebiao">
                <div class="footerliebiao1">
                    <div>
                        <a href="<?php echo U('Home/yaoqu/yaoqudedifang');?>">要去的地方</a>
                    </div>
                    <hr color="#E4E4E4" size=1 align=center noshade class="hr3">
                    <div>
                        <ul>
                            <li><a href="#">新南威尔士州</a></li>
                            <li><a href="#">昆士兰</a></li>
                            <li><a href="#">维多利亚州</a></li>
                            <li><a href="#">北领地</a></li>
                            <li><a href="#">南澳大利亚</a></li>
                            <li><a href="#">西澳大利亚</a></li>
                        </ul>
                    </div>
                </div>
                <div class="footerliebiao1">
                    <div>
                        <a href="<?php echo U('Home/siji/sijituijian');?>">四季推荐</a>
                    </div>
                    <hr color="#E4E4E4" size=1 align=center noshade class="hr3">
                    <div>
                        <ul>
                            <li><a href="#">春</a></li>
                            <li><a href="#">夏</a></li>
                            <li><a href="#">秋</a></li>
                            <li><a href="#">冬</a></li>
                        </ul>
                    </div>
                </div>
                <div class="footerliebiao1">
                    <div>
                        <a href="<?php echo U('Home/xingcheng/xingcheng');?>">行程推荐</a>
                    </div>
                    <hr color="#E4E4E4" size=1 align=center noshade class="hr3">
                    <div>
                        <ul>
                            <li><a href="#">自驾之旅</a></li>
                            <li><a href="#">探险之旅</a></li>
                            <li><a href="#">自然野生动物</a></li>
                            <li><a href="#">美食美酒</a></li>
                        </ul>
                    </div>
                </div>
                <div class="footerliebiao1">
                    <div>
                        <a href="<?php echo U('Home/zhuyi/zhuyishixiang');?>">注意事项</a>
                    </div>
                    <hr color="#E4E4E4" size=1 align=center noshade class="hr3">
                    <div>
                        <ul>
                            <li><a href="#">货币</a></li>
                            <li><a href="#">时区</a></li>
                            <li><a href="#">交通</a></li>
                            <li><a href="#">签证</a></li>
                            <li><a href="#">道路安全</a></li>
                            <li><a href="#">健康安全</a></li>
                            <li><a href="#">实用信息</a></li>
                        </ul>
                    </div>
                </div>
                <div class="footerliebiao1">
                    <div>
                        <a href="<?php echo U('Home/zhuna/zhunali');?>">住哪里</a>
                    </div>
                    <hr color="#E4E4E4" size=1 align=center noshade class="hr3">
                    <div>
                        <ul>
                            <li><a href="#">按地区筛选</a></li>
                            <li><a href="#">按主题筛选</a></li>
                            <li><a href="#">按景观筛选</a></li>
                        </ul>
                    </div>
                </div>
                <div class="footerliebiao1">
                    <div>
                        <a href="<?php echo U('Home/liuxue/student');?>">留学生导游</a>
                    </div>
                    <hr color="#E4E4E4" size=1 align=center noshade class="hr3">
                    <div>
                        <ul>
                            <li><a href="#">留学生导游信息</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="footerqita">
                <div class="footerbz">
                    <a href="<?php echo U('Home/index/index');?>"><img src="/weiju/Public/home/images/u146.gif" width="110px" height="90px"></a>
                </div>
                <div class="footerlxfs">
                    <ul>
                        <li>地址：河北师范大学新校区</li>
                        <li>电子邮件：zmalqp246805@163.com</li>
                        <li>版权所有：河北师范大学软件学院微距小组</li>
                    </ul>
                </div>
            </div>
        </div>
</body>
</html>