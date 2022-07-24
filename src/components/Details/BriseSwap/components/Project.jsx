import { Row, Col, Table } from "antd";
import AddToken from "./AddToken";
// import Opentime from "./Opentime";
// import Closetime from "./Closetime";
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
      address: "2022-5-7 18:00:00 UTC",
    },
    {
      key: "3",
      name: "Closes:",
      address: "2022-5-14 18:00:00 UTC",
    },
    {
      key: "4",
      name: "Swap Rate:",
      address: "1 BPAD = 1.82 BSWAP",
    },
    {
      key: "5",
      name: "Soft Cap:",
      address: "30,000,000 BPAD",
    },
    {
      key: "6",
      name: "Hard Cap:",
      address: "55,000,000 BPAD",
    },
    {
      key: "7",
      name: "Tokens For Presale:",
      address: "100,100,000 BPAD",
    },
    // {
    //   key: "7",
    //   name: "Total Users Participated:",
    //   address: "213",
    // },
    {
      key: "8",
      name: "Total Funds Swapped:",
      address: 0,
    },
    {
      key: "9",
      name: "Access:",
      address: "Public ",
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
      address: "BriseSwap",
    },
    {
      key: "2",
      name: "Token Symbol:",
      address: "BSWAP",
    },
    {
      key: "3",
      name: "Total Supply:",
      address: "1,000,000,000",
    },
    {
      key: "4",
      name: "Contract:",
      address: (
        <>
          <a
            href="https://brisescan.com/address/0xF26006408112be347c23FDBa03F7bC3566519655/contracts"
            target="_blank"
            rel="noreferrer"
            style={{ color: "#20D4B9", marginRight: "10px" }}
          >
            BriseScan
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
