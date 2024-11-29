
export const Panel = () => {
    return (
        <div className="relative mx-auto border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[454px] max-w-[341px] md:h-[682px] md:max-w-[512px]">
            {/* Barras laterales */}
            <div className="h-[32px] w-[3px] bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
            <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
            <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
            <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>

            {/* Contenedor principal */}
            <div className="rounded-[2rem] overflow-hidden h-[426px] md:h-[654px] bg-white dark:bg-gray-800">
                {/* Imágenes responsivas */}
                <img
                    src="https://flowbite.s3.amazonaws.com/docs/device-mockups/tablet-mockup-image.png"
                    className="dark:hidden h-full w-full object-cover"
                    alt="Tablet mockup in light mode"
                />
                <img
                    src="https://flowbite.s3.amazonaws.com/docs/device-mockups/tablet-mockup-image-dark.png"
                    className="hidden dark:block h-full w-full object-cover"
                    alt="Tablet mockup in dark mode"
                />
            </div>
        </div>
    );
};
