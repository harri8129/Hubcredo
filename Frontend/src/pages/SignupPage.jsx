import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../AuthContext.jsx";
import { toast } from 'react-toastify';
import { Mail, Lock, User, ArrowRight, Eye, EyeOff } from 'lucide-react';

const SignupPage = () => {
    const { signup } = useAuth();
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({ email: '', username: '', password: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await signup(formData.email, formData.password, formData.username || null);
            toast.success('Account created successfully! Please login.');
            navigate("/login");
        } catch (err) {
            if (err.response?.data?.email) {
                toast.error(err.response.data.email[0] || err.response.data.email);
            } else {
                toast.error('Signup failed. Please try again.');
            }
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-500 via-pink-500 to-rose-500 flex items-center justify-center p-4 relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-20 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
            </div>

            <div className="w-full max-w-md relative z-10">
                {/* Glass Card */}
                <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/20">
                    {/* Logo/Icon */}
                    <div className="flex justify-center mb-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg">
                            <User className="w-8 h-8 text-white" />
                        </div>
                    </div>

                    {/* Header */}
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-gray-800 mb-2">Create Account</h1>
                        <p className="text-gray-500">Start your journey with us today</p>
                    </div>

                    {/* Form */}
                    <div className="space-y-5">
                        {/* Email Input */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Email</label>
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <input
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                                    placeholder="your@email.com"
                                    required
                                />
                            </div>
                        </div>

                        {/* Username Input */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Username (Optional)</label>
                            <div className="relative">
                                <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <input
                                    type="text"
                                    value={formData.username}
                                    onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                                    className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                                    placeholder="Choose a username"
                                />
                            </div>
                        </div>

                        {/* Password Input */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Password</label>
                            <div className="relative">
                                <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <input
                                    type={showPassword ? "text" : "password"}
                                    value={formData.password}
                                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                    className="w-full pl-12 pr-12 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                                    placeholder="Create a strong password"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                >
                                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                </button>
                            </div>
                            <p className="text-xs text-gray-500">Must be at least 6 characters</p>
                        </div>

                        {/* Terms Checkbox */}
                        <label className="flex items-start space-x-2 cursor-pointer">
                            <input type="checkbox" className="w-4 h-4 mt-1 text-purple-600 rounded focus:ring-2 focus:ring-purple-500" required />
                            <span className="text-sm text-gray-600">
                                I agree to the <a href="#" className="text-purple-600 hover:text-purple-700 font-medium">Terms of Service</a> and <a href="#" className="text-purple-600 hover:text-purple-700 font-medium">Privacy Policy</a>
                            </span>
                        </label>

                        {/* Submit Button */}
                        <button
                            onClick={handleSubmit}
                            className="w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center space-x-2"
                        >
                            <span>Create Account</span>
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Sign In Link */}
                    <div className="text-center mt-6">
                        <p className="text-gray-600">
                            Already have an account?{' '}
                            <Link to="/login" className="text-purple-600 hover:text-purple-700 font-semibold">
                                Sign In
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignupPage;