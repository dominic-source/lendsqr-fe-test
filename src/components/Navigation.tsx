import React from 'react';
import {  Box, 
    Avatar,
    MenuItem,
    FormControl,
    Stack
} from '@mui/material'; 
import Select, { SelectChangeEvent } from '@mui/material/Select';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import '../css/App.css';


const Navigation:React.FC = () => {

  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

    return(
      <div className='nav'>
        <Stack direction='row' justifyContent="space-around"
              alignItems="center"
              spacing={2}
              className='navigation'
              >
            <Box><img src='/lendsqr_logo.svg' alt='lendsqr logo'/></Box>

            <div className='search_button' >
                <input type='text' className='search' placeholder='Search for anything' />
                <Box className='search_icon'>
                    <Box className='icon'><SearchIcon /></Box>
                </Box>
            </div>
          <Stack direction='row' justifyContent="space-around"
              alignItems="center"
              spacing={2}>
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
        </Stack>
      </div>)
}

export default Navigation