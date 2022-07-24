/* eslint-disable jsx-a11y/anchor-is-valid */
import { Card, Row, Col, Avatar } from "antd";
import {
  TwitterOutlined,
  MediumOutlined,
  ChromeOutlined,
  GithubOutlined,
} from "@ant-design/icons";
import "../launchpad.css";
import ProgressBar from "../../Details/TestToken/components/ProgressBar";

const styles = {
  card: {
    background: "#1F1E3E",
    borderRadius: "12px",
    margin: "0px 40px 40px 0px",
    color: "#ffffff",
  },
  text: {
    color: "#ffffff",
  },
};

export default function Cards() {
  return (
    <a href="/TestTokenDetails">
      <Card style={styles.card} className="card">
        <Row>
          <Col span={8}>
            <Avatar size={80} src="/bayc.jpeg" />
          </Col>
          <Col span={12}>
            <div>
              <h1>TestToken</h1>
              <h3>TST</h3>
            </div>
            <div className="icons">
              <Avatar className="icon" size={28} icon={<TwitterOutlined />} />
              <Avatar className="icon" size={28} icon={<MediumOutlined />} />
              <Avatar className="icon" size={28} icon={<ChromeOutlined />} />
              <Avatar className="icon" size={28} icon={<GithubOutlined />} />
            </div>
            <div className="buttons">
              <a className="closed">Closed</a>
              <a className="brise">BRISE</a>
            </div>
          </Col>
        </Row>
        <p className="desc">
          TestToken is designed to help fuel the future of mass-market
          blockchain applications building on Bitgert chain We aim to be the
          largest decentralized...
        </p>
        <div className="swap">
          <p>Swap Rate</p>
          <p>1 BRISE = 1200 TST</p>
        </div>
        <div className="cap">
          <p>Cap</p>
          <p>50,000 BRISE</p>
        </div>
        <div className="progress">
          <p>Progress</p>
          <ProgressBar />
        </div>
      </Card>
    </a>
  );
}
