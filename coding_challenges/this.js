'use strict'
//gets at an instance of a particular object that is calling
//assigned a value according to the context of the code running around it

//console.log(this)

function myFunc(){
	console.log(this)
}

var obj={
	someFunc:myFunc
}

//obj.someFunc()
var test = new myFunc()

//checkout bind, apply, call for 'this' assignments