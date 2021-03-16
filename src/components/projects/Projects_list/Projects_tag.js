import React from 'react';
import styles from './project_tag.module.css';

function Projects_tag(props) {
  return (
    <div className={styles.project_tile}>
      <h3 className={styles.name}>
        <strong>Name</strong> : "{props.name}"
      </h3>
      <h3 className={styles.tech}>
        <strong>Tech Stack</strong> : {props.tech_stack}
      </h3>
      <p>
        <strong>Description</strong> : {props.des}
      </p>
      <h3 className={styles.link}>
        <strong>Link</strong> :
        <a href={props.link} target="blank">
          Project Demo
        </a>
      </h3>
      <h3 className={styles.link}>
        <strong>Source Code</strong> :
        <a href={props.source_code} target="blank">
          Github Repo
        </a>
      </h3>
    </div>
  );
}

export default Projects_tag;
