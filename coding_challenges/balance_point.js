//This function doesn't work with negative number

// function bp(arr){
//     let i = 0;
//     let j = arr.length-1;
//     let sum1 = arr[i];
//     let sum2 = arr[j];
//     while (j > i) {
//         if (sum1 >= sum2){
//             j-- 
//             sum2 += arr[j]
//         }
//         if (sum2 > sum1){
//             i++
//             sum1 += arr[i]
//         }
//     }
//     return sum1 === sum2
// }
// // console.log(bp([1,2,4,1,2]))
// console.log(bp([1,2,4,3,2,2]))

function bp(arr){
    //calc sum of entire array
    let sum1=Array.reduce(function(accum, val){
        return accum + val;
    })

    let sum2 = 0;
    for(let i=0; i< array.length; i+=1){
        if(sum1 === sum2){return true;}
        let current = array[i]
        sum2 += current;
        sum1 -= current;
    }
    return false;
}
console.log(bp([1,2,4,3,2,2]))