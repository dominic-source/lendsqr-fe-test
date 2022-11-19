
import { Box, Typography, Stack, Button } from '@mui/material';
import React from 'react';
import { createTheme, styled } from '@mui/material/styles';


  
const StyledButton = styled(Button)(({theme}) => ({
    color:'#39CDCC',
    outline: '#39CDCC',
    borderColor: '#39CDCC',
    '&:hover, &.Mui-focusVisible': {
        borderColor: '#39CDCC',
      },
      '&.Mui-active': {
        borderColor: '#39CDCC',
      },
}))

const UserDetails:React.FC = () => {
    return (
        <div className='top-covering-all-item'>
            <div className='user-details-back-button'> 
                <img aria-label='click to go back' alt='back button' src='/back_button.svg' />
                <Box ml={2} >Back to Users</Box>
            </div>

            <Stack direction='row' mt={3} alignItems='center' justifyContent='space-between' spacing='12'>
                <div className='user-details'>User Details </div>
                <Stack direction='row' spacing={2}> 
                    <Button variant="outlined" color='error'
                        aria-label='An Active user'>
                            BACKLIST USER
                    </Button>
                    <StyledButton variant="outlined" 
                        aria-label='An Active user' >
                            ACTIVATE USER
                    </StyledButton>
                </Stack>
            </Stack>
        </div>
    )
}

export default UserDetails;