import React from 'react';
import style from './My_works1.module.css';
import pic from "../../pictutes/pic.png";


function My_works1(props) {
    return (

        // <div className={style.work}><img src={pic}/>
        //     <button className={style.icon}> watch </button>
        //     <span className={style.title_work}>{props.title}</span>
        //    <span className={style.description_work}>{props.description}</span>
        //
        // </div>
    <div className={style.container}>
        <img src={pic}/>
         {/*alt="Snow" style="width:100%" />*/}
            <button className={style.btn}>watch</button>
        <span className={style.title_work}>{props.title}</span>
        <p><span className={style.description_work}>{props.description}</span></p>
    </div>
    );
}

export default My_works1;