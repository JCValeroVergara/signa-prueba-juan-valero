
export const ToggleSwitch = ({ isActive, onToggle }) => {
    
    const handleCheckboxChange = () => {
        onToggle(!isActive);
    };

    return (
        <label className="relative inline-flex items-center cursor-pointer">
            <input
            type="checkbox"
            checked={isActive}
            onChange={handleCheckboxChange}
            className="sr-only peer"
            />
            <div
            className={`w-14 h-7 bg-red-500 peer-focus:outline-none rounded-full peer ${
                isActive
                ? 'peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-"" after:absolute after:top-0.5 after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600'
                : 'peer-checked:bg-red-500 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-"" after:absolute after:top-0.5 after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600'
            }`}
            ></div>
        </label>
        );
};
