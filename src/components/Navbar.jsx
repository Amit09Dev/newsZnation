import {Link} from 'react-router-dom'
import logo from '../assets/logo.png'
import PropTypes from 'prop-types'


const Navbar = (props) => { 
    return(
        <div>
            <nav className="navbar fixed-top" style={{backgroundColor: '#ffffff'}}>
                <div className="container-fluid">
                    {/* <a className="navbar-brand" href="/">News Z Nation</a> */}
                    <a className="navbar-brand" href="/"><img src={logo} alt="news z nation" width='280px' /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">News Z Nation</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        {props.searchengine}
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 mt-3">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home/ General</Link>
                            </li>
                            <li className="nav-item"><Link className="nav-link" to="/business">Business</Link></li>
                            <li className="nav-item"><Link className="nav-link " to="/entertainment">Entertainment</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/health">Health</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/science">Science</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/sports">Sports</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/technology">Technology</Link></li>
                            <li className="nav-item dropdown">
                            </li>
                        </ul>
            </div>
            </div>
        </div>
    </nav>
</div>
    )

}

Navbar.propTypes = {
    searchengine: PropTypes.object
  };


export default Navbar