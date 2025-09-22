
import React from 'react';

interface ModalProps {
    title: string;
    children: React.ReactNode;
    onClose: () => void;
    buttonText?: string;
}

const Modal: React.FC<ModalProps> = ({ title, children, onClose, buttonText = "Continuar" }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 animate-fade-in">
            <div className="bg-white rounded-2xl shadow-2xl p-8 m-4 max-w-sm w-full text-center transform transition-all scale-95 hover:scale-100 duration-300">
                <h2 className="text-3xl font-bold text-green-600 mb-4">{title}</h2>
                <div className="text-lg text-gray-700 mb-6">
                    {children}
                </div>
                <button
                    onClick={onClose}
                    className="w-full bg-yellow-400 text-gray-900 font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-yellow-500 transform hover:scale-105 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-opacity-50"
                >
                    {buttonText}
                </button>
            </div>
        </div>
    );
};

export default Modal;
