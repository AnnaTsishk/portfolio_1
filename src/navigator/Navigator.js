import React from 'react';
import style from './Navigator.module.css';

function Navigator() {
    return (
        <div className={style.nav}>
            <a href="src/navigator/Navigator">Главная </a>
            <a href="src/navigator/Navigator">Скилы </a>
            <a href="src/navigator/Navigator">Проекты </a>
            <a href="src/navigator/Navigator">Контакты</a>
        </div>
    );
}

export default Navigator;