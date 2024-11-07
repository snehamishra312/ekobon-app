import { IBlock } from '../../../../framework/src/IBlock'
import { Message } from '../../../../framework/src/Message'
import { BlockComponent } from '../../../../framework/src/BlockComponent'
import MessageEnum, {
  getName,
} from '../../../../framework/src/Messages/MessageEnum'
import { runEngine } from '../../../../framework/src/RunEngine'
import { HISTORY } from '../../../../components/src/comman'

// Customizable Area Start
// Customizable Area End

export const configJSON = require('../config')

export interface Props {
  // Customizable Area Start
  history: any
  // Customizable Area End
}

interface S {
  // Customizable Area Start
  isModalVisible: boolean
  // Customizable Area End
}

interface SS {
  id: any
}

export default class IndividualProfileResetPasswordSuccessController extends BlockComponent<
  Props,
  S,
  SS
> {
  apiForgotPassword: string = ''

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

    // Customizable Area End
    runEngine.attachBuildingBlock(this as IBlock, this.subScribedMessages)
  }

  async receive(from: string, message: Message) {
    // Customizable Area Start
    runEngine.debugLog('Message Received', message)
    // Customizable Area End
  }

  async componentDidMount() {
    super.componentDidMount()
  }

  getEmptyState = () => ({
    isModalVisible: true,
  })

  // Customizable Area Start
  individualLoginUrl = () => {
    this.props.history.push('/login')
  }

  handleBack = () => {
    HISTORY.goBack()
  }

  handleModalOk = () => {}

  handleModalCancel = () => {
    // this.setState({ isModalVisible: false });
    this.handleBack()
  }
  // Customizable Area End
}
