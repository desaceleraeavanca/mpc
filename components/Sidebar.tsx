
import React from 'react';
import type { Chapter } from '../types';
import { BookOpen } from './Icons';

interface SidebarProps {
  chapters: Chapter[];
  activeChapterId: number;
  onSelectChapter: (id: number) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ chapters, activeChapterId, onSelectChapter }) => {
  return (
    <aside className="w-64 md:w-80 bg-slate-800 text-white flex flex-col flex-shrink-0">
      <div className="p-5 border-b border-slate-700 flex items-center space-x-3">
        <div className="bg-indigo-600 p-2 rounded-lg">
          <BookOpen className="w-7 h-7 text-white" />
        </div>
        <div>
          <h1 className="text-md font-bold text-white">Produtividade Caótica</h1>
          <p className="text-xs text-slate-400">SaaS Edition</p>
        </div>
      </div>
      <nav className="flex-1 overflow-y-auto p-3 space-y-1">
        {chapters.map((chapter) => (
          <button
            key={chapter.id}
            onClick={() => onSelectChapter(chapter.id)}
            className={`w-full text-left px-3 py-2.5 rounded-md text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 ${
              activeChapterId === chapter.id
                ? 'bg-indigo-600 text-white font-semibold shadow-md'
                : 'text-slate-300 hover:bg-slate-700 hover:text-white'
            }`}
          >
            {chapter.shortTitle}
          </button>
        ))}
      </nav>
       <div className="p-4 border-t border-slate-700 text-center text-xs text-slate-500">
          <p>&copy; 2024 Caos Inc.</p>
      </div>
    </aside>
  );
};
