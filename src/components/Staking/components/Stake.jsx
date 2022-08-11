import { Row, Col, Statistic, Card, Input, Button, notification } from "antd";
import "../staking.css";
import smartchef from "../../Contract/smartchef.json";
import bpad from "../../Contract/bpad.json";
import { useEffect, useState } from "react";
import {
  useMoralis,
  useMoralisCloudFunction,
  useWeb3ExecuteFunction,
} from "react-moralis";
import Reward from "./Reward";
import Account from "../../Account/Account";
import Balance from "./Balance";

function Stake() {
  const { Moralis } = useMoralis();
  const [tx, setTx] = useState();
  const [amount, setAmount] = useState();
  const [isPending1, setIsPending1] = useState(false);

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

  const openNotification = ({ message, description }) => {
    notification.success({
      placement: "topRight",
      message,
      description,
      style: {
        color: "rgba(0, 0, 0, 0.65)",
        border: "1px solid #b7eb8f",
        backgroundColor: "#f6ffed",
      },
      onClick: () => {
        console.log("Notification Clicked!");
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
    functionName: "deposit",
    params: {
      _amount: amount * 100000000,
    },
  });
  const fetchAndNotify = async () => {
    await fetch({
      onSuccess: (tx) =>
        tx.wait().then((finalTx) => {
          successNotification({
            description: `Staked Successfully`,
          });
          console.log(finalTx);
        }),

      onError: (error) =>
        errorNotification({
          description: `${error.data.message}`,
        }),
    });
  };
  async function approve() {
    let options = {
      contractAddress: "0x71946a5C9dA7C95ee804a9BE561EC15A3F286A7D",
      functionName: "approve",
      abi: bpad,
      params: {
        amount: Moralis.Units.Token(1000000000000000, 8),
        spender: "0x73776f95Deb907436d8A852C551D0eBb7480E5c3",
      },
    };

    setIsPending1(true);
    const txStatus = await Moralis.executeFunction(options);
    const result = await txStatus.wait();

    if (result) {
      console.log(result);
      console.log(result.blockHash);
      openNotification({
        message: "Approved Successful",
        description: `${result.transactionHash}`,
      });
      setIsPending1(false);
    }
  }
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
        <Col lg={6} md={6} sm={24} xs={24}>
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
            <p>AMOUNT TO STAKE</p>
            <Input
              onChange={(e) => {
                setAmount(`${e.target.value}`);
              }}
            />
            <Button
              type="primary"
              shape="round"
              size="large"
              loading={isPending1}
              onClick={() => approve()}
            >
              APPROVE
            </Button>
            <Button
              type="primary"
              shape="round"
              size="large"
              loading={isFetching}
              onClick={() => fetchAndNotify()}
              disabled={!tx}
            >
              STAKE
            </Button>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default Stake;
