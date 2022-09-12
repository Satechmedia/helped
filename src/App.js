/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect } from "react";
import { useMoralis } from "react-moralis";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Account from "./components/Account/Account";
// import Chains from "components/Chains";
// import TokenPrice from "components/TokenPrice";
import ERC20Balance from "./components/ERC20Balance";
import ERC20Transfers from "./components/ERC20Transfers/ERC20Transfers";
import DEX from "./components/DEX/DEX";
import NFTBalance from "./components/NFTBalance";
import Wallet from "./components/Wallet/Wallet";
import { Layout, Tabs } from "antd";
import "antd/dist/antd.css";
// import NativeBalance from "components/NativeBalance";
import "./style.css";
import Presale from "./components/Presale/Presale";
import Staking from "./components/Staking/Staking";
import TestTokenDetails from "./components/Details/TestToken/TestTokenDetails";
import BriseSwapDetails from "./components/Details/BriseSwap/BriseSwapDetails";
import Contract from "./components/Contract/Contract";
// import Text from "antd/lib/typography/Text";
import Ramper from "./components/Ramper";
import MenuItems from "./components/MenuItems";
const { Header, Footer } = Layout;

const styles = {
  content: {
    display: "flex",
    justifyContent: "center",
    fontFamily: "Roboto, sans-serif",
    color: "#ffffff",
    background: "black",
    marginTop: "130px",
  },
  header: {
    position: "fixed",
    zIndex: 1,
    width: "100%",
    background: "black",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontFamily: "Roboto, sans-serif",
    borderBottom: "2px solid rgba(0, 0, 0, 0.06)",
    padding: "0px 10px",
    boxShadow: "0 1px 10px #f5ba38",
  },
  headerRight: {
    display: "flex",
    gap: "20px",
    alignItems: "center",
    fontSize: "15px",
    fontWeight: "600",
    color: "#ffffff",
  },
};
const App = ({ isServerInfo }) => {
  const { isWeb3Enabled, enableWeb3, isAuthenticated, isWeb3EnableLoading } =
    useMoralis();

  useEffect(() => {
    const connectorId = window.localStorage.getItem("connectorId");
    if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading)
      enableWeb3({ provider: connectorId });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated, isWeb3Enabled]);

  return (
    <Layout
      style={{ height: "100vh", overflow: "auto", background: "black" }}
    >
      <Router>
        <Header style={styles.header}>
          <Logo />
          <div style={styles.headerRight}>
            {/* <Chains /> */}
            {/* <TokenPrice
              address="0x71946a5C9dA7C95ee804a9BE561EC15A3F286A7D"
              chain="0x1"
              image="https://brisepad.co/assests/white2.png"
              size="30px"
            /> */}
            {/* <NativeBalance /> */}
            <MenuItems />
            <Account />
          </div>
        </Header>

        <div style={styles.content}>
          <Switch>
            <Route exact path="/presale">
              <Presale isServerInfo={isServerInfo} />
            </Route>
            <Route path="/wallet">
              <Wallet />
            </Route>
            <Route path="/TestTokenDetails">
              <TestTokenDetails />
            </Route>
            <Route path="/BriseSwapDetails">
              <BriseSwapDetails />
            </Route>
          
            <Route path="/staking">
              <Staking />
            </Route>
            <Route path="/1inch">
              <Tabs
                defaultActiveKey="1"
                style={{ alignItems: "center", color: "#ffffff" }}
              >
                <Tabs.TabPane tab={<span>Ethereum</span>} key="1">
                  <DEX chain="eth" />
                </Tabs.TabPane>
                <Tabs.TabPane tab={<span>Binance Smart Chain</span>} key="2">
                  <DEX chain="bsc" />
                </Tabs.TabPane>
                <Tabs.TabPane tab={<span>Polygon</span>} key="3">
                  <DEX chain="polygon" />
                </Tabs.TabPane>
              </Tabs>
            </Route>
            <Route path="/erc20balance">
              <ERC20Balance />
            </Route>
            <Route path="/onramp">
              <Ramper />
            </Route>
            <Route path="/erc20transfers">
              <ERC20Transfers />
            </Route>
            <Route path="/nftBalance">
              <NFTBalance />
            </Route>
            <Route path="/contract">
              <Contract />
            </Route>
            <Route path="/">
              <Redirect to="/presale" />
            </Route>
            <Route path="/home">
              <Redirect to="/presale" />
            </Route>
            <Route path="/nonauthenticated">
              <>Please login using the "Authenticate" button</>
            </Route>
          </Switch>
        </div>
        <Footer
          style={{
            position: "relative",
            bottom: "0",
            textAlign: "center",
            display: "block",
            justifyContent: "space-between",
            alignItems: "center",
            background: "none",
          }}
        >
          <p className="copy">
            Copyright @ 2022. All Rights Reserved by Cakepad
          </p>
          <div>
            <a href="" className="link" style={{ marginRight: "10px" }}>
              Privacy Policy
            </a>
            <a href="" className="link">
              Terms of Use
            </a>
          </div>
        </Footer>
      </Router>
    </Layout>
  );
};

export const Logo = () => (
  <div 
      style={{
        display: "flex",
        alignItems: "center", 
        justifyContent: "center",
        marginLeft: "50px"
      }}>
    <a href="/">
      <img src="/logo.png" width="36" alt="" />
    </a>
  </div>
);

export default App;
