import React from 'react'
// Customizable Area Start
import IndividualProfileResetPasswordSuccessController, {
  Props,
} from './IndividualProfileResetPasswordSuccessController.web'
import { Row, Col, Modal } from 'antd'

class IndividualProfileResetPasswordSuccess extends IndividualProfileResetPasswordSuccessController {
  constructor(props: Props) {
    super(props)
    // Customizable Area Start
    // Customizable Area End
  }

  render() {
    const { isModalVisible } = this.state

    return (
      <>
        <div className='indv-profile-bg'>
          <Modal
            title=''
            visible={isModalVisible}
            onOk={() => this.handleModalOk()}
            onCancel={() => this.handleModalCancel()}
            width={500}
            footer={false}
            className='idv-login-modal'
          >
            <Row gutter={24}>
              <Col lg={24} md={24}>
                <div className='indv-pass-success-modal reset-pass-succ-modal'>
                  <div className='indv-pass-success-modal-check'>
                    <i className='fas fa-check' />
                  </div>
                  <div>
                    <div className='py-3'>
                      <p>Password has been successfully reset</p>
                    </div>
                    <div className='indv-pass-success-modal-btn'>
                      <button onClick={() => this.individualLoginUrl()}>
                        Login
                      </button>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Modal>
        </div>
      </>
    )
  }
}

export default IndividualProfileResetPasswordSuccess as React.ComponentType<any>
// Customizable Area End
