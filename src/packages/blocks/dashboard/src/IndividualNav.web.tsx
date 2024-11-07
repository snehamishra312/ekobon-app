import React from 'react'
import { CART, USERN0tLOGIN } from './assets'
import { Link } from 'react-router-dom'
import { Menu, Dropdown } from 'antd'
import { DownOutlined } from '@ant-design/icons'

const IndividualNav = () => {
  const item_list = localStorage.getItem("cart_item")
  const location = window.location.pathname;
  const memberDate: any = localStorage.getItem('token') ? JSON.parse(localStorage.getItem('UserDetails') || "") : null

  const handleLogout = () => {
    localStorage.clear();
  };

  const UserDetails: any = localStorage.getItem("UserDetails");
  console.log(UserDetails, "kkkkkk")
  const menu = (
    <Menu className='indv-dash-nav-dropdown-text'>
      <Menu.Item>
        <Link to='/individual/profile'>Profile</Link>
      </Menu.Item>
      {/* <Menu.Item>
        <Link to="/individual/profile#orderhistoryId">Order History</Link>
      </Menu.Item> */}
      <Menu.Item>
        <Link to='/individual/climate-certificates'>Climate Certificate</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to='/individual/terms-conditions'>Terms & Conditions</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to='/individual/privacy-policy'> Privacy Policy</Link>
      </Menu.Item>
      {/* <Menu.Item>
        <Link to='/individual/tour-begin'> Take a Tour</Link>
      </Menu.Item> */}
      <Menu.Item>
        <Link to='/' onClick={handleLogout}>
          Logout
        </Link>
      </Menu.Item>
    </Menu>
  )

  return (
    <div className="NavLeftContainer">
      <div className="NavLeftContainer-sec1">
        {localStorage.getItem('token') && (
          <>
            {memberDate.created_at !== "" && (
              <div className='indv-member-since nav-container-texts indv-member-since-ns'>
                <p>Member since <span>{memberDate.created_at}</span></p>
              </div>
            )}
          </>
        )}
        <Link to="/individual/faq" className='nav-container-texts'>
          <p className="NavFaq">FAQs</p>
        </Link>
        <Link to="/individual/AddtoCard" className='item_cart_main'>
          <img src={CART} alt="LOGO" className="CartImage_cart" />
          <p className='item_cart'>{item_list ? item_list : 0}</p>
        </Link>
      </div>
      <div className='NavLeftContainer-avtar'>
        <img
          src={localStorage.getItem('token') && JSON.parse(UserDetails)?.image !== null ? JSON.parse(UserDetails)?.image : USERN0tLOGIN}
          alt='UserProfile'
          className='CartImage'
        />
        {localStorage.getItem('token') ? (
          <Dropdown
            overlay={menu}
            className='indv-dash-nav-dropdown'
            placement='bottomRight'
          >
            <a>
              {JSON.parse(UserDetails)?.first_name} <DownOutlined />
            </a>
          </Dropdown>
        ) : (
          <Link
            to={{
              pathname: '/login',
              state: {
                item: location,
              }
            }}
          >
            <p className='LogiNavFaqnBtn'>Login</p>
          </Link>
        )}
      </div>
    </div>
  )
}

export default IndividualNav
