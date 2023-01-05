
import { Box} from '@mui/material';
import F1  from '../assets/img/f-1.jpg';
import F2  from '../assets/img/f-2.jpg';
import F3  from '../assets/img/f-3.jpg';
import Divider from '@mui/material/Divider';

const FooterMd = () => {
    return (
        <>
         <Divider variant="middle" />
            <Box sx={{ display: { xs: 'none', sm: 'flex'},bottom:0, width: '100%',mt:10}}>
                <Box 
                        component="img"
                        sx={{
                        width: 0.3,
                        m: "auto",
                        display: { xs: 'none', sm: 'flex' }
                        }}
                        alt="footer"
                        src={F1}
                />
                <Box 
                        component="img"
                        sx={{
                        width: 0.3,
                        m: "auto",
                        display: { xs: 'none', sm: 'flex' }
                        }}
                        alt="footer"
                        src={F2}
                />
                <Box 
                        component="img"
                        sx={{
                        width: 0.3,
                        m: "auto",
                        display: { xs: 'none', sm: 'flex' }
                        }}
                        alt="footer"
                        src={F3}
                />
            </Box>
        </>
    );
};

export default FooterMd;
