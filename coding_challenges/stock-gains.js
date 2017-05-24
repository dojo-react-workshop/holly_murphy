//find max profit to be achieved from stock trades
//will provide successive prices for a stock

//call function getMaxProfit -- will feed in array 
// best profit made from one purchase and one sale (no shorting (have to purchase before sell))
//can't buy and sell in the same time slot
//buy lowest, sell highest -- after
const applePricesYesterday = [10,7,5,8,11,9] //we will have an array of prices
'use strict'

//APPLE
// Can't buy and sell in same time slots
//return best profit could have made from one purchase and one sale
//for this one, buy low at 5 and sell high at 11

function getMaxProfit(applePricesYesterday, ind){
	if (ind+1 >= applePricesYesterday.length){
		return;
	}

	let maxDiff = applePricesYesterday[ind+1] - applePricesYesterday[ind];

	for (let i = ind+2; i < applePricesYesterday.length; i++){
		let diff = applePricesYesterday[i] - applePricesYesterday[ind];
		if (diff > maxDiff){
			maxDiff = diff;
		}
	}

	let nextMax = getMaxProfit(applePricesYesterday, ind+1);
	if (nextMax === undefined){
		return maxDiff;
	} else if (maxDiff > nextMax){
		return maxDiff;
	} else {
		return nextMax;
	}

}

console.log(getMaxProfit(applePricesYesterday, 0)); 
