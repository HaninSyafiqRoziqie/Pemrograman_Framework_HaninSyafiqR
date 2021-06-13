import React from 'react'
import {Link} from 'react-router-dom'
// import logo from '../../../../public/assets/images/laravel.png'

const Header = () => (
    <div>
        <nav className="nav-section">
            <div className="container">
                <div className="row">
                    <div id='cssmenu'>
                        <ul>
                            <li className='active'><Link className='navbar-brand' to='/'>Home</Link></li>
                            <li><Link className='navbar-brand' to='/blog'>Blog</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    </div>
)

export default Header