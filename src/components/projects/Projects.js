import React from 'react';
import styles from './project.module.css';
import Projects_tag from './Projects_list/Projects_tag';

function Projects() {
  return (
    <div className={styles.projects_container}>
      <h1 className={styles.name_projects}>Some Of My Work..</h1>
      <div className={styles.content_subsection_projects}>
        <Projects_tag
          name="Amazon Clone"
          des="Fully functioned Amazon Clone with stripe payment and Firebase database"
          tech_stack="React , Firebase"
          link="https://clone-d509c.web.app/"
          source_code="https://github.com/naveen8801/my_amazon-clone"
        />
        <Projects_tag
          name="Twitter Boy"
          des="NLP based twitter sentimental analysis"
          tech_stack="Python Flask ,  Natural Language processing"
          link="https://twitterboy.herokuapp.com/"
          source_code="https://github.com/naveen8801/TwitterBoy"
        />
        <Projects_tag
          name="Vote Me"
          des="A realtime voting web based application"
          tech_stack="MERN stack"
          link="https://vote-me.netlify.app/"
          source_code="https://github.com/naveen8801/VoteMe-webapp"
        />
        <Projects_tag
          name="Memories Web-App"
          des="Share Your Memories Here !!"
          tech_stack="MERN stack"
          link="https://memories-hub.netlify.app/"
          source_code="https://github.com/naveen8801/memories-webapp"
        />
      </div>
      <h6 style={{ fontSize: '15px' }}>
        For more projects checkout my github -
        <a
          href="https://github.com/naveen8801"
          target="blank"
          style={{ fontSize: '15px' , textDecoration : "underline" }}
        >
          naveen8801
        </a>
      </h6>
    </div>
  );
}

export default Projects;
