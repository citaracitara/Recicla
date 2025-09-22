
import React, { useState } from 'react';
import { BINS } from '../constants';
import { BinCategory } from '../types';

interface BinProps {
    category: BinCategory;
    onDrop: (category: BinCategory) => void;
}

const Bin: React.FC<BinProps> = ({ category, onDrop }) => {
    const [isOver, setIsOver] = useState(false);
    const binInfo = BINS[category];

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsOver(true);
    };

    const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsOver(false);
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsOver(false);
        onDrop(category);
    };

    const baseClasses = "w-48 h-64 rounded-t-2xl border-b-8 border-gray-500 flex flex-col items-center justify-between p-4 text-white font-bold shadow-xl transition-all duration-300 transform";
    const scaleClass = isOver ? 'scale-110' : 'scale-100';
    const colorClass = isOver ? binInfo.hoverColor : binInfo.color;

    return (
        <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={`${baseClasses} ${colorClass} ${scaleClass}`}
        >
            <div className="text-5xl">{binInfo.icon}</div>
            <div className="text-2xl">{binInfo.name}</div>
        </div>
    );
};

export default Bin;
