import { Space } from "antd";
import { Logo, User } from "../components";

function AppHeader() {
  return (
    <Space style={{display: 'flex' , justifyContent: 'space-between'}}>
      <Logo />
      <User />
    </Space>
  );
}

export { AppHeader };
