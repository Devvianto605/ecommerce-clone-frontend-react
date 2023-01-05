// material-ui
import { AppBar, Toolbar,Box ,Container} from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import Lazlogo from '../assets/img/lazlogo.png';
import Vouch from '../assets/img/vouch.jpg';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: "120px",
    backgroundColor: alpha(theme.palette.common.black, 0.12),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.black, 0.24),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: '#f4484c',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '30ch',
      },
    },
  }));
  
const HeaderMd = () => {
    return (
        <>
            {/* header */}
            <AppBar 
                position="static"
                elevation={0} 
                sx={{ 
                display: { xs: 'none', sm: 'flex' }, 
                flexGrow: 1 ,
                height: 100,
                justifyContent: "center",
                bgcolor: "#fff" 
                
                }}
            >
                <Container>
                    <Toolbar>
                    <Box
                            component="img"
                            sx={{
                            height: 32,
                            mx: 'auto' 
                            }}
                            alt="Lazada logo"
                            src={Lazlogo}
                    />
                    <Search >
                        <SearchIconWrapper>
                        <SearchIcon sx={{ color: "#f4484c" }} />
                        </SearchIconWrapper>
                        <StyledInputBase
                        placeholder="Search…"
                        inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                    <ShoppingCartIcon fontSize='medium'sx={{ color: "#000083" ,ml: "auto" ,mr: 6 }} />
                    <Box
                            component="img"
                            sx={{
                            height: 32,
                            mr: 'auto'
                            }}
                            alt="Voucher"
                            src={Vouch}
                        />
                </Toolbar>
                </Container>
            </AppBar>
        </>
    );
};

export default HeaderMd;
