import React from 'react';
import styles from './education.module.css';

function Education() {
    return (
      <div className={styles.education}>
        <h1 className={styles.name_header}>Education</h1>
        <div className={styles.content_subsection_education}>
          <div className={styles.edu_list}>
            <h3 className={styles.heading_ul}>
              Bachelor of Technology (B.Tech), Computer Science & Engineering
            </h3>
            <ul class="edu_list">
              <li class="items_list">
                Seth Jai Parkash Mukand Lal Institute Of Engineering And
                Technology
              </li>
              <li class="items_list">2019 - 2023</li>
            </ul>
          </div>
          <div class="ul_list">
            <h3 className={styles.heading_ul}>
              Senior Secondary (XII), Science
            </h3>
            <ul className={styles.edu_list}>
              <li class="items_list">
                Shri Jyoti Parkash Senior Secondary School , Rohtak , Haryana
              </li>
              <li class="items_list">Year of completion : 2019</li>
            </ul>
          </div>
          <div class="ul_list">
            <h3 className={styles.heading_ul}>Secondary (X)</h3>
            <ul className={styles.edu_list}>
              <li class="items_list">
                DAV Centenary Public School , Rohtak , Haryana
              </li>
              <li class="items_list">Year of completion : 2017</li>
            </ul>
          </div>
        </div>
        <hr className={styles.hr}></hr>
      </div>
    );
}

export default Education
