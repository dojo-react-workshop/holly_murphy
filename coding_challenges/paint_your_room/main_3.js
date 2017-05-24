const orderSupplies = (item) => {
  // The orderSupplies function first finds the item you requested
  const warehouse = [
    { item: 'paint', action(){ return 'start mixing!' } },
    { item: 'brush', action(){ return 'start painting!' } }
  ];

  const deliveryTime = Math.random()*3000 + 1000
  
  return new Promise((resolve, reject) =>{
    setTimeout( () => {
      const foundItem = warehouse.find((obj) => obj.item === item);

      if (foundItem) {
        resolve(foundItem);
      }

      }, deliveryTime )
  })
}

const print = (delivery) => console.log(`${delivery.item} delivered! Time to ${delivery.action()}`);

//these are promises
var getPaint = orderSupplies('paint')
var getBrush = orderSupplies('brush')

getPaint.then(function(item){
  print(item)
  return getBrush
}).then(function(item){
  print(item)
})


// orderSupplies('paint')
//   .then(function(item){
//     print(item)
//     return orderSupplies('brush')
//   }).then(function(item){
//     //orderSupplies('brush')
//     print(item)
//   })


// const receiptA = new Promise((resolve, reject) => {
//     const rand = Math.random() * 1000;
//     setTimeout(function(){
//         resolve("BOOM!");
//     }, rand);
// });

// receiptA
//     .then(function(item){
//         console.log('ITEM: ', item);
//     });