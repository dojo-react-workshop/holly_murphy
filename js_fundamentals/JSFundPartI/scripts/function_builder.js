//basic 1
function runningLogger(){
	console.log(`I am running`)
}

function multiplyByTen(val){
	return val*10
}

multiplyByTen(5)

function stringReturnOne(){
	return 'stringOne'
}

function stringReturnTwo(){
	return 'stringTwo'
}

function caller(param){
	if(typeof param === "function"){
		param()
	}
}

function myDoubleConsoleLog(param_1, param_2){
	if(typeof param_1 === "function"){
		param_1()
	}
	if(typeof param_2 === "function"){
		param_2()
	}
}

function caller2(param){
	console.log('starting')
	function stateChange(newState) {
    	setTimeout(function(){
        	if(typeof param=== "function"){
        		param()
        	}
        	
    	}, 2000);
}
	console.log('ending?')

	
	return 'interesting'
}

var testFunc=(function(){
	console.log('test_1')
})
var testFunc_2=(function(){
	console.log('test_2')
})
caller2((myDoubleConsoleLog(function(){console.log(`param_1`)}, function(){console.log(`param_2`)})))
//caller2(testFunc, testFunc_2)