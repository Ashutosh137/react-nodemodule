import React, { useState } from 'react'
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light text-capitalize">
                <div className="container-fluid">
                    <a className="navbar-brand fw-bold">gym trainer</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/" className="nav-link active" aria-current="page">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/exercises" className="nav-link">exercise</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/bodyparts" className="nav-link">body parts</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/target muscles" className="nav-link">body muscles</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/equipments" className="nav-link">equipment</Link>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search for any exercise" aria-label="Search"/>
                            <button className="btn btn-outline-success" type="submit" 
                            >Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
};

export default Navbar;