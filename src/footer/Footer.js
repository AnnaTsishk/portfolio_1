import React from 'react';
import style from './Footer.module.css';
import Block from "./block/Block";



function Footer() {
    return (
        <div className={style.footerBlock}>
            <div className={style.containerContacts}>
                <div className={style.text}>
                    <span>Тишкевич Анна</span>
                </div>
                <div className={style.infoBlock}>
                    <Block/>
                    <Block/>
                    <Block/>
                    <Block/>
                </div>
                <div className={style.footer}>
                    <span> ©2023 all rights reserved</span>
                </div>


            </div>
        </div>
    );
}

export default Footer;