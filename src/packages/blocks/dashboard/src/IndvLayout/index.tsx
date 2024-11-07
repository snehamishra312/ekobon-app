import React, { useState, useEffect } from "react";
import { Layout, Menu } from 'antd'
import { Link, Redirect } from "react-router-dom";
const sideDashboardImg = require('../../assets/dashboard.png')
const sideGiftImg = require('../../assets/giftCard.png')
const sideOffsetImg = require('../../assets/Offset.png')
const sidePlantTreeImg = require('../../assets/plantTree.png')
const sideProjectsTreeImg = require('../../assets/projects.png')
import { LOGO, SIDEARROW } from '../assets'
import IndividualNav from '../IndividualNav.web'
import { ClickAwayListener } from '@material-ui/core';
import { deviceMode } from '../../../../components/src/CommonUtils'
const { Header, Content, Footer, Sider } = Layout
const IndvLayout = (props: any) => {
  const [closeDrawer, setCloseDrawer] = useState<boolean>(true);

  const location = window.location.pathname
  let loginDetails: any = localStorage.getItem("UserDetails")
  const loginFlag = JSON.parse(loginDetails)?.type;
  const isMobile = deviceMode.isMobile;
  useEffect(() => {
    console.log('New path:', location);
    setCloseDrawer(true);
  }, [location]);

  return (
    loginFlag !== "Individual" ? <Redirect to="/login" /> :
      <>
        {loginFlag === "Individual" ?
          <Layout>
            <ClickAwayListener
              onClickAway={() => setCloseDrawer(true)}

              mouseEvent="onMouseUp"
              touchEvent="onTouchEnd"
            >
              <Sider
                breakpoint='lg'
                collapsedWidth='0'
                // maskClosable={false}
                // trigger="click"
                onBreakpoint={(broken) => {
                  console.log(broken)
                }}
                defaultCollapsed={false}
                collapsed={isMobile ? closeDrawer : false}

                onCollapse={(collapsed, type) => {
                  if (type === 'clickTrigger') {
                    setCloseDrawer(!closeDrawer)
                  } else {
                    setCloseDrawer(false)
                  }
                  console.log(collapsed, type, closeDrawer)
                }}
                className='indv-dash-sidebar'
              >
                <div className='indv-logo-head '>
                  <Link to="/">
                    <img src={LOGO} alt='LOGO' />
                  </Link>
                </div>
                <Menu
                  // theme='dark'
                  mode='inline'
                // defaultSelectedKeys={['4']}
                >
                  <Menu.Item key='1'>
                    <Link to='/individual/dashboard'>
                      <span className='indv-dash-side-img'>
                        <img src={sideDashboardImg} />
                      </span>{' '}
                  Dashboard
                </Link>
                    {location === '/individual/dashboard' ? <img src={SIDEARROW} alt="" className='image_side_nav' /> : null}
                  </Menu.Item>
                  <Menu.Item key='2'>
                    <Link to='/individual/offset-onetime'>
                      <span className='indv-dash-side-img'>
                        <img src={sideOffsetImg} />
                      </span>{' '}
                  Offset
                  {location === '/individual/offset-onetime' ? <img src={SIDEARROW} alt="" className='image_side_nav' /> : null}
                    </Link>
                  </Menu.Item>
                  <Menu.Item key='3'>
                    <Link to='/individual/plant-tree'>
                      <span className='indv-dash-side-img'>
                        <img src={sidePlantTreeImg} />
                      </span>{' '}
                  Plant a Tree
                  {location === '/individual/plant-tree' ? <img src={SIDEARROW} alt="" className='image_side_nav' /> : null}
                    </Link>
                  </Menu.Item>
                  <Menu.Item key='4'>
                    <Link to='/individual/giftCard'>
                      <span className='indv-dash-side-img'>
                        <img src={sideGiftImg} />
                      </span>{' '}
                  Gift a Card
                  {location === '/individual/giftCard' ? <img src={SIDEARROW} alt="" className='image_side_nav' /> : null}
                    </Link>
                  </Menu.Item>
                  <Menu.SubMenu title={
                    <span style={{ fontSize: "12px" }} >
                      <span className='indv-dash-side-img' >
                        <img src={sideProjectsTreeImg} />
                      </span>{' '}
                My details
               </span>
                  }>
                    <Menu.Item>
                      <Link to='/individual/project'>
                        <span className='indv-dash-side-img'>
                          <img src={sideProjectsTreeImg} />
                        </span>{' '}
                  My Projects
                  {location === '/individual/project' ? <img src={SIDEARROW} alt="" className='image_side_nav' /> : null}
                      </Link>
                    </Menu.Item>
                    <Menu.Item key='6'>
                      <Link to='/individual/mysubscription'>
                        <span className='indv-dash-side-img'>
                          <img src={sideProjectsTreeImg} />
                        </span>{' '}
                  My Subscription
                  {location === '/individual/mysubscription' ? <img src={SIDEARROW} alt="" className='image_side_nav' /> : null}
                      </Link>
                    </Menu.Item>
                    <Menu.Item key='6'>
                      <Link to='/individual/mygiftcard'>
                        <span className='indv-dash-side-img' style={{ minWidth: '100%' }}>
                          <img src={sideProjectsTreeImg} />
                        </span>{' '}
                  My Gift Card
                  {location === '/individual/mygiftcard' ? <img src={SIDEARROW} alt="" className='image_side_nav' /> : null}
                      </Link>
                    </Menu.Item>
                    <Menu.Item key='6'>
                      <Link to='/individual/profile#orderhistoryId'>
                        <span className='indv-dash-side-img' style={{ minWidth: '100%' }}>
                          <img src={sideProjectsTreeImg} />
                        </span>{' '}
                  Order History
                  {location === '/individual/profile#orderhistoryId' ? <img src={SIDEARROW} alt="" className='image_side_nav' /> : null}
                      </Link>
                    </Menu.Item>
                  </Menu.SubMenu>
                </Menu>
              </Sider>
            </ClickAwayListener>
            <Layout className='indv-layout'>
              <Header className='site-layout-sub-header-background'>
                {' '}
                <IndividualNav />
              </Header>

              <Content>
                <div className='site-layout-background' style={{ minHeight: 360 }}>
                  {props.children}
                </div>
              </Content>
            </Layout>
          </Layout>
          : <Redirect to={{ pathname: '/login' }} />}
      </>
  )
}

export default IndvLayout
