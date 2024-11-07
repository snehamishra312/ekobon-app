import React from 'react';
// Customizable Area Start
import IndividualSignupPassWebController, {
  Props,
} from './IndividualSignupPassWebController.web';
import { authImg } from "./assets";
import { Row, Col, Modal, Button, Form, Input } from 'antd'

const styles = {
  
} as const;
// Customizable Area End

class IndividualSignUpPassWeb extends IndividualSignupPassWebController {
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
          visible={isModalVisible}
          onOk={() => this.handleModalOk()}
          onCancel={() => this.handleModalCancel()}
          width={900}
          footer={false}
          className='idv-login-modal'
        >
          <Row gutter={24}>
            <Col lg={12} md={12} xs={24} sm={24}>
              <div className='idv-modal-upper-sec-back mb-3'>
                <button onClick={() => this.handleBack()}>
                  <i className='fas fa-angle-left' />
                </button>
              </div>

              <div className='forgot-indv-left-sec-modal'>
                <div className='login-indv-form-up-txt mb-4'>
                  <p className='mb-2'>
                    <b>Sign up</b>
                  </p>
                  <p>Set new Password</p>
                </div>

                <Form
                  name='basic'
                  layout='vertical'
                  initialValues={{ remember: true }}
                  onFinish={this.onFinish}
                  autoComplete='off'
                  className='login-indv-form'
                >
                  <div className='inv-create-pass'>
                    <Row>
                      <p>Password</p>
                    </Row>

                    <Form.Item
                      label=''
                      name='new_password'
                      // hasFeedback
                      rules={[
                        { required: true, message: 'Please enter password' },
                        {
                          min: 8,
                          message: 'Please enter atleast 8 characters',
                        },
                        {
                          pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$%#])[A-Za-z\d@$%#]{8,}$/,
                          message:
                            'Password must contain one uppercase, one lowercase, one number and one special character (@,$,%,#).',
                        },
                      ]}
                      validateTrigger='onBlur'
                    >
                      <Input.Password
                        size='large'
                        name='new_password'
                        placeholder='********'
                      />
                    </Form.Item>

                    <Row>
                      <p>Re-type Password</p>
                    </Row>

                    <Form.Item
                      label=''
                      name='confirm_password'
                      // hasFeedback
                      rules={[
                        {
                          required: true,
                          message: 'Please confirm your password!',
                        },
                        {},

                        ({ getFieldValue }) => ({
                          validator(_, value) {
                            if (
                              !value ||
                              getFieldValue('new_password') === value
                            ) {
                              return Promise.resolve()
                            }

                            return Promise.reject(
                              'The two passwords that you entered do not match!'
                            )
                          },
                        }),
                      ]}
                      dependencies={['new_password']}
                    >
                      <Input.Password
                        size='large'
                        name='confirm_password'
                        placeholder='********'
                      />
                    </Form.Item>
                  </div>

                  <Form.Item>
                    <Button
                      className='carbon-idv-signin-btn carbon-idv-forgot-btn'
                      size='large'
                      htmlType='submit'
                    >
                      Set Password
                    </Button>
                  </Form.Item>
                  <Row className='indv-login-form-btn-sec' />
                </Form>
              </div>
            </Col>
            <Col lg={12} md={12}>
              <div className='indv-auth-create-pass mt-4'>
              <img src={"https://minio.b120578.dev.eastus.az.svc.builder.cafe/sbucket/variants/qqpihxzv8uzlvqynolkk5lkqc0kk/6f7daa6c86a9bc2c53f5d0684447f253adfa8f13401d95f9d66464245ed9ff2e?response-content-disposition=inline%3B%20filename%3D%22authImg.jpg%22%3B%20filename%2A%3DUTF-8%27%27authImg.jpg&response-content-type=image%2Fjpeg"} alt="AuthImg" />
              </div>
            </Col>
          </Row>
        </Modal>
      </div>
    </>
    );
  }
}

export default IndividualSignUpPassWeb as React.ComponentType<any>;
// Customizable Area End
