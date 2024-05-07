var Test = artifacts.require("./NeonDrift.sol");
var Migrations = artifacts.require("./Migrations.sol");

module.exports = function(deployer) {
    deployer.deploy(Test);
    deployer.deploy(Migrations);
};
