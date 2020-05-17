import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';
import './Header.css'
import TemporaryDrawer from '../component/TemporaryDrawer';
const {  Content } = Layout;
const CustomLayout = (props) => {
    return(
  <Layout className="layout">
     <header id="header">
			    <Link class="logo" to={'/'}>COVID-19</Link>
         
				<nav>
                <TemporaryDrawer/>
                    
				</nav>
			</header>
    <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <div style={{background: '#fff', padding: 24, minHeight:28}}>
        {props.children}
        </div>
    </Content>
  </Layout>

    );
}

export default CustomLayout    
    