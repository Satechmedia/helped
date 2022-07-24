import { useMoralisCloudFunction, useMoralis } from "react-moralis";
import { Statistic } from "antd";
function Purchased() {
  const { account, Moralis } = useMoralis();
  const { data } = useMoralisCloudFunction("get_purchased", {
    beneficiary: account,
  });
  return (
    <Statistic
      title="Purchased amount"
      value={(data && Moralis.Units.FromWei(data, 18)) || 0}
      suffix="BRISE"
    />
  );
}
export default Purchased;
