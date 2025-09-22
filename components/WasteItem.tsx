
import React from 'react';
import { WasteItem as WasteItemType } from '../types';

interface WasteItemProps {
    item: WasteItemType;
}

const WasteItem: React.FC<WasteItemProps> = ({ item }) => {
    const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
        e.dataTransfer.setData('text/plain', item.id);
        // playSound('drag')
    };

    return (
        <div
            id={item.id}
            draggable
            onDragStart={handleDragStart}
            className="flex flex-col items-center justify-center p-4 bg-white bg-opacity-80 rounded-2xl shadow-lg cursor-grab active:cursor-grabbing transform hover:scale-110 transition-transform duration-200"
        >
            <div className="text-6xl">{item.emoji}</div>
            <div className="mt-2 font-semibold text-center text-gray-700">{item.name}</div>
        </div>
    );
};

export default WasteItem;
