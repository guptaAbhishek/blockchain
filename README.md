# Bitcoin Transaction 
https://www.npmjs.com/package/bitcoin-transaction

# https://medium.com/@gcwelborn/crafting-a-blockchain-transaction-with-javascript-3946bda1df7b

# https://github.com/bitcoinjs/bitcoinjs-lib

# The Testnet

For demonstration purposes, we’ll be setting our network to testnet. If you want to disregard the following and use real bitcoin, well, that’s an unnecessary risk to take. The bitcoin wiki summarizes it well:

The testnet is an alternative Bitcoin block chain, to be used for testing. Testnet coins are separate and distinct from actual bitcoins, and are never supposed to have any value. This allows application developers or bitcoin testers to experiment, without having to use real bitcoins or worrying about breaking the main bitcoin chain.

When you see the following variable being used, we’re configuring bitcoinjs for testnet use.

<code>const TestNet = Btc.networks.testnet</code>

