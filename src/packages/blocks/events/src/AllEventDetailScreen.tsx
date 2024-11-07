import React, { Component } from "react";
// Customizable Area Start
import { View, Text, Image, TouchableOpacity, StatusBar } from "react-native";

import styles from "./AllEventStyle";
import {
  edit,
  birthday,
  school_drop,
  school_pick,
  getTogether,
  meeting,
  outForCoffee,
  gym,
  flight,
  vet,
  rent,
  fees,
  activity,
  custom,
  doctor,
} from "./assets";
import moment from "moment";

const optionsIconMap: any = {
  Birthday: birthday,
  "School Drop Off": school_drop,
  "School Pick Up": school_pick,
  "Get Together": getTogether,
  Meeting: meeting,
  "Out for Coffee": outForCoffee,
  Gym: gym,
  Flight: flight,
  Vet: vet,
  Rent: rent,
  Fees: fees,
  Activity: activity,
  Custom: custom,
  Doctor: doctor,
};
// Customizable Area End

import AllEventController, { Props } from "./AllEventController";

export default class AllEventDetailScreen extends AllEventController {
  constructor(props: Props) {
    super(props);
    // Customizable Area Start
    // Customizable Area End
  }

  // Customizable Area Start
  renderEvent = (selectedUpcomingEvent: any) => {
    console.log(
      "[AllEventDetailScreen::renderEvent] selectedEvent=",
      selectedUpcomingEvent
    );
    return (
      <View style={styles.detailContainer}>
        <View style={styles.detailProfileContainer}>
          <View style={styles.detailProfileContent}>
            <View style={styles.detailProfileImageContent}>
              <Image
                source={
                  selectedUpcomingEvent?.user?.data?.profile_image && {
                    uri: selectedUpcomingEvent?.user?.data?.profile_image,
                  }
                }
                style={styles.detailProfileImage}
                resizeMode="cover"
              />
            </View>
            <View style={styles.detailProfileTitleContent}>
              {selectedUpcomingEvent?.event_type ? (
                <>
                  <Text style={styles.detailProfileTitle}>
                    {selectedUpcomingEvent?.title}
                  </Text>

                  <View style={styles.detailProfileEventTypeContent}>
                    <Image
                      source={optionsIconMap[selectedUpcomingEvent?.event_type]}
                      style={styles.detailProfileEventTypeImage}
                      resizeMode="contain"
                    />
                    <Text style={styles.detailProfileEventTypeText}>
                      {selectedUpcomingEvent?.event_type?.toUpperCase()}
                    </Text>
                  </View>
                </>
              ) : (
                <>
                  <Text style={styles.detailProfileUpcomingTitle}>
                    {selectedUpcomingEvent?.title}
                  </Text>
                </>
              )}
            </View>
          </View>
          {selectedUpcomingEvent?.event_type && (
            <TouchableOpacity
              testID={"btnEdit"}
              onPress={() =>
                this.props.navigation.navigate("AddEventDetail", {
                  event: selectedUpcomingEvent,
                })
              }
            >
              <Image
                style={styles.editImage}
                source={edit}
                resizeMode="contain"
              />
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.detailProfileDateTimeContent}>
          <View style={styles.detailProfileDateTimeHeaderContent}>
            <Text style={styles.detailProfileDateTimeHeaderTime}>Time</Text>
            <Text style={styles.detailProfileDateTimeHeaderDate}>Date</Text>
          </View>
          <View style={styles.detailProfileDateTimeValueContent}>
            {selectedUpcomingEvent?.event_type ? (
              <Text style={styles.detailProfileDateTimeValue}>
                {moment(selectedUpcomingEvent?.time).format("h:mm A")}
              </Text>
            ) : (
              <Text style={styles.detailProfileDateTimeValue}>
                {moment(selectedUpcomingEvent?.date).format("h:mm A")}
              </Text>
            )}
            <Text style={styles.detailProfileDateTimeValue}>
              {moment(selectedUpcomingEvent?.date).format("DD/MM/YYYY")}
            </Text>
          </View>
        </View>
        {selectedUpcomingEvent?.event_type && (
          <View style={styles.detailProfileDetailsContainer}>
            <View style={styles.detailProfileDetailsContent}>
              <Text style={styles.detailProfileDetailsTitle}>
                Assigned to :{" "}
              </Text>
              {selectedUpcomingEvent?.assign_to.map((item: any) => {
                return (
                  <Text style={styles.detailProfileDetailsDesc}>
                    {item.full_name}
                  </Text>
                );
              })}
            </View>
            <View style={styles.detailProfileDetailsContent}>
              <Text style={styles.detailProfileDetailsTitle}>
                Visibility :{" "}
              </Text>
              {selectedUpcomingEvent?.visibility.map((item: any) => {
                return (
                  <Text style={styles.detailProfileDetailsDesc}>
                    {item.full_name}
                  </Text>
                );
              })}
            </View>
            <View style={styles.detailProfileDetailsContent}>
              <Text style={styles.detailProfileDetailsTitle}>Notify : </Text>
              <Text style={styles.detailProfileDetailsDesc}>
                {selectedUpcomingEvent?.notify}
              </Text>
            </View>
            <View style={styles.detailProfileDetailsContent}>
              <Text style={styles.detailProfileDetailsTitle}>Repeat : </Text>
              <Text style={styles.detailProfileDetailsDesc}>
                {selectedUpcomingEvent?.repeat}
              </Text>
            </View>
            <View style={styles.detailProfileDetailsContent}>
              <Text style={styles.detailProfileDetailsTitle}>Notes : </Text>
              <Text style={styles.detailProfileDetailsDesc}>
                {selectedUpcomingEvent?.notes}{" "}
              </Text>
            </View>
          </View>
        )}
      </View>
    );
  };
  // Customizable Area End

  render() {
    // Customizable Area Start
    const selectedUpcomingEvent = this.props.navigation.getParam(
      "selectedUpcomingEvent"
    );
    return (
      <View style={styles.container}>
        <StatusBar hidden />
        {this.renderEvent(selectedUpcomingEvent)}
      </View>
    );
    // Customizable Area End
  }

  // Customizable Area Start
  // Customizable Area End
}
