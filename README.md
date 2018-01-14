# Javascript Zero to Developing Blockchain Technology 
https://codeforstartups.com/javascript-zero-to-hero

<code>Download PPT </code>
https://codeforstartups.com/download-ppt-javascript-zero-to-hero.ppt

<code>Download PDF</code>
https://codeforstartups.com/download-pdf-javascript-zero-to-hero.pdf

<code>View/Download Video</code>
https://codeforstartups.com/youtube-video-javascript-zero-to-hero

# Javascript Tutorial
https://codeforstartups.com/javascript-tutorial

<code>Download PPT </code>
https://codeforstartups.com/download-ppt-javascript-tutorial.ppt

<code>Download PDF</code>
https://codeforstartups.com/download-pdf-javascript-tutorial.pdf

<code>View/Download Video</code>
https://codeforstartups.com/youtube-video-javascript-tutorial

# Data Structure and Algorithms Intro for Blockchain Technology 
https://codeforstartups.com/datastructure-and-algorithms-introduction
<code>Download PPT </code>
https://codeforstartups.com/download-ppt-datastructure-and-algorithms-introduction.ppt

<code>Download PDF</code>
https://codeforstartups.com/download-pdf-datastructure-and-algorithms-introduction.pdf

<code>View/Download Video</code>
https://codeforstartups.com/youtube-video-datastructure-and-algorithms-introduction

# What is Cryptocurrency 
https://codeforstartups.com/what-is-crytpocurrency
<code>Download PPT </code>
https://codeforstartups.com/download-ppt-what-is-crytpocurrency.ppt

<code>Download PDF</code>
https://codeforstartups.com/download-pdf-what-is-crytpocurrency.pdf

<code>View/Download Video</code>
https://codeforstartups.com/youtube-video-what-is-crytpocurrency

# What is Blockchain 
https://codeforstartups.com/what-is-blockchain

# Learning Python 
https://codeforstartups.com/learning-python

# Learning Scrapy 
https://codeforstartups.com/learning-scrapy

# Scraping BitcoinWiki 
https://codeforstartups.com/scrapping-bitcoin-wiki

# Building Search Engine with Bitcoin wiki Data 
https://codeforstartups.com/building-search-engine-wiki-data

# Building Simple User Interface for Blockchain with Javascript Peer to peer payment system Web App
https://codeforstartups.com/blockchain-tutorial-simple-web-interface

# What is Peer to Peer Payments 
https://codeforstartups.com/what-is-peer-to-peer-network-and-payment-system
Peer to peer payments 
e.g. Salaries , Transction or Cyrptocurrencies 

# Bitcoin Transaction 
https://codeforstartups.com/what-is-bitcoin-transaction

https://www.npmjs.com/package/bitcoin-transaction

# https://medium.com/@gcwelborn/crafting-a-blockchain-transaction-with-javascript-3946bda1df7b

https://github.com/bitcoinjs/bitcoinjs-lib

# The Testnet
https://codeforstartups.com/what-is-testnet

For demonstration purposes, we’ll be setting our network to testnet. If you want to disregard the following and use real bitcoin, well, that’s an unnecessary risk to take. The bitcoin wiki summarizes it well:

The testnet is an alternative Bitcoin block chain, to be used for testing. Testnet coins are separate and distinct from actual bitcoins, and are never supposed to have any value. This allows application developers or bitcoin testers to experiment, without having to use real bitcoins or worrying about breaking the main bitcoin chain.

When you see the following variable being used, we’re configuring bitcoinjs for testnet use.

<code>const TestNet = Btc.networks.testnet</code>

# Making an Account

If you’re not familiar with the public key cryptography Bitcoin uses, the two keys associated with every account (known as key-pair) can be differentiated as:

# public key: https://en.bitcoin.it/wiki/Address

# private key: https://en.bitcoin.it/wiki/Private_key

<code>
    let keyPair = Btc.ECPair.makeRandom({ network: TestNet })
    let publicKey = keyPair.getAddress()
    let privateKey = keyPair.toWIF()
    console.log(`Public: ${publicKey} \n Private: ${privateKey}`)
</code>

# ECPair

Alright, what’s all this code about? The first unknown you come across is the ECPair. Short for “Elliptic Curve Pair”, it refers to our key-pair, generated with the 
Elliptic Curve Digital Signature Algorithm.
# https://en.bitcoin.it/wiki/Elliptic_Curve_Digital_Signature_Algorithm 
Andreas M. Antonopoulos, in the O’Reilly book “Mastering Bitcoin”, provides a great high level overview on the characteristics of EC Pairs:
 # http://chimera.labs.oreilly.com/books/1234000001802

 “Elliptic curve multiplication is a type of function that cryptographers call a “trap door” function: it is easy to do in one direction (multiplication) and impossible to do in the reverse direction (division). The owner of the private key can easily create the public key and then share it with the world knowing that no one can reverse the function and calculate the private key from the public key. This mathematical trick becomes the basis for unforgeable and secure digital signatures that prove ownership of bitcoin funds.”

# https://en.bitcoin.it/wiki/Wallet_import_format
 Moving on, we used ECPair’s makeRandom to create an account, followed with getAddress and toWIF to access our keys. Address refers to our public key, an address others can send bitcoin to. The ‘WIF’ in toWIF refers to wallet import format, better known as our private key. They output something similar to the following

 <code>
    $ Public: mqVKYrNJcMkdK2QHFNEd1P6Qfc1Sqs3hu1
    $ Private: cTEAh2DsC7KE4mzY5YFTYommzr7czbdiBfLPsXZrF6o3zSQLLw9Q
</code>

# Importing Wallets From a Private Key

If we wanted to regain access to the wallet we just created, we can utilize the fromWIF method. We’ll reuse the private key just generated to check it’s public address hasn’t changed.

<code>
let privKey = 'cTEAh2DsC7KE4mzY5YFTYommzr7czbdiBfLPsXZrF6o3zSQLLw9Q'

let ourWallet = new Btc.ECPair.fromWIF(privKey, TestNet)

console.log("ourWallet public key:", ourWallet.getAddress())

*  *  *  *  *

$ ourWallet public key: mqVKYrNJcMkdK2QHFNEd1P6Qfc1Sqs3hu1
</code>
