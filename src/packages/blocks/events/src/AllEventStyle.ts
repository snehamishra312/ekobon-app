import { StyleSheet, Platform } from "react-native";
import scale, { verticalScale } from "../../../components/src/Scale";
// Customizable Area Start
export default StyleSheet.create({
  container: {
    backgroundColor: "#000000",
    flex: 1,
  },
  header: {
    marginTop: verticalScale(40),
    paddingHorizontal: scale(23),
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  backBtn: {
    marginTop: verticalScale(-8),
    width: scale(17),
    height: scale(20),
  },
  allEventText: {
    color: "#ffffff",
    fontSize: scale(22),
    alignSelf: "center",
  },
  logoImage: {
    width: scale(14),
    height: scale(12),
    marginTop: verticalScale(4),
  },
  calender: {
    // backgroundColor:"#fff",
    width: "100%",
    height: scale(280),
    marginTop: scale(5),
  },
  eventDetail: {
    width: "100%",
    // height:scale(385),
    flex: 1,
    backgroundColor: "rgba(255,255,255,0.1)",
    borderTopRightRadius: 21,
    borderTopLeftRadius: 21,
  },
  eventHeader: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: scale(15),
  },
  eventHeaderText: {
    fontSize: 18,
  },
  eventHeaderEmpty: {
    alignItems: "center",
    marginTop: scale(10),
  },
  eventDataView: {
    flex: 1,
    padding: 20,
  },
  emptyDataView: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: scale(50),
  },
  emptyDataImageView: {
    width: 120,
    height: 120,
    backgroundColor: "#000",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyDataImage: {
    height: 30,
    width: 30,
    alignSelf: "center",
  },
  emptyDataText: {
    fontSize: 16,
    color: "#fff",
    marginTop: scale(15),
  },
  modalview: {
    backgroundColor: "#1a1a1a",
    height: scale(275),
    width: scale(330),
    borderRadius: scale(15),
    marginVertical: scale(130),
    // marginHorizontal: scale(60),
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },

  modalbuttonview: {
    // justifyContent: 'space-between',
    flexDirection: "row",
  },

  cancelbtn: {
    height: scale(35),
    width: scale(119),
    borderRadius: scale(21),
    borderColor: "#cdcdcd",
    borderWidth: scale(1),
    alignItems: "center",
    justifyContent: "center",
  },
  btnOk: {
    marginLeft: scale(20),
  },

  savebtn: {
    height: scale(35),
    width: scale(119),
    borderRadius: scale(21),
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#45ebe1",
    marginLeft: scale(20),
  },
  btntext: {
    fontSize: scale(14),
    // fontFamily: FONTS.GilroyBold,
    fontWeight: "bold",
    color: "#fff",
  },
  cellContainer: {
    width: scale(329),
    height: scale(41),
    borderRadius: scale(21),
    backgroundColor: "#1a1a1a",
    flexDirection: "row",
    marginTop: verticalScale(15),
    justifyContent: "space-between",
    alignSelf: "center",
    alignItems: "center",
    fontSize: scale(14),
    color: "#ffffff",
    paddingLeft: 27,
  },
  text: {
    fontSize: scale(14),
    width: scale(200),
    color: "#ffffff",
    opacity: 60,
  },
  PlusIcon: {
    marginRight: scale(20),
    width: scale(14),
    height: scale(14),
  },

  // navigation right - filter
  headerBtnFilter: {
    width: scale(20),
    height: scale(20),
    justifyContent: "center",
    alignItems: "center",
  },

  filterContent: {
    height: scale(90),
    width: scale(170),
    backgroundColor: "#fff",
    position: "absolute",
    right: scale(20),
    top: scale(90),
    borderRadius: 5,
  },
  filterBtnList: {
    paddingTop: 20,
    paddingLeft: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  filterBtnCalendar: {
    paddingTop: 10,
    paddingLeft: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  filterBtnContent: {
    width: scale(16),
    height: scale(16),
    borderRadius: 8,
    borderColor: "#000",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: Platform.OS === "ios" ? scale(-6) : 0,
  },
  filterBtnImage: {
    width: scale(16),
    height: scale(16),
  },
  filterBtnTextDesc: {
    fontSize: 18,
    color: "#000",
    marginLeft: scale(5),
  },

  // date picker
  datePickerContent: {
    justifyContent: "center",
    alignItems: "center",
  },

  // myPA list
  paListItemContent: {
    flex: 1,
    width: "100%",
    backgroundColor: "rgba(255,255,255,0.1)",
    marginBottom: 10,
    borderRadius: 10,
    padding: 15,
  },
  paListItemHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  paListItemEventContent: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
    backgroundColor: "#70ff73",
    paddingHorizontal: 5,
    paddingVertical: 3,
    borderRadius: 6,
  },
  paListItemEventImage: {
    width: 15,
    height: 15,
    marginRight: scale(6),
  },
  paListItemEventText: {
    fontSize: 12,
    color: "#000",
    fontWeight: "500",
    marginTop: Platform.OS === "ios" ? scale(4) : 0,
  },
  paListItemCalendarContent: {
    justifyContent: "center",
    alignSelf: "stretch",
    paddingHorizontal: 5,
    borderRadius: 6,
    width: 0,
  },
  paListItemCalendarText: {
    color: "#fff",
    fontSize: 12,
    opacity: 0.5,
  },

  paListItemTitle: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "500",
    marginTop: scale(8),
  },
  paListItemNotes: {
    fontSize: 14,
    color: "#ededed",
    fontWeight: "400",
    marginTop: scale(8),
  },
  paListItemProfileContent: {
    flexDirection: "row",
    marginTop: scale(8),
    alignItems: "center",
  },
  paListItemProfileImageContent: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "#878787",
  },

  paListItemProfileImage: {
    width: "100%",
    height: "100%",
    borderRadius: 15,
  },
  paListItemProfileTitle: {
    fontSize: 14,
    color: "#fff",
    marginLeft: scale(10),
  },
  paListItemAssignContent: {
    flexDirection: "row",
    marginTop: scale(15),
    alignItems: "center",
  },
  paListItemAssignListContent: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: "#878787",
  },
  paListItemAssignListImage: {
    width: "100%",
    height: "100%",
    borderRadius: 15,
  },
  paListItemAssignTitle: {
    fontSize: 12,
    color: "#fff",
    opacity: 0.5,
    marginLeft: scale(10),
  },

  eventListContent: {
    flex: 1,
    padding: 20,
  },

  btnAddTask: {
    backgroundColor: "white",
    position: "absolute",
    height: 70,
    width: 70,
    borderRadius: 150,
    bottom: 22,
    right: 22,
    justifyContent: "center",
    alignSelf: "flex-end",
  },
  imgAddTask: {
    height: 20,
    width: 20,
    alignSelf: "center",
  },
  detailContainer: {
    backgroundColor: "#1a1a1a",
    margin: scale(25),
    borderRadius: 10,
    padding: scale(20),
  },
  detailProfileContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  detailProfileContent: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  detailProfileImageContent: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#878787",
  },
  detailProfileImage: {
    width: "100%",
    height: "100%",
    borderRadius: 30,
  },
  detailProfileLocalContent: {
    marginLeft: scale(35),
    justifyContent: "space-evenly",
  },
  detailProfileLocalTitle: {
    fontSize: 15,
    color: "#fff",
    fontWeight: "bold",
  },
  detailProfileLocalDesc: {
    fontSize: 13,
    color: "#fff",
  },
  detailProfileTitleContent: {
    marginLeft: scale(10),
  },
  detailProfileUser: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
  },
  detailProfileTitle: {
    fontSize: 14,
    color: "#fff",
  },
  detailProfileEventTypeContent: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
    backgroundColor: "#70ff73",
    paddingHorizontal: 5,
    paddingVertical: 3,
    borderRadius: 6,
    marginTop: scale(10),
  },
  detailProfileEventTypeImage: {
    width: 15,
    height: 15,
    marginRight: scale(6),
  },
  detailProfileEventTypeText: {
    fontSize: 12,
    color: "#000",
    fontWeight: "500",
    marginTop: Platform.OS === "ios" ? scale(4) : 0,
  },

  detailProfileUpcomingUser: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
    marginLeft: 15,
  },
  detailProfileUpcomingTitle: {
    fontSize: 14,
    color: "#fff",
    marginLeft: 15,
  },
  detailProfileDateTimeContent: {
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  detailProfileDateTimeHeaderContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
  },
  detailProfileDateTimeHeaderTime: {
    fontSize: 14,
    color: "#fff",
    textAlign: "right",
  },
  detailProfileDateTimeHeaderDate: {
    fontSize: 14,
    color: "#fff",
  },
  detailProfileDateTimeValueContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "75%",
    marginTop: scale(10),
  },
  detailProfileDateTimeValue: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
  },
  detailProfileDetailsContainer: {
    padding: 15,
  },
  detailProfileDetailsContent: {
    marginTop: scale(8),
    flexDirection: "row",
    alignItems: "center",
  },
  detailProfileDetailsTitle: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
  },
  detailProfileDetailsDesc: {
    fontSize: 16,
    color: "#fff",
    opacity: 0.6,
  },
  editImage: {
    width: scale(18),
    height: scale(18),
    marginTop: verticalScale(2),
  },
});
// Customizable Area End
