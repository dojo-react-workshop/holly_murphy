arr=[1,3,4,5,6]

Array.prototype.find=function(cb){
	var returnVal=-1

//for every value in the array calling the function, call the callback and return true when the cb returns true
for (let x=0; x<this.length; x++){
    if(cb(this[x]) === true){
        returnVal=this[x]
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