import React, {useState} from 'react'
import { Typography,
         Box, 
         TextField, 
         Stack, 
         Button, 
         Grid,
         IconButton,
         OutlinedInput,
         InputLabel,
         InputAdornment,
         FormControl,
         Container,
       } from '@mui/material';     
import '../css/App.css';
import '../css/AppMobile.css';
import { styled } from '@mui/material/styles';
interface State {
    password: string;
    showPassword: boolean;
  }

const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: '#39CDCC',
      },
    '& .MuiOutlinedInput-root': {
      '&:hover fieldset': {
        borderColor: '#39CDCC',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#39CDCC',
      },
    },
});

const CssFormControl = styled(FormControl)({
    '& label.Mui-focused': {
        color: '#39CDCC',
      },
    '& .MuiOutlinedInput-root': {
      '&:hover fieldset': {
        borderColor: '#39CDCC',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#39CDCC',
      },
    },
})


const Login:React.FC = () => {

    const [values, setValues] = useState<State>({
        password: '',
        showPassword: false,
      });
    
      const handleChange =
        (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
          setValues({ ...values, [prop]: event.target.value });
        };
    
      const handleClickShowPassword = () => {
        setValues({
          ...values,
          showPassword: !values.showPassword,
        });
      };
    
      const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
      };


    return (
        <div>
            <Grid container spacing={{xs:0,sm:3, md:5}}>
                <Grid  xs={12} sm={5} md={5} sx={{pl:{xs:0, sm:6,md:12},pt:{sm:10,md:15}, bgcolor:'rgb(229, 229, 229,0.2)'}}>
                
                    <Box pb={{xs:1,sm:5,md:10}}>
                        <img src='lendsqr_logo.svg' alt='lendsqr logo'/>
                    </Box>
                    <Box>
                        <img src='pablo-sign-in 1.svg' alt='lendsqr' className='img'/>
                    </Box>
                </Grid>
                <Grid  xs={12} sm={5} md={5} sx={{pl:{xs:0, sm:10,md:15}, pt:{sm:10,md:25}}}>
                <Box p={1} sx={{ pb: {xs: 1, sm: 2,md: 4 }}}>
                    <h1 className='welcome_color'>Welcome!</h1>
                    <Typography className="details-login">Enter details to login.</Typography>
                </Box>
                {/* Login form */}
                <Box component="form" 
                        sx={{   '& > :not(style)': { m: 1, width: '70%' }, }} 
                        noValidate 
                        autoComplete="off" >
                    <Stack spacing={2} direction="column">
                        <CssTextField id="outlined-basic" label="Email" variant="outlined" />
                        <CssFormControl variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                <OutlinedInput
                                  id="outlined-adornment-password"
                                  type={values.showPassword ? 'text' : 'password'}
                                  value={values.password}
                                  onChange={handleChange('password')}
                                  endAdornment={
                                    <InputAdornment position="end">
                                      <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                      >
                                        {values.showPassword ? <Typography  variant='caption' className='show'>HIDE</Typography> : 
                                        <Typography variant='caption' className='show'> SHOW</Typography>}
                                      </IconButton>
                                    </InputAdornment>
                                  }
                                  label="Password"
                                />
                        </CssFormControl>
                        <Typography variant='button' className='forgot_password_style'>FORGOT PASSWORD?</Typography>
                        <Button variant="contained" className='login' href='/dashboard' >LOG IN</Button>  
                    </Stack>
                </Box>
                </Grid>
            </Grid>
        </div>
    )
}

export default Login
