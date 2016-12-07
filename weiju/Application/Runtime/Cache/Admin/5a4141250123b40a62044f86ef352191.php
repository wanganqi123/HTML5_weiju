<?php if (!defined('THINK_PATH')) exit();?><!doctype html>
<html>
<head>
    <meta charset="UTF-8">
    <title>微距后台主页</title>
    <link rel="stylesheet" type="text/css" href="/thinkphp_3/Public/admin/css/common.css"/>
    <link rel="stylesheet" type="text/css" href="/thinkphp_3/Public/admin/css/main.css"/>
    <script type="text/javascript" src="/thinkphp_3/Public/admin/js/libs/modernizr.min.js"></script>
</head>
<body>
<div class="topbar-wrap white">
    <div class="topbar-inner clearfix">
        <div class="topbar-logo-wrap clearfix">
            <h1 class="topbar-logo none"><a href="index.html" class="navbar-brand">后台管理</a></h1>
            <ul class="navbar-list clearfix">
                <li><a class="on" href="index.html">首页</a></li>
                <li><a href="#" target="_blank">网站首页</a></li>
            </ul>
        </div>
        <div class="top-info-wrap">
            <ul class="top-info-list clearfix">
               
                <li><a href="login.html">退出</a></li>
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
                        <li><a href="<?php echo U('Admin/user/allUser');?>"><i class="icon-font">&#xe008;</i>所有用户</a></li>
                        <li><a href="<?php echo U('Admin/user/addUser');?>"><i class="icon-font">&#xe005;</i>添加用户</a></li>
                    </ul>
                </li>
                <li>
                    <a href="#"><i class="icon-font">&#xe018;</i>城市管理</a>
                    <ul class="sub-menu">
                        <li><a href="<?php echo U('Admin/city/allCity');?>"><i class="icon-font">&#xe017;</i>所有城市</a></li>
                        <li><a href="<?php echo U('Admin/city/addCity');?>"><i class="icon-font">&#xe037;</i>添加城市</a></li>
                    </ul>
                </li>
                <li>
                    <a href="#"><i class="icon-font">&#xe018;</i>景点管理</a>
                    <ul class="sub-menu">
                        <li><a href="<?php echo U('Admin/sight/allSight');?>"><i class="icon-font">&#xe017;</i>所有景点</a></li>
                        <li><a href="<?php echo U('Admin/sight/addSight');?>"><i class="icon-font">&#xe037;</i>添加景点</a></li>
                    </ul>
                </li>
                <li>
                    <a href="#"><i class="icon-font">&#xe018;</i>酒店管理</a>
                    <ul class="sub-menu">
                        <li><a href="<?php echo U('Admin/hotel/allHotel');?>"><i class="icon-font">&#xe017;</i>所有酒店</a></li>
                        <li><a href="<?php echo U('Admin/hotel/addHotel');?>"><i class="icon-font">&#xe037;</i>添加酒店</a></li>
                    </ul>
                </li>
                <li>
                    <a href="#"><i class="icon-font">&#xe018;</i>留言板管理</a>
                    <ul class="sub-menu">
                        <li><a href="<?php echo U('Admin/board/allBoard');?>"><i class="icon-font">&#xe017;</i>留言板信息</a></li>
                    </ul>
                </li>
                <li>
                    <a href="#"><i class="icon-font">&#xe018;</i>攻略管理</a>
                    <ul class="sub-menu">
                        <li><a href="<?php echo U('Admin/strategy/allStrategy');?>"><i class="icon-font">&#xe017;</i>所有攻略</a></li>
                        <li><a href="<?php echo U('Admin/strategy/addStrategy');?>"><i class="icon-font">&#xe037;</i>添加攻略</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    </div> 
    <!--/sidebar-->
    
    <div class="main-wrap">
        <div class="crumb-wrap">
            <div class="crumb-list"><i class="icon-font"></i><a href="<?php echo U('Admin/index/index');?>">首页</a><span class="crumb-step">&gt;</span><span class="crumb-name">所有用户</span></div>
        </div>
        <div class="search-wrap">
            <div class="search-content">
                <form action="/jscss/admin/design/index" method="post">
                    <table class="search-tab">
                        <tr>
                            <th width="120">选择分类:</th>
                            <td>
                                <select name="search-sort" id="">
                                    <option value="">全部</option>
                                    <option value="19">旅客</option>
                                    <option value="20">导游</option>
                                </select>
                            </td>
                            <th width="70">关键字:</th>
                            <td><input class="common-text" placeholder="关键字" name="keywords" value="" id="" type="text"></td>
                            <td><input class="btn btn-primary btn2" name="sub" value="查询" type="submit"></td>
                        </tr>
                    </table>
                </form>
            </div>
        </div>
        <div class="result-wrap">
            <form name="myform" id="myform" method="post">
                <div class="result-title">
                    <div class="result-list">
                        <a href="<?php echo U('Admin/user/addUser');?>"><i class="icon-font"></i>新增用户</a>
                        <a id="batchDel" href="javascript:void(0)"><i class="icon-font"></i>批量删除</a>
                        <a id="updateOrd" href="javascript:void(0)"><i class="icon-font"></i>更新排序</a>
                    </div>
                </div>
                <div class="result-content">
                    <table class="result-tab" width="100%">
                        <tr>
                            <th class="tc" width="5%"><input class="allChoose" name="" type="checkbox"></th>
                            <th>排序</th>
                            <th>用户ID</th>
                            <th>用户昵称</th>
                            <th>密码</th>
                            <th>注册类型</th>
                            <th>收藏</th>
                            <th>留言</th>
                            <th>操作</th>
                        </tr>

                        <?php if(is_array($user)): $i = 0; $__LIST__ = $user;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i;?><tr>
                            <td class="tc"><input name="id[]" value="<?php echo ($vo["id"]); ?>" type="checkbox"></td>
                            <td>
                                <input name="ids[]" value="<?php echo ($vo["id"]); ?>" type="hidden">
                                <input class="common-input sort-input" name="ord[]" value="<?php echo ($vo["id"]); ?>" type="text">
                            </td>
                            <td><?php echo ($vo["id"]); ?></td>
                            <td><?php echo ($vo["name"]); ?></td>
                            <td><?php echo ($vo["password"]); ?></td>
                            <td><?php echo ($vo["type"]); ?></td>
                            <td><?php echo ($vo["star"]); ?></td>
                            <td><?php echo ($vo["comment"]); ?></td>
                            <td>
                                <a class="link-update" href="<?php echo U('Admin/room/edit');?>/id/<?php echo ($vo["id"]); ?>">修改</a>
                                <a class="link-del" href="<?php echo U('Admin/room/destroy');?>/id/<?php echo ($vo["id"]); ?>">删除</a>
                            </td>
                        </tr><?php endforeach; endif; else: echo "" ;endif; ?>
                       

                    </table>
                    <div class="list-page"> 2 条 1/1 页</div>
                </div>
            </form>
        </div>
    </div>
    <!--/main-->
</div>
</body>
</html>