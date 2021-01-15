import React from "react";
import "./Header.css";
import icon from "../../assets/icon.png";

const Header = () => {

    return (
        <nav className="header">
            <img src={ icon } alt={ 'icon' }/>
        </nav>
    )
}

export default Header;