import React from 'react';
import { Info } from '../../icons';

export const SuccesfullDelete = ({onClick, onClose, message}) => {
    return (
        <div className="fixed top-0 left-0 z-50 w-full h-full flex items-center justify-center bg-black bg-opacity-30">
            <div
                className="p-4 mb-4 text-red-800 border border-red-600 rounded-lg bg-gray-100 dark:text-red-400 dark:border-red-800"
                role="alert"
            >
                <div className="flex justify-center items-center">
                <Info className="w-5 h-5 mr-3 text-red-400" />
                <h3 className="text-lg font-medium">Estas apunto de eliminar un registro, estas seguro?</h3>
                </div>
                <div className="mt-2 mb-4 text-sm">
                {message}
                </div>
                <div className="flex justify-center">
                <button
                    type="button"
                    title='Continuar'
                    className="mr-2 text-green-800 bg-green-400 border border-green-800 hover:bg-green-600 hover:text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-xs px-3 py-1.5 text-center dark:hover:bg-green-600 dark:border-green-600 dark:hover:text-white dark:focus:ring-green-800"
                    data-dismiss-target="#alert-additional-content-3"
                    aria-label="Close"
                    onClick={onClick}
                >
                    Continuar
                </button>
                <button
                    type="button"
                    title='Cancelar'
                    className="text-red-800 bg-red-400 border border-red-800 hover:bg-red-600 hover:text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-xs px-3 py-1.5 text-center dark:hover:bg-red-600 dark:border-red-600 dark:hover:text-white dark:focus:ring-red-800"
                    data-dismiss-target="#alert-additional-content-3"
                    aria-label="Close"
                    onClick={onClose}
                >
                    Cancelar
                </button>
                </div>
            </div>
        </div>
    );
}