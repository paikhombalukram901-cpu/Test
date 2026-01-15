
import React from 'react';
import { User, Task, SystemStatus } from '../types';

interface OverviewProps {
  user: User;
}

const Overview: React.FC<OverviewProps> = ({ user }) => {
  const tasks: Task[] = [
    { id: '1', title: 'Update cloud storage config', priority: 'High', status: 'Todo' },
    { id: '2', title: 'Security patch v2.1 deployment', priority: 'Medium', status: 'In Progress' },
    { id: '3', title: 'Review audit logs', priority: 'Low', status: 'Done' },
  ];

  const status: SystemStatus = {
    cloudFlareTunnel: 'active',
    serverLoad: 24,
    uptime: '14d 6h 32m'
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Welcome Card */}
      <div className="lg:col-span-1 bg-slate-900 border border-slate-800 p-6 rounded-2xl flex flex-col justify-between shadow-xl ring-1 ring-white/5">
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">Welcome back, {user.name.split(' ')[0]}!</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Everything looks good today. You have {tasks.filter(t => t.status !== 'Done').length} pending tasks to look into.
          </p>
        </div>
        <div className="mt-8 flex items-center space-x-3 bg-slate-800/50 p-3 rounded-xl">
           <div className="w-10 h-10 bg-indigo-500/20 rounded-lg flex items-center justify-center">
             <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
             </svg>
           </div>
           <div>
             <p className="text-xs text-slate-500 font-medium">QUICK ACTION</p>
             <p className="text-sm font-semibold text-slate-200">Initialize New Project</p>
           </div>
        </div>
      </div>

      {/* Task Summary Card */}
      <div className="lg:col-span-1 bg-slate-900 border border-slate-800 rounded-2xl flex flex-col shadow-xl ring-1 ring-white/5 overflow-hidden">
        <div className="p-6 border-b border-slate-800 flex items-center justify-between">
          <h3 className="font-semibold text-lg text-white">Task Summary</h3>
          <span className="text-xs font-medium bg-slate-800 text-slate-400 px-2 py-1 rounded-md">View All</span>
        </div>
        <div className="p-6 space-y-4">
          {tasks.map((task) => (
            <div key={task.id} className="flex items-center justify-between group cursor-pointer">
              <div className="flex items-center space-x-3">
                <div className={`w-2 h-2 rounded-full ${task.priority === 'High' ? 'bg-red-500' : task.priority === 'Medium' ? 'bg-amber-500' : 'bg-emerald-500'}`}></div>
                <span className="text-sm text-slate-300 group-hover:text-white transition-colors">{task.title}</span>
              </div>
              <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                task.status === 'Done' ? 'bg-emerald-500/10 text-emerald-500' : 
                task.status === 'In Progress' ? 'bg-indigo-500/10 text-indigo-500' : 
                'bg-slate-800 text-slate-400'
              }`}>
                {task.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* System Status Card */}
      <div className="lg:col-span-1 bg-slate-900 border border-slate-800 p-6 rounded-2xl flex flex-col shadow-xl ring-1 ring-white/5">
        <h3 className="font-semibold text-lg text-white mb-6 flex items-center">
          <svg className="w-5 h-5 mr-2 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
          </svg>
          System Health
        </h3>
        
        <div className="space-y-6 flex-1">
          <div className="flex items-center justify-between">
            <span className="text-sm text-slate-400">Cloudflare Tunnel</span>
            <div className="flex items-center">
              <span className={`w-2 h-2 rounded-full mr-2 animate-pulse ${status.cloudFlareTunnel === 'active' ? 'bg-emerald-500' : 'bg-red-500'}`}></span>
              <span className={`text-sm font-semibold capitalize ${status.cloudFlareTunnel === 'active' ? 'text-emerald-500' : 'text-red-500'}`}>
                {status.cloudFlareTunnel}
              </span>
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-slate-400">Server Load</span>
              <span className="text-white font-medium">{status.serverLoad}%</span>
            </div>
            <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
               <div className="bg-indigo-500 h-full transition-all duration-500" style={{ width: `${status.serverLoad}%` }}></div>
            </div>
          </div>

          <div className="flex justify-between items-center py-2 border-t border-slate-800/50 mt-4">
             <span className="text-sm text-slate-400">System Uptime</span>
             <span className="text-sm font-mono text-slate-300">{status.uptime}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
