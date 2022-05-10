require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.4',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/65-F8ixv_VhCd1fjVxq87HUao44p40Qn',
      accounts: [
        'ac98e3c6ff2bf62ab782e56df66f7f171f2ed2ba90c3cfe4cd79aab9b506a4c6',
      ],
    },
  },
}