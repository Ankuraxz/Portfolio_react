import React from 'react';
import styles from './experience.module.css';
import Experience_tag from './Experience_tag/Experience_tag';

function Experience() {
  return (
    <div className={styles.container}>
      <h1 className={styles.name_skills}>Experience</h1>
      <div className={styles.content_subsection_experience}>
        <Experience_tag
          job_title="Frontend Developer Intern"
          company_title="Urmeet"
          job_type="Internship"
          job_location="Remote - India"
          job_duration="March 2021 - Present"
        />
      </div>
      <hr className={styles.hr}></hr>
    </div>
  );
}

export default Experience;
