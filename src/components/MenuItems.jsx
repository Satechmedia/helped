import { useLocation } from "react-router-dom";
import { Menu } from "antd";
import { NavLink } from "react-router-dom";

function MenuItems() {
  const { pathname } = useLocation();

  return (
    <Menu
      theme="dark"
      mode="horizontal"
      style={{
        display: "block",
        // width: "400px",
        fontSize: "17px",
        fontWeight: "500",
        justifyContent: "center",
        backgroundColor: "#000000",
        border: "none",
      }}
      defaultSelectedKeys={[pathname]}
    >
      <Menu.Item key="/presale">
        <NavLink to="/presale">Project</NavLink>
      </Menu.Item>
      <Menu.Item key="/staking">
        <NavLink to="/staking">Staking</NavLink>
      </Menu.Item>
    </Menu>
  );
}

export default MenuItems;
