import { useMoralisCloudFunction, useMoralis } from "react-moralis";
import { Statistic } from "antd";
import "./Statistic.css";
function Alloc() {
  const { account, Moralis } = useMoralis();
  const { data } = useMoralisCloudFunction("get_allocation", {
    account: account,
  });
  return (
    <Statistic
      value={data && Moralis.Units.FromWei(data, 16)}
      suffix="TST"
      className="ant-statistic-content"
    />
  );
}
export default Alloc;
