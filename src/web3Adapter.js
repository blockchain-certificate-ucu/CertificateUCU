let Web3 = require('web3');
let web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

console.log(web3.eth.accounts);
web3.eth.defaultAccount = web3.eth.accounts[0];

let abi = [
    {
        "constant": true,
        "inputs": [],
        "name": "getCertificates",
        "outputs": [
            {
                "name": "",
                "type": "address[]"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "title",
                "type": "string"
            },
            {
                "name": "id",
                "type": "uint256"
            },
            {
                "name": "userId",
                "type": "address"
            },
            {
                "name": "username",
                "type": "string"
            },
            {
                "name": "date",
                "type": "string"
            }
        ],
        "name": "createCertificate",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "CertificateArray",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "address"
            },
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "CertificateList",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "name": "certificateAddress",
                "type": "address"
            }
        ],
        "name": "CertificateCreated",
        "type": "event"
    }
];

let CertificateFactory = web3.eth.contract(abi).at('0xde1cf680cfc36d7bd42125779ffb4359d564d164');
console.log(CertificateFactory);
try {
    CertificateFactory.createCertificate("title", 21, '0x710a8b379bc057a6572ca9db5313b34e92060718', 'cas', 'das');
} catch (e) {
    console.log(e.toString());
}

