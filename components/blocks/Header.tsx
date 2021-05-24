import { Box, Icon } from '@material-ui/core';
import { Link as MuiLink } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import { CONTACTS } from '@Utils/contacts';
import Image from 'next/image';
import Link from 'next/link';
import React, { EventHandler, ReactElement, SyntheticEvent } from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    border: 'none'
  },
  menu: {
    display: 'none',
    gap: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      display: 'flex'
    }
  },
  menuItem: {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(1)
  },
  menuButton: {
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  }
}));

interface HeaderProps {
  onMenuClick: EventHandler<SyntheticEvent>;
}

const Header = ({ onMenuClick }: HeaderProps): ReactElement => {
  const classes = useStyles();

  return (
    <AppBar className={classes.root} position="sticky" color="transparent" variant="outlined">
      <Toolbar>
        <Box flexGrow={1}>
          <Link href="/">
            <MuiLink color="inherit" underline="none">
              <Box display="flex" alignItems="center">
                <Box mr={2}>
                  <Image src="/assets/img/logo.svg" alt="" height="48" width="48" />
                </Box>

                <Typography variant="h6">Smynay.Space</Typography>
              </Box>
            </MuiLink>
          </Link>
        </Box>

        <Box className={classes.menu} display="flex" alignItems="center">
          {CONTACTS.map((item) => (
            <Box key={`ct-${item.icon}`} className={classes.menuItem}>
              <Icon>{item.icon}</Icon>
              {item.href ? (
                <MuiLink href={item.href} color="inherit" underline="none" variant="subtitle1">
                  {item.title}
                </MuiLink>
              ) : (
                <Typography variant="subtitle1">{item.title}</Typography>
              )}
            </Box>
          ))}
        </Box>
        <IconButton
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
          onClick={onMenuClick}>
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
