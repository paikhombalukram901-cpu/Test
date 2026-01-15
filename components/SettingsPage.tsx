
import React from 'react';

const SettingsPage: React.FC = () => {
  return (
    <div className="max-w-4xl space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-white">Settings</h2>
        <p className="text-slate-400 text-sm">Configure your account and dashboard preferences.</p>
      </div>
      
      <div className="space-y-6">
        <section className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl ring-1 ring-white/5">
          <h3 className="text-lg font-semibold text-white mb-6">Profile Settings</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Display Name</label>
              <input type="text" defaultValue="John Doe" className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2.5 text-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Email Notification</label>
              <div className="flex items-center h-10">
                 <input type="checkbox" className="w-5 h-5 accent-indigo-500" defaultChecked />
                 <span className="ml-3 text-sm text-slate-300">Enable daily summaries</span>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl ring-1 ring-white/5">
          <h3 className="text-lg font-semibold text-white mb-6">Cloudflare Connectivity</h3>
          <div className="p-4 bg-indigo-500/5 border border-indigo-500/20 rounded-xl flex items-start space-x-4">
             <div className="w-10 h-10 bg-indigo-500/20 rounded-full flex items-center justify-center shrink-0">
               <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
               </svg>
             </div>
             <div>
               <h4 className="text-indigo-300 font-medium">Tunnel Configuration</h4>
               <p className="text-sm text-slate-400 mt-1">Your local tunnel is currently connected to <code>app.kaoru.qzz.io</code>. Traffic is being routed securely through your dedicated gateway.</p>
               <button className="mt-4 text-xs font-bold text-indigo-400 hover:text-indigo-300 uppercase tracking-widest transition-colors">Reset Connector Key</button>
             </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SettingsPage;
