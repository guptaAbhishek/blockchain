(function(){
    
    'use strict';

    var express = require("express");

    var app = express();

    app.set('PORT',process.env.PORT || 8081);
    
    var bitcoinTransaction = require('bitcoin-transaction');

    //Send all my money from wallet1 to wallet2 on the bitcoin testnet
    var from = "mm3gdVh8n6YtcNyaTKYkveB6yTME7aDWNJ";
    var to = "mgPUfqJk4X6gE4P5Do5RfpkTFsYmsSjCya";
    var privKeyWIF = "cNZi8iySqBToXMpcsQaHKD5uv7HExBQJBSi4dTg3ZPaEzeNAzvbj";	//Private key in WIF form (Can generate this from bitcoinlib-js)


    app.get('/getBalance',function(req,res){
        bitcoinTransaction.getBalance(from, { network: "testnet" }).then((balanceInBTC) => {
            var response = bitcoinTransaction.sendTransaction({
                from: from,
                to: to,
                privKeyWIF: privKeyWIF,
                btc: balanceInBTC,
                network: "testnet"
            });

            res.send(response);
        });
    });


    app.listen(app.get('PORT'),function(){
        console.log('All magic happens at port '+app.get('PORT'));
    });

    


})();