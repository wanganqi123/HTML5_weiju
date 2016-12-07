<?php
namespace Admin\Controller;
use Think\Controller;
class UserController extends Controller {
public function index(){
	//1、获取数据
	$userModel = M('user');
	$user = $userModel->select();
	//2、分配数据
	$this->assign('user', $user);
	//3、显示视图
    $this->display();
}

public function create(){
	$this->display();
}

public function store(){
	$upload = new \Think\Upload();// 实例化上传类
    $upload->maxSize=3145728 ;// 设置附件上传大小
    $upload->exts=array('jpg', 'gif', 'png', 'jpeg');// 设置附件上传类型
    $upload->rootPath  = THINK_PATH; // 设置附件上传根目录
    $upload->savePath  ='../Public/uploads/'; // 设置附件上传（子）目录
    // 上传文件 
    $info   =   $upload->upload();
    if(!$info) {// 上传错误提示错误信息
        $this->error($upload->getError());
    }else{// 上传成功
        //$this->success('上传成功！');
        //创建模型
		$userModel = M('user');
		//组织数据
		$data = $userModel->create();
		//设置thumb字段属性(目录+名字)
		$data['thumb']=$info['thumb']['savepath'].$info['thumb']['savename'];
		
		//添加
		if($userModel->add($data)){
			$this->success('数据添加成功', 'index');
		}else{
			$this->showError('数据添加失败');
		}
    }
	
}

public function edit(){
	$id=I('uid');

	$userModel = M('user');
	$data = $userModel->find();

	$this->assign('user', $data);
    $this->display();
}

public function destroy(){
	$id = I('uid');
	$userModel = M('user');
	if($userModel->where("id=$id")->delete()){
		$this->success('删除成功');
	}else{
		$this->showError('删除失败');
	}
}

}