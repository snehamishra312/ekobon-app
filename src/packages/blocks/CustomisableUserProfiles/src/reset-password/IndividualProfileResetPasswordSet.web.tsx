import React from 'react'
// Customizable Area Start
import IndividualProfileResetPasswordSetController, {
  Props,
} from './IndividualProfileResetPasswordSetController.web'
import { Button, Col, Form, Input, Modal, Row } from 'antd'

const styles = {} as const
// Customizable Area End

export default class IndividualProfileResetPasswordSet extends IndividualProfileResetPasswordSetController {
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
            visible={isModalVisible}
            onOk={() => this.handleModalOk()}
            onCancel={() => this.handleModalCancel()}
            width={500}
            footer={false}
            className='idv-login-modal'
          >
            <Row>
              <Col lg={24} md={24} xs={24} sm={24}>
                <div className='idv-modal-upper-sec-back mb-3'>
                  <button onClick={() => this.handleBack()}>
                    <i className='fas fa-angle-left' />
                  </button>
                </div>

                <div className='forgot-indv-left-sec-modal'>
                  <div className='login-indv-form-up-txt mb-5'>
                    <p className='mb-3'>
                      <b>Reset Password</b>
                    </p>
                    <p>Create new Password</p>
                  </div>

                  <Form
                    name='basic'
                    layout='vertical'
                    initialValues={{ remember: true }}
                    onFinish={this.onFinish}
                    autoComplete='off'
                    className='login-indv-form'
                  >
                    <div className=''>
                      <Row>
                        <p>Password</p>
                      </Row>

                      <Form.Item
                        label=''
                        name='new_password'
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

                    <div className='mt-5'>
                      <Form.Item>
                        <Button
                          className='carbon-idv-signin-btn carbon-idv-forgot-btn'
                          size='large'
                          htmlType='submit'
                        >
                          Reset Password
                        </Button>
                      </Form.Item>
                    </div>
                  </Form>
                </div>
              </Col>
            </Row>
          </Modal>
        </div>
      </>
    )
  }
}
