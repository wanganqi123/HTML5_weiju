<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html>
	<head>
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<title>注意事项</title>
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
		<!--本页面-->
		<style type="text/css">
		#zw a:link{
			color: #FF5F3E;
		}
		#zw a:hover{
			text-decoration: underline;
		}
		#zw a:visited { 
			color:#FF0000; 
			text-decoration:none; 
		} 
		#zw h1{
			margin-top: 5%;
			margin-bottom: 5%;
			margin-left: 40%;
			font-size: 32px;
			color: #333333;
		}
		#zw h2{
			font-family: "Myriad Pro", "Lucida Grande", "Verdana", sans-serif;
			margin-left:20%;
		}
		#zw{
			margin-left:20%;
			margin-right:15%;
			margin-bottom: 5%;
		}
		</style>
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
	                        	<a href="<?php echo U('Home/zhuyi/zhuyishixiang');?>" title="注意事项" class="ejdh3" style="background-color:rgba(0,0,0,0.2)!important; filter:Alpha(opacity=30);">注意事项</a>
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
  						<li><a href="<?php echo U('Home/zhuyi/zhuyishixiang');?>"><span class="icon icon-beaker"> </span> 注意事项</a></li>
  						<li><a href="<?php echo U('Home/zhuyi/zhuyishixiang');?>"><span class="icon icon-double-angle-right"></span> 货币</a></li>
  					</ul>
				</div>

				<div>
					<HR style="border:1 dashed #987cb9; margin-left:10%; margin-top:20px; margin-bottom:50px;" width="80%" color=#987cb9 SIZE=1>
				</div>
			</div>

			<div class="content-footer">

				<div class="lanrenzhijia" id="lanrenzhijia">
					<ul>
						<li class="on"><a href="<?php echo U('Home/zhuyi/zhuyishixiang');?>">货币</a></li>
						<li class=""><a href="<?php echo U('Home/zhuyi/zhuyishixiang');?>">时区</a></li>
						<li class=""><a href="<?php echo U('Home/zhuyi/zhuyishixiang');?>">交通</a></li>
						<li class=""><a href="<?php echo U('Home/zhuyi/zhuyishixiang');?>">签证</a></li>
						<li class=""><a href="<?php echo U('Home/zhuyi/zhuyishixiang');?>">道路安全</a></li>
						<li class=""><a href="<?php echo U('Home/zhuyi/zhuyishixiang');?>">健康安全</a></li>
						<li class=""><a href="<?php echo U('Home/zhuyi/zhuyishixiang');?>">实用信息</a></li>
					</ul>
					<div class="hover" style="top: 40px;"></div>
				</div>

				<div class="content-text">
					<div id="zw">
						<h1>前往澳大利亚</h1>
						<h2>货币：澳元和澳分</h2>
						<p id="zw">
							澳大利亚境内通用的货币是澳大利亚元，纸币面值有5、10、20、50和100元。
							<br/><br/>
							硬币面值有5、10、20和50美分以及1澳元和2澳元。
							<br/><br/>
							色彩鲜艳的纸币上印有古今澳大利亚名人头像。
							<br/><br/>
							100澳元纸币上印有世界闻名的女高音歌唱家内莉·梅尔巴夫人（Dame Nellie Melba）&nbsp; （1861–1931）和著名战士、工程师及军事将领约翰·莫纳什爵士（General Sir John Monash）&nbsp;(1865–1931)头像。
							<br/><br/>
							50澳元纸币上印有原著民作家及发明家戴维·乌奈庞（David Unaipon）&nbsp;(1872–1967）先生和澳大利亚第一位女性国会议员埃迪斯·科文（Edith Cowan）女士(1861–1932)头像。
							<br/><br/>
							20澳元纸币上印有世界首个空中医疗服务队（澳洲皇家空中医疗服务队）创始人约翰·弗莱恩教士（Reverend John Flynn）&nbsp;(1880–1951）和玛丽·莱蓓（Mary Reibey）女士 (1777–1855)头像，后者于1792年作为教会成员来到澳大利亚，后成为成功的航运大亨和慈善家。
							<br/><br/>
							10澳元纸币上印有诗人AB‘巴尼奥’佩特森（AB ‘Banjo’ Paterson）&nbsp;(1864–1941)和玛丽·吉尔摩夫人（Dame Mary Gilmore）&nbsp;(1865–1962)头像。
							<br/><br/>
							5澳元纸币上印有伊丽莎白二世女王陛下头像和位于首都堪培拉的国会大厦。
							<br/><br/>
							标准一澳元硬币和50、20、10、5澳分硬币图案皆由女王的官方指定珠宝设计师斯图尔特·徳夫林（Stuart Devlin）设计。
							<br/><br/>
							1元硬币上印有五只袋鼠。2元硬币上印有一位土著部落长者，背景是南十字座和当地禾木树。50分硬币上印有澳大利亚的盾形纹章：澳大利亚六个州的州徽印在正中盾牌上，盾牌两侧分别是袋鼠和鸸鹋。
							<br/><br/>
							20分硬币上印有鸭嘴兽，（很快将被替换成板球传奇人物唐纳德·布莱德曼（Donald Bradman） ；10分硬币上印有翩翩起舞的的雄琴鸟；5分硬币上印有针鼹鼠。
							<br/><br/>
							1996年澳大利亚成为世界上第一个拥有一整套聚合物（即塑料）纸币的国家。
							<br/><br/>
							怎样购买澳大利亚货币
							<br/><br/>
							银行、酒店和国际机场都设有货币兑换服务。和其他西方银行一样，澳大利亚银行提供一系列常规服务。提款机和自动取款机（ATM）随处可见，偏远的乡镇和澳洲内陆除外。电子资金售点转账（EFTPOS）也在澳大利亚各大商店广泛普及。交易可能产生额外手续费，尤其是跨国取款。
							<br/><br/>
							银行工作时间通常为周一至周四上午9.30分至下午4点，周五至下午5点。一些分行周六上午营业。澳大利亚四大银行：澳大利亚国立银行，澳大利亚新西兰银行（ANZ），澳大利亚联邦银行和西太平洋银行。小型银行：荷兰国际银行，AMP安保银行和汇丰澳洲银行。
							<br/><br/>
							澳大利亚邮政系统也提供银行业务，代表超过70家银行和金融机构，可使用信用卡和借记卡存取款，查询余额，支付信用卡账单以及向海外汇款。
							<br/><br/>
							对于计划在澳大利亚逗留任意时间或持有工作假期签证或其他类型延长签证的游客，建议在澳洲银行开户。澳大利亚大部分收入包括月薪周薪和政府救济金直接打入银行账户。
							<br/><br/>
							<a href="http://www.bankers.asn.au" target="_blank">澳大利亚银行家协会</a>可提供实用的独立信息，帮助人们选择最适合个人需要的银行账户。
							<br/><br/>
							在澳大利亚境内进行海外收汇款可在网上或银行做国际汇款（电汇）。最好在出发前安排多种海外收汇款方式，如使用信用卡、旅行支票、现金、借记卡或现金卡。
							<br/><br/>
							在国外获取现金最方便的方法就是通过由万事达Cirrus和维萨PLUS等国际网络支持的ATM机（自动取款机）取款。澳大利亚的ATM机使用四位密码，因此务必在出发前和银行确认修改密码。
							<br/><br/>
							信用卡和旅行支票
							<br/><br/>
							澳大利亚接受的信用卡有美国捷运、澳大利亚银行卡、大来卡、万事达卡、维萨卡和JCB卡。维萨卡和万事达卡最常用，可通用于所有接受信用卡的商铺。美国捷运和大来卡通用于大型超市，连锁百货商店和众多旅游景点。JCB卡只能用于有限的旅游景点。美国发现卡通常不被接受。
							<br/><br/>
							最好携带至少两张不同的信用卡，并非所有信用卡都被商家接受。确保携带少量现金，许多商店不接受15澳元以下消费使用信用卡。某些商铺信用卡消费可能产生附加费。
							<br/><br/>
							在澳大利亚，旅行支票并不如在其他国家使用广泛。小商店，饭馆和其他商业机构通常不了解汇率，使用他国旅行支票如美元或英镑支票可能不被接受，因此如有需要，最好购买澳元支票。
							<br/><br/>
							携带现金入境
							<br/><br/>
							携带现金出入境没有限额。如计划携带10,000澳元以上现金入境（澳元或同等外币），须在落地后向机场澳大利亚海关申报。携带本票、旅行支票、个人支票、汇票和邮政汇单须要填写可转让证券表格（BNI）。更多信息请咨询<a href="http://www.customs.gov.au" target="_blank">澳大利亚海关及边境保护局</a>。
							<br/><br/>
							商品和服务税
							<br/><br/>
							澳大利亚有10%的商品和服务税（GST）。离境30天内，如在一家商店消费满300澳元及以上，可申请商品退税。游客退税计划终端在国际航班航站楼出发区。更多信息详见澳大利亚政府公布的<a href="http://www.customs.gov.au/site/page4643.asp" target="_blank">游客退税计划</a>。
							<br/><br/>
							汇率转换器
							<br/><br/>
							这款方便的汇率转换器可以现行汇率将游客持有的货币转换成澳币。<a href="http://www.xe.com/ucc" target="_blank">全球通用汇率转换器</a>
						</p>
					</div>
				</div>
			</div>
		</div>
		<!--尾部-->
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