import { Keys } from './en';

const translations: Record<Keys, string> = {
  Portfolio: '投資組合',
  Trade: '交易',
  Developers: '開發者',
  Community: '社區',
  Environments: '環境',
  'System Status': '系統狀態',
  Docs: '文件',
  'API Docs': 'API文件',
  'Code Samples': '代碼示例',
  More: '更多',
  Stats: '統計',
  'Join Discord': '加入Discord',
  Notifications: '通知',
  'All caught up!': '全部趕上了！',
  'You have no new notifications': '您沒有新的通知',
  'Display Toast Notifications': '顯示吐司通知',
  'Connect Wallet': '連接錢包',
  'Connect your Wallet': '連接您的錢包',
  'Choose Wallet': '選擇錢包',
  'Link Wallet': '鏈接錢包',
  'You will receive a signature request. Signing is free and will not send a transaction.':
    '您將收到簽名請求。簽名是免費的，不會發送交易。',
  'Generate Private Key': '生成私鑰',
  'Generating Private Key': '正在生成私鑰',
  'Private Key Generated': '私鑰已生成',
  'Enable secure access to our API': '啟用對我們API的安全訪問',
  'Remember Me': '記住我',
  'Only use “Remember Me” if you are using a secure device you own. Selecting this option can expose your information to  others if you are accessing this wallet from a public device.':
    '只有在使用您自己的安全設備時才使用“記住我”。如果您從公共設備訪問此錢包，選擇此選項可能會將您的信息暴露給其他人。',
  Continue: '繼續',
  'Disconnect Wallet': '斷開錢包',
  Disconnect: '斷開',
  Account: '賬戶',
  Username: '用戶名',
  Edit: '編輯',
  'Your username is now hidden. It is not visible to other users.':
    '您的用戶名現在已隱藏。其他用戶看不到。',
  'Edit Your Username': '編輯您的用戶名',
  'Your username will be visible to other users unless you choose to hide it. You can always change it later.':
    '除非您選擇隱藏，否則您的用戶名將對其他用戶可見。您隨時可以稍後更改。',
  'Hide my Username': '隱藏我的用戶名',
  Save: '保存',
  'Username is required': '需要用戶名',
  'Username must be between 5 and 20 characters': '用戶名必須在5到20個字符之間',
  'Username can only contain letters and numbers': '用戶名只能包含字母和數字',
  Wallets: '錢包',
  'L1 Address': 'L1地址',
  'L2 Address': 'L2地址',
  'Open in Explorer': '在瀏覽器中打開',
  'Sign Out': '登出',
  'Copy L2 Private Key': '複製L2私鑰',
  'No markets available': '沒有可用市場',
  'Last Price': '最後價格',
  'Open Interest': '未平倉合約',
  '24h Volume': '24小時交易量',
  'Mark Price': '標記價格',
  'Spot Oracle Price': '現貨甲骨文價格',
  'Eight hour funding rate that is continuously accrued on positions and settled upon any trade':
    '持續累積的八小時資金利率，並在任何交易結算',
  '8h Funding Rate': '8小時資金利率',
  Limit: '限價',
  LIMIT: '限價',
  Market: '市價',
  MARKET: '市價',
  'Limit Price': '限價',
  Amount: '數量',
  'Your order stays open until it is filled or you decide to cancel.':
    '您的訂單將保持開放，直到被執行或您決定取消。',
  'Your order gets filled right away, partially or fully, and whatever is left gets canceled instantly.':
    '您的訂單將立即被執行，部分或全部，剩下的將立即被取消。',
  Fee: '費用',
  'Currently the fees are fixed and uniform across the platform. Maker {{makerFee}} / Taker {{takerFee}}':
    '目前，費用在平台上是固定和統一的。製造商 {{makerFee}} / 接受者 {{takerFee}}',
  Notional: '名義',
  Buy: '買入',
  BUY: '買入',
  LONG: '做多',
  Sell: '賣出',
  SELL: '賣出',
  SHORT: '做空',
  'Account Value': '賬戶價值',
  'The total value of your account at current mark prices':
    '您的賬戶在當前標記價格下的總價值',
  'Unrealized P&L': '未實現的損益',
  'Free Collateral': '可用擔保',
  'Account Leverage': '賬戶槓桿',
  Margin: '保證金',
  'Initial Margin': '初始保證金',
  'Maintenance Margin': '維護保證金',
  'Account value / maintenance margin requirements': '賬戶價值/維護保證金要求',
  'Health Factor': '健康因數',
  'Order Book': '訂單簿',
  Trades: '交易',
  Price: '價格',
  Size: '大小',
  Total: '總計',
  Time: '時間',
  Spread: '價差',
  Positions: '位置',
  'Open Orders': '未完成訂單',
  'Trade History': '交易歷史',
  'Order History': '訂單歷史',
  'Funding Payments': '資金支付',
  Side: '方向',
  'Entry Price': '入場價格',
  'Unrealized Funding': '未實現的資金',
  'Close Position': '關閉位置',
  Type: '類型',
  Filled: '已填充',
  Instruction: '指令',
  'Client Order Id': '客戶訂單ID',
  Status: '狀態',
  NEW: '新的',
  OPEN: '開放',
  CLOSED: '已關閉',
  Pending: '待定',
  Complete: '完成',
  Bust: '破產',
  'Notional / Fee': '名義 / 費用',
  Liquidity: '流動性',
  'Tx Hash': '交易哈希',
  Id: '識別碼',
  Remaining: '剩餘',
  'Cancel Reason': '取消原因',
  'User Canceled': '用戶已取消',
  'Not Enough Margin': '保證金不足',
  'Empty Market': '空市場',
  'Post Only Would Cross': '僅發布會交叉',
  'Remaining IOC Cancel': '剩餘的IOC取消',
  'Unexpected Failure': '意外失敗',
  Deleverage: '去杠杆',
  'In Liquidation': '在清算中',
  'Self Trade': '自我交易',
  'Asset Unavailable': '資產不可用',
  'Asset Expired': '資產已過期',
  'Order Type Invalid': '訂單類型無效',
  'Price Not Available': '價格不可用',
  Expired: '已過期',
  'Price Outside Bands': '價格超出範圍',
  Timeout: '超時',
  'Order Exceeds Position Limit': '訂單超過位置限制',
  'Order Id': '訂單ID',
  Payment: '付款',
  'Cancel All': '取消全部',
  '{{orderSize}} will be closed at Market price':
    '{{orderSize}}將以市場價格關閉',
  'By connecting a wallet, you agree to <1>Paradex Terms of Service</1> and represent and warrant to Paradex that you are not a <2>Restricted Person</2>.':
    '通過連接錢包，您同意<1>Paradex服務條款</1>，並向Paradex聲明和保證您不是<2>受限人士</2>。',
  Wallet: '錢包',
  Deposit: '存款',
  Withdraw: '提款',
  Withdrawal: '提款',
  'Collateral Value': '抵押品價值',
  'Position Notional': '頭寸名義',
  Collateral: '抵押品',
  Asset: '資產',
  'Wallet Balance': '錢包餘額',
  Actions: '操作',
  Action: '行動',
  'Tx Hash L2': '交易哈希 L2',
  'Tx Hash L1': '交易哈希 L1',
  'Withdraw to Wallet': '提款到錢包',
  'Deposit to Paraclear': '存款到Paraclear',
  'You have no balance in your Ethereum wallet. Deposit some {{asset}} and try again.':
    '您的以太坊錢包沒有餘額。存入一些{{asset}}然後再試一次。',
  'It is not possible to deposit more than your current balance.':
    '不能存款超過您當前的餘額。',
  'Available on L1': '在L1上可用',
  'Deposits are a two-step process. First initiate a deposit from your Ethereum wallet':
    '存款是兩步驟的過程。首先從您的以太坊錢包發起存款',
  'Deposits are a two-step process. First initiate a deposit from your Ethereum wallet to the Starknet bridge. Second, initiate deposit from the Starknet bridge to Paraclear via the Deposit / Withdraw table. These transactions may take several minutes depending on network conditions. For more information check out our <1>docs</1>.':
    '存款是兩步驟的過程。首先從您的以太坊錢包發起存款到Starknet橋。其次，通過存款/提款表從Starknet橋發起存款到Paraclear。這些交易可能需要幾分鐘的時間，具體取決於網絡條件。欲了解更多信息，請查看我們的<1>文檔</1>。',
  'read more': '閱讀更多',
  'Initiate Deposit to Bridge': '開始存款到橋',
  'Enable USDC on Paradex': '在Paradex上啟用USDC',
  'In order to deposit you must allow Paradex access to at least {{amount}}.':
    '為了存款，您必須允許Paradex訪問至少{{amount}}。',
  'Enable USDC': '啟用USDC',
  'Withdraw initiated': '已開始提款',
  'Withdrawals are a two-step process. First initiate a withdrawal from Paraclear':
    '提款是兩步驟的過程。首先從Paraclear開始提款',
  'Withdrawals are a two-step process. First initiate a withdrawal from Paraclear to the Starknet bridge. This first step can take 2-7 hours. Second, initiate your withdrawal from the Starknet bridge to your Ethereum wallet via the Deposit / Withdraw table. For more information check out our <1>docs</1>.':
    '提款是兩步驟的過程。首先從Paraclear開始提款到Starknet橋。這第一步可能需要2-7小時。其次，通過存款/提款表從Starknet橋開始將您的提款轉到您的以太坊錢包。欲了解更多信息，請查看我們的<1>文檔</1>。',
  'Initiate Withdrawal to Bridge': '開始提款到橋',
  'You have no funds to withdraw. It is not possible to withdraw more than your free collateral.':
    '您沒有可提款的資金。不能提款超過您的可用抵押品。',
  'It is not possible to withdraw more than your free collateral.':
    '不能提款超過您的可用抵押品。',
  'You have no collateral': '您沒有抵押品',
  'You have no open positions': '您沒有開放的頭寸',
  'You have no open orders': '您沒有未完成的訂單',
  'You have no trades': '您沒有交易',
  'You have no orders': '您沒有訂單',
  'You have no funding payments': '您沒有資金支付',
  'You have no transfers': '您沒有轉賬',
  'Account in liquidation': '賬戶正在清算',
  'Account is being liquidated. Any open positions will be closed. Trading now is disabled.':
    '賬戶正在被清算。任何開放的頭寸將被關閉。現在禁止交易。',
  'Account liquidated': '賬戶已清算',
  'Your account was liquidated on {{createdAt}}. Any open positions were closed.':
    '您的賬戶在{{createdAt}}被清算。任何開放的頭寸已被關閉。',
  'Deposit to Paraclear successful': '存款到Paraclear成功',
  'Deposit to Paraclear failed': '存款到Paraclear失敗',
  'Unexpected error. Try again.': '意外錯誤。請再試一次。',
  'Deposit to bridge initiated': '已開始向橋存款',
  'Deposit to Paraclear available': '可以存款到Paraclear',
  'Go to Deposits': '去存款',
  'Deposit to Paraclear in progress': '正在進行存款到Paraclear',
  '<1>Paradex Closed Beta</1> This is a CLOSED BETA version of Paradex, the product is still being tested and can be subject to bugs and errors. For more details please read carefully the <2>Paradex terms of service</2> & <3>documentation</3>.':
    '<1>Paradex封閉測試版</1> 這是Paradex的封閉測試版，產品仍在測試中，可能存在錯誤和問題。欲了解更多詳情，請仔細閱讀<2>Paradex服務條款</2>和<3>文檔</3>。',
  'Limit {{side}} Order Fill': '限價{{side}}訂單填充',
  '{{type}} {{side}} Order Submitted': '{{type}} {{side}}訂單已提交',
  '{{type}} {{side}} Order Canceled': '{{type}} {{side}}訂單已取消',
  Reason: '原因',
  'Market {{side}} Order Fill': '市價{{side}}訂單填充',
  'Trade Busted On-Chain': '鏈上交易破裂',
  'Fill id': '填充id',
  'Withdraw to wallet failed': '提款到錢包失敗',
  'Withdrawal to bridge initiated': '已開始向橋提款',
  'Withdrawal error. Try again.': '提款錯誤。請再試一次。',
  'Withdrawal to bridge in progress': '正在進行向橋提款',
  'Withdrawal to wallet initiated': '已開始向錢包提款',
  'Withdrawal to bridge failed': '向橋提款失敗',
  'Transaction error. Try again.': '交易錯誤。請再試一次。',
  'Withdrawal to wallet available': '可以提款到錢包',
  'Go to Withdrawals': '去提款',
  'Withdrawal to wallet successful': '提款到錢包成功',
  'Session expired, please connect your wallet again.':
    '會話已過期，請再次連接您的錢包。',
  'Failed to submit order': '提交訂單失敗',
  'Your username preferences were updated!': '您的用戶名偏好設置已更新！',
  'Unexpected error updating username preferences':
    '更新用戶名偏好設置時出現意外錯誤',
  'This username already exists. Please choose a different username and try again.':
    '此用戶名已存在。請選擇一個不同的用戶名並再試一次。',
  'Validation Error': '驗證錯誤',
  'Binding Error': '綁定錯誤',
  'Internal Error': '內部錯誤',
  'Not Found': '未找到',
  'Service Unavailable': '服務不可用',
  'Invalid Request Parameter': '無效的請求參數',
  'Order Id Not Found': '找不到訂單ID',
  'Order Is Closed': '訂單已關閉',
  'Order Is Not Open Yet': '訂單尚未開放',
  'Client Order Id Not Found': '找不到客戶訂單ID',
  'Duplicated Client Id': '重複的客戶ID',
  'Invalid Price Precision': '價格精度無效',
  'Invalid Token': '無效的令牌',
  'Invalid Ethereum Address': '無效的以太坊地址',
  'Invalid Ethereum Signature': '無效的以太坊簽名',
  'Invalid Starknet Address': '無效的Starknet地址',
  'Invalid Starknet Signature': '無效的Starknet簽名',
  'Starknet Signature Verification Failed': 'Starknet簽名驗證失敗',
  'Bad Starknet Request': '錯誤的Starknet請求',
  'Ethereum Signer Mismatch': '以太坊簽名者不匹配',
  'Ethereum Hash Mismatch': '以太坊哈希不匹配',
  'Not Onboarded': '未登記',
  'Invalid Timestamp': '無效的時間戳',
  'Invalid Signature Expiration': '無效的簽名過期',
  'Account Not Found': '找不到賬戶',
  'Invalid Order Signature': '無效的訂單簽名',
  'Public Key Invalid': '公鑰無效',
  'Unauthorized Ethereum Address': '未授權的以太坊地址',
  'Ethereum Address Already Onboarded': '以太坊地址已登記',
  'Market Not Found': '找不到市場',
  'Allowlist Entry Not Found': '找不到允許列表條目',
  'Username In Use': '用戶名已被使用',
  'Service access restricted in your region': '您的地區限制服務訪問',
  'No Access Allowed': '不允許訪問',
  'You do not have access to the platform. Please join our Discord to get access.':
    '您無權訪問該平台。請加入我們的Discord以獲取訪問權限。',
  'Ethereum Wallet Connected': '以太坊錢包已連接',
  'Incorrect network selected "{{actualChainName}}". Please change the network to "{{requiredChainName}}" (id={{requiredChainId}}) in your wallet and retry.':
    '選擇的網絡"{{actualChainName}}"不正確。請在您的錢包中將網絡更改為"{{requiredChainName}}"（id={{requiredChainId}}）並重試。',
};

export default translations;
