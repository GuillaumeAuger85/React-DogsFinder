import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
    render() {
        const dogLinks = this.props.dogs.map(d => (
            <div className='navbar-nav' key={d.name}>
                <NavLink exact className='nav-link active-link' to={`/dogs/${d.name}`}>{d.name}</NavLink>
            </div>
        ))
        return (
            <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
                <div className='container-fluid'>
                    <span className="navbar-brand">Dog Shelter</span>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <div className='navbar-nav'key='Home'>
                            <NavLink exact className='nav-link active-link' to='/dogs' >Home</NavLink>
                        </div>
                        {dogLinks}
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar