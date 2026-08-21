import React from 'react';
import { ExtensionItem, PageRoute } from '../types';
import { PreviewSlideshow } from './PreviewSlideshow';

interface ExtensionCardProps {
  extension: ExtensionItem;
  onRouteChange: (route: PageRoute) => void;
  onOpenInstallGuide: (ext: ExtensionItem) => void;
  onDownload: (ext: ExtensionItem, dlItem?: { browser: string; url: string; fileName: string }) => void;
}

const renderFormattedTitle = (title: string) => {
  if (title.includes(' (')) {
    const [ja, en] = title.split(' (');
    return (
      <>
        <span className="block font-bold text-zinc-900 group-hover:text-emerald-700 transition-colors text-base">{ja}</span>
        <span className="block text-sm font-normal text-zinc-600 mt-0.5">
          ({en}
        </span>
      </>
    );
  }
  return <span className="font-bold text-zinc-900 group-hover:text-emerald-700 transition-colors text-base">{title}</span>;
};

export const ExtensionCard: React.FC<ExtensionCardProps> = ({
  extension,
  onRouteChange,
  onOpenInstallGuide,
  onDownload,
}) => {
  return (
    <div className="bg-white border border-zinc-200 rounded-lg p-5 flex flex-col justify-between hover:border-zinc-300 transition-colors">
      <div>
        <div className="flex items-start justify-between gap-4 mb-3">
          <div>
            <button
              onClick={() => onRouteChange({ type: 'detail', extensionId: extension.id })}
              className="group text-left block focus:outline-none cursor-pointer"
              aria-label={`${extension.name} の詳細を見る`}
            >
              <h3 className="leading-snug">
                {renderFormattedTitle(extension.name)}
              </h3>
            </button>
            <div className="flex items-center gap-2 mt-1 text-xs text-zinc-500">
              <span>v{extension.version}</span>
              <span>/</span>
              <span>更新日: {extension.lastUpdated}</span>
            </div>
          </div>

          <span
            className={`text-xs font-medium px-2 py-0.5 rounded border flex-shrink-0 ${
              extension.status === 'published'
                ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                : 'bg-zinc-100 text-zinc-700 border-zinc-200'
            }`}
          >
            {extension.status === 'published' ? '公開中' : '開発中'}
          </span>
        </div>

        <p className="text-sm text-zinc-700 mb-3 leading-relaxed min-h-[4.25rem] flex items-start">
          {extension.tagline}
        </p>

        <div className="flex flex-wrap items-center gap-1 mb-4">
          <span className="text-xs text-zinc-500 mr-1">対応:</span>
          {extension.supportedBrowsers.map((b) => (
            <span
              key={b}
              className="text-xs px-1.5 py-0.5 rounded bg-zinc-100 text-zinc-700 border border-zinc-200"
            >
              {b}
            </span>
          ))}
        </div>

        <PreviewSlideshow
          images={extension.previewImages}
          extensionName={extension.name}
        />
      </div>

      <div className="space-y-2 pt-3 border-t border-zinc-200">
        <div className="grid grid-cols-2 gap-2">
          {extension.downloads && extension.downloads.length > 1 ? (
            <button
              onClick={() => onRouteChange({ type: 'detail', extensionId: extension.id })}
              className="w-full py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-sm rounded transition-colors cursor-pointer"
            >
              ダウンロード選択
            </button>
          ) : (
            <button
              onClick={() => onDownload(extension, extension.downloads?.[0])}
              className="w-full py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-sm rounded transition-colors cursor-pointer"
            >
              ダウンロード
            </button>
          )}

          <button
            onClick={() => onRouteChange({ type: 'detail', extensionId: extension.id })}
            className="w-full py-2 bg-white hover:bg-zinc-100 text-zinc-900 font-medium text-sm rounded border border-zinc-300 transition-colors cursor-pointer"
          >
            詳細情報
          </button>
        </div>

        <div className="flex items-center justify-between text-xs pt-1">
          <button
            onClick={() => onRouteChange({ type: 'privacy', extensionId: extension.id })}
            className="text-emerald-700 hover:underline cursor-pointer"
          >
            プライバシーポリシー
          </button>

          <button
            onClick={() => onOpenInstallGuide(extension)}
            className="text-zinc-500 hover:underline cursor-pointer"
          >
            インストール手順
          </button>
        </div>
      </div>
    </div>
  );
};


