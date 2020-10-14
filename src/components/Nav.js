import React from 'react';
import {Link} from 'react-router-dom';

function Nav(){
    
    
    return(
        // <nav>
        //     <ul>
        //         <Link to="/home"><li> home </li></Link>
        //         <Link to="/user"><li> user </li></Link>
        //         <Link to="/card"><li> Card </li></Link>
        //         <Link to="/photo"><li> photo </li></Link>
        //     </ul>
        // </nav>


<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
        <Link to="/home"><li class="nav-item nav-link"> home </li></Link>
        <Link to="/user"><li class="nav-item nav-link"> user </li></Link>
        <Link to="/card"><li class="nav-item nav-link"> Card </li></Link>
        <Link to="/photo"><li class="nav-item nav-link"> photo </li></Link>
    </ul>
  </div>
</nav>

    )
}


export default Nav;