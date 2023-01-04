import React from 'react';
import style from './Button.module.css';

function Button() {
    return (
        <div className={style.container_Button}>
            <button className={style.btn}>watch</button>

        </div>
    );
}

export default Button;