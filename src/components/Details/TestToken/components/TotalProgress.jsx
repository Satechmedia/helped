import { useMoralisCloudFunction, useMoralis } from "react-moralis";
import { Statistic } from "antd";
function TotalProgress() {
  const { Moralis } = useMoralis();
  const { data } = useMoralisCloudFunction("get_totalAmount");

  return (
    <>
      <Statistic value={data && Moralis.Units.FromWei(data, 18)} />
    </>
  );
}
export default TotalProgress;
