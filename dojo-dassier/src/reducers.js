  //reducer to update selectedTab
  const reducer=(state={
      tabs: [
            {
              id: 0,
              listOfItems: ['random', 'items', 'in a list'],
              name: 'Item 1'
            }
          ],
      selectedTab: 0,
      tabNo: 1
    }, action)=>{

    console.log(`in reducer`)
    console.log(`state: `, state)
    console.log(`action: `, action.type)
    console.log(`action id: `, action.id)

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
                name: action.name
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