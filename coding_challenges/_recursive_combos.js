//when given a string, return combos
//'abc' --> ['','a','ab','ac','bc', 'abc']

// function returnCombos(){
//     //break case

//     //recursively get the substring

// }

let str='abcd'
function subsets(str=''){
    if(str.length===0){
        return [''];
    }
    let subs = subsets(str.slice(1));
    let count = subs.length;
    for(let i=0; i<count; i++){
        subs.push(str.slice(0,1) + subs[i]);
    }
    return subs;
}

console.log(subsets(str))