require("dotenv").config();
const sdk = require("api")("@opensea/v2.0#4pzkm2xlrva0b3l");
const { Chain } = require("opensea-js");
const OPENSEA_API_KEY = process.env.OPENSEA_API_KEY;

async function update_opensea_metadata(
  chain,
  contract_address,
  start_tokenId,
  end_tokenId
) {
  sdk.auth(OPENSEA_API_KEY);
  sdk.server("https://api.opensea.io");
  for (let i = start_tokenId; i <= end_tokenId; i++) {
    try {
      const result = await sdk.refresh_nft({
        chain: chain,
        address: contract_address,
        identifier: i,
      });
      console.log(result.data);
    } catch (error) {
      console.log(error.data);
    }
  }
}

async function update_opensea_metadata_testnet(
  chain,
  contract_address,
  start_tokenId,
  end_tokenId
) {
  sdk.auth(OPENSEA_API_KEY);
  sdk.server("https://testnets-api.opensea.io");
  for (let i = start_tokenId; i <= end_tokenId; i++) {
    try {
      const result = await sdk.refresh_nft({
        chain: chain,
        address: contract_address,
        identifier: i,
      });
      console.log(result.data);
    } catch (error) {
      console.log(error.data);
    }
  }
}

async function update_okx_metadata(
  contract_address,
  start_tokenId,
  end_tokenId
) {
  for (let i = end_tokenId; i >= start_tokenId; i--) {
    try {
      // 获取当前时间戳
      const timestamp = Date.now();
      let url = "https://www.okx.com/priapi/v1/nft/refresh?t=" + timestamp;
      let bodyData = {
        contractAddress: contract_address,
        tokenId: i,
        looker: "",
        chain: 1,
      };

      let response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bodyData),
      });
      let result = await response.json();
      console.log("state:" + result.data + " tokenId: " + i);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = {
  update_opensea_metadata,
  update_opensea_metadata_testnet,
  update_okx_metadata,
  Chain,
};
