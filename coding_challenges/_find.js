arr=[1,3,4,5,6]

Array.prototype.find=function(cb){
	var returnVal=0

	// this.forEach(function(val){
	// 	console.log(`val in foreach: ${val}`)
	// 	if(cb(val)===true){
	// 		console.log('should return')
	// 		returnVal= val;
	// 	}
	// })//foreach
	// return returnVal

	for(var i=0; i<this.length; i++){
		if(cb(this[i])===true){
			returnVal= this[i]
			break
		}
	}
	return returnVal
}

var val = arr.find(function(val){
	if(val>3){
		console.log('in true')
		return true
	}else{
		return false
	}
})

console.log(val)