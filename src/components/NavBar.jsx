import React from 'react'

function NavBar() {
  return (
    <nav className='nav-bar'>
        {/* <ul class="off-screen-menu hidden">
            <li><a href="#">Home</a></li>
            <li><a href="#">Skills</a></li>
            <li><a href="#">About Me</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Contact</a></li>
        </ul> */}
        <div class="container">
            <div class="nav-icon-heading-container">
                {/* <i class="fa-solid fa-paintbrush"></i> */}
                <h2>Patricia</h2>
            </div>
            {/* <i class="fa-solid fa-bars hidden"></i>
            <i class="fa-solid fa-x hidden"></i> */}
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Skills</a></li>
                <li><a href="#">About Me</a></li>
                <li><a href="#">Portfolio</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>
    </nav>
  )
}

export default NavBar