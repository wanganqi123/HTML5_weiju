<?php
namespace Admin\Controller;
use Think\Controller;
class UserController extends Controller {
public	function index(){
     $userModel=M('user');
     $user=$userModel->field(array('uid','name','password','type','star','thumb'))->select();
     $this->assign('user',$user);
     $this->display();     
   }

public function create(){
	$this->display();
}

public function store(){
	$upload = new \Think\Upload();
    $upload->maxSize=3145728 ;
    $upload->exts=array('jpg', 'gif', 'png', 'jpeg');
    $upload->rootPath  = THINK_PATH; 
    $upload->savePath  ='../Public/uploads/'; 
    // 上传文件 
    $info   =   $upload->upload();
    if(!$info) {
        $this->error($upload->getError());
    }else{
    	$userModel = M('user');
	    $data = $userModel->create();
	    $data['thumb']=$info['thumb']['savepath'].$info['thumb']['savename'];
	    if($userModel->add($data)){//添加数据
		$this->success('数据添加成功','index');
	    }else{
		$this->error('数据添加失败');
	    }
    }
}
// 修改
public  function edit(){
     $userModel=M('user');
     $id=(int)$_GET['uid'];
     $user=$userModel->where("uid=$id")->find();
     $this->assign('user',$user);
     $this->display();
   }

  //删除
public   function destroy(){
     $user=D('user');
     if($user->delete($_GET['uid'])){
       $this->success('删除成功');   
     }else{
       $this->error('删除失败');
     }
   }
public function update(){
	$userModel = M('user');
	$data = $userModel->create();
	if($userModel->save($data)){
		$this->success('数据更新成功','index');
	}else{
		$this->error('数据更新失败');
	}
}
}