const { update_okx_metadata } = require("./update_metadata");
async function main() {
  await update_okx_metadata(
    "0x1b489201d974d37ddd2faf6756106a7651914a63",
    1,
    6700
  );
}
main();
