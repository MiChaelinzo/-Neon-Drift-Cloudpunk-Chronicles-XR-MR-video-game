var Test = artifacts.require("./neondrift.sol");
var Migrations = artifacts.require("./neondrift.sol");

module.exports = function(deployer) {
    deployer.deploy(Test);
    deployer.deploy(Migrations);
};
