import { Row, Col, Card, Statistic } from "antd";
import "../../Details.css";
import Approved from "./Approved";
import Total from "./Total";
import Purchased from "./Purchased";
import ProgressBar from "./ProgressBar";

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
function Info() {
  return (
    <Card style={styles.Card} hoverable>
      <Row>
        <Col lg={11} md={11} xs={24}>
          <Approved />
        </Col>{" "}
        <hr />
        <Col lg={11} md={11} xs={24}>
          <Statistic title="Your tier" value={"Diamond"} />
        </Col>{" "}
        <hr />
      </Row>

      <hr />

      <Row>
        <Col lg={11} md={11} xs={24}>
          <Purchased />
        </Col>{" "}
        <hr />
        <Col lg={11} md={11} xs={24}>
          <Total />
        </Col>{" "}
        <hr />
      </Row>

      <hr />
      <div>
        <p className="swap">Amount Raised</p>
        <ProgressBar />
      </div>
    </Card>
  );
}
export default Info;
