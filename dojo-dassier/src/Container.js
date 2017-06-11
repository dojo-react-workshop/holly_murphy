import { connect } from 'react-redux'
import Display from './Display'

const state={
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
    selectedTab: 0
  }

export default state