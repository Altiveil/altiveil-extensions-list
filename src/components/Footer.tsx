import React from 'react';
import { PageRoute } from '../types';

interface FooterProps {
  onRouteChange: (route: PageRoute) => void;
}

export const Footer: React.FC<FooterProps> = ({ onRouteChange }) => {
  return (
    <footer className="w-full border-t border-zinc-200 bg-white py-6 mt-auto">
      <div className="w-full px-6 sm:px-8 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-center sm:text-left">
          <p className="font-bold text-zinc-900 text-sm mb-0.5">
            Altiveil
          </p>
          <p className="text-xs text-zinc-500">
            &copy; {new Date().getFullYear()} Altiveil. All rights reserved.
          </p>
        </div>
        
        <div className="flex items-center gap-6 text-sm text-zinc-600">
          <button onClick={() => onRouteChange({ type: 'list' })} className="hover:text-zinc-900 transition-colors cursor-pointer">
            拡張機能一覧
          </button>
          <button onClick={() => onRouteChange({ type: 'privacy' })} className="hover:text-zinc-900 transition-colors cursor-pointer">
            プライバシーポリシー
          </button>
        </div>
      </div>
    </footer>
  );
};

