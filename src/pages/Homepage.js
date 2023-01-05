import React from 'react';
import { Box } from '@mui/material';
import HeaderMd from '../components/HeaderMd.js';
import HeaderXs from '../components/HeaderXs.js';
import BodyMd from '../components/BodyMd.js';
import BodyXs from '../components/BodyXs.js';
import FooterXs from '../components/FooterXs.js';
import FooterMd from '../components/FooterMd.js';

function App() {
  
  return ( 
   
        <>
            <Box sx={{ display: 'block' }}>
                <HeaderMd/>
                <BodyMd/>
                <FooterMd/>

                <HeaderXs/>
                <BodyXs/>
                <FooterXs/>

                <Box sx={{m:10}}/>
            </Box>
        </>
  );
}

export default App;
