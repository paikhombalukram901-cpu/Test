
import React from 'react';

const FilesPage: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-white">Local Files</h2>
          <p className="text-slate-400 text-sm">Access and manage your files stored locally via Cloudflare Tunnel.</p>
        </div>
        <div className="flex space-x-2">
          <button className="bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
            Upload
          </button>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
            Sync
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {['documents', 'backups', 'media', 'config', 'logs'].map((folder) => (
          <div key={folder} className="bg-slate-900 border border-slate-800 p-4 rounded-xl hover:border-indigo-500/50 transition-all cursor-pointer group">
            <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center mb-4 group-hover:bg-indigo-500/10 transition-colors">
              <svg className="w-6 h-6 text-slate-400 group-hover:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
              </svg>
            </div>
            <h4 className="font-semibold text-slate-200 capitalize">{folder}</h4>
            <p className="text-xs text-slate-500 mt-1">12 files • 1.2 GB</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilesPage;
