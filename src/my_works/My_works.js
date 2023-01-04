import React from 'react';
import style from './My_works.module.css';
import styleContainer from "../common/styles/Container.module.css";
import My_works1 from "../my_works/My_works1/My_works1";


function My_works() {
    return (
        <div className={style.worksBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title_works}>My works</h2>
                <div className={style.works}>
                   <My_works1 title ={'Project name 1'} description ={'short description vvvvvvvv'}/>
                   <My_works1 title ={'Project name 2'} description ={'short description fffffffffff'}/>
                </div>

            </div>

        </div>
    );
}

export default My_works;