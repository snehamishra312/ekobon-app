import { IBlock } from "../../../framework/src/IBlock";
import { Message } from "../../../framework/src/Message";
import { BlockComponent } from "../../../framework/src/BlockComponent";
import MessageEnum, {
  getName,
} from "../../../framework/src/Messages/MessageEnum";
import { runEngine } from "../../../framework/src/RunEngine";

// Customizable Area Start
import RNCalendarEvents from "react-native-calendar-events";
import moment from "moment";

const color = ["#6bff65", "#6bff65", "#6bff65"];
// Customizable Area End

export const configJSON = require("./config");

export interface Props {
  navigation: any;
  id: string;
  // Customizable Area Start
  // Customizable Area End
}

interface S {
  // Customizable Area Start
  allMenuFlag: boolean;
  allFilter: boolean;
  showMonthPickerModal: boolean;
  showMonth: boolean;
  date: any;
  month: any;
  eventDetailFlag: boolean;
  allEventData: any[];
  allCalenderData: any[];
  markedDate: any;
  allEventDataDateWise: any[];
  selectedDate: string;
  allStartDate: string;
  allEndDate: string;
  isAuthozied: boolean;
  totalAllEvent: any[];
  totalAllLocal: any[];
  allLocalDataDateWise: any[];
  token: string;
  // Customizable Area End
}

interface SS {
  id: any;
  // Customizable Area Start
  // Customizable Area End
}

export default class AllEventController extends BlockComponent<Props, S, SS> {
  // Customizable Area Start
  apiGetAllEventId: any;
  // Customizable Area End
  constructor(props: Props) {
    super(props);
    this.receive = this.receive.bind(this);

    this.subScribedMessages = [
      // Customizable Area Start
      getName(MessageEnum.RestAPIResponceMessage),
      getName(MessageEnum.SessionResponseMessage),
      // Customizable Area End
    ];

    this.state = {
      // Customizable Area Start
      allMenuFlag: false,
      allFilter: false,
      showMonthPickerModal: false,
      showMonth: false,
      date: new Date(Date.now() + 6 * 1000),
      eventDetailFlag: false,
      allEventData: [],
      allCalenderData: [],
      markedDate: {},
      allEventDataDateWise: [],
      selectedDate: "",
      allStartDate: "",
      allEndDate: "",
      month: new Date(Date.now() + 6 * 1000),
      isAuthozied: false,
      totalAllEvent: [],
      totalAllLocal: [],
      allLocalDataDateWise: [],
      token: "",
      // Customizable Area End
    };
    // Customizable Area End
    runEngine.attachBuildingBlock(this as IBlock, this.subScribedMessages);
  }

  async componentDidMount() {
    this.getToken();
    if (this.isPlatformWeb() === false) {
      this.props.navigation.addListener("willFocus", () => {
        this.getToken();
      });
    }
    // Customizable Area Start
    // Customizable Area End
  }

  getToken = () => {
    const msg: Message = new Message(
      getName(MessageEnum.SessionRequestMessage)
    );
    this.send(msg);
  };

  async receive(from: string, message: Message) {
    // Customizable Area Start
    runEngine.debugLog("Message Recived", message);

    if (getName(MessageEnum.SessionResponseMessage) === message.id) {
      let token = message.getData(getName(MessageEnum.SessionResponseToken));
      runEngine.debugLog("TOKEN", token);
      this.setState({ token: token });
      await this.getAllEventAPI();
    }

    if (
      getName(MessageEnum.RestAPIResponceMessage) === message.id &&
      this.apiGetAllEventId !== null &&
      this.apiGetAllEventId ===
        message.getData(getName(MessageEnum.RestAPIResponceDataMessage))
    ) {
      this.apiGetAllEventId = null;

      var responseJson = message.getData(
        getName(MessageEnum.RestAPIResponceSuccessMessage)
      );

      var errorResponse = message.getData(
        getName(MessageEnum.RestAPIResponceErrorMessage)
      );

      if (responseJson && responseJson.data) {
        this.requestSuccessUpconingCallBack(responseJson);
      } else {
        //Check Error Response
        this.requestFailureUpconingCallBack(errorResponse);
      }
      this.parseApiCatchErrorResponse(errorResponse);
    }
    // Customizable Area End
  }

