import React from 'react';
import { PageRoute } from '../types';

interface PrivacyPolicyPageProps {
  onRouteChange: (route: PageRoute) => void;
}

export const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({ onRouteChange }) => {
  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const SectionHeading = ({ id, children }: { id: string, children: React.ReactNode }) => (
    <h2 id={id} className="text-xl font-bold text-zinc-900 border-b border-zinc-200 pb-2 mt-12 mb-4 scroll-mt-24">
      {children}
    </h2>
  );

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <button
        onClick={() => onRouteChange({ type: 'list' })}
        className="text-xs font-semibold text-zinc-500 hover:text-zinc-900 transition-colors inline-flex items-center gap-1.5 mb-6 bg-white border border-zinc-200 px-3 py-1.5 rounded-md hover:bg-zinc-50 shadow-sm"
      >
        ← 一覧へ戻る
      </button>

      <div className="bg-white border border-zinc-200 rounded-xl p-6 sm:p-10 shadow-sm">
        <div className="border-b border-zinc-200 pb-8 mb-8">
          <h1 className="text-2xl sm:text-3xl font-black text-zinc-900 tracking-tight mb-6 leading-tight">
            Altiveil プライバシーポリシー<br className="sm:hidden" /><span className="text-zinc-500 text-lg sm:text-xl font-bold sm:ml-2 tracking-normal">（拡張機能共通版）</span>
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-6 text-sm text-zinc-700 bg-zinc-50 p-5 rounded-lg border border-zinc-100">
            <div className="md:col-span-2"><strong className="text-zinc-900 font-semibold mr-2">適用範囲:</strong><span className="leading-relaxed inline-block">Altiveilが開発・公開するすべてのブラウザ拡張機能（Google Chrome Web Store および Mozilla Firefox Add-ons (AMO) に掲載される全製品。以下「本拡張機能群」）</span></div>
            <div><strong className="text-zinc-900 font-semibold mr-2">発行者:</strong>Altiveil（個人開発者運営）</div>
            <div><strong className="text-zinc-900 font-semibold mr-2">最終更新日:</strong>2026年8月19日</div>
            <div><strong className="text-zinc-900 font-semibold mr-2">バージョン:</strong>2.0</div>
            <div className="md:col-span-2 flex flex-wrap gap-2 items-center">
              <strong className="text-zinc-900 font-semibold mr-1">お問い合わせ:</strong>
              <a href="mailto:altiveil.com@gmail.com" className="text-emerald-600 hover:text-emerald-700 hover:underline font-medium">altiveil.com@gmail.com</a>
              <span className="text-zinc-400 text-xs">または</span>
              <a href="mailto:support@altiveil.com" className="text-emerald-600 hover:text-emerald-700 hover:underline font-medium">support@altiveil.com</a>
            </div>
          </div>
        </div>

        <div className="bg-zinc-50 border border-zinc-200 rounded-lg p-6 mb-12">

          <h2 className="text-lg font-bold text-zinc-900 mb-4 flex items-center gap-2">
            目次
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-6 text-sm">
            <li><button onClick={() => scrollToId('section-1')} className="text-emerald-700 hover:underline text-left hover:text-emerald-800">1. 基本方針（要約）</button></li>
            <li><button onClick={() => scrollToId('section-2')} className="text-emerald-700 hover:underline text-left hover:text-emerald-800">2. 用語の定義</button></li>
            <li><button onClick={() => scrollToId('section-3')} className="text-emerald-700 hover:underline text-left hover:text-emerald-800">3. 収集しないデータの明記</button></li>
            <li><button onClick={() => scrollToId('section-4')} className="text-emerald-700 hover:underline text-left hover:text-emerald-800">4. ローカルにのみ保存されうるデータ</button></li>
            <li><button onClick={() => scrollToId('section-5')} className="text-emerald-700 hover:underline text-left hover:text-emerald-800">5. 権限（Permissions）の最小原則と用途一覧</button></li>
            <li><button onClick={() => scrollToId('section-6')} className="text-emerald-700 hover:underline text-left hover:text-emerald-800">6. リモートコードの禁止</button></li>
            <li><button onClick={() => scrollToId('section-7')} className="text-emerald-700 hover:underline text-left hover:text-emerald-800">7. 第三者提供・データの売却について</button></li>
            <li><button onClick={() => scrollToId('section-8')} className="text-emerald-700 hover:underline text-left hover:text-emerald-800">8. Cookie・トラッキング技術・解析ツールについて</button></li>
            <li><button onClick={() => scrollToId('section-9')} className="text-emerald-700 hover:underline text-left hover:text-emerald-800">9. セキュリティに関する設計方針</button></li>
            <li><button onClick={() => scrollToId('section-10')} className="text-emerald-700 hover:underline text-left hover:text-emerald-800">10. 児童のプライバシー</button></li>
            <li><button onClick={() => scrollToId('section-11')} className="text-emerald-700 hover:underline text-left hover:text-emerald-800">11. 拡張機能ごとの追加ポリシー（個別権限一覧）</button></li>
            <li><button onClick={() => scrollToId('section-12')} className="text-emerald-700 hover:underline text-left hover:text-emerald-800">12. データの保存期間と削除方法</button></li>
            <li><button onClick={() => scrollToId('section-13')} className="text-emerald-700 hover:underline text-left hover:text-emerald-800">13. ユーザーの権利</button></li>
            <li><button onClick={() => scrollToId('section-14')} className="text-emerald-700 hover:underline text-left hover:text-emerald-800">14. 準拠法・適用地域</button></li>
            <li><button onClick={() => scrollToId('section-15')} className="text-emerald-700 hover:underline text-left hover:text-emerald-800">15. ポリシーの変更について</button></li>
            <li><button onClick={() => scrollToId('section-16')} className="text-emerald-700 hover:underline text-left hover:text-emerald-800">16. お問い合わせ</button></li>
          </ul>
        </div>

        <div className="text-zinc-700 leading-[1.8] space-y-8 text-sm">
          <SectionHeading id="section-1">1. 基本方針（要約）</SectionHeading>
          <ul className="list-disc list-outside ml-5 space-y-2">
            <li>本拡張機能群は、氏名・メールアドレス・パスワード・決済情報などの<strong className="text-zinc-900 font-bold">個人を特定できる情報を一切収集しません</strong>。</li>
            <li>閲覧履歴・入力内容・Cookie・ページ内テキストなどを<strong className="text-zinc-900 font-bold">外部サーバーへ送信しません</strong>。動作は100%ユーザーのブラウザ内（クライアントサイド）で完結します。</li>
            <li>設定情報などのごく一部のデータのみ、ブラウザ標準のローカルストレージ（<code className="bg-zinc-100 text-zinc-800 px-1.5 py-0.5 rounded text-xs border border-zinc-200">chrome.storage.local</code>）に保存される場合がありますが、これは同期されず、Altiveilを含むいかなる第三者にも送信されません。</li>
            <li><strong className="text-zinc-900 font-bold">データの売却・第三者提供・広告目的での利用は一切行いません。</strong></li>
            <li>リモートサーバーから動的にコードを読み込む機能は持ちません。すべてのコードは配布パッケージ内に含まれます。</li>
            <li>各拡張機能が要求する権限は、その機能に必要な最小限に限定しています。</li>
          </ul>

          <SectionHeading id="section-2">2. 用語の定義</SectionHeading>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[500px]">
              <thead>
                <tr className="bg-zinc-100 border-y border-zinc-200 text-zinc-900">
                  <th className="py-2.5 px-4 font-semibold text-sm w-1/3">用語</th>
                  <th className="py-2.5 px-4 font-semibold text-sm">本ポリシーにおける定義</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200">
                <tr>
                  <td className="py-3 px-4 font-medium text-zinc-900">本拡張機能群</td>
                  <td className="py-3 px-4 text-zinc-600">Altiveilが開発し、Chrome Web StoreまたはFirefox Add-ons上で配布するブラウザ拡張機能の総称</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-zinc-900">ユーザーデータ</td>
                  <td className="py-3 px-4 text-zinc-600">ユーザーが拡張機能の利用を通じて生成・入力・閲覧する一切の情報（設定値、選択操作、閲覧中ページの情報等を含む）</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-zinc-900">ローカルストレージ</td>
                  <td className="py-3 px-4 text-zinc-600"><code className="bg-zinc-100 text-zinc-800 px-1 rounded text-xs">chrome.storage.local</code> や <code className="bg-zinc-100 text-zinc-800 px-1 rounded text-xs">localStorage</code> など、ブラウザが提供する端末内保存領域。外部への自動送信機能を持たない</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-zinc-900">個人を特定できる情報（PII）</td>
                  <td className="py-3 px-4 text-zinc-600">氏名、住所、メールアドレス、電話番号、決済情報、政府発行ID番号など、単独または組み合わせにより特定の個人を識別しうる情報</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-zinc-900">リモートコード</td>
                  <td className="py-3 px-4 text-zinc-600">拡張機能パッケージの外部（自社・第三者を問わずサーバー等）から動的に取得・実行されるスクリプトやコード</td>
                </tr>
              </tbody>
            </table>
          </div>

          <SectionHeading id="section-3">3. 収集しないデータの明記</SectionHeading>
          <p>
            本拡張機能群は、Google Chrome Web Store の Privacy practices タブが定義する下記のデータカテゴリについて、<strong className="text-zinc-900 font-bold">いずれも収集・保存・送信を行いません</strong>。
          </p>
          <ul className="list-none space-y-2 mt-4 bg-zinc-50 p-5 rounded-lg border border-zinc-200">
            <li className="flex gap-2"><span>🚫</span><span>個人を特定できる情報（氏名・住所・メールアドレス・電話番号・ID番号等）</span></li>
            <li className="flex gap-2"><span>🚫</span><span>健康情報</span></li>
            <li className="flex gap-2"><span>🚫</span><span>金融および決済情報（カード番号・銀行口座情報等）</span></li>
            <li className="flex gap-2"><span>🚫</span><span>認証情報（パスワード・PIN・秘密の質問の回答等）</span></li>
            <li className="flex gap-2"><span>🚫</span><span>個人間のやり取り（メール本文・チャット・SMS等の内容）</span></li>
            <li className="flex gap-2"><span>🚫</span><span>位置情報（GPS・IPベースの位置推定を含む）</span></li>
            <li className="flex gap-2"><span>🚫</span><span>ウェブ閲覧履歴（訪問先URLの記録・送信）</span></li>
            <li className="flex gap-2"><span>🚫</span><span>ユーザーアクティビティの監視（クリック・スクロール・キーストローク・マウス移動等の常時ログ収集）</span></li>
            <li className="flex gap-2"><span>🚫</span><span>閲覧中ウェブサイトのコンテンツ（ページ内テキスト・画像・フォーム入力内容の収集）</span></li>
          </ul>
          <div className="mt-6">
            これらの権限に類似する挙動（例：DOM要素の座標を取得する等）が機能上必要な拡張機能であっても、<br />
            いずれも収集・保存・送信を行いません。<br />
            特定の拡張機能がこの原則の例外となる場合は、必ず<a href="#section-11" className="text-emerald-600 hover:underline">第11章</a>の個別ポリシーに明記します。<br />
            記載がない限り、以下は全製品に無条件で適用されます。
          </div>

          <SectionHeading id="section-4">4. ローカルにのみ保存されうるデータ</SectionHeading>
          <div>
            一部の拡張機能では、ユーザー体験向上のために、以下のような<strong className="text-zinc-900 font-bold">非個人情報</strong>を <code className="bg-zinc-100 text-zinc-800 px-1.5 py-0.5 rounded text-xs border border-zinc-200">chrome.storage.local</code>（ブラウザ標準のローカルストレージ）にのみ保存する場合があります。
          </div>
          <ul className="list-disc list-outside ml-5 space-y-1 mt-4">
            <li>表示単位・テーマ・言語などのUI設定</li>
            <li>グリッドスナップやツールの動作モードなどの機能設定</li>
            <li>直近の作業状態（タブの開閉状態等、個人を特定しない一時データ）</li>
          </ul>
          <div className="mt-6">
            <strong className="text-zinc-900 font-bold">重要な設計方針として、<code className="bg-zinc-100 text-zinc-800 px-1.5 py-0.5 rounded text-xs border border-zinc-200 font-normal">chrome.storage.sync</code> は使用しません。</strong><br />
            <code className="bg-zinc-100 text-zinc-800 px-1.5 py-0.5 rounded text-xs border border-zinc-200 font-normal">sync</code> はブラウザベンダー（Google/Mozilla）のアカウント経由でクラウド同期される仕組みであり、たとえ設定値のような軽微なデータであっても「完全にローカルで完結する」という本方針の趣旨に反するため、意図的に採用していません。<br />
            個別拡張機能が例外的に <code className="bg-zinc-100 text-zinc-800 px-1.5 py-0.5 rounded text-xs border border-zinc-200 font-normal">sync</code> を使用する場合は、第11章にその旨と理由を明記します。
          </div>

          <SectionHeading id="section-5">5. 権限（Permissions）の最小原則と用途一覧</SectionHeading>
          <div>
            本拡張機能群は、機能の実現に真に必要な最小限の権限のみを要求します（Principle of Least Privilege）。<br />
            目的外の権限取得、および取得した権限を宣言された単一目的以外に転用することはありません。<br />
            以下は、Altiveil製品群で使用されうる主な権限の一般的な用途説明です。<br />
            実際にどの拡張機能がどの権限を使用しているかは第11章の個別表をご確認ください。
          </div>
          <div className="overflow-x-auto mt-4">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-zinc-100 border-y border-zinc-200 text-zinc-900">
                  <th className="py-2.5 px-4 font-semibold text-sm whitespace-nowrap">権限</th>
                  <th className="py-2.5 px-4 font-semibold text-sm">一般的な用途</th>
                  <th className="py-2.5 px-4 font-semibold text-sm whitespace-nowrap">外部送信の有無</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200 text-zinc-600">
                <tr>
                  <td className="py-3 px-4 font-mono text-xs text-zinc-900 bg-zinc-50 font-semibold whitespace-nowrap">storage</td>
                  <td className="py-3 px-4">設定値をローカルストレージに保存するため</td>
                  <td className="py-3 px-4">なし（ローカル完結）</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-mono text-xs text-zinc-900 bg-zinc-50 font-semibold whitespace-nowrap">activeTab</td>
                  <td className="py-3 px-4">ユーザーが明示的に拡張機能を起動した現在のタブに対してのみ、一時的にアクセスするため</td>
                  <td className="py-3 px-4">なし</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-mono text-xs text-zinc-900 bg-zinc-50 font-semibold whitespace-nowrap">scripting</td>
                  <td className="py-3 px-4">ユーザー操作をトリガーとして、現在のタブにUIやロジックを注入するため</td>
                  <td className="py-3 px-4">なし</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-mono text-xs text-zinc-900 bg-zinc-50 font-semibold whitespace-nowrap">contextMenus</td>
                  <td className="py-3 px-4">右クリックメニューに機能起動用の項目を追加するため</td>
                  <td className="py-3 px-4">なし</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-mono text-xs text-zinc-900 bg-zinc-50 font-semibold whitespace-nowrap">clipboardWrite</td>
                  <td className="py-3 px-4">生成したコード・テキストをワンクリックでクリップボードにコピーするため</td>
                  <td className="py-3 px-4">なし</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-mono text-xs text-zinc-900 bg-zinc-50 font-semibold whitespace-nowrap">downloads</td>
                  <td className="py-3 px-4">ユーザーが明示的に要求したファイル（生成結果等）をローカルに保存するため</td>
                  <td className="py-3 px-4">なし</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-mono text-xs text-zinc-900 bg-zinc-50 font-semibold whitespace-nowrap">alarms</td>
                  <td className="py-3 px-4">ローカル完結のタイマー・定期処理を実行するため（外部通信は伴わない）</td>
                  <td className="py-3 px-4">なし</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-mono text-xs text-zinc-900 bg-zinc-50 font-semibold whitespace-nowrap">host_permissions</td>
                  <td className="py-3 px-4">特定サイトでの動作が必須の機能に限り、必要最小範囲のみ要求。<code className="bg-white border border-zinc-200 px-1 rounded">&lt;all_urls&gt;</code> のような広範な権限は、代替手段（<code className="bg-white border border-zinc-200 px-1 rounded">activeTab</code>等）で実現可能な場合は使用しない</td>
                  <td className="py-3 px-4">権限の性質上、当該サイトのDOMを読み取れるが、外部送信は行わない</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4">
            いずれの権限も、ユーザーが拡張機能を能動的に起動した場合にのみ機能し、バックグラウンドでの無断監視や常時データ収集には使用しません。
          </p>

          <SectionHeading id="section-6">6. リモートコードの禁止</SectionHeading>
          <div>
            本拡張機能群は、<code className="bg-zinc-100 text-zinc-800 px-1.5 py-0.5 rounded text-xs border border-zinc-200">eval()</code> や動的な <code className="bg-zinc-100 text-zinc-800 px-1.5 py-0.5 rounded text-xs border border-zinc-200">&lt;script&gt;</code> タグ生成、外部サーバーからのJavaScript動的取得など、パッケージ外からコードを読み込んで実行する仕組みを一切持ちません。<br />
            すべての実行コードは、Chrome Web Store / AMO の審査を通過したパッケージ内に静的に含まれています。<br />
            これにより、審査後に外部から動作内容を変更することはできない設計になっています。
          </div>

          <SectionHeading id="section-7">7. 第三者提供・データの売却について（Limited Use 順守表明）</SectionHeading>
          <p>本拡張機能群について、以下を明確に表明します（Chrome Web Store Developer Program Policies の Limited Use 要件に準拠した表明です）。</p>
          <ol className="list-decimal list-outside ml-5 space-y-2 mt-4">
            <li>ユーザーデータを<strong className="text-zinc-900 font-bold">第三者に販売しません</strong>。</li>
            <li>ユーザーデータを、拡張機能が宣言する単一の目的（Single Purpose）およびその維持・保守・セキュリティ確保に必要な範囲を超えて<strong className="text-zinc-900 font-bold">利用・転送しません</strong>。</li>
            <li>ユーザーデータを、<strong className="text-zinc-900 font-bold">行動ターゲティング広告・パーソナライズ広告の目的で利用・転送しません</strong>。</li>
            <li>ユーザーデータを、<strong className="text-zinc-900 font-bold">信用調査・与信判断等の目的で利用しません</strong>。</li>
            <li>ユーザーデータに対する人間によるレビューは、法令遵守・セキュリティインシデント対応など、真に必要な場合を除き行いません。</li>
            <li>データ取扱いに関する重要な変更が生じた場合は、<a href="#section-15" className="text-emerald-600 hover:underline">第15章</a>に定める方法で事前に開示します。</li>
          </ol>
          <div className="mt-6">
            そもそも本拡張機能群は前述の通りデータを収集・保存しない設計を基本方針としているため、上記1〜5は実質的に「収集していないため該当する行為が発生しえない」という状態です。<br />
            それでも、将来的な機能追加や第三者連携の可能性に備え、明文化した表明として残しています。
          </div>

          <SectionHeading id="section-8">8. Cookie・トラッキング技術・解析ツールについて</SectionHeading>
          <div>
            本拡張機能群は、独自のCookieを発行せず、トラッキングピクセルやフィンガープリンティング技術も使用しません。<br />
            Google Analytics、Sentry等の第三者解析・エラートラッキングSDKも組み込んでいません。<br />
            将来的にクラッシュレポート収集等の目的でこれらを導入する場合は、事前にポリシーを改定し、該当拡張機能のストア掲載ページにも明記します。
          </div>

          <SectionHeading id="section-9">9. セキュリティに関する設計方針</SectionHeading>
          <ul className="list-disc list-outside ml-5 space-y-2">
            <li><strong className="text-zinc-900 font-semibold">Manifest V3</strong> に準拠し、常時稼働のバックグラウンドページではなく、必要時のみ起動するService Workerアーキテクチャを採用しています。</li>
            <li>対象ウェブページのDOMに干渉するUIは、可能な限り <strong className="text-zinc-900 font-semibold">Shadow DOM</strong> によって分離し、対象サイトのスタイル・スクリプトとの相互干渉を防いでいます。</li>
            <li><code className="bg-zinc-100 text-zinc-800 px-1.5 py-0.5 rounded text-xs border border-zinc-200">eval()</code> やインラインスクリプトの動的生成など、Content Security Policyを回避しうる実装を避けています。</li>
            <li>権限は機能単位で最小化し、単一の広範な権限（<code className="bg-zinc-100 text-zinc-800 px-1.5 py-0.5 rounded text-xs border border-zinc-200">&lt;all_urls&gt;</code> の常時ホスト権限等）に依存しない設計を優先しています。</li>
          </ul>

          <SectionHeading id="section-10">10. 児童のプライバシー</SectionHeading>
          <div>
            本拡張機能群は、13歳未満の児童を主な対象として設計されたものではなく、児童から意図的に個人情報を収集することはありません。<br />
            児童の保護者等が、児童が本拡張機能群を通じて意図せず情報を提供した可能性があると考える場合は、<a href="#section-16" className="text-emerald-600 hover:underline">お問い合わせ</a>よりご連絡ください。<br />
            速やかに確認のうえ対応します。
          </div>

          <SectionHeading id="section-11">11. 拡張機能ごとの追加ポリシー（個別権限一覧）</SectionHeading>
          <div className="mb-6">
            本章は、Altiveilの各拡張機能が実際に要求する権限と用途を一覧化するための付録です。<br />
            <strong className="text-zinc-900 font-bold">この一覧に記載のない拡張機能・権限であっても、第1〜10章の共通方針が無条件で適用されます。</strong><br />
            新製品を追加する際は、この表に行を追加するだけで対応できる構成にしています。
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="bg-zinc-100 border-y border-zinc-200 text-zinc-900">
                  <th className="py-2.5 px-4 font-semibold text-sm whitespace-nowrap">拡張機能名</th>
                  <th className="py-2.5 px-4 font-semibold text-sm">主な権限</th>
                  <th className="py-2.5 px-4 font-semibold text-sm whitespace-nowrap"><code className="font-normal text-xs bg-white border border-zinc-300 px-1 rounded">sync</code>使用</th>
                  <th className="py-2.5 px-4 font-semibold text-sm min-w-[280px]">補足事項</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200 text-zinc-600">
                <tr>
                  <td className="py-4 px-4 font-medium text-zinc-900 whitespace-nowrap">外枠px逆算定規 (Outer Box Ruler)</td>
                  <td className="py-4 px-4 font-mono text-xs leading-relaxed"><code className="bg-zinc-50 text-zinc-800 border border-zinc-200 px-1 rounded">storage</code>, <code className="bg-zinc-50 text-zinc-800 border border-zinc-200 px-1 rounded">activeTab</code>, <code className="bg-zinc-50 text-zinc-800 border border-zinc-200 px-1 rounded">scripting</code>, <code className="bg-zinc-50 text-zinc-800 border border-zinc-200 px-1 rounded">contextMenus</code></td>
                  <td className="py-4 px-4 text-xs whitespace-nowrap">使用しない<br/><span className="text-zinc-400">（<code className="font-normal">storage.local</code>のみ）</span></td>
                  <td className="py-4 px-4 text-xs leading-relaxed">対象ページのDOM座標・スタイル情報を取得するが、いずれも表示処理のためだけにメモリ上で使用し、保存・送信は行わない。クロスオリジンのiframe内部は技術的制約（Same-Origin Policy）により解析対象外</td>
                </tr>
              </tbody>
            </table>
          </div>

          <SectionHeading id="section-12">12. データの保存期間と削除方法</SectionHeading>
          <div>
            本拡張機能群が保存する情報（第4章参照）は、すべてユーザーの端末内ローカルストレージにのみ存在し、Altiveilが運営するサーバー等に複製・保管されることはありません。<br />
            そのため、Altiveil側での「保有期間」という概念自体が発生しません。<br />
            ユーザーはいつでも以下の方法でローカルデータを削除できます。
          </div>
          <ul className="list-disc list-outside ml-5 space-y-2 mt-4">
            <li>ブラウザの拡張機能管理画面から該当拡張機能を削除する（関連するローカルストレージも同時に破棄されます）</li>
            <li>ブラウザの設定からサイト（拡張機能）データを個別にクリアする</li>
          </ul>

          <SectionHeading id="section-13">13. ユーザーの権利</SectionHeading>
          <div>
            本拡張機能群はサーバー側にユーザーデータを保有しないため、いわゆる開示請求・削除請求・データポータビリティ等の権利は、実務上「そもそも保有しているデータがない」という形で自動的に満たされます。<br />
            とはいえ、GDPR（EU一般データ保護規則）や日本の個人情報保護法（APPI）が定める権利の考え方を尊重し、以下を確認いただけます。
          </div>
          <ul className="list-disc list-outside ml-5 space-y-2 mt-4">
            <li><strong className="text-zinc-900 font-bold">アクセス権 / 開示請求</strong>: Altiveilが保有するユーザー個人データは存在しません。</li>
            <li><strong className="text-zinc-900 font-bold">削除権</strong>: 第12章の方法でユーザー自身がいつでも即時に削除可能です。</li>
            <li><strong className="text-zinc-900 font-bold">データポータビリティ</strong>: サーバー側に保存されたデータがないため、移行対象データも存在しません。</li>
            <li><strong className="text-zinc-900 font-bold">異議申立て・問い合わせ</strong>: <a href="#section-16" className="text-emerald-600 hover:underline">第16章</a>の連絡先まで、いつでもご連絡いただけます。</li>
          </ul>

          <SectionHeading id="section-14">14. 準拠法・適用地域</SectionHeading>
          <div>
            本ポリシーは、開発者の所在地である日本の法令（個人情報の保護に関する法律：APPI）を基本としつつ、<br />
            本拡張機能群がGoogle Chrome Web Store および Firefox Add-ons を通じて全世界に配布される性質上、<br />
            EU一般データ保護規則（GDPR）およびカリフォルニア州消費者プライバシー法（CCPA/CPRA）が求める基本原則（データ最小化・目的制限・透明性の確保等）とも整合する設計を目指しています。
          </div>

          <SectionHeading id="section-15">15. ポリシーの変更について</SectionHeading>
          <div>
            機能追加やブラウザの仕様変更、法令改正等に伴い、本ポリシーを改定する場合があります。<br />
            特に、<strong className="text-zinc-900 font-bold">データの取扱い方針に実質的な変更が生じる場合は、変更を適用する前に、本ページのバージョン履歴および該当拡張機能のストア掲載ページ上で事前に明示します。</strong><br />
            軽微な文言修正等については、随時本ページ上部の更新日を更新することで対応します。
          </div>
          
          <h3 className="font-bold text-zinc-900 mt-6 mb-3 text-base">変更履歴</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[500px]">
              <thead>
                <tr className="bg-zinc-100 border-y border-zinc-200 text-zinc-900">
                  <th className="py-2.5 px-4 font-semibold text-sm whitespace-nowrap">バージョン</th>
                  <th className="py-2.5 px-4 font-semibold text-sm whitespace-nowrap">日付</th>
                  <th className="py-2.5 px-4 font-semibold text-sm">変更内容</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200 text-zinc-600 text-sm">
                <tr>
                  <td className="py-3 px-4 font-mono font-semibold text-zinc-900">2.0</td>
                  <td className="py-3 px-4 whitespace-nowrap">2026-08-19</td>
                  <td className="py-3 px-4 leading-relaxed">拡張機能ポートフォリオ共通版として全面改訂。Limited Use順守表明、権限一覧、個別拡張機能付録を新設</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-mono font-semibold text-zinc-900">1.0</td>
                  <td className="py-3 px-4 whitespace-nowrap">2026-08-18</td>
                  <td className="py-3 px-4 leading-relaxed">初版（外枠px逆算定規 単体向け）</td>
                </tr>
              </tbody>
            </table>
          </div>

          <SectionHeading id="section-16">16. お問い合わせ</SectionHeading>
          <p>本ポリシーおよびデータの取扱いに関するご質問・ご要望・削除依頼等は、下記までご連絡ください。</p>
          <div className="bg-zinc-50 border border-zinc-200 rounded p-5 mt-4">
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <span className="font-semibold text-zinc-900 w-24">開発者:</span>
                <span>Altiveil</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="font-semibold text-zinc-900 w-24">メール:</span>
                <span className="flex flex-wrap gap-2">
                  <a href="mailto:altiveil.com@gmail.com" className="text-emerald-600 hover:underline">altiveil.com@gmail.com</a>
                  <span className="text-zinc-400">/</span>
                  <a href="mailto:support@altiveil.com" className="text-emerald-600 hover:underline">support@altiveil.com</a>
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="font-semibold text-zinc-900 w-24">対応言語:</span>
                <span>日本語 / English</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
