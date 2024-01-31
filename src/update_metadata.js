require("dotenv").config();
const sdk = require("api")("@opensea/v2.0#4pzkm2xlrva0b3l");
const OPENSEA_API_KEY = process.env.OPENSEA_API_KEY;

async function update_metadata(contract_address, start_tokenId, end_tokenId) {
  sdk.auth(OPENSEA_API_KEY);
  sdk.server("https://api.opensea.io");
  for (let i = start_tokenId; i <= end_tokenId; i++) {
    try {
      const result = await sdk.refresh_nft({
        chain: "ethereum",
        address: contract_address,
        identifier: i,
      });
      console.log(result.data);
    } catch (error) {
      console.log(error.data);
    }
  }
}
module.exports = { update_metadata };
