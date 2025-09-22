
import React from 'react';
import EcoMan from '../components/EcoMan';

interface HomeScreenProps {
    onStart: () => void;
    onShowGallery: () => void;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ onStart, onShowGallery }) => {
    return (
        <div className="flex flex-col items-center justify-center text-center p-4 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-white text-shadow-lg mb-4" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.4)'}}>Super Eco-Héroe</h1>
            <p className="text-xl md:text-2xl text-green-900 font-semibold mb-8">¡Clasifica la basura y salva el planeta!</p>
            
            <EcoMan message="¡Hola, joven héroe! Juntos salvaremos el planeta. ¡Arrastra la basura al contenedor correcto!" />

            <div className="mt-8 space-y-4">
                <button
                    onClick={onStart}
                    className="w-64 bg-green-500 text-white font-bold py-4 px-8 rounded-full shadow-2xl text-2xl transform hover:scale-105 transition-transform duration-200 border-4 border-green-700 hover:bg-green-600"
                >
                    Empezar Juego
                </button>
                <button
                    onClick={onShowGallery}
                    className="w-64 bg-blue-500 text-white font-bold py-3 px-8 rounded-full shadow-2xl text-xl transform hover:scale-105 transition-transform duration-200 border-4 border-blue-700 hover:bg-blue-600"
                >
                    Galería de Stickers
                </button>
            </div>
        </div>
    );
};

export default HomeScreen;
