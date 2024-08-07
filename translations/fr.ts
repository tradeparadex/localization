import { Keys } from './en';

const translations: Record<Keys, string> = {
  'This feature currently is still in Beta. Backup your Paradex Private Key for additional safety.':
    'Cette fonctionnalité est actuellement en version bêta. Sauvegardez votre clé privée Paradex pour une sécurité supplémentaire.',
  'Deposit failed': 'Dépôt échoué',
  'Deposit in progress': 'Dépôt en cours',
  'External Account': 'Compte externe',
  'Tx Hashes': 'Hashes de transactions',
  'Continue to {{bridge}}': 'Continuer vers {{bridge}}',
  'By clicking Continue to {{bridge}}, you will be sent to {{bridge}} website to bridge your funds out of Paradex.':
    'En cliquant sur Continuer vers {{bridge}}, vous serez redirigé vers le site web de {{bridge}} pour transférer vos fonds depuis Paradex.',
  'By clicking Continue to {{bridge}}, you will be sent to {{bridge}} website to bridge your funds to Paradex.':
    'En cliquant sur Continuer vers {{bridge}}, vous serez redirigé vers le site web de {{bridge}} pour transférer vos fonds vers Paradex.',
  Refer: 'Référer',
  Address: 'Adresse',
  'Date Joined': 'Date d’inscription',
  'Referral Code': 'Code de parrainage',
  'Volume Traded': 'Volume échangé',
  Bridge: 'Pont',
  'Withdraw to': 'Retirer vers',
  'Deposit from': 'Dépôt depuis',
  'Position is already closed': 'La position est déjà fermée',
  'Your Paradex L2 Address is NOT a Public Starknet Address. If you try to send funds to this address on Public Starknet via a cross chain bridge you risk losing your funds. <1>Read more</1>.':
    'Votre adresse Paradex L2 n’est PAS une adresse Starknet publique. Si vous essayez d’envoyer des fonds à cette adresse sur Starknet public via un pont inter-chaînes, vous risquez de perdre vos fonds. <1>Lire plus</1>.',
  '{{chain}} Address': 'Adresse {{chain}}',
  'Copy Paradex Private Key': 'Copier la clé privée Paradex',
  'Your account will be liquidated if Margin Ratio reaches 100%':
    'Votre compte sera liquidé si le Ratio de Marge atteint 100%',
  Liquidation: 'Liquidation',
  Fee: 'Frais',
  Maker: 'Faiseur',
  'Maker Score': 'Score de Faiseur',
  'Maker Points Share': 'Part de Points de Faiseur',
  'Fee Points Share': 'Part de Points de Frais',
  'Fee Points': 'Points de Frais',
  'Maker Points': 'Points de Faiseur',
  'Liquidation {{side}} Fill': 'Liquidation {{side}} Remplir',
  Settings: 'Paramètres',
  'Market Score': 'Score du Marché',
  'Points Pre-Season': 'Points Pré-Saison',
  'Season {{season}} (coming soon)': 'Saison {{season}} (bientôt disponible)',
  'Confirm Buy': 'Confirmer l’achat',
  'Confirm Sell': 'Confirmer la vente',
  'Other Points': 'Autres Points',
  'Estimated Receivable Amount': 'Montant estimé à recevoir',
  'Socialized Loss active. Click to learn more.':
    'Perte socialisée active. Cliquez pour en savoir plus.',
  Analytics: 'Analytique',
  'Sign In to see your account Points stats':
    'Connectez-vous pour voir les statistiques de vos points de compte',
  '<1>Clock Is Out Of Sync</1> The clock on your device is out of sync. This may cause issues with the application. Please make sure your device clock is set to be auto. For more details please <2>see documentation</2>':
    "<1>L'horloge est désynchronisée</1> L'horloge de votre appareil est désynchronisée. Cela peut causer des problèmes avec l'application. Assurez-vous que l'horloge de votre appareil est réglée sur auto. Pour plus de détails, veuillez <2>voir la documentation</2>",
  'Failed to fetch max withdrawable amount':
    'Échec de la récupération du montant maximum de retrait',
  'It is not possible to withdraw more than your Max Withdrawable Amount.':
    "Il n'est pas possible de retirer plus que votre montant maximum de retrait.",
  'Max Withdrawable Amount': 'Montant maximum de retrait',
  'Points Explainer': 'Explicateur de Points',
  Pool: 'Niveau',
  'Quote Quality': 'Qualité des cotations',
  'Create Your Public Username': "Créer votre nom d'utilisateur public",
  'Edit Your Public Username': "Modifier votre nom d'utilisateur public",
  'You have been signed out.': 'Vous avez été déconnecté.',
  'Maker Volume Score': 'Score de volume du Faiseur',
  'Fee Score': 'Score de Frais',
  'Score Share': 'Part de Score',
  'Instrument Share': "Part d'Instrument",
  Points: 'Points',
  'Total Points': 'Points Total',
  '24h Change': 'Changement en 24h',
  Leaderboard: 'Leaderboard',
  Cancel: 'Annuler',
  Portfolio: 'Portefeuille',
  Trade: 'Commerce',
  Build: 'Construire',
  'Referrals Explainer': 'Explicateur de Parrainages',
  'How It Works': 'Comment ça marche',
  'My Referrals': 'Mes Parrainages',
  'Your Referral Code': 'Votre code de parrainage',
  'Affiliate Program': "Programme d'affiliation",
  Enrolled: 'Inscrit',
  'Traders Referred': 'Traders référés',
  'Referral Rewards': 'Récompenses de parrainage',
  'Referral Points': 'Points de parrainage',
  'Invite Friends': 'Inviter des amis',
  Share: 'Partager',
  Earn: 'Gagner',
  Give: 'Donner',
  'Share your code to invite friends to join Paradex':
    'Partagez votre code pour inviter des amis à rejoindre Paradex',
  '<1>{{amount}}</1> Fees': '<1>{{amount}}</1> de frais',
  'You receive {{amount}} of the referred user’s fees':
    "Vous recevez {{amount}} des frais de l'utilisateur recommandé",
  '<1>{{amount}}</1> Points': '<1>{{amount}}</1> de points',
  'You receive {{amount}} of the referred user’s points':
    "Vous recevez {{amount}} des points de l'utilisateur recommandé",
  '<1>{{amount}}</1> Discount': '<1>{{amount}}</1> de réduction',
  'Your friend receives {{amount}} discount on fees':
    'Votre ami reçoit une réduction de {{amount}} sur les frais',
  'Create and share your custom referral code':
    'Créez et partagez votre code de parrainage personnalisé',
  'If you have referred <1>>{{amount}}</1> in 30d volume or have <1>{{followers}}</1>+ social media followers, you can apply for the affiliate program.':
    'Si vous avez recommandé <1>>{{amount}}</1> en volume sur 30 jours ou avez <1>{{followers}}</1>+ abonnés sur les réseaux sociaux, vous pouvez postuler pour le programme d’affiliation.',
  Apply: 'Appliquer',
  'Connect your wallet to see your Referral History.':
    'Connectez votre portefeuille pour voir votre historique de parrainage.',
  'Welcome to Paradex': 'Bienvenue sur Paradex',
  'Congrats! The referral code you used is now active! It means you can start enjoying a discount on your trading fees!':
    'Félicitations! Le code de parrainage que vous avez utilisé est maintenant actif! Cela signifie que vous pouvez commencer à bénéficier d’une réduction sur vos frais de trading!',
  'Congrats! The referral code <1>{{codeProvided}}</1> used is now active!':
    'Félicitations! Le code de parrainage <1>{{codeProvided}}</1> utilisé est maintenant actif!',
  'Referral code not activated. The code can only be applied once during the initial onboarding.':
    "Code de parrainage non activé. Le code ne peut être appliqué qu'une seule fois lors de l'embarquement initial.",
  'Referral code <1>{{codeProvided}}</1> not activated. You have already onboarded with <1>{{referredBy}}</1>.':
    'Code de parrainage <1>{{codeProvided}}</1> non activé. Vous avez déjà embarqué avec <1>{{referredBy}}</1>.',
  'Referral Code Applied': 'Code de parrainage appliqué',
  "You will receive <1>{{userAmount}}</1> of referred user's <1>fees</1> <2>and</2> <1>{{userAmountPoints}} points</1>. They will receive a <1>{{friendAmount}}</1> discount.":
    "Vous recevrez <1>{{userAmount}}</1> des <1>frais</1> de l'utilisateur recommandé <2>et</2> <1>{{userAmountPoints}} points</1>. Ils recevront une réduction de <1>{{friendAmount}}</1>.",
  Community: 'Communauté',
  Environments: 'Environnements',
  'System Status': 'Statut du système',
  Language: 'Langue',
  Docs: 'Docs',
  'API Docs': 'Docs API',
  'Code Samples': 'Exemples de code',
  More: 'Plus',
  Stats: 'Statistiques',
  'Join Discord': 'Rejoindre Discord',
  Notifications: 'Notifications',
  'All caught up!': 'Tout est à jour!',
  'You have no new notifications': "Vous n'avez pas de nouvelles notifications",
  'Connect Wallet': 'Connecter le portefeuille',
  'WalletConnect is taking too long to open. Please refresh the page and try again.':
    "WalletConnect met trop de temps à s'ouvrir. Veuillez rafraîchir la page et réessayer.",
  'Unexpected error opening WalletConnect modal. Please refresh the page and try again.':
    "Erreur inattendue lors de l'ouverture du modal WalletConnect. Veuillez rafraîchir la page et réessayer.",
  'Connect your Wallet': 'Connectez votre portefeuille',
  'Link Wallet': 'Lier le portefeuille',
  'You will receive a signature request. Signing is free and will not send a transaction.':
    "Vous recevrez une demande de signature. La signature est gratuite et n'envoie pas de transaction.",
  'Generate Paradex Chain wallet': 'Générer un portefeuille Paradex Chain',
  'Generating Paradex Chain wallet': 'Génération du portefeuille Paradex Chain',
  'Paradex Chain wallet generated': 'Portefeuille Paradex Chain généré',
  'Verify that you own this wallet':
    'Vérifier que vous possédez ce portefeuille',
  'Remember Me': 'Se souvenir de moi',
  'Only use “Remember Me” if you are using a secure device you own. Selecting this option can expose your information to  others if you are accessing this wallet from a public device.':
    'N’utilisez “Se souvenir de moi” que si vous utilisez un appareil sécurisé que vous possédez. Sélectionner cette option peut exposer vos informations à d’autres si vous accédez à ce portefeuille depuis un appareil public.',
  Continue: 'Continuer',
  'Disconnect Wallet': 'Déconnecter le portefeuille',
  Disconnect: 'Déconnecter',
  Account: 'Compte',
  Username: 'Nom d’utilisateur',
  Edit: 'Modifier',
  'Your username is now hidden. It is not visible to other users.':
    'Votre nom d’utilisateur est maintenant caché. Il n’est pas visible par les autres utilisateurs.',
  'Your username will be visible to other users unless you choose to hide it. You can always change it later.':
    'Votre nom d’utilisateur sera visible par les autres utilisateurs à moins que vous ne choisissiez de le cacher. Vous pouvez toujours le modifier plus tard.',
  'Hide my Username': 'Cacher mon nom d’utilisateur',
  Save: 'Enregistrer',
  'Username is required': 'Le nom d’utilisateur est requis',
  'Username must be between 5 and 20 characters':
    'Le nom d’utilisateur doit comporter entre 5 et 20 caractères',
  'Username can only contain letters and numbers':
    'Le nom d’utilisateur ne peut contenir que des lettres et des chiffres',
  Wallets: 'Portefeuilles',
  'Paradex Block Explorer': 'Explorateur de blocs Paradex',
  'Sign Out': 'Se déconnecter',
  'No markets available': 'Aucun marché disponible',
  'Last Price': 'Dernier prix',
  'Open Interest': 'Intérêt ouvert',
  '24h Volume': 'Volume sur 24h',
  'Mark Price': 'Prix de marque',
  'Spot Oracle Price': 'Prix Oracle au comptant',
  'Eight hour funding rate that is continuously accrued on positions and settled upon any trade. If the funding rate is positive, longs pay shorts. If negative, shorts pay longs.':
    'Taux de financement de huit heures qui est continuellement accumulé sur les positions et réglé à chaque transaction. Si le taux de financement est positif, les longs paient les shorts. Si négatif, les shorts paient les longs.',
  '8h Funding': 'Financement de 8h',
  Limit: 'Limite',
  Market: 'Marché',
  'Stop Limit': 'Stop Limite',
  'Stop Market': 'Stop Marché',
  'Scaled Order': 'Ordre Échelonné',
  'Trigger Price': 'Prix de Déclenchement',
  'Limit Price': 'Prix limite',
  Amount: 'Montant',
  'Reduce Only': 'Réduire uniquement',
  'Reduce Only will increase position':
    'Réduire uniquement augmentera la position',
  'Your order stays open until it is filled or you decide to cancel.':
    "Votre commande reste ouverte jusqu'à ce qu'elle soit exécutée ou que vous décidiez de l'annuler.",
  'Your order gets filled right away, partially or fully, and whatever is left gets canceled instantly.':
    'Votre commande est immédiatement exécutée, partiellement ou totalement, et tout ce qui reste est instantanément annulé.',
  'Conditional limit order that serves to add liquidity to the order book as a Maker order.':
    "Ordre limite conditionnel qui sert à ajouter de la liquidité au carnet d'ordres en tant qu'ordre Maker.",
  'Currently the fees are fixed and uniform across the platform. Maker {{makerFee}} / Taker {{takerFee}}':
    'Actuellement, les frais sont fixes et uniformes sur la plateforme. Faiseur {{makerFee}} / Preneur {{takerFee}}',
  Notional: 'Notionnel',
  Buy: 'Acheter',
  BUY: 'ACHETER',
  LONG: 'LONG',
  Sell: 'Vendre',
  SELL: 'VENDRE',
  SHORT: 'COURT',
  'Order Value': 'Valeur de la commande',
  'Current Position': 'Position actuelle',
  'Account Value': 'Valeur du compte',
  'The total value of your account at current mark prices':
    'La valeur totale de votre compte aux prix actuels',
  'Unrealized P&L': 'P&L non réalisé',
  'Free Collateral': 'Collatéral libre',
  'Account Leverage': 'Effet de levier du compte',
  Margin: 'Marge',
  'Margin Ratio': 'Ratio de marge',
  'Initial Margin': 'Marge initiale',
  'Maintenance Margin': 'Marge de maintenance',
  'Order Book': "Carnet d'ordres",
  Trades: 'Trades',
  Price: 'Prix',
  Size: 'Taille',
  Total: 'Total',
  Time: 'Temps',
  Spread: 'Spread',
  Positions: 'Positions',
  'Open Orders': 'Ordres ouverts',
  'Trade History': 'Historique des transactions',
  'Order History': 'Historique des ordres',
  'Funding Payments': 'Paiements de financement',
  Side: 'Côté',
  'Entry Price': "Prix d'entrée",
  'Liquidation Price': 'Prix de Liquidation',
  'Unrealized Funding': 'Financement non réalisé',
  'Close Position': 'Fermer la position',
  'Market Close': 'Clôture du marché',
  'Close Long': 'Clôturer Long',
  'Close Short': 'Clôturer Short',
  Type: 'Type',
  Filled: 'Rempli',
  Triggered: 'Déclenché',
  Instruction: 'Instruction',
  'Client Order Id': 'ID de commande client',
  Status: 'Statut',
  NEW: 'NOUVEAU',
  OPEN: 'OUVERT',
  UNTRIGGERED: 'Non déclenché',
  CLOSED: 'FERMÉ',
  Pending: 'En attente',
  Complete: 'Complet',
  Bust: 'Éclatement',
  'Notional / Fee': 'Notionnel / Frais',
  Liquidity: 'Liquidité',
  'Tx Hash': 'Hash de transaction',
  'Trade Id': 'Identifiant de transaction',
  Remaining: 'Restant',
  'Cancel Reason': "Raison d'annulation",
  'User Canceled': 'Utilisateur annulé',
  'Not Enough Margin': 'Marge insuffisante',
  'Empty Market': 'Marché vide',
  'Post Only': 'Post Only',
  'Post Only Would Cross': 'Post Only croiserait',
  'Remaining IOC Cancel': 'Annulation restante IOC',
  'Unexpected Failure': 'Échec inattendu',
  Deleverage: 'Désendettement',
  'In Liquidation': 'En liquidation',
  'Self Trade': 'Auto-négociation',
  'Asset Unavailable': 'Actif indisponible',
  'Asset Expired': 'Actif expiré',
  'Order Type Invalid': "Type d'ordre invalide",
  'Price Not Available': 'Prix non disponible',
  Expired: 'Expiré',
  'Price Outside Bands': 'Prix hors des bandes',
  Timeout: 'Temps écoulé',
  'Order Exceeds Position Limit': "L'ordre dépasse la limite de position",
  'Order Id': "Id de l'ordre",
  Payment: 'Paiement',
  'Cancel All': 'Annuler tout',
  '{{orderSize}} will be closed at Market price':
    '{{orderSize}} sera fermé au prix du marché',
  'By connecting a wallet, you agree to <1>Paradex Terms of Service</1> and represent and warrant to Paradex that you are not a <2>Restricted Person</2>.':
    "En connectant un portefeuille, vous acceptez les <1>Conditions d'utilisation de Paradex</1> et déclarez et garantissez à Paradex que vous n'êtes pas une <2>Personne restreinte</2>.",
  Wallet: 'Portefeuille',
  Deposit_verb: 'Déposer',
  Deposit_noun: 'Dépôt',
  Withdraw: 'Retirer',
  Withdrawal: 'Retrait',
  Transfers: 'Transferts',
  Transfer: 'Transférer',
  'Collateral Value': 'Valeur du collatéral',
  'Position Value': 'Valeur de la position',
  Collateral: 'Collatéral',
  Asset: 'Actif',
  'Wallet Balance': 'Solde du portefeuille',
  Actions: 'Actions',
  Action: 'Action',
  'External Tx Hash': 'Hash de transaction externe',
  'Withdraw to Wallet': 'Retirer vers le portefeuille',
  'Deposit to Paraclear': 'Déposer à Paraclear',
  'You have no balance in your Ethereum wallet. Deposit some {{asset}} and try again.':
    "Vous n'avez aucun solde dans votre portefeuille Ethereum. Déposez un peu de {{asset}} et réessayez.",
  'It is not possible to deposit more than your current balance.':
    "Il n'est pas possible de déposer plus que votre solde actuel.",
  Available: 'Disponible',
  'Initiate a deposit from your Ethereum wallet to the Paradex bridge. These transactions':
    'Initier un dépôt depuis votre portefeuille Ethereum vers le pont Paradex. Ces transactions',
  'Initiate a deposit from your Ethereum wallet to the Paradex bridge. These transactions may take several minutes depending on network conditions. For more information check out our <1>docs</1>.':
    'Initier un dépôt depuis votre portefeuille Ethereum vers le pont Paradex. Ces transactions peuvent prendre plusieurs minutes en fonction des conditions du réseau. Pour plus d’informations, consultez nos <1>docs</1>.',
  'read more': 'lire plus',
  'Initiate Deposit to Bridge': 'Initier le dépôt vers le pont',
  'Enable USDC on Paradex': 'Activer USDC sur Paradex',
  'In order to deposit you must allow Paradex access to at least {{amount}}.':
    "Pour déposer, vous devez autoriser l'accès de Paradex à au moins {{amount}}.",
  'Enable USDC': 'Activer USDC',
  'Withdraw initiated': 'Retrait initié',
  'Withdrawals are a two-step process. First initiate a withdrawal from Paraclear':
    'Les retraits sont un processus en deux étapes. Commencez par initier un retrait de Paraclear',
  'Withdrawals are a two-step process. First initiate a withdrawal from Paraclear to the Starknet bridge. This first step can take 2-7 hours. Second, initiate your withdrawal from the Starknet bridge to your Ethereum wallet via the Deposits / Withdrawals table. For more information check out our <1>docs</1>.':
    "Les retraits sont un processus en deux étapes. Commencez par initier un retrait de Paraclear vers le pont Starknet. Cette première étape peut prendre de 2 à 7 heures. Deuxièmement, initiez votre retrait du pont Starknet vers votre portefeuille Ethereum via le tableau Dépôts / Retraits. Pour plus d'informations, consultez nos <1>docs</1>.",
  'Initiate Withdrawal to Bridge': 'Initier le retrait vers le pont',
  'You have no funds to withdraw. It is not possible to withdraw more than your free collateral.':
    "Vous n'avez pas de fonds à retirer. Il n'est pas possible de retirer plus que votre collatéral libre.",
  'It is not possible to withdraw more than your free collateral.':
    "Il n'est pas possible de retirer plus que votre collatéral libre.",
  'You have no collateral': "Vous n'avez pas de collatéral",
  'You have no open positions': "Vous n'avez pas de positions ouvertes",
  'You have no open orders': "Vous n'avez pas de commandes ouvertes",
  'You have no trades': "Vous n'avez pas de transactions",
  'You have no orders': "Vous n'avez pas de commandes",
  'You have no funding payments': "Vous n'avez pas de paiements de financement",
  'You have no transfers': "Vous n'avez pas de transferts",
  'Account in liquidation': 'Compte en liquidation',
  'Account is being liquidated. Any open positions will be closed. Trading now is disabled.':
    'Le compte est en cours de liquidation. Toutes les positions ouvertes seront fermées. Le trading est maintenant désactivé.',
  'Account liquidated': 'Compte liquidé',
  'Your account was liquidated on {{createdAt}}. Any open positions were closed.':
    'Votre compte a été liquidé le {{createdAt}}. Toutes les positions ouvertes ont été fermées.',
  'Deposit to Paraclear successful': 'Dépôt à Paraclear réussi',
  'Deposit to Paraclear failed': 'Échec du dépôt à Paraclear',
  'Unexpected error. Try again.': 'Erreur inattendue. Réessayez.',
  'Deposit initiated': 'Dépôt initié',
  'Deposit to bridge initiated': 'Dépôt au pont initié',
  'Deposit to Paraclear available': 'Dépôt à Paraclear disponible',
  'Go to Deposits': 'Aller aux dépôts',
  'Deposit to Paraclear in progress': 'Dépôt à Paraclear en cours',
  'Transfer successful': 'Transfert réussi',
  '<1>Paradex Beta</1> This is a Beta version of Paradex, the product is still being tested and can be subject to bugs and errors. For more details please read carefully the <2>Paradex terms of service</2> & <3>documentation</3>.':
    '<1>Paradex Beta</1> Il s’agit d’une version bêta de Paradex, le produit est encore en cours de test et peut être sujet à des bugs et des erreurs. Pour plus de détails, veuillez lire attent,ivement les <2>conditions d’utilisation de Paradex</2> & <3>documentation</3>.',
  'Limit {{side}} Order Fill': 'Remplissage de l ordre {{side}} limité',
  '{{type}} {{side}} Order Submitted': '{{type}} {{side}} Commande soumise',
  '{{type}} {{side}} Order Canceled': '{{type}} {{side}} Commande annulée',
  Reason: 'Raison',
  'Market {{side}} Order Fill': 'Marché {{side}} Commande remplie',
  'Trade Busted On-Chain': 'Échange éclaté sur la chaîne',
  'Fill id': 'Remplir id',
  'Withdraw to wallet failed': 'Échec du retrait vers le portefeuille',
  'Withdrawal to bridge initiated': 'Retrait vers le pont initié',
  'Withdrawal error. Try again.': 'Erreur de retrait. Réessayez.',
  'Withdrawal to bridge in progress': 'Retrait vers le pont en cours',
  'Withdrawal to wallet initiated': 'Retrait vers le portefeuille initié',
  'Withdrawal to bridge failed': 'Échec du retrait vers le pont',
  'Transaction error. Try again.': 'Erreur de transaction. Réessayez.',
  'Withdrawal to wallet available': 'Retrait vers le portefeuille disponible',
  'Go to Withdrawals': 'Aller aux retraits',
  'Withdrawal to wallet successful': 'Retrait vers le portefeuille réussi',
  'Session expired, please connect your wallet again.':
    'La session a expiré, veuillez reconnecter votre portefeuille.',
  'Failed to submit order': 'Échec de la soumission de la commande',
  'Your username preferences were updated!':
    "Vos préférences de nom d'utilisateur ont été mises à jour!",
  'Unexpected error updating username preferences':
    "Erreur inattendue lors de la mise à jour des préférences de nom d'utilisateur",
  'This username already exists. Please choose a different username and try again.':
    "Ce nom d'utilisateur existe déjà. Veuillez choisir un autre nom d'utilisateur et réessayer.",
  'Validation Error': 'Erreur de validation',
  'Binding Error': 'Erreur de liaison',
  'Internal Error': 'Erreur interne',
  'Not Found': 'Non trouvé',
  'Service Unavailable': 'Service indisponible',
  'Invalid Request Parameter': 'Paramètre de demande invalide',
  'Order Id Not Found': 'Id de commande non trouvé',
  'Order Is Closed': 'La commande est fermée',
  'Order Is Not Open Yet': "La commande n'est pas encore ouverte",
  'Client Order Id Not Found': 'Id de commande client non trouvé',
  'Duplicated Client Id': 'Id client dupliqué',
  'Invalid Price Precision': 'Précision du prix invalide',
  'Invalid Token': 'Token invalide',
  'Invalid Ethereum Address': 'Adresse Ethereum invalide',
  'Blocked Ethereum Address': 'Adresse Ethereum bloquée',
  'Invalid Ethereum Signature': 'Signature Ethereum invalide',
  'Invalid Starknet Address': 'Adresse Starknet invalide',
  'Invalid Starknet Signature': 'Signature Starknet invalide',
  'Starknet Signature Verification Failed':
    'Échec de la vérification de la signature Starknet',
  'Bad Starknet Request': 'Mauvaise requête Starknet',
  'Ethereum Signer Mismatch': 'Incohérence du signataire Ethereum',
  'Ethereum Hash Mismatch': 'Incohérence du hash Ethereum',
  'Not Onboarded': 'Non embarqué',
  'Invalid Timestamp': 'Horodatage invalide',
  'Invalid Signature Expiration': 'Expiration de la signature invalide',
  'Account Not Found': 'Compte non trouvé',
  'Invalid Order Signature': 'Signature de commande invalide',
  'Public Key Invalid': 'Clé publique invalide',
  'Unauthorized Ethereum Address': 'Adresse Ethereum non autorisée',
  'Ethereum Address Already Onboarded': 'Adresse Ethereum déjà embarquée',
  'Market Not Found': 'Marché non trouvé',
  'Allowlist Entry Not Found': 'Entrée de liste blanche non trouvée',
  'Username In Use': "Nom d'utilisateur en usage",
  'Service access restricted in your region':
    'Accès au service restreint dans votre région',
  'No Access Allowed': 'Aucun accès autorisé',
  'You do not have access to the platform. Please join our Discord to get access.':
    "Vous n'avez pas accès à la plateforme. Veuillez rejoindre notre Discord pour obtenir un accès.",
  '{{actualChainName}} Wallet Connected':
    'Portefeuille {{actualChainName}} connecté',
  'Incorrect network selected "{{actualChainName}}". Please change the network to "{{requiredChainName}}" (id={{requiredChainId}}) in your wallet and retry.':
    'Réseau incorrect sélectionné "{{actualChainName}}". Veuillez changer le réseau à "{{requiredChainName}}" (id={{requiredChainId}}) dans votre portefeuille et réessayer.',
  'Choose Wallet': 'Choisir un Portefeuille',
  'Connect with Starknet Wallet':
    'Connectez-vous avec le portefeuille Starknet',
  'Thank you for your interest! We are hard at work to roll out support for Starknet wallets very soon. Subscribe to our <1>Telegram</1> channel or follow us on <2>Twitter</2> to know first when it will be available.':
    "Merci de votre intérêt ! Nous travaillons d'arrache-pied pour déployer très prochainement le support des portefeuilles Starknet. Abonnez-vous à notre chaîne <1>Telegram</1> ou suivez-nous sur <2>Twitter</2> pour être les premiers informés de sa disponibilité.",
  'Switch to {{env}}': 'Passer à {{env}}',
  Search: 'Rechercher',
  League: 'Ligue',
  'Switch Account': 'Changer de compte',
};

export default translations;
