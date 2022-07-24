import { useMoralisCloudFunction, useMoralis } from "react-moralis";
import { Statistic } from "antd";
function Total() {
  const { Moralis } = useMoralis();
  const { data } = useMoralisCloudFunction("get_totalAmount");
  return (
    <>
      <Statistic
        title="Total purchased amount"
        value={(data && Moralis.Units.FromWei(data, 18)) || 0}
        suffix="BRISE"
      />
    </>
  );
}
export default Total;
