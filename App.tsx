
import React, { useState, useCallback } from 'react';
import { GameState } from './types';
import HomeScreen from './screens/HomeScreen';
import GameScreen from './screens/GameScreen';
import StickerGalleryScreen from './screens/StickerGalleryScreen';
import { LEVEL_STICKER_MAP, LEVELS } from './constants';

const App: React.FC = () => {
    const [gameState, setGameState] = useState<GameState>(GameState.HOME);
    const [currentLevel, setCurrentLevel] = useState(1);
    const [unlockedStickers, setUnlockedStickers] = useState<string[]>([]);
    const [highestLevelCompleted, setHighestLevelCompleted] = useState(0);

    const handleStartGame = () => {
        setCurrentLevel(highestLevelCompleted + 1 > LEVELS.length ? 1 : highestLevelCompleted + 1);
        setGameState(GameState.PLAYING);
    };

    const handleShowGallery = () => {
        setGameState(GameState.GALLERY);
    };

    const handleGoHome = () => {
        setGameState(GameState.HOME);
    };

    const handleLevelComplete = useCallback((level: number) => {
        if (level > highestLevelCompleted) {
            setHighestLevelCompleted(level);
            const newStickerId = LEVEL_STICKER_MAP[level];
            if (newStickerId && !unlockedStickers.includes(newStickerId)) {
                setUnlockedStickers(prev => [...prev, newStickerId]);
            }
        }
        if (level < LEVELS.length) {
            setCurrentLevel(level + 1);
        } else {
            // Game finished, go home
            setTimeout(() => setGameState(GameState.HOME), 2000);
        }
    }, [highestLevelCompleted, unlockedStickers]);

    const renderScreen = () => {
        switch (gameState) {
            case GameState.PLAYING:
                const levelConfig = LEVELS.find(l => l.level === currentLevel);
                if (levelConfig) {
                    return <GameScreen 
                        levelConfig={levelConfig} 
                        onLevelComplete={handleLevelComplete}
                        onExit={handleGoHome} 
                    />;
                }
                // Fallback to home if level not found
                setGameState(GameState.HOME);
                return null;
            case GameState.GALLERY:
                return <StickerGalleryScreen unlockedStickers={unlockedStickers} onBack={handleGoHome} />;
            case GameState.HOME:
            default:
                return <HomeScreen onStart={handleStartGame} onShowGallery={handleShowGallery} />;
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-sky-300 to-green-300 text-gray-800 font-sans p-4 flex flex-col items-center justify-center">
            <div className="w-full max-w-4xl mx-auto">
                {renderScreen()}
            </div>
        </div>
    );
};

export default App;
