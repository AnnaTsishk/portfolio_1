import React from 'react';
import style from './Skills.module.css';
import styleContainer from "../common/styles/Container.module.css";
import Skill from "../skills/skill1/Skill";

function Skills() {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills}>
                    <p><Skill title={'JS'} description={'xczxczc xgxcvbc xfcxcv xfvxcv'}/></p>
                    <p><Skill title={'HTML'} description={'xczxczc xcbxcb xcvxcb xcbcvb'}/></p>
                    <p><Skill title={'CSS'} description={'xczxczc xvbxcbcb xcbcvbc cvbcvbncvn'}/></p>
                    <p><Skill title={'React'} description={'xczxczc cvbcfbh fgfdb dfse sdewa'}/></p>
                    <p><Skill title={'Redux'} description={'xczxczc dsfsdf xgfdfg dfsd dfdfdgdg dfdfgdcgdfgf dgfdf dfdfdsd dfdf'}/></p>
                </div>
            </div>
        </div>
    );
}

export default Skills;