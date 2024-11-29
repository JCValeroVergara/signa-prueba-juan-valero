import { useContext, useEffect, useState } from 'react';
import { RegisterContext } from '../../helpers';

export const RegisterStep03 = () => {
    const { newBrandData, setNewBrandData } = useContext(RegisterContext);
    const [brands, setBrands] = useState([]);
    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
        const storedBrands = JSON.parse(localStorage.getItem('brands')) || [];
        setBrands(storedBrands);
    }, []);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setNewBrandData((prev) => ({
            ...prev,
            [name]: value,
        }));
        if (name === 'state' && value.trim() !== '') {
            const filteredSuggestions = brands
                .map((brand) => brand.state)
                .filter((state) => state.toLowerCase().includes(value.toLowerCase()));
            setSuggestions(filteredSuggestions);
        } else {
            setSuggestions([]); 
        }
    };

    const handleSuggestionClick = (suggestion) => {
        setNewBrandData((prev) => ({
            ...prev,
            state: suggestion,
        }));
        setSuggestions([]);
    }

    return (
        <div className='w-full md:w-4/5 h-[40vh] flex flex-col items-center'>
            <div className="flex justify-center items-center w-full md:w-3/5 h-12 bg-slate-300 rounded-xl text-2xl text-indigo-600 font-bold px-4">
                <h1> Resumen </h1>
            </div>
            <div className='my-2 w-full md:w-4/5 h-full flex flex-col'>
                <form className='flex flex-col items-center justify-center h-full'>
                    <div className='flex flex-col justify-center items-center w-full h-full'>
                        <div className='flex flex-col justify-center w-full md:w-3/5 h-1/4'>
                            <label htmlFor='brandName' className='text-lg font-bold text-indigo-600'>Nombre de la Marca</label>
                            <input
                                type='text'
                                id='name'
                                name='name'
                                title='Nombre de la marca'
                                className='w-full h-10 border border-gray-300 rounded-lg text-xl text-gray-700 px-2'
                                value={newBrandData.name || ''}
                                readOnly={true}
                            />
                        </div>
                        <div className='flex flex-col justify-center w-full md:w-3/5 h-1/4 mt-4 md:mt-2'>
                            <label htmlFor='holderName' className='text-lg font-bold text-indigo-600'>Titular de la Marca</label>
                            <input
                                type='text'
                                id='holder'
                                name='holder'
                                title='Titular de la marca'
                                className='w-full h-10 border border-gray-300 rounded-lg text-xl text-gray-700 px-2'
                                value={newBrandData.holder || ''}
                                readOnly={true}
                            />
                        </div>
                        <div className='relative flex flex-col justify-center w-full md:w-3/5 h-1/4 mt-4 md:mt-2'>
                            <label htmlFor='stateName' className='text-lg font-bold text-indigo-600'>Estado de la Marca</label>
                            <input
                                type='text'
                                id='state'
                                name='state'
                                title='Ingrese Estado de origen de la marca'
                                className='w-full h-10 border border-gray-300 rounded-lg text-xl text-gray-700 px-2'
                                value={newBrandData.state || ''}
                                onChange={handleChange}
                            />
                            {/* Lista de sugerencias */}
                            {suggestions.length > 0 && (
                                <ul className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded-lg max-h-40 text-xl text-gray-700 overflow-y-auto z-10">
                                    {suggestions
                                        .filter((item, index) => suggestions.indexOf(item) === index)
                                        .map((suggestion, index) => (
                                        <li
                                            key={index}
                                            onClick={() => handleSuggestionClick(suggestion)}
                                            className="p-2 hover:bg-indigo-100 cursor-pointer"
                                        >
                                            {suggestion}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};
