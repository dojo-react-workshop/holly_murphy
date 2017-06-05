import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const Sidebar = () => (
  <Router>
    <div>
      
        <p><Link to="/">Home</Link></p>
        <p><Link to="/bubblegum">Bubblegum</Link></p>
        <p><Link to="/shoelaces">Shoelaces</Link></p>

        <Route path="/:id" component={Child}/>
    </div>
  </Router>
)

const Child = ({ match }) => (
  <div>
    <p>ID: {match.params.id}</p>
  </div>
)

export default Sidebar