  //reducer to update selectedTab
  const reducer=(state={
      tabs: [
            {
              id: 0,
              listOfItems: ['candies', 'peanuts', 'cracker jacks'],
              name: 'Holly'
            },
            {
              id: 1,
              listOfItems: ['tools', 'dogs', 'baseball'],
              name: 'Bob'
            },
            {
              id: 2,
              listOfItems: ['balls', 'food', 'jogging'],
              name: 'Fern'
            }
          ],
      selectedTab: 0,
      tabNo: 3
    }, action)=>{

    

    switch(action.type){
      case 'UPDATE_SELECTED_TAB':
        return Object.assign({}, state, {
          selectedTab: action.id
        })
      case 'ADD_TAB':
        let newState = Object.assign({},state)
        newState.tabs.push({
                id: state.tabNo,
                listOfItems: ['default'],
                name: action.name.name
            })
        newState.tabNo++
       return newState
       case 'ADD_ITEM':
         let ns=Object.assign({}, state)
         ns.tabs[action.id].listOfItems.push(action.item)
         return ns
      default:
        return state
    }
  }

  export default reducer