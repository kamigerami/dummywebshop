"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { submitGuess } from "@/actions/game-actions";
import { useRouter } from "next/navigation";

interface GameCanvasProps {
    gameId: string;
    originalImage: string;
    modifiedImage: string;
    width: number;
    height: number;
}

export function GameCanvas({ gameId, originalImage, modifiedImage, width, height }: GameCanvasProps) {
    const [startTime] = useState(Date.now());
    const [message, setMessage] = useState<string | null>(null);
    const [isGameOver, setIsGameOver] = useState(false);
    const router = useRouter();

    // We need refs to calculate click coordinates relative to the natural image size
    const imageRef = useRef<HTMLImageElement>(null);

    const handleImageClick = async (e: React.MouseEvent<HTMLImageElement>) => {
        if (isGameOver) return;

        const img = imageRef.current;
        if (!img) return;

        // Calculate scaling factor
        const rect = img.getBoundingClientRect();
        const scaleX = width / rect.width;
        const scaleY = height / rect.height;

        // Get click coordinates relative to the image element
        const clickX = (e.clientX - rect.left) * scaleX;
        const clickY = (e.clientY - rect.top) * scaleY;

        // Elapsed time
        const timeElapsed = Date.now() - startTime;
        const username = prompt("Enter your name for the leaderboard:") || "Anonymous"; // Simple prompt for MVP

        const result = await submitGuess(gameId, clickX, clickY, timeElapsed, username);

        if (result.success) {
            setMessage(`🎉 ${result.message} Time: ${(timeElapsed / 1000).toFixed(2)}s`);
            setIsGameOver(true);
            setTimeout(() => {
                router.push("/leaderboard");
            }, 2000);
        } else {
            setMessage(`❌ ${result.message} Try again!`);
            // Clear error message after a shorter delay
            setTimeout(() => setMessage(null), 1000);
        }
    };

    return (
        <div className="flex flex-col items-center gap-6 p-4">
            <div className="text-xl font-bold">
                Find the difference!
                {message && <span className={`ml-4 ${isGameOver ? "text-green-500" : "text-red-500"}`}>{message}</span>}
            </div>

            <div className="flex flex-col md:flex-row gap-4">
                <div className="relative group cursor-crosshair">
                    <div className="absolute top-2 left-2 bg-black/50 text-white px-2 py-1 rounded text-sm pointer-events-none">Original</div>
                    {/* We only attach the click handler to the MODIFIED image usually, or both? 
              Commonly in these games clicking either works. Let's make the modified one the interactive one 
              or make both interactive. Let's start with modified only logic for simplicity, or bind to both.
              Binding to Modified is easier to "Spot the diff". */}
                    <Image
                        src={originalImage}
                        alt="Original"
                        width={600}
                        height={400}
                        className="rounded-lg shadow-lg object-contain md:max-w-[45vw]"
                        draggable={false}
                    />
                </div>

                <div className="relative group cursor-crosshair">
                    <div className="absolute top-2 left-2 bg-black/50 text-white px-2 py-1 rounded text-sm pointer-events-none">Modified</div>
                    <Image
                        ref={imageRef}
                        src={modifiedImage}
                        alt="Find the difference here"
                        width={600}
                        height={400}
                        className="rounded-lg shadow-lg object-contain md:max-w-[45vw]"
                        onClick={handleImageClick}
                        draggable={false}
                    />
                </div>
            </div>
        </div>
    );
}
