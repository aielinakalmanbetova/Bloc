import React from 'react';
import {NavLink} from 'react-router-dom';

const Toolbar = () => {
  return (
    <nav className='navbar'>
      <div className='container'>
        <span className='navbar-brand d-flex'>
          <div className='logo'>
            <h2>
              <i>
                <NavLink to='/' className='nav-link'>
                  My Blog
                </NavLink>
              </i>
            </h2>
          </div>
        </span>
        <div className='d-flex pt-1 text-dark-emphasis fs-4'>
          <ul className='list-group'>
            <li className='list-group-item'>
              <ins>
                <NavLink to='/' className='nav-link'>
                  Home
                </NavLink>
              </ins>
            </li>
          </ul>
          <ul className='list-group'>
            <li className='list-group-item'>
              <ins>
                <NavLink to='Add' className='nav-link'>
                  Add
                </NavLink>
              </ins>
            </li>
          </ul>
          <ul className='list-group'>
            <li className='list-group-item'>
              <ins>
                <NavLink to='About' className='nav-link'>
                  About
                </NavLink>
              </ins>
            </li>
          </ul>
          <ul className='list-group'>
            <li className='list-group-item'>
              <ins>
                <NavLink to='Contacts' className='nav-link'>
                  Contacts
                </NavLink>
              </ins>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Toolbar;
