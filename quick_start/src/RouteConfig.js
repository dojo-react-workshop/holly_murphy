import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Prompt
} from 'react-router-dom'

const RouteConfig = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/tacos">Tacos</Link></li>
        <li><Link to="/sandwiches">Sandwiches</Link></li>
      </ul>
      <Route path="/tacos" component={Tacos}/>
      <Route path="/sandwiches" component={Sandwiches}/>
      
    </div>
  </Router>
)

const Sandwiches = ()=>{
    return(<h1>Sandwiches</h1>)
}

const Tacos = () => {
    return(
        <Router>
            <div>
            <h1>Tacos</h1>
            <p><Link to='/tacos/bus'>Bus</Link></p>
            <p><Link to='/tacos/cart'>Cart</Link></p>

            <Route path='/tacos/bus' component={Bus} />
            <Route path='/tacos/cart' component={Cart} />
            </div>
        </Router>
    )
}

const Bus=()=>{
    return (
        <div>
            <p>Bus</p>
        </div>
    )
}

const Cart=()=>{
    return (
        <div>
            <p>Cart</p>
        </div>
    )
}


export default RouteConfig