import React from 'react'
import "./logo.scss"
import logo from "../../img/logo.svg"

const Logo = () => {

    return (
        <div className="header">
            <div className="header-logo">
                <img src={logo} alt="logo"></img>
            </div>

            <div className="header-title">Search web app</div>
        </div>
    )
}

export default Logo
