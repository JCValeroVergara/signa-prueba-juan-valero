import { useState } from 'react';

export const RegisterUpdate = ({ id, onClick }) => {

    const brands = JSON.parse(localStorage.getItem('brands'));
    const brandToUpdate = brands.find((brand) => brand.id === id);

    console.log('active', brandToUpdate.active);

    const [formData, setFormData] = useState({
        name: brandToUpdate.name,
        holder: brandToUpdate.holder,
        state: brandToUpdate.state,
        active: brandToUpdate.active,
    });

    console.log('formData Active', formData.active);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleChangeCheckbox = (event) => {
        const { name, checked } = event.target;
        setFormData((prev) => ({
            ...prev,
            [name]: checked,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const updatedBrands = brands.map((brand) => {
            if (brand.id === id) {
                return { ...brand, ...formData };
            }
            return brand;
        });

        localStorage.setItem('brands', JSON.stringify(updatedBrands));
        onClick();
    };

    return (
        <section className="overflow-y-scroll flex flex-wrap fixed top-0 left-0 z-50 w-full h-full items-center justify-center bg-black bg-opacity-50">
            <div className="flex flex-col flex-wrap w-full items-center justify-center px-6 py-8 mx-auto ">
                <div className="w-full h-max bg-slate-500 rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-indigo-800 text-3xl font-bold leading-tight tracking-tight  text-center">
                        Actualizar la Marca
                        </h1>
                        <form className="flex flex-col" onSubmit={handleSubmit}>
                            <label htmlFor='brandName' className='text-lg font-bold text-indigo-600 mt-3'>Nombre de la Marca</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                title="Ingrese el nombre de la marca"
                                className="border border-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2 dark:border-gray-600 placeholder-slate-400 dark:placeholder-gray-400 text-gray-800 focus:ring-blue-500 focus:border-blue-500"
                                defaultValue={brandToUpdate.name}
                                required=""
                                onChange={handleChange}
                            />
                            <label htmlFor='brandName' className='text-lg font-bold text-indigo-600 mt-3'>Titular de la Marca</label>
                            <input
                                type="text"
                                name="holder"
                                id="holder"
                                title="Ingrese el titular de la marca"
                                className="border border-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2 dark:border-gray-600 placeholder-slate-400 dark:placeholder-gray-400 text-gray-800 focus:ring-blue-500 focus:border-blue-500"
                                defaultValue={brandToUpdate.holder}
                                required=""
                                onChange={handleChange}
                            />
                            <label htmlFor='brandName' className='text-lg font-bold text-indigo-600 mt-3'>Estado de la Marca</label>
                            <input
                                type="text"
                                name="state"
                                id="state"
                                title="Ingrese el estado de la marca"
                                className="border border-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2 dark:border-gray-600 placeholder-slate-400 dark:placeholder-gray-400 text-gray-800 focus:ring-blue-500 focus:border-blue-500"
                                defaultValue={brandToUpdate.state}
                                required=""
                                onChange={handleChange}
                            />
                            <div
                                className="mt-4 flex justify-center items-center border border-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 w-full p-2 bg-white placeholder-black dark:placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
                                onClick={handleChangeCheckbox}
                                >
                                <input
                                    type="checkbox"
                                    id="active"
                                    name="active"
                                    checked={formData.active}
                                    onChange={handleChangeCheckbox}
                                    className="mr-2"
                                />
                                <label htmlFor="active" className="text-lg font-bold text-indigo-600">
                                    {formData.active ? 'Activo' : 'Eliminado'}
                                </label>
                            </div>
                            <div className="flex flex-wrap w-full justify-center md:space-x-4 md:space-y-0 space-y-4 mt-8">
                                <button
                                    type="submit"
                                    className="md:w-24 w-full text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-800 font-medium rounded-lg text-sm py-2.5 text-center"
                                >
                                    Actualizar
                                </button>
                                <button
                                    onClick={onClick}
                                    className="md:w-24 w-full text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-800 font-medium rounded-lg text-sm py-2.5 text-center"
                                >
                                    Cancelar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
