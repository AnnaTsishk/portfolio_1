import React from 'react';
import style from './Header.module.css';
import Navigator from "../navigator/Navigator";


function Header() {
    return (
        <div className={style.header}>
            <Navigator/>

        </div>
    );
}

export default Header;