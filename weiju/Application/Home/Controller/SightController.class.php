<?php
namespace Admin\Controller;
use Think\Controller;
class SightController extends Controller {
public function index(){
	//1、获取数据
	$sightModel = M('sight');
	$sight = $sightModel->select();
	//2、分配数据
	$this->assign('sight', $sight);
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
		$sightModel = M('sight');
		//组织数据
		$data = $sightModel->create();
		//设置thumb字段属性(目录+名字)
		$data['thumb']=$info['thumb']['savepath'].$info['thumb']['savename'];
		
		//添加
		if($sightModel->add($data)){
			$this->success('数据添加成功', 'index');
		}else{
			$this->showError('数据添加失败');
		}
    }
	
}

public function edit(){
	$id=I('sigid');

	$sightModel = M('sight');
	$data = $sightModel->find();

	$this->assign('sight', $data);
    $this->display();
}
public function update(){
	$sightModel = M('sight');//生成模型对象

	$data = $sightModel->create();//创建数据对象
	// $data['inputtime']=date('Y/m/d H:m:s' );
 //    $data['updatetime']=$data['inputtime'];

	if($sightModel->save($data)){//添加数据
		$this->success('数据更新成功','index');
	}else{
		$this->error('数据更新失败');
	}
}
public function destroy(){
	$id = I('id');
	$userModel = M('user');
	if($userModel->where("id=$id")->delete()){
		$this->success('删除成功');
	}else{
		$this->showError('删除失败');
	}
}

}