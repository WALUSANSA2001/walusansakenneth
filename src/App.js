
import './App.css';
import * as React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Menu from './Menu';
import Cart from './Cart';
import {CartProvider } from 'react-use-cart';
import Box from '@mui/material/Box';
import { AppBar, Button,  Toolbar, Typography} from '@mui/material';
import SignUp from './signup';
import { orange } from '@mui/material/colors';
const pages = [ 'Blog'];
function App() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <div className="App">
      <AppBar>
        <Toolbar
         sx={{
          color:orange
  
  
        }}>
          <Typography
          variant="h4"
          noWrap
          component="a"
          href="#app-bar-with-responsive-menu"
          sx={{
            mr: 2,
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
          }}>
            KFC
          </Typography>
        
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
         <Button sx={{marginLeft:"auto"}}
          color='warning'
         variant='contained'
        
         >
          SignUp
         </Button>
         
        </Toolbar>
      </AppBar>
      <>
      <CartProvider>
    <Menu />
    <Cart />
    </CartProvider>
      </>
      
    </div>
  );
}

export default App;
