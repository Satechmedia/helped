import { useMoralisCloudFunction, useMoralis } from "react-moralis";
import { Statistic } from "antd";
function Claimed() {
  const { account, Moralis } = useMoralis();
  const { data } = useMoralisCloudFunction("get_claimed", {
    name: account,
  });
  return (
    <Statistic value={data && Moralis.Units.FromWei(data, 15)} suffix="TST" />
  );
}
export default Claimed;
