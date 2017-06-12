//given a string, return an array of the different combinations the string can be organized

function anaGram(str, base='', arr=[]){
    if(str===''){
        arr.push(base)
    }

    for(let i=0; i< str.length; i++){
        let newBase = base+str.slice(i,i+1)
        let newStr = str.slice(0,i) + str.slice(i+1)
        anaGram(newStr, newBase, arr)
    }
    
    return arr
}

console.log(anaGram('tar'))