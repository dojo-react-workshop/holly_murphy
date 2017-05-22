Array.prototype.map = function(cb){
	//this can access the array that was calling this function
	var newArr=[]

	this.forEach(function(val, ind, arr){
		newArr.push(cb(val, ind, arr))
	})
	return newArr
}

const a=[1,2,3,4,5,10,22,23]

const mappedArr = a.map(function(val, ind){
	return val*2;
})

console.log(mappedArr)
