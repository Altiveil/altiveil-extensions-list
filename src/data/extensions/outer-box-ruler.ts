import { ExtensionItem } from '../../types';

export const outerBoxRulerExtension: ExtensionItem = {
  id: 'outer-box-ruler',
  name: '外枠px逆算定規 (Outer Box Ruler)',
  version: '1.2.0',
  status: 'published',
  category: 'Developer',
  tagline: '要素の余白や距離を測って、CSS・Tailwindコードをコピーできる定規',
  description: 'Webページの要素をクリックしたりドラッグ選択して、親コンテナや近くの要素との距離（余白やマージン）を測れる定規ツールです。\n\n測った距離から Tailwind CSS（mt-[24px] / mt-6 など）や標準CSSコードをその場で生成してワンクリックでコピーできるので、デザインの再現やCSSコーディングのちょっとした計算に役立ちます。',
  lastUpdated: '2026-08-18',
  size: '128KB',
  supportedBrowsers: ['Chrome', 'Firefox'],
  features: [
    'クリックまたはドラッグで要素・余白の距離をガイド線表示',
    'Tailwind CSS（任意値・標準スケール）や標準CSSコードのワンクリックコピー',
    'px / rem / % の単位切り替えや、4px / 8px グリッドスナップに対応',
    '矢印キー（1px）や Shift+矢印（10px）でのキーボード微調整',
    '測定用UIをShadow DOMで描画し、Webサイト側のスタイル崩れを防止',
    'Alt + R（Mac: Option + R）や右クリックメニューからいつでもサッと起動'
  ],

  usageGuide: [
    {
      title: '1. 定規モードの起動',
      description: 'ショートカット「Alt + R」（Mac: Option + R）を押すか、画面上の任意の場所を右クリックして「外枠px逆算定規を起動」を選択します。'
    },
    {
      title: '2. 要素・余白の計測',
      description: '測定したい要素をクリックするか、画面上をドラッグして範囲を選択すると、親コンテナや周辺要素との距離・余白がガイド線でリアルタイム表示されます。'
    },
    {
      title: '3. CSS / Tailwindコードのコピー',
      description: '計測バーに表示されるTailwind CSS（Margin / Absolute）や標準CSSのコードをクリックするだけで、即座にクリップボードへコピーできます。'
    }
  ],

  permissions: [
    {
      key: 'storage',
      label: 'ストレージ',
      description: '設定（単位やスナップグリッドなど）をローカルに保存するために使用します。'
    },
    {
      key: 'activeTab',
      label: 'アクティブタブ',
      description: '起動した現在のタブに対してのみ定規機能を提供するためにアクセスします。'
    },
    {
      key: 'scripting',
      label: 'スクリプティング',
      description: '定規のUIや動作ロジックを現在のタブに注入するために使用します。'
    },
    {
      key: 'contextMenus',
      label: 'コンテキストメニュー',
      description: '右クリックメニューに「外枠px逆算定規を起動」の項目を追加するために使用します。'
    }
  ],
  installSteps: [
    {
      browser: 'Chrome',
      steps: [
        'ダウンロードしたZIPファイルを展開（解凍）します。',
        'Chromeのアドレスバーに「chrome://extensions/」と入力して開きます。',
        '画面右上の「デベロッパーモード」をONにします。',
        '画面左上の「パッケージ化されていない拡張機能を読み込む」をクリックし、解凍したフォルダを選択します。',
        '拡張機能バーに「外枠px逆算定規」が表示されれば準備完了です！'
      ]
    },
    {
      browser: 'Firefox',
      steps: [
        'ダウンロードした Firefox用 ZIP ファイルを展開します。',
        'Firefox を開き、アドレスバーに「about:debugging」と入力して開きます。',
        '左メニューの「この Firefox」をクリックします。',
        '「一時的なアドオンを読み込む...」をクリックし、解凍フォルダ内の「manifest.json」を選択します。'
      ]
    }
  ],
  privacyPolicy: {
    summary: '本拡張機能は、ユーザーの個人情報を一切収集・送信しません。すべての処理はブラウザ内で完結します。',
    collectedData: ['設定値（ローカルストレージのみ）'],
    dataUsage: '設定の保存にのみ使用し、外部への送信は一切行いません。',
    thirdPartySharing: '第三者へのデータ提供は行いません。',
    lastUpdated: '2026-08-18',
    contactInfo: 'altiveil.com@gmail.com / support@altiveil.com'
  },

  downloads: [
    {
      browser: 'chrome',
      url: './outer-box-ruler/chrome/outer-box-ruler-extension-chrome.zip',
      fileName: 'outer-box-ruler-extension-chrome.zip'
    },
    {
      browser: 'Firefox',
      url: './outer-box-ruler/firefox/outer-box-ruler-extension-firefox.zip',
      fileName: 'outer-box-ruler-extension-firefox.zip'
    }
  ],
  previewImages: [
    './outer-box-ruler/preview/image1.png',
    './outer-box-ruler/preview/image2.png',
    './outer-box-ruler/preview/image3.png'
  ],
  iconName: 'LayoutGrid'
};

