//feed function a string (any characters and parenthesis)
//we return a boolean if each one has a match
// var str='(asds(s)a32d)asd)'

//give an array of integers that designate terrace heights
//terrace can gather water -- what is the volume of water caught by the shape of the terraces
var terraceHeights=[3,1,5,6,4,2,3]
//    *
//   **
//   ***
// * *** *
// * *****
// *******

//return the total # of spots that water could hold (this would return 3)

var terraceHeights_2=[3,1,5,2,6,4,2,3]
    *
  * *
  * **
* * ** *
* ******
********
//find the max = 6
//solve for the left side of the max
//establish left bound variable = 3 //we know there can't be water stored here. we can iterate, starting at 1
//let current be arr[1]
//var water_count = 0
//check if current less than left bound? 
  //if yes, take difference from left bound and current and add to water_count=2
//current = arr[2]
  //is current < left bound
    //no: move left bound to current
//current = arr[3]
  //is current less than left bound?
  //etc.
//BREAK when current is = to max index
//start again with right side : iterate backwards with the same type of process
function findMaxInd(arr){
  var max=0;
  for (let i=0; i<arr.length; i++){
    if (arr[i] > arr[max]){
      max = i;
    }
  }
  return max;
}
function findHeight(arr){
  let left=0;
  let max=findMaxInd(arr);
  let count = 0;

  for(let i=1; i<max; i++){
    if(arr[i] < arr[left]){
      count += (arr[left] - arr[i])
    }else{
      left=i
    }
  }
  let rt=arr.length-1;
  for(let i=arr.length-1; i>max; i--){
    if(arr[i] < arr[rt]){
      count += arr[rt] - arr[i]
    }else{
      rt=i
    }
  }
  return count
}

console.log(findHeight(terraceHeights_2))

