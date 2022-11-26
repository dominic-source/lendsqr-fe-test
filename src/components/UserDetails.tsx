
import { Box, Typography, Stack, Button, Divider, Link, Grid} from '@mui/material';
import React from 'react';
import { createTheme, styled } from '@mui/material/styles';

const user_details = ['General Details',
                         'Documents',
                         'Bank Details', 
                         'Loans',
                         'Savings',
                         'App and System'
                    ]
  
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

            <Link className='user-details-back-button' underline='none' href='/dashboard'> 
                <img aria-label='click to go back' alt='back button' src='/back_button.svg' />
                <Box ml={2} sx={{color:'#545F7D'}}>Back to Users</Box>
            </Link>

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
{/*                     Single user details page                */}
            <div className='user-details-base'>
                <Stack direction='row' 
                    divider={<Divider orientation="vertical" flexItem />}
                    spacing={3}
                    alignItems='center'
                    >

                    <Stack direction='row'
                        spacing={3}
                        alignItems='center'>
                        <img src='/svg/avatar.svg' alt='user avatar' />
                        <Box>
                            <Typography className='user-typography'>Grace Effiom</Typography>
                            <Typography className='user-typography-small'>LSQFf587g90</Typography>
                        </Box>
                    </Stack>

                    <Box>
                        <Typography>User's Tier</Typography>
                        <Box> 
                            <img src='/svg/star_fill.svg' alt='star' />
                            <img src='/svg/star.svg' alt='star' />
                            <img src='/svg/star.svg' alt='star' />
                        </Box>
                    </Box>

                    <Box>
                        <Typography className='user-typography'>₦200,000.00</Typography>
                        <Typography className='user-typography-small'>9912345678/Providus Bank</Typography>
                    </Box>
                </Stack>
                <Stack direction= 'row' alignItems='center' spacing= {6} mt={6}>
                    {user_details.map((item,index)=>{
                        return(
                            <Typography key={index} 
                                className={item === 'General Details'?
                                'user-typography-pages-current':'user-typography-pages'}>
                                    {item}
                            </Typography>
                        )
                    })}
                </Stack>
            </div>
            
            <Stack direction='column'
                divider={<Divider orientation="horizontal" flexItem />}
                className='user-details-base'
                pr={3}
                pl={3}
                spacing={3}>
                    <Box>
                        <Typography className='user-details-information'>Personal Information</Typography>
                        <Grid container spacing={3}>
                            <Grid item xs={8} sm={6} md={2.4}>
                              <Typography className='user-details-typography'>Full Name</Typography>
                              <Typography className='user-details-typography-bottom'>Grace Effiom</Typography>
                            </Grid>
                            
                            <Grid item xs={8} sm={6} md={2.4}>
                              <Typography className='user-details-typography'>Phone Number</Typography>
                              <Typography className='user-details-typography-bottom'>09053564892</Typography>
                            </Grid>

                            <Grid item xs={8} sm={6} md={2.4}>
                              <Typography className='user-details-typography'>Email Address</Typography>
                              <Typography className='user-details-typography-bottom'>graceEffiom @gmail.com</Typography>
                            </Grid>

                            <Grid item xs={8} sm={6} md={2.4}>
                              <Typography className='user-details-typography'>BVN</Typography>
                              <Typography className='user-details-typography-bottom'>56664848226116</Typography>
                            </Grid>

                            <Grid item xs={8} sm={6} md={2.4}>
                              <Typography className='user-details-typography'>Gender</Typography>
                              <Typography className='user-details-typography-bottom'>Female</Typography>
                            </Grid>

                            <Grid item xs={8} sm={6} md={2.4}>
                              <Typography className='user-details-typography'>Marital Status</Typography>
                              <Typography className='user-details-typography-bottom'>Single</Typography>
                            </Grid>

                            <Grid item xs={8} sm={6} md={2.4}>
                              <Typography className='user-details-typography'>Children</Typography>
                              <Typography className='user-details-typography-bottom'>none</Typography>
                            </Grid>

                            <Grid item xs={8} sm={6} md={2.4}>
                              <Typography className='user-details-typography'>Type of Residence</Typography>
                              <Typography className='user-details-typography-bottom'>Parent's Apartment</Typography>
                            </Grid>
                        </Grid>
                    </Box>

                    <Box>
                        <Typography className='user-details-information'>Education and Employment</Typography>
                        <Grid container spacing={3}>
                            <Grid item xs={8} sm={6} md={2.4}>
                              <Typography className='user-details-typography'>Level of Eduction</Typography>
                              <Typography className='user-details-typography-bottom'>B.Sc</Typography>
                            </Grid>
                            
                            <Grid item xs={8} sm={6} md={2.4}>
                              <Typography className='user-details-typography'>EMPLOYEMENT STATUS</Typography>
                              <Typography className='user-details-typography-bottom'>Employed</Typography>
                            </Grid>

                            <Grid item xs={8} sm={6} md={2.4}>
                              <Typography className='user-details-typography'>SECTOR OF EMPLOYMENT</Typography>
                              <Typography className='user-details-typography-bottom'>FinTech</Typography>
                            </Grid>

                            <Grid item xs={8} sm={6} md={2.4}>
                              <Typography className='user-details-typography'>DURATION OF EMPLOYMENT</Typography>
                              <Typography className='user-details-typography-bottom'>2 years</Typography>
                            </Grid>

                            <Grid item xs={8} sm={6} md={2.4}>
                              <Typography className='user-details-typography'>OFFICIAL EMAIL</Typography>
                              <Typography className='user-details-typography-bottom'>grace@lendsqr.com</Typography>
                            </Grid>

                            <Grid item xs={8} sm={6} md={2.4}>
                              <Typography className='user-details-typography'>MONTHLY INCOME</Typography>
                              <Typography className='user-details-typography-bottom'>#200,000 - #400,000</Typography>
                            </Grid>

                            <Grid item xs={8} sm={6} md={2.4}>
                              <Typography className='user-details-typography'>LOAN REPAYMENT</Typography>
                              <Typography className='user-details-typography-bottom'>40,000</Typography>
                            </Grid>

                        </Grid>
                    </Box>

                    <Box>
                        <Typography className='user-details-information'>Socials</Typography>
                        <Grid container spacing={3}>
                            <Grid item xs={8} sm={6} md={2.4}>
                              <Typography className='user-details-typography'>TWITTER</Typography>
                              <Typography className='user-details-typography-bottom'>@graceEffiom</Typography>
                            </Grid>
                            
                            <Grid item xs={8} sm={6} md={2.4}>
                              <Typography className='user-details-typography'>FACEBOOK</Typography>
                              <Typography className='user-details-typography-bottom'>Grace Effiom</Typography>
                            </Grid>

                            <Grid item xs={8} sm={6} md={2.4}>
                              <Typography className='user-details-typography'>INSTAGRAM</Typography>
                              <Typography className='user-details-typography-bottom'>@graceEffiom </Typography>
                            </Grid>
                        </Grid>
                    </Box>

                    <Box>
                        <Typography className='user-details-information'>Guarantors</Typography>
                        <Grid container spacing={3}>
                            <Grid item xs={8} sm={6} md={2.4}>
                              <Typography className='user-details-typography'>FULL NAME</Typography>
                              <Typography className='user-details-typography-bottom'>Grace Effiom</Typography>
                            </Grid>
                            
                            <Grid item xs={8} sm={6} md={2.4}>
                              <Typography className='user-details-typography'>PHONE NUMBER</Typography>
                              <Typography className='user-details-typography-bottom'>09053564892</Typography>
                            </Grid>

                            <Grid item xs={8} sm={6} md={2.4}>
                              <Typography className='user-details-typography'>EMAIL ADDRESS</Typography>
                              <Typography className='user-details-typography-bottom'>graceEffiom@gmail.com</Typography>
                            </Grid>

                            <Grid item xs={8} sm={6} md={2.4}>
                              <Typography className='user-details-typography'>RELATIONSHIP</Typography>
                              <Typography className='user-details-typography-bottom'>sister</Typography>
                            </Grid>
                        </Grid>
                    </Box>
            
            </Stack>

        </div>
    )
}

export default UserDetails;