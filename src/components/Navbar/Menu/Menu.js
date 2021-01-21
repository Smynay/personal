import { useState } from 'react';

import Toggle from './Toggle/Toggle';
import MenuItem from './MenuItem/MenuItem';

import './Menu.scss';

const list = [
  {
    iconType: 'fab',
    iconName: 'github',
    label: 'GitHub',
    link: 'https://github.com/Smynay',
  },
  {
    iconName: 'phone-alt',
    label: '8 (952) 21-900-10',
    link: 'tel:89522190010',
  },
  {
    iconName: 'envelope',
    label: 'smynay@yandex.ru',
  },
];

const Menu = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const [activeItem, setActiveItem] = useState(0);

  const toggleHandler = () => {
    setMenuToggle(!menuToggle);
  };

  const toggleItemHandler = (id) => {
    setActiveItem(activeItem === id ? 0 : id);
  };

  return (
    <div className="Menu">
      <Toggle onToggle={toggleHandler} toggle={menuToggle} />

      <ul className={'list ' + (menuToggle ? ' active' : '')}>
        {list.map((item, index) => (
          <MenuItem
            item={item}
            key={'MI' + index}
            active={activeItem === index + 1}
            onToggle={() => toggleItemHandler(index + 1)}
          />
        ))}
      </ul>
    </div>
  );
};

export default Menu;
