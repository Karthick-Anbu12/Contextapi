import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import usercontext from './Context'
function Nav() {
  let { cart } = useContext(usercontext)
  return (

    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className='link ' to='/' >Home</Link>
            </li>
            <li className="nav-item ">

              <Link className='link ' to='/cart'>Cart({cart.length})</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Nav
