import { NavLink } from "react-router-dom"
import './navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
      <h1>Context React</h1>
      <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/products'>Products</NavLink>
        <NavLink to='/about'>About</NavLink>
      </nav>
    </div>
  )
}

export default Navbar