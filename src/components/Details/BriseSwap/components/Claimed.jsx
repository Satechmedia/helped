import { useMoralisCloudFunction, useMoralis } from "react-moralis";
import { Statistic } from "antd";
function Claimed() {
  const { account, Moralis } = useMoralis();
  const { data } = useMoralisCloudFunction("get_claimedbswap", {
    name: account,
  });
  return (
    <Statistic
      value={(data && (Moralis.Units.Token(data, 8) * 1.82) / 10 ** 16) || 0}
      suffix="BSWAP"
    />
  );
}
export default Claimed;
