//return an array of the products of every number except the one that corresponds to the index
//[1*3*8*2,5*3*8*2, etc ]
//no using division; optimize (don't use nested for loops)
function getProducts(array){
    //build an array of before products
    const beforeProds=[];
    let rollingProd = 1;
    for(let i=0; i<array.length; i+=1){
        beforeProds[i] = rollingProd
        rollingProd*=array[i]
    }
    //build an array of after products
    const afterProds=[];
    rollingProd=1
    for(let i=array.length-1; i>=0; i-=1){
        afterProds[i]=rollingProd;
        rollingProd*=array[i]
    }
    //build an array of before * after products
    const finalProds=[];
    for(let i=0; i<array.length; i+=1){
        finalProds[i] = beforeProds[i] * afterProds[i];
    }
    return finalProds
}
console.log(getProducts([1,2,3])) //[6,3,2]
