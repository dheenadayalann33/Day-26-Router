import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function NavBar(props) {
    return (
        <div className='container text-center mt-5'>
            <div className='row justify-content-center header'>
                <div className='col' >
                    <NavLink to='/' activeClassName="active" >All</NavLink>
                </div>
                <div className='col'>
                    <NavLink to='/fullstack' activeClassName="active">Full Stack Development</NavLink>
                </div>
                <div className='col'>
                    <NavLink to='/datascience' activeClassName="active">Data Science</NavLink>
                </div>
                <div className='col'>
                    <NavLink to='/cyber' activeClassName="active">Cyber Security</NavLink>
                </div>
                <div className='col'>
                    <NavLink to='/career' activeClassName="active">Career</NavLink>
                </div>
            </div>
            <hr />
        </div>
    );
}

export default NavBar;