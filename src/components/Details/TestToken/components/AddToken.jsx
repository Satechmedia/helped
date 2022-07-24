import { Button } from "antd";

function AddToken() {
  async function addTokenToWallet() {
    const tokenAddress = "0x79dCA2e16a05C2e8cBf5f2287E370fC152f8BCf8";
    const tokenSymbol = "TST";
    const tokenDecimals = 16;

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
