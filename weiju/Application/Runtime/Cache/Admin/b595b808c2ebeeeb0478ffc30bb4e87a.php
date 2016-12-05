<?php if (!defined('THINK_PATH')) exit();?><!doctype html>
<html>
<head>
    <meta charset="UTF-8">
    <title>微距后台主页</title>
    <link rel="stylesheet" type="text/css" href="/weiju/Public/admin/css/common.css"/>
    <link rel="stylesheet" type="text/css" href="/weiju/Public/admin/css/main.css"/>
    <script type="text/javascript" src="/weiju/Public/admin/js/libs/modernizr.min.js"></script>
</head>
<body>
<div class="topbar-wrap white">
    <div class="topbar-inner clearfix">
        <div class="topbar-logo-wrap clearfix">
            
            <ul class="navbar-list clearfix">
                <li><a class="on" href="<?php echo U('Admin/index/index');?>">首页</a></li>
                <li><a href="<?php echo U('Home/index/index');?>" target="_blank">网站首页</a></li>
            </ul>
        </div>
        <div class="top-info-wrap">
            <ul class="top-info-list clearfix">
               
                <li><a href="#">退出</a></li>
            </ul>
        </div>
    </div>
</div>
<div class="container clearfix">
    <div class="sidebar-wrap">
        <div class="sidebar-title">
            <h1>菜单</h1>
        </div>
        <div class="sidebar-content">
            <ul class="sidebar-list">
                <li>
                    <a href="#"><i class="icon-font">&#xe003;</i>用户管理</a>
                    <ul class="sub-menu">
                        <li><a href="<?php echo U('Admin/user/index');?>"><i class="icon-font">&#xe008;</i>所有用户</a></li>
                        <li><a href="<?php echo U('Admin/user/create');?>"><i class="icon-font">&#xe026;</i>添加用户</a></li>
                    </ul>
                </li>
                <li>
                    <a href="#"><i class="icon-font">&#xe040;</i>城市管理</a>
                    <ul class="sub-menu">
                        <li><a href="<?php echo U('Admin/city/index');?>"><i class="icon-font">&#xe008;</i>所有城市</a></li>
                        <li><a href="<?php echo U('Admin/city/create');?>"><i class="icon-font">&#xe026;</i>添加城市</a></li>
                    </ul>
                </li>
                <li>
                    <a href="#"><i class="icon-font">&#xe033;</i>景点管理</a>
                    <ul class="sub-menu">
                        <li><a href="<?php echo U('Admin/sight/index');?>"><i class="icon-font">&#xe008;</i>所有景点</a></li>
                        <li><a href="<?php echo U('Admin/sight/create');?>"><i class="icon-font">&#xe026;</i>添加景点</a></li>
                    </ul>
                </li>
                <li>
                    <a href="#"><i class="icon-font">&#xe043;</i>酒店管理</a>
                    <ul class="sub-menu">
                        <li><a href="<?php echo U('Admin/hotel/index');?>"><i class="icon-font">&#xe008;</i>所有酒店</a></li>
                        <li><a href="<?php echo U('Admin/hotel/create');?>"><i class="icon-font">&#xe026;</i>添加酒店</a></li>
                    </ul>
                </li>
                <li>
                    <a href="#"><i class="icon-font">&#xe048;</i>留言板管理</a>
                    <ul class="sub-menu">
                        <li><a href="<?php echo U('Admin/board/index');?>"><i class="icon-font">&#xe008;</i>留言板信息</a></li>
                    </ul>
                </li>
                <li>
                    <a href="#"><i class="icon-font">&#xe049;</i>攻略管理</a>
                    <ul class="sub-menu">
                        <li><a href="<?php echo U('Admin/strategy/index');?>"><i class="icon-font">&#xe008;</i>所有攻略</a></li>
                        <li><a href="<?php echo U('Admin/strategy/create');?>"><i class="icon-font">&#xe026;</i>添加攻略</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    </div> 
    <!--/sidebar-->
    
    <div class="main-wrap">
        <div class="crumb-wrap">
            <div class="crumb-list"><i class="icon-font">&#xe06b;</i><span>欢迎进入微距管理后台</span></div>
        </div>
        <div class="result-wrap">
            <div class="result-title">
                <h1>快捷操作</h1>
            </div>
            <div class="result-content">
                <div class="short-wrap">
                    <a href="<?php echo U('Admin/user/index');?>"><i class="icon-font">&#xe014;</i>所有用户</a>
                    <a href="<?php echo U('Admin/sight/index');?>"><i class="icon-font">&#xe029;</i>所有景点</a>
                    <a href="<?php echo U('Admin/hotel/index');?>"><i class="icon-font">&#xe043;</i>所有酒店</a>
                    <a href="<?php echo U('Admin/board/index');?>"><i class="icon-font">&#xe048;</i>留言板信息</a>
                    <a href="<?php echo U('Admin/strategy/index');?>"><i class="icon-font">&#xe049;</i>所有攻略</a>
                </div>
            </div>
        </div>
        
        <div class="result-wrap">
            <div class="result-title">
                <h1>系统基本信息</h1>
            </div>
            <div class="result-content">
                <ul class="sys-info-list">
                    <li>
                        <label class="res-lab">操作系统</label><span class="res-info">WINNT</span>
                    </li>
                    <li>
                        <label class="res-lab">运行环境</label><span class="res-info">Apache/2.2.21 (Win64) PHP/5.3.10</span>
                    </li>
                    <li>
                        <label class="res-lab">上传附件限制</label><span class="res-info">2M</span>
                    </li>
                    <li>
                        <label class="res-lab">北京时间</label><span class="res-info">2014年3月18日 21:08:24</span>
                    </li>
                    <li>
                        <label class="res-lab">服务器域名/IP</label><span class="res-info">localhost [ 127.0.0.1 ]</span>
                    </li>
                    <li>
                        <label class="res-lab">Host</label><span class="res-info">127.0.0.1</span>
                    </li>
                </ul>
            </div>
        </div>
        
    </div>
    <!--/main-->
</div>
</body>
</html>