import React, {useEffect, useState} from 'react';
// import { Box, Typography } from '@mui/material';


const Table:React.FC = (props) => {

    const [state, setState] = useState([]);
    const [itemNumber, getNumber] = useState(0);
    const url:string = 'https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users';

    
    // Opening Database
    const request = indexedDB.open("Lendsqr_webapp_Database", 3);

    // Check for errors in the database creation
    request.onerror = (event: any) => {
        console.error(`Database error: ${event.target.result}`);
    };
    
    useEffect(()=>{
        
    // Fetch data from the url string
    const data = fetch(url);
    
    request.onupgradeneeded = (event:Event | any) => {
        const db = event.target.result;

        // Create an object store named customers
        const objectStore = db.createObjectStore("customers", { autoIncrement: true});

        // Create a unique index to retrieve customer(s) information
        objectStore.createIndex("id", "id", { unique: true });

        // Manipulate the data into json file
        data.then(res =>
          res.json()).then(info => {
            
            // create a transaction for customers
              const customerObjectStore = db.transaction('customers', "readwrite").objectStore("customers");
              info.forEach((customer:any) => {
                // add customers to the database
                  customerObjectStore.add(customer);
                });
            });
    };

   
    request.onsuccess = (event:any) => {
        const db = event.target.result;

        // Create a transaction for to retrieve customer data
        const transaction = db.transaction("customers").objectStore("customers");

        // A key range value to get customer information through the id
        const keyRangeValue = IDBKeyRange.bound(itemNumber+1, itemNumber+11);

        // Get all the value within the itemNumber range
        const getRequest = transaction.getAll(keyRangeValue);
        getRequest.transaction.oncomplete = () => {
            let results = getRequest.result;
                setState(results);
        }
    }
},[]);



//   list of items for the table
    const listOfFilterItems:string[] = ['ORGANIZATION','USERNAME','EMAIL','PHONE NUMBER', 'DATE JOINED', 'STATUS']
    
    return (
        <div>
            <table className='table'>
                <thead>
                    <tr>
                        {listOfFilterItems.map((item, index) => <th className='table-head' key={index}>
                            <div className='table-item'>
                                {item} 
                                <img src='/filter-results-button.svg' alt='filter' className='table-icon'/>
                            </div>
                            
                            </th>)}
                        
                    </tr>
                </thead>
                    
                <tbody>
                    
                    {state.map((item:any)=>{
                        return ( <tr key={item.id} className='table-info'>                        
                            <td>{item.orgName}</td>
                            <td>{item.userName}</td>
                            <td>{item.email}</td>
                            <td>{item.phoneNumber}</td>
                            <td>{new Date (item.createdAt).toUTCString()}</td>
                            {new Date (item.lastActiveDate).getUTCMonth() <= new Date().getUTCMonth() ? 
                            <td><div className='active'>Active</div></td> : 
                            <td><div className='inactive'>Inactive</div></td>}
                            <td key={item.id} >&nbsp;&nbsp;<img src='/Vector.svg' alt='click me' className='dots'/>&nbsp;&nbsp;</td>
                        </tr>)
                    })
                    }
                </tbody>   
            </table>
        </div>
    )
}

export default Table;