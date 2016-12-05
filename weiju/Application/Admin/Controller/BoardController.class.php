<?php
namespace Admin\Controller;
use Think\Controller;
class BoardController extends Controller {
public function index(){
	//1、获取数据
	$boardModel = M('board');
	$board = $boardModel->select();
	//2、分配数据
	$this->assign('board', $board);
	//3、显示视图
    $this->display();
}

public function create(){
	$this->display();
}

public function store(){
	$boardModel = M('board');//生成模型对象

	$data = $boardModel->create();//创建数据对象
	if($boardModel->add($data)){//添加数据
		$this->success('数据添加成功','index');
	}else{
		$this->error('数据添加失败');
	}
}
public function edit(){
	$id=I('id');
	$boardModel = M('board');
	$data = $boardModel->find();

	$this->assign('board', $data);
    $this->display();
}
public function update(){
	$boardModel = M('board');//生成模型对象

	$data = $boardModel->create();//创建数据对象
	if($boardModel->save($data)){//添加数据
		$this->success('数据更新成功','index');
	}else{
		$this->error('数据更新失败');
	}
}
public function destroy(){
	$id = I('id');
	$boardModel = M('board');
	if($boardModel->where("id=$id")->delete()){
		$this->success('删除成功');
	}else{
		$this->showError('删除失败');
	}
}

}