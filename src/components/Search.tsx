import React, {Fragment} from "react";

interface inputField{
    htmlFor: string;
    inputType: string;
    className: string;
}
type search = [string[],string[],string[]]
const completedItems:inputField[] =[];

// These are the items that will be searched for, in the search container
const searchItem: search = [
    ['Organization','Username', 'Email', 'Date', 'Phone Number','Status'],
    ['text','text','text','date','text','text'],
    ['','','','','','']]

// loop to create objects from a list of arrays 
    for(let i = 0; i < searchItem[1].length ; ++i){
        completedItems.push(
            {htmlFor:searchItem[0][i], 
            inputType:searchItem[1][i], 
            className:searchItem[2][i]})
    }


// Function to search for users information that has been entered in the form
const Search:React.FC = () => {

    return (
        <div className="search-control">
            <div className="search-filter">
                <form>
                    {completedItems.map((item)=> { return(<Fragment>
                        <label htmlFor={item.htmlFor} className="label">{item.htmlFor}</label>
                        <input type={item.inputType} placeholder={item.htmlFor} id={item.htmlFor} 
                            className="search input-style" />
                        </Fragment>)})}
                </form>
                    <div className="buttons">
                        <button className="reset" type="submit">Reset</button>
                        <button className="filter" type="submit">Filter</button>
                    </div>
            </div>
        </div>
    )
}

export default Search;