  // Customizable Area Start
  rebuildEventData = (data: any[]) => {
    let allEvents: any[] = [];
    Object.keys(data).map((eventType: any) => {
      allEvents = allEvents.concat(allEvents, data[eventType]);
    });
    return allEvents;
  };

  requestSuccessUpconingCallBack = async (responseJson: any) => {
    let { data } = responseJson;
    this.setState(
      {
        allEventData: this.rebuildEventData(data),
      },
      () => this.filterDataByCurrentDate(moment().format("YYYY-MM-DD"))
    );
  };

  requestFailureUpconingCallBack = (errorResponse: any) => {
    console.log(
      "@@@  Get User Profile Request Error Response =========",
      errorResponse
    );
  };

  onAllEventFilterPress = () => {
    this.setState((prevState) => ({
      allMenuFlag: !prevState.allMenuFlag,
    }));
  };

  onAllEventItemFilterPress = (filter: string) => {
    if (filter === "List") {
      this.setState({ allFilter: true });
    } else {
      this.setState({ allFilter: false });
    }
    this.setState((prevState) => ({
      allMenuFlag: !prevState.allMenuFlag,
    }));
  };

  getAllEventAPI = async () => {
    const header = {
      token: this.state.token,
    };

    const requestMessage = new Message(
      getName(MessageEnum.RestAPIRequestMessage)
    );

    this.apiGetAllEventId = requestMessage.messageId;

    requestMessage.addData(
      getName(MessageEnum.RestAPIResponceEndPointMessage),
      `/events/events?from=${this.state.allStartDate}&to=${this.state.allEndDate}`
    );
    requestMessage.addData(
      getName(MessageEnum.RestAPIRequestHeaderMessage),
      JSON.stringify(header)
    );

    requestMessage.addData(
      // @@JFR
      getName(MessageEnum.RestAPIRequestMethodMessage),
      "GET"
    );
    runEngine.sendMessage(requestMessage.id, requestMessage);
    return true;
  };

  filterDataByCurrentDate = (currentDate: any) => {
    const allData = [...this.state.allEventData];
    const data: any = [];
    allData &&
      allData instanceof Array &&
      allData.filter((item) => {
        if (item.attributes?.date === currentDate) {
          data.push(item);
        }
      });

    this.setState({ allEventDataDateWise: data, selectedDate: currentDate });
  };

  checkLocalCalendarAuthetication = () => {
    RNCalendarEvents.checkPermissions(true).then(
      (result: string) => {
        if (result === "authorized") {
          this.setState({ isAuthozied: true });
          this.getUpcomingLocalEventEvent();
        } else {
          // this.setState({isAuthozied: false})
          this.getLocalCalendarAuthetication();
        }
      },
      (result: any) => {
        console.error(result);
      }
    );
  };

  getLocalCalendarAuthetication = () => {
    RNCalendarEvents.requestPermissions(true).then(
      (result: any) => {
        // Alert.alert('Read-only Auth requested', result);
        this.setState({ isAuthozied: true });
        this.getUpcomingLocalEventEvent();
      },
      (result: any) => {
        console.error(result);
      }
    );
  };

  getUpcomingLocalEventEvent = () => {
    if (this.state.isAuthozied) {
      const findCalendarsPromise = RNCalendarEvents.findCalendars();
      const startDate = moment().format("YYYY-MM-DD") + "T" + "00:00:00.000Z";
      const endDate =
        moment().endOf("month").format("YYYY-MM-DD") + "T" + "23:59:59.000Z";
      findCalendarsPromise
        .then((calendars: any[]) => {
          let totalEvent: any = [];
          const calendrIds = calendars.map((it: { id: any }) => it.id);
          let fetchCalendarEventsPromise = RNCalendarEvents.fetchAllEvents(
            startDate,
            endDate,
            calendrIds
          );
          fetchCalendarEventsPromise.then((events: any) => {
            totalEvent = [...totalEvent, ...events];
            this.setState({ totalAllEvent: totalEvent }, () =>
              this.modifyLocalCalendarData()
            );
          });
        })
        .catch((error: any) => {
          console.log("error ", error);
        });
    }
  };

