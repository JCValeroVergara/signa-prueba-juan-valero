import{ FaEdit, FaTrash } from 'react-icons/fa';
import { brands } from '../../data';
import { Pagination } from '../navigations';
import { useState } from 'react';
import { ToggleSwitch } from '../buttons';

export const BrandList = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [filterActive, setFilterActive] = useState(true);
    const itemsPerPage = 10;

    //Ordenar marcas por Marca (name) ascendente
    const brandsSorted = brands.sort((a, b) => a.name.localeCompare(b.name));

    //Filtra marcas por activo / inactivo
    const filteredBrands = brandsSorted.filter((brand) => brand.active === filterActive);

    //Total de páginas
    const totalPages = Math.ceil(filteredBrands.length / itemsPerPage);

    //Marcas a mostrar
    const currentBrands = filteredBrands.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handleToggleFilter = (isActive) => {
        setFilterActive(isActive);
        setCurrentPage(1);
    };

    return (
        <div className='fixed container mx-auto p-4'>
            <h1 className='text-2xl font-bold mb-4'>Listado de Marcas</h1>
            <div className='flex justify-end items-center mb-4'>
                <ToggleSwitch isActive={filterActive} onToggle={handleToggleFilter} />
                <span className='text-gray-500 ml-2'>
                    {filterActive ? 'Activos' : 'Inactivos'}
                </span>
            </div>
            <table className='table-auto w-full border border-gray-300 rounded-xl overflow-hidden mb-1'>
                <thead>
                    <tr className='bg-slate-400 text-left'>
                        <th className='px-4 py-2 border-b'></th>
                        <th className='px-4 py-2 border-b'>Marca</th>
                        <th className='px-4 py-2 border-b'>Titular</th>
                        <th className='px-4 py-2 border-b'>Estado</th>
                        <th className='px-4 py-2 border-b text-center'>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {currentBrands.length === 0 && (
                        <tr>
                            <td colSpan='5' className='text-center py-4'>
                                No hay marcas para mostrar
                            </td>
                        </tr>
                    )}
                    {currentBrands.map((marca, index) => (
                        <tr
                            key={marca.id}
                            className={index % 2 === 0 ? 'bg-slate-300' : ''}
                        >
                            <td className='px-4 py-2 text-2xl font-normal border border-gray-400'>{(currentPage-1)* itemsPerPage + index + 1}</td>
                            <td className='px-4 py-2 text-2xl font-normal border border-gray-400'>{marca.name}</td>
                            <td className='px-4 py-2 text-2xl font-normal border border-gray-400'>{marca.holder}</td>
                            <td className='px-4 py-2 text-2xl font-normal border border-gray-400'>{marca.state}</td>
                            <td className='px-4 py-2 border border-gray-400 text-center'>
                                <button
                                    className='text-green-600 hover:text-green-800 mr-4'
                                    title='Editar'
                                >
                                    <FaEdit size={18} />
                                </button>
                                <button
                                    className='text-red-500 hover:text-red-800 mr-2'
                                    title='Eliminar'
                                >
                                    <FaTrash size={18} />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
            />
        </div>
    );
};
