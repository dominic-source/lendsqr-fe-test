import React, {useEffect, useState} from 'react';
import { Typography, Grid, Link } from '@mui/material';
import Details from './Details';
import NextPage from './nextpage';
import Resize from '../app/resize';

interface Props {
    handleclick: (e: React.FormEvent) => void;
}

const Table:React.FC <Props>= ({handleclick}) => {

    const [state, setState] = useState([]);
    const [start, setStart] = useState<number>(1);
    const [itemNumber, setItemNumber] = useState<number>(16);
    const [details, setDetails] = useState({id:0, state: false});
    const [count, setCount] = useState<number>(100);
    const [listOfNumber, setListOfNumber] = useState<number[]>([]);
    const [smallVisible, setSmallVisible] = useState(true)

    const handleNumberClick = (e: React.ChangeEvent<HTMLSelectElement> )  => {
        let begin = e.currentTarget.value;
        setStart(Number(begin)-16)
    }

    const handleclickNext = (name:string) => {
        return () => {
            name === 'previous'? start >= 1 && setStart(start-1):setStart(start+1) 
            name === 'previous'? 
                                itemNumber >= 16 && setItemNumber(itemNumber-1):
                                setItemNumber(itemNumber+1) 
        }
    }

    const url:string = 'https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users';
    
    // Fetch data from the url string
    const data = fetch(url);

    // Opening Database
    const request = window.indexedDB.open("Lendsqr_webapp_Database", 3);

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
            const keyRangeValue = IDBKeyRange.bound(1, count);

            // Get all the value within the itemNumber range
            const getRequest = transaction.getAll(keyRangeValue);
            getRequest.transaction.oncomplete = () => {
                let results = getRequest.result;
                    setState(results);
            }
            const arrayOfNumber:number[] = [] 
            // Push numbers to numberList
            for(let number:number= 1; number < count+1; ++number){
                arrayOfNumber.push(number)
            }
            setListOfNumber(arrayOfNumber)

        }
        Resize(() => {
            setSmallVisible(!window.matchMedia('(max-width:627px)').matches)
        }) 

},[]);

interface nameLendr {
    name: string,
    space: number,
}

 let namesArray: nameLendr[] = [];
 

//   list of items for the table
const listOfFilterItems:[string[],number[]] = [['ORGANIZATION','USERNAME','EMAIL','PHONE NUMBER', 'DATE JOINED', 'STATUS'],
    [1.75, 1.75, 2.75, 2, 2.5, 1]]
    
    
for(let i = 0; i < listOfFilterItems[1].length ; ++i){
    namesArray.push({name:listOfFilterItems[0][i], space:listOfFilterItems[1][i]})
}
  

    return (
        <div>
            <div className="table">
                <Grid container rowSpacing={1}>
                    {namesArray.map((item) => {return (<Grid item xs={10} sm={item.space} md={item.space} className='table-head'>
                        <div className='table-item' onClick={handleclick}>
                            {item.name}
                            {smallVisible && <img src='/filter-results-button.svg' alt='filter' className='table-icon'/>}
                        </div>  
                    </Grid>)})}
                    
                    <Grid item xs={12} sm={1.5} md={0.25} className='table-head'></Grid>
                </Grid>
                    {state.map((item:{
                            id:number,
                            orgName: string,
                            userName: string,
                            email: string,
                            phoneNumber: number,
                            createdAt: string,
                            lastActiveDate: string,
                        },index)=>
                            
                            index >= start && index <= start+15 && 
                                <Grid container key={item.id} className='table-info' mt={2} mb={2}>                        
                                    <Grid item xs={12} sm={1.75} md={1.75}>
                                        <Link 
                                            href={`/user_details_page/${item.id}`} 
                                            underline='none'
                                            color='inherit'>
                                                {item.orgName}
                                        </Link>
                                    </Grid>
                                    <Grid item xs={12} sm={1.75} md={1.75}>
                                        <Link 
                                            href={`/user_details_page/${item.id}`} 
                                            underline='none'
                                            color='inherit'>
                                                {item.userName}
                                        </Link>
                                    </Grid>
                                    <Grid item xs={12} sm={2.75} md={2.75}>
                                        <Link 
                                            href={`/user_details_page/${item.id}`} 
                                            underline='none'
                                            color='inherit'
                                            sx={{fontSize:'9px'}}>
                                                {item.email}
                                        </Link>
                                    </Grid>
                                    <Grid item xs={12} sm={2} md={2}>{item.phoneNumber}</Grid>
                                    <Grid item xs={12} sm={2.5} md={2.5}>{new Date (item.createdAt).toUTCString()}</Grid>
                                    {new Date (item.lastActiveDate).getUTCMonth() <= new Date().getUTCMonth() ? 
                                    <Grid item xs={12} sm={1} md={1}><div className='active'>Active</div></Grid> : 
                                    <Grid item xs={10} sm={1} md={1}><div className='inactive'>Inactive</div></Grid>}
                                    <Grid item xs={2} sm={0.25} md={0.25} key={item.id} 
                                        onClick = {()=> setDetails({id:Number(item.id), state: !details.state})} >
                                        &nbsp;&nbsp;
                                        {smallVisible && <img src='/Vector.svg' alt='click me' className='dots'/>} &nbsp;&nbsp; 
                                       { Number(item.id) === details.id && 
                                       <Details id= {item.id} visibility={details.state} />}
                                    </Grid>
                                </Grid> 
                            
                        )
                    }
                        
            </div>       
            
            <Grid container
                  sx={{userSelect:'none'}}
                  spacing={1}
                    >
                <Grid item xs={10} sm={5} md={5} sx={{display:'flex'}}>
                    <Typography pt={1}>Showing</Typography>
                    <form>
                        <select onChange={handleNumberClick} className='select'>
                            {listOfNumber.map((item) => {

                                return <option 
                                            selected={item===start+16?true:false}
                                            value={item}>
                                                {item}
                                        </option>})}
                        </select>
                    </form>
                    <Typography pt={1}>out of {count}</Typography>
                </Grid>
                <Grid item xs={10} sm={5} md={5}>
                    <NextPage 
                        listOfNumber={listOfNumber} 
                        start={start}
                        handleClickNext={handleclickNext} 
                    />
                </Grid>
            </Grid>
        </div>
    )
}

export default Table;