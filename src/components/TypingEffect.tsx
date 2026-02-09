"use client";
import { useState, useEffect } from 'react';
import { Cursor } from './Cursor';

interface TypingEffectProps {
    text: string;
    speed?: number;
    delay?: number;
    className?: string;
    onComplete?: () => void;
    showCursor?: boolean;
}

export function TypingEffect({
    text,
    speed = 50,
    delay = 0,
    className,
    onComplete,
    showCursor = true
}: TypingEffectProps) {
    const [displayedText, setDisplayedText] = useState('');
    const [isStarted, setIsStarted] = useState(false);
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        const startTimeout = setTimeout(() => {
            setIsStarted(true);
        }, delay);
        return () => clearTimeout(startTimeout);
    }, [delay]);

    useEffect(() => {
        if (!isStarted) return;

        let i = 0;
        const interval = setInterval(() => {
            if (i < text.length) {
                setDisplayedText(text.substring(0, i + 1));
                i++;
            } else {
                clearInterval(interval);
                setIsComplete(true);
                onComplete?.();
            }
        }, speed);

        return () => clearInterval(interval);
    }, [text, speed, isStarted, onComplete]);

    return (
        <span className={className}>
            {displayedText}
            {showCursor && !isComplete && <Cursor />}
            {showCursor && isComplete && <span className="inline-block w-2.5 h-5 bg-neon-green align-middle animate-blink ml-1" />}
        </span> // Keep blinking cursor even after typing finishes
    );
}
