const ScamCoin = artifacts.require('ScamCoin.sol')


module.exports = (deployer, network) => {
    deployer.then(async () => {
         await deployer.deploy(ScamCoin);
    })
}