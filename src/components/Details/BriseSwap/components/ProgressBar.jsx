import { useMoralisCloudFunction } from "react-moralis";
import { Progress, Statistic } from "antd";
import TotalProgress from "./TotalProgress";
import "../../Details.css";
function ProgressBar() {
  // const { Moralis } = useMoralis();
  const { data } = useMoralisCloudFunction("get_totalpurchasedbswap");

  return (
    <>
      <Progress
        strokeColor={{
          from: "#20D4B9",
          to: "#8209EA",
        }}
        percent={(data && Math.floor((data / 5500000000000000) * 100)) || 0}
        showInfo={true}
        // status="exception"
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
        <Statistic value={55000000} />
      </div>
    </>
  );
}
export default ProgressBar;
