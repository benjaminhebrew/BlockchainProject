const { ethers } = require("hardhat");
const path = require("path");

async function main() {
  //STKN

  if (network.name === "hardhat") {
    console.warn(
      "You are trying to deploy a contract to the Hardhat Network, which" +
        "gets automatically created and destroyed every time. Use the Hardhat" +
        " option '--network localhost'"
    );
  }

  const [deployer] = await ethers.getSigners();
  console.log(
    "Deploying the contracts with the account:",
    await deployer.getAddress()
  );

  console.log("Account balance:", (await deployer.getBalance()).toString());

  console.log("Deploying STKN Contract...");
  const STKNFactory = await ethers.getContractFactory("ICO_Token_Contract");
  const stkn = await STKNFactory.deploy();
  await stkn.deployed();
  console.log("Deployed STKN:", stkn.address);
  saveFrontendFiles(stkn);

  //STKNICO
  console.log("Deploying stknICO Contract...");
  const StknICOFactory = await ethers.getContractFactory("ICO_Contract");
  const stknICO = await StknICOFactory.deploy(
    "0x00f2a05f8327ac26e1994b92dbd4e4813bfa8609",
    stkn.address
  );

  console.log("Deployed stknICO:", stknICO.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });

function saveFrontendFiles(token) {
  const fs = require("fs");
  const contractsDir = path.join(__dirname, "..", "frontend", "src", "contracts");

  if (!fs.existsSync(contractsDir)) {
    fs.mkdirSync(contractsDir);
  }

  fs.writeFileSync(
    path.join(contractsDir, "contract-address.json"),
    JSON.stringify({ Token: token.address }, undefined, 2)
  );

  const TokenArtifact = artifacts.readArtifactSync("ICO_Contract");

  fs.writeFileSync(
    path.join(contractsDir, "Token.json"),
    JSON.stringify(TokenArtifact, null, 2)
  );
}
