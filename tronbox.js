module.exports = {
    networks: {
        development: {
            from: 'some address',
            privateKey: 'some private key',
            consume_user_resource_percent: 30,
            fee_limit: 100000000,
            fullNode: "https://api.trongrid.io",
            solidityNode: "https://api.trongrid.io",
            eventServer: "optional",
            network_id: "*"
        },
        // Add other network configurations as needed
    }
};
