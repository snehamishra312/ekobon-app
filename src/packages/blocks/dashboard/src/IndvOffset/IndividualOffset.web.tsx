import React from 'react'
// import OneTimeCard from './OneTimeCard.web'
// import SubscriptionOffset from './SubscriptionOffset.web'
// import
// OneTimeOff
import { NavLink } from 'react-router-dom'

const IndividualOffset = () => {
  const location = window.location.pathname

  const checkLocation =
    location == '/individual/offset-onetime' ||
    location == '/individual/offset-onetime-flight' ||
    location == '/individual/offset-onetime-car' ||
    location == '/individual/offset-onetime-transport' ||
    location == '/individual/offset-onetime-house'

  return (
    <div className='admin_carbon_offset'>
      <div className='idv-offset-top-menu'>
        <ul className=' d-flex justify-content-center'>
          <li className='indv-offset-tab-link '>
            <NavLink
              exact
              to='/individual/offset-onetime'
              className={`${checkLocation == true ? 'active me-4' : 'me-4'} `}
            >
              One Time
            </NavLink>
          </li>
          <li className='indv-offset-tab-link '>
            <NavLink
              exact
              to='/individual/offset-subscription'
              activeClassName='active'
              className='ms-4'
            >
              Subscription
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default IndividualOffset
