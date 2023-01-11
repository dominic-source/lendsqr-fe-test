import React, {useEffect, useState} from 'react';
import {  Box, 
    Avatar,
    MenuItem,
    FormControl,
    Stack,
    Grid,
} from '@mui/material'; 
import Select, { SelectChangeEvent } from '@mui/material/Select';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import Resize from '../app/resize';


// This function component will displays items on the top of the screen
const Navigation:React.FC = () => {

  const [age, setAge] = React.useState('');
  const [state, setState] = useState(false);
    
    // This will set the detect the width of the screen and set the state of the app to fit the screen
    useEffect(() =>{
        Resize(() => {
            setState(window.matchMedia('(max-width:627px)').matches)
        })
      },[]);


  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  const handleClick = (event: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) => {
    console.log('clicked!!!')
  }
    return(
      <div className='nav'>
        <Grid container  className='navigation' p={{xs:2,sm:2, md:3}} >
            <Grid item xs={12} sm={4} md={4} mb={{xs:2,sm:0,md:0}}><img src='/lendsqr_logo.svg' alt='lendsqr logo'/></Grid>

{/*          This is the search button component to enable you search for users        */}
            <Grid item xs={12} sm={4} md={4}  mb={{xs:2,sm:0,md:0}} className='search_button' >
                <input 
                  type='text' 
                  className='search' 
                  data-id='This is a search button' 
                  placeholder='Search for anything' 
                  onClick={handleClick} />

                <Box className='search_icon'>
                    <Box className='icon'><SearchIcon /></Box>
                </Box>
            </Grid>

            <Grid item xs={12} sm={4} md={4} mb={{xs:2,sm:0,md:0}} >
              <Stack direction='row' justifyContent="space-around"
                  alignItems="center"
                  spacing={2}>
                {/*         This is the link to the documentation of the page                            */}
                <a href='/' className='top-anchor-tag'>Docs</a>

                <Box>
                    <NotificationsOutlinedIcon className='icon-notification'/>
                </Box>

                <Avatar alt="smiling lady" src='/image 4.png' />

                <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <Select
                      value={age}
                      onChange={handleChange}
                      displayEmpty
                      inputProps={{ 'aria-label': 'Without label' }}
                    >
                      <MenuItem value="" ><em>select name</em></MenuItem>
                      <MenuItem value={10}>Adedeji</MenuItem>
                      <MenuItem value={20}>Chinonso</MenuItem>
                      <MenuItem value={30}>Morba</MenuItem>
                    </Select>
                </FormControl>
              </Stack>
            </Grid>
            <Grid>
              {state && <AddIcon fontSize='large' sx={{color:'#39CDCC'}} className='top-mobile' /> }
            </Grid>
          </Grid>
      </div>)
}

export default Navigation