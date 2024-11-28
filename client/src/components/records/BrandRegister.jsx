import { useState } from 'react';
import { ProgessStepper } from './ProgressStepper';
import { RegisterStep01, RegisterStep02, RegisterStep03 } from '../forms';

export const BrandRegister = () => {
    const [currentStep, setCurrentStep] = useState(1);

    const handleNext = () => {
        setCurrentStep((prev) => Math.min(prev + 1, 3));
    };

    const handlePrev = () => {
        setCurrentStep((prev) => Math.max(prev - 1, 1));
    };

    const renderForm = () => {
        switch (currentStep) {
            case 1:
                return <RegisterStep01 />;
            case 2:
                return <RegisterStep02 />;
            case 3:
                return <RegisterStep03 />;
            default:
                return null;
        }
    };

    return (
        <div className="relative container mx-auto p-1 md:p-4">
            <div className="flex items-center w-full md:w-4/5 h-12 bg-slate-400 rounded-xl text-2xl text-indigo-600 font-bold px-1 md:px-4">
                <h1>Servicios / Registro de Marca </h1>
            </div>
            <div className="flex flex-col items-center w-full h-full p-4">
                {/* Stepper */}
                <div className="w-full h-[20vh] flex justify-center mb-4">
                    <ProgessStepper currentStep={currentStep} steps={3} />
                </div>

                {/* Formulario */}
                <div className="w-full flex flex-col items-center">
                    {renderForm()}
                </div>

                {/* Botones de navegación */}
                <div className="flex justify-between w-full md:w-1/2 h-12 mt-4 text-xl">
                    <button
                        onClick={handlePrev}
                        className="px-4 py-1 bg-gray-300 rounded-lg disabled:opacity-50"
                        disabled={currentStep === 1}
                    >
                        Anterior
                    </button>
                    <button
                        onClick={handleNext}
                        className="px-4 py-2 bg-indigo-500 text-white rounded-lg disabled:opacity-50"
                        disabled={currentStep === 3}
                    >
                        Siguiente
                    </button>
                </div>
            </div>
        </div>
    );
};
