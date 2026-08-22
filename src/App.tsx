import React, { useState, useEffect } from 'react';
import { ExtensionItem, PageRoute } from './types';
import { EXTENSIONS_DATA } from './data/extensions';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ExtensionCard } from './components/ExtensionCard';
import { ExtensionDetailPage } from './components/ExtensionDetailPage';
import { PrivacyPolicyPage } from './components/PrivacyPolicyPage';
import { InstallGuideModal } from './components/InstallGuideModal';
import { handleExtensionDownload } from './utils/downloadHelper';

export default function App() {
  const [extensions] = useState<ExtensionItem[]>(EXTENSIONS_DATA);
  const [currentRoute, setCurrentRoute] = useState<PageRoute>({ type: 'list' });
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [selectedBrowser, setSelectedBrowser] = useState<string>('ALL');
  
  const [isInstallGuideOpen, setIsInstallGuideOpen] = useState(false);
  const [selectedExtensionForGuide, setSelectedExtensionForGuide] = useState<ExtensionItem | undefined>(undefined);
  const [downloadToast, setDownloadToast] = useState<{ visible: boolean; name: string } | null>(null);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (!hash || hash === '' || hash === 'list') {
        setCurrentRoute({ type: 'list' });
      } else if (hash.startsWith('detail/')) {
        const id = hash.replace('detail/', '');
        setCurrentRoute({ type: 'detail', extensionId: id });
      } else if (hash.startsWith('privacy')) {
        const parts = hash.split('/');
        const id = parts[1];
        setCurrentRoute({ type: 'privacy', extensionId: id });
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    const SITE_NAME = 'Altiveil Extension List';
    let title = `${SITE_NAME} - ブラウザ拡張機能 公式配布ポータル`;
    let description = 'Altiveilが開発したブラウザ拡張機能の公式ダウンロード・インストールガイド・プライバシーポリシーを掲載しています。Chrome / Firefox 対応。';

    if (currentRoute.type === 'detail' && currentRoute.extensionId) {
      const ext = extensions.find((e) => e.id === currentRoute.extensionId);
      if (ext) {
        title = `${ext.name} - ダウンロード | ${SITE_NAME}`;
        description = `${ext.tagline}。${ext.supportedBrowsers.join(' / ')} 対応。無料ダウンロード・インストール方法・プライバシーポリシーを掲載。`;
      }
    } else if (currentRoute.type === 'privacy') {
      title = `プライバシーポリシー | ${SITE_NAME}`;
      description = 'Altiveilが開発するブラウザ拡張機能のプライバシーポリシー（共通版）。個人情報の非収集・完全ローカル動作・権限の用途一覧を掲載。';
    }

    document.title = title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description);
    }
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', title);
    }
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute('content', description);
    }
    const twTitle = document.querySelector('meta[name="twitter:title"]');
    if (twTitle) {
      twTitle.setAttribute('content', title);
    }
    const twDesc = document.querySelector('meta[name="twitter:description"]');
    if (twDesc) {
      twDesc.setAttribute('content', description);
    }
  }, [currentRoute, extensions]);

  const navigateTo = (route: PageRoute) => {
    setCurrentRoute(route);
    if (route.type === 'list') {
      window.location.hash = '';
    } else if (route.type === 'detail') {
      window.location.hash = `detail/${route.extensionId}`;
    } else if (route.type === 'privacy') {
      window.location.hash = route.extensionId ? `privacy/${route.extensionId}` : 'privacy';
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openInstallGuide = (ext?: ExtensionItem) => {
    setSelectedExtensionForGuide(ext);
    setIsInstallGuideOpen(true);
  };

  const onDownload = (ext: ExtensionItem, dlItem?: { browser: string; url: string; fileName: string }) => {
    handleExtensionDownload(ext, dlItem);
    setDownloadToast({ visible: true, name: ext.name + (dlItem ? ` (${dlItem.browser}版)` : '') });
    setTimeout(() => {
      setDownloadToast(null);
    }, 4000);
  };

  const filteredExtensions = extensions.filter((ext) => {
    const matchesSearch = 
      ext.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ext.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ext.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ext.features.some(f => f.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCategory = selectedCategory === 'ALL' || ext.category === selectedCategory;
    const matchesBrowser = selectedBrowser === 'ALL' || ext.supportedBrowsers.includes(selectedBrowser as any);

    return matchesSearch && matchesCategory && matchesBrowser;
  });

  const categories = [
    { label: 'すべて', value: 'ALL' },
    { label: '生産性向上', value: 'Productivity' },
    { label: '開発者向け', value: 'Developer' },
    { label: 'ユーティリティ', value: 'Utility' },
  ];

  const browsers = ['ALL', 'Chrome', 'Edge', 'Brave', 'Firefox'];

  return (
    <div className="min-h-screen flex flex-col bg-white text-zinc-900 font-sans selection:bg-emerald-600 selection:text-white">
      <Header currentRoute={currentRoute} onRouteChange={navigateTo} />

      {downloadToast && (
        <div className="fixed bottom-6 right-6 z-50 bg-zinc-900 text-white px-5 py-3 rounded shadow-lg flex items-center gap-3">
          <div>
            <p className="font-bold text-sm">
              {downloadToast.name} のダウンロードを開始しました
            </p>
          </div>
        </div>
      )}

      <main className="flex-1">
        {currentRoute.type === 'list' && (
          <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
            <div className="bg-zinc-50 border border-zinc-200 rounded-lg p-4 sm:p-5 mb-8">
              <div className="flex flex-col md:flex-row items-center gap-4 justify-between">
                <div className="relative w-full md:w-80">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="拡張機能名や機能で検索..."
                    className="w-full bg-white border border-zinc-300 rounded px-3 py-2 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-emerald-600 transition-colors"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-zinc-500 hover:text-zinc-900 cursor-pointer"
                    >
                      クリア
                    </button>
                  )}
                </div>

                <div className="flex flex-wrap items-center gap-2 w-full md:w-auto justify-start md:justify-end">
                  <div className="flex items-center gap-1.5">
                    {categories.map((cat) => (
                      <button
                        key={cat.value}
                        onClick={() => setSelectedCategory(cat.value)}
                        className={`px-3 py-1.5 rounded text-xs font-semibold cursor-pointer transition-colors ${
                          selectedCategory === cat.value
                            ? 'bg-zinc-900 text-white'
                            : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200'
                        }`}
                      >
                        {cat.label}
                      </button>
                    ))}
                  </div>

                  <select
                    value={selectedBrowser}
                    onChange={(e) => setSelectedBrowser(e.target.value)}
                    className="bg-white border border-zinc-300 rounded px-2.5 py-1.5 text-xs text-zinc-900 focus:outline-none focus:border-emerald-600 cursor-pointer"
                    aria-label="対応ブラウザで絞り込み"
                  >
                    {browsers.map((b) => (
                      <option key={b} value={b}>
                        {b === 'ALL' ? 'すべてのブラウザ' : b}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {filteredExtensions.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">

                {filteredExtensions.map((extension) => (
                  <ExtensionCard
                    key={extension.id}
                    extension={extension}
                    onRouteChange={navigateTo}
                    onOpenInstallGuide={openInstallGuide}
                    onDownload={onDownload}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-zinc-50 rounded border border-zinc-200">
                <p className="text-zinc-500 text-sm mb-3">
                  現在公開中の拡張機能はありません。
                </p>
                {(searchQuery || selectedCategory !== 'ALL' || selectedBrowser !== 'ALL') && (
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedCategory('ALL');
                      setSelectedBrowser('ALL');
                    }}
                    className="px-4 py-2 bg-zinc-900 hover:bg-zinc-800 text-white font-medium text-xs rounded transition-colors"
                  >
                    検索条件をリセット
                  </button>
                )}
              </div>
            )}
          </div>
        )}

        {currentRoute.type === 'detail' && (
          (() => {
            const ext = extensions.find((e) => e.id === currentRoute.extensionId);
            if (!ext) {
              return (
                <div className="max-w-4xl mx-auto px-4 py-16 text-center">
                  <p className="text-zinc-500 mb-4">指定された拡張機能が見つかりませんでした。</p>
                  <button
                    onClick={() => navigateTo({ type: 'list' })}
                    className="px-4 py-2 bg-zinc-900 text-white rounded"
                  >
                    一覧へ戻る
                  </button>
                </div>
              );
            }
            return (
              <ExtensionDetailPage
                extension={ext}
                onRouteChange={navigateTo}
                onOpenInstallGuide={openInstallGuide}
                onDownload={onDownload}
              />
            );
          })()
        )}

        {currentRoute.type === 'privacy' && (
          <PrivacyPolicyPage
            onRouteChange={navigateTo}
          />
        )}
      </main>

      <InstallGuideModal
        extension={selectedExtensionForGuide}
        isOpen={isInstallGuideOpen}
        onClose={() => setIsInstallGuideOpen(false)}
      />

      <Footer onRouteChange={navigateTo} />
    </div>
  );
}
