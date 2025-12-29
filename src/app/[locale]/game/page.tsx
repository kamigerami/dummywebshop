import { startGame } from "@/actions/game-actions";
import { GameCanvas } from "@/components/game/game-canvas";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// Force dynamic rendering so we get a new game every time
export const dynamic = "force-dynamic";

export default async function GamePage() {
    const gameData = await startGame();

    return (
        <main className="flex min-h-screen flex-col items-center justify-start py-10 px-4">
            <div className="w-full max-w-5xl flex justify-between items-center mb-6">
                <Link href="/">
                    <Button variant="outline">← Home</Button>
                </Link>
                <Link href="/leaderboard">
                    <Button variant="ghost">Leaderboard</Button>
                </Link>
            </div>

            <h1 className="text-3xl font-bold mb-4">Spot the Difference</h1>
            <p className="text-gray-500 mb-8">Click on the difference in the image on the right!</p>

            <GameCanvas {...gameData} />
        </main>
    );
}
