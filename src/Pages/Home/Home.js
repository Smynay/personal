import React from 'react';
import './Home.scss';
import img from '../../assets/img/mywork.png';

import ProjectCard from '../../components/ProjectCard/ProjectCard';

const pinnedProjects = [
  {
    icon: 'bicycle',
    title: 'Bikeslanding',
    description: 'project about retro-bikes shop',
    gitLink: 'https://github.com/Smynay/webdeveloping/tree/master/bikeslanding',
    demoLink: '',
  },
  {
    icon: 'external-link-alt',
    title: 'Shorter',
    description:
      'web-service, that makes your links shorter and provides statistics (fullstack)',
    gitLink: 'https://github.com/Smynay/shorter-app',
    demoLink: '',
  },
  {
    icon: 'trophy',
    title: 'Quiz',
    description:
      'web-platform for create and solve quizes and tests (firebase)',
    gitLink: 'https://github.com/Smynay/quiz-app',
    demoLink: 'https://react-quiz-f6f9e.web.app/',
  },
];

function Home(props) {
  return (
    <div className="container-fluid">
      <div className="Home__content container-xl">
        <div className="Home__image">
          <img src={img} alt="Design" />
        </div>
        <div className="Home__textblock">
          <h1>Check out my works!</h1>
          {pinnedProjects.map((project, index) => (
            <ProjectCard item={project} position={index} key={'PP' + index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
