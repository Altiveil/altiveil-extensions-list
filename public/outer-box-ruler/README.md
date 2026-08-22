# 外枠px逆算定規 (Outer Box Ruler) - Chrome & Firefox 拡張機能

ドラッグ選択またはクリックした要素と親コンテナ（Containing Block）・周辺要素との距離をリアルタイム逆算し、Tailwind CSS / 標準CSSコードを即時出力する定規ツールです。

---

## ディレクトリ構造 (ZIPパッケージ解凍時)

本ZIPアーカイブには `manifest.json` が参照するサブフォルダ `icons/` が正しく格納されており、ブラウザ読み込み時の参照エラーを完全に防ぎます。

```text
outer-box-ruler-extension.zip
├── manifest.json                  # Manifest V3 定義ファイル
├── background.js                 # Service Worker / 右クリック・ショートカット制御
├── content.js                    # Shadow DOM / 包含ブロック逆算 / 定規描画スクリプト
├── popup.html / popup.js         # ポップアップ画面
├── options.html / options.js     # 設定画面
├── icons/                        # サブフォルダ（実在保証）
│   ├── icon16.png
│   ├── icon32.png
│   ├── icon48.png
│   └── icon128.png
├── PRIVACY_POLICY.md             # CWS 審査用プライバシーポリシー
├── STORE_LISTING.md              # CWS 掲載用メタデータ・詳細説明文
└── README.md                     # 本ドキュメント
```

---

## インストール手順

### 1. Chrome Web Store からインストール（推奨）
[Chrome Web Store のページ](https://chromewebstore.google.com/detail/gnbbcekkchmhacoiephiodapffpjcdid) にアクセスし、「Chromeに追加」をクリックするだけで完了です。

### 2. Google Chrome への手動導入（開発者モード）
1. ダウンロードした ZIP ファイルを展開（解凍）します。
2. Chrome を開き、アドレスバーに `chrome://extensions/` と入力して開きます。
3. 画面右上の **「デベロッパーモード」** を ON にします。
4. 画面左上の **「パッケージ化されていない拡張機能を読み込む」** をクリックします。
5. 解凍したフォルダを選択します。
6. 拡張機能バーに「外枠px逆算定規」が表示されれば準備完了です！

### 3. Mozilla Firefox への導入 (AMO / 一時アドオン)
1. ダウンロードした Firefox用 ZIP ファイルを展開します。
2. Firefox を開き、アドレスバーに `about:debugging` と入力して開きます。
3. 左メニューの **「この Firefox」** をクリックします。
4. **「一時的なアドオンを読み込む...」** をクリックし、解凍フォルダ内の `manifest.json` を選択します。
*(Firefox用パッケージの `manifest.json` には `browser_specific_settings.gecko.id: "outer-box-ruler@developer"` がプリセットされています)*

---

## 使い方
- **ショートカット**: `Alt + R` (Mac: `Option + R`) で定規モードをいつでも ON / OFF。
- **右クリック起動**: 画面上を右クリックして「外枠px逆算定規を起動」を選択。
- **ドラッグ範囲選択 / クリック選択**: 配置したいサイズの矩形をドラッグ描画、または既存要素をクリック。
- **自動逆算**: Containing Block境界線、直近の兄弟要素との距離（Top / Left / Right / Bottom）が瞬時にガイド線表示されます。
- **ワンクリックコピー**: Tailwind（Margin / Absolute）および標準CSSを即座にクリップボードへコピー可能。
