// material-ui
import { AppBar,Container} from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';



const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: '120px' ,
    backgroundColor: alpha(theme.palette.common.black, 0.12),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.black, 0.24),
    },
    marginRight: 2,
    marginLeft: 2,
    width: '100%',
    marginTop: 20 ,
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
      [theme.breakpoints.up('md')]: {
        width: '60ch',
      },
    },
  }));
  
const HeaderXs = () => {
    return (
        <>
            {/* header */}
            <AppBar 
                position="static"
                elevation={0} 
                sx={{ 
                display: { xs: 'flex', sm: 'none' }, 
                height: 80,
                justifyContent: "center",
                bgcolor: "#fff" 
                
                }}
            >
                <Container>
                    <Search >
                        <SearchIconWrapper>
                          <SearchIcon sx={{ color: "#f4484c" }} />
                        </SearchIconWrapper>
                        <StyledInputBase
                          placeholder="Search…"
                          inputProps={{ 'aria-label': 'search' }}
                        />                     
                    </Search>         
                </Container>
            </AppBar>
        </>
    );
};

export default HeaderXs;
