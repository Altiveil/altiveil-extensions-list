import React from 'react';
import { ExtensionItem, PageRoute } from '../types';
import { PreviewSlideshow } from './PreviewSlideshow';

interface ExtensionDetailPageProps {
  extension: ExtensionItem;
  onRouteChange: (route: PageRoute) => void;
  onOpenInstallGuide: (ext: ExtensionItem) => void;
  onDownload: (ext: ExtensionItem, dlItem?: { browser: string; url: string; fileName: string }) => void;
}

export const ExtensionDetailPage: React.FC<ExtensionDetailPageProps> = ({
  extension,
  onRouteChange,
  onOpenInstallGuide,
  onDownload,
}) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6">
      <button
        onClick={() => onRouteChange({ type: 'list' })}
        className="text-sm text-zinc-600 hover:text-zinc-900 mb-6 underline block"
      >
        ← 拡張機能一覧に戻る
      </button>

      <div className="bg-white border border-zinc-200 rounded-lg mb-6 overflow-hidden">
        <div className="flex flex-col sm:flex-row items-stretch justify-between gap-0 border-b border-zinc-200">


          <div className="flex-1 p-6">
            <div className="flex items-start justify-between gap-2 mb-2">
              <div>
                {extension.name.includes(' (') ? (
                  <>
                    <h1 className="text-xl sm:text-2xl font-bold text-black font-sans tracking-tight">
                      {extension.name.split(' (')[0]}
                    </h1>
                    <p className="text-sm sm:text-base font-normal text-zinc-600 mt-0.5">
                      ({extension.name.split(' (')[1]}
                    </p>
                  </>
                ) : (
                  <h1 className="text-xl sm:text-2xl font-bold text-black font-sans tracking-tight">
                    {extension.name}
                  </h1>
                )}
              </div>
              <span className="text-xs px-2 py-0.5 rounded bg-zinc-100 text-zinc-500 border border-zinc-200 flex-shrink-0">
                v{extension.version}
              </span>
            </div>
            <p className="text-sm text-zinc-600 mt-1">
              {extension.tagline}
            </p>
          </div>

          <div className="flex flex-col w-full sm:w-80 border-t sm:border-t-0 sm:border-l border-zinc-200">
            {extension.downloads && extension.downloads.length > 0 ? (
              extension.downloads.map((dl, idx) => (
                <div key={dl.browser} className={`flex-1 flex relative ${idx > 0 ? 'border-t border-zinc-200' : ''}`}>
                  <div className={`absolute left-0 top-0 bottom-0 w-[3px] ${idx === 0 ? 'bg-emerald-600' : 'bg-orange-500'}`}></div>
                  <button
                    onClick={() => onDownload(extension, dl)}
                    className="flex-1 py-6 px-4 bg-white hover:bg-zinc-50 text-zinc-900 font-extrabold text-3xl sm:text-4xl font-sans tracking-tight transition-colors flex items-center justify-center"
                  >
                    {dl.browser}版
                  </button>
                </div>
              ))
            ) : (
              <div className="flex-1 flex relative">
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-emerald-600"></div>
                <button
                  onClick={() => onDownload(extension)}
                  className="flex-1 py-6 px-4 bg-white hover:bg-zinc-50 text-zinc-900 font-extrabold text-3xl sm:text-4xl font-sans tracking-tight transition-colors flex items-center justify-center"
                >
                  ダウンロード
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-6 text-xs text-zinc-600 bg-zinc-50">
          <div>
            <span className="block text-zinc-400">最終更新日</span>
            <span className="font-medium text-zinc-800">{extension.lastUpdated}</span>
          </div>
          <div>
            <span className="block text-zinc-400">ファイルサイズ</span>
            <span className="font-medium text-zinc-800">{extension.size || 'ZIP'}</span>
          </div>
          <div>
            <span className="block text-zinc-400">カテゴリ</span>
            <span className="font-medium text-zinc-800">{extension.category}</span>
          </div>
          <div>
            <span className="block text-zinc-400">対応ブラウザ</span>
            <span className="font-medium text-zinc-800">{extension.supportedBrowsers.join(', ')}</span>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <PreviewSlideshow
          images={extension.previewImages}
          extensionName={extension.name}
        />

        <section className="bg-white border border-zinc-200 rounded-lg p-5">


          <h2 className="text-sm font-bold text-zinc-900 mb-2">
            機能と特徴
          </h2>
          
          <div className="text-zinc-700 text-sm leading-relaxed mb-4 whitespace-pre-line">
            {extension.description}
          </div>

          <ul className="space-y-1.5 text-sm text-zinc-700 list-disc list-inside">
            {extension.features.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>
        </section>

        <section className="bg-white border border-zinc-200 rounded-lg p-5">


          <h2 className="text-sm font-bold text-zinc-900 mb-2">
            要求される権限
          </h2>
          <div className="space-y-2">
            {extension.permissions.map((perm) => (
              <div
                key={perm.key}
                className="p-3 bg-zinc-50 rounded border border-zinc-200 text-sm"
              >
                <div className="flex items-center gap-2 mb-1">
                  <code className="font-mono font-bold text-zinc-900 bg-zinc-200 px-1 py-0.5 rounded">
                    {perm.key}
                  </code>
                  <span className="font-semibold text-zinc-800">{perm.label}</span>
                </div>
                <p className="text-zinc-600">{perm.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white border border-zinc-200 rounded-lg p-5">


          <h2 className="text-sm font-bold text-zinc-900 mb-3">
            インストール方法
          </h2>

          <div className="space-y-3">
            {extension.installSteps.map((stepGroup, idx) => (
              <div key={idx} className="bg-zinc-50 p-3 rounded border border-zinc-200">
                <h3 className="font-bold text-zinc-800 text-sm mb-2">
                  {stepGroup.browser}
                </h3>
                <ol className="space-y-1 text-sm text-zinc-600 list-decimal list-inside">
                  {stepGroup.steps.map((step, sIdx) => (
                    <li key={sIdx}>{step}</li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white border border-zinc-200 rounded-lg p-5">


          <div className="flex items-center justify-between mb-3">
            <h2 className="text-sm font-bold text-zinc-900">
              プライバシーポリシー（{extension.name}）
            </h2>
            <button
              onClick={() => onRouteChange({ type: 'privacy', extensionId: extension.id })}
              className="text-sm text-emerald-700 underline"
            >
              全体ポリシーを見る
            </button>
          </div>

          <div className="p-3 bg-zinc-50 border border-zinc-200 rounded text-sm text-zinc-700 leading-relaxed mb-3 whitespace-pre-line">
            {extension.privacyPolicy.summary}
          </div>

          <div className="space-y-2 text-sm text-zinc-600">
            <div>
              <span className="font-bold text-zinc-800 block mb-0.5">収集するデータ:</span>
              <ul className="list-disc list-inside space-y-0.5">
                {extension.privacyPolicy.collectedData.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            </div>
            <div>
              <span className="font-bold text-zinc-800 block mb-0.5">データの用途:</span>
              <p className="whitespace-pre-line">{extension.privacyPolicy.dataUsage}</p>
            </div>
            <div>
              <span className="font-bold text-zinc-800 block mb-0.5">第三者への提供:</span>
              <p className="whitespace-pre-line">{extension.privacyPolicy.thirdPartySharing}</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
