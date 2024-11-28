
import { Arrow, DoubleArrow } from '../../icons';

export const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

    const getPageNumbers = () => {
        if (totalPages <= 5) {
        return pages;
        }

        if (currentPage <= 3) {
        return [1, 2, 3, 4, 5];
        }

        if (currentPage >= totalPages - 2) {
        return [
            totalPages - 4,
            totalPages - 3,
            totalPages - 2,
            totalPages - 1,
            totalPages,
        ];
        }

        return [
        currentPage - 2,
        currentPage - 1,
        currentPage,
        currentPage + 1,
        currentPage + 2,
        ];
    };

    return (
        <div className="flex w-full items-center justify-center space-x-1 py-3">
            <button
                type="button"
                title="Primera página"
                className={`h-8 w-8 border-[1.5px] border-[#012970] dark:border-[#ffffff] rounded text-[#012970] dark:text-white dark:bg-slate-700 transition rotate-180 ${
                currentPage === 1 ? 'cursor-not-allowed' : 'hover:bg-blue-500'
                }`}
                onClick={() => onPageChange(1)}
                disabled={currentPage === 1}
            >
                <DoubleArrow />
            </button>
            <button
                type="button"
                title="Anterior"
                className={`h-8 w-8 border-[1.5px] border-[#012970] dark:border-[#ffffff] rounded text-[#012970] dark:text-white dark:bg-slate-700 transition ${
                currentPage === 1 ? 'cursor-not-allowed' : 'hover:bg-blue-500'
                }`}
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
            >
                <Arrow />
            </button>
            {getPageNumbers().map((pageNumber) => (
                <button
                type="button"
                className={`h-8 w-8 border-[1.5px] border-[#012970] dark:border-[#ffffff] rounded text-[#012970] ${
                    currentPage === pageNumber
                    ? 'bg-blue-500 text-white'
                    : 'dark:text-white dark:bg-slate-700'
                }`}
                key={pageNumber}
                onClick={() => onPageChange(pageNumber)}
                >
                {pageNumber}
                </button>
            ))}
            <button
                type="button"
                title="Siguiente"
                className={`h-8 w-8 border-[1.5px] border-[#012970] dark:border-[#ffffff] rounded text-[#012970] dark:text-white dark:bg-slate-700 transition rotate-180 ${
                currentPage === totalPages
                    ? 'cursor-not-allowed'
                    : 'hover:bg-blue-500'
                }`}
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                <Arrow />
            </button>
            <button
                type="button"
                title="Última página"
                className={`h-8 w-8 border-[1.5px] border-[#012970] dark:border-[#ffffff] rounded text-[#012970] dark:text-white dark:bg-slate-700 transition ${
                currentPage === totalPages
                    ? 'cursor-not-allowed'
                    : 'hover:bg-blue-500'
                }`}
                onClick={() => onPageChange(totalPages)}
                disabled={currentPage === totalPages}
            >
                <DoubleArrow />
            </button>
        </div>
    );
};
