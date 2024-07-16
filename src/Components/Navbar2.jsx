import axios from 'axios';

import { useNavigate } from 'react-router-dom';

const Navbar2 = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        axios.post('http://localhost:5000/logout', null, { withCredentials: true })
            .then(res => {
                console.log(res.data); // Optional: log the response
                localStorage.removeItem('user');
                navigate('/login'); // Redirect to login page after successful logout
            })
            .catch(error => {
                console.error('Logout error:', error);
            });
    };
    const user =  JSON.parse(localStorage.getItem('userData'))
    console.log('user on nav',user);
    return (
        <div className="navbar bg-green-950">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
             
            </div>
           
          </div>
          <img className='rounded-full h-16 w-16 ' src="https://i.ibb.co/zbxKtmC/image-260nw-180370182.jpg" alt="" />
          <h2 className="font-bold text-xl text-white ml-4 font-serif">Smart Banking</h2>
        </div>
      
        <div className="navbar-end">
            <div className="flex gap-4">
         
            <button onClick={handleLogout} className="btn text-green-950">Log Out</button>
            </div>
        
        </div>
      </div>
    );
};

export default Navbar2;