import React from 'react';
import { PageRoute } from '../types';

interface HeaderProps {
  currentRoute: PageRoute;
  onRouteChange: (route: PageRoute) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentRoute, onRouteChange }) => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-zinc-200 bg-white">
      <div className="w-full px-6 sm:px-8 lg:px-12 h-16 flex items-center justify-between">



        <button
          onClick={() => onRouteChange({ type: 'list' })}
          className="group text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 rounded-lg p-1 -ml-1 transition-all"
          aria-label="Altiveil Extension List"
        >
          <div className="flex items-baseline gap-2">
            <span className="font-mono font-black text-xl tracking-[0.14em] text-zinc-950 uppercase group-hover:text-zinc-700 transition-colors">
              ALTIVEIL
            </span>
            <span className="font-mono font-bold text-xs tracking-[0.2em] text-zinc-400 uppercase">
              / EXTENSION LIST
            </span>
          </div>
        </button>

        <nav className="flex items-center gap-2">
          <button
            onClick={() => onRouteChange({ type: 'list' })}
            className={`px-3 py-1.5 rounded text-sm font-medium transition-colors ${
              currentRoute.type === 'list'
                ? 'bg-zinc-900 text-white'
                : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100'
            }`}
          >
            拡張機能一覧
          </button>

          <button
            onClick={() => onRouteChange({ type: 'privacy' })}
            className={`px-3 py-1.5 rounded text-sm font-medium transition-colors ${
              currentRoute.type === 'privacy'
                ? 'bg-zinc-900 text-white'
                : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100'
            }`}
          >
            プライバシーポリシー
          </button>
        </nav>
      </div>
    </header>
  );
};
