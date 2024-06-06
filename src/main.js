const {
  update_opensea_metadata,
  Chain,
  update_opensea_metadata_testnet,
} = require("./update_metadata");

async function main() {
  const start_tokenId = 714;
  const end_tokenId = 714;
  await update_opensea_metadata(
    Chain.Mainnet,
    "0x1b489201D974D37DDd2FaF6756106a7651914A63",
    start_tokenId,
    end_tokenId
  );

  await update_opensea_metadata_testnet(
    Chain.Sepolia,
    "0x709b78b36b7208f668a3823c1d1992c0805e4f4d",
    start_tokenId,
    end_tokenId
  );
}

main();
