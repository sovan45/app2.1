// this  is  just a component we  can make multiple componetn like this 
import React from 'react';
import PropTypes from 'prop-types'
// import './myCss';
import { Link } from "react-router-dom";
export default function Navbar(props) {
  return (

    // <nav className= {" navbar navbar-expand-lg bg-body-tertiary navbar-dark bg-dark"} >
    <nav className= {`navbar navbar-expand-lg   border-bottom border-secondary navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">

        <a className="navbar-brand" href="https://example.com">{props.abo}</a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            {/* About */}
            <li className="nav-item">
              
              {/* <a className="nav-link active" aria-current="page" href="https://example.com">{props.aboutvalue}</a> */}
              <Link className="nav-link" to="/About">
                {props.aboutvalue}
              </Link>
              
            </li>
          

            {/* Home */}
            <li className="nav-item">
              <Link className="nav-link" to="/">{props.HomeValue}</Link>             
            </li>

            {/* Features */}
            <li className="nav-item">             
               <Link className="nav-link" to="/Formcc">
                {props.linkValue}
              </Link>
            </li>
            
            {/* Dropdown */}
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="https://example.com" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="https://example.com">Action</a></li>
                <li><a className="dropdown-item" href="https://example.com">Another action</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="https://example.com" aria-disabled="true">Disabled</a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
      
      {/* add a switch */}
      <div className={ `form-check form-switch text-${props.mode==='light'?'dark':'light' }`}>
          <input className="form-check-input"onClick={props.themechnageFun} type="checkbox" role="switch" id="flexSwitchCheckDefault " />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault" > {props.mode === "light" ? "Dark On" : "Dark OFF"} </label>
      </div>
    </nav>
  );
}
// we  can send multiple no of props with predefine set value  type  and if  we want to new value on child the it give  a restriction, child value we  can only give this type value only .
// proptypes Example 
Navbar.propTypes= {linkvalue: PropTypes.string,
  abo: PropTypes.string,
};


//Props Example :- 

// Defaultvalue  Example 
// we can set some default  value to props , if child is not set any value then this value will be set 
// Navbar.defaultProps ={
//   linkvalue: 'default Link Value',
//   abo: 'default about value'
// } ;

// isrequired() example 
// if any props value given by child side is must nidded then we can set .required.[ in this case if child is not give value then it show an error on browser it not work when we pass default value too]

// Navbar.propTypes= {linkvalue: PropTypes.string.isRequired,
//   abo: PropTypes.string,
// };
