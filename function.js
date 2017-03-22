function forEach(array,func){
    for(var i = 0; i < array.length; i++){
         func(array[i]);
      }
  }

function reverse(func)
{
	return function(value){
		return !func(value);
	}
}

console.log(isNaN(NaN));
var isNotNaN = reverse(isNaN);
console.log(isNotNaN(NaN));

/**映射函数*/
function map(func,array)
{
	var result = [];
	forEach(array,function(value)
	{
		result.push(func(value));
	});
	return result;
}

function double(value)
{
	return value*value;
}

var a = [1,2,3,4,0];
console.log(map(double,a));

/**规约函数，操作符应用*/
function reduce(combine,base,array)
{
	forEach(array,function(value)
	{
		base = combine(base,value);
	});
	return base;
}

var ops = {
	"+":function(x,y){return x+y;},
	"-":function(x,y){return x-y;},
	"*":function(x,y){return x*y;},
	"/":function(x,y){return x/y;}
};

function operation(op,array)
{
	if(op in ops)
	{
		return reduce(ops[op],0,array);
	}
}

var a=[1,2,3,4,0]; 

console.log(operation("+",a));
console.log(operation("/",a));


