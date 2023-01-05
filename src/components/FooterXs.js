import {  useState } from 'react';

// material-ui
import { Box ,Container} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

  
const FooterXs = () => {
    const [value, setValue] = useState(0);
    return (
        <>
            <Box sx={{ display: { xs: 'flex', sm: 'none'},position:'fixed',bottom:0, width: '100%'}}>

                <Container>
                <BottomNavigation
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                    setValue(newValue);
                    }}
                >
                    <BottomNavigationAction label="Home" icon={<HomeIcon />} />
                    <BottomNavigationAction label="Categories" icon={<FormatListBulletedIcon />} />
                    <BottomNavigationAction label="Cart" icon={<ShoppingCartIcon />} />
                    <BottomNavigationAction label="Account" icon={<AccountCircleIcon />} />
                </BottomNavigation>
                </Container>
            </Box>
        </>
    );
};

export default FooterXs;
