<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>登录页面</title>
	<link href="/weiju/Public/admin/css/login.css" type="text/css" rel="stylesheet"/>
	<link rel="stylesheet" href="/weiju/Public/admin/css/bootstrap.min.css"> 
	<script src="/weiju/Public/admin/js/login.js"></script>
	<style type="text/css">
	.logosub1{
	margin-top: 20px;
}
.logosub1 input{
	display: block;
    width: 40%;
    border: 1px solid #4169E1;
    height: 34px;
    font: 20px/34px \5FAE\8F6F\96C5\9ED1;
    color: #4169E1;
    text-align: center;
    background: #fff;
    border-radius: 5px;
    cursor: pointer;
}
</style>
</head>
<body>
<br/><br/><br/><br/><br/><br/><br/><br/>
<div class="body">

	<div class="left">
		<img src="/weiju/Public/admin/images/u2.jpg" width="100%" height="100%">
	</div>
	<div class="right">
		<h4 class="title">微距管理视窗<br/>WEIJUGUANLISHICHUANG</h4><br/>
		<div class="neirong">
		<div class="用户名">
		 <p>请输入用户名：</p>
		 <input type="text" value="" style="width:230px;height:20px;" />
		 </div>
		 <div>
		 <p>密&nbsp;码：</p>
		 <input type="password" value="" style="width:230px;height:20px;"/>
		 </div>
		
		 <input type="checkbox" value="checkbox" data-label="记住用户名" checked/> 记住用户名<br/>
		 
		
       	 <p class="logosub1">
       	 <a href="<?php echo U('Admin/index/index');?>"><input type="button" name="" value="立即登录"></a>
					
				</p>
       	 </div>

	</div>
</div>
<p class="bottom">河北师大软件学院微距  版权所有<br/>

服务电话：0311-88888888</p>
</body>
</html>