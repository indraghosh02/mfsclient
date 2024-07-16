// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const Login = () => {
//     const [loginMethod, setLoginMethod] = useState('email');
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

//     const handleLoginMethodChange = (e) => {
//         setLoginMethod(e.target.value);
//     };

//     return (
//         <div className="hero bg-base-200 min-h-screen flex items-center justify-center">
//             <div className="text-center lg:text-left flex flex-col items-center">
//                 <img className='rounded-full h-16 w-16 mb-4 mt-6' src="https://i.ibb.co/zbxKtmC/image-260nw-180370182.jpg" alt="" />
//                 <h2 className='text-green-600 font-bold text-xl font-serif'>Smart Banking</h2>
//                 <h1 className="text-3xl font-bold mb-4">LogIn Now</h1>
//                 <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
//                     <form className="card-body">
//                         <div className="form-control">
//                             <label className="label cursor-pointer">
//                                 <span className="label-text font-bold">Login with Email</span>
//                                 <input
//                                     type="radio"
//                                     name="loginMethod"
//                                     value="email"
//                                     checked={loginMethod === 'email'}
//                                     onChange={handleLoginMethodChange}
//                                     className="radio radio-primary"
//                                 />
//                             </label>
//                             <label className="label cursor-pointer">
//                                 <span className="label-text font-bold">Login with Mobile No</span>
//                                 <input
//                                     type="radio"
//                                     name="loginMethod"
//                                     value="phone"
//                                     checked={loginMethod === 'phone'}
//                                     onChange={handleLoginMethodChange}
//                                     className="radio radio-primary"
//                                 />
//                             </label>
//                         </div>
//                         {loginMethod === 'email' && (
//                             <div className="form-control">
//                                 <label className="label">
//                                     <span className="label-text font-bold">Email</span>
//                                 </label>
//                                 <input type="email" placeholder="email" className="input input-bordered" required />
//                             </div>
//                         )}
//                         {loginMethod === 'phone' && (
//                             <div className="form-control">
//                                 <label className="label">
//                                     <span className="label-text font-bold">Mobile No</span>
//                                 </label>
//                                 <input type="number" placeholder="Number" className="input input-bordered" required />
//                             </div>
//                         )}
//                         <div className="form-control">
//                             <label className="label">
//                                 <span className="label-text font-bold">Pin no</span>
//                             </label>
//                             <input
//                                 type="text"
//                                 value={pin}
//                                 onChange={handlePinChange}
//                                 placeholder="PIN"
//                                 className="input input-bordered"
//                                 required
//                             />
//                             {pinError && <span className="text-red-600">{pinError}</span>}
//                             <label className="label">
//                                 <span className="label-text-alt link link-hover text-lg">
//                                     New Here? Please <Link to="/" className="text-blue-800 font-bold">Register</Link>
//                                 </span>
//                             </label>
//                         </div>
//                         <div className="form-control mt-6">
//                             <button className="btn btn-primary bg-emerald-950 text-white" type="submit">Log In</button>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Login;


import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const [loginMethod, setLoginMethod] = useState('email');
    const [pin, setPin] = useState('');
    const [pinError, setPinError] = useState('');
    const [emailOrMobile, setEmailOrMobile] = useState('');
    const [loginError, setLoginError] = useState('');

    const handlePinChange = (e) => {
        const value = e.target.value;
        if (value.length <= 5) {
            setPin(value);
            setPinError('');
        } else {
            setPinError('PIN must not be more than 5 digits.');
        }
    };

    const handleLoginMethodChange = (e) => {
        setLoginMethod(e.target.value);
    };

    const handleLogin = (e) => {
        e.preventDefault();
        
        const loginData = loginMethod === 'email' 
            ? { email: emailOrMobile, pin } 
            : { mobile: emailOrMobile, pin };

        fetch('http://localhost:5000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(loginData),
        })
        .then(res => res.json())
        .then(data => {
            if (data.error) {
                setLoginError(data.error);
            } else {
                alert('Successful login');
                setLoginError('');
            }
        });
    };

    return (
        <div className="hero bg-base-200 min-h-screen flex items-center justify-center">
            <div className="text-center lg:text-left flex flex-col items-center">
                <img className='rounded-full h-16 w-16 mb-4 mt-6' src="https://i.ibb.co/zbxKtmC/image-260nw-180370182.jpg" alt="" />
                <h2 className='text-green-600 font-bold text-xl font-serif'>Smart Banking</h2>
                <h1 className="text-3xl font-bold mb-4">LogIn Now</h1>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form className="card-body" onSubmit={handleLogin}>
                        <div className="form-control">
                            <label className="label cursor-pointer">
                                <span className="label-text font-bold">Login with Email</span>
                                <input
                                    type="radio"
                                    name="loginMethod"
                                    value="email"
                                    checked={loginMethod === 'email'}
                                    onChange={handleLoginMethodChange}
                                    className="radio radio-primary"
                                />
                            </label>
                            <label className="label cursor-pointer">
                                <span className="label-text font-bold">Login with Mobile No</span>
                                <input
                                    type="radio"
                                    name="loginMethod"
                                    value="phone"
                                    checked={loginMethod === 'phone'}
                                    onChange={handleLoginMethodChange}
                                    className="radio radio-primary"
                                />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">{loginMethod === 'email' ? 'Email' : 'Mobile No'}</span>
                            </label>
                            <input
                                type={loginMethod === 'email' ? 'email' : 'number'}
                                placeholder={loginMethod === 'email' ? 'email' : 'Number'}
                                value={emailOrMobile}
                                onChange={(e) => setEmailOrMobile(e.target.value)}
                                className="input input-bordered"
                                required
                            />
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
                                className="input input-bordered"
                                required
                            />
                            {pinError && <span className="text-red-600">{pinError}</span>}
                            <label className="label">
                                <span className="label-text-alt link link-hover text-lg">
                                    New Here? Please <Link to="/" className="text-blue-800 font-bold">Register</Link>
                                </span>
                            </label>
                            {loginError && <span className="text-red-600">{loginError}</span>}
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary bg-emerald-950 text-white" type="submit">Log In</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
