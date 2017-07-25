import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render () {
        return (
            <header>
                <nav>
                    <ul>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/work'>Work</Link></li>
                        <li><Link to='/contact'>Contact</Link></li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Header;