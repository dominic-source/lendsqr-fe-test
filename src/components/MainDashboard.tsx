import React from 'react';
import { Box } from '@mui/material';



interface dashboardItem {
    id: number,
    icon?: string,
    item: string
}

type generalType = [string[], string[]];

// These are arrays of items on the dashbourd and their corresponding icons
/*                              Start                                       */
let customers: generalType = [['User','Guarantor','Loans','Decision Models', 
                            'Savings','Loan Requests','Whitelist','Karma'],[
                                'user-friends 1','users 1','sack 1','handshake-regular 1',
                                'piggy-bank 1', 'Group 104', 'user-check 1','user-times 1'
                            ]];

let businesses: generalType = [['Organization','Loan Products','Savings Products', 
                            'Fees and Charges', 'Transactions', 'Services', 
                            'Service Account','Settlements', 'Reports'],
                            ['briefcase 1', 'Group 104', 'np_bank','coins-solid 1','icon',
                            'galaxy 1', 'user-cog 1', 'scroll 1','chart-bar 2'
                        ]];


let settings: generalType = [['Preferences','Fees and Pricing','Audit Logs'],
                                ['sliders-h 1','badge-percent 1', 'clipboard-list 1']];
/*                              End                                       */

let customersCompletedItem: dashboardItem[] = []; 
let businessesCompletedItem: dashboardItem[] = [];
let settingsCompletedItem: dashboardItem[] = [];


function solve(items:generalType, completedItems:dashboardItem[]) {

    for(let i = 0; i < items[1].length ; ++i){
        completedItems.push({item:items[0][i], icon:items[1][i],id:i})
    }
}

solve(customers, customersCompletedItem)
solve(businesses, businessesCompletedItem)
solve(settings, settingsCompletedItem)


const MainDashboard:React.FC = () => {
    
    return (
        <div className='contains-all'>
            <div className='top-dashboard-item'>
                                <img src='svg/briefcase 1.svg' alt='' className='image-style' /> 
                            <div className='top-dashboard-name'>Switch Organization</div> </div>


           <div className='top-dashboard-item spacing'>
                                <img src='svg/home 1.svg' alt='' className='image-style' /> 
                            <div className='top-dashboard-name top-dashboard-name-next'>Dashboard</div> </div>

        
        <div className="container">
           <Box sx={{width:'283px'}}> 
                <div className='customers'>Customers</div>
                    {customersCompletedItem.map((item) => {
                            return <div className='item' tabIndex= {0} > <div className='list-of-items'>
                                <img src={`svg/${item.icon}.svg`} alt='' className='image-style' /> 
                            <div className='items-name'>{item.item}</div></div></div>
                                                            })
                    }
           </Box>

           <Box sx={{width:'283px'}}>
                <div className='customers'>Business</div>
                {businessesCompletedItem.map((item) => {
                            return <div className='item' tabIndex= {0}> <div className='list-of-items'>
                                <img src={`svg/${item.icon}.svg`} alt='' className='image-style' /> 
                            <div className='items-name'>{item.item}</div></div></div>
                                                            })
                    }
           </Box>
           <Box sx={{width:'283px'}}>
                <div className='customers'>Setting</div>
                {settingsCompletedItem.map((item) => {
                            return <div className='item' tabIndex= {0}> <div className='list-of-items'>
                                <img src={`svg/${item.icon}.svg`} alt='' className='image-style' /> 
                            <div className='items-name'>{item.item}</div></div></div>
                                                            })
                    }
           </Box>
        </div>
        </div>
    )
}

export default MainDashboard;
export {solve};