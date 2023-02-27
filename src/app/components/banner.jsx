import { Space, Typography } from "antd";
import React from "react";

const { Title, Paragraph, Text, Link } = Typography;
function AppBanner() {
  return (
    <Space
    className="AppBanner"
      size="large"
      direction="vertical"
      style={{
        backgroundColor: "#29B363",
        height: "100%",
        width: "100%",
        alignContent: "center",
        alignItems: "center",
        margin: 0,
      }}
    >
      <Typography style={{ width: "100%", margin: 0 }}>
        <Paragraph
          style={{
            color: "white",
            fontSize: 30,
            margin: 0,
          }}
        >
          A joke a day keeps the doctor away
        </Paragraph>
        <Paragraph
          style={{
            color: "white",
          }}
        >
          If you joke wrong away, you teek have to pay. (Serious)
        </Paragraph>
      </Typography>
    </Space>
  );
}

export { AppBanner };
