import {  useState } from 'react';

import Cover2  from '../assets/img/cover-2.jpg';
import { Box ,Container,Button ,Grid,Typography,Paper} from '@mui/material';
import Divider from '@mui/material/Divider';
import DiscountIcon from '@mui/icons-material/Discount';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const Items = [
    {
        id:1 ,
        name: "item1",
        price: 100,
        discount: true,
        freeshipping: false,
        category: "S"
    },
    {
        id:2 ,
        name: "item2",
        price: 200,
        discount: false,
        freeshipping: true,
        category: null
    },
    {
        id:3 ,
        name: "item3",
        price: 300,
        discount: true,
        freeshipping: false,
        category: "S"
    },
    {
        id:4 ,
        name: "item4",
        price: 400,
        discount: false,
        freeshipping: true,
        category: null
    },
    {
        id:5 ,
        name: "item5",
        price: 500,
        discount: true,
        freeshipping: true,
        category: null
    },
    {
        id:6 ,
        name: "item6",
        price: 600,
        discount: true,
        freeshipping: false,
        category: "S"
    },
    {
        id:7 ,
        name: "item7",
        price: 700,
        discount: true,
        freeshipping: false,
        category: "S"
    },
    {
        id:8 ,
        name: "item8",
        price: 800,
        discount: true,
        freeshipping: false,
        category: "S"
    }, 
    {
        id:9 ,
        name: "item9",
        price: 900,
        discount: true,
        freeshipping: false,
        category: "G"
    },
    {
        id:10 ,
        name: "item10",
        price: 1000,
        discount: true,
        freeshipping: true,
        category: "G"
    },
    
]

