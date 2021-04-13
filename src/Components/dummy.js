import React from 'react'
import {BrowserRouter, Link} from 'react-router-dom'

function Dummy() {
  return (
    <div>
      <BrowserRouter>
        <Link to='/login'>Login</Link>
      </BrowserRouter>
    </div>
  )
}

export default Dummy
