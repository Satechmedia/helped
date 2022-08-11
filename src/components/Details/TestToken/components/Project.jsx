import { Row, Col, Table } from "antd";
import AddToken from "./AddToken";
import Close from "./Closetime";
import Open from "./Opentime";
import TotalProgress from "./TotalProgress";
function Project() {
  const columns = [
    {
      dataIndex: "name",
    },
    {
      dataIndex: "address",
    },
  ];
  const data = [
    {
      key: "1",
      name: "Opens:",
      address: <Open />,
    },
    {
      key: "3",
      name: "Closes:",
      address: <Close />,
    },
    {
      key: "4",
      name: "Swap Rate:",
      address: "1 BNB = 1200 TST",
    },
    {
      key: "5",
      name: "Soft Cap:",
      address: "250 BNB",
    },
    {
      key: "6",
      name: "Hard Cap:",
      address: "500 BNB",
    },
    // {
    //   key: "7",
    //   name: "Total Users Participated:",
    //   address: "213",
    // },
    {
      key: "8",
      name: "Total Funds Swapped:",
      address: <TotalProgress />,
    },
    {
      key: "9",
      name: "Access:",
      address: "Private ",
    },
  ];
  const columns2 = [
    {
      dataIndex: "name",
    },
    {
      dataIndex: "address",
    },
  ];
  const data2 = [
    {
      key: "1",
      name: "Name:",
      address: "TestToken",
    },
    {
      key: "2",
      name: "Token Symbol:",
      address: "TST",
    },
    {
      key: "3",
      name: "Total Supply:",
      address: "100,000,000",
    },
    {
      key: "4",
      name: "Contract:",
      address: (
        <>
          <a
            href="https://bscscan.com/address/0xc8037b53423daccae4b95e1ba132a66aca82eaa3"
            target="_blank"
            rel="noreferrer"
            style={{ color: "#20D4B9", marginRight: "10px" }}
          >
            Bscscan
          </a>
          <AddToken />
        </>
      ),
    },
  ];
  return (
    <Row>
      <Col lg={12} md={12} sm={24} xs={24} className="pool">
        <div className="pool-info">
          <p>IDO information</p>
        </div>
        <div>
          <Table
            showHeader={false}
            columns={columns}
            dataSource={data}
            size="middle"
            pagination={false}
          />
        </div>
      </Col>
      <Col lg={10} md={9} sm={24} xs={24} className="token">
        <div className="token-info">
          <p>Token Information</p>
        </div>
        <div>
          <Table
            showHeader={false}
            columns={columns2}
            dataSource={data2}
            size="middle"
            pagination={false}
          />
        </div>
      </Col>
    </Row>
  );
}
export default Project;
