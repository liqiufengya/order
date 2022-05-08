function p1(){
    document.getElementById("q1").innerHTML=" ";
    document.getElementById("q2").innerHTML=" ";
    var name = document.getElementById("name").value;
    var pw = document.getElementById("pw").value;
    if(name==""){
        document.getElementById("q1").innerHTML="用户名不能为空！"
        onover();
        return;
    }
    if(name=="admin"){
      if(pw=="1888"){
        location.href='manage.html'
      }else{
        document.getElementById("q2").innerHTML="密码错误！";
      }
    }else{
      document.getElementById("q1").innerHTML="请输入正确的用户名！";
    }
  }