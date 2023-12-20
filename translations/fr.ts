import { Keys } from './en';

const translations: Record<Keys, string> = {
  Portfolio: 'Portefeuille',
  Trade: 'Commerce',
  Developers: 'Développeurs',
  Community: 'Communauté',
  Environments: 'Environnements',
  'System Status': 'Statut du système',
  Docs: 'Docs',
  'API Docs': 'Docs API',
  'Code Samples': 'Exemples de code',
  More: 'Plus',
  Stats: 'Statistiques',
  'Join Discord': 'Rejoindre Discord',
  Notifications: 'Notifications',
  'All caught up!': 'Tout est à jour!',
  'You have no new notifications': "Vous n'avez pas de nouvelles notifications",
  'Display Toast Notifications': 'Afficher les notifications Toast',
  'Connect Wallet': 'Connecter le portefeuille',
  'Connect your Wallet': 'Connectez votre portefeuille',
  'Choose Wallet': 'Choisir le portefeuille',
  'Link Wallet': 'Lier le portefeuille',
  'You will receive a signature request. Signing is free and will not send a transaction.':
    "Vous recevrez une demande de signature. La signature est gratuite et n'envoie pas de transaction.",
  'Generate Private Key': 'Générer une clé privée',
  'Generating Private Key': "Génération d'une clé privée",
  'Private Key Generated': 'Clé privée générée',
  'Enable secure access to our API': "Activer l'accès sécurisé à notre API",
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
  'Edit Your Username': 'Modifier votre nom d’utilisateur',
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
  'L1 Address': 'Adresse L1',
  'L2 Address': 'Adresse L2',
  'Open in Explorer': 'Ouvrir dans l’explorateur',
  'Sign Out': 'Se déconnecter',
  'Copy L2 Private Key': 'Copier la clé privée L2',
  'No markets available': 'Aucun marché disponible',
  'Last Price': 'Dernier prix',
  'Open Interest': 'Intérêt ouvert',
  '24h Volume': 'Volume sur 24h',
  'Mark Price': 'Prix de marque',
  'Spot Oracle Price': 'Prix Oracle au comptant',
  'Eight hour funding rate that is continuously accrued on positions and settled upon any trade':
    'Taux de financement de huit heures qui est continuellement accumulé sur les positions et réglé lors de tout échange',
  '8h Funding Rate': 'Taux de financement de 8h',
  Limit: 'Limite',
  LIMIT: 'LIMITE',
  Market: 'Marché',
  MARKET: 'MARCHÉ',
  'Limit Price': 'Prix limite',
  Amount: 'Montant',
  'Your order stays open until it is filled or you decide to cancel.':
    "Votre commande reste ouverte jusqu'à ce qu'elle soit exécutée ou que vous décidiez de l'annuler.",
  'Your order gets filled right away, partially or fully, and whatever is left gets canceled instantly.':
    'Votre commande est immédiatement exécutée, partiellement ou totalement, et tout ce qui reste est instantanément annulé.',
  Fee: 'Frais',
  'Currently the fees are fixed and uniform across the platform. Maker {{makerFee}} / Taker {{takerFee}}':
    'Actuellement, les frais sont fixes et uniformes sur la plateforme. Faiseur {{makerFee}} / Preneur {{takerFee}}',
  Notional: 'Notionnel',
  Buy: 'Acheter',
  BUY: 'ACHETER',
  LONG: 'LONG',
  Sell: 'Vendre',
  SELL: 'VENDRE',
  SHORT: 'COURT',
  'Account Value': 'Valeur du compte',
  'The total value of your account at current mark prices':
    'La valeur totale de votre compte aux prix actuels',
  'Unrealized P&L': 'P&L non réalisé',
  'Free Collateral': 'Collatéral libre',
  'Account Leverage': 'Effet de levier du compte',
  Margin: 'Marge',
  'Initial Margin': 'Marge initiale',
  'Maintenance Margin': 'Marge de maintenance',
  'Account value / maintenance margin requirements':
    'Valeur du compte / exigences de marge de maintenance',
  'Health Factor': 'Facteur de santé',
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
  'Unrealized Funding': 'Financement non réalisé',
  'Close Position': 'Fermer la position',
  Type: 'Type',
  Filled: 'Rempli',
  Instruction: 'Instruction',
  'Client Order Id': 'ID de commande client',
  Status: 'Statut',
  NEW: 'NOUVEAU',
  OPEN: 'OUVERT',
  CLOSED: 'FERMÉ',
  Pending: 'En attente',
  Complete: 'Complet',
  Bust: 'Éclatement',
  'Notional / Fee': 'Notionnel / Frais',
  Liquidity: 'Liquidité',
  'Tx Hash': 'Hash de transaction',
  Id: 'Id',
  Remaining: 'Restant',
  'Cancel Reason': "Raison d'annulation",
  'User Canceled': 'Utilisateur annulé',
  'Not Enough Margin': 'Marge insuffisante',
  'Empty Market': 'Marché vide',
  'Post Only Would Cross': 'Post Only Would Cross',
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
  Deposit: 'Dépôt',
  Withdraw: 'Retirer',
  Withdrawal: 'Retrait',
  'Collateral Value': 'Valeur du collatéral',
  'Position Notional': 'Position notionnelle',
  Collateral: 'Collatéral',
  Asset: 'Actif',
  'Wallet Balance': 'Solde du portefeuille',
  Actions: 'Actions',
  Action: 'Action',
  'Tx Hash L2': 'Hash de transaction L2',
  'Tx Hash L1': 'Hash de transaction L1',
  'Withdraw to Wallet': 'Retirer vers le portefeuille',
  'Deposit to Paraclear': 'Déposer à Paraclear',
  'You have no balance in your Ethereum wallet. Deposit some {{asset}} and try again.':
    "Vous n'avez aucun solde dans votre portefeuille Ethereum. Déposez un peu de {{asset}} et réessayez.",
  'It is not possible to deposit more than your current balance.':
    "Il n'est pas possible de déposer plus que votre solde actuel.",
  'Available on L1': 'Disponible sur L1',
  'Deposits are a two-step process. First initiate a deposit from your Ethereum wallet':
    'Les dépôts sont un processus en deux étapes. Commencez par initier un dépôt depuis votre portefeuille Ethereum',
  'Deposits are a two-step process. First initiate a deposit from your Ethereum wallet to the Starknet bridge. Second, initiate deposit from the Starknet bridge to Paraclear via the Deposit / Withdraw table. These transactions may take several minutes depending on network conditions. For more information check out our <1>docs</1>.':
    "Les dépôts sont un processus en deux étapes. Commencez par initier un dépôt depuis votre portefeuille Ethereum vers le pont Starknet. Deuxièmement, initiez le dépôt du pont Starknet à Paraclear via le tableau Dépôt / Retrait. Ces transactions peuvent prendre plusieurs minutes en fonction des conditions du réseau. Pour plus d'informations, consultez nos <1>docs</1>.",
  'read more': 'lire plus',
  'Initiate Deposit to Bridge': 'Initier le dépôt vers le pont',
  'Enable USDC on Paradex': 'Activer USDC sur Paradex',
  'In order to deposit you must allow Paradex access to at least {{amount}}.':
    "Pour déposer, vous devez autoriser l'accès de Paradex à au moins {{amount}}.",
  'Enable USDC': 'Activer USDC',
  'Withdraw initiated': 'Retrait initié',
  'Withdrawals are a two-step process. First initiate a withdrawal from Paraclear':
    'Les retraits sont un processus en deux étapes. Commencez par initier un retrait de Paraclear',
  'Withdrawals are a two-step process. First initiate a withdrawal from Paraclear to the Starknet bridge. This first step can take 2-7 hours. Second, initiate your withdrawal from the Starknet bridge to your Ethereum wallet via the Deposit / Withdraw table. For more information check out our <1>docs</1>.':
    "Les retraits sont un processus en deux étapes. Commencez par initier un retrait de Paraclear vers le pont Starknet. Cette première étape peut prendre de 2 à 7 heures. Deuxièmement, initiez votre retrait du pont Starknet vers votre portefeuille Ethereum via le tableau Dépôt / Retrait. Pour plus d'informations, consultez nos <1>docs</1>.",
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
  'Deposit to bridge initiated': 'Dépôt au pont initié',
  'Deposit to Paraclear available': 'Dépôt à Paraclear disponible',
  'Go to Deposits': 'Aller aux dépôts',
  'Deposit to Paraclear in progress': 'Dépôt à Paraclear en cours',
  '<1>Paradex Closed Beta</1> This is a CLOSED BETA version of Paradex, the product is still being tested and can be subject to bugs and errors. For more details please read carefully the <2>Paradex terms of service</2> & <3>documentation</3>.':
    '<1>Paradex Closed Beta</1> Ceci est une version BETA FERMÉE de Paradex, le produit est toujours en cours de test et peut être sujet à des bugs et erreurs. Pour plus de détails, veuillez lire attentivement les <2>conditions d utilisation de Paradex</2> & <3>documentation</3>.',
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
  'Ethereum Wallet Connected': 'Portefeuille Ethereum connecté',
  'Incorrect network selected "{{actualChainName}}". Please change the network to "{{requiredChainName}}" (id={{requiredChainId}}) in your wallet and retry.':
    'Réseau incorrect sélectionné "{{actualChainName}}". Veuillez changer le réseau à "{{requiredChainName}}" (id={{requiredChainId}}) dans votre portefeuille et réessayer.',
};

export default translations;