import { } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>

      <div className="Navbar">

        <div className="nav_logo">
          <img src="" alt="" />
          San X
        </div>

        <div className="nav_h">
          MAIN
        </div>
        <Link to='/' className="nav_l">
          <img src="" alt="" />
          Dashboard
        </Link>

        <div className="nav_h">
          LISTS
        </div>
        <Link to='/' className="nav_l">
          <img src="" alt="" />
          Users
        </Link>
        <Link to='/' className="nav_l">
          <img src="" alt="" />
          Users
        </Link>
        <Link to='/' className="nav_l">
          <img src="" alt="" />
          Users
        </Link>
        <Link to='/' className="nav_l">
          <img src="" alt="" />
          Users
        </Link>
        <Link to='/' className="nav_l">
          <img src="" alt="" />
          Users
        </Link>

      </div>

      

    </>
  )
}

export default Navbar