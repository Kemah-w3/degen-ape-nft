require("@nomicfoundation/hardhat-toolbox")
const { ethers } = require("hardhat")

async function main() {
  const BAMContractFactory = await ethers.getContractFactory("BAM")
  const BAM = await BAMContractFactory.deploy()
  await BAM.deployed()

  console.log("BAM contract address successfully deployed to: ", BAM.address)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })