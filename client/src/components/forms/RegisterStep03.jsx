
export const RegisterStep03 = () => {
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
                                name='brandName'
                                className='w-full h-10 border border-gray-300 rounded-lg'
                            />
                        </div>
                        <div className='flex flex-col justify-center w-full md:w-3/5 h-1/4 mt-4 md:mt-2'>
                            <label htmlFor='holderName' className='text-lg font-bold text-indigo-600'>Titular de la Marca</label>
                            <input
                                type='text'
                                id='holder'
                                name='holder'
                                className='w-full h-10 border border-gray-300 rounded-lg'
                            />
                        </div>
                        <div className='flex flex-col justify-center w-full md:w-3/5 h-1/4 mt-4 md:mt-2'>
                            <label htmlFor='stateName' className='text-lg font-bold text-indigo-600'>Estado de la Marca</label>
                            <input
                                type='text'
                                id='state'
                                name='state'
                                className='w-full h-10 border border-gray-300 rounded-lg'
                            />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};
