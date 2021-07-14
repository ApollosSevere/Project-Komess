import React from 'react'
import NavbarHeader from './NavbarHeader/NavbarHeader'
import Topnav from './Topnav/Topnav'

function PageTopbar() {
    return (
        <div className="page-topbar"> 
            <NavbarHeader />
            <div className="container-fluid">
                <Topnav />
            </div>
        </div>
    )
}

export default PageTopbar
