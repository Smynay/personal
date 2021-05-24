import { Container, MenuItem, MenuList } from '@material-ui/core';
import React, { ReactElement } from 'react';

const NavMenu = (): ReactElement => {
  return (
    <Container>
      <MenuList>
        <MenuItem>Home</MenuItem>
        <MenuItem>About</MenuItem>
        <MenuItem>Contacts</MenuItem>
      </MenuList>
    </Container>
  );
};

export default NavMenu;
