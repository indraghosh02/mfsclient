import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
    return (
        <div className="">
        <h2>
            <h2 className="text-5xl font-bold font-serif text-center mt-10">Admin</h2>
        </h2>

        <div className="lg:ml-36 lg:mr-36 lg:mt-24 m-6 sm:m-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            
          
            <Link to="/userManagement"   className="flex flex-col items-center">
                <img className="h-52 w-52 rounded-full" src="https://i.ibb.co/mT0ZWGd/userpture.jpg" alt="Balance Inquiry" />
                <h2 className="font-bold text-3xl text-green-900 mt-4">User Management</h2>
            </Link>
            <div className="flex flex-col items-center">
                <img className="h-52 w-52 rounded-full" src="https://i.ibb.co/Jdv3sRd/moniture.jpg" alt="Transaction History" />
                <h2 className="font-bold text-3xl text-green-900 mt-4">Transaction History</h2>
            </div>
        </div>
       </div> 
    );
};

export default AdminDashboard;