function sum(x,y){
	var sum=0
	for(var i=x; i<=y; i++){
		sum+=i
	}
	console.log(`sum: ${sum}`)
}

sum(1,3)

function findMin(arr){
	var min=arr[0]
	arr.forEach(function(val,ind,arr){
		if(val < min){
			min=val
		}
	})
	return min
}

function findAvg(arr){
	var sum=0
	for(var y=0; y<arr.length; y++){
		sum+=arr[y]
	}
	return sum/arr.length
}
var avgResult = findAvg([1,5,90,25,-3,0])
console.log(`Avg: ${avgResult}`)

//var minVal = findMin([1,-3,4,7,-17])
//console.log(`min: ${minVal}`)


//anonymous function for sum
var sum_var=function(x,y){
	var sum=0
	for(var i=x; i<=y; i++){
		sum+=i
	}
	console.log(`sum: ${sum}`)
	return sum
}

var avg_var=function(arr){
	var sum=0
	for(var y=0; y<arr.length; y++){
		sum+=arr[y]
	}
	return sum/arr.length
}

var min_var=function(arr){
	var min=arr[0]
	arr.forEach(function(val,ind,arr){
		if(val < min){
			min=val
		}
	})
	return min
}

var obj_new={
	min:function(arr){
	var min=arr[0]
	arr.forEach(function(val,ind,arr){
		if(val < min){
			min=val
		}
	})
	return min
},

	avg:function(arr){
	var sum=0
	for(var y=0; y<arr.length; y++){
		sum+=arr[y]
	}
	return sum/arr.length
},
	
	sum:function(x,y){
	var sum=0
	for(var i=x; i<=y; i++){
		sum+=i
	}
	console.log(`sum: ${sum}`)
	return sum
}
}

var person={
	name:"Holly Murphy",
	distance_traveled:0,
	say_name: function(){
		alert(this.name)
	},
	say_something:function(param){
		alert(`${this.name} says '${param}'`)
	},
	walk:function(){
		this.distance_traveled += 3
		alert(`${this.name} is walking`)
	},
	run:function(){
		this.distance_traveled += 10
		alert(`${this.name} is running`)
	},
	crawl:function(){
		this.distance_traveled += 1
		alert(`${this.name} is running`)
	}
}







