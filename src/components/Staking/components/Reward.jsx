import { Statistic, Card } from "antd";
import "../staking.css";
import { useMoralisCloudFunction, useMoralis } from "react-moralis";

function Reward() {
  const { account, Moralis } = useMoralis();

  const { data } = useMoralisCloudFunction("get_rewards", {
    _user: account,
  });

  return (
    <Card className="rewards">
      <Statistic
        title="Your Estimated Rewards"
        value={(
          (data && Math.floor(Moralis.Units.FromWei(data, 8)) / 10000000000) ||
          0
        ).toFixed(3)}
        suffix="BRISE"
      />
    </Card>
  );
}

export default Reward;
