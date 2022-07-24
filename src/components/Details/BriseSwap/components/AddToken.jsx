import { Button } from "antd";

function AddToken() {
  async function addTokenToWallet() {
    const tokenAddress = "0xF26006408112be347c23FDBa03F7bC3566519655";
    const tokenSymbol = "BSWAP";
    const tokenDecimals = 18;

    try {
      await window.ethereum.request({
        method: "wallet_watchAsset",
        params: {
          type: "ERC20",
          options: {
            address: tokenAddress,
            symbol: tokenSymbol,
            decimals: tokenDecimals,
          },
        },
      });
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Button type="primary" shape="round" onClick={() => addTokenToWallet()}>
      Add to Metamask
    </Button>
  );
}

export default AddToken;
