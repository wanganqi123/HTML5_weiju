<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<meta name="viewport" content="width=device-width,intial-scale=1"/>
		<title>要去的地方</title>
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
		<script type="text/javascript">
		window.onload = function (){
			document.getElementById("body").style.zoom = window.screen.width/1366;
		}
		</script>
	</head>
	<body id="body">
		<!--头部导航与轮播图-->
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
	                        	<a href="<?php echo U('Home/yaoqu/yaoqudedifang');?>" title="要去的地方" class="ejdh1" style="background-color:rgba(0,0,0,0.2)!important; filter:Alpha(opacity=30);">要去的地方</a>
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
		<!--面包屑分割线与竖版菜单导航与内容-->
		<div class="content">

			<div class="content-header">
				<div id="mbx">
					<ul id="breadcrumb">
						<li><a href="<?php echo U('Home/index/index');?>"><span class="icon icon-home"> </span>首页</a></li>
  						<li><a href="<?php echo U('Home/yaoqu/yaoqudedifang');?>"><span class="icon icon-beaker"> </span> 要去的地方</a></li>
  						<li><a href="<?php echo U('Home/yaoqu/yaoqudedifang');?>"><span class="icon icon-double-angle-right"></span> 新南威尔士州</a></li>
  					</ul>
				</div>

				<div>
					<HR style="border:1 dashed #987cb9; margin-left:10%; margin-top:20px; margin-bottom:50px;" width="80%" color=#987cb9 SIZE=1>
				</div>
			</div>
			
			<div class="content-footer">

				<div class="lanrenzhijia" id="lanrenzhijia">
					<ul>
						<li class="on"><a href="<?php echo U('Home/yaoqu/yaoqudedifang');?>">新南威尔士州</a></li>
						<li class=""><a href="<?php echo U('Home/yaoqu/yaoqudedifang');?>">昆士兰</a></li>
						<li class=""><a href="<?php echo U('Home/yaoqu/yaoqudedifang');?>">维多利亚州</a></li>
						<li class=""><a href="<?php echo U('Home/yaoqu/yaoqudedifang');?>">北领地</a></li>
						<li class=""><a href="<?php echo U('Home/yaoqu/yaoqudedifang');?>">南澳大利亚</a></li>
						<li class=""><a href="<?php echo U('Home/yaoqu/yaoqudedifang');?>">西澳大利亚</a></li>
					</ul>
					<div class="hover" style="top: 40px;"></div>
				</div>
			
			<div class="content-text">
				<div class="zw">
					<div class="zwwz">
						<h1>新南威尔士州</h1>
						<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;新南威尔士州位于澳大利亚东南部，东濒太平洋，北邻昆士兰州，南接维多利亚州，是英国在澳大利亚最早的殖民地，也是澳大利亚人口最多、工业化和城市化水平最高的州。从地理区域上可分成沿海低地、大分水岭与西部平原。矿产资源、森林资源、旅游资源丰富，拥有世界最大之一的天然良港悉尼港。农牧业发达，农畜产品在澳大利亚占有重要地位。工业部门多，钢铁工业最为突出，机械制造业、纺织业等都很发达。主要城市有悉尼、纽卡斯尔、卧龙岗等。</p>
					</div>
					<div class="zwtp">
						<img src="/weiju/Public/home/images/yq1.jpg" width="400px" height="auto">
					</div>
				</div>
				<div class="lsyg">
						<h1>气候特征</h1>
						<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;新南威尔士州气候属温带型，气候温和，不会特别寒冷或特别炎热，一年四季分明，风和日丽，每年有240天的阳光日照，平均每天日照约6、7个小时。冬天气温在10度以上，夏天有时可达30度。夏季为12月至2月，平均最高气温25度，是在悉尼度假的最好时节。冬季是从6月到8月，平均最高低气温6度。9月至11月为春季，平均气温20度。3月至5月是金秋时节，平均气温16度。最高气温通常出现在西北部，最寒冷的地区是雪山地区，冬季的降雪霜冻时间很长。新南威尔士州各个地方的降水量差异颇大，在西北部地区，降水量平均每年只有180毫米。沿海地区较湿润，内陆地区白天酷热，夜晚寒冷。水旱灾害时有发生，有些灾害是厄尔尼诺效应所造成的。</p>
				</div>
				<div class="lsyg">
					<h1>风景名胜</h1>
					<div class="hh2">
						<h2><a href="<?php echo U('Home/yaoqu/content');?>">邦迪海滩</a></h2>
					</div>
					<div>
						<p>邦迪海滩（Bondi Beach）的名字来自于原居民的语言bondi，意思是海水拍岸的声浪。邦迪海滩（读音："BOND-eye" with a long i 听起来象“邦待”）长达1公里，虽然只是个沙滩滨海小镇，却是澳洲具历史的冲浪运动中心，是澳洲传统冲浪救生训练基地。邦迪海滩常年吸引无数国内富人和国外背包客、名人、家庭、滑板爱好者，以及美女们的到来，人们沿着邦迪海滩漫步，享受悉尼海滩的美好。</p>
						<a href="<?php echo U('Home/yaoqu/content');?>"><img src="/weiju/Public/home/images/春1.jpg" width="100%" height="300px"></a>
						<p class="zxkk"><a href="content.html">仔细看看&gt;&gt;</a></p>
					</div>
					<div class="hh2">
						<h2><a href="<?php echo U('Home/yaoqu/content');?>">圣玛丽大教堂</a></h2>
					</div>
					<div>
						<p>圣玛丽大教堂（Great St Mary's Church）位于剑桥市中心的核心位置。风景名胜圣玛丽大教堂教堂气势恢宏，拱廊极高，建有垂直线条的窗户。最佳旅游时间圣玛丽大教堂地处英国剑桥，气候温湿，四季皆宜旅游。历史文化圣玛丽大教堂是1478年后在一座老教堂原址上重新修建的。这座大学教堂很早就是剑桥的市教堂了。直到15世纪创建老学堂 (Old School)，院长和院士们都是在大圣玛丽教堂开会，大学将它的资料保存在这里，可以说，那时候这里是执政中心。一直到1730年，辩论、授予头衔和大学的其它活动都在这所教堂里举行。</p>
						<a href="<?php echo U('Home/yaoqu/content');?>"><img src="/weiju/Public/home/images/春2.jpg" width="100%" height="300px"></a>
						<p class="zxkk"><a href="<?php echo U('Home/yaoqu/content');?>">仔细看看&gt;&gt;</a></p>
					</div>
					<div class="hh2">
						<h2><a href="<?php echo U('Home/yaoqu/content');?>">悉尼歌剧院</a></h2>
					</div>
					<div>
						<p>悉尼歌剧院位于澳大利亚悉尼，是20世纪最具特色的建筑之一，也是世界著名的表演艺术中心、悉尼市的标志性建筑。该剧院设计者为丹麦设计师约恩·乌松，建设工作从1959开始，1973年大剧院正式落成。在2007年6月28日这栋建筑被联合国教科文组织评为世界文化遗产。悉尼歌剧院坐落在悉尼港的便利朗角（Bennelong Point），其特有的帆造型，加上作为背景的悉尼港湾大桥，与周围景物相映成趣。</p>
						<a href="<?php echo U('Home/yaoqu/content');?>"><img src="/weiju/Public/home/images/春3.jpg" width="100%" height="300px"></a>
						<p class="zxkk"><a href="<?php echo U('Home/yaoqu/content');?>">仔细看看&gt;&gt;</a></p>
					</div>
					<div>
						<p class="fy"><a href="#">&lt;&lt;</a>&nbsp;&nbsp;&nbsp;<a href="#">&lt;</a>&nbsp;&nbsp;&nbsp;<a href="#" style="color:#FF0000">1</a>&nbsp;&nbsp;&nbsp;<a href="#">2</a>&nbsp;&nbsp;&nbsp;<a href="#">3</a>&nbsp;&nbsp;&nbsp;<a href="#">4</a>&nbsp;&nbsp;&nbsp;<a href="#">5</a>&nbsp;&nbsp;&nbsp;<a href="#">&gt;&gt;</a></p>
					</div>
				</div>

			</div>
				
		</div>

		<!--尾部信息-->
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