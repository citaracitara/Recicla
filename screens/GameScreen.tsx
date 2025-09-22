
import React, { useState, useEffect, useCallback } from 'react';
import { Level, BinCategory } from '../types';
import { WASTE_ITEMS } from '../constants';
import Bin from '../components/Bin';
import WasteItem from '../components/WasteItem';
import Modal from '../components/Modal';
import EcoMan from '../components/EcoMan';

interface GameScreenProps {
    levelConfig: Level;
    onLevelComplete: (level: number) => void;
    onExit: () => void;
}

const GameScreen: React.FC<GameScreenProps> = ({ levelConfig, onLevelComplete, onExit }) => {
    const [items, setItems] = useState<string[]>([]);
    const [currentItemIndex, setCurrentItemIndex] = useState(0);
    const [result, setResult] = useState<{ correct: boolean; explanation: string } | null>(null);
    const [showLevelIntro, setShowLevelIntro] = useState(true);
    const [score, setScore] = useState(0);

    useEffect(() => {
        setItems([...levelConfig.items].sort(() => 0.5 - Math.random()));
        setCurrentItemIndex(0);
        setScore(0);
        setShowLevelIntro(true);
    }, [levelConfig]);

    const handleDrop = useCallback((droppedCategory: BinCategory) => {
        const currentItem = WASTE_ITEMS[items[currentItemIndex]];
        if (currentItem.category === droppedCategory) {
            // playSound('correct')
            setResult({ correct: true, explanation: currentItem.explanation });
            setScore(prev => prev + 1);
        } else {
            // playSound('incorrect')
            const correctBinName = levelConfig.bins.find(b => b === currentItem.category) ? `el contenedor de ${currentItem.category.toLowerCase()}` : "el contenedor correcto";
            setResult({ correct: false, explanation: `¡Casi! Este objeto va en ${correctBinName}.` });
        }
    }, [currentItemIndex, items, levelConfig.bins]);

    const handleNext = () => {
        setResult(null);
        if (currentItemIndex + 1 < items.length) {
            setCurrentItemIndex(prev => prev + 1);
        } else {
            // Level finished
            // playSound('level_complete')
            onLevelComplete(levelConfig.level);
        }
    };
    
    if (showLevelIntro) {
        return (
             <Modal title={levelConfig.title} onClose={() => setShowLevelIntro(false)} buttonText="¡Entendido!">
                <EcoMan message={levelConfig.introMessage} />
            </Modal>
        );
    }

    const currentItem = items.length > 0 ? WASTE_ITEMS[items[currentItemIndex]] : null;

    return (
        <div className="w-full h-full flex flex-col justify-between items-center p-4 relative">
            <div className="w-full flex justify-between items-center mb-4">
                 <button onClick={onExit} className="bg-red-500 text-white font-bold py-2 px-4 rounded-lg shadow-md hover:bg-red-600 transition-colors">Salir</button>
                 <div className="text-2xl font-bold text-white text-shadow">{levelConfig.title}</div>
                 <div className="text-2xl font-bold text-white text-shadow">Aciertos: {score}/{items.length}</div>
            </div>

            <div className="flex-grow flex items-center justify-center w-full">
                {currentItem && <WasteItem item={currentItem} />}
            </div>
            
            <div className="flex justify-around items-end w-full mt-8 gap-4">
                {levelConfig.bins.map(category => (
                    <Bin key={category} category={category} onDrop={handleDrop} />
                ))}
            </div>

            {result && (
                <Modal title={result.correct ? "¡Excelente!" : "¡Uy, un error!"} onClose={handleNext}>
                    <p className="text-2xl mb-4">{result.correct ? '✅' : '❌'}</p>
                    <p>{result.explanation}</p>
                </Modal>
            )}
        </div>
    );
};

export default GameScreen;
