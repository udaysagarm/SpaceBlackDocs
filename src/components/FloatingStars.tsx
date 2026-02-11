"use client";

import { useEffect, useState } from "react";

interface Star {
    id: number;
    top: string;
    left: string;
    size: number;
    animationDelay: string;
    animationDuration: string;
}

export const FloatingStars = () => {
    const [stars, setStars] = useState<Star[]>([]);

    useEffect(() => {
        const newStars = Array.from({ length: 50 }).map((_, i) => ({
            id: i,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            size: Math.random() * 3 + 1, // 1px to 4px
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${Math.random() * 3 + 3}s`, // 3s to 6s
        }));
        setStars(newStars);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {/* Sun */}
            <div
                className="absolute top-1/2 left-1/2 w-[900px] h-[900px] rounded-full bg-[radial-gradient(circle,rgba(255,200,0,0.2)_0%,rgba(255,100,0,0.05)_40%,transparent_70%)] blur-3xl opacity-60"
                style={{
                    transform: "translate(-50%, -50%)",
                    animation: "sun-pulse 8s ease-in-out infinite"
                }}
            />
            {stars.map((star) => (
                <div
                    key={star.id}
                    className="absolute rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]"
                    style={{
                        top: star.top,
                        left: star.left,
                        width: `${star.size}px`,
                        height: `${star.size}px`,
                        opacity: 0.8,
                        animation: `float ${star.animationDuration} ease-in-out infinite, twinkle ${star.animationDuration} ease-in-out infinite`,
                        animationDelay: star.animationDelay,
                    }}
                />
            ))}
        </div>
    );
};
