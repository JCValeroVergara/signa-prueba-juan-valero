import { NavLink } from 'react-router-dom';

export const SidebarMenuItems = ({ to, icon, title, description }) => { 
    
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
            isActive
            ? 'flex justify-center items-center bg-slate-400 rounded-md p-2 transition-colors'
            : 'flex justify-center items-center hover:bg-slate-300 rounded-md p-2 transition-colors'
        }
        >
            <i className='mr-4'>{icon}</i>
        <div className="flex flex-col flex-grow my-4">
            <span className="text-indigo-700 text-lg font-semibold">{title}</span>
            <span className="text-gray-500 text-sm">{description}</span>
        </div>
        </NavLink>
    );
};