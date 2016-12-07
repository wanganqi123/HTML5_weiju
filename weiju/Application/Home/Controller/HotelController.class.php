<?php
namespace Admin\Controller;
use Think\Controller;
class HotelController extends Controller {
public function index(){
	//1、获取数据
	$hotelModel = M('hotel');
	$hotel = $hotelModel->select();
	//2、分配数据
	$this->assign('hotel', $hotel);
	//3、显示视图
    $this->display();
}

public function create(){
	$this->display();
}

public function store(){
	$hotelModel = M('hotel');//生成模型对象

	$data = $hotelModel->create();//创建数据对象
	if($hotelModel->add($data)){//添加数据
		$this->success('数据添加成功','index');
	}else{
		$this->error('数据添加失败');
	}
}
public function edit(){
	$id=I('id');
	$hotelModel = M('hotel');
	$data = $hotelModel->find();

	$this->assign('hotel', $data);
    $this->display();
}
public function update(){
	$hotelModel = M('hotel');//生成模型对象

	$data = $hotelModel->create();//创建数据对象
	if($hotelModel->save($data)){//添加数据
		$this->success('数据更新成功','index');
	}else{
		$this->error('数据更新失败');
	}
}
public function destroy(){
	$id = I('id');
	$hotelModel = M('hotel');
	if($hotelModel->where("id=$id")->delete()){
		$this->success('删除成功');
	}else{
		$this->showError('删除失败');
	}
}

}