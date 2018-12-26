let Web3 = require('web3');

App = {
    web3Provider: null,
    web3: null,
    contracts: {},
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
        console.log("here");
        $.getJSON('../build/CertificateFactory.json', function(data) {

            console.log(data);
            // Get the necessary contract artifact file and instantiate it with truffle-contract
            let CertificateArtifact = data;
            this.contracts.CertificateFactory = TruffleContract(CertificateArtifact);

            // Set the provider for our contract
            this.contracts.CertificateFactory.setProvider(this.web3Provider);
        });
        
        return this.bindEvents();
    },

    bindEvents: function() {
        // $(document).on('click', '.btn-adopt', this.handleAdopt);
    },
};

App.initWeb3();
