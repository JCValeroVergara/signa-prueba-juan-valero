import { Outlet } from 'react-router-dom';
import { SidebarMenuItems } from '../components';
import { menuRoutes } from '../router/router';

export const DashBoardLayout = () => {
    return (
        <main className='flex flex-row mt-7'>
            <nav className='hidden sm:flex flex-col ml-5 w-[20vw] min-h-[calc(100vh-3.0rem)] bg-slate-200 p-5 rounded-2xl'>
                <div >
                    <h1>Dashboard</h1>
                </div>
                <div>
                    {menuRoutes.map((options) => (
                        <SidebarMenuItems key={options.to} {...options} />
                    ))}
                </div>
            </nav>
            <section className='mx-2 flex flex-col w-full h-[calc(100vh-3.0rem)] bg-slate-200 p-5 rounded-2xl'>
                <div className='flex flex-row h-full'>
                    <div className='flex flex-col flex-auto h-full p-1'>
                        <Outlet />
                    </div>
                </div>
            </section>
        </main>
    );
};
