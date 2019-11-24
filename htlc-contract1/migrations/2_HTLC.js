const HTLC = artifacts.require('HTLC.sol')


module.exports = (deployer, network) => {
    deployer.then(async () => {
         await deployer.deploy(HTLC);
    })
}