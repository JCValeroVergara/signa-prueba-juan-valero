import { RouterProvider } from 'react-router-dom';
import { router } from './router/router';
import { useEffect } from 'react';
import { brands } from './data';


export function App() {
    useEffect(() => {
        const storedBrands = localStorage.getItem('brands');
        if (!storedBrands) {
            localStorage.setItem('brands', JSON.stringify(brands));
        }
    }, []);

    return (
        <>
            <div className='animate-fade text-3xl font-bold'>
                <RouterProvider router={router} />
            </div>
        </>
    )
}

