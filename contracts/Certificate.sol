pragma solidity ^0.5.0;

contract Certificate {
    struct User {
        address id;
        string fullname;
    }
    
    string public title;
    uint public id;
    User public recepient;
    string public date;
    address public givenBy;
    
    constructor(string memory _title, uint _id, address userId, string memory username, string memory _date) public {
        title = _title;
        id = _id;
        recepient = User(userId, username);
        date = _date;
        givenBy = msg.sender;
    }
}

contract CertificateFactory {
    event CertificateCreated(Certificate certificateAddress);
    
    mapping(address => Certificate[]) public certificateList;
    Certificate[] public certificateArray;
    
    function createCertificate(string memory title, uint id, address userId, string memory username, string memory date) public {
        Certificate newCertificate = new Certificate(title, id, userId, username, date);
        emit CertificateCreated(newCertificate);
        certificateList[userId].push(newCertificate);
        certificateArray.push(newCertificate);
    }
    
    function getCertificates() public view returns (Certificate[] memory) {
        return certificateArray;
    }
}