import { Space, Typography } from "antd";
import React from "react";

const { Title, Paragraph, Text, Link } = Typography;
function AppBanner() {
  return (
    <Space size="large" direction="vertical" style={{ backgroundColor: "#29B363", height: "100%", width: "100%" }}>
      <Typography style={{ width: "100%" }}>
        <Paragraph>A joke a day keeps the doctor away</Paragraph>
        <Paragraph>If you joke wrong away, you teek have to pay. (Serious)</Paragraph>
      </Typography>
    </Space>
  );
}

export { AppBanner };
