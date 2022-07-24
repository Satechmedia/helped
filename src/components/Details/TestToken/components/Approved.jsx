import { useMoralisCloudFunction, useMoralis } from "react-moralis";
import { Statistic } from "antd";
function Approved() {
  const { account, Moralis } = useMoralis();
  const { data } = useMoralisCloudFunction("get_approved", {
    beneficiary: account,
  });
  return (
    <>
      <Statistic
        title="Your approved amount"
        value={(data && Moralis.Units.FromWei(data, 18)) || 0}
        suffix="BRISE"
      />
    </>
  );
}
export default Approved;
