import { Box, Typography } from '@mui/material';
import React from 'react';
import { solve } from './MainDashboard';

const icons:[string[], string[]] = [['USERS', 'ACTIVE USERS', 'USERS WITH LOANS',
 'USERS WITH SAVINGS'],['icon','icon (1)','icon (2)', 'icon (3)']];

const list:string[] = ['ORGANIZATION','USERNAME','EMAIL','PHONE NUMBER', 'DATE JOINED', 'STATUS']

 interface dashboardItem {
    id: number,
    icon?: string,
    item: string
}

 let iconsArray: dashboardItem[] = [];
 solve(icons,iconsArray)

const Users:React.FC = () => {
    return (
        <div className='top-covering-all-item'>
            <Typography className='users'>Users</Typography>
            {/* This are the top boxes for users experience */}
            <div className='top'>
                {iconsArray.map((item) =>  {
                    return(
                        <Box className='card'> 
                        <img src={`/${item.icon}.svg`} alt='' width='40px' height='40px'/>
                        <Typography mt={2} mb={2}> {item.item} </Typography>
                        <Typography className='number-of-users'>{(item.id+1)*3564}</Typography>
                        </Box>
                    )
                })}
            </div>

            <div>
                
            </div>
        </div>
    )
}

export default Users;