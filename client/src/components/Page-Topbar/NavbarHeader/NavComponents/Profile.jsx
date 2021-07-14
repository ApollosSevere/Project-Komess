import React from 'react'

function Profile() {
    return (
        <div className="profile">
            <img class="rounded-circle header-profile-user" src="public/assets/images/closeUp.jpeg"
                        alt="Header Avatar"/>
            <span className="user-name">Apollos</span>
            <i class="uil-angle-down font-size-15"></i>
        </div>
    )
}

export default Profile
