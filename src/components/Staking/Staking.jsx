import { Tabs } from "antd";
import {
  UserAddOutlined,
  UsergroupDeleteOutlined,
  WalletOutlined,
} from "@ant-design/icons";
import "./staking.css";
import Stake from "./components/Stake";
import Unstake from "./components/Unstake";
import Withdraw from "./components/Withdraw";

const { TabPane } = Tabs;

export default function Staking() {
  return (
    <div className="body">
      <Tabs defaultActiveKey="1" className="tab">
        <TabPane
          tab={
            <span>
              <UserAddOutlined />
              Stake
            </span>
          }
          key="1"
        >
          <Stake />
        </TabPane>
        <TabPane
          tab={
            <span>
              <WalletOutlined />
              Harvest
            </span>
          }
          key="3"
        >
          <Withdraw />
        </TabPane>
        <TabPane
          tab={
            <span>
              <UsergroupDeleteOutlined />
              Withdraw
            </span>
          }
          key="2"
        >
          <Unstake />
        </TabPane>
      </Tabs>
    </div>
  );
}
