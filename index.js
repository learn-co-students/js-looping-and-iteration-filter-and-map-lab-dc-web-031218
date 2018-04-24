// Code your solution here:
function driversWithRevenueOver(arr, num){
	return arr.filter(obj=>
		{	
			return obj['revenue'] > num;
		}
	);
}

function driverNamesWithRevenueOver(arr, num){
	let temp = arr.map(obj=>
	{
		if(obj.revenue > num){
			return obj.name
		}
	});
	return temp.filter(function(n){ return n != undefined }); 
}

function exactMatch(arr, attrObj){
	let key = '';
	let val = '';
	for(var i in attrObj){
		key = i;
		val = attrObj[i];
	}
	return arr.filter(obj=>
		{
			return obj[key] === val;
		}
	);
}

function exactMatchToList(arr, attrObj){
	let key = '';
	let val = '';
	for(var i in attrObj){
		key = i;
		val = attrObj[i];
	}
	let temp = arr.map(obj=>
		{
			if(obj[key] === val){
				return obj.name;
			}
		}
	);
	return temp.filter(function(n){return n != undefined});
}

