import React from 'react';
import style from './Remote_work.module.css';


function Remote_work() {
    return (
        <div className={style.remoteWorkBlock}>
            <div className={style.container}>
                <div className={style.text}>
                    <span>Considering remote work options</span>
                </div>
                <button className={style.button}>hire me</button>
            </div>
        </div>
    );
}

export default Remote_work;