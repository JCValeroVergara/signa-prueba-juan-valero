import { useState } from 'react';
import { RegisterContext } from './Register.Context';

export const RegisterProvider = ({ children }) => {
    const [newBrandData, setNewBrandData] = useState({
        id: '',
        name: '',
        holder: '',
        state: '',
        active: '',
    });

    const value = {
        newBrandData,
        setNewBrandData,
    };

    console.log('newBrandData', newBrandData);

    return (
        <RegisterContext.Provider value={value}>
            {children}
        </RegisterContext.Provider>
    );
}