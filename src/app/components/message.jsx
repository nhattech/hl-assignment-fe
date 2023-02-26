import { Space, Typography } from "antd";
import React from "react";


const { Title, Paragraph, Text, Link } = Typography;
function AppMessage(props) {
  // const { index } = props;
  // const indexs = Number(index);
  // if (index === 'undefined' ) return;
// console.log(index);
  return (
    <Space size="large" direction="vertical" style={{ marginLeft: "30%", height: "100%", width: "70%" }}>
      <Typography align="start">
        <Paragraph key={props.data.id}>{props.data.contents}</Paragraph>
        {/* <Paragraph>If you joke wrong away, you teek have to pay. (Serious)</Paragraph> */}
      </Typography>
    </Space>
  ); 
}

export { AppMessage };
