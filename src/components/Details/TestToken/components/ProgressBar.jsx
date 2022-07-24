import { useMoralisCloudFunction, useMoralis } from "react-moralis";
import { Progress, Statistic } from "antd";
import TotalProgress from "./TotalProgress";
import "../../Details.css";
function ProgressBar() {
  const { Moralis } = useMoralis();
  const { data } = useMoralisCloudFunction("get_totalAmount");

  return (
    <>
      <Progress
        strokeColor={{
          from: "#20D4B9",
          to: "#8209EA",
        }}
        // percent={Math.floor((data / 100000) * 100)}
        percent={(data && Moralis.Units.FromWei(data, 18) / 50000) * 100}
        showInfo={false}
        status="active"
      />
      <div
        style={{
          color: "#ffffff",
          textAlign: "right",
          display: "flex",
        }}
      >
        <TotalProgress />
        <Statistic value={"/"} />
        <Statistic value={50000} />
      </div>
    </>
  );
}
export default ProgressBar;
