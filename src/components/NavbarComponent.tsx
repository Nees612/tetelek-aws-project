import { NavLink } from "react-router-dom"

interface Props {
    auth : {token: boolean}
};

function NavbarComponent ({auth}: Props) {
    return <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary position-sticky sticky-top">
      <div className="container-fluid">        
        <NavLink className="navbar-brand" to={'/'}>Brand name</NavLink>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">            
              <NavLink className="nav-link" to="/">Home</NavLink>
              <NavLink className="nav-link" to="/aboutus">About Us</NavLink>
              {auth.token ? <UserNavbarComponent/> : <GuestNavbarComponent/>}                       
          </div>
        </div>
      </div>
    </nav>
    </>
}

function UserNavbarComponent () {
    return <>                
        <NavLink className="nav-link" to="/userpage">My Page</NavLink>
        <NavLink className="nav-link" to="/lessons">Lessons</NavLink>                    
    </>
}

function GuestNavbarComponent () {
    return <>      
      <NavLink className="nav-link" to="/login">Login</NavLink>
      <NavLink className="nav-link" to="/register">Sign Up</NavLink>                    
    </>
}

export default NavbarComponent;