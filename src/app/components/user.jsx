import { UserOutlined } from "@ant-design/icons";
import { Avatar, Space, Typography } from "antd";
const { Title, Paragraph, Text, Link } = Typography;
function User() {
  return (
    <Space direction="horizontal" align="center">
      <Typography align='end'>
        <Text type="secondary" style={{fontSize: 10}}>Handicrafted by</Text><br/>
        <Text>Ba Nhat</Text>
      </Typography>

      <Avatar size="default" icon={<UserOutlined />} alt="avatar" />
    </Space>
  );
}

export { User };
