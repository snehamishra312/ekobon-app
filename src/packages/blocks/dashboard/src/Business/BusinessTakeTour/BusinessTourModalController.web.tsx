import { IBlock } from "../../../../../framework/src/IBlock";
import { BlockComponent } from "../../../../../framework/src/BlockComponent";
import MessageEnum, {
  getName,
} from "../../../../../framework/src/Messages/MessageEnum";
import { runEngine } from "../../../../../framework/src/RunEngine";
import { HISTORY } from "../../../../../components/src/comman";
// Customizable Area Start
// Customizable Area End


export interface Props {
  // Customizable Area Start
  // history: any;
  headerText: any;
  modalCount: any;
  bodyText: any;
  bgImage: any;
  backbtn: boolean;
  // Customizable Area End
}

interface S {
  // Customizable Area Start
  isModalVisible: boolean;
  // Customizable Area End
}

interface SS {
  id: any;
}

export default class BusinessTourModalController extends BlockComponent<
  Props,
  S,
  SS
> {
  constructor(props: Props) {
    super(props);

    // Customizable Area Start
    this.subScribedMessages = [
      getName(MessageEnum.AccoutLoginSuccess),
      getName(MessageEnum.RestAPIResponceMessage),
      getName(MessageEnum.SessionSaveMessage),
      getName(MessageEnum.SessionResponseMessage),
    ];

    this.state = this.getEmptyState();

    // Customizable Area End
    runEngine.attachBuildingBlock(this as IBlock, this.subScribedMessages);
  }

  async componentDidMount() {
    super.componentDidMount();
  }

  getEmptyState = () => ({
    isModalVisible: true,
  });
  
  handleModalClose = () => {
    HISTORY.push("/business/dashboard");
  };

  handleRedirectNext = () => {
    const checkPathname = window.location.pathname;

    if (checkPathname == "/business/tour-begin") {
      HISTORY.push("/business/tour-1");
    } else if (checkPathname == "/business/tour-1") {
      HISTORY.push("/business/tour-2");
    } else if (checkPathname == "/business/tour-2") {
      HISTORY.push("/business/tour-3");
    } else if (checkPathname == "/business/tour-3") {
      HISTORY.push("/business/tour-4");
    } else if (checkPathname == "/business/tour-4") {
      HISTORY.push("/business/tour-5");
    } else if (checkPathname == "/business/tour-5") {
      HISTORY.push("/business/tour-6");
    } else if (checkPathname == "/business/tour-6") {
      HISTORY.push("/business/tour-7");
    } else if (checkPathname == "/business/tour-7") {
      HISTORY.push("/business/tour-8");
    } else if (checkPathname == "/business/tour-8") {
      HISTORY.push("/business/tour-9");
    } else if (checkPathname == "/business/tour-9") {
      HISTORY.push("/business/tour-10");
    } else if (checkPathname == "/business/tour-10") {
      HISTORY.push("/business/tour-end");
    } else if (checkPathname == "/business/tour-end") {
      HISTORY.push("/business/dashboard");
    } else {
      HISTORY.push("/business/dashboard");
    }
    // console.log()
  };

  handleRedirectBack = () => {
    const checkPathname = window.location.pathname;

    if (checkPathname == "/business/tour-2") {
      HISTORY.push("/business/tour-1");
    } else if (checkPathname == "/business/tour-3") {
      HISTORY.push("/business/tour-2");
    } else if (checkPathname == "/business/tour-4") {
      HISTORY.push("/business/tour-3");
    } else if (checkPathname == "/business/tour-5") {
      HISTORY.push("/business/tour-4");
    } else if (checkPathname == "/business/tour-6") {
      HISTORY.push("/business/tour-5");
    } else if (checkPathname == "/business/tour-7") {
      HISTORY.push("/business/tour-6");
    } else if (checkPathname == "/business/tour-8") {
      HISTORY.push("/business/tour-7");
    } else if (checkPathname == "/business/tour-9") {
      HISTORY.push("/business/tour-8");
    } else if (checkPathname == "/business/tour-10") {
      HISTORY.push("/business/tour-9");
    } else{
      HISTORY.push("/business/dashboard");
    }
    // console.log()
  };
  // Customizable Area End
}
