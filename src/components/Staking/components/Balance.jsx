import { Statistic } from "antd";
import "../staking.css";
import { useMoralisCloudFunction, useMoralis } from "react-moralis";

function Balance() {
  const { account, Moralis } = useMoralis();

  const { data } = useMoralisCloudFunction("get_balance", {
    account: account,
  });

  return (
    <Statistic
      title="CKT Balance"
      value={data && Math.floor(Moralis.Units.FromWei(data, 8))}
      suffix="CKT"
    />
  );
}

export default Balance;
