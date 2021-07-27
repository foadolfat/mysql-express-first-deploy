import * as React from "react";
import { NavLink } from 'react-router-dom';
import '../App.css'

function Navigation(){
    return(
        <div>
            <nav>
                <ul>
                    <li><NavLink exact activeClassName="current" to='/'>Home</NavLink></li>
                    <li><NavLink exact activeClassName="current" to='/Sign-up'>Sign up</NavLink></li>
                    <li><NavLink exact activeClassName="current" to='/Search'>Search</NavLink></li>
                </ul>
            </nav>
            
        </div>
    )
}
export default Navigation;