import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Navbar2 from './Navbar2';

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:5000/users', { withCredentials: true });
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users', error);
    }
  };

  const updateUserStatus = async (id, status) => {
    try {
      await axios.patch(
        `http://localhost:5000/user/${id}/status`,
        { status },
        { withCredentials: true }
      );
      fetchUsers(); // Refresh users after status update
    } catch (error) {
      console.error('Error updating user status', error);
    }
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Navbar2></Navbar2>
      <div>
        <h2 className='text-center text-3xl font-bold mt-10 font-serif '>User Management</h2>
        <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
          <div className="mb-4 flex justify-center ">
        
            <input
              type="text"
              placeholder="Search by Name"
              value={searchTerm}
              onChange={handleSearch}
              className="px-3 py-1 w-1/2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full text-xs">
              <colgroup>
                <col />
                <col />
                <col />
                <col />
                <col />
                <col className="" />
              </colgroup>
              <thead className="dark:bg-gray-300">
                <tr className="text-left">
                  <th className="p-3 text-lg font-bold">Name</th>
                  <th className="p-3 text-lg font-bold">Mobile No</th>
                  <th className="p-3 text-lg font-bold">Role</th>
                  <th className="p-3 text-lg font-bold">Status</th>
                  <th className="p-3 text-lg font-bold">Action</th>
                  <th className="p-3 text-lg font-bold">Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map((user) => (
                  <tr
                    key={user._id}
                    className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50"
                  >
                    <td className="p-3 text-lg ">
                      <p>{user.name}</p>
                    </td>
                    <td className="p-3 text-lg ">
                      <p>{user.mobile}</p>
                    </td>
                    <td className="p-3 text-lg">
                      <p className="dark:text-gray-600">{user.role}</p>
                    </td>
                    <td className="p-3 text-lg">
                      <p className="dark:text-gray-600">{user.status}</p>
                    </td>
                    <td className="p-3 text-lg ">
                      <button
                        className="btn bg-green-700 text-white font-semibold"
                        onClick={() => updateUserStatus(user._id, 'approved')}
                      >
                        Active Account
                      </button>
                    </td>
                    <td className="p-3 text-lg">
                      <button
                        className="btn bg-red-700 text-white font-semibold"
                        onClick={() => updateUserStatus(user._id, 'blocked')}
                      >
                        Block Account
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;
