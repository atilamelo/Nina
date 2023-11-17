
import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState({
        isLogged: AsyncStorage.getItem('googleLogin') === 'true' ? true : false,
        id: '',
        email: '',
        name: '',
        photoPath: ''
    });

    useEffect(() => {
        const getUserData = async () => {
            const isLogged = await AsyncStorage.getItem('googleLogin');
            const userData = await AsyncStorage.getItem('googleData');

            setUser({
                isLogged: isLogged === 'true',
                id: id || '',
                email: email || '',
                name: name || '',
                photoPath: photoPath || ''
            });
        };

        getUserData();
    }, []);
    const updateUser = (newUser) => {
        setUser(newUser);
        AsyncStorage.setItem('googleData', newUser);
        AsyncStorage.setItem('googleLogin', JSON.stringify(true));
    };

    const logout = () => {
        setUser({
            isLogged: false,
            id: '',
            email: '',
            name: '',
            photoPath: ''
        });
        AsyncStorage.removeItem('googleLogin');
    }

    return (
        <AuthContext.Provider value={{ user, updateUser, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
