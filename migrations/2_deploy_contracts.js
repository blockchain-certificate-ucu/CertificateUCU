let Certificate = artifacts.require("Certificate");
let CertificateFactory = artifacts.require("CertificateFactory");

module.exports = function(deployer) {
    // deployer.deploy(Certificate);
    deployer.deploy(CertificateFactory);
};