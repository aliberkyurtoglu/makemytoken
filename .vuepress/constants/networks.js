import {feeList} from "./feeList";
import {networkIds, networkNames} from "./networkIds";


export const networks = {
    [networkNames.BitciMain]: {
        web3Provider: 'https://rpc.bitci.com/',
        explorerLink: 'https://bitciexplorer.com',
        id: networkIds.BitciMain,
        name: 'Bitcichain',
        mainCurrency: 'BITCI',
        fees: feeList[networkIds.BitciMain]
    },
    [networkNames.BitciTest]: {
        web3Provider: 'https://testnet.bitcichain.com/',
        explorerLink: 'https://testnet.bitciexplorer.com',
        id: networkIds.BitciTest,
        name: 'Bitcichain - Testnet',
        mainCurrency: 'BITCI',
        isTestNet: true,
        fees: feeList[networkIds.BitciTest]
    },
    [networkNames.EthereumMain]: {
        web3Provider: 'https://mainnet.infura.io/v3//',
        explorerLink: 'https://etherscan.io',
        id: networkIds.EthereumMain,
        name: 'Ethereum',
        mainCurrency: 'ETH',
        fees: feeList[networkIds.EthereumMain]
    },
    [networkNames.ArbitrumMain]: {
        web3Provider: 'https://arbitrum-mainnet.infura.io/',
        explorerLink: 'https://explorer.arbitrum.io/',
        id: networkIds.ArbitrumMain,
        name: 'Arbitrum One',
        mainCurrency: 'ETH',
        fees: feeList[networkIds.ArbitrumMain]
    },
    [networkNames.BnbMain]: {
        web3Provider: 'https://bsc-dataseed.binance.org/',
        explorerLink: 'https://bscscan.com/',
        id: networkIds.BnbMain,
        name: 'BNB Chain',
        mainCurrency: 'BNB',
        fees: feeList[networkIds.BnbMain]
    },
}
