import { Link } from 'react-router-dom';


function HeaderNav(props) {

  return (
    <nav className="navbar navbar-default"> 
      <Link to='/' className="navbar-brand">Home</Link>
      <Link to='/about' className="navbar-brand">About</Link>
      <Link to='/login' className="navbar-brand">Login</Link>
      <Link to='/logout' className="navbar-brand">Logout</Link>
    </nav>
  )
}

export default HeaderNav;