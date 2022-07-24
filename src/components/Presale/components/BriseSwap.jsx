/* eslint-disable jsx-a11y/anchor-is-valid */
import { Card, Row, Col, Avatar } from "antd";
import {
  TwitterOutlined,
  MediumOutlined,
  ChromeOutlined,
  GithubOutlined,
} from "@ant-design/icons";
import "../launchpad.css";

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
    <a href="/BriseSwapDetails">
      <Card style={styles.card} className="card">
        <Row>
          <Col span={8}>
            <Avatar size={80} src="/bswap.jpg" />
          </Col>
          <Col span={12}>
            <div>
              <h1>BriseSwap</h1>
              <h3>BSWAP</h3>
            </div>
            <div className="icons">
              <Avatar className="icon" size={28} icon={<TwitterOutlined />} />
              <Avatar className="icon" size={28} icon={<MediumOutlined />} />
              <Avatar className="icon" size={28} icon={<ChromeOutlined />} />
              <Avatar className="icon" size={28} icon={<GithubOutlined />} />
            </div>
            <div className="buttons">
              <a className="open">Open</a>
              <a className="brise">BPAD</a>
            </div>
          </Col>
        </Row>
        <p className="desc">
          BriseSwap is the most advanced DEX on Bitgert Chain. Briseswap is the
          child project of Brisepad team that have been the most effective team
          ever since joining Bitgert chain...
        </p>
        <div className="swap">
          <p>Swap Rate</p>
          <p>1 BPAD = 1.82 BSWAP</p>
        </div>
        <div className="cap">
          <p>Cap</p>
          <p>55,000,000 BPAD</p>
        </div>
        {/* <div className="progress">
          <p>Progress</p>
        </div> */}
      </Card>
    </a>
  );
}
