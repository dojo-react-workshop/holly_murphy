const array = [1,2,3,4];

Array.prototype.reduce=function(cb,currVal){
	let i=0;

	if(currVal === undefined){
		currVal=this[0];
		i=1;
	}
	//var currVal= currVal || this[0] //can use a for loop depending on the start or use forEach and skip the index

	for (i; i<this.length; i+=1){
		currVal=cb(currVal,this[i])
	}
	return currVal
}

//for example, sumcurrVal
const sum=array.reduce((currSum, val) => {
	return currSum + val
},100);

console.log(sum)