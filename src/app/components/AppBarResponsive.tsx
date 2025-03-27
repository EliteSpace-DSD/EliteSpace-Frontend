import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router';
import { RootState } from '../../stores/store';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { setUser } from '../../stores/userSlice';
import Logo from '../../assets/logo.svg?react';

const pages = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Dashboard',
    path: '/dashboard',
  },
  {
    name: 'Tenant Support',
    path: '/tenant-support',
  },
  {
    name: 'Smart Package Locker',
    path: '/smartpackage',
  },
  {
    name: 'Guest Access',
    path: '/guestaccess',
  },
  {
    name: 'Guest Parking',
    path: '/parking',
  },
  {
    name: 'Digital Lease',
    path: '/digital-lease',
  },
];

const settings = [
  {
    name: 'Dashboard',
    path: '/dashboard',
  },
  {
    name: 'Logout',
    path: '/',
  },
];

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

function ResponsiveAppBar() {
  const dispatch = useDispatch();
  const handleSignout = async () => {
    await fetch(`${API_BASE_URL}/auth/signout`, {
      method: 'POST',
      credentials: 'include', // Important: This allows cookies to be sent
    });
  };
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const user = useSelector((state: RootState) => state.user.currentUser);
  const location = useLocation();
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = (e: React.MouseEvent): void => {
    const target = (e.target as HTMLElement)?.innerHTML;
    if (target === 'Logout') {
      handleSignout();
      dispatch(setUser(null));
    }
    setAnchorElUser(null);
  };

  return (
    <AppBar position='static'>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          {/* Mobile */}
          <Logo style={{ height: 40, width: 40, marginRight: 10 }} fill='#5b3e96' />
          <Typography
            variant='h6'
            noWrap
            component='a'
            href='/'
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Elite Space
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            {user && (
              <>
                <IconButton
                  size='large'
                  aria-label='account of current user'
                  aria-controls='menu-appbar'
                  aria-haspopup='true'
                  onClick={handleOpenNavMenu}
                  color='inherit'
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id='menu-appbar'
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{ display: { xs: 'block', md: 'none' } }}
                >
                  {pages
                    .filter((page) => {
                      return location.pathname !== page.path;
                    })
                    .map((page) => (
                      <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                        <Link to={page.path} style={{ textDecoration: 'none' }}>
                          <Typography sx={{ textAlign: 'center', color: '#000' }}>
                            {page.name}
                          </Typography>
                        </Link>
                      </MenuItem>
                    ))}
                </Menu>
              </>
            )}
          </Box>
          <Typography
            variant='h5'
            noWrap
            component='a'
            href='/'
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Elite Space
          </Typography>
          {/* Desktop */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}></Box>
          {user && (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title='Profile settings'>
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt={`${user.firstName}`} src='/static/images/avatar/2.jpg' />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id='menu-appbar'
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings
                  .filter((setting) => {
                    if (location.pathname === '/') {
                      return setting;
                    }
                    return location.pathname !== setting.path;
                  })
                  .map((setting) => (
                    <MenuItem key={setting.name} onClick={handleCloseUserMenu}>
                      <Link to={setting.path} style={{ textDecoration: 'none', color: 'inherit' }}>
                        <Typography sx={{ textAlign: 'center' }}>{setting.name}</Typography>
                      </Link>
                    </MenuItem>
                  ))}
              </Menu>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
