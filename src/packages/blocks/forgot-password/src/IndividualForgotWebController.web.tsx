import { IBlock } from '../../../framework/src/IBlock'
import { Message } from '../../../framework/src/Message'
import { BlockComponent } from '../../../framework/src/BlockComponent'
import MessageEnum, {
  getName,
} from '../../../framework/src/Messages/MessageEnum'
import { runEngine } from '../../../framework/src/RunEngine'
import { message as MESSAGE } from 'antd'

// Customizable Area Start
// Customizable Area End

export const configJSON = require('./config')

export interface Props {
  // Customizable Area Start
  history: any
  // Customizable Area End
}

interface S {
  // Customizable Area Start
  isModalVisible: boolean
  email: string
  // Customizable Area End
}

interface SS {
  id: any
}

export default class IndividualForgotWebController extends BlockComponent<
  Props,
  S,
  SS
> {
  apiLogin: string = ''

  constructor(props: Props) {
    super(props)
    this.receive = this.receive.bind(this)

    // Customizable Area Start
    this.subScribedMessages = [
      getName(MessageEnum.AccoutLoginSuccess),
      getName(MessageEnum.RestAPIResponceMessage),
      getName(MessageEnum.SessionSaveMessage),
      getName(MessageEnum.SessionResponseMessage),
    ]

    this.state = this.getEmptyState()
    console.log(process.env.REACT_APP_DEV_MODE_BASE_URL, 'nvs')

    // Customizable Area End
    runEngine.attachBuildingBlock(this as IBlock, this.subScribedMessages)
  }

  async receive(from: string, message: Message) {
    // Customizable Area Start
    runEngine.debugLog('Message Received', message)

    if (getName(MessageEnum.RestAPIResponceMessage) === message.id) {
      const apiRequestCallId = message.getData(
        getName(MessageEnum.RestAPIResponceDataMessage)
      )
      const responseJson = message.getData(
        getName(MessageEnum.RestAPIResponceSuccessMessage)
      )
      const errorReponse = message.getData(
        getName(MessageEnum.RestAPIResponceErrorMessage)
      )
      if (apiRequestCallId === this.apiLogin) {
        if (responseJson != null) {
          if (!responseJson.errors) {
            MESSAGE.success(`OTP has been sent to ${this.state.email}`, 7)
            this.props.history.push({
              pathname: '/signup-enter-otp',
              state: this.state.email,
            })
          } else {
            this.parseApiErrorResponse(responseJson)
          }
        }
        this.parseApiCatchErrorResponse(errorReponse)
      }
    }
    // Customizable Area End
  }

  async componentDidMount() {
    super.componentDidMount()
  }

  getEmptyState = () => ({
    isModalVisible: true,
    email: '',
  })

  handleModalOk = () => {}

  onFinish = async (values: any) => {
    if (this.validateForm(values)) {
      this.handleSendOTP(values)
      this.setState({
        email: values.email,
      })
    }
  }

  validateForm = (values: any) => {
    let isValid = true
    return isValid
  }

  handleSendOTP = async (values: any) => {
    const header = {
      'Content-Type': configJSON.validationApiContentType,
    }
    const requestMessage = new Message(
      getName(MessageEnum.RestAPIRequestMessage)
    )
    this.apiLogin = requestMessage.messageId
    requestMessage.addData(
      getName(MessageEnum.RestAPIResponceEndPointMessage),
      configJSON.OtpSendApiEndPoint
    )
    const httpBody = {
      data: {
        attributes: {
          email: values.email,
        },
      },
    }
    requestMessage.addData(
      getName(MessageEnum.RestAPIRequestBodyMessage),
      JSON.stringify(httpBody)
    )
    requestMessage.addData(
      getName(MessageEnum.RestAPIRequestBaseURLMessage),
      configJSON.BASE_URL
    )
    requestMessage.addData(
      getName(MessageEnum.RestAPIRequestHeaderMessage),
      JSON.stringify(header)
    )
    requestMessage.addData(
      getName(MessageEnum.RestAPIRequestMethodMessage),
      configJSON.httpPostMethod
    )
    runEngine.sendMessage(requestMessage.id, requestMessage)
  }
  // Customizable Area End
}
