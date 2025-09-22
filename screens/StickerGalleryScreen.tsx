
import React from 'react';
import { STICKERS } from '../constants';
import Sticker from '../components/Sticker';

interface StickerGalleryScreenProps {
    unlockedStickers: string[];
    onBack: () => void;
}

const StickerGalleryScreen: React.FC<StickerGalleryScreenProps> = ({ unlockedStickers, onBack }) => {
    const allStickerIds = Object.keys(STICKERS);

    return (
        <div className="flex flex-col items-center p-4 w-full animate-fade-in">
            <h1 className="text-5xl font-bold text-white text-shadow-lg mb-8" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.4)'}}>Galería de Stickers</h1>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 w-full max-w-3xl mb-8">
                {allStickerIds.map(stickerId => (
                    <Sticker 
                        key={stickerId}
                        sticker={STICKERS[stickerId]}
                        isUnlocked={unlockedStickers.includes(stickerId)}
                    />
                ))}
            </div>

            <button
                onClick={onBack}
                className="bg-yellow-400 text-gray-900 font-bold py-3 px-8 rounded-full shadow-2xl text-xl transform hover:scale-105 transition-transform duration-200 border-4 border-yellow-600 hover:bg-yellow-500"
            >
                Volver
            </button>
        </div>
    );
};

export default StickerGalleryScreen;
