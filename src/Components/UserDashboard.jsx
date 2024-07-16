const UserDashboard = () => {
    return (
        
       <div>
        <h2>
            <h2 className="text-5xl font-bold font-serif text-center mt-10">User</h2>
        </h2>

        <div className="lg:ml-36 lg:mr-36 lg:mt-10 m-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex flex-col items-center">
                <img className="h-40 w-40 rounded-full" src="https://i.ibb.co/nn7GQwP/Csendure.jpg" alt="Send Money" />
                <h2 className="font-bold text-2xl text-green-900 mt-4">Send Money</h2>
            </div>
            <div className="flex flex-col items-center">
                <img className="h-40 w-40 rounded-full" src="https://i.ibb.co/wCh40sm/Na-Nov-15.jpg" alt="Cash-Out" />
                <h2 className="font-bold text-2xl text-green-900 mt-4">Cash-Out</h2>
            </div>
            <div className="flex flex-col items-center">
                <img className="h-40 w-40 rounded-full" src="https://i.ibb.co/1JRcR1k/ture.jpg" alt="Cash-in" />
                <h2 className="font-bold text-2xl text-green-900 mt-4">Cash-in</h2>
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

export default UserDashboard;
