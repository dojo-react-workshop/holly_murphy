const myObj = {
    sum:(a, b)=>{
        return a+b
    },
    product:(a,b)=>{
        return a*b
    },
    square:(num) =>{
        return num*num
    },
    random:(a,b)=>{
     return (Math.random()*b) + a
    }
}
module.exports = myObj



