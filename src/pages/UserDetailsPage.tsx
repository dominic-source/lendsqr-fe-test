import React from 'react'
import Users from '../components/users';
import MainDashboard from '../components/MainDashboard';
import Navigation from '../components/Navigation';
import UserDetails from '../components/UserDetails'

const UserDetailsPage:React.FC = () => {
    return (
        <div>
            <Navigation />
            <MainDashboard />
            <UserDetails />
        </div>
    )
}


export default UserDetailsPage;