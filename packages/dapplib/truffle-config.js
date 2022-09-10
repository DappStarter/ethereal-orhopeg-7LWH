require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace person bone tooth figure render remember unusual half knee bone solve'; 
let testAccounts = [
"0xec286b97583ea0a746a1d50cfd7bf0eb66c91360d6ef9b2be3cf8a5805a96dce",
"0xf5bc77ff0e719344f766b2e8f7d320a162161755be0b84f51d3d16628e91fac8",
"0xbcfbd4024244bb5858e783c30ed482a8920a1f41377194516df76f0e234868a0",
"0xb2a9b05d395a20a3b2cc9bc46e46f5b5d2ffcf0ebe8d64e94774df5c08d9ea8a",
"0x00f7e3d9537cad3dd9ed7bf5cbe9a7c70a31cf736c5aa6ffbfa021e835b6da3f",
"0xe502e5a1d708e339cba99017085bcd965d085296c7817c6e5c1fc0274236f2fd",
"0x78ac25a050251d5cea6ed2a8a020b9020e1d634b6505a2ed0b9980c05e7d2e4b",
"0x1dbf731c4568b45bc28d2c20e4d8fd95c5e8badf2b28920efe566e90de1cb136",
"0x7b946147c4f1dd31c266d3ce7c206a03d93fa529f3f7ea35069d8265ec56fe0f",
"0xafc0f190063772e84efc08d37045ccebfb1ab960c5cb35b84470e318a7973b5e"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

