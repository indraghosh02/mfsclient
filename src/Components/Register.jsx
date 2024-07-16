import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const Register = () => {
  const [pin, setPin] = useState('');
  const [pinError, setPinError] = useState('');
  const [role, setRole] = useState('');
  const [registrationError, setRegistrationError] = useState('');

  const handlePinChange = (e) => {
    const value = e.target.value;
    if (value.length <= 5) {
      setPin(value);
      setPinError('');
    } else {
      setPinError('PIN must not be more than 5 digits.');
    }
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleRegistration = (event) => {
    event.preventDefault();
    const form = event.target;

    const name = form.name.value;
    const email = form.email.value;
    const mobile = form.mobile.value;
    const pin = form.pin.value;
    const role = form.role.value;

    const newRegister = { name, email, mobile, pin, role };
    console.log(newRegister);

    fetch('http://localhost:5000/user', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(newRegister),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          setRegistrationError(data.error);
        } else {
          console.log(data);
          setRegistrationError('');
        }
      });
  };

  return (
    
   <div>
    <Navbar></Navbar>
     <div className="hero bg-base-200 min-h-screen flex items-center justify-center">
      <div className="text-center lg:text-left flex flex-col items-center">
        <img className="rounded-full h-16 w-16 mb-4 mt-6" src="https://i.ibb.co/zbxKtmC/image-260nw-180370182.jpg" alt="" />
       
        <h1 className="text-3xl font-bold text-green-700">Register Now</h1>
        <div className="card bg-base-100 w-full max-w-sm mt-8 shadow-2xl">
          <form onSubmit={handleRegistration} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Name</span>
              </label>
              <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Email</span>
              </label>
              <input type="email" name="email" placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Mobile No</span>
              </label>
              <input type="number" name="mobile" placeholder="Number" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Role</span>
              </label>
              <select name="role" value={role} onChange={handleRoleChange} className="select select-bordered" required>
                <option value="" disabled>Select Role</option>
                <option value="Agent">Agent</option>
                <option value="User">User</option>
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Pin no</span>
              </label>
              <input
                type="text"
                value={pin}
                onChange={handlePinChange}
                placeholder="PIN"
                name="pin"
                className="input input-bordered"
                required
              />
              {pinError && <span className="text-red-600">{pinError}</span>}
              <label className="label">
                <span className="label-text-alt link link-hover text-lg">
                  Already Registered? Please <Link to="/login" className="text-green-950 font-bold">Log in</Link>
                </span>
              </label>
              {registrationError && <span className="text-red-600">{registrationError}</span>}
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary bg-emerald-950 text-white" type="submit">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
   </div>
  );
};

export default Register;







// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const Register = () => {

//     const [pin, setPin] = useState('');
//     const [pinError, setPinError] = useState('');

//     const handlePinChange = (e) => {
//         const value = e.target.value;
//         if (value.length <= 5) {
//             setPin(value);
//             setPinError('');
//         } else {
//             setPinError('PIN must not be more than 5 digits.');
//         }
       
//     };
//     const handleRegistration = event => {
//         event.preventDefault();
//         const form = event.target;

//         const name = form.name.value;
//         const email = form.email.value;
//         const mobile = form.mobile.value;
//         const pin = form.pin.value;

//         const newRegister = { name, email, mobile, pin}
//         console.log(newRegister);

//         fetch('http://localhost:5000/user',{
//             method: 'POST',
//             headers: {
//                 'content-type': 'application/json'
//             },
//             body: JSON.stringify(newRegister)
//         })
//         .then(res=> res.json())
//         .then(data =>{
//             console.log(data);
//         })

//     }

//     return (
//         <div className="hero bg-base-200 min-h-screen flex items-center justify-center">
//             <div className="text-center lg:text-left flex flex-col items-center">
//                 <img className='rounded-full h-16 w-16 mb-4 mt-6' src="https://i.ibb.co/zbxKtmC/image-260nw-180370182.jpg" alt="" />
//                 <h2 className='text-green-600 font-bold text-xl font-serif'>Smart Banking</h2>
//                 <h1 className="text-3xl font-bold">Register Now</h1>
//                 <div className="card bg-base-100 w-full max-w-sm mt-8 shadow-2xl">
//                     <form onSubmit={handleRegistration} className="card-body">
//                         <div className="form-control">
//                             <label className="label">
//                                 <span className="label-text font-bold">Name</span>
//                             </label>
//                             <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
//                         </div>
//                         <div className="form-control">
//                             <label className="label">
//                                 <span className="label-text font-bold">Email</span>
//                             </label>
//                             <input type="email" name="email" placeholder="email" className="input input-bordered" required />
//                         </div>
//                         <div className="form-control">
//                             <label className="label">
//                                 <span className="label-text font-bold">Mobile No</span>
//                             </label>
//                             <input type="number" name="mobile" placeholder="Number" className="input input-bordered" required />
//                         </div>
//                         <div className="form-control">
//                             <label className="label">
//                                 <span className="label-text font-bold">Pin no</span>
//                             </label>
//                             <input
//                                 type="text"
//                                 value={pin}
//                                 onChange={handlePinChange}
//                                 placeholder="PIN"
//                                 name="pin"
//                                 className="input input-bordered"
//                                 required
//                             />
//                             {pinError && <span className="text-red-600">{pinError}</span>}
//                             <label className="label">
//                                 <span className="label-text-alt link link-hover text-lg">
//                                     Already Registered? Please <Link to="/login" className="text-blue-800 font-bold">Log in</Link>
//                                 </span>
//                             </label>
//                         </div>
//                         <div className="form-control mt-6">
//                             <button className="btn btn-primary bg-emerald-950 text-white" type="submit">Register</button>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Register;
