import { useState, useEffect } from "react";
import axios from "axios";
import useAxiosSecure from "../../src/hooks/useAxiosSecure";

const useRole = () => {
  const axiosSecure = useAxiosSecure();
  const [user, setUser] = useState({ email: '', mobile: '' });
  const [role, setRole] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
    }

    // Fetch user role when user email or mobile changes
    const fetchUserRole = async () => {
      try {
        const response = await axiosSecure.get('/user/role', {
          params: { email: storedUser?.email, mobile: storedUser?.mobile }
        });
        setRole(response.data.role);
      } catch (error) {
        console.error('Error fetching user role:', error);
      } finally {
        setIsLoading(false);
      }
    };

    if (storedUser && (storedUser.email || storedUser.mobile)) {
      fetchUserRole();
    } else {
      setIsLoading(false);
    }
  }, [axiosSecure, setUser]);

  return [role, isLoading];
};

export default useRole;
