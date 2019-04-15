import * as React from 'react'
import {Link} from 'react-router-dom'

class Navbar extends React.Component {
  public render() {
    return (
      <div>
        <Link to="/">Home</Link>
        <Link to="/Game">Game</Link>
      </div>
    )
  }
}

export default Navbar