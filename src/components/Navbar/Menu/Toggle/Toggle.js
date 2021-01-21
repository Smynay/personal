import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Toggle.scss';

const Toggle = ({ onToggle, toggle }) => (
  <div className={'Toggle ' + (toggle ? 'active' : '')} onClick={onToggle}>
    <FontAwesomeIcon icon={['fas', toggle ? 'times' : 'bars']} />
  </div>
);

export default Toggle;
