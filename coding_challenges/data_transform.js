//array of objects; we care about city
//spit out an array of unique cities

var data=[
    {
        "name": "holly",
        "address": "w wisconsin ave",
        "city": "Milwaukee"
    },
    {
        "name": "holly",
        "address": "w wisconsin ave",
        "city": "San Francisco"
    },
     {
        "name": "holly",
        "address": "w wisconsin ave",
        "city": "San Francisco"
    }
]

// uniqueCities = (arr)=>{
//     let unique=[];
//     arr.forEach(({ city })=>{
//         if(unique.indexOf(city)<0){
//             unique.push(city);
//         }
//     })
//     return unique;
// }

// uniqueCities = (arr)=>{
//     let unique={
//     };
//     arr.forEach(({ city })=>{
//             unique[city]=city;
//     })
//     return Object.keys(unique);
// }

//using reduce
uniqueCities = (arr)=>{
    const unique=arr.reduce((accum, personObj)=>{
        let city=personObj.city;
        accum[city] = true;
        return accum
    }, {}) //{} is your starting accum
    return Object.keys(unique)
}

// unique=uniqueCities(data)
// unique.forEach((val)=>{
//     console.log(`for each: `, val)
// })
console.log(uniqueCities(data))