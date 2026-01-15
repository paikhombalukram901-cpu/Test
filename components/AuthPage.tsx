
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

interface AuthPageProps {
  onLogin: (name: string, email: string) => void;
  mode: 'signin' | 'signup';
}

const AuthPage: React.FC<AuthPageProps> = ({ onLogin, mode }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mode === 'signup' && !name) return alert('Please enter your name');
    if (!email || !password) return alert('Please fill all fields');
    
    // Simulate successful auth
    onLogin(mode === 'signup' ? name : 'User Name', email);
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-600 rounded-2xl mb-4 shadow-lg shadow-indigo-500/20">
            <span className="text-white font-bold text-2xl">K</span>
          </div>
          <h1 className="text-3xl font-extrabold text-white tracking-tight">
            {mode === 'signin' ? 'Sign in to Kaoru' : 'Create an account'}
          </h1>
          <p className="text-slate-400 mt-2">
            {mode === 'signin' ? 'Welcome back! Please enter your details.' : 'Get started with your developer dashboard.'}
          </p>
        </div>

        <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 shadow-2xl ring-1 ring-white/5">
          <form onSubmit={handleSubmit} className="space-y-6">
            {mode === 'signup' && (
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-slate-300">Full Name</label>
                <input 
                  type="text" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all placeholder-slate-500"
                  placeholder="John Doe"
                />
              </div>
            )}
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-slate-300">Email Address</label>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all placeholder-slate-500"
                placeholder="you@example.com"
              />
            </div>
            <div className="space-y-1.5">
              <div className="flex justify-between items-center">
                <label className="text-sm font-medium text-slate-300">Password</label>
                {mode === 'signin' && (
                  <a href="#" className="text-xs text-indigo-400 hover:text-indigo-300 transition-colors">Forgot password?</a>
                )}
              </div>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all placeholder-slate-500"
                placeholder="••••••••"
              />
            </div>

            <button 
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-xl transition-all shadow-lg shadow-indigo-600/20 active:scale-[0.98]"
            >
              {mode === 'signin' ? 'Sign In' : 'Sign Up'}
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-slate-800 text-center">
            <p className="text-sm text-slate-400">
              {mode === 'signin' ? "Don't have an account?" : "Already have an account?"}
              <Link to={mode === 'signin' ? "/signup" : "/login"} className="ml-2 text-indigo-400 font-semibold hover:text-indigo-300 transition-colors">
                {mode === 'signin' ? 'Sign up' : 'Sign in'}
              </Link>
            </p>
          </div>
        </div>

        <p className="text-center mt-10 text-xs text-slate-500 uppercase tracking-widest font-medium">
          Powered by Kaoru Systems
        </p>
      </div>
    </div>
  );
};

export default AuthPage;
