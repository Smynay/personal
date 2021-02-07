import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './MenuItem.scss';

const MenuItem = ({ item, active, onToggle }) => {
  const { iconName, label, link = '', iconType = 'fas' } = item;
  return (
    <li className="MenuItem" onClick={onToggle}>
      <FontAwesomeIcon icon={[iconType, iconName]} size="lg" />
      <span className={'label ' + (active ? 'active' : '')}>
        {link ? (
          <a href={link} target="_blank" rel="noopener noreferrer">
            {label}
          </a>
        ) : (
          label
        )}
      </span>
    </li>
  );
};

export default MenuItem;
