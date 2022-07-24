import { useWeb3ExecuteFunction, useMoralis } from "react-moralis";
import { Statistic, Button } from "antd";
import "./Statistic.css";
import { EyeOutlined } from "@ant-design/icons";
import bswapido from "../../../Contract/bswapido.json";
function Alloc() {
  const { Moralis, account } = useMoralis();
  // const { data } = useMoralisCloudFunction("get_purchasedbswap", {
  //   name: account,
  // });
  const { data, fetch, isFetching } = useWeb3ExecuteFunction({
    abi: bswapido,
    contractAddress: "0xE6C54AF56A360128dc1648b4492303447A926fd7",
    functionName: "purchasedAmounts",
    params: {
      "": account,
    },
  });
  return (
    <>
      <Statistic
        value={(data && (Moralis.Units.Token(data, 8) * 1.82) / 10 ** 16) || 0}
        suffix="BSWAP"
        className="ant-statistic-content"
      />
      <Button
        onClick={() => fetch()}
        type="dashed"
        loading={isFetching}
        shape="round"
        size="small"
        ghost
      >
        <EyeOutlined />
      </Button>
    </>
  );
}
export default Alloc;
