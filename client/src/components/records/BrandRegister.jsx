import { useContext, useEffect, useState } from 'react';
import { ProgessStepper } from './ProgressStepper';
import { RegisterStep01, RegisterStep02, RegisterStep03 } from '../forms';
import { RegisterContext } from '../../helpers';
import { SuccesfullRegister } from '../alerts';

export const BrandRegister = () => {
    const { newBrandData, setNewBrandData } = useContext(RegisterContext);
    const [currentStep, setCurrentStep] = useState(1);
    const [showAlert, setShowAlert] = useState(false);

    const storedBrands = JSON.parse(localStorage.getItem('brands')) || [];
    const nextId = storedBrands.length
        ? Math.max(...storedBrands.map((b) => b.id)) + 1
        : 1;

    const handleNext = () => {
        setCurrentStep((prev) => Math.min(prev + 1, 3));
    };

    const handlePrev = () => {
        setCurrentStep((prev) => Math.max(prev - 1, 1));
    };

    const handleSubmit = () => {
        const newBrand = {
            id: nextId,
            name: newBrandData.name,
            holder: newBrandData.holder,
            state: newBrandData.state,
            active: true,
        };

        const updatedBrands = [...storedBrands, newBrand];
        localStorage.setItem('brands', JSON.stringify(updatedBrands));
        setShowAlert(true);
    };

    const handleCloseAlert = () => {
        setShowAlert(false);
        window.location.reload();
    };

    const isNextDisabled = () => {
        switch (currentStep) {
            case 1:
                return !newBrandData.name || newBrandData.name === '';
            case 2:
                return !newBrandData.holder || newBrandData.holder === '';
            case 3:
                return !newBrandData.state || newBrandData.state === '';
            default:
                return false;
        }
    }

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
        <>
            {showAlert && (
                <SuccesfullRegister
                    message="Marca registrada exitosamente"
                    onClick={handleCloseAlert}
                />
            )}
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
                        {currentStep !== 3 ? (
                            <button
                                onClick={handleNext}
                                className="px-4 py-2 bg-indigo-500 text-white rounded-lg disabled:opacity-50"
                                disabled={isNextDisabled()}
                            >
                                Siguiente
                            </button>
                        ) : (
                                <button
                                onClick={handleSubmit}
                                className="px-4 py-1 bg-green-500 text-white rounded-lg disabled:opacity-50"
                                disabled={isNextDisabled()}
                            >
                                Registrar
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};
