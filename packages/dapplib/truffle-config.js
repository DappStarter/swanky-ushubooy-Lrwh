require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict roast fortune street name rival soap attitude give kiwi tattoo gift'; 
let testAccounts = [
"0xb84c05d06d8090c01e0f67cbed6351d5d15dc3dda76aaaba52980c50d36121fa",
"0xe9c1827a52d418dda92ce07c3c1b50c07fa7d9ded68994252528b09c3e89cbf7",
"0x71ddd819f3f137128041c43b840940db7925f9dc476e9983e17b380ef746535f",
"0x982e8868065e2dba801f339146d1fe7431aff1b83a5ba05af02a3bd9e9034cf4",
"0x7760b37816bbbf80b88b41185186cf1891653c2279f03f5e570d6a990ee3b43b",
"0x286367e46a40afdf9b6675a647f46e7d8be973bf58cff4894c3b71fcc6d30b50",
"0xcba3a2c2623064eb5eabd6d6337357090798f7a6bc8d5c13495c4d206261d7e3",
"0x232b64ab6f7a9df3035e7b3c8ae671fd4f7f677dd01f454a96b15796f2dc8228",
"0x80bbde56007be81a7cfc107bfacdc464071b24390914c488562b3aef734920a3",
"0x4d501f9a8deae8c5f16fb8a29e88d91c916ce803a5b344dc9bd8d0e584791e25"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


