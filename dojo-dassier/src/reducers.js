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


    switch(action.type){
      case 'UPDATE_SELECTED_TAB':
        return Object.assign({}, state, {
          selectedTab: action.id
        })
      case 'ADD_TAB':
        let newState = Object.assign({},state)
        let newTabs = newState.tabs.slice()
        newTabs.push({
                id: state.tabNo,
                listOfItems: ['default'],
                name: action.name
            })
        newState.tabs=newTabs.slice()
        newState.tabNo++
       return newState
       case 'ADD_ITEM':
         let ns=Object.assign({}, state)
         ns.tabs = [ ...state.tabs ]
         let newItemsList = ns.tabs[action.id].listOfItems.slice()
        // let newItemsList = ns.tabs[action.id].listOfItems.push
         newItemsList.push(action.item)
         ns.tabs[action.id].listOfItems = newItemsList.slice()
         return ns
      default:
        return state
    }
  }

  export default reducer