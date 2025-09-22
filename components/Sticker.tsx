
import React from 'react';
import { Sticker as StickerType } from '../types';

interface StickerProps {
    sticker: StickerType;
    isUnlocked: boolean;
}

const Sticker: React.FC<StickerProps> = ({ sticker, isUnlocked }) => {
    return (
        <div className={`flex flex-col items-center justify-center p-4 bg-white bg-opacity-70 rounded-2xl shadow-lg text-center transition-all duration-300 ${isUnlocked ? 'grayscale-0' : 'grayscale'}`}>
            <div className={`text-7xl transition-transform duration-300 ${isUnlocked ? 'transform scale-110' : ''}`}>
                {isUnlocked ? sticker.emoji : '❓'}
            </div>
            <div className="mt-2 font-bold text-gray-800">
                {isUnlocked ? sticker.name : 'Bloqueado'}
            </div>
        </div>
    );
};

export default Sticker;
