import React from 'react'
import { Layout, Menu } from 'antd'
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons'
import { Link, useHistory } from 'react-router-dom'

import { CART, LOGO, USERN0tLOGIN } from '../assets'
import IndividualNav from '../IndividualNav.web'

const { Header, Content, Footer, Sider } = Layout

const IndvHeadLayout = (props: any) => {
  return (
    <>
      <Layout className='indv-layout'>
        <Header className='site-layout-sub-header-background2'>
          <div className='indv-logo-head '>
            <Link to="/">
              <img src={LOGO} alt='LOGO' />
            </Link>
          </div>  
          
          <IndividualNav />
        </Header>

        <Content>
          <div className='site-layout-background' style={{ minHeight: 360 }}>
            {props.children}
          </div>
        </Content>
      </Layout>
    </>
  )
}

export default IndvHeadLayout
