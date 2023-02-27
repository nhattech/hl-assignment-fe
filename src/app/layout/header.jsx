import { Space } from "antd";
import { Logo, User } from "../components";

function AppHeader() {
  return (
    <Space style={{display: 'flex' , justifyContent: 'space-between', 
    padding: '0% 10%' 
    }}>
      <Logo />
      <User />
    </Space>
  );
}

export { AppHeader };
