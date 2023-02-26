import { Image, Space } from "antd";
import logoImg from "../../assets/logoimg.png";
function Logo() {
  return (
    <Space direction="horizontal">
      <Image src={logoImg} width={100} alt="logo" />
    </Space>
  );
}

export { Logo };
