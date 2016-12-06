<?php
namespace Admin\Controller;
use Think\Controller;

class AdminController extends Controller {
    public function login(){
        if(IS_POST){
            $adminModel = M('admin'); 
            $condition = array(  
                "aname" => I("post.aname"),
                "password" => I("post.password")
            );
            $result = $adminModel->where($condition)->count();
            if($result>0){  
                session("aname",I("post.aname"));
                $this->success("登录成功",U("Index/index"));
            }
            else{
                $this->error("用户名或密码不正确");
            }
        }
        else{
            $this->display();
        }
    }

    public function add(){
        $this->display();
    }

    public function doAdd(){
        if(!IS_POST){
            exit("bad request");
        }
        $adminModel = D("admin");
        if(!$adminModel->create()){
            $this->error($adminModel->getError());          
        }
        if($adminModel->add()){
            $this->success("添加成功","index");
        }
        else{
            $this->error("添加失败");
        }
    }

    public function lists(){
        $admin = M("admin")->select();
        $this->assign('admin',$admin);
        $this->display();
    }

    public function delete(){
        $id = $_GET['id'];
        if(is_array($id))
        {
            foreach($id as $value)
            {
                M("admin")->delete($value);
            }
        $this->success("删除成功！");
        } 
        else{
            if(M("admin")->delete($id)){
                $this->success("删除成功！");
            }
        }
    }

    public function modi(){
        $id = $_GET['id'];
        $adminModel = D("admin")->find($id);
        $this->assign("admin",$admin);
        $this->display();
    }

    public function doModi(){
        if (!IS_POST) {
            exit("error param");
        }
        $adminModel = D('admin');
        if($adminModel->create()&&$adminModel->save())
        {
            $this->success("修改成功","lists");
        }
        else{
            $this->error($adminModel->getError());
        }
    }
}