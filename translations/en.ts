/**
 * We use approach similar to `GNU gettext` where keys are written in plain English and used as fallback for missing translations.
 *  So that separate `id` is not needed, just the `key` string is used with `{{abc}}` for variables and `<1>text<1/>` for React components.
 *  So that from the developer's perspective, we still write in plain English and not with `id`s that are harder to understand and maintain.
 */

const keys = [
  'This feature currently is still in Beta. Backup your Paradex Private Key for additional safety.',
  'Deposit failed',
  'Deposit in progress',
  'External Account',
  'Tx Hashes',
  'Continue to {{bridge}}',
  'By clicking Continue to {{bridge}}, you will be sent to {{bridge}} website to bridge your funds out of Paradex.',
  'By clicking Continue to {{bridge}}, you will be sent to {{bridge}} website to bridge your funds to Paradex.',
  'Refer',
  'Address',
  'Date Joined',
  'Referral Code',
  'Volume Traded',
  'Bridge',
  'Withdraw to',
  'Deposit from',
  'Position is already closed',
  'Your Paradex L2 Address is NOT a Public Starknet Address. If you try to send funds to this address on Public Starknet via a cross chain bridge you risk losing your funds. <1>Read more</1>.',
  '{{chain}} Address',
  'Copy Paradex Private Key',
  'Your account will be liquidated if Margin Ratio reaches 100%',
  'Liquidation',
  'Fee',
  'Maker',
  'Maker Score',
  'Maker Points Share',
  'Fee Points Share',
  'Fee Points',
  'Maker Points',
  'Liquidation {{side}} Fill',
  'Settings',
  'Market Score',
  'Points Pre-Season',
  'Season {{season}} (coming soon)',
  'Confirm Buy',
  'Confirm Sell',
  'Other Points',
  'Analytics',
  'Estimated Receivable Amount',
  'Socialized Loss active. Click to learn more.',
  'Sign In to see your account Points stats',
  '<1>Clock Is Out Of Sync</1> The clock on your device is out of sync. This may cause issues with the application. Please make sure your device clock is set to be auto. For more details please <2>see documentation</2>',
  'Failed to fetch max withdrawable amount',
  'It is not possible to withdraw more than your Max Withdrawable Amount.',
  'Max Withdrawable Amount',
  'Points Explainer',
  'Pool',
  'Quote Quality',
  'Create Your Public Username',
  'Edit Your Public Username',
  'You have been signed out.',
  'Maker Volume Score',
  'Fee Score',
  'Score Share',
  'Instrument Share',
  'Points',
  'Total Points',
  '24h Change',
  'Leaderboard',
  'Cancel',
  'Portfolio',
  'Trade',
  'Build',
  'Referrals Explainer',
  'How It Works',
  'My Referrals',
  'Your Referral Code',
  'Affiliate Program',
  'Enrolled',
  'Traders Referred',
  'Referral Rewards',
  'Referral Points',
  'Invite Friends',
  'Share',
  'Earn',
  'Give',
  'Share your code to invite friends to join Paradex',
  '<1>{{amount}}</1> Fees',
  'You receive {{amount}} of the referred user’s fees',
  '<1>{{amount}}</1> Points',
  'You receive {{amount}} of the referred user’s points',
  '<1>{{amount}}</1> Discount',
  'Your friend receives {{amount}} discount on fees',
  'Create and share your custom referral code',
  'If you have referred <1>>{{amount}}</1> in 30d volume or have <1>{{followers}}</1>+ social media followers, you can apply for the affiliate program.',
  'Apply',
  'Connect your wallet to see your Referral History.',
  'Welcome to Paradex',
  'Congrats! The referral code you used is now active! It means you can start enjoying a discount on your trading fees!',
  'Congrats! The referral code <1>{{codeProvided}}</1> used is now active!',
  'Referral code not activated. The code can only be applied once during the initial onboarding.',
  'Referral code <1>{{codeProvided}}</1> not activated. You have already onboarded with <1>{{referredBy}}</1>.',
  'Referral Code Applied',
  "You will receive <1>{{userAmount}}</1> of referred user's <1>fees</1> <2>and</2> <1>{{userAmountPoints}} points</1>. They will receive a <1>{{friendAmount}}</1> discount.",
  'Community',
  'Environments',
  'Language',
  'System Status',
  'Docs',
  'API Docs',
  'Code Samples',
  'More',
  'Stats',
  'Join Discord',
  'Notifications',
  'All caught up!',
  'You have no new notifications',
  'Connect Wallet',
  'WalletConnect is taking too long to open. Please refresh the page and try again.',
  'Unexpected error opening WalletConnect modal. Please refresh the page and try again.',
  'Connect your Wallet',
  'Link Wallet',
  'You will receive a signature request. Signing is free and will not send a transaction.',
  'Generate Paradex Chain wallet',
  'Generating Paradex Chain wallet',
  'Paradex Chain wallet generated',
  'Verify that you own this wallet',
  'Remember Me',
  'Only use “Remember Me” if you are using a secure device you own. Selecting this option can expose your information to  others if you are accessing this wallet from a public device.',
  'Continue',
  'Disconnect Wallet',
  'Disconnect',
  'Account',
  'Username',
  'Edit',
  'Your username is now hidden. It is not visible to other users.',
  'Your username will be visible to other users unless you choose to hide it. You can always change it later.',
  'Hide my Username',
  'Save',
  'Username is required',
  'Username must be between 5 and 20 characters',
  'Username can only contain letters and numbers',
  'Wallets',
  'Paradex Block Explorer',
  'Sign Out',
  'No markets available',
  'Last Price',
  'Open Interest',
  '24h Volume',
  'Mark Price',
  'Spot Oracle Price',
  'Eight hour funding rate that is continuously accrued on positions and settled upon any trade. If the funding rate is positive, longs pay shorts. If negative, shorts pay longs.',
  '8h Funding',
  'Limit',
  'Market',
  'Stop Limit',
  'Stop Market',
  'Scaled Order',
  'Trigger Price',
  'Limit Price',
  'Amount',
  'Reduce Only',
  'Reduce Only will increase position',
  'Your order stays open until it is filled or you decide to cancel.',
  'Your order gets filled right away, partially or fully, and whatever is left gets canceled instantly.',
  'Conditional limit order that serves to add liquidity to the order book as a Maker order.',
  'Currently the fees are fixed and uniform across the platform. Maker {{makerFee}} / Taker {{takerFee}}',
  'Notional',
  'Buy',
  'BUY',
  'LONG',
  'Sell',
  'SELL',
  'SHORT',
  'Order Value',
  'Current Position',
  'Account Value',
  'The total value of your account at current mark prices',
  'Unrealized P&L',
  'Free Collateral',
  'Account Leverage',
  'Margin',
  'Margin Ratio',
  'Initial Margin',
  'Maintenance Margin',
  'Order Book',
  'Trades',
  'Price',
  'Size',
  'Total',
  'Time',
  'Spread',
  'Positions',
  'Open Orders',
  'Trade History',
  'Order History',
  'Funding Payments',
  'Side',
  'Entry Price',
  'Liquidation Price',
  'Unrealized Funding',
  'Close Position',
  'Market Close',
  'Close Long',
  'Close Short',
  'Type',
  'Filled',
  'Triggered',
  'Instruction',
  'Client Order Id',
  'Status',
  'NEW',
  'UNTRIGGERED',
  'OPEN',
  'CLOSED',
  'Pending',
  'Complete',
  'Bust',
  'Notional / Fee',
  'Liquidity',
  'Tx Hash',
  'Trade Id',
  'Remaining',
  'Cancel Reason',
  'User Canceled',
  'Not Enough Margin',
  'Empty Market',
  'Post Only',
  'Post Only Would Cross',
  'Remaining IOC Cancel',
  'Unexpected Failure',
  'Deleverage',
  'In Liquidation',
  'Self Trade',
  'Asset Unavailable',
  'Asset Expired',
  'Order Type Invalid',
  'Price Not Available',
  'Expired',
  'Price Outside Bands',
  'Timeout',
  'Order Exceeds Position Limit',
  'Order Id',
  'Payment',
  'Cancel All',
  '{{orderSize}} will be closed at Market price',
  'By connecting a wallet, you agree to <1>Paradex Terms of Service</1> and represent and warrant to Paradex that you are not a <2>Restricted Person</2>.',
  'Wallet',
  'Deposit_verb',
  'Deposit_noun',
  'Withdraw',
  'Withdrawal',
  'Transfers',
  'Transfer',
  'Collateral Value',
  'Position Value',
  'Collateral',
  'Asset',
  'Wallet Balance',
  'Actions',
  'Action',
  'Tx Hash',
  'External Tx Hash',
  'Withdraw to Wallet',
  'Deposit to Paraclear',
  'You have no balance in your Ethereum wallet. Deposit some {{asset}} and try again.',
  'It is not possible to deposit more than your current balance.',
  'Available',
  'Initiate a deposit from your Ethereum wallet to the Paradex bridge. These transactions',
  'Initiate a deposit from your Ethereum wallet to the Paradex bridge. These transactions may take several minutes depending on network conditions. For more information check out our <1>docs</1>.',
  'read more',
  'Initiate Deposit to Bridge',
  'Enable USDC on Paradex',
  'In order to deposit you must allow Paradex access to at least {{amount}}.',
  'Enable USDC',
  'Withdraw initiated',
  'Withdrawals are a two-step process. First initiate a withdrawal from Paraclear',
  'Withdrawals are a two-step process. First initiate a withdrawal from Paraclear to the Starknet bridge. This first step can take 2-7 hours. Second, initiate your withdrawal from the Starknet bridge to your Ethereum wallet via the Deposits / Withdrawals table. For more information check out our <1>docs</1>.',
  'Initiate Withdrawal to Bridge',
  'You have no funds to withdraw. It is not possible to withdraw more than your free collateral.',
  'It is not possible to withdraw more than your free collateral.',
  'You have no collateral',
  'You have no open positions',
  'You have no open orders',
  'You have no trades',
  'You have no orders',
  'You have no funding payments',
  'You have no transfers',
  'Account in liquidation',
  'Account is being liquidated. Any open positions will be closed. Trading now is disabled.',
  'Account liquidated',
  'Your account was liquidated on {{createdAt}}. Any open positions were closed.',
  'Deposit to Paraclear successful',
  'Deposit to Paraclear failed',
  'Unexpected error. Try again.',
  'Deposit initiated',
  'Deposit to bridge initiated',
  'Deposit to Paraclear available',
  'Go to Deposits',
  'Deposit to Paraclear in progress',
  'Transfer successful',
  '<1>Paradex Beta</1> This is a Beta version of Paradex, the product is still being tested and can be subject to bugs and errors. For more details please read carefully the <2>Paradex terms of service</2> & <3>documentation</3>.',
  'Limit {{side}} Order Fill',
  '{{type}} {{side}} Order Submitted',
  '{{type}} {{side}} Order Canceled',
  'Reason',
  'Market {{side}} Order Fill',
  'Trade Busted On-Chain',
  'Fill id',
  'Withdraw to wallet failed',
  'Withdrawal to bridge initiated',
  'Withdrawal error. Try again.',
  'Withdrawal to bridge in progress',
  'Withdrawal to wallet initiated',
  'Withdrawal to bridge failed',
  'Transaction error. Try again.',
  'Withdrawal to wallet available',
  'Go to Withdrawals',
  'Withdrawal to wallet successful',
  'Session expired, please connect your wallet again.',
  'Failed to submit order',
  'Your username preferences were updated!',
  'Unexpected error updating username preferences',
  'This username already exists. Please choose a different username and try again.',
  'Validation Error',
  'Binding Error',
  'Internal Error',
  'Not Found',
  'Service Unavailable',
  'Invalid Request Parameter',
  'Order Id Not Found',
  'Order Is Closed',
  'Order Is Not Open Yet',
  'Client Order Id Not Found',
  'Duplicated Client Id',
  'Invalid Price Precision',
  'Invalid Token',
  'Invalid Ethereum Address',
  'Invalid Ethereum Signature',
  'Invalid Starknet Address',
  'Invalid Starknet Signature',
  'Starknet Signature Verification Failed',
  'Bad Starknet Request',
  'Ethereum Signer Mismatch',
  'Ethereum Hash Mismatch',
  'Not Onboarded',
  'Invalid Timestamp',
  'Invalid Signature Expiration',
  'Account Not Found',
  'Invalid Order Signature',
  'Public Key Invalid',
  'Unauthorized Ethereum Address',
  'Ethereum Address Already Onboarded',
  'Market Not Found',
  'Allowlist Entry Not Found',
  'Username In Use',
  'Service access restricted in your region',
  'No Access Allowed',
  'You do not have access to the platform. Please join our Discord to get access.',
  '{{actualChainName}} Wallet Connected',
  'Incorrect network selected "{{actualChainName}}". Please change the network to "{{requiredChainName}}" (id={{requiredChainId}}) in your wallet and retry.',
  'Blocked Ethereum Address',
  'Choose Wallet',
  'Connect with Starknet Wallet',
  'Thank you for your interest! We are hard at work to roll out support for Starknet wallets very soon. Subscribe to our <1>Telegram</1> channel or follow us on <2>Twitter</2> to know first when it will be available.',
  'Switch to {{env}}',
  'Search',
  'League',
  'Switch Account',
] as const;

type Keys = typeof keys[number];
type Translations = { [K in Keys]: K };

const translations = {
  ...(Object.fromEntries(keys.map((key) => [key, key])) as Translations),
  Deposit_verb: 'Deposit',
  Deposit_noun: 'Deposit',
} as const;

export type { Keys };
export type TranslationResources = typeof translations;
export default translations;
