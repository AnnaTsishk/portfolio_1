import React from 'react';
import style from './My_projects.module.css';
import styleContainer from "../common/styles/Container.module.css";
import My_project1 from "./My_projects1/My_project1";


function My_projects() {
    return (
        <div className={style.projects_Block}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title_project}>My projects</h2>
                <div className={style.project}>
                   <My_project1 title ={'Project name 1'} description ={'short description vvvvvvvv'}/>
                   <My_project1 title ={'Project name 2'} description ={'short description fffffffffff'}/>
                </div>

            </div>

        </div>
    );
}

export default My_projects;