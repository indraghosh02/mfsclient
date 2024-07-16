import React from 'react';

const AgentDashboard = () => {
    return (
        <div>
        <h2>
            <h2 className="text-5xl font-bold font-serif text-center mt-12">Agent</h2>
        </h2>

        <div className="lg:ml-36 lg:mr-36 lg:mt-24 m-6 sm:m-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex flex-col items-center">
                <img className="h-40 w-40 rounded-full" src="https://i.ibb.co/Fsnw8Yp/manageure.jpg" alt="Send Money" />
                <h2 className="font-bold text-2xl text-green-900 mt-4">Transaction Management</h2>
            </div>
           
            <div className="flex flex-col items-center">
                <img className="h-40 w-40 rounded-full" src="https://i.ibb.co/t8qKyLN/balancere.jpg" alt="Balance Inquiry" />
                <h2 className="font-bold text-2xl text-green-900 mt-4">Balance Inquiry</h2>
            </div>
            <div className="flex flex-col items-center">
                <img className="h-40 w-40 rounded-full" src="https://i.ibb.co/PtWszjY/transpture.jpg" alt="Transaction History" />
                <h2 className="font-bold text-2xl text-green-900 mt-4">Transaction History</h2>
            </div>
        </div>
       </div> 
    );
};

export default AgentDashboard;