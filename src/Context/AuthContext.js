import { createContext, useState, useEffect } from 'react';
import axiosInstance from '../utils/axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [checkUser, setCheckUser] = useState(false);

    const fetchUserData = async () => {
        try {
            setCheckUser(true)
            const response = await axiosInstance.get('/api/users/user');
            setUser(response.data.data);
        } catch(err) {
          
            setUser(null);
        }
        finally{
            setCheckUser(false)
        }
    };



    const logout = async () => {
        await axiosInstance.post('/api/auth/logout');
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user,setUser,checkUser,fetchUserData, logout }}>
            {children}
        </AuthContext.Provider>
    );
};