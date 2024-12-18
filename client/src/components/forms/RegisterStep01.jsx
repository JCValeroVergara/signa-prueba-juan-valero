import { useContext } from 'react';
import { RegisterContext } from '../../helpers';

export const RegisterStep01 = () => {
    const { newBrandData, setNewBrandData } = useContext(RegisterContext);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setNewBrandData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    return (
        <div className='w-full md:w-4/5 h-[40vh] flex flex-col items-center'>
            <div className="flex justify-center items-center w-full md:w-3/5 h-12 bg-slate-300 rounded-xl text-2xl text-indigo-600 font-bold px-4">
                <h1> Información de la Marca </h1>
            </div>
            <div className='my-2 w-full md:w-4/5 h-full flex flex-col'>
                <form className='flex flex-col items-center justify-center h-full'>
                    <div className='flex flex-col justify-center items-center w-full h-full'>
                        <div className='flex flex-col justify-center w-full md:w-3/5 h-1/2'>
                            <label htmlFor='brandName' className='text-lg font-bold text-indigo-600'>Nombre de la Marca</label>
                            <input
                                type='text'
                                id='name'
                                name='name'
                                title='Ingrese el nombre de la marca'
                                className='w-full h-10 border border-gray-300 rounded-lg mt-2 text-xl text-gray-700 px-2'
                                value={newBrandData.name || ''}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};
