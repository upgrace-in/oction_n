var buy_address_abi = [{ "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "Bought", "type": "event" }, { "inputs": [{ "internalType": "address", "name": "_address", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "buyticket", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [], "name": "price", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "token", "outputs": [{ "internalType": "contract IERC20", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }]
var buy_address = "0xa2fb4065099b91368aBa8591341b9Ee8417D60Dc";

var token_abi = [{ "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "tokenOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "tokens", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "tokens", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "delegate", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "delegate", "type": "address" }, { "internalType": "uint256", "name": "numTokens", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "tokenOwner", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "receiver", "type": "address" }, { "internalType": "uint256", "name": "numTokens", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "buyer", "type": "address" }, { "internalType": "uint256", "name": "numTokens", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }]
var token_address = "0xa2fb4065099b91368aBa8591341b9Ee8417D60Dc";

var lottery_abi = [{ "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Reward", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "inputs": [], "name": "boxcount", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "game_status", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "gametime", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "pickabox", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "rewardcontract", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "startthegame", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "ticketcontract", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "tokencontract", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_amount", "type": "uint256" }], "name": "withdraw_reward", "outputs": [], "stateMutability": "nonpayable", "type": "function" }]
var lottery_address = "0x3035C022142CDb133955a62e983480b106EEDF83";

var web3;

async function availability() {
    var contract = new web3.eth.Contract(buy_address_abi, buy_address);
    web3.eth.getAccounts().then((acc) => {
        contract.methods.balanceOf(acc[0]).call().then((d) => {
            console.log(d);
        })
    });
}

async function mint() {
    try {
        var contract = new web3.eth.Contract(abi, address);
        var count = $("#nos_of_mint").val();
        var cou = (count * Math.pow(10, 18)).toFixedSpecial(0);
        var con = (cou * 0.05).toFixedSpecial();
        web3.eth.getAccounts().then((acc) => {
            contract.methods
                .mint(String(con))
                .send({ from: acc[0], value: con }, function (err, transactionHash) {
                    if (err) {
                        console.log("Cancelled");
                    } else {
                        alert("Please wait until the transaction is confirmed ");
                    }
                });
        });
    } catch (e) {
        console.log(e);
    }
}



async function totalSupply() {
    var contract = new web3.eth.Contract(abi, address);
    contract.methods
        .totalSupply()
        .call().then((res) => {
            $('#totalSupply').html(res);
        })
}

$(document).ready(function () {

    function move() {
        var elem = document.getElementById("progressBar");
        var width = 1;
        var id = setInterval(frame, 10);
        function frame() {
            if (width >= 100) {
                clearInterval(id);
            } else {
                width++;
                elem.style.width = width + '%';
            }
        }
    }
    move();

    web3 = new Web3(
        new Web3.providers.HttpProvider("https://bsc-dataseed1.binance.org:443")
    );

    window.web3 = new Web3(window.ethereum);

    $('#connect_wallet').click(() => {
        connectWeb3();
    })

    async function connectWeb3() {
        if (window.ethereum) {
            conn = await window.ethereum.enable();
            if (conn.length > 0) {
                location.href = 'buy.html'
            }
            return true;
        }
    }


    function change_place() {
        web3.eth.getAccounts().then(function (acc) {
            if (acc[0]) {
                if ($('#wallet_connected').length == 0) {
                    location.href = 'buy.html'
                }
                str = acc[0].substring(0, 20) + "...";
                $('.ethaddress').html(str)

                availability();
            } else {
                $('.ethaddress').html('0x000000000000000000000000000000000000')

            }
        });
    }

    change_place()

});

Number.prototype.toFixedSpecial = function (n) {
    var str = this.toFixed(n);
    if (str.indexOf("e+") === -1) return str;

    // if number is in scientific notation, pick (b)ase and (p)ower
    str = str
        .replace(".", "")
        .split("e+")
        .reduce(function (p, b) {
            return p + Array(b - p.length + 2).join(0);
        });

    if (n > 0) str += "." + Array(n + 1).join(0);

    return str;
};
