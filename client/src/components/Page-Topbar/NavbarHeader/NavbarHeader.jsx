import React from 'react'
import Logo from './NavComponents/Logo'
import AppSearch from './NavComponents/AppSearch'
import FeaturedApps from './NavComponents/FeaturedApps'
import Notifications from './NavComponents/Notifications'
import Profile from './NavComponents/Profile'
import Settings from './NavComponents/Settings'
import "./Navbar.css"

function NavbarHeader() {
    return (
        <div className="navbar-header">

            <div className="d-flex first">
                <Logo />
                <AppSearch />
            </div>

            <div className="d-flex nav-list">
                <div className="flag">
                    <img 
                        src="public/assets/images/flags/us.jpg" 
                        height="16"
                    />
                </div>
                <FeaturedApps />
                <Notifications />
                <Profile />
                <Settings />
            </div>
        </div>
    )
}

export default NavbarHeader
