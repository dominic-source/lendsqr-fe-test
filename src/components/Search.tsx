import React from "react";

const Search:React.FC = () => {
        // const searchItem:[] = ['Organization','Username', 'Email', 'Date', 'Phone Number',]

    return (
        <div className="search-control">
            <div className="search-filter">
                    <label htmlFor="organization" className="label">Organization</label>
                    <input type="text" placeholder="Organization" id="Organization" className="search input-style" />

                    <label htmlFor="user" className="label">Username</label>
                    <input type="text" placeholder="User" id="user" className="search input-style" />

                    <label htmlFor="email" className="label">Email</label>
                    <input type="text" placeholder="Email" id="email" className="search input-style" />

                    <label htmlFor="date" className="label">Date</label>
                    <input type="date" placeholder="Date" id="date" className="search input-style" />

                    <label htmlFor="phone-number" className="label">Phone Number</label>
                    <input type="text" placeholder="Phone Number" id="phone-number" className="search input-style" />

                    <label htmlFor="status" className="label">Status</label>
                    <input type="text" placeholder="Status" id="status" className="search input-style" />

                    <div className="buttons">
                        <button className="reset" type="submit">Reset</button>
                        <button className="filter" type="submit">Filter</button>
                    </div>
            </div>
        </div>
    )
}

export default Search;