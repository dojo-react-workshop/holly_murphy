	const x=[3,5,"Dojo","rocks","Michael","Sensei"]

	x.forEach(function(val, ind, arr){
		console.log(val)
	})

	x.push(100)

	x.push(["hello", "world", "JavaScript is fun"])

	console.log(x)

	//for loop to sum all the numbers between 1-500
	function sumOneToFiveHundred(){
		var sum=0
		for(i=1; i<=500; i++){
			sum+=i;
		}
		return sum
	}

	console.log(sumOneToFiveHundred())

	function findMin(arr){
		var min=arr[0]
		arr.forEach(function(val, ind, arr){
			if(val<min){
				min=val;
			}
		})
		return min
	}

	var minResult = findMin([1,5,90,25,-3,0])
	console.log(`min: ${minResult}`)

	function findAvg(arr){
		var sum=0
		for(var y=0; y<arr.length; y++){
			sum+=arr[y]
		}
		return sum/arr.length
	}
	var avgResult = findAvg([1,5,90,25,-3,0])
	console.log(`Avg: ${avgResult}`)

var newNinja = {
	 name: 'Jessica',
	 profession: 'coder',
	 favorite_language: 'JavaScript', //like that's even a question!
	 dojo: 'Dallas'
	}

for(key in newNinja){
	console.log(`key value pair: ${key} ${newNinja[key]}`)
}