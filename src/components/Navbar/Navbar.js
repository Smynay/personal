import './Navbar.scss';
import logo from '../../resources/logo.svg';

import Menu from './Menu/Menu';

const Navbar = (props) => {
  return (
    <div className="Navbar">
      <div className="Navbar__brand">
        <img src={logo} alt="Smynay.Space" />
        <div className="brand__label">Smynay.space</div>
      </div>
      <Menu />
    </div>
  );
};

export default Navbar;
