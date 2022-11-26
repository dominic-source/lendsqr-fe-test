import Search from './Search';
import { Box, Typography } from '@mui/material';
import React ,{useState} from 'react';
import { solve } from './MainDashboard';
import Table from './Table';
import Details from './Details';

const icons:[string[], string[]] = [['USERS', 'ACTIVE USERS', 'USERS WITH LOANS',
 'USERS WITH SAVINGS'],['icon','icon (1)','icon (2)', 'icon (3)']];

 interface dashboardItem {
    id: number,
    icon?: string,
    item: string
}

 let iconsArray: dashboardItem[] = [];
 solve(icons,iconsArray)

const Users:React.FC = () => {

    const [filter, setFilter] = useState<boolean>(false);


    const handleClick = () => filter?setFilter(false):setFilter(true);

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
                <Table handleclick = {handleClick} />
                {filter && <Search/>}
            </div>
        </div>
    )
}

export default Users;