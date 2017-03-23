var NanShen = {
	"身高":180,
	"体重":80,
	"年薪":"200K",
	request:function(obj){
		if(Math.random()>0.2){
			obj.success();
		}else{
			obj.error();
		}
	}
};

var Request = function(names,success)
{
	var index = 0,first = 0;
	var request = function()
	{
		if(names[index]){
			NanShen.request({
				name:names[index],
				success:function()
				{
					first = 0;
					console.log("成功拿下"+names[index]);
					index++;
					request();
				},
				error:function()
				{
					if(first==1){
						console.log("依旧没能拿下"+names[index]+",求婚失败");
						return;
					}else{
						console.log("没能拿下"+names[index]+",再试一次");
					}
					first = 1;
					request();
				}
			});
		}else{
			success();
		}
	};
	request();
};

Request(["岳父","大伯","大姑"],function(){
	NanShen.request({
		name:"女神",
		success:function(){
			console.log("女神同意，求婚成功！");
		},
		error:function(){
			console.log("女神不同意，求婚失败！");
		}
	});
});
