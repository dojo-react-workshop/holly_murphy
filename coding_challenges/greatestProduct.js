// function greatestProduct(arr){
//     let mostNeg = Infinity
//     let mostNeg2 = Infinity
//     let mostNeg3 = Infinity
//     let mostPos = -Infinity
//     let mostPos2 = -Infinity
//     let mostPos3 = -Infinity
    
//     for(let i=0; i< arr.length; i++){
//         if(arr[i] < mostNeg2){
//             if(arr[i] < mostNeg){
//                 mostNeg2 = mostNeg
//                 mostNeg = arr[i]
//             }
//         }
//         if(arr[i] > mostPos3){
//             if(arr[i] > mostPos2){
//                 if(arr[i] > mostPos){
//                     mostPos3 = mostPos2
//                     mostPos2 = mostPos
//                     mostPos = arr[i]
//                 }else{
//                     mostPos3 = mostPos2
//                     mostPos2 = arr[i]
//                 }
//             }else{
//                 mostPos3=arr[i]
//             }
//         }
//     }
//     let prod1=mostNeg*mostNeg2*mostPos
//     let prod2=mostPos*mostPos2*mostPos3
//     return(prod1<prod2?prod2:prod1)
// }

function greatestProduct(arr){
    const [first, second] = arr
    let highestProductOf2;
    let lowestProductOf2;
    let highest;
    let lowest;

    arr.reduce(highestProductOf3, val, ind)=>{
        if(ind < 2){
            return highestProductOf3;
        }

        highestProductOf2 = Math.max(highestProductOf2, highest * val);
        lowestProductOf2 = Math.max(lowestProductOf2, lowest*val)
        highest = Math.max(highest,val)
        lowest = Math.max(lowest,val);

        return highestProductOf3;
    },first*second*third
    
}

console.log(greatestProduct([1,2,3,1,1]))