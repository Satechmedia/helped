// import { useMoralisCloudFunction, useMoralis } from "react-moralis";
import { useWeb3ExecuteFunction, useMoralis } from "react-moralis";
import { Statistic, Button } from "antd";
import { EyeOutlined } from "@ant-design/icons";
import bswapido from "../../../Contract/bswapido.json";
function Approved() {
  const { Moralis } = useMoralis();
  // const { data } = useMoralisCloudFunction("get_approvedbswap");
  const { data, fetch, isFetching } = useWeb3ExecuteFunction({
    abi: bswapido,
    contractAddress: "0xE6C54AF56A360128dc1648b4492303447A926fd7",
    functionName: "purchaseCap",
  });

  return (
    <>
      <Statistic
        title="Your approved amount"
        value={(data && Moralis.Units.Token(data, 8) / 10 ** 16) || 0}
        suffix="BPAD"
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
export default Approved;
