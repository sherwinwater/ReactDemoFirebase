import React from 'react';
import {Link} from 'react-router-dom';

function Nav(){
    
    
    return(
        <nav>
            <ul>
                <Link to="/home"><li> home </li></Link>
                <Link to="/user"><li> user </li></Link>
                <Link to="/card"><li> Card </li></Link>
            </ul>
        </nav>
    )
}


export default Nav;