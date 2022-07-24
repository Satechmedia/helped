import { Button, notification } from "antd";
import { useWeb3ExecuteFunction, useMoralis } from "react-moralis";
import bpad from "../../../Contract/bpad.json";
function Approve() {
  const { Moralis } = useMoralis();
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

  const { fetch, isFetching } = useWeb3ExecuteFunction({
    abi: bpad,
    contractAddress: "0x71946a5C9dA7C95ee804a9BE561EC15A3F286A7D",
    functionName: "approve",
    params: {
      amount: Moralis.Units.Token(1000000000000000, 18),
      spender: "0xE6C54AF56A360128dc1648b4492303447A926fd7",
    },
  });
  const fetchAndNotify = async () => {
    await fetch({
      onSuccess: (tx) =>
        tx.wait().then((finalTx) => {
          successNotification({
            description: `Approved Successfully`,
          });
          console.log(finalTx);
        }),
      onError: (error) =>
        errorNotification({
          description: `${error.data.message}`,
        }),
    });
  };
  return (
    <>
      <Button
        type="primary"
        shape="round"
        className="approve2"
        size="large"
        onClick={() => fetchAndNotify()}
        loading={isFetching}
      >
        Approve
      </Button>
    </>
  );
}
export default Approve;