  convertDate = (str: any) => {
    var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [day, mnth, date.getFullYear()].join("/");
  };

  filterDataByDate = (selectedDate: any) => {
    const upcomingData = [...this.state.allEventData];
    const data: any = [];
    upcomingData &&
      upcomingData instanceof Array &&
      upcomingData.filter((item) => {
        if (item.attributes?.date === selectedDate.dateString) {
          data.push(item);
        }
      });

    const upcomingLocalData = [...this.state.totalAllLocal];
    const dataLocal: any = [];
    upcomingLocalData &&
      upcomingLocalData instanceof Array &&
      upcomingLocalData.filter((item) => {
        if (
          moment(item.attributes?.date).format("YYYY-MM-DD") ===
          selectedDate.dateString
        ) {
          dataLocal.push(item);
        }
      });

    this.setState({
      allEventDataDateWise: data,
      allLocalDataDateWise: dataLocal,
      selectedDate: selectedDate.dateString,
    });
  };

  modifyLocalCalendarData = () => {
    let newArr: any = [];
    this.state.totalAllEvent.map((item) => {
      const obj = {
        id: item.id,
        type: null,
        attributes: {
          title: item.title,
          time: null,
          date: item.startDate,
          latitude: null,
          longitude: null,
          email_account_id: null,
          notify: null,
          repeat: null,
          notes: null,
          created_at: null,
          updated_at: null,
          event_type: null,
          assigned_to: [],
          visibility: [],
          user: {
            data: {
              id: null,
              type: null,
              attributes: {
                full_name: item.calendar.title,
                full_phone_number: null,
                country_code: null,
                phone_number: null,
                email: null,
                activated: null,
                gender: null,
                date_of_birth: null,
                created_at: null,
                updated_at: null,
                device_id: null,
                device_type: null,
                unique_auth_id: null,
                custom_gender: null,
                profile_image: null,
              },
            },
          },
        },
      };
      newArr.push(obj);
    });
    this.setState({ totalAllLocal: newArr }, () =>
      this.filterLocalDataByCurrentDate(moment().format("YYYY-MM-DD"))
    );
  };

  filterLocalDataByCurrentDate = (currentDate: any) => {
    const upcomingData = [...this.state.totalAllLocal];
    const data: any = [];
    upcomingData &&
      upcomingData instanceof Array &&
      upcomingData.filter((item) => {
        if (
          moment(item.attributes?.date).format("YYYY-MM-DD") === currentDate
        ) {
          data.push(item);
        }
      });

    this.setState({ allLocalDataDateWise: data, selectedDate: currentDate });
  };

  getMarkedLocalData = (data: any, selectedDate: string) => {
    let obj: any = {};
    data.map((item: any) => {
      const _key = moment(item.attributes?.date).format("YYYY-MM-DD");
      if (!obj[_key]) {
        obj[_key] = { dots: [] };
      }
      const _index = obj[_key].dots.length;
      const _item = {
        key: item.attributes?.event_type,
        color: color[_index],
      };
      obj[_key] = { dots: [...obj[_key].dots, _item], selected: true };
    });
    return obj;
  };

  onValueChange = () => {};

  onCancelClick = () => {
    this.setState({
      showMonthPickerModal: false,
      month: new Date(Date.now() + 6 * 1000),
    });
  };

  onSaveClick = () => {
    this.setState({
      showMonthPickerModal: false,
      showMonth: true,
      allEventDataDateWise: [],
      allLocalDataDateWise: [],
    });
    if (
      moment(this.state.month).format("YYYY-MM") === moment().format("YYYY-MM")
    ) {
      this.filterDataByCurrentDate(moment().format("YYYY-MM-DD"));
      this.filterLocalDataByCurrentDate(moment().format("YYYY-MM-DD"));
    }
  };
  // Customizable Area End
}
