import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ProjectCard.scss';

const ProjectCard = ({ item, position }) => {
  const { icon, title, description, gitLink, demoLink = '' } = item;

  const variants = ['ml-2', '', 'ml-4'];

  const addition = variants[position % 3];

  return (
    <div className={'ProjectCard ' + addition}>
      <p className="ProjectCard__body">
        <FontAwesomeIcon icon={['fas', icon]} />
        <b>{title}</b> - {description}
      </p>

      <p className="ProjectCard__links">
        <a href={gitLink} target="_blank" rel="noreferrer">
          View on GitHub
        </a>
        {demoLink ? (
          <>
            &nbsp;|&nbsp;<a href={demoLink}>Demo</a>
          </>
        ) : null}
      </p>
    </div>
  );
};

export default ProjectCard;
