import { IBlock } from "../../../../framework/src/IBlock";
import { Message } from "../../../../framework/src/Message";
import { BlockComponent } from "../../../../framework/src/BlockComponent";
import MessageEnum, {
  getName,
} from "../../../../framework/src/Messages/MessageEnum";
import { runEngine } from "../../../../framework/src/RunEngine";

// Customizable Area Start
// Customizable Area End

export const configJSON = require("../config");

export interface Props {
  // Customizable Area Start
  id: string;
  history: any;
  location: any;
  // Customizable Area End
}

interface S {
  // Customizable Area Start
  lifeStyleCardId: string;
  clickShow: boolean;
  lifeStyleCardselected: string;
  lifestyleCardData: any;
  loader: boolean;
  // Customizable Area End
}

interface SS {
  id: any;
}

export default class OffsetOneTimeLifeStyleController extends BlockComponent<
  Props,
  S,
  SS
> {
  apiLifeStye: string = "";

  constructor(props: Props) {
    super(props);
    this.receive = this.receive.bind(this);
    // Customizable Area Start
    this.subScribedMessages = [
      getName(MessageEnum.AccoutLoginSuccess),
      getName(MessageEnum.RestAPIResponceMessage),
      getName(MessageEnum.SessionSaveMessage),
      getName(MessageEnum.SessionResponseMessage),
    ];
    
    this.state = {
      clickShow : false,
      loader:false,
      lifestyleCardData: [],
      lifeStyleCardselected : "",
      lifeStyleCardId:""
    }


    // Customizable Area End
    runEngine.attachBuildingBlock(this as IBlock, this.subScribedMessages);
  }

  async receive(from: string, message: Message) {
    // Customizable Area Start
    runEngine.debugLog("Message Received", message);

    if (getName(MessageEnum.RestAPIResponceMessage) === message.id) {
      const apiRequestCallId = message.getData(
        getName(MessageEnum.RestAPIResponceDataMessage)
      );
      const responseJson = message.getData(
        getName(MessageEnum.RestAPIResponceSuccessMessage)
      );
      const errorReponse = message.getData(
        getName(MessageEnum.RestAPIResponceErrorMessage)
      );
      if (apiRequestCallId === this.apiLifeStye) {
        if (responseJson != null) {
          if (responseJson.data && responseJson.data.length > 0) {
            this.setState({
              lifestyleCardData: responseJson.data,
            });
            setTimeout(() => {
              this.setState({
                loader: false,
              });
            }, 200);
          } else {
            this.setState({
              loader: false,
            });
            this.parseApiErrorResponse(responseJson);
          }
        }
        this.setState({
          loader: false,
        });
        this.parseApiCatchErrorResponse(errorReponse);
      }
    }
    // Customizable Area End
  }

  async componentDidMount() {
    this.OffsetLifestyleGetData();
  }

  handleClickFunction = () => {
    if(this.state.clickShow === false){
      this.setState({
        clickShow : true,
      })
    }
    else{
      this.setState({
        clickShow : false,
      })
    }
    
  }

  handleSelectLifeStyleCard = (value: any, data: any) => {
    this.setState({
      lifeStyleCardId: value,
      lifeStyleCardselected: data,
    });
  };
  handleSelectLifeStyleCardMobile = (item: any, data: any) => {
    const { key } = data;
    this.setState({
      lifeStyleCardId: key,
      lifeStyleCardselected: item,
    });
  };

  getEmptyState = () => ({
    lifeStyleCardId: "1",
    lifeStyleCardselected: "Individual Offset",
    lifestyleCardData: [],
    loader: false,
  });

  OffsetLifestyleGetData = async () => {
    const Token = localStorage.getItem("token") || "";
    this.setState({
      loader: true,
    });
    const header = {
      "Content-Type": configJSON.validationApiContentType,
      token: Token,
    };
    const requestMessage = new Message(
      getName(MessageEnum.RestAPIRequestMessage)
    );
    this.apiLifeStye = requestMessage.messageId;
    requestMessage.addData(
      getName(MessageEnum.RestAPIResponceEndPointMessage),
      configJSON.OffsetLifeStyleGetData
    );

    requestMessage.addData(
      getName(MessageEnum.RestAPIRequestBaseURLMessage),
      configJSON.baseURL
    );
    requestMessage.addData(
      getName(MessageEnum.RestAPIRequestHeaderMessage),
      JSON.stringify(header)
    );
    requestMessage.addData(
      getName(MessageEnum.RestAPIRequestMethodMessage),
      configJSON.GetApiMethodType
    );
    runEngine.sendMessage(requestMessage.id, requestMessage);
  };
  // Customizable Area End
}
