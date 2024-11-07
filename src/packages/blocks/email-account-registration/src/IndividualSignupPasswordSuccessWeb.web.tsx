import React from 'react';
// Customizable Area Start
import IndividualSignupPasswordSuccessWebController, {
  Props,
} from './IndividualSignupPasswordSuccessWebController.web';
import { authImg } from "./assets";
import { Row, Col, Modal } from 'antd'

class IndividualSignupPasswordSuccessWeb extends IndividualSignupPasswordSuccessWebController {
  constructor(props: Props) {
    super(props);
    // Customizable Area Start
    // Customizable Area End
  }

  render() {
    const {isModalVisible} = this.state;

    return (
    <>
      <div className='auth-bg'>
        <Modal
          title=''
          visible={isModalVisible}
          onOk={() => this.handleModalOk()}
          onCancel={() => this.handleModalCancel()}
          width={900}
          footer={false}
          className='idv-login-modal'
        >
          <Row gutter={24}>
            <Col lg={12} md={12}>
              <div className='indv-pass-success-modal'>
                <div className='indv-pass-success-modal-check'>
                  <i className='fas fa-check' />
                </div>
                <div>
                  <div className='py-3'>
                    <p>Successfully created</p>
                  </div>
                  <div className='indv-pass-success-modal-btn'>
                    <button onClick={() => this.individualLoginUrl()}>
                      Login
                    </button>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={12} md={12}>
              <div className='indv-auth-img mt-4'>
                <img src={"https://minio.b120578.dev.eastus.az.svc.builder.cafe/sbucket/variants/qqpihxzv8uzlvqynolkk5lkqc0kk/6f7daa6c86a9bc2c53f5d0684447f253adfa8f13401d95f9d66464245ed9ff2e?response-content-disposition=inline%3B%20filename%3D%22authImg.jpg%22%3B%20filename%2A%3DUTF-8%27%27authImg.jpg&response-content-type=image%2Fjpeg"} alt='' />
              </div>
            </Col>
          </Row>
        </Modal>
      </div>
    </>
    );
  }
}

export default IndividualSignupPasswordSuccessWeb as React.ComponentType<any>;
// Customizable Area End
