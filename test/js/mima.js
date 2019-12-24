function check()
{
	var name=document.getElementById("name").value;
	var pass=document.getElementById("pass").value;
	if(name=="1" && pass=="1")
	{
		alert("登入成功，跳转百度");
		window.document.f.action="https://www.baidu.com/";
		window.document.f.submit();
	}
	else
	{
		alert("用户名或密码错误");
	}
}