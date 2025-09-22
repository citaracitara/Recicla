
import React from 'react';

interface EcoManProps {
    message: string;
}

const EcoMan: React.FC<EcoManProps> = ({ message }) => {
    return (
        <div className="flex items-center justify-center gap-4 my-4 animate-fade-in">
            <div className="relative">
                <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center text-4xl shadow-lg">
                    <span>🦸</span>
                </div>
                <div className="absolute -top-2 -right-2 w-16 h-24 bg-green-600 transform -skew-y-12" style={{ clipPath: 'polygon(0 0, 100% 20%, 100% 100%, 0 80%)' }}></div>
            </div>
            <div className="relative bg-white p-4 rounded-lg shadow-xl max-w-md text-lg text-gray-700 border-2 border-green-500">
                <p>{message}</p>
                <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 transform rotate-45 w-4 h-4 bg-white border-b-2 border-l-2 border-green-500"></div>
            </div>
        </div>
    );
};

export default EcoMan;
