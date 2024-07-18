import { Keys } from './en';

const translations: Record<Keys, string> = {
  'This feature currently is still in Beta. Backup your Paradex Private Key for additional safety.':
    '此功能目前仍处于测试阶段。为额外的安全性，请备份您的Paradex私钥。',
  'Deposit failed': '存款失败',
  'Deposit in progress': '存款进行中',
  'External Account': '外部账户',
  'Tx Hashes': '交易哈希',
  'Continue to {{bridge}}': '继续前往{{bridge}}',
  'By clicking Continue to {{bridge}}, you will be sent to {{bridge}} website to bridge your funds out of Paradex.':
    '点击继续前往{{bridge}}，您将被引导到{{bridge}}网站以将您的资金从Paradex转移出去。',
  'By clicking Continue to {{bridge}}, you will be sent to {{bridge}} website to bridge your funds to Paradex.':
    '点击继续前往{{bridge}}，您将被引导到{{bridge}}网站以将您的资金转移到Paradex。',
  Refer: '推荐',
  Address: '地址',
  'Date Joined': '加入日期',
  'Referral Code': '推荐码',
  'Volume Traded': '交易量',
  Bridge: '桥',
  'Withdraw to': '提取至',
  'Deposit from': '存入自',
  'Position is already closed': '位置已经关闭',
  'Your Paradex L2 Address is NOT a Public Starknet Address. If you try to send funds to this address on Public Starknet via a cross chain bridge you risk losing your funds. <1>Read more</1>.':
    '您的Paradex L2地址不是公共Starknet地址。如果您尝试通过跨链桥将资金发送到公共Starknet上的此地址，您将面临失去资金的风险。<1>阅读更多</1>。',
  '{{chain}} Address': '{{chain}}地址',
  'Copy Paradex Private Key': '复制Paradex私钥',
  'Your account will be liquidated if Margin Ratio reaches 100%':
    '如果保证金比率达到100%，您的账户将被清算',
  Liquidation: '清算',
  Fee: '费用',
  Maker: '制造商',
  'Maker Score': '制造商得分',
  'Maker Points Share': '制造商积分占比',
  'Fee Points Share': '手续费积分占比',
  'Fee Points': '手续费积分',
  'Maker Points': '制造商积分',
  'Liquidation {{side}} Fill': '清算 {{side}} 填充',
  Settings: '设置',
  'Market Score': '市场得分',
  'Points Pre-Season': '积分季前赛',
  'Season {{season}} (coming soon)': '赛季 {{season}} (即将推出)',
  'Confirm Buy': '确认购买',
  'Confirm Sell': '确认出售',
  'Other Points': '其他积分',
  'Estimated Receivable Amount': '预计可收到的金额',
  'Socialized Loss active. Click to learn more.':
    '社会化损失已激活。点击了解更多。',
  Analytics: '分析',
  'Sign In to see your account Points stats': '登录以查看您的账户积分统计',
  '<1>Clock Is Out Of Sync</1> The clock on your device is out of sync. This may cause issues with the application. Please make sure your device clock is set to be auto. For more details please <2>see documentation</2>':
    '<1>设备时钟不同步</1> 您的设备时钟不同步。这可能会导致应用程序出现问题。请确保您的设备时钟设置为自动。更多详情请<2>查看文档</2>',
  'Failed to fetch max withdrawable amount': '无法获取最大可提取金额',
  'It is not possible to withdraw more than your Max Withdrawable Amount.':
    '不可提取超过您的最大可提取金额。',
  'Max Withdrawable Amount': '最大可提取金额',
  'Points Explainer': '积分说明',
  Pool: '等级',
  'Quote Quality': '报价质量',
  'Create Your Public Username': '创建您的公共用户名',
  'Edit Your Public Username': '编辑您的公共用户名',
  'You have been signed out.': '您已登出。',
  'Maker Volume Score': '制造商成交量得分',
  'Fee Score': '手续费评分',
  'Score Share': '积分占比',
  'Instrument Share': '合约占比',
  Points: '积分',
  'Total Points': '总积分',
  '24h Change': '24小时变化',
  Leaderboard: '排行榜',
  Cancel: '取消',
  'By connecting a wallet, you agree to <1>Paradex Terms of Service</1> and represent and warrant to Paradex that you are not a <2>Restricted Person</2>.':
    '通过连接钱包，您同意<1>Paradex服务条款</1>，并向Paradex保证您不是<2>受限制的人员</2>。',
  Positions: '位置',
  'Open Orders': '未结订单',
  'Trade History': '交易历史',
  'Order History': '订单历史',
  'Funding Payments': '资金支付',
  Portfolio: '投资组合',
  Trade: '交易',
  Build: '构建',
  'Referrals Explainer': '推荐说明',
  'How It Works': '它是如何工作的',
  'My Referrals': '我的推荐',
  'Your Referral Code': '您的推荐代码',
  'Affiliate Program': '联盟计划',
  Enrolled: '已注册',
  'Traders Referred': '已推荐的交易者',
  'Referral Rewards': '推荐奖励',
  'Referral Points': '推荐积分',
  'Invite Friends': '邀请朋友',
  Share: '分享',
  Earn: '赚',
  Give: '给予',
  'Share your code to invite friends to join Paradex':
    '分享您的代码以邀请朋友加入Paradex',
  '<1>{{amount}}</1> Fees': '<1>{{amount}}</1> 手续费',
  'You receive {{amount}} of the referred user’s fees':
    '您将获得被推荐用户费用的{{amount}}',
  '<1>{{amount}}</1> Points': '<1>{{amount}}</1> 积分',
  'You receive {{amount}} of the referred user’s points':
    '您将获得被推荐用户的{{amount}}积分',
  '<1>{{amount}}</1> Discount': '<1>{{amount}}</1> 折扣',
  'Your friend receives {{amount}} discount on fees':
    '您的朋友在费用上享受<折{{amount}}折扣',
  'Create and share your custom referral code': '创建并分享您的自定义推荐代码',
  'If you have referred <1>>{{amount}}</1> in 30d volume or have <1>{{followers}}</1>+ social media followers, you can apply for the affiliate program.':
    '如果您在30天内推荐了<1>{{amount}}</1>或有<1>{{followers}}</1>+社交媒体粉丝，您可以申请联盟计划。',
  Apply: '申请',
  'Connect your wallet to see your Referral History.':
    '连接您的钱包以查看您的推荐历史。',
  'Welcome to Paradex': '欢迎来到 Paradex',
  'Congrats! The referral code you used is now active! It means you can start enjoying a discount on your trading fees!':
    '恭喜！您使用的推荐码现在已激活！这意味着您可以开始享受交易费用折扣！',
  'Congrats! The referral code <1>{{codeProvided}}</1> used is now active!':
    '恭喜！使用的推荐码<1>{{codeProvided}}</1>现在已激活！',
  'Referral code not activated. The code can only be applied once during the initial onboarding.':
    '推荐码未激活。该代码只能在初始登记期间应用一次。',
  'Referral code <1>{{codeProvided}}</1> not activated. You have already onboarded with <1>{{referredBy}}</1>.':
    '推荐码<1>{{codeProvided}}</1>未激活。您已经与<1>{{referredBy}}</1>登记。',
  'Referral Code Applied': '推荐码已应用',
  "You will receive <1>{{userAmount}}</1> of referred user's <1>fees</1> <2>and</2> <1>{{userAmountPoints}} points</1>. They will receive a <1>{{friendAmount}}</1> discount.":
    '您将获得被推荐用户的<1>费用</1> <2>和</2> <1>{{userAmountPoints}}积分</1>。他们将获得<1>{{friendAmount}}</1>折扣。',
  Community: '社区',
  Environments: '环境',
  Language: '语言',
  'System Status': '系统状态',
  Docs: '文档',
  'API Docs': 'API文档',
  'Code Samples': '代码示例',
  More: '更多',
  Stats: '统计',
  'Join Discord': '加入Discord',
  Notifications: '通知',
  'All caught up!': '全部更新！',
  'You have no new notifications': '您没有新的通知',
  'Connect Wallet': '连接钱包',
  'WalletConnect is taking too long to open. Please refresh the page and try again.':
    'WalletConnect 打开时间太长。请刷新页面重试。',
  'Unexpected error opening WalletConnect modal. Please refresh the page and try again.':
    '打开 WalletConnect 模态窗口时发生意外错误。请刷新页面重试。',
  'Connect your Wallet': '连接您的钱包',
  'Link Wallet': '链接钱包',
  'You will receive a signature request. Signing is free and will not send a transaction.':
    '您将收到一个签名请求。签名是免费的，不会发送交易。',
  'Generate Paradex Chain wallet': '生成Paradex链钱包',
  'Generating Paradex Chain wallet': '正在生成Paradex链钱包',
  'Paradex Chain wallet generated': 'Paradex链钱包已生成',
  'Verify that you own this wallet': '验证您拥有此钱包',
  'Remember Me': '记住我',
  'Only use “Remember Me” if you are using a secure device you own. Selecting this option can expose your information to  others if you are accessing this wallet from a public device.':
    '只有在使用您自己的安全设备时才使用“记住我”。如果您从公共设备访问此钱包，选择此选项可能会将您的信息暴露给其他人。',
  Continue: '继续',
  'Disconnect Wallet': '断开钱包',
  Disconnect: '断开',
  Account: '账户',
  Username: '用户名',
  Edit: '编辑',
  'Your username is now hidden. It is not visible to other users.':
    '您的用户名现在已隐藏。其他用户看不到。',
  'Your username will be visible to other users unless you choose to hide it. You can always change it later.':
    '除非您选择隐藏，否则您的用户名将对其他用户可见。您随时可以更改。',
  'Hide my Username': '隐藏我的用户名',
  Save: '保存',
  'Username is required': '需要用户名',
  'Username must be between 5 and 20 characters': '用户名必须在5到20个字符之间',
  'Username can only contain letters and numbers': '用户名只能包含字母和数字',
  Wallets: '钱包',
  'Paradex Block Explorer': 'Paradex区块浏览器',
  'Sign Out': '登出',
  'No markets available': '没有可用的市场',
  'Last Price': '最后价格',
  'Open Interest': '未平仓合约',
  '24h Volume': '24小时交易量',
  'Mark Price': '标记价格',
  'Spot Oracle Price': '现货预言机价格',
  'Eight hour funding rate that is continuously accrued on positions and settled upon any trade. If the funding rate is positive, longs pay shorts. If negative, shorts pay longs.':
    '持仓上持续累积的8小时资金费率，并在任何交易时结算。如果资金费率为正，多头支付空头。如果为负，空头支付多头。',
  '8h Funding': '8小时资金',
  Limit: '限价',
  Market: '市场',
  'Stop Limit': '止损限价',
  'Stop Market': '止损市价',
  'Scaled Order': '分级订单',
  'Trigger Price': '触发价格',
  'Limit Price': '限价',
  Amount: '数量',
  'Reduce Only': '仅减少',
  'Reduce Only will increase position': '仅减少将增加仓位',
  'Your order stays open until it is filled or you decide to cancel.':
    '您的订单将保持开放，直到被执行或您决定取消。',
  'Your order gets filled right away, partially or fully, and whatever is left gets canceled instantly.':
    '您的订单将立即被部分或全部执行，剩余的部分将立即被取消。',
  'Conditional limit order that serves to add liquidity to the order book as a Maker order.':
    '条件限价单，用于作为Maker订单向订单簿添加流动性。',
  'Currently the fees are fixed and uniform across the platform. Maker {{makerFee}} / Taker {{takerFee}}':
    '目前，平台上的费用是固定和统一的。Maker {{makerFee}} / Taker {{takerFee}}',
  Notional: '名义金额',
  Buy: '买入',
  BUY: '买入',
  LONG: '做多',
  Sell: '卖出',
  SELL: '卖出',
  SHORT: '做空',
  'Order Value': '订单价值',
  'Current Position': '当前持仓',
  'Account Value': '账户价值',
  'The total value of your account at current mark prices':
    '您的账户在当前标记价格下的总价值',
  'Unrealized P&L': '未实现的盈亏',
  'Free Collateral': '可用抵押品',
  'Account Leverage': '账户杠杆',
  Margin: '保证金',
  'Margin Ratio': '保证金比率',
  'Initial Margin': '初始保证金',
  'Maintenance Margin': '维持保证金',
  'Order Book': '订单簿',
  Trades: '交易',
  Price: '价格',
  Size: '大小',
  Total: '总计',
  Time: '时间',
  Spread: '差价',
  Side: '方向',
  'Entry Price': '入场价格',
  'Liquidation Price': 'Giá thanh lý',
  'Unrealized Funding': '未实现的资金',
  'Close Position': '平仓',
  'Market Close': '市场关闭',
  'Close Long': '平多仓',
  'Close Short': '平空仓',
  Type: '类型',
  Filled: '已成交',
  Triggered: '触发',
  Instruction: '指令',
  'Client Order Id': '客户订单ID',
  Status: '状态',
  NEW: '新的',
  OPEN: '开放的',
  UNTRIGGERED: '未触发',
  CLOSED: '已关闭',
  Pending: '待定',
  Complete: '完成',
  Bust: '被拒绝',
  'Notional / Fee': '名义金额/费用',
  Liquidity: '流动性',
  'Tx Hash': '交易哈希',
  'Trade Id': '交易 ID',
  Remaining: '剩余',
  'Cancel Reason': '取消原因',
  'User Canceled': '用户已取消',
  'Not Enough Margin': '保证金不足',
  'Empty Market': '空市场',
  'Post Only': '仅发布',
  'Post Only Would Cross': '仅发布将交叉',
  'Remaining IOC Cancel': '剩余的IOC取消',
  'Unexpected Failure': '意外失败',
  Deleverage: '去杠杆',
  'In Liquidation': '在清算中',
  'Self Trade': '自我交易',
  'Asset Unavailable': '资产不可用',
  'Asset Expired': '资产已过期',
  'Order Type Invalid': '订单类型无效',
  'Price Not Available': '价格不可用',
  Expired: '已过期',
  'Price Outside Bands': '价格超出波动范围',
  Timeout: '超时',
  'Order Exceeds Position Limit': '订单超出位置限制',
  'Order Id': '订单ID',
  Payment: '支付',
  'Cancel All': '全部取消',
  '{{orderSize}} will be closed at Market price':
    '{{orderSize}}将以市场价格关闭',
  Wallet: '钱包',
  Deposit_verb: '存款',
  Deposit_noun: '存款',
  Withdraw: '取款',
  Withdrawal: '取款',
  Transfers: '转账',
  Transfer: '转账',
  'Collateral Value': '抵押品价值',
  'Position Value': '头寸价值',
  Collateral: '抵押品',
  Asset: '资产',
  'Wallet Balance': '钱包余额',
  Actions: '操作',
  Action: '操作',
  'External Tx Hash': '外部交易哈希',
  'Withdraw to Wallet': '提款到钱包',
  'Deposit to Paraclear': '存款到Paraclear',
  'You have no balance in your Ethereum wallet. Deposit some {{asset}} and try again.':
    '您的以太坊钱包没有余额。存入一些{{asset}}然后再试。',
  'It is not possible to deposit more than your current balance.':
    '不能存入超过您当前余额的金额。',
  Available: '可用',
  'Initiate a deposit from your Ethereum wallet to the Paradex bridge. These transactions':
    '从您的以太坊钱包发起一笔存款到Paradex桥。这些交易',
  'Initiate a deposit from your Ethereum wallet to the Paradex bridge. These transactions may take several minutes depending on network conditions. For more information check out our <1>docs</1>.':
    '从您的以太坊钱包发起一笔存款到Paradex桥。这些交易可能需要几分钟的时间，具体取决于网络状况。欲了解更多信息，请查看我们的<1>文档</1>。',
  'read more': '阅读更多',
  'Initiate Deposit to Bridge': '发起存款到桥',
  'Enable USDC on Paradex': '在Paradex上启用USDC',
  'In order to deposit you must allow Paradex access to at least {{amount}}.':
    '为了存款，您必须允许Paradex访问至少{{amount}}。',
  'Enable USDC': '启用USDC',
  'Withdraw initiated': '已发起提款',
  'Withdrawals are a two-step process. First initiate a withdrawal from Paraclear':
    '提款是一个两步的过程。首先从Paraclear发起提款',
  'Withdrawals are a two-step process. First initiate a withdrawal from Paraclear to the Starknet bridge. This first step can take 2-7 hours. Second, initiate your withdrawal from the Starknet bridge to your Ethereum wallet via the Deposits / Withdrawals table. For more information check out our <1>docs</1>.':
    '提款是一个两步的过程。首先从Paraclear向Starknet桥发起提款。这第一步可能需要2-7小时。其次，通过存款/提款表格从Starknet桥向您的以太坊钱包发起提款。有关更多信息，请查看我们的<1>文档</1>。',
  'Initiate Withdrawal to Bridge': '发起提款到桥',
  'You have no funds to withdraw. It is not possible to withdraw more than your free collateral.':
    '您没有可提款的资金。不可能提取超过您的可用抵押品。',
  'It is not possible to withdraw more than your free collateral.':
    '不可能提取超过您的可用抵押品。',
  'You have no collateral': '您没有抵押品',
  'You have no open positions': '您没有开放的头寸',
  'You have no open orders': '您没有未完成的订单',
  'You have no trades': '您没有交易',
  'You have no orders': '您没有订单',
  'You have no funding payments': '您没有资金支付',
  'You have no transfers': '您没有转账',
  'Account in liquidation': '账户正在清算',
  'Account is being liquidated. Any open positions will be closed. Trading now is disabled.':
    '账户正在被清算。任何开放的头寸都将被关闭。现在无法交易。',
  'Account liquidated': '账户已清算',
  'Your account was liquidated on {{createdAt}}. Any open positions were closed.':
    '您的账户在 {{createdAt}} 被清算。任何开放的头寸都已关闭。',
  'Deposit to Paraclear successful': '向 Paraclear 存款成功',
  'Deposit to Paraclear failed': '向 Paraclear 存款失败',
  'Unexpected error. Try again.': '意外错误。请再试一次。',
  'Deposit initiated': '已发起存款',
  'Deposit to bridge initiated': '已启动向桥存款',
  'Deposit to Paraclear available': '可以向 Paraclear 存款',
  'Go to Deposits': '前往存款',
  'Deposit to Paraclear in progress': '正在向 Paraclear 存款',
  'Transfer successful': '转账成功',
  '<1>Paradex Beta</1> This is a Beta version of Paradex, the product is still being tested and can be subject to bugs and errors. For more details please read carefully the <2>Paradex terms of service</2> & <3>documentation</3>.':
    '<1>Paradex Beta</1> 这是 Paradex 的 Beta 版本，产品仍在测试中，可能会出现错误和问题。更多详情请仔细阅读 <2>Paradex 服务条款</2> 和 <3>文档</3>。',
  'Limit {{side}} Order Fill': '限价 {{side}} 订单填充',
  '{{type}} {{side}} Order Submitted': '{{type}} {{side}} 订单已提交',
  '{{type}} {{side}} Order Canceled': '{{type}} {{side}} 订单已取消',
  Reason: '原因',
  'Market {{side}} Order Fill': '市场 {{side}} 订单填充',
  'Trade Busted On-Chain': '链上交易破产',
  'Fill id': '填充 id',
  'Withdraw to wallet failed': '提款到钱包失败',
  'Withdrawal to bridge initiated': '已启动向桥提款',
  'Withdrawal error. Try again.': '提款错误。请再试一次。',
  'Withdrawal to bridge in progress': '正在向桥提款',
  'Withdrawal to wallet initiated': '已启动向钱包提款',
  'Withdrawal to bridge failed': '向桥提款失败',
  'Transaction error. Try again.': '交易错误。请再试一次。',
  'Withdrawal to wallet available': '可以提款到钱包',
  'Go to Withdrawals': '前往提款',
  'Withdrawal to wallet successful': '提款到钱包成功',
  'Session expired, please connect your wallet again.':
    '会话已过期，请再次连接您的钱包。',
  'Failed to submit order': '提交订单失败',
  'Your username preferences were updated!': '您的用户名偏好已更新！',
  'Unexpected error updating username preferences':
    '更新用户名偏好时出现意外错误',
  'This username already exists. Please choose a different username and try again.':
    '此用户名已存在。请选择一个不同的用户名并再试一次。',
  'Validation Error': '验证错误',
  'Binding Error': '绑定错误',
  'Internal Error': '内部错误',
  'Not Found': '未找到',
  'Service Unavailable': '服务不可用',
  'Invalid Request Parameter': '请求参数无效',
  'Order Id Not Found': '未找到订单ID',
  'Order Is Closed': '订单已关闭',
  'Order Is Not Open Yet': '订单尚未开放',
  'Client Order Id Not Found': '未找到客户订单ID',
  'Duplicated Client Id': '客户ID重复',
  'Invalid Price Precision': '价格精度无效',
  'Invalid Token': '无效的令牌',
  'Invalid Ethereum Address': '以太坊地址无效',
  'Blocked Ethereum Address': '以太坊地址被阻止',
  'Invalid Ethereum Signature': '以太坊签名无效',
  'Invalid Starknet Address': 'Starknet地址无效',
  'Invalid Starknet Signature': 'Starknet签名无效',
  'Starknet Signature Verification Failed': 'Starknet签名验证失败',
  'Bad Starknet Request': '错误的Starknet请求',
  'Ethereum Signer Mismatch': '以太坊签名者不匹配',
  'Ethereum Hash Mismatch': '以太坊哈希不匹配',
  'Not Onboarded': '未登记',
  'Invalid Timestamp': '无效的时间戳',
  'Invalid Signature Expiration': '无效的签名过期',
  'Account Not Found': '找不到账户',
  'Invalid Order Signature': '无效的订单签名',
  'Public Key Invalid': '公钥无效',
  'Unauthorized Ethereum Address': '未授权的以太坊地址',
  'Ethereum Address Already Onboarded': '以太坊地址已登记',
  'Market Not Found': '找不到市场',
  'Allowlist Entry Not Found': '找不到白名单条目',
  'Username In Use': '用户名已被使用',
  'Service access restricted in your region': '您所在地区的服务访问受限',
  'No Access Allowed': '不允许访问',
  'You do not have access to the platform. Please join our Discord to get access.':
    '您无权访问该平台。请加入我们的Discord以获取访问权限。',
  '{{actualChainName}} Wallet Connected': '以太坊钱包已连接',
  'Incorrect network selected "{{actualChainName}}". Please change the network to "{{requiredChainName}}" (id={{requiredChainId}}) in your wallet and retry.':
    '选择的网络"{{actualChainName}}"不正确。请在您的钱包中将网络更改为"{{requiredChainName}}"（id={{requiredChainId}}）并重试。',
  'Choose Wallet': '选择钱包',
  'Connect with Starknet Wallet': '连接Starknet钱包',
  'Thank you for your interest! We are hard at work to roll out support for Starknet wallets very soon. Subscribe to our <1>Telegram</1> channel or follow us on <2>Twitter</2> to know first when it will be available.':
    '感谢您的关注！我们正在努力推出对Starknet钱包的支持，即将推出。请订阅我们的<1>电报</1>频道或在<2>推特</2>上关注我们，以便第一时间知道何时可以使用。',
  'Switch to {{env}}': '切换到{{env}}',
  Search: '搜索',
  League: '联赛',
  'Switch Account': '切换账户',
};

export default translations;
