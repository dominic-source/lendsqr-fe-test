import React, {useEffect, useState} from 'react';
import { Stack, Typography, Grid, Container, Box } from '@mui/material';
import Details from './Details';
import { solve } from './MainDashboard';
interface Props {
    handleclick: (e: React.FormEvent) => void;
}

const Table:React.FC <Props>= ({handleclick}) => {

    const [state, setState] = useState([]);
    const [itemNumber, setItemNumber] = useState<number>(10);
    const [details, setDetails] = useState({id:0, state: false});
    const [count, setCount] = useState<number>(100);
    const [listOfNumber, setListOfNumber] = useState<number[]>([]);

    const url:string = 'https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users';
    let numberList:number[] = [];

    // Fetch data from the url string
    const data = fetch(url);

    
    // Opening Database
    const request = indexedDB.open("Lendsqr_webapp_Database", 3);

    // Check for errors in the database creation
    request.onerror = (event: any) => {
        console.error(`Database error: ${event.target.result}`);
    };
    
    request.onupgradeneeded = (event:Event | any) => {
        const db = event.target.result;

        // Create an object store named customers
        const objectStore = db.createObjectStore("customers", { autoIncrement: true});

        // Create a unique index to retrieve customer(s) information
        objectStore.createIndex("id", "id", { unique: true });


        // Manipulate the data into json file
        data.then(res =>
          res.json()).then(info => {

            setCount(info.length);
            
            // create a transaction for customers
              const customerObjectStore = db.transaction(["customers"], "readwrite").objectStore("customers");
              info.forEach((customer:any) => {
                // add customers to the database
                  customerObjectStore.add(customer);
                });
            });
    };

    useEffect(()=>{
        request.onsuccess = (event: any) => {
            const db = event.target.result;

            // Create a transaction for to retrieve customer data
            const transaction = db.transaction("customers").objectStore("customers");

            // A key range value to get customer information through the id
            const keyRangeValue = IDBKeyRange.bound(1, itemNumber);

            // Get all the value within the itemNumber range
            const getRequest = transaction.getAll(keyRangeValue);
            getRequest.transaction.oncomplete = () => {
                let results = getRequest.result;
                    setState(results);
            }
        }
        // Push numbers to numberList
        for(let number:number= 1; number < count+1; number++){
            numberList.push(number);
        }
        setListOfNumber([...numberList]);
},[]);

interface nameLendr {
    name: string,
    space: number,
   
}

 let namesArray: nameLendr[] = [];
 

//   list of items for the table
const listOfFilterItems:[string[],number[]] = [['ORGANIZATION','USERNAME','EMAIL','PHONE NUMBER', 'DATE JOINED', 'STATUS'],
    [1.5, 1.75, 3, 2, 2.5, 1]]
    
    
for(let i = 0; i < listOfFilterItems[1].length ; ++i){
    namesArray.push({name:listOfFilterItems[0][i], space:listOfFilterItems[1][i]})
}
  

    return (
        <div>
            <div className="table">
                <Grid container >
                    {namesArray.map((item) => {return (<Grid xs={10} sm={item.space} md={item.space} className='table-head'>
                        <div className='table-item' onClick={handleclick}>
                            {item.name}
                            <img src='/filter-results-button.svg' alt='filter' className='table-icon'/>
                        </div>  
                    </Grid>)})}
                    
                    <Grid xs={10} sm={1.5} md={0.25} className='table-head'></Grid>
                </Grid>
                        {state.map((item:{
                            id:number,
                            orgName: string,
                            userName: string,
                            email: string,
                            phoneNumber: number,
                            createdAt: string,
                            lastActiveDate: string,
                        })=>{
                            return ( <Grid container key={item.id} className='table-info' mt={2} mb={2}>                        
                                <Grid xs={10} sm={1.5} md={1.5}>{item.orgName}</Grid>
                                <Grid xs={10} sm={1.75} md={1.75}>{item.userName}</Grid>
                                <Grid xs={10} sm={3} md={3}><Typography noWrap sx={{fontSize:'11px', letterSpacing:'0.1em'}}>{item.email}</Typography></Grid>
                                <Grid xs={10} sm={2} md={2}>{item.phoneNumber}</Grid>
                                <Grid xs={10} sm={2.5} md={2.5}>{new Date (item.createdAt).toUTCString()}</Grid>
                                {new Date (item.lastActiveDate).getUTCMonth() <= new Date().getUTCMonth() ? 
                                <Grid xs={10} sm={1} md={1}><div className='active'>Active</div></Grid> : 
                                <Grid xs={9} sm={1} md={1}><div className='inactive'>Inactive</div></Grid>}
                                <Grid xs={1} sm={0.25} md={0.25} key={item.id} 
                                    onClick = {()=> setDetails({id:Number(item.id), state: !details.state})} >
                                    &nbsp;&nbsp;
                                    <img src='/Vector.svg' alt='click me' className='dots'/>&nbsp;&nbsp;
                                   { Number(item.id) === details.id && 
                                   <Details id= {item.id} visibility={details.state} />}
                                </Grid>
                            </Grid>
                            )
                        })
                        }
                        
            </div>       
            
            <Stack direction='row'
                    spacing={3}
                    justifyContent='flex-start'
                    mb={4}
                    pl={1}
                    >
                <Typography>Showing</Typography>
                <select>
                    {listOfNumber.map((item) => {
                        
                        let select:boolean = false;
                        if(item===count){
                            select = true;
                        }
                        return <option selected={select}>{item}</option>})}
                </select>
                <Typography>out of {count}</Typography>
            </Stack>
        </div>
    )
}

export default Table;