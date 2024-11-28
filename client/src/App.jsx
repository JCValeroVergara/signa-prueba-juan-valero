import { RouterProvider } from 'react-router-dom';
import { router } from './router/router';


export function App() {

    return (
        <>
            <div className='animate-fade text-3xl font-bold'>
                <RouterProvider router={router} />
            </div>
        </>
    )
}

