import React, { useState } from 'react';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Home, Brightness4, SwapHoriz, Usb, Person } from '@mui/icons-material';
import './NavBar.css';

const NavBar = () => {
    const [theme, setTheme] = useState('dark');
    const [position, setPosition] = useState('left');
  
    return (
      <Sidebar theme={theme} position={position}>
        <Menu>
          <MenuItem icon={<Home />}>Home</MenuItem>
          <MenuItem icon={<Person />}>Home</MenuItem>
          <MenuItem icon={<Home />}>Home</MenuItem>
          <MenuItem icon={<Home />}>Home</MenuItem>

          {/* More menu items... */}
        </Menu>
        <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
          Toggle Theme <Brightness4 />
        </button>
        <button onClick={() => setPosition(position === 'left' ? 'right' : 'left')}>
          Toggle Position <SwapHoriz />
        </button>
      </Sidebar>
  )
}

export default NavBar
