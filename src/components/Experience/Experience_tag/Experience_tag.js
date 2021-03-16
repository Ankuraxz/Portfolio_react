import React from 'react';
import styles from './exprience_tag.module.css';

function Experience_tag(props) {
    return (
      <div className={styles.tag_container}>
        <h2 className={styles.job_title}>{props.job_title}</h2>
        <h3 className={styles.company_title}>{props.company_title}</h3>
        <h5 className={styles.job_type}>{props.job_type}</h5>
        <h5 className={styles.job_location}>{props.job_location}</h5>
        <h5 className={styles.job_duration}>{props.job_duration}</h5>
      </div>
    );
}

export default Experience_tag
