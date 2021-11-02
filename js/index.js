var buy_address_abi = [{ "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "Bought", "type": "event" }, { "inputs": [{ "internalType": "address", "name": "_address", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "buyticket", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [], "name": "price", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "token", "outputs": [{ "internalType": "contract IERC20", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }]
var buy_address = "0xA2E3242ebF553F8C8C2acfcdF95109b5D5bc1Eb4";

var token_abi = [{ "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "tokenOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "tokens", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "tokens", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "delegate", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "delegate", "type": "address" }, { "internalType": "uint256", "name": "numTokens", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "tokenOwner", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "receiver", "type": "address" }, { "internalType": "uint256", "name": "numTokens", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "buyer", "type": "address" }, { "internalType": "uint256", "name": "numTokens", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }]
var token_address = "0xf87483f08e7297b2b1460e0aec383cafe50eeb34";

var lottery_abi = [{ "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Reward", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "inputs": [], "name": "boxcount", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "game_status", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "gametime", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "pickabox", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "rewardcontract", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "startthegame", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "ticketcontract", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "tokencontract", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_amount", "type": "uint256" }], "name": "withdraw_reward", "outputs": [], "stateMutability": "nonpayable", "type": "function" }]
var lottery_address = "0xee6f6ca3413edaac6823c26d5d679e5e1b741d75";

var lucky_abi = [{ "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "tokenOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "tokens", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "tokens", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "delegate", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "delegate", "type": "address" }, { "internalType": "uint256", "name": "numTokens", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "tokenOwner", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "receiver", "type": "address" }, { "internalType": "uint256", "name": "numTokens", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "buyer", "type": "address" }, { "internalType": "uint256", "name": "numTokens", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }]
var lucky_address = "0xf87483f08e7297b2b1460e0aec383cafe50eeb34";

var web3;
var ethaddress;

async function availability() {
    var contract = new web3.eth.Contract(buy_address_abi, buy_address);
    contract.methods.balanceOf(buy_address).call().then((d) => {
        $('#availability').html(d);
    })
}

async function box_count() {
    var contract = new web3.eth.Contract(lottery_abi, lottery_address);
    contract.methods.boxcount.call().call().then((d) => {
        $('#boxcount').html(d);
    })
}

async function pickabox() {
    move('progressBar2');
    $('.buttons').hide();
    $('.pb2').show();
    $('#change_me').attr("src", "/srcs/chest.gif");
    var contract = new web3.eth.Contract(lottery_abi, lottery_address);
    contract.methods.pickabox().call()
        .then((d) => {
            console.log(d);
            $('.pb2').hide();
            $('.success').fadeIn();
            $('#won_value').val("0.005");
        });
}

async function allowance() {
    var contract = new web3.eth.Contract(lucky_abi, lucky_address);
    contract.methods.allowance(ethaddress, lucky_address).call(function (error, result) {
        if (result > 0) {
            $(".approve_con").hide();
            $(".buttons").show();
        }
    });
}

async function approve() {
    var contract = new web3.eth.Contract(token_abi, token_address);
    contract.methods.approve(lottery_address, "0xffffffffffffffffffffffffffffffffffff").send({ from: ethaddress }).then((d) => {
        console.log(d)
    })
}

async function game_status() {
    var contract = new web3.eth.Contract(lottery_abi, lottery_address);
    contract.methods.game_status().call().then((d) => {
        if (d == true) {
            $('.part4').hide();
            $('.part5').show();
            $('.reward_box').show();
        }
    })
}

async function buyticket() {
    try {
        var contract = new web3.eth.Contract(buy_address_abi, buy_address);
        contract.methods.price.call().call().then((d) => {
            var price = d / 10 ** 18
            var contract = new web3.eth.Contract(buy_address_abi, buy_address);
            var count = $("#input_field").val();
            if ((count !== 0) || (count !== '')) {
                var cou = (count * Math.pow(10, 18)).toFixedSpecial(0);
                var con = (cou * price).toFixedSpecial();
                web3.eth.getAccounts().then((acc) => {
                    contract.methods
                        .buyticket()
                        .send({ from: acc[0], value: con }, function (err, transactionHash) {
                            if (err) {
                                console.log("Cancelled");
                            } else {
                                alert("Please wait until the transaction is confirmed ");
                            }
                        });
                });
            } else {
                alert("Please enter a value in order to proceed !!!")
            }

        })
    } catch (e) {
        console.log(e);
    }
}

function move(name) {
    var elem = $('#' + name);
    if (elem.length > 0) {
        var width = 0;
        var id = setInterval(frame, 15);
        function frame() {
            if (width >= 100) {
                clearInterval(id);
            } else {
                width++;
                $('#' + name).css({ 'width': width + '%' });
            }
        }
    }
}

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
            ethaddress = acc[0]
            if ($('#wallet_connected').length == 0) {
                location.href = 'buy.html'
            }
            str = acc[0].substring(0, 20) + "...";
            $('.ethaddress').html(str)

            // move('progressBar');
            availability();
            game_status();
            box_count();
            allowance();

        } else {
            $('.ethaddress').html('0x000000000000000000000000000000000000')
            if (!$('.we-re-in-index').length > 0) {
                location.href = 'index.html'
            }
        }
    });
}

$(document).ready(function () {

    web3 = new Web3(
        new Web3.providers.HttpProvider("https://bsc-dataseed1.binance.org:443")
    );

    window.web3 = new Web3(window.ethereum);

    $('#connect_wallet').click(() => {
        connectWeb3();
    })

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
