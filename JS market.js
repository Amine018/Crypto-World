var btc = document.getElementById("Bitcoin")
var eth = document.getElementById("Ethereum")
var doge = document.getElementById("Doge")
var shiba = document.getElementById("Shiba")
var sol = document.getElementById("Solana")


var settings ={
    "async": true,
    "scrossDomain": true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin%2Cshiba-inu%2Csolana&vs_currencies=usd",
    "method": "GET",
    "headers": {}
}
$.ajax(settings).done(function(response){
    btc.innerHTML = response.bitcoin.usd;
    eth.innerHTML = response.ethereum.usd;
    doge.innerHTML = response.dogecoin.usd;
    shiba.innerHTML = response.shiba-inu.usd;
    sol.innerHTML = response.solana.usd;
    console.log(response);
});