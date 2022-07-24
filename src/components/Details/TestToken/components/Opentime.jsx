import { useMoralisCloudFunction } from "react-moralis";
import { Statistic } from "antd";
function Open() {
  const { data } = useMoralisCloudFunction("get_opentime");
  let unix_timestamp = data;
  var date = new Date(unix_timestamp * 1000);
  var years = date.getFullYear();
  var months = date.getMonth();
  var days = date.getDate();
  var hours = date.getHours();
  var minutes = "0" + date.getMinutes();
  var seconds = "0" + date.getSeconds();
  var formattedTime =
    years +
    "-" +
    months +
    "-" +
    days +
    " " +
    hours +
    ":" +
    minutes.substr(-2) +
    ":" +
    seconds.substr(-2) +
    " UTC";

  console.log(formattedTime);
  return (
    <>
      <Statistic value={formattedTime} />
    </>
  );
}
export default Open;
