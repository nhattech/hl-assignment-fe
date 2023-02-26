import { Button, Divider, Space } from "antd";

function AppAction(action) {

  return (
    <Space size="large" direction="vertical" style={{ marginLeft: "30%", width: "70%" }}>
      <Divider className="divider" />
      <Space direction="horizontal" align="start" style={{ height: "100%" }}>
        <Button
          onClick={action.action.handleFunny}
          style={{
            backgroundColor: "#2C7EDB",
            width: 200,
            color: "white",
          }}
        >
          This is Funny!
        </Button>
        <Button
          onClick={action.action.handleNotFunny}
          style={{
            backgroundColor: "#29B363",
            width: 200,
            color: "white",
          }}
        >
          This is not Funny.
        </Button>
      </Space>
    </Space>
  );
}

export { AppAction };
