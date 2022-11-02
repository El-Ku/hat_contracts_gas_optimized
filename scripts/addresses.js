module.exports = {
  mainnet: {
    governance: "0xBA5Ddb6Af728F01E91D77D12073548D823f6D1ef",
    hatVaultsAddress: "0x571f39d351513146248AcafA9D0509319A327C4D",
    executors: [
      "0x2B6656e212f315D3C2DD477FE7EBFb3A86bb1c94",
      "0x9Fb3d86157a9e2dC2a771C297f88FA9784fa4e31",
      "0xF6aEF099e4473E08bed75E0BB1252C4cdAd96416",
      "0xb3E7828EC7Ce2B270E3008B6400597C3a203809e",
      "0xd714Dd60e22BbB1cbAFD0e40dE5Cfa7bBDD3F3C8",
    ],
    timelock: "0xFd4255F16378306CA83E37015Df01a1700DAc296",
  },
  rinkeby: {
    governance: "0xd6eC2F1D35C4a21D3a25E95CC40D67b4D0af995E",
    hatVaultsAddress: "0x59D4316A4691ceB657347dc7b0849e0CB38ed106",
    timelock: "0xe8FF8B05961ECBAc067A9f5abDD4E7103aD75D40",
    executors: ["0x2bc1fed4c65c9b1dc2baaff2f3198acc42c41778"],
  },
  hardhat: {
    hatVaultsAddress: "0x7c2C195CD6D34B8F845992d380aADB2730bB9C6F",
  },
};
