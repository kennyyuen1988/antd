import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Layout, Menu, Button, PageHeader, Breadcrumb, Tabs } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UnorderedListOutlined,
  TabletOutlined,
  SettingOutlined,
} from '@ant-design/icons';

const { Header, Sider, Content, Footer } = Layout;

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

class SiderDemo extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" >
            <img src="./img/hk01logo/hk01-logo@2x.png" />
          </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<UnorderedListOutlined />}>
              活動列表
            </Menu.Item>
            <Menu.Item key="2" icon={<TabletOutlined />}>
              01空間設定
            </Menu.Item>
            <Menu.Item key="3" icon={<SettingOutlined />}>
              設定
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0, height: 'auto' }}>
            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: this.toggle,
            })}

            <Breadcrumb>
              <Breadcrumb.Item>
                <a href="">01空間設定</a>
              </Breadcrumb.Item>
              <Breadcrumb.Item>活動專題</Breadcrumb.Item>
            </Breadcrumb>
            <PageHeader
                ghost={false}
                title="活動專題"
                extra={[
                  <Button key="1" type="primary">
                    新增專題
                  </Button>,
                ]}
              ></PageHeader>

          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: 0,
              padding: 0,
              minHeight: 280,
            }}
          >
            

            <Tabs defaultActiveKey="1" size={"large"} onChange={callback}>
              <TabPane tab="專題列表" key="1">
                
                <PageHeader
                    ghost={false}
                    title="顯示在主頁的專題"
                    extra={[
                      <Button key="1" type="primary">
                        儲存並發佈
                      </Button>,
                    ]}
                  ></PageHeader>
              </TabPane>
              <TabPane tab="主頁專題管理" key="2">
                Content of Tab Pane 2
              </TabPane>
            </Tabs>

          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    );
  }
}

ReactDOM.render(<SiderDemo />, document.getElementById('container'));