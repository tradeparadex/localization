import { Keys } from './en';

const translations: Record<Keys, string> = {
  'This feature currently is still in Beta. Backup your Paradex Private Key for additional safety.':
    'この機能は現在ベータ版です。追加の安全のためにParadexプライベートキーをバックアップしてください。',
  'Deposit failed': '入金に失敗しました',
  'Deposit in progress': '入金中',
  'External Account': '外部アカウント',
  'Tx Hashes': 'トランザクションハッシュ',
  'Continue to {{bridge}}': '{{bridge}}に進む',
  'By clicking Continue to {{bridge}}, you will be sent to {{bridge}} website to bridge your funds out of Paradex.':
    '{{bridge}}に進むをクリックすると、{{bridge}}のウェブサイトに送られ、資金をParadexから移動します。',
  'By clicking Continue to {{bridge}}, you will be sent to {{bridge}} website to bridge your funds to Paradex.':
    '{{bridge}}に進むをクリックすると、{{bridge}}のウェブサイトに送られ、資金をParadexに移動します。',
  Refer: '参照',
  Address: '住所',
  'Date Joined': '参加日',
  'Referral Code': '紹介コード',
  'Volume Traded': '取引量',
  Bridge: 'ブリッジ',
  'Withdraw to': '引き出し先',
  'Deposit from': 'からの入金',
  'Position is already closed': 'ポジションはすでに閉じています',
  'Your Paradex L2 Address is NOT a Public Starknet Address. If you try to send funds to this address on Public Starknet via a cross chain bridge you risk losing your funds. <1>Read more</1>.':
    'あなたのParadex L2アドレスは公開Starknetアドレスではありません。クロスチェーンブリッジを介してこのアドレスに公開Starknetで資金を送信しようとすると、資金を失うリスクがあります。<1>もっと読む</1>。',
  '{{chain}} Address': '{{chain}}アドレス',
  'Copy Paradex Private Key': 'Paradexプライベートキーをコピー',
  'Your account will be liquidated if Margin Ratio reaches 100%':
    'マージン比率が100%に達すると、アカウントが清算されます',
  Liquidation: '清算',
  Fee: '手数料',
  Maker: 'メーカー',
  'Maker Score': 'メーカースコア',
  'Maker Points Share': 'メーカーポイントシェア',
  'Fee Points Share': '手数料ポイントシェア',
  'Fee Points': '手数料ポイント',
  'Maker Points': 'メーカーポイント',
  'Liquidation {{side}} Fill': '清算{{side}}埋め',
  Settings: '設定',
  'Market Score': 'マーケットスコア',
  'Points Pre-Season': 'ポイントプレシーズン',
  'Season {{season}} (coming soon)': 'シーズン{{season}}（近日公開）',
  'Confirm Buy': '購入を確認',
  'Confirm Sell': '売却を確認',
  'Other Points': 'その他のポイント',
  'Estimated Receivable Amount': '見積もり受取可能額',
  'Socialized Loss active. Click to learn more.':
    'ソーシャライズドロスが有効です。詳細はクリックしてください。',
  Analytics: 'アナリティクス',
  'Sign In to see your account Points stats':
    'アカウントのポイント統計を見るにはサインインしてください',
  '<1>Clock Is Out Of Sync</1> The clock on your device is out of sync. This may cause issues with the application. Please make sure your device clock is set to be auto. For more details please <2>see documentation</2>':
    '<1>クロックが同期していません</1> あなたのデバイスのクロックが同期していません。これはアプリケーションに問題を引き起こす可能性があります。デバイスのクロックが自動に設定されていることを確認してください。詳細については、<2>ドキュメント</2>をご覧ください',
  'Failed to fetch max withdrawable amount': '最大出金金額の取得に失敗しました',
  'It is not possible to withdraw more than your Max Withdrawable Amount.':
    '最大出金金額を超える出金はできません。',
  'Max Withdrawable Amount': '最大出金金額',
  'Points Explainer': 'ポイント説明',
  Pool: 'ティア',
  'Quote Quality': 'クオート品質',
  'Create Your Public Username': '公開ユーザー名を作成する',
  'Edit Your Public Username': '公開ユーザー名を編集する',
  'You have been signed out.': 'ログアウトしました。',
  'Maker Volume Score': 'メーカーボリュームスコア',
  'Fee Score': '手数料スコア',
  'Score Share': 'スコアシェア',
  'Instrument Share': 'インストルメントシェア',
  Points: 'ポイント',
  'Total Points': '総ポイント',
  '24h Change': '24時間の変動',
  Leaderboard: 'リーダーボード',
  Cancel: 'キャンセル',
  Portfolio: 'ポートフォリオ',
  Trade: '取引',
  Build: 'ビルド',
  'Referrals Explainer': '紹介説明',
  'How It Works': '仕組み',
  'My Referrals': '私の紹介',
  'Your Referral Code': '紹介コード',
  'Affiliate Program': 'アフィリエイトプログラム',
  Enrolled: '登録済み',
  'Traders Referred': '紹介されたトレーダー',
  'Referral Rewards': '紹介報酬',
  'Referral Points': '紹介ポイント',
  'Invite Friends': '友達を招待',
  Share: '共有',
  Earn: '収益',
  Give: '与える',
  'Share your code to invite friends to join Paradex':
    '友達を招待するためにコードを共有する',
  '<1>{{amount}}</1> Fees': '手数料<1>{{amount}}</1>',
  'You receive {{amount}} of the referred user’s fees':
    '紹介されたユーザーの手数料の{{amount}}を受け取ります',
  '<1>{{amount}}</1> Points': 'ポイント<1>{{amount}}</1>',
  'You receive {{amount}} of the referred user’s points':
    '紹介されたユーザーのポイントの{{amount}}を受け取ります',
  '<1>{{amount}}</1> Discount': '<1>{{amount}}</1>割引',
  'Your friend receives {{amount}} discount on fees':
    '友達は手数料の<割引を受け取りま{{amount}}割引を受け取ります',
  'Create and share your custom referral code':
    'カスタム紹介コードを作成して共有する',
  'If you have referred <1>>{{amount}}</1> in 30d volume or have <1>{{followers}}</1>+ social media followers, you can apply for the affiliate program.':
    '30日間の取引量で<1>>{{amount}}</1>を紹介したか、<1>{{followers}}</1>+のソーシャルメディアのフォロワーがいる場合、アフィリエイトプログラムに申し込むことができます。',
  Apply: '適用する',
  'Connect your wallet to see your Referral History.':
    'ウォレットを接続して紹介履歴を表示します。',
  'Welcome to Paradex': 'Paradexへようこそ',
  'Congrats! The referral code you used is now active! It means you can start enjoying a discount on your trading fees!':
    'おめでとうございます！使用した紹介コードが有効になりました！これは、取引手数料の割引を楽しむことができることを意味します！',
  'Congrats! The referral code <1>{{codeProvided}}</1> used is now active!':
    'おめでとうございます！使用した紹介コード<1>{{codeProvided}}</1>が有効になりました！',
  'Referral code not activated. The code can only be applied once during the initial onboarding.':
    '紹介コードが有効になっていません。コードは初回のオンボーディング時に1回だけ適用できます。',
  'Referral code <1>{{codeProvided}}</1> not activated. You have already onboarded with <1>{{referredBy}}</1>.':
    '紹介コード<1>{{codeProvided}}</1>が有効になっていません。すでに<1>{{referredBy}}</1>でオンボードしています。',
  'Referral Code Applied': '紹介コードが適用されました',
  "You will receive <1>{{userAmount}}</1> of referred user's <1>fees</1> <2>and</2> <1>{{userAmountPoints}} points</1>. They will receive a <1>{{friendAmount}}</1> discount.":
    'あなたは紹介されたユーザーの<1>手数料</1>の<1>{{userAmount}}</1>と<1>ポイント</1>の<1>{{userAmountPoints}}</1>を受け取ります。彼らは<1>{{friendAmount}}</1>の割引を受け取ります。',
  Community: 'コミュニティ',
  Environments: '環境',
  Language: '言語',
  'System Status': 'システムステータス',
  Docs: 'ドキュメント',
  'API Docs': 'APIドキュメント',
  'Code Samples': 'コードサンプル',
  More: 'もっと',
  Stats: '統計',
  'Join Discord': 'Discordに参加',
  Notifications: '通知',
  'All caught up!': '全て最新の状態です！',
  'You have no new notifications': '新しい通知はありません',
  'Connect Wallet': 'ウォレットを接続',
  'WalletConnect is taking too long to open. Please refresh the page and try again.':
    'WalletConnectのオープンに時間がかかりすぎています。ページを更新してもう一度お試しください。',
  'Unexpected error opening WalletConnect modal. Please refresh the page and try again.':
    'WalletConnectモーダルのオープン中に予期しないエラーが発生しました。ページを更新してもう一度お試しください。',
  'Connect your Wallet': 'あなたのウォレットを接続',
  'Link Wallet': 'ウォレットをリンク',
  'You will receive a signature request. Signing is free and will not send a transaction.':
    '署名リクエストを受け取ります。署名は無料で、トランザクションは送信されません。',
  'Generate Paradex Chain wallet': 'Paradexチェーンウォレットを生成',
  'Generating Paradex Chain wallet': 'Paradexチェーンウォレットを生成中',
  'Paradex Chain wallet generated': 'Paradexチェーンウォレットが生成されました',
  'Verify that you own this wallet': 'このウォレットの所有を確認する',
  'Remember Me': '私を覚えておいて',
  'Only use “Remember Me” if you are using a secure device you own. Selecting this option can expose your information to  others if you are accessing this wallet from a public device.':
    '「私を覚えておいて」は、自分が所有する安全なデバイスを使用している場合にのみ使用してください。このオプションを選択すると、公共のデバイスからこのウォレットにアクセスしている場合、他の人に情報が公開される可能性があります。',
  Continue: '続ける',
  'Disconnect Wallet': 'ウォレットの接続を解除',
  Disconnect: '切断',
  Account: 'アカウント',
  Username: 'ユーザー名',
  Edit: '編集',
  'Your username is now hidden. It is not visible to other users.':
    'あなたのユーザー名は現在非表示です。他のユーザーには表示されません。',
  'Your username will be visible to other users unless you choose to hide it. You can always change it later.':
    'ユーザー名は、非表示に設定しない限り他のユーザーに表示されます。後でいつでも変更することができます。',
  'Hide my Username': 'ユーザー名を隠す',
  Save: '保存',
  'Username is required': 'ユーザー名は必須です',
  'Username must be between 5 and 20 characters':
    'ユーザー名は5文字から20文字の間でなければなりません',
  'Username can only contain letters and numbers':
    'ユーザー名は文字と数字のみ含めることができます',
  Wallets: 'ウォレット',
  'Paradex Block Explorer': 'Paradexブロックエクスプローラ',
  'Sign Out': 'サインアウト',
  'No markets available': '利用可能な市場はありません',
  'Last Price': '最終価格',
  'Open Interest': '未決済の注文',
  '24h Volume': '24時間の取引量',
  'Mark Price': 'マーク価格',
  'Spot Oracle Price': 'スポットオラクル価格',
  'Eight hour funding rate that is continuously accrued on positions and settled upon any trade. If the funding rate is positive, longs pay shorts. If negative, shorts pay longs.':
    'ポジションに連続して蓄積され、取引時に決済される8時間の資金調達率。資金調達率がプラスの場合、ロングはショートに支払います。マイナスの場合、ショートはロングに支払います。',
  '8h Funding': '8時間の資金調達',
  Limit: '制限',
  Market: '市場',
  'Stop Limit': 'ストップリミット',
  'Stop Market': 'ストップマーケット',
  'Scaled Order': 'スケールオーダー',
  'Trigger Price': 'トリガープライス',
  'Limit Price': '制限価格',
  Amount: '数量',
  'Reduce Only': '減少のみ',
  'Reduce Only will increase position':
    'リデュースオンリーはポジションを増やします',
  'Your order stays open until it is filled or you decide to cancel.':
    '注文は、埋められるかキャンセルするまで開いたままです。',
  'Your order gets filled right away, partially or fully, and whatever is left gets canceled instantly.':
    '注文はすぐに部分的または完全に埋められ、残った部分は即座にキャンセルされます。',
  'Conditional limit order that serves to add liquidity to the order book as a Maker order.':
    'メーカーオーダーとして注文ブックに流動性を追加するための条件付きリミットオーダー。',
  'Currently the fees are fixed and uniform across the platform. Maker {{makerFee}} / Taker {{takerFee}}':
    '現在、手数料はプラットフォーム全体で固定かつ一様です。メーカー {{makerFee}} / テイカー {{takerFee}}',
  Notional: '名目',
  Buy: '購入',
  BUY: '購入',
  LONG: 'ロング',
  Sell: '売却',
  SELL: '売却',
  SHORT: 'ショート',
  'Order Value': '注文の価値',
  'Current Position': '現在のポジション',
  'Account Value': '口座の価値',
  'The total value of your account at current mark prices':
    '現在のマーク価格でのあなたの口座の総価値',
  'Unrealized P&L': '未実現損益',
  'Free Collateral': '自由担保',
  'Account Leverage': '口座のレバレッジ',
  Margin: 'マージン',
  'Margin Ratio': '証拠金比率',
  'Initial Margin': '初期マージン',
  'Maintenance Margin': '維持マージン',
  'Order Book': '注文簿',
  Trades: '取引',
  Price: '価格',
  Size: 'サイズ',
  Total: '合計',
  Time: '時間',
  Spread: 'スプレッド',
  Positions: 'ポジション',
  'Open Orders': '未決済の注文',
  'Trade History': '取引履歴',
  'Order History': '注文履歴',
  'Funding Payments': '資金調達の支払い',
  Side: 'サイド',
  'Entry Price': 'エントリー価格',
  'Liquidation Price': '清算価格',
  'Unrealized Funding': '未実現の資金調達',
  'Close Position': 'ポジションを閉じる',
  'Market Close': '市場クローズ',
  'Close Long': 'ロングをクローズ',
  'Close Short': 'ショートをクローズ',
  Type: 'タイプ',
  Filled: '埋まった',
  Triggered: 'トリガーされました',
  Instruction: '指示',
  'Client Order Id': 'クライアントの注文ID',
  Status: 'ステータス',
  NEW: '新規',
  OPEN: 'オープン',
  UNTRIGGERED: 'トリガーされていません',
  CLOSED: 'クローズド',
  Pending: '保留中',
  Complete: '完了',
  Bust: 'バスト',
  'Notional / Fee': '名目 / 手数料',
  Liquidity: '流動性',
  'Tx Hash': 'Txハッシュ',
  'Trade Id': '取引ID',
  Remaining: '残り',
  'Cancel Reason': 'キャンセルの理由',
  'User Canceled': 'ユーザーによるキャンセル',
  'Not Enough Margin': 'マージンが不足',
  'Empty Market': '市場が空',
  'Post Only': 'ポストのみ',
  'Post Only Would Cross': 'ポストのみがクロスします',
  'Remaining IOC Cancel': '残りのIOCキャンセル',
  'Unexpected Failure': '予期しない失敗',
  Deleverage: 'デレバレッジ',
  'In Liquidation': '清算中',
  'Self Trade': '自己取引',
  'Asset Unavailable': '資産利用不可',
  'Asset Expired': '資産の有効期限切れ',
  'Order Type Invalid': '注文タイプが無効',
  'Price Not Available': '価格が利用できません',
  Expired: '期限切れ',
  'Price Outside Bands': 'バンド外の価格',
  Timeout: 'タイムアウト',
  'Order Exceeds Position Limit': '注文がポジション限度を超えています',
  'Order Id': '注文ID',
  Payment: '支払い',
  'Cancel All': 'すべてキャンセル',
  '{{orderSize}} will be closed at Market price':
    '{{orderSize}}は市場価格でクローズされます',
  'By connecting a wallet, you agree to <1>Paradex Terms of Service</1> and represent and warrant to Paradex that you are not a <2>Restricted Person</2>.':
    'ウォレットを接続することで、あなたは<1>Paradexの利用規約</1>に同意し、Paradexに対して<2>制限された人物</2>ではないことを表明および保証します。',
  Wallet: 'ウォレット',
  Deposit_verb: '預金する',
  Deposit_noun: '預金',
  Withdraw: '引き出す',
  Withdrawal: '引き出し',
  Transfers: '転送',
  Transfer: '転送',
  'Collateral Value': '担保価値',
  'Position Value': 'ポジション価値',
  Collateral: '担保',
  Asset: '資産',
  'Wallet Balance': 'ウォレット残高',
  Actions: 'アクション',
  Action: 'アクション',
  'External Tx Hash': '外部Txハッシュ',
  'Withdraw to Wallet': 'ウォレットへの引き出し',
  'Deposit to Paraclear': 'Paraclearへの預け入れ',
  'You have no balance in your Ethereum wallet. Deposit some {{asset}} and try again.':
    'あなたのEthereumウォレットに残高がありません。{{asset}}を預け入れて再試行してください。',
  'It is not possible to deposit more than your current balance.':
    '現在の残高以上を預け入れることはできません。',
  Available: '利用可能',
  'Initiate a deposit from your Ethereum wallet to the Paradex bridge. These transactions':
    'EthereumウォレットからParadexブリッジへの預け入れを開始します。これらの取引',
  'Initiate a deposit from your Ethereum wallet to the Paradex bridge. These transactions may take several minutes depending on network conditions. For more information check out our <1>docs</1>.':
    'EthereumウォレットからParadexブリッジへの預け入れを開始します。これらの取引は、ネットワークの状況に応じて数分かかる場合があります。詳細については、<1>ドキュメント</1>をご覧ください。',
  'read more': 'もっと読む',
  'Initiate Deposit to Bridge': 'ブリッジへの預け入れを開始',
  'Enable USDC on Paradex': 'ParadexでUSDCを有効にする',
  'In order to deposit you must allow Paradex access to at least {{amount}}.':
    '預け入れるためには、Paradexが少なくとも{{amount}}にアクセスできるように許可する必要があります。',
  'Enable USDC': 'USDCを有効にする',
  'Withdraw initiated': '引き出しが開始されました',
  'Withdrawals are a two-step process. First initiate a withdrawal from Paraclear':
    '引き出しは2ステップのプロセスです。まず、Paraclearからの引き出しを開始します',
  'Withdrawals are a two-step process. First initiate a withdrawal from Paraclear to the Starknet bridge. This first step can take 2-7 hours. Second, initiate your withdrawal from the Starknet bridge to your Ethereum wallet via the Deposits / Withdrawals table. For more information check out our <1>docs</1>.':
    '引き出しは2ステップのプロセスです。まず、ParaclearからStarknetブリッジへの引き出しを開始します。この最初のステップには2〜7時間かかることがあります。次に、StarknetブリッジからあなたのEthereumウォレットへの引き出しを、預け入れ/引き出し表を通じて開始します。詳細は<1>ドキュメント</1>をご覧ください。',
  'Initiate Withdrawal to Bridge': 'ブリッジへの引き出しを開始',
  'You have no funds to withdraw. It is not possible to withdraw more than your free collateral.':
    '引き出す資金がありません。自由担保以上を引き出すことはできません。',
  'It is not possible to withdraw more than your free collateral.':
    '自由担保以上を引き出すことはできません。',
  'You have no collateral': '担保がありません',
  'You have no open positions': 'オープンポジションがありません',
  'You have no open orders': 'オープンオーダーがありません',
  'You have no trades': '取引がありません',
  'You have no orders': '注文がありません',
  'You have no funding payments': '資金調達の支払いがありません',
  'You have no transfers': '転送がありません',
  'Account in liquidation': 'アカウントが清算中',
  'Account is being liquidated. Any open positions will be closed. Trading now is disabled.':
    'アカウントが清算中です。オープンポジションはすべて閉じられます。現在、取引は無効化されています。',
  'Account liquidated': 'アカウントが清算されました',
  'Your account was liquidated on {{createdAt}}. Any open positions were closed.':
    'あなたのアカウントは{{createdAt}}に清算されました。全てのオープンポジションは閉じられました。',
  'Deposit to Paraclear successful': 'Paraclearへの預け入れが成功しました',
  'Deposit to Paraclear failed': 'Paraclearへの預け入れに失敗しました',
  'Unexpected error. Try again.':
    '予期しないエラーが発生しました。再試行してください。',
  'Deposit initiated': '預け入れが開始されました',
  'Deposit to bridge initiated': 'ブリッジへの預け入れが開始されました',
  'Deposit to Paraclear available': 'Paraclearへの預け入れが可能です',
  'Go to Deposits': '預け入れに進む',
  'Deposit to Paraclear in progress': 'Paraclearへの預け入れが進行中です',
  'Transfer successful': '転送が成功しました',
  '<1>Paradex Beta</1> This is a Beta version of Paradex, the product is still being tested and can be subject to bugs and errors. For more details please read carefully the <2>Paradex terms of service</2> & <3>documentation</3>.':
    '<1>Paradex Beta</1> これはParadexのベータ版です。製品はまだテスト中であり、バグやエラーの対象となる可能性があります。詳細については、<2>Paradex利用規約</2>と<3>ドキュメント</3>をよくお読みください。',
  'Limit {{side}} Order Fill': '制限{{side}}注文埋め',
  '{{type}} {{side}} Order Submitted': '{{type}} {{side}}注文が提出されました',
  '{{type}} {{side}} Order Canceled':
    '{{type}} {{side}}注文がキャンセルされました',
  Reason: '理由',
  'Market {{side}} Order Fill': '市場{{side}}注文埋め',
  'Trade Busted On-Chain': 'オンチェーンで取引が破綻しました',
  'Fill id': '埋めID',
  'Withdraw to wallet failed': 'ウォレットへの引き出しに失敗しました',
  'Withdrawal to bridge initiated': 'ブリッジへの引き出しが開始されました',
  'Withdrawal error. Try again.': '引き出しエラー。再試行してください。',
  'Withdrawal to bridge in progress': 'ブリッジへの引き出しが進行中です',
  'Withdrawal to wallet initiated': 'ウォレットへの引き出しが開始されました',
  'Withdrawal to bridge failed': 'ブリッジへの引き出しに失敗しました',
  'Transaction error. Try again.': '取引エラー。再試行してください。',
  'Withdrawal to wallet available': 'ウォレットへの引き出しが可能です',
  'Go to Withdrawals': '引き出しに進む',
  'Withdrawal to wallet successful': 'ウォレットへの引き出しが成功しました',
  'Session expired, please connect your wallet again.':
    'セッションが期限切れです、再度ウォレットを接続してください。',
  'Failed to submit order': '注文の提出に失敗しました',
  'Your username preferences were updated!':
    'ユーザー名の設定が更新されました！',
  'Unexpected error updating username preferences':
    'ユーザー名の設定更新中に予期しないエラーが発生しました',
  'This username already exists. Please choose a different username and try again.':
    'このユーザー名は既に存在します。別のユーザー名を選択して再試行してください。',
  'Validation Error': '検証エラー',
  'Binding Error': 'バインディングエラー',
  'Internal Error': '内部エラー',
  'Not Found': '見つかりません',
  'Service Unavailable': 'サービス利用不可',
  'Invalid Request Parameter': '無効なリクエストパラメータ',
  'Order Id Not Found': '注文IDが見つかりません',
  'Order Is Closed': '注文は閉じられています',
  'Order Is Not Open Yet': '注文はまだ開かれていません',
  'Client Order Id Not Found': 'クライアントの注文IDが見つかりません',
  'Duplicated Client Id': '重複したクライアントID',
  'Invalid Price Precision': '無効な価格精度',
  'Invalid Token': '無効なトークン',
  'Invalid Ethereum Address': '無効なEthereumアドレス',
  'Blocked Ethereum Address': 'ブロックされたEthereumアドレス',
  'Invalid Ethereum Signature': '無効なEthereum署名',
  'Invalid Starknet Address': '無効なStarknetアドレス',
  'Invalid Starknet Signature': '無効なStarknet署名',
  'Starknet Signature Verification Failed': 'Starknet署名の検証に失敗しました',
  'Bad Starknet Request': '不正なStarknetリクエスト',
  'Ethereum Signer Mismatch': 'Ethereum署名者の不一致',
  'Ethereum Hash Mismatch': 'Ethereumハッシュの不一致',
  'Not Onboarded': 'オンボーディングされていません',
  'Invalid Timestamp': '無効なタイムスタンプ',
  'Invalid Signature Expiration': '無効な署名の有効期限',
  'Account Not Found': 'アカウントが見つかりません',
  'Invalid Order Signature': '無効な注文署名',
  'Public Key Invalid': '公開鍵が無効',
  'Unauthorized Ethereum Address': '許可されていないEthereumアドレス',
  'Ethereum Address Already Onboarded':
    '既にオンボーディングされているEthereumアドレス',
  'Market Not Found': 'マーケットが見つかりません',
  'Allowlist Entry Not Found': '許可リストのエントリが見つかりません',
  'Username In Use': 'ユーザー名が既に使用されています',
  'Service access restricted in your region':
    'あなたの地域ではサービスのアクセスが制限されています',
  'No Access Allowed': 'アクセスは許可されていません',
  'You do not have access to the platform. Please join our Discord to get access.':
    'あなたはプラットフォームへのアクセス権を持っていません。アクセスを得るためには、私たちのDiscordに参加してください。',
  '{{actualChainName}} Wallet Connected': 'Ethereumウォレットが接続されました',
  'Incorrect network selected "{{actualChainName}}". Please change the network to "{{requiredChainName}}" (id={{requiredChainId}}) in your wallet and retry.':
    '選択されたネットワーク"{{actualChainName}}"が正しくありません。ウォレットでネットワークを"{{requiredChainName}}"（id={{requiredChainId}}）に変更して、再試行してください。',
  'Choose Wallet': 'ウォレットを選択',
  'Connect with Starknet Wallet': 'Starknetウォレットに接続する',
  'Thank you for your interest! We are hard at work to roll out support for Starknet wallets very soon. Subscribe to our <1>Telegram</1> channel or follow us on <2>Twitter</2> to know first when it will be available.':
    'ご関心をお寄せいただきありがとうございます！Starknetウォレットのサポートを間もなく展開する予定です。私たちの<1>テレグラム</1>チャンネルに登録するか、<2>ツイッター</2>でフォローして、利用可能になったらすぐに知ることができます。',
  'Switch to {{env}}': '{{env}}に切り替える',
  Search: '検索',
  League: 'リーグ',
  'Switch Account': 'アカウントを切り替える',
};

export default translations;
