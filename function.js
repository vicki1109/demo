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