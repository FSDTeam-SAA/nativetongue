import React from 'react';
import { Trophy, Users, ArrowUpRight, Star } from 'lucide-react';
import Image from 'next/image';

const topBettorsData = [
    { rank: '#1', name: 'CryptoKing', followers: '12.4k', winRate: '80%', img: '/image1.png' },
    { rank: '#2', name: 'TechGuru', followers: '8.7k', winRate: '72%', img: '/image2.png' },
    { rank: '#3', name: 'TravelNinja', followers: '5.3k', winRate: '66%', img: '/image3.png' },
    { rank: '#4', name: 'FitnessFreak', followers: '4.1k', winRate: '62%', img: '/image4.png' },
];

const SidebarSection = () => {
    return (
        <div className="w-full max-w-full sm:max-w-[400px] bg-[#0d0d0d] text-white  font-sans space-y-10">

            {/* 1. Big Wins Today Section */}
            <section className="space-y-4">
                <div className="flex items-center gap-2 mb-4 sm:mb-6">
                    <Trophy className="text-yellow-500" size={24} />
                    <h2 className="text-lg sm:text-xl font-bold tracking-tight">Big Wins Today</h2>
                </div>

                <div className="space-y-4">
                    {[{ img: '/football.jpg', amount: '$12,450', winner: 'Alex M.', legs: '12-Leg Parlay', profit: '+2400' },
                    { img: '/football1.jpg', amount: '$8,200', winner: 'Jordan K.', legs: 'Super Bowl Prop', profit: '+1800' }]
                        .map((win, idx) => (
                            <div
                                key={idx}
                                className="relative h-40 sm:h-48 rounded-3xl overflow-hidden group cursor-pointer border border-gray-800"
                            >
                                <Image
                                    width={800}
                                    height={600}
                                    src={win.img}
                                    alt="Stadium"
                                    className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-4 sm:p-6 flex flex-col justify-end">
                                    <div className="flex justify-between items-end">
                                        <div className="space-y-1">
                                            <div className="flex items-center gap-2">
                                                <span className="bg-[#facc15]/20 text-[#facc15] text-[9px] sm:text-[10px] font-bold px-2 py-0.5 rounded">{win.profit}</span>
                                                <p className="text-[9px] sm:text-xs font-semibold text-gray-300 uppercase tracking-wide">{win.legs}</p>
                                            </div>
                                            <h3 className="text-2xl sm:text-3xl font-black text-white">{win.amount}</h3>
                                            <p className="text-[10px] sm:text-[11px] text-gray-400 font-medium">Won by <span className="text-white">{win.winner}</span></p>
                                        </div>
                                        <div className="bg-white/10 p-2 rounded-full backdrop-blur-md group-hover:bg-[#10b981] transition-colors border border-white/10">
                                            <ArrowUpRight size={20} className="text-white" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </section>

            {/* 2. Top Bettors Section */}
            <section className="space-y-6">
                <div className="flex items-center gap-2">
                    <Users className="text-[#a855f7]" size={24} />
                    <h2 className="text-lg sm:text-xl font-bold tracking-tight">Top Bettors</h2>
                </div>

                <div className="space-y-3">
                    {topBettorsData.map((bettor) => (
                        <div
                            key={bettor.rank}
                            className="bg-[#1a1a1a] p-3 sm:p-3.5 rounded-2xl border border-gray-800/60 flex flex-col sm:flex-row items-start sm:items-center justify-between hover:border-gray-700 transition cursor-pointer gap-3 sm:gap-0"
                        >
                            <div className="flex items-center gap-3 sm:gap-4 w-full sm:w-auto">
                                <span className="text-[10px] sm:text-[11px] font-bold text-gray-500 w-5">{bettor.rank}</span>
                                <div className="relative flex-shrink-0">
                                    <Image
                                        width={44}
                                        height={44}
                                        src={bettor.img}
                                        className="w-10 h-10 sm:w-11 sm:h-11 rounded-full object-cover border border-gray-800 ring-1 ring-gray-700/50"
                                        alt={bettor.name}
                                    />
                                </div>
                                <div>
                                    <h4 className="text-[14px] sm:text-[15px] font-bold leading-none mb-1 group-hover:text-[#10b981] transition-colors">{bettor.name}</h4>
                                    <p className="text-[10px] sm:text-[11px] text-gray-500 font-medium">{bettor.followers} Followers</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-1.5 text-[#10b981] bg-[#10b981]/5 px-2.5 py-1.5 rounded-lg border border-[#10b981]/10">
                                <Star size={12} fill="currentColor" />
                                <p className="text-[11px] sm:text-[12px] font-bold">
                                    {bettor.winRate} <span className="text-gray-500 font-normal ml-0.5">Win Rate</span>
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

        </div>
    );
};

export default SidebarSection;
