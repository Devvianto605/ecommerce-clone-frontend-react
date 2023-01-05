
import {  useState } from 'react';

// material-ui
import { Box,Container,Button ,Grid,Card,Paper,Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DiscountIcon from '@mui/icons-material/Discount';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PowerIcon from '@mui/icons-material/Power';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import Face3Icon from '@mui/icons-material/Face3';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import Divider from '@mui/material/Divider';

import Cover1  from '../assets/img/cover-1.png';

const Items = [
    {
        id:1 ,
        name: "item1",
        price: 100,
        discount: true,
        freeshipping: false,
    },
    {
        id:2 ,
        name: "item2",
        price: 200,
        discount: false,
        freeshipping: true
    },
    {
        id:3 ,
        name: "item3",
        price: 300,
        discount: true,
        freeshipping: false
    },
    {
        id:4 ,
        name: "item4",
        price: 400,
        discount: false,
        freeshipping: true
    },
    {
        id:5 ,
        name: "item5",
        price: 500,
        discount: true,
        freeshipping: true
    },
    {
        id:6 ,
        name: "item6",
        price: 600,
        discount: true,
        freeshipping: false
    },
    {
        id:7 ,
        name: "item7",
        price: 700,
        discount: true,
        freeshipping: false
    },
    {
        id:8 ,
        name: "item8",
        price: 800,
        discount: true,
        freeshipping: false
    },
    {
        id:9 ,
        name: "item9",
        price: 900,
        discount: true,
        freeshipping: false
    },
    {
        id:10 ,
        name: "item10",
        price: 1000,
        discount: true,
        freeshipping: true
    },
    
]


const BodyXs = () => {
    const [dis, SetDis] = useState(true);
    const [sh, SetSh] = useState(true);

    const handleClick1 =() => {
        SetDis(true);
        SetSh(true);
    }

    const handleClick2 =() => {
        SetDis(true);
        SetSh(false);
    }

    const handleClick3 =() => {
        SetDis(false);
        SetSh(true);
    }

    return (
        <>
            <Card sx={{display: { xs: 'flex', sm: 'none' },border: 0, p: 0 ,bgcolor:'red',m: 2}}>
                <Box
                            component="img"
                            sx={{
                            height: 150,
                            mr: 0
                            }}
                            alt="Lazada logo"
                            src={Cover1}
                    />
            </Card>
            <Grid container sx={{display: { xs: 'flex', sm: 'none' }, m: 2}}>

                <Grid item xs={12} sx={{mx:2,mt:4}}>
                    <Grid container>
                        <Grid item xs={3}>
                            <Container>
                            <DiscountIcon fontSize="large" sx={{color:'#e43a50'}}/>
                            <Typography variant="caption" align='center' >Discount</Typography>
                            </Container>
                        </Grid>
                        <Grid item xs={3}>
                            <Container>
                            <LocalShippingIcon fontSize="large" sx={{color:'#04bca4'}}/>
                            <Typography variant="caption" align='center' >Free Shipping</Typography>
                            </Container>
                        </Grid>
                        <Grid item xs={3}>
                            <Container>
                            <FavoriteIcon fontSize="large" sx={{color:'#fb0cbf'}}/>
                            <Typography variant="caption" align='center' >Favorite</Typography>
                            </Container>
                        </Grid>
                        <Grid item xs={3}>
                            <Container>
                            <CalendarMonthIcon fontSize="large" sx={{color:'#3c0488'}}/>
                            <Typography variant="caption" align='center' >Shopper calendar</Typography>
                            </Container>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} sx={{m:2}}>
                    <Grid container>
                        <Grid item xs={3}>
                            <Container>
                            <PowerIcon fontSize="large" sx={{color:'#f5710a'}} />
                            <Typography variant="caption" align='center' >Electronics</Typography>
                            </Container>
                        </Grid>
                        <Grid item xs={3}>
                            <Container>
                            <CheckroomIcon fontSize="large" sx={{color:'#3c4cc4'}}/>
                            <Typography variant="caption" align='center' >Fashions</Typography>
                            </Container>
                        </Grid>
                        <Grid item xs={3}>
                            <Container>
                            <Face3Icon fontSize="large" sx={{color:'#f51975'}} />
                            <Typography variant="caption" align='center' >Beauties</Typography>
                            </Container>
                        </Grid>
                        <Grid item xs={3}>
                            <Container>
                            <FastfoodIcon fontSize="large" sx={{color:'#ff7605'}} />
                            <Typography variant="caption" align='center' >Foods</Typography>
                            </Container>
                        </Grid> 
                    </Grid>
                </Grid>

            </Grid>
            <Grid container sx={{display: { xs: 'flex', sm: 'none' }}}>

                <Grid item xs={12} sx={{mt:2}}>
                    <Grid container>
                        <Grid item xs={4}>
                            <Container>
                            <Button fullWidth size="small" variant="outlined" onClick={handleClick1} sx={{borderRadius: '10px'}} >Show all items</Button>
                            </Container>
                        </Grid>
                        <Grid item xs={4}>
                            <Container>
                            <Button fullWidth size="small" variant="outlined"onClick={handleClick2} sx={{borderRadius: '10px'}}>Discount items</Button>
                            </Container>
                        </Grid>
                        <Grid item xs={4}>
                            <Container>
                            <Button fullWidth size="small" variant="outlined"onClick={handleClick3} sx={{borderRadius: '10px'}}>Free shipping</Button>
                            </Container>
                        </Grid>
                    </Grid>        
                </Grid>
            </Grid>
            <Grid container sx={{display: { xs: 'flex', sm: 'none' }}}>
                <Grid item xs={12} sx={{mt:2}}>
                    <Grid container>

                        { Items.filter((j)=>j.discount===dis||j.freeshipping===sh)
                                .map( (i)=> 
                                <Grid item xs={6}>
                                    <Container>
                                        <Paper  elevation={1} key={i.id} sx={{borderRadius: '10px' }}>
                                            <Box sx={{m:2}} key={i.id} >
                                            <Box
                                                    component="img"
                                                    sx={{
                                                    height: 150,
                                                    mr: 0
                                                    }}
                                                    alt="Lazada logo"
                                                    src={require(`../assets/img/item-${i.id}.jpg`)}
                                            />
                                            <Typography variant="h4"sx={{marginBottom: '12px'}}>{i.name}</Typography>
                                            <Divider/>
                                            <Typography variant="caption"sx={{marginBottom: '12px'}}>Price: {i.price} Baht</Typography>
                                            <Divider/>
                                            { i.discount && <Typography variant="caption"sx={{marginBottom: '12px'}}>(Discounted)</Typography>}
                                            <Divider/>
                                            { i.freeshipping && <Typography variant="caption"sx={{marginBottom: '12px'}}>(Free Shipping)</Typography>}
                                            <Divider/>   
                                            <Button size="small" variant="outlined" sx={{m: '12px',borderRadius: '10px'}}>BUY</Button>
                                            </Box>
                                        </Paper>
                                    </Container>
                                </Grid> 
                        )}

                    </Grid>        
                </Grid>
            </Grid>
                
        </>
    );
};

export default BodyXs;
