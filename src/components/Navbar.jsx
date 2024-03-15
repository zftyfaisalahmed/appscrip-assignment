import React from 'react'

const Navbar = () => {
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
            <div className='logo'>
                <i class="bi bi-apple"></i>
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
                    <span>ENG <i class="bi bi-chevron-down"></i></span>
                </div>
            </div>
        </div>

        <div className='shop'>
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