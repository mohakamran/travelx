import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const SignIn = () => {
    return (
        <div className="min-h-screen relative flex items-center justify-center overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop"
                    alt="Background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
            </div>

            {/* Content */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative z-10 w-full max-w-md p-8 bg-surface/30 backdrop-blur-lg border border-white/10 rounded-2xl shadow-2xl"
            >
                <Link to="/" className="inline-flex items-center text-sm text-text-muted hover:text-white transition-colors mb-8">
                    <ArrowLeft size={16} className="mr-2" />
                    Back to Home
                </Link>

                <div className="text-center mb-8">
                    <h1 className="text-3xl font-heading font-bold text-white mb-2">Welcome Back</h1>
                    <p className="text-text-muted">Sign in to continue your journey</p>
                </div>

                <form className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-text-muted mb-2">Email Address</label>
                        <input
                            type="email"
                            className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-primary focus:outline-none transition-colors"
                            placeholder="explorer@example.com"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-text-muted mb-2">Password</label>
                        <input
                            type="password"
                            className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-primary focus:outline-none transition-colors"
                            placeholder="••••••••"
                        />
                    </div>

                    <div className="flex items-center justify-between text-sm">
                        <label className="flex items-center text-text-muted cursor-pointer">
                            <input type="checkbox" className="mr-2 rounded border-white/10 bg-white/5 text-primary focus:ring-primary" />
                            Remember me
                        </label>
                        <a href="#" className="text-primary hover:underline">Forgot password?</a>
                    </div>

                    <button type="submit" className="w-full bg-primary text-white font-bold py-3 rounded-lg hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25">
                        Sign In
                    </button>
                </form>

                <div className="mt-8 text-center text-sm text-text-muted">
                    Don't have an account? <a href="#" className="text-white hover:underline font-medium">Sign up</a>
                </div>
            </motion.div>
        </div>
    );
};

export default SignIn;
