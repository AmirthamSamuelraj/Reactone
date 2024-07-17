import React from "react";
 

const Header=()=>
{
    return(
       <div className="Header ">
        <nav className="navbar fixed-top navbar-expand-lg  navbar-light bg-dark header ">
  <div className="container-fluid">
    <a className="navbar-brand   dancing-script fs-3 custom-font" href="#">SA.</a>
    <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end align-center " id="navbarNav">
      <ul className="navbar-nav nav-underline text-white">
        <li className="nav-item">
          <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#about">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href= "#project">Project</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#contact">Contact</a>
        </li>
      </ul>
    </div>
     
  </div>
</nav>
 
       </div> 

    
    );
}
export default Header;
