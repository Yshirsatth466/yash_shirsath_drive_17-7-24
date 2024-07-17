import React from 'react'
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';
const Nav = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <Container>
          <Link to="/" className="navbar-brand">product inventary</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">Addproduct</Link>
              </li>
              <li className="nav-item">
                <Link to="/delete" className="nav-link">delete</Link>
              </li>
              <li className="nav-item">
                <Link to="/display" className="nav-link">display products</Link>
              </li>
              <li className="nav-item">
                <Link to="/update" className="nav-link">update</Link>
              </li>
              <li className="nav-item">
                <Link to="/display" className="nav-link">display</Link>
              </li>
            </ul>
          </div>
        </Container>
      </nav>
    </div>
  )
}

export default Nav
