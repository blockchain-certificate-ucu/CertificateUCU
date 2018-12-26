pragma solidity ^0.5.0;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/Certificate.sol";

contract TestCertificate {
    string title = "title";
    uint id = 111;
    string date = "today"; 
    string name = "Name";
    address userId = 0x3dc4ca1f95498ca4ff4d891636c26fe8394f734b;

    function testCertificateCreation() public {
        CertificateFactory certificateFactory = CertificateFactory();
        certificateFactory.createCertificate(title, id, userId, name, date);

        Certificate certificate = certificateFactory.certificateArray[0];

        Assert.equel(certificate.title, title, "Title assert");
        Assert.equel(certificate.id, id, "id assert");
        Assert.equel(certificate.date, date, "date assert");
        Assert.equel(certificate.userId, userId, "userId assert");
        Assert.equel(certificate.name, name, "username assert");
    }
}