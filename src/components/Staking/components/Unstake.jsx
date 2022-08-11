import { Row, Col, Statistic, Card, Input, Button, notification } from "antd";
import "../staking.css";
import smartchef from "../../Contract/smartchef.json";
import { useEffect, useState } from "react";
import {
  useMoralis,
  useMoralisCloudFunction,
  useWeb3ExecuteFunction,
} from "react-moralis";
import Reward from "./Reward";
import Account from "../../Account/Account";
import Balance from "./Balance";

function Unstake() {
  const { Moralis } = useMoralis();
  const [tx, setTx] = useState();
  const [amount, setAmount] = useState();

  useEffect(() => {
    amount ? setTx({ amount }) : setTx();
  }, [amount]);

  const successNotification = ({ message, description }) => {
    notification.success({
      placement: "topRight",
      message,
      description,
      style: {
        color: "rgba(0, 0, 0, 0.65)",
        border: "1px solid #b7eb8f",
        backgroundColor: "#f6ffed",
      },
    });
  };
  const errorNotification = ({ message, description }) => {
    notification.error({
      placement: "topRight",
      message,
      description,
      style: {
        color: "rgba(0, 0, 0, 0.65)",
        border: "1px solid #ffa39e",
        backgroundColor: "#fff1f0",
      },
    });
  };
  const { account, isAuthenticated } = useMoralis();

  const { data } = useMoralisCloudFunction("get_totalstaked", {
    name: account,
  });

  const { fetch, isFetching } = useWeb3ExecuteFunction({
    abi: smartchef,
    contractAddress: "0x73776f95Deb907436d8A852C551D0eBb7480E5c3",
    functionName: "withdraw",
    params: {
      _amount: amount * 100000000,
    },
  });
  const fetchAndNotify = async () => {
    await fetch({
      onSuccess: (tx) =>
        tx.wait().then((finalTx) => {
          successNotification({
            description: `Unstaked Successfully`,
          });
          console.log(finalTx);
        }),
      onError: (error) =>
        errorNotification({
          description: `${error.data.message}`,
        }),
    });
  };
  if (!account || !isAuthenticated) return <Account />;

  return (
    <>
      <Row>
        <Col lg={9} md={9} sm={24} xs={24}>
          <Card className="info">
            <Balance />
          </Card>
        </Col>
        <Col lg={9} md={9} sm={24} xs={24}>
          <Card className="info">
            <Statistic
              title="Total CKT Staked"
              value={data && Moralis.Units.FromWei(data[0], 8)}
              suffix="CKT"
            />
          </Card>
        </Col>
        <Col lg={6} md={9} sm={24} xs={24}>
          <Card className="info">
            <Statistic title="APY" value={15} suffix="%" />
          </Card>
        </Col>
      </Row>
      <Row>
        <Col lg={9} md={9} sm={24} xs={24}>
          <Reward />
        </Col>
        <Col lg={15} md={15} sm={24} xs={24}>
          <Card className="deposit">
            <p>AMOUNT TO WITHDRAW</p>
            <Input
              onChange={(e) => {
                setAmount(`${e.target.value}`);
              }}
            />
            <Button
              type="primary"
              shape="round"
              size="large"
              onClick={() => fetchAndNotify()}
              loading={isFetching}
              disabled={!tx}
            >
              WITHDRAW
            </Button>
          </Card>
        </Col>
      </Row>
    </>
  );
}
export default Unstake;
