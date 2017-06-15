//call function
//will provide an amount
//will also provide an amount and demoniations



const fetchChangeData = (amt, denominations) => {
    let waysToMakeChange = 0;
    if(amount === 0){
         return 0
     }

    recursivelyMakeChange(amt, 0)

    return waysToMakeChange;

   
}

 function recursivelyMakeChange(amt, coinIdx){
    if(amount === 0){
        waysToMakeChange += 1;
        return;
    }

    if(coinIdx === denominations.length){
        return;
    }

    const currentDenomination = denomination[coinIdx]
    if(currentDenomination <= amount){
        recursivelyMakeChange(amount - currentDenomination, coinIdx)
    }
    //leave the first one off the denominations array
    recursivelyMakeChange(amount, denominations.slice(1))

}
// (4, [1,2,3])
// 1111
// 22
// 211
// 31

//return 4 (4 ways to generate 4 with those denominations)

//(5, [1,3,5])
//  --------------
// 11111
// 311
// 5

//returns 3
//-----------------------------------------------------------------------
//my idea: start at the end and pop off until you have the # of combos

// response: takes too much space as it would continually create a new array

//-----------------------------------------------------------------------
//Jason's solution
// function fetchChangeData(target, coins, sum=0, index=0){
//     if (sum === target) {
//         return 1;
//     }
//     if (index >= coins.length || sum > target) return 0
//     let count = 0;
//     let newSum = sum;
//     for (let i = 0; newSum <= target; i++){
//         newSum = coins[index]*i + sum
//         count += fetchChangeData(target, coins, newSum, index+1)
//     }
//     return count;
// }