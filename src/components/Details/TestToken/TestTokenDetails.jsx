/* eslint-disable jsx-a11y/anchor-is-valid */
import {
    Row,
    Col,
    Avatar,
    Tabs,
    Button,
    Modal,
    Input,
    notification,
  } from "antd";
  import {
    TwitterOutlined,
    MediumOutlined,
    ChromeOutlined,
    GithubOutlined,
  } from "@ant-design/icons";
  import "../Details.css";
  import { useEffect, useState } from "react";
  import { useMoralis, useWeb3ExecuteFunction } from "react-moralis";
  import brisepad from "../../Contract/bpad.json";
  import Account from "../../Account/Account";
  import Info from "./components/Info";
  import Allocation from "./components/Allocation";
  import Project from "./components/Project";
  
  const styles = {
    text: {
      color: "#ffffff",
    },
    Card: {
      background:
        "linear-gradient(90deg, rgba(32, 212, 185, 0.2) -52.77%, rgba(81, 111, 209, 0.2) 38.23%, rgba(130, 9, 234, 0.2) 133.1%)",
      border: "none",
      borderRadius: "20px",
    },
    body: {
      margin: "0px 50px 0px 50px",
    },
  };
  function Details() {
    const { account, isAuthenticated } = useMoralis();
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
  
    const { TabPane } = Tabs;
  
    const [isModalVisible2, setIsModalVisible2] = useState(false);
  
    const showModal2 = () => {
      setIsModalVisible2(true);
    };
  
    const handleOk2 = () => {
      setIsModalVisible2(false);
    };
  
    const handleCancel2 = () => {
      setIsModalVisible2(false);
    };
  
    function callback(key) {
      console.log(key);
    }
  
    const { fetch, isFetching } = useWeb3ExecuteFunction({
      abi: brisepad,
      contractAddress: "0x5e0B46cf7f6bd5D935D6443e8dB533f5c6DaC8df",
      functionName: "buyTokens",
      params: {
        beneficiary: account,
      },
      msgValue: amount,
    });
    const fetchAndNotify = async () => {
      await fetch({
        onSuccess: (tx) =>
          tx.wait().then((finalTx) => {
            successNotification({
              description: `Joined Successfully`,
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
      <div style={styles.body}>
        <Row align="middle">
          <Col lg={2} md={6} sm={6} xs={8}>
            <Avatar size={80} src="/bayc.jpg" />
          </Col>
          <Col lg={8} md={12} sm={12} xs={8}>
            <div>
              <h1>TestToken</h1>
              <h3>TST</h3>
            </div>
          </Col>
        </Row>
        <div className="icons">
          <Avatar className="icon" size={28} icon={<TwitterOutlined />} />
          <Avatar className="icon" size={28} icon={<MediumOutlined />} />
          <Avatar className="icon" size={28} icon={<ChromeOutlined />} />
          <Avatar className="icon" size={28} icon={<GithubOutlined />} />
        </div>
        <div className="buttons">
          <a className="closed">Closed</a>
          <a className="brise">BNB</a>
        </div>
        <p className="cap">1 BNB = 1200 TST</p>
        <Row align="middle">
          <Col lg={8} md={24} sm={24} xs={24} className="desc-col">
            <p className="desc">
            A defi gateway hub to limitless network, accessible markets.
            Cakepad is part of the utility product of Caketools.....
            </p>
            <div className="pool-button">
              <Button
                type="primary"
                shape="round"
                size="large"
                className="join-pool"
                onClick={showModal2}
                loading={isFetching}
              >
                Join IDO
              </Button>
              <Modal
                title="Join TST IDO"
                visible={isModalVisible2}
                centered
                onOk={handleOk2}
                onCancel={handleCancel2}
                footer={null}
              >
                <p>BNB AMOUNT:</p>
                <Input
                  min={1}
                  max={10}
                  className="input"
                  size="large"
                  onChange={(e) => {
                    setAmount(`${e.target.value}`);
                  }}
                />
                <Button
                  type="primary"
                  shape="round"
                  className="approve2"
                  size="large"
                  onClick={() => fetchAndNotify(handleCancel2())}
                  loading={isFetching}
                  disabled={!tx}
                >
                  JOIN
                </Button>
              </Modal>
            </div>
          </Col>
          <Col lg={8} md={24} sm={24} xs={24}>
            <Info />
          </Col>
        </Row>
        <div className="tabs">
          <Tabs defaultActiveKey="1" onChange={callback} className="tab">
            <TabPane tab="Project details" key="1">
              <Project />
            </TabPane>
            <TabPane tab="Your Allocation" key="3">
              <Allocation />
            </TabPane>
          </Tabs>
        </div>
      </div>
    );
  }
  
  export default Details;
  