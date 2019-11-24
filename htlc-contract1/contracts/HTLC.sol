pragma solidity ^0.5.0;

contract HTLC {


    bytes32 public hash;
    address public myAddressInOtherChain;
    address public traderAddress;
    bytes32 public test;

    constructor(bytes32 _hash, address _myAddressInOtherChain, address _traderAddress) public {
        hash = _hash;
        traderAddress = _traderAddress;
        myAddressInOtherChain = _myAddressInOtherChain;
    }

    function unlock(string memory _preImage) public {
        require(keccak256(abi.encode(_preImage)) == hash, 'incoreect preImage');
        msg.sender.transfer(address(this).balance);
    }

    function encryptTest(string memory _preImage) public returns(bytes32){
         test = keccak256(abi.encode(_preImage));
    }

}