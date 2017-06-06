import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Prompt
} from 'react-router-dom'

const ModalGallery = () => (
  <Router>
    <div>
        <Link to='/gallery'>Visit the Gallery</Link>
        <h2>Featured Images</h2>
      <ul>
        <li><Link to="/img/2">Tomato</Link></li>
        <li><Link to="/img/4">Crimson</Link></li>
      </ul>
      <Route path="/gallery" component={Gallery}/>
      
    </div>
  </Router>
)


const Gallery = ()=>{
    const darkOrchid={
        height: '25px',
        width: '25px',
        backgroundColor: 'dark orchid'
    }
    return(
        <Router>
            <div>
                <div style={darkOrchid}></div>
                <Link to='/img/0'>Dark Orchid</Link>
            </div>
        </Router>
    )
}

/*const Tacos = () => {
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
}*/



export default ModalGallery