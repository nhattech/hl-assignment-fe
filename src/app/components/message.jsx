import { Space, Typography } from "antd";
import React from "react";


const { Title, Paragraph, Text, Link } = Typography;
function AppMessage(props) {
  return (
    <Space size="large" direction="vertical" style={{  height: "100%", width: "70%" }}>
      <Typography align="start">
        <Paragraph key={props.data.id}>{props.data.contents}</Paragraph>
      </Typography>
    </Space>
  ); 
}

export { AppMessage };
