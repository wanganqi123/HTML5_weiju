<?php if (!defined('THINK_PATH')) exit();?>
<html>
<head>
	<title>南威尔士州太平洋海岸自驾游</title>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
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
    .content{
    	margin-left:100px;
    	margin-right: 100px ;
    	margin-top: 20px
    }
    .line img{
    	width: 1100px;
    	margin-top: 20px;
    	margin-bottom: 20px
    }
    .img img{
    	width: 100%;
    	height:40%;
    }
    .luxian h2,.main h1,.main p{
    	text-align: center;
    	line-height: 2
    }
   .jieshao{
    margin-bottom: 50px;
   }
   .luxian{
    margin-bottom: 50px;
   }
    </style>
    <script type="text/javascript">
    window.onload = function (){
      document.getElementById("body").style.zoom = window.screen.width/1366;
    }
    </script>
</head>
<body id="body">
	<!-- 导航 -->
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
                            <a href="<?php echo U('Home/xingcheng/xingcheng');?>" title="行程推荐" style="background-color:rgba(0,0,0,0.2)!important; filter:Alpha(opacity=30);">行程推荐</a>
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
                            <a href="<?php echo U('Home/zhuna/zhunali');?>" title="住哪里">住哪里</a>
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
	<!-- 内容 -->
	<div class="content">
		<!-- 面包屑 -->
		<div class="content-header">
                <div id="mbx">
                    <ul id="breadcrumb">
                        <li><a href="<?php echo U('Home/index/index');?>"><span class="icon icon-home"> </span>首页</a></li>
                        <li><a href="<?php echo U('Home/xingcheng/xingcheng');?>"><span class="icon icon-beaker"> </span> 行程推荐</a></li>
                         <li><a href="<?php echo U('Home/xingcheng/xingcheng_content');?>"><span class="icon icon-beaker"> </span>新南威尔士州太平洋海岸自驾游</a></li>
                    </ul>
                </div>

                <div>
                    <HR style="border:1 dashed #987cb9;  margin-top:20px; margin-bottom:50px;" width="100%" color=#987cb9 SIZE=1>
                </div>
            </div>
		<!-- 分界线 -->
		<div class="line">
            
        </div>
		<!-- 主要内容 -->
		<div class="main">
			<div class="one">
			<div class="img">
				<img src="/weiju/Public/home/images/xc1.jpg">
			</div>
			<div class="jieshao">
				<div class="luxian"><h2>悉尼 – 中央海岸 – 猎人谷 – 史蒂芬斯港 –考夫斯港– 拜伦湾 – 黄金海岸</h2></div>
				<h1>旅游概况</h1>
				<p>漫步在中央海岸闪闪发光的海滩和草木茂盛的土地上，再去猎人谷的酿酒厂和迷人的史蒂芬斯港闲逛。在考夫斯港雨林中的高尔夫球课程中练习着挥杆，在拜伦湾海滩上感受着度假的气氛。在孤岛海洋公园潜水，和五颜六色的鱼类一同游泳，或是去黄金海岸享受着灿烂的阳光。这条驾驶路线将带领你从悉尼到布里斯班，沿途你将会看到大片的海滩、安宁的乡镇、苔藓覆盖的雨林，你会感觉自己时而在冒险时而在放松。</p>
			</div>
		    </div>
		    <div class="one">
			<div class="img">
				<img src="/weiju/Public/home/images/xc1.jpg">
			</div>
			<div class="jieshao">
				<div class="luxian"><h2>悉尼 – 中央海岸 – 猎人谷 – 史蒂芬斯港 –考夫斯港– 拜伦湾 – 黄金海岸</h2></div>
				<h1>旅游概况</h1>
				<p>漫步在中央海岸闪闪发光的海滩和草木茂盛的土地上，再去猎人谷的酿酒厂和迷人的史蒂芬斯港闲逛。在考夫斯港雨林中的高尔夫球课程中练习着挥杆，在拜伦湾海滩上感受着度假的气氛。在孤岛海洋公园潜水，和五颜六色的鱼类一同游泳，或是去黄金海岸享受着灿烂的阳光。这条驾驶路线将带领你从悉尼到布里斯班，沿途你将会看到大片的海滩、安宁的乡镇、苔藓覆盖的雨林，你会感觉自己时而在冒险时而在放松。</p>
			</div>
		    </div>
		</div>
		<div class="one">
			<div class="img">
				<img src="/weiju/Public/home/images/xc1.jpg">
			</div>
			<div class="jieshao">
				<div class="luxian"><h2>悉尼 – 中央海岸 – 猎人谷 – 史蒂芬斯港 –考夫斯港– 拜伦湾 – 黄金海岸</h2></div>
				<h1>旅游概况</h1>
				<p>漫步在中央海岸闪闪发光的海滩和草木茂盛的土地上，再去猎人谷的酿酒厂和迷人的史蒂芬斯港闲逛。在考夫斯港雨林中的高尔夫球课程中练习着挥杆，在拜伦湾海滩上感受着度假的气氛。在孤岛海洋公园潜水，和五颜六色的鱼类一同游泳，或是去黄金海岸享受着灿烂的阳光。这条驾驶路线将带领你从悉尼到布里斯班，沿途你将会看到大片的海滩、安宁的乡镇、苔藓覆盖的雨林，你会感觉自己时而在冒险时而在放松。</p>
			</div>
		    </div>
		</div>
		</div>
	</div>
	<!-- 尾部 -->
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

</body>
</html>