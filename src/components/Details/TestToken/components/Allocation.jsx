import { Table, Button, Modal, notification } from "antd";
import { useState } from "react";
import { useMoralis, useWeb3ExecuteFunction } from "react-moralis";
import brisepad from "../../../Contract/bpad.json";
import Alloc from "./Alloc";
import Claimed from "./Claimed";
import Closetime from "./Closetime";
import "../../Details.css";
function Allocation() {
  const { account } = useMoralis();

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
    abi: brisepad,
    contractAddress: "0x5e0B46cf7f6bd5D935D6443e8dB533f5c6DaC8df",
    functionName: "withdrawTokens",
    params: {
      beneficiary: account,
    },
  });
  const fetchAndNotify = () => {
    fetch({
      onSuccess: () =>
        successNotification({
          description: `Claimed Successfully`,
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
      date: <Closetime />,
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
        title="Claim TST IDO"
        visible={isModalVisible}
        centered
        onOk={handleOk}
        footer={null}
      >
        <Button
          type="primary"
          shape="round"
          className="approve2"
          size="large"
          onClick={() => fetchAndNotify(handleCancel())}
          loading={isFetching}
        >
          CLAIM
        </Button>
      </Modal>
    </div>
  );
}
export default Allocation;
