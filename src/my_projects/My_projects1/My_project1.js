import React from 'react';
import style from './My_projects1.module.css';
import pic from "../../pictutes/pic.png";
import Button from "../button/Button";


function My_project1(props) {
    return (
        <div className={style.container_project_pic}>
            <img src={pic}/>
            <Button/>
            <span className={style.title_project}>{props.title}</span>
            <p><span className={style.description_project}>{props.description}</span></p>
        </div>
    );
}

export default My_project1;