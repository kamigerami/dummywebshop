import { getLeaderboard } from "@/actions/game-actions";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function LeaderboardPage() {
    const scores = await getLeaderboard();

    return (
        <main className="flex min-h-screen flex-col items-center justify-start py-10 px-4">
            <div className="w-full max-w-3xl flex justify-between items-center mb-10">
                <Link href="/">
                    <Button variant="outline">← Home</Button>
                </Link>
                <Link href="/game">
                    <Button>Play Game</Button>
                </Link>
            </div>

            <h1 className="text-4xl font-bold mb-8">Leaderboard</h1>

            <div className="w-full max-w-2xl bg-white/5 rounded-lg border shadow-sm">
                <div className="grid grid-cols-3 gap-4 p-4 font-bold border-b bg-muted/50">
                    <div>Rank</div>
                    <div>Player</div>
                    <div className="text-right">Time</div>
                </div>
                {scores.length === 0 ? (
                    <div className="p-8 text-center text-muted-foreground">No scores yet. Be the first!</div>
                ) : (
                    scores.map((score, index) => (
                        <div key={score.id} className="grid grid-cols-3 gap-4 p-4 border-b last:border-0 hover:bg-muted/20 transition-colors">
                            <div className="font-mono text-muted-foreground">#{index + 1}</div>
                            <div className="font-semibold">{score.username}</div>
                            <div className="text-right font-mono">{(score.score / 1000).toFixed(2)}s</div>
                        </div>
                    ))
                )}
            </div>
        </main>
    );
}
