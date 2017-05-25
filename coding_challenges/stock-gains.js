//find max profit to be achieved from stock trades
//will provide successive prices for a stock

//call function getMaxProfit -- will feed in array 
// best profit made from one purchase and one sale (no shorting (have to purchase before sell))
//can't buy and sell in the same time slot
//buy lowest, sell highest -- after
//const applePricesYesterday = [10,7,5,8,11,9] //we will have an array of prices
'use strict'

//APPLE
// Can't buy and sell in same time slots
//return best profit could have made from one purchase and one sale
//for this one, buy low at 5 and sell high at 11

// function getMaxProfit(applePricesYesterday, ind=0){
// 	if (ind+1 >= applePricesYesterday.length){
// 		return //throw new Error('Must provide more than 1 price')
// 	}

// 	let maxDiff = applePricesYesterday[ind+1] - applePricesYesterday[ind];

// 	for (let i = ind+2; i < applePricesYesterday.length; i++){
// 		let diff = applePricesYesterday[i] - applePricesYesterday[ind];
// 		if (diff > maxDiff){
// 			maxDiff = diff;
// 		}
// 	}

// 	let nextMax = getMaxProfit(applePricesYesterday, ind+1);
// 	if (nextMax === undefined){
// 		return maxDiff;
// 	} else if (maxDiff > nextMax){
// 		return maxDiff;
// 	} else {
// 		return nextMax;
// 	}

// }

// console.log(getMaxProfit(applePricesYesterday, 0));

//more efficient track
function maxProfit(arr) {
    if(arr.length < 2){
        throw new Error('Must provide at least 2 prices.');
    }
    let buy = arr[0];
    let maxProfit = arr[1] - arr[0];
   for(let i=1; i<arr.length; i++) {
        if((arr[i]-buy) > maxProfit){
            maxProfit = arr[i]-buy;
        }
        if(arr[i] < buy){
            buy = arr[i];
        } 
    }
   return maxProfit;
}

var arr=[2,3,5,7,13,9]
const applePricesYesterday = [10,7,5,8,11,9]
var arr_2 = [1,-3]
console.log(findMaxProfit(arr))
console.log(findMaxProfit(arr_2))
console.log(findMaxProfit(applePricesYesterday))