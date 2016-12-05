<?php 
namespace Admin\Controller;
use Think\Controller;
class LoginController extends Controller {
    public function index(){        
        //配置页面显示内容
        $this->assign('title','登录界面');
        $this->display();
    }

    //用户登录页面
    public function login(){
        header("Content-Type:text/html; charset=utf-8");
        //首先检查验证码是否正确(验证码存在Session中)
        if(!$this->check_verify($_POST['verify'])){
            $this->error('验证码不正确');
        }

        $sql = "select * from admin where name = '%s' ";
        $db = M();
        $data = M()->query($sql, $_POST['username']);

        if ($data) {
            return $this->success('用户名正确');
        } else {
            return $this->error('用户名不对');
        }   
    }

    function verify(){
        $Verify =     new \Think\Verify();
        $Verify->fontSize = 30;
        $Verify->length   = 5;
        $Verify->useNoise = false;
        $Verify->entry();
    }

    public function checklen($data){
            if(strlen($data)>15 || strlen($data)<6){
            return false;
        }
        return true;
    }

    // 检测输入的验证码是否正确，$code为用户输入的验证码字符串
    private function check_verify($code, $id = ''){
        $verify = new \Think\Verify();
        return $verify->check($code, $id);
    }
}
