import React, { useState } from 'react'
import '../media.css'

const Navbar = () => {

    const [showFilter, setShowFilter] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
      setIsOpen(!isOpen);
    };

  return (
    <header>
        <marquee behavior="" direction="" className="backGround">
            <div className='marquee'>
                <p><i className='bi bi-apple'></i>Lorem ipsum dolor</p>
                <p><i className='bi bi-apple'></i>Lorem ipsum dolor</p>
                <p><i className='bi bi-apple'></i>Lorem ipsum dolor</p>
                <p><i className='bi bi-apple'></i>Lorem ipsum dolor</p>
                <p><i className='bi bi-apple'></i>Lorem ipsum dolor</p>
                <p><i className='bi bi-apple'></i>Lorem ipsum dolor</p>
                <p><i className='bi bi-apple'></i>Lorem ipsum dolor</p>
                <p><i className='bi bi-apple'></i>Lorem ipsum dolor</p>
                <p><i className='bi bi-apple'></i>Lorem ipsum dolor</p>
            </div>
        </marquee>

        <div className='navbar'>
            <div className="navall">
                <nav className={`navbar1 ${isOpen ? 'open' : 'close'}`}>
                    <button onClick={() => setShowFilter(!showFilter)} className='btn1'>
                        <button className="navbar-toggler" onClick={toggleNavbar}>
                            <span><img src="https://res.cloudinary.com/dvzviljl7/image/upload/v1710492408/menu-bar_9190853-removebg-preview_gizo3u.png" alt="" className='toggler' /></span>
                        </button>
                    </button>
                </nav>
                <div className='logo'>
                    <i className="bi bi-apple"></i>
                </div>
            </div>
            <div className=''>
                <h1>LOGO</h1>
            </div>
            <div>
                <div className='icons'>
                    <i className='bi bi-search'></i>
                    <i className='bi bi-heart'></i>
                    <i className='bi bi-bag'></i>
                    <i className='bi bi-people'></i>
                    <span>ENG <i className="bi bi-chevron-down"></i></span>
                </div>
            </div>
        </div>

        <div className={`shop ${showFilter ? 'show1' : 'hide1'}`}>
            <p>SHOP</p>
            <p>SKILLS</p>
            <p>STORIES</p>
            <p>ABOUT</p>
            <p>CONTACT US</p>
        </div>
        <hr className='hr1'/>
    </header>
  )
}

export default Navbar