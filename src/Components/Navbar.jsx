import { Link } from "react-router-dom";


const Navbar = () => {
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
           <Link to="/"> <a className="btn text-green-950">Register</a></Link> 
           <Link to="/login"> <a className="btn text-green-950">Log in</a></Link>
            </div>
        
        </div>
      </div>
    );
};

export default Navbar;