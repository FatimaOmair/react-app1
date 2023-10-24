import React from 'react'
import './Navbar.css';
export default function Navbar() {
  return (
<>
<nav className="navbar navbar-expand-lg bg-transparent">
  <div className="container">
   <img src="/img/sweet-shop-logo-design-template-of-cake-with-cherries-with-badge-emblem-design-free-vector.jpg" alt="logo" width={60} height={50} />
   <p className='font pt-3'>A piece of sugar</p>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse " id="navbarNavDropdown">
      <ul className="navbar-nav ms-auto font">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Our cake</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">special candies</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Western sweets
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Swiss sweets</a></li>
            <li><a className="dropdown-item" href="#">Italian sweets</a></li>
            <li><a className="dropdown-item" href="#">Turkish sweets</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>

</>
  )
}
