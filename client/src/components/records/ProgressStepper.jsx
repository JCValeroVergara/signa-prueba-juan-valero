
export const ProgessStepper = ({ currentStep, steps}) => {
    return (
        <ol className="flex justify-center items-center w-full space-x-0">
            {Array.from({ length: steps }, (_, index) => {
                const step = index + 1;
                const isActive = step === currentStep;
                const isCompleted = step < currentStep;

                return (
                    <li key={step} className="flex flex-row items-center">
                        <div
                            className={`flex items-center justify-center w-12 h-12 rounded-full border-2 ${
                                isCompleted
                                    ? 'bg-indigo-500 text-white border-indigo-500'
                                    : isActive
                                    ? 'bg-white text-indigo-600 border-indigo-600'
                                    : 'bg-gray-100 text-gray-500 border-gray-300'
                            }`}
                        >
                            <span className="text-xl font-bold">{step}</span>
                        </div>
                        {step !== steps && (
                            <div
                                className={`w-[15vw] h-1 ${
                                    isCompleted
                                        ? 'bg-indigo-500'
                                        : 'bg-gray-300'
                                }`}
                            ></div>
                        )}
                    </li>
                );
            })}
        </ol>
    );
};
