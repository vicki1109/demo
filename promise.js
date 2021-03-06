var NanShen = {
	"身高":180,
	"体重":80,
	"年薪":"200K",
	request:function(obj){
		if(Math.random()>0.2){
			obj.success();
		}
		else{
			obj.error(); 
		}
	}
};

var Request = function(name){
	return new Promise(function(resolve,reject){
		var failed = 0, request = function(){
			NanShen.request({
				name:name,
				success:function(){
					console.log(name+"攻略成功！");
					failed = 0;
					resolve();
				},
				error:function(){
					if(failed==0){
						console.log("第一次攻略"+name+"失败，重试一次！");
						failed = 1;
						request();
					}else{
						console.log("依然没有拿下"+name+",求婚失败！");
						reject();
					}
				}
			});
		}
		request();
	});
};

Request("岳父")
.then(function(){return Request("大伯");})
.then(function(){return Request("大姑");})
.then(function(){
	NanShen.request({
		name:"女神",
		success:function(){
			console.log("女神同意，求婚成功！");
		},
		error:function()
		{
			console.log("女神不同意，求婚失败！");
		}
	});
});

