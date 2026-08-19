import React from 'react';
import { ExtensionItem } from '../types';

interface InstallGuideModalProps {
  extension?: ExtensionItem;
  isOpen: boolean;
  onClose: () => void;
}

export const InstallGuideModal: React.FC<InstallGuideModalProps> = ({
  extension,
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
      <div className="bg-white border border-zinc-300 rounded-lg max-w-xl w-full p-6 shadow-xl relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-zinc-500 hover:text-zinc-900 text-sm font-bold"
          aria-label="閉じる"
        >
          ✕
        </button>

        <div className="mb-4">
          <h3 className="text-lg font-bold text-zinc-900">
            拡張機能のインストール手順
          </h3>
          <p className="text-sm text-zinc-500 mt-0.5">
            {extension ? `${extension.name} の導入手順` : 'ZIPファイルからの手動インストール方法'}
          </p>
        </div>

        <div className="space-y-4 text-sm text-zinc-700">
          <div className="p-4 bg-zinc-50 rounded border border-zinc-200">
            <h4 className="font-bold text-zinc-900 text-sm mb-2">
              1. Google Chrome / Microsoft Edge / Brave
            </h4>
            <ol className="space-y-2 list-decimal list-inside">
              <li>
                <strong>ZIPファイルを解凍:</strong>
                <p className="text-zinc-600 pl-4 mt-0.5">
                  ダウンロードしたZIPファイルを任意の場所に展開します。
                </p>
              </li>
              <li>
                <strong>拡張機能管理画面を開く:</strong>
                <p className="text-zinc-600 pl-4 mt-0.5">
                  アドレスバーに <code>chrome://extensions</code> （Edgeは <code>edge://extensions</code>）を入力します。
                </p>
              </li>
              <li>
                <strong>デベロッパーモードを有効化:</strong>
                <p className="text-zinc-600 pl-4 mt-0.5">
                  画面右上の「デベロッパーモード」をONにします。
                </p>
              </li>
              <li>
                <strong>解凍したフォルダを読み込む:</strong>
                <p className="text-zinc-600 pl-4 mt-0.5">
                  「パッケージ化されていない拡張機能を読み込む」をクリックし、解凍したフォルダを選択します。
                </p>
              </li>
            </ol>
          </div>

          <div className="p-4 bg-zinc-50 rounded border border-zinc-200">
            <h4 className="font-bold text-zinc-900 text-sm mb-2">
              2. Mozilla Firefox
            </h4>
            <ol className="space-y-2 list-decimal list-inside">
              <li>
                <strong>デバッグ画面を開く:</strong>
                <p className="text-zinc-600 pl-4 mt-0.5">
                  アドレスバーに <code>about:debugging#/runtime/this-firefox</code> を入力します。
                </p>
              </li>
              <li>
                <strong>一時的なアドオンを読み込む:</strong>
                <p className="text-zinc-600 pl-4 mt-0.5">
                  「一時的なアドオンを読み込む...」をクリックし、解凍フォルダ内の <code>manifest.json</code> を選択します。
                </p>
              </li>
            </ol>
          </div>
        </div>

        <div className="mt-4 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-zinc-900 hover:bg-zinc-800 text-white font-medium text-sm rounded transition-colors"
          >
            閉じる
          </button>
        </div>
      </div>
    </div>
  );
};
