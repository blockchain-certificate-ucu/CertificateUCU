// let contract = require("truffle-contract");

App = {
    web3Provider: null,
    web3: null,
    contract: null,
    initWeb3: async function() {
        // Modern dapp browsers...
        console.log(window.ethereum);
        if (window.ethereum) {
            this.web3Provider = window.ethereum;
            try {
                  // Request account access
                await window.ethereum.enable();
            } catch (error) {
                // User denied account access...
                console.error("User denied account access")
            }
        }
        // Legacy dapp browsers...
        else if (window.web3) {
            this.web3Provider = window.web3.currentProvider;
        }
        // If no injected web3 instance is detected, fall back to Ganache
        else {
            this.web3Provider = new Web3.providers.HttpProvider("http://localhost:8545");
            console.log(this.web3Provider);
        }
        this.web3 = new Web3(this.web3Provider);
        console.log(this.web3);
        return this.initContract();
    },

    initContract: function() {
        $.getJSON('../build/contracts/CertificateFactory.json', function(data) {
            this.web3Provider = new Web3.providers.HttpProvider("http://localhost:8545"); // ???
            console.log(data);
            // Get the necessary contract artifact file and instantiate it with truffle-contract
            // let CertificateArtifact = data;
            // this.contracts.CertificateFactory = TruffleContract(CertificateArtifact);

            // Set the provider for our contract
            console.log(this.web3Provider);
            this.contract = TruffleContract(data).setProvider(this.web3Provider);
            // this.contract.setProvider(this.web3Provider);
            let Factory;
            this.contract.deployed().then(function(instance) {
                Factory = instance;
                console.log(Factory);
            });
        });
        
        return this.getInstance();
    },

    bindEvents: function() {
        // $(document).on('click', '.btn-adopt', this.handleAdopt);
    },
};

App.initWeb3();
