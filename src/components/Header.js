import { Box, Button, IconButton, Toolbar, Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';

const navItems = ['Home', 'About', 'Contact'];
const Header = () => {

    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
      };
    return (
        <header className='header'>
            <h3 className='pl-5 text-white text-4xl my-auto font-bold'>Giphy Search</h3>
        </header>  
      );
}
 
export default Header;
