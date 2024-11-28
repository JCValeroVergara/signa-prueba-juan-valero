import { NavLink } from 'react-router-dom';

export const MobileNavbar = ({ menuRoutes }) => {
    return (
        <nav className="flex sm:hidden fixed bottom-0 left-0 w-full bg-slate-200 p-2 shadow-md z-50">
            <div className="flex justify-around w-full">
                {menuRoutes.map(({ to, icon, title }) => (
                    <NavLink
                        key={to}
                        to={to}
                        className={({ isActive }) =>
                            `flex flex-col items-center text-sm ${
                                isActive ? 'text-indigo-700' : 'text-gray-600 hover:text-indigo-500'
                            }`
                        }
                    >
                        <i className="mb-1">{icon}</i>
                        <span>{title}</span>
                    </NavLink>
                ))}
            </div>
        </nav>
    );
};