const BodyXs = () => {
    const [dis, SetDis] = useState(true);
    const [sh, SetSh] = useState(true);
    const [menuExpand, setMenuExpand] = useState(null);

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
    
    const handleMouseOver= () => {
        setMenuExpand(true)
    }

    const handleClose= () => {
        setMenuExpand(false)
    }

    return (
        <>  
        <Box>
            <Box sx={{display:"flex"}}>
                <Container>
                    <List sx={{position:"absolute" ,display: { xs: 'none', sm: 'block' }}}>
                    <ListItem sx={{'&:hover': { boxShadow: 5}}}>
                    <ListItemText
                        primaryTypographyProps={{fontSize: {sm:'10px',md:'18px'}}}
                        primary="Electronic Devices"
                        onMouseOver={handleMouseOver}
                    />
                    </ListItem>
                    <ListItem sx={{'&:hover': { boxShadow: 5}}}>
                    <ListItemText
                        primaryTypographyProps={{fontSize: {sm:'10px',md:'18px'}}}
                        primary="Electronic Accessories"
                    />
                    </ListItem>
                    <ListItem sx={{'&:hover': { boxShadow: 5}}}>
                    <ListItemText
                        primaryTypographyProps={{fontSize: {sm:'10px',md:'18px'}}}
                        primary="TV & Home Appliances"
                    />
                    </ListItem>
                    <ListItem sx={{'&:hover': { boxShadow: 5}}}>
                    <ListItemText
                        primaryTypographyProps={{fontSize: {sm:'10px',md:'18px'}}}
                        primary="Health & Beauty"
                    />
                    </ListItem>
                    <ListItem sx={{'&:hover': { boxShadow: 5}}}>
                    <ListItemText
                        primaryTypographyProps={{fontSize: {sm:'10px',md:'18px'}}}
                        primary="Babies & Toys"
                    />
                    </ListItem>
                    <ListItem sx={{'&:hover': { boxShadow: 5}}}>
                    <ListItemText
                        primaryTypographyProps={{fontSize: {sm:'10px',md:'18px'}}}
                        primary="Home & Lifestyle"
                    />
                    </ListItem>
                </List>
                { menuExpand &&<List sx={{
                    position: "absolute",
                    ml :{ md:30 ,sm:16}
                    }}>
                    <ListItem sx={{'&:hover': { boxShadow: 5}}}>
                    <ListItemText
                        primaryTypographyProps={{fontSize: {sm:'10px',md:'18px'}}}
                        primary="Mobile"
                        onClick={handleClose}
                    />
                    </ListItem> 
                    <ListItem sx={{'&:hover': { boxShadow: 5}}}>
                    <ListItemText
                        primaryTypographyProps={{fontSize: {sm:'10px',md:'18px'}}}
                        primary="Tablet"
                        onClick={handleClose}
                    />
                    </ListItem> 
                    <ListItem sx={{'&:hover': { boxShadow: 5}}}>
                    <ListItemText
                        primaryTypographyProps={{fontSize: {sm:'10px',md:'18px'}}}
                        primary="Laptop"
                        onClick={handleClose}
                    />
                    </ListItem> 
                    <ListItem sx={{'&:hover': { boxShadow: 5}}}>
                    <ListItemText
                        primaryTypographyProps={{fontSize: {sm:'10px',md:'18px'}}}
                        primary="X"
                        onClick={handleClose}
                    />
                    </ListItem> 
                    </List>
                    }
                </Container>
                <Box 
                                component="img"
                                sx={{
                                width: 0.75,
                                display: { xs: 'none', sm: 'flex' },
                                mr: "10px"
                                }}
                                alt="Lazada logo"
                                src={Cover2}
                        />

            </Box>

            <Grid container sx={{display: { xs: 'none', sm: 'flex' }}}>
                <Grid item xs={12} sx={{mt:4}}>
                    <Grid container>
                        <Grid item xs={4}>
                            <Container>
                            <Button fullWidth size="small"  onClick={handleClick1} sx={{borderRadius: '10px',boxShadow: 1,'&:hover': { boxShadow: 5} }} > Show all items</Button>
                            </Container>
                        </Grid>
                        <Grid item xs={4}>
                            <Container>
                            <Button fullWidth  size="small"  onClick={handleClick2} sx={{borderRadius: '10px',color:'red',boxShadow: 1,'&:hover': { boxShadow: 5} }} > < DiscountIcon/> Discount items</Button>
                            </Container>
                        </Grid>
                        <Grid item xs={4}>
                            <Container>
                            <Button fullWidth size="small" onClick={handleClick3} sx={{borderRadius: '10px',color:'#04bca4',boxShadow: 1,'&:hover': { boxShadow: 5} }} > <LocalShippingIcon/> Free shipping</Button>
                            </Container>
                        </Grid>
                    </Grid>        
                </Grid>
            </Grid>
            <Grid container sx={{display: { xs: 'none', sm: 'flex' }}}>
                <Grid item xs={12} sx={{mt:2}}>
                    <Grid container>

                        { Items.filter((j)=>j.discount===dis||j.freeshipping===sh)
                                .map( (i)=> 
                                <Grid item sm={4} md={2}>
                                    <Container>
                                        <Paper  elevation={1} key={i.id} sx={{borderRadius: '10px' ,'&:hover': { boxShadow: 5}}}>
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
            <Grid container sx={{display: { xs: 'none', sm: 'flex' }}}>
                <Grid item xs={12} sx={{mt:2}}>
                <Typography variant="h4"sx={{marginBottom: '12px',ml:'24px'}}>Sneakers</Typography>
                    <Grid container>

                        { Items.filter((j)=>j.category==="S")
                                .map( (i)=> 
                                <Grid item sm={4} md={2}>
                                    <Container>
                                        <Paper  elevation={1} key={i.id} sx={{borderRadius: '10px' ,'&:hover': { boxShadow: 5}}}>
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
            <Grid container sx={{display: { xs: 'none', sm: 'flex' }}}>
                <Grid item xs={12} sx={{mt:2}}>
                <Typography variant="h4"sx={{marginBottom: '12px',ml:'24px'}}>Video Games</Typography>
                    <Grid container>

                        { Items.filter((j)=>j.category==="G")
                                .map( (i)=> 
                                <Grid item sm={4} md={2}>
                                    <Container>
                                        <Paper  elevation={1} key={i.id} sx={{borderRadius: '10px' ,'&:hover': { boxShadow: 5}}}>
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
        </Box>       
        </>
    );
};

export default BodyXs;
