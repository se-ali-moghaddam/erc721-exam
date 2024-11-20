const { buildModule } = require('@nomicfoundation/hardhat-ignition/modules');

module.exports = buildModule('MyNFTModule', m => {
    const MyNFTModule = m.contract('MyNFT', [
        '0x21c362525326B3Fcb8E30a5966cb1e09C09BaDC9',
        '0x21c362525326B3Fcb8E30a5966cb1e09C09BaDC9',
        '0x21c362525326B3Fcb8E30a5966cb1e09C09BaDC9'
    ]);

    return { MyNFTModule };
});