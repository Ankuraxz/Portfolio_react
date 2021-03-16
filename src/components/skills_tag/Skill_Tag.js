import React from 'react';
import styles from './skill_tag.module.css';

function Skill_Tag(props) {
    return (
        <div className={styles.skills_tag}>
            <img src={props.img_src} className={styles.skill_logo}/>
            <h3 className={styles.skill_name}>{props.name}</h3>
            
        </div>
    )
}

export default Skill_Tag
