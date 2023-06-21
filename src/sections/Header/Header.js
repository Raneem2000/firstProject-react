import './Header.css';
import logo from '../../assets/images/a.jpg';
import {Link} from 'react-router-dom'
import {NavItem , NavItemDropDown }from '../../components/index';
const Header = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark cyborg-navbar" >
        <div className="container-fluid" >
          <a className="navbar-brand" href="#"style={{color:'rgb(21, 204, 143)'}}> Raneem
            {/* <img src={logo}  alt='ss' style={{maxHeight :50}}/> */}
          </a>
          <button className="navbar-toggler"  type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" ></span>
          </button>
          <div className="collapse navbar-collapse" style={{color:'white'}} id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
              <NavItem>
                <Link to='/' className='nav-link active' aria-current="page" style={{ color: 'white'}}>Home</Link>
                {/* <a className="nav-link active" aria-current="page" href="/"  style={{ color: 'white'}}>Home</a> */}
              </NavItem>
              <NavItem>
              <Link to='/Profile' className='nav-link ' aria-current="page" style={{ color: 'white'}}>Profile</Link>
                {/* <a className="nav-link" href="/Profile" style={{ color: 'white'}}>Profile</a> */}
              </NavItem>
              <NavItemDropDown>
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ color: 'white'}}>
                  Dropdown
                </a>
                {/* <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul> */}
              </NavItemDropDown>
              <NavItem>
                <a className="nav-link disabled" href="#" tabIndex={'-1'} aria-disabled="true"style={{ color: 'white'}}>Disabled</a>
              </NavItem>
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    );
}

export default Header