//will get a 2d array

const big=[
    [2,61,3,61,2],
    [1,6,4,5,4],
    [17,3,61,5,0]
]

const small=[
    [1,6],
    [17,3]
]

const small2=[
    [1,2],
    [3,4]
]

const small3=[
    [3,61,2],
    [4,5,4],
    [61,5,0]
]


//return true or false : is the small contained in the larger?

const matrixSearch = (large, small) => {
    for(let y=0; y <= large.length-small.length; y++){
        for(let x=0; x<= large[y].length-small[0].length; x++){
            if(large[y][x] === small[0][0]){
                let found = true;
                for(let ys=0; ys<small.length;ys++){
                    for(let xs=0; xs<small[ys].length; xs++){
                        if(small[ys][xs]!=large[y+ys][x+xs]){
                            found = false
                        }
                    }
                }
                if(found) return true;
            }
        }
    }
    return false
}

console.log(matrixSearch(big,small3))
