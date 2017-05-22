Array.prototype.filter = function (cb) {
    var newArr = [];
    this.forEach(function(val) {
        if (cb(val)) {
            newArr.push (val);
        }
        
    });        

    return newArr
}

const a=[1,2,3,4,5,10,22,23]

const filteredArr = a.filter(function(val){
	return (val%2===0)
})
console.log(filteredArr)

