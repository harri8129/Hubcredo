import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../AuthContext.jsx";
import { toast } from 'react-toastify';
import { Mail, Lock, ArrowRight, Eye, EyeOff, Sparkles } from 'lucide-react';

const LoginPage = () => {
    const { login } = useAuth();
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({ email: '', password: '' });

    const handleSubmit = async () => {
        if (!formData.email || !formData.password) {
            toast.error('Please fill in all fields');
            return;
        }

        try {
            await login(formData.email, formData.password);
            toast.success('Login successful! Welcome back!');
            navigate("/dashboard");
        } catch (err) {
            toast.error(err.response?.data?.detail || err.response?.data?.non_field_errors?.[0] || 'Invalid credentials. Please try again.');
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSubmit();
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4 relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 opacity-20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 opacity-20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500 opacity-10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>

            <div className="w-full max-w-md relative z-10">
                {/* Glass Card */}
                <div className="bg-white/10 backdrop-blur-2xl rounded-3xl shadow-2xl p-10 border border-white/20 hover:border-white/30 transition-all duration-500">
                    {/* Logo/Icon with Animation */}
                    <div className="flex justify-center mb-8">
                        <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity"></div>
                            <div className="relative w-20 h-20 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-3xl flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform duration-300">
                                <Sparkles className="w-10 h-10 text-white animate-pulse" />
                            </div>
                        </div>
                    </div>

                    {/* Header */}
                    <div className="text-center mb-10">
                        <h1 className="text-4xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent mb-3">
                            Welcome Back
                        </h1>
                        <p className="text-purple-200/80 text-lg">Sign in to continue your journey</p>
                    </div>

                    {/* Form */}
                    <div className="space-y-6">
                        {/* Email Input */}
                        <div className="space-y-2">
                            <label className="block text-sm font-semibold text-purple-200">Email</label>
                            <div className="relative group">
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity"></div>
                                <div className="relative flex items-center">
                                    <div className="absolute left-4 pointer-events-none">
                                        <Mail className="w-5 h-5 text-purple-300" />
                                    </div>
                                    <input
                                        type="email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        onKeyPress={handleKeyPress}
                                        className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl text-white placeholder-purple-300/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                                        placeholder="your@email.com"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Password Input */}
                        <div className="space-y-2">
                            <label className="block text-sm font-semibold text-purple-200">Password</label>
                            <div className="relative group">
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity"></div>
                                <div className="relative flex items-center">
                                    <div className="absolute left-4 pointer-events-none">
                                        <Lock className="w-5 h-5 text-purple-300" />
                                    </div>
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        value={formData.password}
                                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                        onKeyPress={handleKeyPress}
                                        className="w-full pl-12 pr-14 py-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl text-white placeholder-purple-300/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                                        placeholder="Enter your password"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-4 text-purple-300 hover:text-white transition-colors"
                                    >
                                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Remember & Forgot */}
                        <div className="flex items-center justify-between text-sm">
                            <label className="flex items-center space-x-2 cursor-pointer group">
                                <input
                                    type="checkbox"
                                    className="w-4 h-4 text-purple-600 bg-white/10 border-white/20 rounded focus:ring-2 focus:ring-purple-500 cursor-pointer"
                                />
                                <span className="text-purple-200 group-hover:text-white transition-colors">Remember me</span>
                            </label>
                            <a href="#" className="text-purple-200 hover:text-white font-semibold transition-colors hover:underline">
                                Forgot password?
                            </a>
                        </div>

                        {/* Submit Button */}
                        <button
                            onClick={handleSubmit}
                            className="relative w-full group overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 rounded-2xl blur-md group-hover:blur-lg transition-all"></div>
                            <div className="relative bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white py-4 rounded-2xl font-bold shadow-2xl transform group-hover:scale-[1.02] transition-all duration-300 flex items-center justify-center space-x-2">
                                <span className="text-lg">Sign In</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </button>
                    </div>

                    {/* Divider */}
                    <div className="flex items-center my-8">
                        <div className="flex-1 border-t border-white/20"></div>
                        <span className="px-4 text-sm text-purple-200/60">or</span>
                        <div className="flex-1 border-t border-white/20"></div>
                    </div>

                    {/* Sign Up Link */}
                    <div className="text-center">
                        <p className="text-purple-200/80">
                            Don't have an account?{' '}
                            <Link
                                to="/signup"
                                className="text-white font-bold hover:text-purple-300 transition-colors underline decoration-purple-400 hover:decoration-purple-200"
                            >
                                Sign Up
                            </Link>
                        </p>
                    </div>

                    {/* Bottom Accent */}
                    <div className="mt-8 flex justify-center">
                        <div className="h-1 w-32 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-full"></div>
                    </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -z-10 -top-10 -left-10 w-40 h-40 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
                <div className="absolute -z-10 -bottom-10 -right-10 w-40 h-40 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
        </div>
    );
};

export default LoginPage;