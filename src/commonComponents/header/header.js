import './style.css';
import CdLogo from '../../assets/cdLogo.JPG';
export default function header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-color sticky-top">
      <a class='navbar-brand' href='/'>Jenkins</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
        <li className="nav-item">
            <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#"><img src={CdLogo} alt="cdLogo"/></a>
          </li>
          <div className="navBarText">
          <li className="nav-item active">
            <a className="nav-link" href="#">Blog<span class="sr-only">(current)</span></a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Documentation
        </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Plugins</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Community
        </a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Subprojects
        </a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              About
        </a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              English
        </a>
          </li>
          </div>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" size='20' type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-secondary my-2 my-sm-0" type="submit">Download</button>
        </form>
      </div>
    </nav>
  );
}