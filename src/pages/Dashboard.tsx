import { Box } from '@mui/material';
import React from 'react';
import MainDashboard from '../components/MainDashboard';
import Navigation from '../components/Navigation';
import Users from '../components/users';

const Dashboard:React.FC = () => {
    return (
        <div>
            <Navigation />
            <MainDashboard />
            <Users />          
        </div>
    )
}

export default Dashboard