function myDoubleConsoleLog(param_1, param_2){
	if(typeof param_1 === "function"){
		console.log(param_1())
	}
	if(typeof param_2 === "function"){
		console.log(param_2())
	}
}

// function caller2(param){
// 	console.log('starting')
// 	function stateChange(newState) {
//     	setTimeout(function(){
//         	if(typeof param=== "function"){
//         		param()
//         	}
        	
//     	}, 2000);
// }

function caller2(param){

	console.log('starting')
	setTimeout(function(){
		if(typeof param==="function"){
			param()
		}
	},2000)

	console.log('ending?')
	return 'interesting'
}


//caller2((function(){myDoubleConsoleLog(function(){console.log(`param_1`)}, function(){console.log(`param_2`)})}))
myDoubleConsoleLog(function(){console.log(`param_1`); return 54;}, function(){console.log(`param_2`)})
