import { ExtensionItem } from '../../types';

export const peacefulWebTranslatorExtension: ExtensionItem = {
  id: 'peaceful-web-translator',
  name: 'ポジティブ変換定規 (Peaceful Web Translator)',
  version: '1.0.0',
  status: 'published',
  category: 'Productivity',
  tagline: 'Web上のトゲのある言葉を、ポジティブ＆ユーモア表現へ自動置換するツール',
  description: 'SNS、動画コメント欄、掲示板などのWebページを閲覧中、攻撃的な言葉や誹謗中傷・煽りスラングを、ブラウザ内でポジティブな表現へ自動変換します。\n\n前後の文脈に配慮した単語判定を行っており、外部サーバーへの通信を行わず端末内のローカルでのみ動作します。',
  lastUpdated: '2026-08-20',
  size: '96KB',
  supportedBrowsers: ['Chrome', 'Firefox'],
  features: [
    'SNSやコメント欄のトゲのある言葉を、前向きな表現へリアルタイム変換',
    '日常語への誤爆を防ぐ単語判定',
    '外部サーバー通信を行わない完全ローカル動作',
    'YouTubeのコメント欄やSNSの動的読み込みに対応',
    '310語以上の辞書を標準搭載＆カスタムルールの追加・編集・削除が可能',
    '個人情報・閲覧履歴・Cookieの収集や送信は行いません'
  ],

  usageGuide: [
    {
      title: '1. 有効 / 無効の切り替え（一時停止）',
      description: 'ブラウザ右上のツールバーにあるアイコンをクリックし、ポップアップのスイッチから「起動中」と「停止中」をワンクリックで切り替えられます。'
    },
    {
      title: '2. 自動変換の体験',
      description: '拡張機能が有効な状態で、X (Twitter)、YouTube、ニュースサイトなどのWebページを開くと、トゲのある表現が自動的にポジティブな言葉へ置換されます。'
    },
    {
      title: '3. カスタム辞書の設定（単語の追加・編集・削除）',
      description: 'アイコンを右クリックして「オプション」を開くか、ポップアップ下部の「設定を開く」から、自分好みの変換単語やフレーズを自由に追加・編集・削除できます。'
    }
  ],

  permissions: [
    {
      key: 'storage',
      label: 'ストレージ',
      description: '変換の有効/無効状態や、カスタム変換辞書の設定をローカルに保存するために使用します。'
    },
    {
      key: 'host_permissions (<all_urls>)',
      label: '全ウェブサイトへのアクセス',
      description: '閲覧中のWebページ上のテキストノードをリアルタイム走査・置換するために使用します。テキストの保存や外部送信は一切行いません。'
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
        '拡張機能バーに「ポジティブ変換定規」が表示されれば準備完了です！'
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
    summary: '本拡張機能は、ユーザーの個人情報・閲覧履歴・ページ内テキストを一切収集・送信しません。すべての処理はブラウザ内で完結します。',
    collectedData: ['設定値・カスタム辞書（ローカルストレージのみ）'],
    dataUsage: '設定の保存にのみ使用し、外部への送信は一切行いません。',
    thirdPartySharing: '第三者へのデータ提供は行いません。',
    lastUpdated: '2026-08-20',
    contactInfo: 'altiveil.com@gmail.com / support@altiveil.com'
  },

  downloads: [
    {
      browser: 'Chrome',
      url: './peaceful-web-translator/chrome/peaceful-web-translator-chrome.zip',
      fileName: 'peaceful-web-translator-chrome.zip'
    },
    {
      browser: 'Firefox',
      url: './peaceful-web-translator/firefox/peaceful-web-translator-firefox.zip',
      fileName: 'peaceful-web-translator-firefox.zip'
    }
  ],
  previewImages: [
    './peaceful-web-translator/preview/image1.png?v=3',
    './peaceful-web-translator/preview/image2.png?v=3',
    './peaceful-web-translator/preview/image3.png?v=3'
  ],
  iconName: 'Smile'
};
