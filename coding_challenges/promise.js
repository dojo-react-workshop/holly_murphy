const receipt = new Promise((resolve, reject)=>{
	setTimeout(function(){
		//resolve();
		reject();
	},2000)
	
})

receipt.then(() =>{
	console.log('This promise has resolved')
},
()=>{
	console.log('This promise has rejected')
})//.then can take two functions; the first deals with condition of promise resolving
//second deals with what to do if a promise rejects -- can use .catch(cb) as well for the reject
//.then always resolves to a promise...which means we can .then again


//console.log(receipt)

//receipt (type of Promise) can be one of 3 states
//1. resolved
//2. rejected
//3. pending
//can only be set once



// const receiptA = new Promise((resolve, reject) => {
//     const rand = Math.random() * 1000;
//     setTimeout(function(){
//         resolve("BOOM!");
//     }, rand);
// });

// receiptA
//     .then(function(item){
//         console.log('ITEM: ', item);
//     });