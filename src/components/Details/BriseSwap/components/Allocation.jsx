import { Table, Button, Modal, notification, Input } from "antd";
import { useState, useEffect } from "react";
import { useWeb3ExecuteFunction } from "react-moralis";
import bswapido from "../../../Contract/bswapido.json";
import Alloc from "./Alloc";
import Claimed from "./Claimed";
// import Closetime from "./Closetime";
import "../../Details.css";
function Allocation() {
  const [tx, setTx] = useState();
  const [amount, setAmount] = useState();

  useEffect(() => {
    amount ? setTx({ amount }) : setTx();
  }, [amount]);

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

  // const infoNotification = ({ message, description }) => {
  //   notification.info({
  //     placement: "topRight",
  //     message,
  //     description,
  //     style: {
  //       color: "rgba(0, 0, 0, 0.65)",
  //       border: "1px solid #91d5ff",
  //       backgroundColor: "#e6f7ff",
  //     },
  //   });
  // };

  // const warningNotification = ({ message, description }) => {
  //   notification.warning({
  //     placement: "topRight",
  //     message,
  //     description,
  //     style: {
  //       color: "rgba(0, 0, 0, 0.65)",
  //       border: "1px solid #ffe58f",
  //       backgroundColor: "#fffbe6",
  //     },
  //   });
  // };

  const { fetch, isFetching } = useWeb3ExecuteFunction({
    abi: bswapido,
    contractAddress: "0xE6C54AF56A360128dc1648b4492303447A926fd7",
    functionName: "claim",
    params: {
      amount: (amount * 100000000) / 1.82,
    },
  });
  const fetchAndNotify = async () => {
    await fetch({
      onSuccess: (tx) =>
        tx.wait().then((finalTx) => {
          successNotification({
            description: `Claimed Successfully`,
          });
          console.log(finalTx);
        }),
      onError: (error) =>
        errorNotification({
          description: `${error.data.message}`,
        }),
    });
  };

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const dataSource = [
    {
      key: "1",
      number: 1,
      allocation: <Alloc />,
      date: "2022-5-14 18:00:00 UTC",
      claimed: <Claimed />,
      action: (
        <Button
          type="primary"
          shape="round"
          onClick={showModal}
          loading={isFetching}
        >
          Claim Tokens
        </Button>
      ),
    },
  ];

  const columns = [
    {
      title: "No.",
      dataIndex: "number",
      key: "number",
      width: 50,
    },
    {
      title: "Allocation",
      dataIndex: "allocation",
      key: "allocation",
      width: 50,
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      width: 50,
    },
    {
      title: "Claimed",
      dataIndex: "claimed",
      key: "claimed",
      width: 50,
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      width: 100,
    },
  ];

  return (
    <div className="allocation">
      <Table dataSource={dataSource} columns={columns} scroll={{ x: 500 }} />
      <Modal
        title="Claim BSWAP IDO"
        visible={isModalVisible}
        centered
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
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
          className="approve1"
          size="large"
          onClick={() => fetchAndNotify(handleCancel())}
          loading={isFetching}
          disabled={!tx}
        >
          CLAIM
        </Button>
      </Modal>
    </div>
  );
}
export default Allocation;
