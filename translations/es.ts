import { Keys } from './en';

const translations: Record<Keys, string> = {
  'This feature currently is still in Beta. Backup your Paradex Private Key for additional safety.':
    'Esta función todavía está en Beta. Haga una copia de seguridad de su Clave Privada de Paradex para mayor seguridad.',
  'Deposit failed': 'Depósito fallido',
  'Deposit in progress': 'Depósito en progreso',
  'External Account': 'Cuenta externa',
  'Tx Hashes': 'Hashes de transacciones',
  'Continue to {{bridge}}': 'Continuar a {{bridge}}',
  'By clicking Continue to {{bridge}}, you will be sent to {{bridge}} website to bridge your funds out of Paradex.':
    'Al hacer clic en Continuar a {{bridge}}, se le enviará al sitio web de {{bridge}} para transferir sus fondos fuera de Paradex.',
  'By clicking Continue to {{bridge}}, you will be sent to {{bridge}} website to bridge your funds to Paradex.':
    'Al hacer clic en Continuar a {{bridge}}, se le enviará al sitio web de {{bridge}} para transferir sus fondos a Paradex.',
  Refer: 'Referir',
  Address: 'Dirección',
  'Date Joined': 'Fecha de registro',
  'Referral Code': 'Código de referencia',
  'Volume Traded': 'Volumen negociado',
  Bridge: 'Puente',
  'Withdraw to': 'Retirar a',
  'Deposit from': 'Depósito desde',
  'Position is already closed': 'La posición ya está cerrada',
  'Your Paradex L2 Address is NOT a Public Starknet Address. If you try to send funds to this address on Public Starknet via a cross chain bridge you risk losing your funds. <1>Read more</1>.':
    'Tu dirección de Paradex L2 NO es una dirección Starknet pública. Si intentas enviar fondos a esta dirección en la Starknet pública a través de un puente de cadena cruzada, corres el riesgo de perder tus fondos. <1>Leer más</1>.',
  '{{chain}} Address': 'Dirección de {{chain}}',
  'Copy Paradex Private Key': 'Copiar Clave Privada de Paradex',
  'Your account will be liquidated if Margin Ratio reaches 100%':
    'Tu cuenta será liquidada si el Ratio de Margen alcanza el 100%',
  Liquidation: 'Liquidación',
  Fee: 'Tarifa',
  Maker: 'Creador',
  'Maker Score': 'Puntuación de Creador',
  'Maker Points Share': 'Porcentaje de Puntos de Creador',
  'Fee Points Share': 'Porcentaje de Puntos de Tarifa',
  'Fee Points': 'Puntos de Tarifa',
  'Maker Points': 'Puntos de Creador',
  'Liquidation {{side}} Fill': 'Liquidación {{side}} Llenado',
  Settings: 'Ajustes',
  'Market Score': 'Puntuación de Mercado',
  'Points Pre-Season': 'Puntos Pretemporada',
  'Season {{season}} (coming soon)': 'Temporada {{season}} (próximamente)',
  'Confirm Buy': 'Confirmar Compra',
  'Confirm Sell': 'Confirmar Venta',
  'Other Points': 'Otros Puntos',
  'Estimated Receivable Amount': 'Cantidad estimada a recibir',
  'Socialized Loss active. Click to learn more.':
    'Pérdida socializada activa. Haz clic para obtener más información.',
  Analytics: 'Analítica',
  'Sign In to see your account Points stats':
    'Inicia sesión para ver las estadísticas de tus puntos de cuenta',
  '<1>Clock Is Out Of Sync</1> The clock on your device is out of sync. This may cause issues with the application. Please make sure your device clock is set to be auto. For more details please <2>see documentation</2>':
    '<1>El reloj está fuera de sincronización</1> El reloj de su dispositivo está fuera de sincronización. Esto puede causar problemas con la aplicación. Por favor, asegúrese de que el reloj de su dispositivo esté configurado para ser automático. Para más detalles, por favor <2>consulte la documentación</2>',
  'Failed to fetch max withdrawable amount':
    'Error al obtener la cantidad máxima de retiro',
  'It is not possible to withdraw more than your Max Withdrawable Amount.':
    'No es posible retirar más de su Cantidad Máxima de Retiro.',
  'Max Withdrawable Amount': 'Cantidad Máxima de Retiro',
  'Points Explainer': 'Explicador de Puntos',
  Pool: 'Nivel',
  'Quote Quality': 'Calidad de la cotización',
  'Create Your Public Username': 'Crear su nombre de usuario público',
  'Edit Your Public Username': 'Editar su nombre de usuario público',
  'You have been signed out.': 'Has cerrado sesión.',
  'Maker Volume Score': 'Volumen Del Maker Score',
  'Fee Score': 'Puntuación de Comisiones',
  'Score Share': 'Porcentaje de Puntuación',
  'Instrument Share': 'Porcentaje de Instrumento',
  Points: 'Puntos',
  'Total Points': 'Puntos Totales',
  '24h Change': 'Cambio en 24h',
  Leaderboard: 'Tabla de clasificación',
  Cancel: 'Cancelar',
  Portfolio: 'Portafolio',
  Trade: 'Comercio',
  Build: 'Construir',
  'Referrals Explainer': 'Explicador de Referencias',
  'How It Works': 'Cómo funciona',
  'My Referrals': 'Mis referencias',
  'Your Referral Code': 'Su código de referencia',
  'Affiliate Program': 'Programa de afiliados',
  Enrolled: 'Inscrito',
  'Traders Referred': 'Operadores referidos',
  'Referral Rewards': 'Recompensas de referencia',
  'Referral Points': 'Puntos de referencia',
  'Invite Friends': 'Invitar amigos',
  Share: 'Compartir',
  Earn: 'Ganar',
  Give: 'Dar',
  'Share your code to invite friends to join Paradex':
    'Comparta su código para invitar a amigos a unirse a Paradex',
  '<1>{{amount}}</1> Fees': '<1>{{amount}}</1> de tarifas',
  'You receive {{amount}} of the referred user’s fees':
    'Recibe el {{amount}} de las tarifas del usuario referido',
  '<1>{{amount}}</1> Points': '<1>{{amount}}</1> de puntos',
  'You receive {{amount}} of the referred user’s points':
    'Recibe el {{amount}} de los puntos del usuario referido',
  '<1>{{amount}}</1> Discount': '<1>{{amount}}</1> de descuento',
  'Your friend receives {{amount}} discount on fees':
    'Su amigo recibe un {{amount}} de descuento en las tarifas',
  'Create and share your custom referral code':
    'Cree y comparta su código de referencia personalizado',
  'If you have referred <1>>{{amount}}</1> in 30d volume or have <1>{{followers}}</1>+ social media followers, you can apply for the affiliate program.':
    'Si has referido <1>>{{amount}}</1> en volumen de 30d o tienes <1>{{followers}}</1>+ seguidores en redes sociales, puedes solicitar el programa de afiliados.',
  Apply: 'Aplicar',
  'Connect your wallet to see your Referral History.':
    'Conecte su billetera para ver su historial de referencias.',
  'Welcome to Paradex': 'Bienvenido a Paradex',
  'Congrats! The referral code you used is now active! It means you can start enjoying a discount on your trading fees!':
    '¡Felicidades! ¡El código de referencia que utilizaste ahora está activo! ¡Significa que puedes comenzar a disfrutar de un descuento en tus tarifas de negociación!',
  'Congrats! The referral code <1>{{codeProvided}}</1> used is now active!':
    '¡Felicidades! ¡El código de referencia <1>{{codeProvided}}</1> utilizado ahora está activo!',
  'Referral code not activated. The code can only be applied once during the initial onboarding.':
    'Código de referencia no activado. El código solo se puede aplicar una vez durante el embarque inicial.',
  'Referral code <1>{{codeProvided}}</1> not activated. You have already onboarded with <1>{{referredBy}}</1>.':
    'Código de referencia <1>{{codeProvided}}</1> no activado. Ya te has embarcado con <1>{{referredBy}}</1>.',
  'Referral Code Applied': 'Código de referencia aplicado',
  "You will receive <1>{{userAmount}}</1> of referred user's <1>fees</1> <2>and</2> <1>{{userAmountPoints}} points</1>. They will receive a <1>{{friendAmount}}</1> discount.":
    'Recibirás <1>{{userAmount}}</1> de las <1>tarifas</1> del usuario referido <2>y</2> <1>{{userAmountPoints}} puntos</1>. Ellos recibirán un <1>{{friendAmount}}</1> de descuento.',
  Community: 'Comunidad',
  Environments: 'Ambientes',
  'System Status': 'Estado del Sistema',
  Language: 'Idioma',
  Docs: 'Documentos',
  'API Docs': 'Documentos de API',
  'Code Samples': 'Muestras de Código',
  More: 'Más',
  Stats: 'Estadísticas',
  'Join Discord': 'Unirse a Discord',
  Notifications: 'Notificaciones',
  'All caught up!': '¡Todo al día!',
  'You have no new notifications': 'No tienes nuevas notificaciones',
  'Connect Wallet': 'Conectar Billetera',
  'WalletConnect is taking too long to open. Please refresh the page and try again.':
    'WalletConnect está tardando demasiado en abrirse. Por favor, actualiza la página e inténtalo de nuevo.',
  'Unexpected error opening WalletConnect modal. Please refresh the page and try again.':
    'Error inesperado al abrir el modal de WalletConnect. Por favor, actualiza la página e inténtalo de nuevo.',
  'Connect your Wallet': 'Conecta tu Billetera',
  'Link Wallet': 'Enlazar Billetera',
  'You will receive a signature request. Signing is free and will not send a transaction.':
    'Recibirás una solicitud de firma. Firmar es gratis y no enviará una transacción.',
  'Generate Paradex Chain wallet': 'Generar billetera Paradex Chain',
  'Generating Paradex Chain wallet': 'Generando billetera Paradex Chain',
  'Paradex Chain wallet generated': 'Billetera Paradex Chain generada',
  'Verify that you own this wallet': 'Verificar que usted posee esta billetera',
  'Remember Me': 'Recuérdame',
  'Only use “Remember Me” if you are using a secure device you own. Selecting this option can expose your information to  others if you are accessing this wallet from a public device.':
    'Solo use "Recuérdame" si está utilizando un dispositivo seguro de su propiedad. Seleccionar esta opción puede exponer su información a otros si está accediendo a esta billetera desde un dispositivo público.',
  Continue: 'Continuar',
  'Disconnect Wallet': 'Desconectar Billetera',
  Disconnect: 'Desconectar',
  Account: 'Cuenta',
  Username: 'Nombre de usuario',
  Edit: 'Editar',
  'Your username is now hidden. It is not visible to other users.':
    'Su nombre de usuario ahora está oculto. No es visible para otros usuarios.',
  'Your username will be visible to other users unless you choose to hide it. You can always change it later.':
    'Su nombre de usuario será visible para otros usuarios a menos que elija ocultarlo. Siempre puedes cambiarlo más tarde.',
  'Hide my Username': 'Ocultar mi nombre de usuario',
  Save: 'Guardar',
  'Username is required': 'Se requiere nombre de usuario',
  'Username must be between 5 and 20 characters':
    'El nombre de usuario debe tener entre 5 y 20 caracteres',
  'Username can only contain letters and numbers':
    'El nombre de usuario solo puede contener letras y números',
  Wallets: 'Billeteras',
  'Paradex Block Explorer': 'Explorador de bloques de Paradex',
  'Sign Out': 'Cerrar sesión',
  'No markets available': 'No hay mercados disponibles',
  'Last Price': 'Último precio',
  'Open Interest': 'Interés abierto',
  '24h Volume': 'Volumen 24h',
  'Mark Price': 'Precio de marca',
  'Spot Oracle Price': 'Precio de Oracle al contado',
  'Eight hour funding rate that is continuously accrued on positions and settled upon any trade. If the funding rate is positive, longs pay shorts. If negative, shorts pay longs.':
    'Tasa de financiamiento de 8 horas que se acumula continuamente en las posiciones y se liquida en cualquier operación. Si la tasa de financiamiento es positiva, los largos pagan a los cortos. Si es negativa, los cortos pagan a los largos.',
  '8h Funding': 'Financiamiento de 8h',
  Limit: 'Límite',
  Market: 'Mercado',
  'Stop Limit': 'Stop Límite',
  'Stop Market': 'Stop de Mercado',
  'Scaled Order': 'Orden escalada',
  'Trigger Price': 'Precio de Activación',
  'Limit Price': 'Precio límite',
  Amount: 'Cantidad',
  'Reduce Only': 'Solo Reducción',
  'Reduce Only will increase position': 'Reduce Only aumentará la posición',
  'Your order stays open until it is filled or you decide to cancel.':
    'Su orden permanece abierta hasta que se complete o decida cancelarla.',
  'Your order gets filled right away, partially or fully, and whatever is left gets canceled instantly.':
    'Su orden se completa de inmediato, parcial o totalmente, y lo que queda se cancela instantáneamente.',
  'Conditional limit order that serves to add liquidity to the order book as a Maker order.':
    'Orden límite condicional que sirve para agregar liquidez al libro de órdenes como una orden de Maker.',
  'Currently the fees are fixed and uniform across the platform. Maker {{makerFee}} / Taker {{takerFee}}':
    'Actualmente, las tarifas son fijas y uniformes en toda la plataforma. Creador {{makerFee}} / Tomador {{takerFee}}',
  Notional: 'Nominal',
  Buy: 'Comprar',
  BUY: 'COMPRAR',
  LONG: 'LARGO',
  Sell: 'Vender',
  SELL: 'VENDER',
  SHORT: 'CORTO',
  'Order Value': 'Valor del pedido',
  'Current Position': 'Posición actual',
  'Account Value': 'Valor de la cuenta',
  'The total value of your account at current mark prices':
    'El valor total de su cuenta a los precios actuales de marca',
  'Unrealized P&L': 'P&L no realizada',
  'Free Collateral': 'Colateral libre',
  'Account Leverage': 'Apalancamiento de la cuenta',
  Margin: 'Margen',
  'Margin Ratio': 'Margin Ratio',
  'Initial Margin': 'Margen inicial',
  'Maintenance Margin': 'Margen de mantenimiento',
  'Order Book': 'Libro de órdenes',
  Trades: 'Operaciones',
  Price: 'Precio',
  Size: 'Tamaño',
  Total: 'Total',
  Time: 'Tiempo',
  Spread: 'Diferencial',
  Positions: 'Posiciones',
  'Open Orders': 'Órdenes abiertas',
  'Trade History': 'Historial de operaciones',
  'Order History': 'Historial de órdenes',
  'Funding Payments': 'Pagos de financiación',
  Side: 'Lado',
  'Entry Price': 'Precio de entrada',
  'Liquidation Price': 'Precio de Liquidación',
  'Unrealized Funding': 'Financiación no realizada',
  'Close Position': 'Cerrar posición',
  'Market Close': 'Cierre de mercado',
  'Close Long': 'Cerrar largo',
  'Close Short': 'Cerrar corto',
  Type: 'Tipo',
  Filled: 'Llenado',
  Triggered: 'Activado',
  Instruction: 'Instrucción',
  'Client Order Id': 'ID de orden del cliente',
  Status: 'Estado',
  NEW: 'NUEVO',
  OPEN: 'ABIERTO',
  UNTRIGGERED: 'No activado',
  CLOSED: 'CERRADO',
  Pending: 'Pendiente',
  Complete: 'Completo',
  Bust: 'Quiebra',
  'Notional / Fee': 'Nominal / Tarifa',
  Liquidity: 'Liquidez',
  'Tx Hash': 'Hash de Tx',
  'Trade Id': 'ID de la operación',
  Remaining: 'Restante',
  'Cancel Reason': 'Razón de cancelación',
  'User Canceled': 'Usuario cancelado',
  'Not Enough Margin': 'No hay suficiente margen',
  'Empty Market': 'Mercado vacío',
  'Post Only': 'Solo publicar',
  'Post Only Would Cross': 'Solo publicar cruzaría',
  'Remaining IOC Cancel': 'Cancelación restante de IOC',
  'Unexpected Failure': 'Fallo inesperado',
  Deleverage: 'Desapalancamiento',
  'In Liquidation': 'En liquidación',
  'Self Trade': 'Auto comercio',
  'Asset Unavailable': 'Activo no disponible',
  'Asset Expired': 'Activo vencido',
  'Order Type Invalid': 'Tipo de orden inválido',
  'Price Not Available': 'Precio no disponible',
  Expired: 'Vencido',
  'Price Outside Bands': 'Precio fuera de bandas',
  Timeout: 'Tiempo agotado',
  'Order Exceeds Position Limit': 'La orden excede el límite de posición',
  'Order Id': 'Id de la orden',
  Payment: 'Pago',
  'Cancel All': 'Cancelar todo',
  '{{orderSize}} will be closed at Market price':
    '{{orderSize}} se cerrará al precio de mercado',
  'By connecting a wallet, you agree to <1>Paradex Terms of Service</1> and represent and warrant to Paradex that you are not a <2>Restricted Person</2>.':
    'Al conectar una billetera, aceptas los <1>Términos de servicio de Paradex</1> y representas y garantizas a Paradex que no eres una <2>Persona restringida</2>.',
  Wallet: 'Billetera',
  Deposit_verb: 'Depositar',
  Deposit_noun: 'Depósito',
  Withdraw: 'Retirar',
  Withdrawal: 'Retiro',
  Transfers: 'Transferencias',
  Transfer: 'Transferir',
  'Collateral Value': 'Valor del colateral',
  'Position Value': 'Valor de la posición',
  Collateral: 'Colateral',
  Asset: 'Activo',
  'Wallet Balance': 'Saldo de la billetera',
  Actions: 'Acciones',
  Action: 'Acción',
  'External Tx Hash': 'Hash de Tx externo',
  'Withdraw to Wallet': 'Retirar a la billetera',
  'Deposit to Paraclear': 'Depositar a Paraclear',
  'You have no balance in your Ethereum wallet. Deposit some {{asset}} and try again.':
    'No tienes saldo en tu billetera Ethereum. Deposita algo de {{asset}} e intenta de nuevo.',
  'It is not possible to deposit more than your current balance.':
    'No es posible depositar más que tu saldo actual.',
  Available: 'Disponible',
  'Initiate a deposit from your Ethereum wallet to the Paradex bridge. These transactions':
    'Inicia un depósito desde tu billetera Ethereum al puente Paradex. Estas transacciones',
  'Initiate a deposit from your Ethereum wallet to the Paradex bridge. These transactions may take several minutes depending on network conditions. For more information check out our <1>docs</1>.':
    'Inicia un depósito desde tu billetera Ethereum al puente Paradex. Estas transacciones pueden tardar varios minutos dependiendo de las condiciones de la red. Para más información, consulta nuestros <1>documentos</1>.',
  'read more': 'leer más',
  'Initiate Deposit to Bridge': 'Iniciar depósito al puente',
  'Enable USDC on Paradex': 'Habilitar USDC en Paradex',
  'In order to deposit you must allow Paradex access to at least {{amount}}.':
    'Para depositar debes permitir el acceso de Paradex a al menos {{amount}}.',
  'Enable USDC': 'Habilitar USDC',
  'Withdraw initiated': 'Retiro iniciado',
  'Withdrawals are a two-step process. First initiate a withdrawal from Paraclear':
    'Los retiros son un proceso de dos pasos. Primero inicia un retiro desde Paraclear',
  'Withdrawals are a two-step process. First initiate a withdrawal from Paraclear to the Starknet bridge. This first step can take 2-7 hours. Second, initiate your withdrawal from the Starknet bridge to your Ethereum wallet via the Deposits / Withdrawals table. For more information check out our <1>docs</1>.':
    'Los retiros son un proceso de dos pasos. Primero inicia un retiro desde Paraclear al puente Starknet. Este primer paso puede tardar de 2 a 7 horas. Segundo, inicia tu retiro desde el puente Starknet a tu billetera Ethereum a través de la tabla de Depósitos / Retiros. Para más información, consulta nuestros <1>documentos</1>.',
  'Initiate Withdrawal to Bridge': 'Iniciar retiro al puente',
  'You have no funds to withdraw. It is not possible to withdraw more than your free collateral.':
    'No tienes fondos para retirar. No es posible retirar más que tu colateral libre.',
  'It is not possible to withdraw more than your free collateral.':
    'No es posible retirar más que tu colateral libre.',
  'You have no collateral': 'No tienes colateral',
  'You have no open positions': 'No tienes posiciones abiertas',
  'You have no open orders': 'No tienes órdenes abiertas',
  'You have no trades': 'No tienes operaciones',
  'You have no orders': 'No tienes órdenes',
  'You have no funding payments': 'No tienes pagos de financiación',
  'You have no transfers': 'No tienes transferencias',
  'Account in liquidation': 'Cuenta en liquidación',
  'Account is being liquidated. Any open positions will be closed. Trading now is disabled.':
    'La cuenta está siendo liquidada. Cualquier posición abierta será cerrada. El comercio ahora está deshabilitado.',
  'Account liquidated': 'Cuenta liquidada',
  'Your account was liquidated on {{createdAt}}. Any open positions were closed.':
    'Tu cuenta fue liquidada el {{createdAt}}. Cualquier posición abierta fue cerrada.',
  'Deposit to Paraclear successful': 'Depósito a Paraclear exitoso',
  'Deposit to Paraclear failed': 'Depósito a Paraclear fallido',
  'Unexpected error. Try again.': 'Error inesperado. Intenta de nuevo.',
  'Deposit initiated': 'Depósito iniciado',
  'Deposit to bridge initiated': 'Depósito al puente iniciado',
  'Deposit to Paraclear available': 'Depósito a Paraclear disponible',
  'Go to Deposits': 'Ir a Depósitos',
  'Deposit to Paraclear in progress': 'Depósito a Paraclear en progreso',
  'Transfer successful': 'Transferencia exitosa',
  '<1>Paradex Beta</1> This is a Beta version of Paradex, the product is still being tested and can be subject to bugs and errors. For more details please read carefully the <2>Paradex terms of service</2> & <3>documentation</3>.':
    '<1>Paradex Beta</1> Esta es una versión Beta de Paradex, el producto aún está siendo probado y puede estar sujeto a errores y fallos. Para más detalles, por favor lee cuidadosamente los <2>términos de servicio de Paradex</2> y la <3>documentación</3>.',
  'Limit {{side}} Order Fill': 'Límite {{side}} Orden Completada',
  '{{type}} {{side}} Order Submitted': '{{type}} {{side}} Orden Enviada',
  '{{type}} {{side}} Order Canceled': '{{type}} {{side}} Orden Cancelada',
  Reason: 'Razón',
  'Market {{side}} Order Fill': 'Mercado {{side}} Orden Completada',
  'Trade Busted On-Chain': 'Comercio Anulado en Cadena',
  'Fill id': 'Id de llenado',
  'Withdraw to wallet failed': 'Retiro a la billetera fallido',
  'Withdrawal to bridge initiated': 'Retiro al puente iniciado',
  'Withdrawal error. Try again.': 'Error de retiro. Intenta de nuevo.',
  'Withdrawal to bridge in progress': 'Retiro al puente en progreso',
  'Withdrawal to wallet initiated': 'Retiro a la billetera iniciado',
  'Withdrawal to bridge failed': 'Retiro al puente fallido',
  'Transaction error. Try again.': 'Error de transacción. Intenta de nuevo.',
  'Withdrawal to wallet available': 'Retiro a la billetera disponible',
  'Go to Withdrawals': 'Ir a Retiros',
  'Withdrawal to wallet successful': 'Retiro a la billetera exitoso',
  'Session expired, please connect your wallet again.':
    'Sesión expirada, por favor conecta tu billetera de nuevo.',
  'Failed to submit order': 'Falló al enviar la orden',
  'Your username preferences were updated!':
    '¡Tus preferencias de nombre de usuario fueron actualizadas!',
  'Unexpected error updating username preferences':
    'Error inesperado al actualizar las preferencias de nombre de usuario',
  'This username already exists. Please choose a different username and try again.':
    'Este nombre de usuario ya existe. Por favor elige un nombre de usuario diferente e intenta de nuevo.',
  'Validation Error': 'Error de Validación',
  'Binding Error': 'Error de Vinculación',
  'Internal Error': 'Error Interno',
  'Not Found': 'No Encontrado',
  'Service Unavailable': 'Servicio No Disponible',
  'Invalid Request Parameter': 'Parámetro de Solicitud Inválido',
  'Order Id Not Found': 'Id de Orden No Encontrado',
  'Order Is Closed': 'La Orden Está Cerrada',
  'Order Is Not Open Yet': 'La Orden Aún No Está Abierta',
  'Client Order Id Not Found': 'Id de Orden del Cliente No Encontrado',
  'Duplicated Client Id': 'Id de Cliente Duplicado',
  'Invalid Price Precision': 'Precisión de Precio Inválida',
  'Invalid Token': 'Token Inválido',
  'Invalid Ethereum Address': 'Dirección de Ethereum Inválida',
  'Blocked Ethereum Address': 'Dirección de Ethereum bloqueada',
  'Invalid Ethereum Signature': 'Firma de Ethereum Inválida',
  'Invalid Starknet Address': 'Dirección de Starknet Inválida',
  'Invalid Starknet Signature': 'Firma de Starknet Inválida',
  'Starknet Signature Verification Failed':
    'Falló la Verificación de Firma de Starknet',
  'Bad Starknet Request': 'Mala Solicitud de Starknet',
  'Ethereum Signer Mismatch': 'Desajuste del Firmante de Ethereum',
  'Ethereum Hash Mismatch': 'Desajuste del Hash de Ethereum',
  'Not Onboarded': 'No Embarcado',
  'Invalid Timestamp': 'Marca de Tiempo Inválida',
  'Invalid Signature Expiration': 'Expiración de Firma Inválida',
  'Account Not Found': 'Cuenta No Encontrada',
  'Invalid Order Signature': 'Firma de Orden Inválida',
  'Public Key Invalid': 'Clave Pública Inválida',
  'Unauthorized Ethereum Address': 'Dirección de Ethereum No Autorizada',
  'Ethereum Address Already Onboarded': 'Dirección de Ethereum Ya Embarcada',
  'Market Not Found': 'Mercado No Encontrado',
  'Allowlist Entry Not Found': 'Entrada de lista de permitidos no encontrada',
  'Username In Use': 'Nombre de usuario en uso',
  'Service access restricted in your region':
    'Acceso al servicio restringido en tu región',
  'No Access Allowed': 'No se permite el acceso',
  'You do not have access to the platform. Please join our Discord to get access.':
    'No tienes acceso a la plataforma. Por favor, únete a nuestro Discord para obtener acceso.',
  '{{actualChainName}} Wallet Connected':
    'Billetera {{actualChainName}} conectada',
  'Incorrect network selected "{{actualChainName}}". Please change the network to "{{requiredChainName}}" (id={{requiredChainId}}) in your wallet and retry.':
    'Red incorrecta seleccionada "{{actualChainName}}". Por favor, cambia la red a "{{requiredChainName}}" (id={{requiredChainId}}) en tu billetera e intenta de nuevo.',
  'Choose Wallet': 'Elegir Monedero',
  'Connect with Starknet Wallet': 'Conectar con la billetera Starknet',
  'Thank you for your interest! We are hard at work to roll out support for Starknet wallets very soon. Subscribe to our <1>Telegram</1> channel or follow us on <2>Twitter</2> to know first when it will be available.':
    '¡Gracias por su interés! Estamos trabajando arduamente para implementar soporte para billeteras Starknet muy pronto. Suscríbete a nuestro canal de <1>Telegram</1> o síguenos en <2>Twitter</2> para ser el primero en saber cuándo estará disponible.',
  'Switch to {{env}}': 'Cambiar a {{env}}',
  Search: 'Buscar',
  League: 'Liga',
  'Switch Account': 'Cambiar Cuenta',
};

export default translations;
