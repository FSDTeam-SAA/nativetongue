import React from 'react';
import {
    Flame, TrendingUp, Trophy, Activity, DollarSign,
    ArrowRight
} from 'lucide-react';

// --- DATA MOCK ---
const trendingPicks = [
    { id: 1, sport: 'NBA', matchup: 'Lakers vs Warriors', pick: 'Over 215.5', odds: '+110', hot: true },
    { id: 2, sport: 'NBA', matchup: 'Man City vs Arsenal', pick: 'City -1.5', odds: '-120', hot: true },
    { id: 3, sport: 'NBA', matchup: 'Chiefs vs Bills', pick: 'Mahomes 2+ TDs', odds: '+140', hot: false },
    { id: 4, sport: 'NBA', matchup: 'Djokovic vs Alcaraz', pick: 'Alcaraz ML', odds: '-110', hot: true },
];

const stats = [
    { label: 'Total Bets', value: '1,247', change: '+12.5%', icon: <Activity className="text-blue-400" />, color: 'bg-blue-400/10' },
    { label: 'Active Bets', value: '23', change: '+4', icon: <Trophy className="text-purple-400" />, color: 'bg-purple-400/10' },
    { label: 'Win Rate', value: '64.2%', change: '+2.1%', icon: <Activity className="text-teal-400" />, color: 'bg-teal-400/10' },
    { label: 'Total Winnings', value: '$12,450', change: '+18.2%', icon: <DollarSign className="text-orange-400" />, color: 'bg-orange-400/10' },
];


const BettingDashboard = () => {
    return (
        <div className="bg-[#0d0d0d] text-white  font-sans space-y-12">

            {/* SECTION 1: TRENDING & METRICS (image_2555fa.png) */}
            <section className=" space-y-6">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <div className="p-2 bg-orange-500/10 rounded-lg">
                            <Flame className="text-orange-500" size={20} />
                        </div>
                        <h2 className="text-xl font-bold">Trending Now</h2>
                    </div>
                    <button className="text-teal-500 text-sm font-medium flex items-center gap-1 hover:underline">
                        View All <ArrowRight size={14} />
                    </button>
                </div>

                {/* Picks Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {trendingPicks.map((pick) => (
                        <div key={pick.id} className="bg-[#1a1a1a] p-5 rounded-2xl border border-gray-800/50 relative overflow-hidden">
                            <div className="flex justify-between items-start mb-4">
                                <span className="text-[10px] font-bold bg-[#FFFFFF0D] text-gray-400 px-2 py-0.5 rounded uppercase">{pick.sport}</span>
                                {pick.hot && (
                                    <div className="flex items-center gap-1 text-orange-500 text-[10px] font-bold uppercase">
                                        <TrendingUp size={12} /> Hot
                                    </div>
                                )}
                            </div>
                            <h3 className="font-bold text-lg mb-1">{pick.matchup}</h3>
                            <div className="flex justify-between items-end">
                                <p className="text-gray-500 text-sm">{pick.pick}</p>
                                <span className="bg-[#10b981]/10 text-[#10b981] px-3 py-1 rounded-lg text-sm font-bold border border-[#10b981]/20">
                                    {pick.odds}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {stats.map((stat, i) => (
                        <div key={i} className="bg-[#1a1a1a] p-6 rounded-2xl border border-gray-800/50">
                            <div className="flex justify-between items-start mb-6">
                                <div className={`p-3 rounded-xl ${stat.color}`}>
                                    {stat.icon}
                                </div>
                                <span className="bg-green-500/10 text-green-500 text-[10px] font-bold px-2 py-1 rounded-full">
                                    {stat.change}
                                </span>
                            </div>
                            <p className="text-gray-500 text-xs font-medium uppercase tracking-wider">{stat.label}</p>
                            <p className="text-2xl font-bold mt-1">{stat.value}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default BettingDashboard;