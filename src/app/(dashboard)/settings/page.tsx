import React from 'react';
import { Edit3, Bell, Check, X } from 'lucide-react';
import Image from 'next/image';

const posts = [
    {
        id: 1,
        sport: 'NBA',
        matchup: 'Lakers vs Warriors',
        pick: 'Lakers -5.5',
        analysis: 'Lakers have dominated this matchup all season. Strong value here.',
        odds: '-110',
        time: '2 hours ago',
        status: 'win'
    },
    {
        id: 2,
        sport: 'NFL',
        matchup: 'Chiefs vs Bills',
        pick: 'Chiefs -3.5',
        analysis: 'Both teams are evenly matched, but the Chiefs have home-field advantage.',
        odds: '-120',
        time: '3 hours ago',
        status: 'loss'
    },
    {
        id: 3,
        sport: 'MLB',
        matchup: 'Yankees vs Red Sox',
        pick: 'Yankees -1.5',
        analysis: 'Rivalry games are unpredictable, but the Yankees have a solid pitching lineup.',
        odds: '+105',
        time: '1 hour ago',
        status: 'win'
    }
];

const UserProfile = () => {
    return (
        <div className="min-h-screen bg-[#0d0d0d] text-white p-4 md:p-2 font-sans">
            <div className=" mx-auto space-y-8">

                {/* Header Section */}
                <header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="flex items-center gap-5">
                        <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-gray-700">
                            <Image
                                width={100}
                                height={100}
                                src="/profile.png"
                                alt="Profile"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold">SharpShooter</h1>
                            <p className="text-gray-500 text-sm">Joined January 2024</p>
                        </div>
                    </div>

                    <div className="flex gap-3">
                        <button className="flex items-center gap-2 bg-[linear-gradient(117.71deg,rgba(63,226,148,0.75)_13.45%,#008246_53.8%)] text-white border border-[#10b981] px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#10b981]/20 transition">
                            <Edit3 size={18} /> Edit Profile
                        </button>
                        <button className="flex items-center gap-2 bg-[linear-gradient(117.71deg,rgba(63,226,148,0.75)_13.45%,#008246_53.8%)] text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-[#059669] transition">
                            <Bell size={18} /> Manage Notifications
                        </button>
                    </div>
                </header>

                {/* Betting Record Card */}
                <section className="bg-[#1a1a1a] rounded-xl border border-gray-800 overflow-hidden">
                    <div className="p-6 text-center border-b border-gray-800">
                        <h2 className="text-gray-400 font-semibold tracking-wide uppercase text-sm">Betting Record</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-6">
                            <div>
                                <p className="text-2xl font-bold">12-5</p>
                                <p className="text-xs text-gray-500 mt-1">Record</p>
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-[#10b981]">12</p>
                                <p className="text-xs text-gray-500 mt-1">Wins</p>
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-[#ef4444]">5</p>
                                <p className="text-xs text-gray-500 mt-1">Losses</p>
                            </div>
                            <div>
                                <p className="text-2xl font-bold">70.6%</p>
                                <p className="text-xs text-gray-500 mt-1">Win Rate</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#141414] py-3 text-center">
                        <p className="text-gray-500 text-sm">2 pending picks</p>
                    </div>
                </section>

                {/* Posts Section */}
                <section className="space-y-4">
                    <h2 className="text-xl font-bold px-1">Posts (6)</h2>

                    <div className="space-y-4">
                        {posts.map((post) => (
                            <div
                                key={post.id}
                                className={`bg-[#1a1a1a] rounded-xl border p-6 relative transition-all hover:bg-[#222] ${post.status === 'win' ? 'border-[#10b981]/30' : 'border-[#ef4444]/30'
                                    }`}
                            >
                                {/* Status Icon */}
                                <div className="absolute top-6 right-6">
                                    {post.status === 'win' ? (
                                        <Check className="text-[#10b981]" size={20} />
                                    ) : (
                                        <X className="text-[#ef4444]" size={20} />
                                    )}
                                </div>

                                {/* Content */}
                                <div className="space-y-2">
                                    <span className="text-[10px] font-bold bg-[#f59e0b]/20 text-[#f59e0b] px-2 py-0.5 rounded uppercase">
                                        {post.sport}
                                    </span>
                                    <h3 className="text-lg font-bold">{post.matchup}</h3>
                                    <p className="text-gray-300 text-sm font-medium">{post.pick}</p>
                                    <p className="text-gray-500 text-sm leading-relaxed">{post.analysis}</p>
                                </div>

                                {/* Footer Info */}
                                <div className="mt-6 pt-4 border-t border-gray-800 flex justify-between items-center text-xs font-semibold text-gray-500">
                                    <p>Odds: <span className="text-white">{post.odds}</span></p>
                                    <p>{post.time}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default UserProfile;