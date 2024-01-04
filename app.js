let url =
  "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd";

let BTC = document.querySelector("#BTC");
let ETH = document.querySelector("#ETH");
let DGC = document.querySelector("#DGC");

async function getData() {
  let data = await axios.get(url);
  console.log(data.data);
  BTC.innerText = `$ ${data.data.bitcoin.usd}`;
  ETH.innerText = `$ ${data.data.ethereum.usd}`;
  DGC.innerText = `$ ${data.data.dogecoin.usd}`;
}
getData();
setInterval(() => {
  getData();
}, 10000);
