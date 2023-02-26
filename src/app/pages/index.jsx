import { AppContent, AppHeader, AppFooter } from "../layout";
import React from "react";
import { Layout } from "antd";
const { Header, Content, Footer } = Layout;

function Home() {
  return (
    <Layout style={{ display: "flex", minHeight: "100vh" , margin: '0% 5%'}}>
      <Header style={{backgroundColor: 'white', color: "white", display: 'flow', flexFlow: 'row' }} >
        <AppHeader />
      </Header>
      <Content className="Home" style={{ marginTop: 2, flex: 1, width: '100%', display: 'flex' }}
      sx={{
        flex: 1
      }}
      >
        <AppContent/>
      </Content>
      <Footer style={{backgroundColor: 'white'}}>
        <AppFooter />
      </Footer>
    </Layout>
  );
}

export default Home;
