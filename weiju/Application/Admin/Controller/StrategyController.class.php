<?php
namespace Admin\Controller;
use Think\Controller;
class StrategyController extends Controller {
public function index(){
	//1、获取数据
	$strategyModel = M('strategy');
	$strategy = $strategyModel->select();
	//2、分配数据
	$this->assign('strategy', $strategy);
	//3、显示视图
    $this->display();
}

public function create(){
	$this->display();
}

public function store(){
	$strategyModel = M('strategy');//生成模型对象

	$data = $strategyModel->create();//创建数据对象
	if($strategyModel->add($data)){//添加数据
		$this->success('数据添加成功','index');
	}else{
		$this->error('数据添加失败');
	}
}
public function edit(){
	$id=I('id');
	$strategyModel = M('strategy');
	$data = $strategyModel->find();

	$this->assign('strategy', $data);
    $this->display();
}
public function update(){
	$strategyModel = M('strategy');//生成模型对象

	$data = $strategyModel->create();//创建数据对象
	if($strategyModel->save($data)){//添加数据
		$this->success('数据更新成功','index');
	}else{
		$this->error('数据更新失败');
	}
}
public function destroy(){
	$id = I('id');
	$strategyModel = M('strategy');
	if($strategyModel->where("id=$id")->delete()){
		$this->success('删除成功');
	}else{
		$this->showError('删除失败');
	}
}

}