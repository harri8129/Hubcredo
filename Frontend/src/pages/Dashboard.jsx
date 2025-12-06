import React from "react";
import { useAuth } from "../AuthContext.jsx";
import { LogOut, User, Sparkles, Mail, Lock } from 'lucide-react';

const Dashboard = () => {
    const { user, logout } = useAuth();

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-4">
            {/* Header */}
            <div className="max-w-6xl mx-auto">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 mb-6 border border-gray-100">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
                                <Sparkles className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h2 className="text-xl font-bold text-gray-800">Dashboard</h2>
                                <p className="text-sm text-gray-500">Welcome back!</p>
                            </div>
                        </div>
                        <button
                            onClick={logout}
                            className="flex items-center space-x-2 px-4 py-2 bg-red-50 text-red-600 rounded-xl hover:bg-red-100 transition-all"
                        >
                            <LogOut className="w-4 h-4" />
                            <span className="font-medium">Logout</span>
                        </button>
                    </div>
                </div>

                {/* Main Content */}
                <div className="grid md:grid-cols-2 gap-6">
                    {/* Profile Card */}
                    <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                        <div className="flex flex-col items-center text-center">
                            <div className="w-24 h-24 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mb-4 shadow-xl">
                                <User className="w-12 h-12 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">{user?.username || 'User'}</h3>
                            <p className="text-gray-500 mb-6">{user?.email}</p>

                            <div className="w-full bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-4 space-y-3">
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-gray-600">User ID</span>
                                    <span className="font-semibold text-gray-800">#{user?.id}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-gray-600">Status</span>
                                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">Active</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-gray-600">Member Since</span>
                                    <span className="font-semibold text-gray-800">Dec 2025</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Stats Cards */}
                    <div className="space-y-6">
                        <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl shadow-lg p-6 text-white">
                            <div className="flex items-center justify-between mb-4">
                                <h4 className="text-lg font-semibold">Total Projects</h4>
                                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                                    <Sparkles className="w-5 h-5" />
                                </div>
                            </div>
                            <p className="text-4xl font-bold mb-2">12</p>
                            <p className="text-indigo-100 text-sm">+3 from last month</p>
                        </div>

                        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                            <div className="flex items-center justify-between mb-4">
                                <h4 className="text-lg font-semibold text-gray-800">Account Activity</h4>
                                <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center">
                                    <Mail className="w-5 h-5 text-indigo-600" />
                                </div>
                            </div>
                            <p className="text-4xl font-bold text-gray-800 mb-2">47</p>
                            <p className="text-gray-500 text-sm">Actions this week</p>
                        </div>
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="mt-6 bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                    <h3 className="text-lg font-bold text-gray-800 mb-4">Quick Actions</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            { label: 'Edit Profile', icon: User },
                            { label: 'Settings', icon: Lock },
                            { label: 'Messages', icon: Mail },
                            { label: 'Help', icon: Sparkles }
                        ].map((action, i) => (
                            <button
                                key={i}
                                className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-xl hover:bg-gradient-to-br hover:from-indigo-50 hover:to-purple-50 transition-all group"
                            >
                                <action.icon className="w-6 h-6 text-gray-400 group-hover:text-indigo-600 mb-2 transition-colors" />
                                <span className="text-sm font-medium text-gray-700">{action.label}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;