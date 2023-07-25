import {Component} from 'react'

export default class Navbar extends Component {
    render(){
        return(
            <div>
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">News Z Nation</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">News Z Nation</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">About</a>
                        </li>
                        <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Category
                        </a>
                            <ul className="dropdown-menu">
                                <li>< a className="dropdown-item" href="#"> Business</a></li>
                                <li>< a className="dropdown-item" href="#"> Entertainment</a></li>
                                <li>< a className="dropdown-item" href="#"> General</a></li>
                                <li>< a className="dropdown-item" href="#"> Health</a></li>
                                <li>< a className="dropdown-item" href="#"> Science</a></li>
                                <li>< a className="dropdown-item" href="#"> Sports</a></li>
                                <li>< a className="dropdown-item" href="#"> Technology</a></li>
                            </ul>
                         </li>
                        <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Category
                        </a>
                            <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#"type="ar">Argentina</a></li>
                            <li><a className="dropdown-item" href="#"type="au">Australia</a></li>
                            <li><a className="dropdown-item" href="#"type="at">Austria</a></li>
                            <li><a className="dropdown-item" href="#"type="be">Belgium</a></li>
                            <li><a className="dropdown-item" href="#"type="br">Brazil</a></li>
                            <li><a className="dropdown-item" href="#"type="bg">Bulgaria</a></li>
                            <li><a className="dropdown-item" href="#"type="ca">Canada</a></li>
                            <li><a className="dropdown-item" href="#"type="cn">China</a></li>
                            <li><a className="dropdown-item" href="#"type="co">Colombia</a></li>
                            <li><a className="dropdown-item" href="#"type="cu">Cuba</a></li>
                            <li><a className="dropdown-item" href="#"type="cz">Czech Republic</a></li>
                            <li><a className="dropdown-item" href="#"type="eg">Egypt</a></li>
                            <li><a className="dropdown-item" href="#"type="fr">France</a></li>
                            <li><a className="dropdown-item" href="#"type="de">Germany</a></li>
                            <li><a className="dropdown-item" href="#"type="gr">Greece</a></li>
                            <li><a className="dropdown-item" href="#"type="hk">Hong Kong</a></li>
                            <li><a className="dropdown-item" href="#"type="hu">Hungary</a></li>
                            <li><a className="dropdown-item" href="#"type="in">India</a></li>
                            <li><a className="dropdown-item" href="#"type="id">Indonesia</a></li>
                            <li><a className="dropdown-item" href="#"type="ie">Ireland</a></li>
                            <li><a className="dropdown-item" href="#"type="il">Israel</a></li>
                            <li><a className="dropdown-item" href="#"type="it">Italy</a></li>
                            <li><a className="dropdown-item" href="#"type="jp">Japan</a></li>
                            <li><a className="dropdown-item" href="#"type="lv">Latvia</a></li>
                            <li><a className="dropdown-item" href="#"type="lt">Lithuania</a></li>
                            <li><a className="dropdown-item" href="#"type="my">Malaysia</a></li>
                            <li><a className="dropdown-item" href="#"type="mx">Mexico</a></li>
                            <li><a className="dropdown-item" href="#"type="ma">Morocco</a></li>
                            <li><a className="dropdown-item" href="#"type="nl">Netherlands</a></li>
                            <li><a className="dropdown-item" href="#"type="nz">New Zealand</a></li>
                            <li><a className="dropdown-item" href="#"type="ng">Nigeria</a></li>
                            <li><a className="dropdown-item" href="#"type="no">Norway</a></li>
                            <li><a className="dropdown-item" href="#"type="ph">Philippines</a></li>
                            <li><a className="dropdown-item" href="#"type="pl">Poland</a></li>
                            <li><a className="dropdown-item" href="#"type="pt">Portugal</a></li>
                            <li><a className="dropdown-item" href="#"type="ro">Romania</a></li>
                            <li><a className="dropdown-item" href="#"type="ru">Russia</a></li>
                            <li><a className="dropdown-item" href="#"type="sa">Saudi Arabia</a></li>
                            <li><a className="dropdown-item" href="#"type="rs">Serbia</a></li>
                            <li><a className="dropdown-item" href="#"type="sg">Singapore</a></li>
                            <li><a className="dropdown-item" href="#"type="sk">Slovakia</a></li>
                            <li><a className="dropdown-item" href="#"type="si">Slovenia</a></li>
                            <li><a className="dropdown-item" href="#"type="za">South Africa</a></li>
                            <li><a className="dropdown-item" href="#"type="kr">South Korea</a></li>
                            <li><a className="dropdown-item" href="#"type="se">Sweden</a></li>
                            <li><a className="dropdown-item" href="#"type="ch">Switzerland</a></li>
                            <li><a className="dropdown-item" href="#"type="tw">Taiwan</a></li>
                            <li><a className="dropdown-item" href="#"type="th">Thailand</a></li>
                            <li><a className="dropdown-item" href="#"type="tr">Turkey</a></li>
                            <li><a className="dropdown-item" href="#"type="ae">UAE</a></li>
                            <li><a className="dropdown-item" href="#"type="ua">Ukraine</a></li>
                            <li><a className="dropdown-item" href="#"type="gb">United Kingdom</a></li>
                            <li><a className="dropdown-item" href="#"type="us">United States</a></li>
                            <li><a className="dropdown-item" href="#"type="ve">Venuzuela</a></li>
                            </ul>
                         </li>
                        </ul>
                    <form className="d-flex mt-3" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search Country" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
            </div>
    </div>
  </div>
</nav>
            </div>
        )
    }
}