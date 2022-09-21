require("@nomicfoundation/hardhat-toolbox")
require("dotenv").config({ path: ".env" })

const ALCHEMY_KEY = process.env.ALCHEMY_API_KEY
const ETHERSCAN_API = process.env.ETHERSCAN_API_KEY
const PRIVATE_KEY = process.env.PRIVATE_KEY

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    rinkeby: {
      url: ALCHEMY_KEY,
      accounts: [PRIVATE_KEY]
    }
  },
  etherscan: {
    apiKey: ETHERSCAN_API
  }
}
