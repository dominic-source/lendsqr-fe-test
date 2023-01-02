import React, {useEffect, useState} from 'react';
import { Box } from '@mui/material';
import Resize from '../app/resize';



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

// Defines the type for each of the items
let customersCompletedItem: dashboardItem[] = []; 
let businessesCompletedItem: dashboardItem[] = [];
let settingsCompletedItem: dashboardItem[] = [];

// A function that forms the arrays into an object and pushes it into the array with type dashboardItem[]
function solve(items:generalType, completedItems:dashboardItem[]) {

    for(let i = 0; i < items[1].length ; ++i){
        completedItems.push({item:items[0][i], icon:items[1][i],id:i})
    }
}

// This calls the solve function with the arguments described therein
solve(customers, customersCompletedItem)
solve(businesses, businessesCompletedItem)
solve(settings, settingsCompletedItem)

// This function component returns a component design for the left side dashboard
const MainDashboard:React.FC = () => {
    
    const [state, setState] = useState(true);
    
    // This will set the detect the width of the screen and set the state of the app to fit the screen
    useEffect(() =>{
        Resize(() => {
            setState(!window.matchMedia('(max-width:627px)').matches)
        })
      },[]);


    return (
        <div className='contains-all'>
            <div className='top-dashboard-item'>
                <img src='/svg/briefcase 1.svg' alt='' className='image-style' /> 
                {state && <div className='top-dashboard-name'>Switch Organization</div>} 
            </div>


           <div className='top-dashboard-item spacing'>
                <img src='/svg/home 1.svg' alt='' className='image-style' /> 
                {state && <div className='top-dashboard-name top-dashboard-name-next'>Dashboard</div> }
            </div>

        
            <div className="container">
               <Box sx={{width:state?'283px':'10px'}}> 
                    {state &&<div className='customers'>Customers</div>}
                        {customersCompletedItem.map((item,index) => {
                                return <div key={index} className='item' tabIndex= {0} > <div className='list-of-items'>
                                    <img src={`/svg/${item.icon}.svg`} alt='' className='image-style' /> 
                                    {state &&<div className='items-name'>{item.item}</div>}</div></div>
                                                                })
                        }
               </Box>

               <Box sx={{width:state?'283px':'10px'}}>
                    {state &&<div className='customers'>Business</div>}
                    {businessesCompletedItem.map((item,index) => {
                                return <div key={index} className='item' tabIndex= {0}> <div className='list-of-items'>
                                    <img src={`/svg/${item.icon}.svg`} alt='' className='image-style' /> 
                                    {state &&<div className='items-name'>{item.item}</div>}</div></div>
                                                                })
                        }
               </Box>
               <Box sx={{width:state?'283px':'10px'}}>
                {state &&<div className='customers'>Setting</div>}
                    {settingsCompletedItem.map((item,index) => {
                                return <div key={index} className='item' tabIndex= {0}> <div className='list-of-items'>
                                    <img src={`/svg/${item.icon}.svg`} alt='' className='image-style' /> 
                                    {state &&<div className='items-name'>{item.item}</div>}</div></div>
                                                                })
                        }
               </Box>
            </div>
        </div>
    )
}

export default MainDashboard;

// Solve is exported to be used in other components
export {solve};