import { useMoralisCloudFunction, useMoralis } from "react-moralis";
import { Statistic } from "antd";
function TotalProgress() {
  const { Moralis } = useMoralis();
  const { data } = useMoralisCloudFunction("get_totalpurchasedbswap");

  return (
    <>
      <Statistic value={data && Moralis.Units.Token(data, 8) / 10 ** 16} />
    </>
  );
}
export default TotalProgress;
