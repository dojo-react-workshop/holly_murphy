// function binaryStringExp(str, base='', results=[]){
//     if(str.length===0){
//         results.push(base);
//     }else{
//         if(str[0] ==='?'){
//             binaryStringExp(str.slice(1), base + '0', results)
//             binaryStringExp(str.slice(1),base+'1', results)
//         }else{
//             binaryStringExp(str.slice(1), base+str[0],results)
//         }
//     }
//     return results;
// }

// console.log(binaryStringExp('10?11?'))

function binStr(string, array=[]){
    const firstQuestionMarkLocation = string.indexOf('?')
    if(firstQuestionMarkLocation < 0){
        array.push(string);
        return array;
    }

    const firstSlice = string.slice(0,firstQuestionMarkLocation);
    const secondSlice = string.slice(firstQuestionMarkLocation + 1);

    binStr(firstSlice+'1' + secondSlice, array)
    binStr(firstSlice + '0' + secondSlice,array)

    return array
}

console.log(binStr('10?11?'))
