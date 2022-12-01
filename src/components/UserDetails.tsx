
import { Box, Typography, Stack, Button, Divider, Link, Grid, Avatar} from '@mui/material';
import React, {useEffect, useState} from 'react';
import { styled } from '@mui/material/styles';
import { useParams,} from "react-router-dom";
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


interface Detailed {
  profile:{
    lastName: string;
    firstName: string;
    phoneNumber: string;
    bvn: string;
    gender: string;
    avatar: string;
  };
  email: string;
  accountBalance: string,
  accountNumber: string,
  education: {
    level: string;
    employmentStatus: string;
    sector: string;
    duration: string;
    officeEmail: string;
    monthlyIncome: string[];
    loanRepayment: string;
  };
  socials: {
    twitter: string;
    facebook: string;
    instagram: string;
  };
  guarantor: {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    address: string;
    gender: string;
  };
}

const UserDetails:React.FC = () => {

  const [state, setState] = useState<Detailed>({  
    profile:{
      lastName: '',
      firstName: '',
      phoneNumber: '',
      bvn: '',
      gender: '',
      avatar: '',
    },
    email: '',
    accountBalance: '',
    accountNumber: '',
    education: {
      level: '',
      employmentStatus: '',
      sector: '',
      duration: '',
      officeEmail: '',
      monthlyIncome: ['',''],
      loanRepayment: '',
    },
    socials: {
      twitter: '',
      facebook: '',
      instagram: '',
    },
    guarantor: {
      firstName: '',
      lastName: '',
      phoneNumber: '',
      address: '',
      gender: '',
    },
});
  let { id } = useParams();

 // Opening Database
 const request = window.indexedDB.open("Lendsqr_webapp_Database", 3);

 useEffect(()=>{
  request.onsuccess = (event: any) => {
      const db = event.target.result;

      // Create a transaction for to retrieve customer data
      const transaction = db.transaction("customers").objectStore("customers");

            // Get all the value within the itemNumber range
      const getRequest = transaction.get(Number(id));
      getRequest.transaction.oncomplete = () => {
        console.log(id);
        let profile = getRequest.result.profile;
        let education = getRequest.result.education;
        let socials = getRequest.result.socials;
        let guarantor = getRequest.result.guarantor;

           setState(
          {  profile:{
            lastName: profile.lastName,
            firstName: profile.firstName,
            phoneNumber: profile.phoneNumber,
            bvn: profile.bvn,
            gender: profile.gender,
            avatar: profile.avatar,
          },
          email: getRequest.result.email,
          accountBalance: getRequest.result.accountBalance,
          accountNumber: getRequest.result.accountNumber,
          education: {
            level: education.level,
            employmentStatus: education.employmentStatus,
            sector: education.sector,
            duration: education.duration,
            officeEmail: education.officeEmail,
            monthlyIncome: [education.monthlyIncome[0],education.monthlyIncome[1]],
            loanRepayment: education.loanRepayment,
          },
          socials: {
            twitter: socials.twitter,
            facebook: socials.facebook,
            instagram: socials.instagram,
          },
          guarantor: {
            firstName: guarantor.firstName,
            lastName: guarantor.lastName,
            phoneNumber: guarantor.phoneNumber,
            address: guarantor.address,
            gender: guarantor.firstName,
          },
        });
        console.log(getRequest.result);
      }
  }
},[]);

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
                        <Avatar src={state.profile.avatar} alt='user avatar' sx={{ width: 56, height: 56 }}/>
                        <Box>
                            <Typography className='user-typography'>{`${state.profile.lastName}  ${state.profile.firstName}`}</Typography>
                            <Typography className='user-typography-small'>{state.accountNumber}</Typography>
                        </Box>
                    </Stack>

                    <Box>
                        <Typography className='user-typography'>User's Tier</Typography>
                        <Box> 
                            <img src='/svg/star_fill.svg' alt='star' />
                            <img src='/svg/star.svg' alt='star' />
                            <img src='/svg/star.svg' alt='star' />
                        </Box>
                    </Box>

                    <Box>
                        <Typography className='user-typography'>{`₦ ${state.accountBalance}`}</Typography>
                        <Typography className='user-typography-small'>{state.profile.bvn}/Providus Bank</Typography>
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
                pb={3}
                mb={4}
                spacing={3}>
                    <Box>
                        <Typography className='user-details-information'>Personal Information</Typography>
                        <Grid container spacing={3}>
                            <Grid item xs={8} sm={6} md={2.4}>
                              <Typography className='user-details-typography'>Full Name</Typography>
                              <Typography className='user-details-typography-bottom'>
                                {`${state.profile.lastName}  ${state.profile.firstName}`}
                              </Typography>
                            </Grid>
                            
                            <Grid item xs={8} sm={6} md={2.4}>
                              <Typography className='user-details-typography'>Phone Number</Typography>
                              <Typography className='user-details-typography-bottom'>
                                  {state.profile.phoneNumber}
                              </Typography>
                            </Grid>

                            <Grid item xs={8} sm={6} md={2.4}>
                              <Typography className='user-details-typography'>Email Address</Typography>
                              <Typography className='user-details-typography-bottom'>
                                {state.email}
                              </Typography>
                            </Grid>

                            <Grid item xs={8} sm={6} md={2.4}>
                              <Typography className='user-details-typography'>BVN</Typography>
                              <Typography className='user-details-typography-bottom'>
                                  {state.profile.bvn}
                              </Typography>
                            </Grid>

                            <Grid item xs={8} sm={6} md={2.4}>
                              <Typography className='user-details-typography'>Gender</Typography>
                              <Typography className='user-details-typography-bottom'>
                                {state.profile.gender}
                              </Typography>
                            </Grid>

                            <Grid item xs={8} sm={6} md={2.4}>
                              <Typography className='user-details-typography'>Marital Status</Typography>
                              <Typography className='user-details-typography-bottom'>
                                Single
                              </Typography>
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
                              <Typography className='user-details-typography-bottom'>
                                {state.education.level}
                              </Typography>
                            </Grid>
                            
                            <Grid item xs={8} sm={6} md={2.4}>
                              <Typography className='user-details-typography'>EMPLOYEMENT STATUS</Typography>
                              <Typography className='user-details-typography-bottom'>
                                {state.education.employmentStatus}
                              </Typography>
                            </Grid>

                            <Grid item xs={8} sm={6} md={2.4}>
                              <Typography className='user-details-typography'>SECTOR OF EMPLOYMENT</Typography>
                              <Typography className='user-details-typography-bottom'>
                                {state.education.sector}
                              </Typography>
                            </Grid>

                            <Grid item xs={8} sm={6} md={2.4}>
                              <Typography className='user-details-typography'>DURATION OF EMPLOYMENT</Typography>
                              <Typography className='user-details-typography-bottom'>
                                {state.education.duration}
                              </Typography>
                            </Grid>

                            <Grid item xs={8} sm={6} md={2.4}>
                              <Typography className='user-details-typography'>OFFICIAL EMAIL</Typography>
                              <Typography className='user-details-typography-bottom'>
                                {state.education.officeEmail}
                              </Typography>
                            </Grid>

                            <Grid item xs={8} sm={6} md={2.4}>
                              <Typography className='user-details-typography'>MONTHLY INCOME</Typography>
                              <Typography className='user-details-typography-bottom'>
                                {`₦ ${state.education.monthlyIncome[0]} - ₦ ${state.education.monthlyIncome[1]}`}
                              </Typography>
                            </Grid>

                            <Grid item xs={8} sm={6} md={2.4}>
                              <Typography className='user-details-typography'>LOAN REPAYMENT</Typography>
                              <Typography className='user-details-typography-bottom'>
                                {state.education.loanRepayment}
                              </Typography>
                            </Grid>

                        </Grid>
                    </Box>

                    <Box>
                        <Typography className='user-details-information'>Socials</Typography>
                        <Grid container spacing={3}>
                            <Grid item xs={8} sm={6} md={2.4}>
                              <Typography className='user-details-typography'>TWITTER</Typography>
                              <Typography className='user-details-typography-bottom'>
                                {state.socials.twitter}
                              </Typography>
                            </Grid>
                            
                            <Grid item xs={8} sm={6} md={2.4}>
                              <Typography className='user-details-typography'>FACEBOOK</Typography>
                              <Typography className='user-details-typography-bottom'>
                                  {state.socials.facebook}
                              </Typography>
                            </Grid>

                            <Grid item xs={8} sm={6} md={2.4}>
                              <Typography className='user-details-typography'>INSTAGRAM</Typography>
                              <Typography className='user-details-typography-bottom'>
                                {state.socials.instagram} 
                              </Typography>
                            </Grid>
                        </Grid>
                    </Box>

                    <Box>
                        <Typography className='user-details-information'>Guarantors</Typography>
                        <Grid container spacing={3}>
                            <Grid item xs={8} sm={6} md={2.4}>
                              <Typography className='user-details-typography'>FULL NAME</Typography>
                              <Typography className='user-details-typography-bottom'>
                                {`${state.guarantor.lastName}  ${state.guarantor.firstName}`} 
                              </Typography>
                            </Grid>
                            
                            <Grid item xs={8} sm={6} md={2.4}>
                              <Typography className='user-details-typography'>PHONE NUMBER</Typography>
                              <Typography className='user-details-typography-bottom'>
                                {state.guarantor.phoneNumber}
                              </Typography>
                            </Grid>

                            <Grid item xs={8} sm={6} md={2.4}>
                              <Typography className='user-details-typography'>EMAIL ADDRESS</Typography>
                              <Typography className='user-details-typography-bottom'>
                                {state.guarantor.address}
                              </Typography>
                            </Grid>

                            <Grid item xs={8} sm={6} md={2.4}>
                              <Typography className='user-details-typography'>RELATIONSHIP</Typography>
                              <Typography className='user-details-typography-bottom'>
                                {state.guarantor.gender === "Female" ?'Sister':'Brother'}
                              </Typography>
                            </Grid>
                        </Grid>
                    </Box>
            
            </Stack>

        </div>
    )
}

export default UserDetails;