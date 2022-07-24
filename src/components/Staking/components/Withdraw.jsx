import { Row, Col, Card, Button, notification } from "antd";
import "../staking.css";
import smartchef from "../../Contract/smartchef.json";
import { useState } from "react";
import { useMoralis } from "react-moralis";
import Reward from "./Reward";
import Account from "../../Account/Account";

function Withdraw() {
  const { Moralis } = useMoralis();
  const [isPending, setIsPending] = useState(false);

  const openNotification = ({ message, description }) => {
    notification.open({
      placement: "topRight",
      message,
      description,
      onClick: () => {
        console.log("Notification Clicked!");
      },
    });
  };

  async function withdraw() {
    let options = {
      contractAddress: "0x73776f95Deb907436d8A852C551D0eBb7480E5c3",
      functionName: "deposit",
      abi: smartchef,
      params: {
        _amount: Moralis.Units.Token(0),
      },
      // msgValue: Moralis.Units.ETH(amount),
    };

    setIsPending(true);
    const txStatus = await Moralis.executeFunction(options);
    const result = await txStatus.wait();

    if (result) {
      console.log(result);
      console.log(result.blockHash);
      openNotification({
        message: "🔊 Withdraw Successful",
        description: `${result.transactionHash}`,
      });
      setIsPending(false);
    }
  }

  const { account, isAuthenticated } = useMoralis();

  if (!account || !isAuthenticated) return <Account />;

  return (
    <>
      <Row>
        <Col lg={10} md={9} sm={24} xs={24}>
          <Reward />
        </Col>
        <Col lg={14} md={15} sm={24} xs={24}>
          <Card className="deposit">
            <h3 style={{ marginBottom: "10px" }}>Harvest</h3>
            <p>Harvest your rewards</p>
            <Button
              type="primary"
              shape="round"
              size="large"
              loading={isPending}
              onClick={() => withdraw()}
            >
              HARVEST
            </Button>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default Withdraw;
