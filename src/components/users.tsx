import Search from './Search';
import { Box, Typography,Grid } from '@mui/material';
import React ,{useState} from 'react';
import { solve } from './MainDashboard';
import Table from './Table';

const icons:[string[], string[]] = [['USERS', 'ACTIVE USERS', 'USERS WITH LOANS',
 'USERS WITH SAVINGS'],['icon','icon (1)','icon (2)', 'icon (3)']];

 interface dashboardItem {
    id: number,
    icon?: string,
    item: string
}

 let iconsArray: dashboardItem[] = [];
 solve(icons,iconsArray);

const Users:React.FC = () => {

    const [filter, setFilter] = useState<boolean>(false);


    const handleClick = () => filter?setFilter(false):setFilter(true);

    return (
        <div className='top-covering-all-item' role='button'>
            <Typography className='users'>Users</Typography>
            {/* This are the top boxes for users experience */}
            <Grid container className='top'>
                {iconsArray.map((item, index) =>  {
                    return(
                        <Grid item key={index} xs={10} sm={3} md={2.7} className='card'> 
                        <img src={`/${item.icon}.svg`} alt='' width='40px' height='40px'/>
                        <Typography mt={2} mb={2}> {item.item} </Typography>
                        <Typography className='number-of-users' pb={1}>{(item.id+1)*3564}</Typography>
                        </Grid>
                    )
                })}
            </Grid>

            <div>  
                <Table handleclick = {handleClick} />
                {filter && <Search/>}
            </div>

        </div>
    )
}

export default Users;