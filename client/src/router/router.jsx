import { createBrowserRouter, Navigate } from 'react-router-dom';
import { FaList, FaPlus, FaTable } from 'react-icons/fa';
import { BrandListPage, BrandRegisterPage, PanelPage } from '../pages';
import { DashBoardLayout } from '../layouts';


export const menuRoutes = [
    {
        to: '/panel',
        icon: <FaTable className='text-2xl text-indigo-500' />,
        title: 'Panel',
        description: 'Panel de control',
        component: <PanelPage />,
    },
    {
        to: '/brand/list',
        icon: <FaList className="text-2xl text-indigo-500" />,
        title: 'Marcas',
        description: 'Listado de marcas',
        component: <BrandListPage />,
    },
    {
        to: '/brand/register',
        icon: <FaPlus className="text-2xl text-indigo-500" />,
        title: 'Nueva marca',
        description: 'Registro de Marca',
        component: <BrandRegisterPage />,
    },
];

export const router = createBrowserRouter([
    {
        path: '/',
        element: <DashBoardLayout />,
        children: [
            ...menuRoutes.map((route) => ({
                path: route.to,
                element: route.component,
            })),
            {
                path: '',
                element: <Navigate to={menuRoutes[1].to} />,
            }
        ],
    }
])