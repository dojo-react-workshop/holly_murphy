'use strict'

function celebrityIDCreator(theCelebrities){
  var i;
  var uniqueID = 100;
  for(i=0; i<theCelebrities.length; i++){
    theCelebrities[i]["id"] = ()=>{
      return uniqueID + i;
    }
  }
  return theCelebrities
}

var actionCelebs = [{name:"Stallone",id:0}, {name:"Cruise",id:0},{name:"Willis",id:0}]
var createIdForActionCelebs = celebrityIDCreator(actionCelebs)
var stalloneID = createIdForActionCelebs[0]
var cruiseID = createIdForActionCelebs[1]
console.log(`stallone: ${stalloneID.id()}`)
console.log(`cruise: ${stalloneID.id()}`)
//console.log(celebrityIDCreator())