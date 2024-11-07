import React from "react";
// Customizable Area Start
import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import styles from "./AllEventStyle";
import {
  addEvent,
  close,
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

export default class AllEventScreen extends AllEventController {
  constructor(props: Props) {
    super(props);
    // Customizable Area Start
    // Customizable Area End
  }

  async componentDidMount() {
    // Customizable Area Start
    this.setState({
      allStartDate: moment().format("YYYY-MM-DD"),
      allEndDate: moment().endOf("month").format("YYYY-MM-DD"),
    });

    await this.checkLocalCalendarAuthetication();
    this.getToken();
    // Customizable Area End
  }

  // Customizable Area Start
  renderList = (data: any) => {
    const item = data.item;
    const date = moment(item.date).format("DD MMM YY");
    return (
      <TouchableOpacity
        key={`event-item-${item.id}`}
        style={styles.paListItemContent}
        onPress={() =>
          this.props.navigation.navigate("AllEventDetail", {
            selectedUpcomingEvent: item,
          })
        }
      >
        <View style={styles.paListItemHeader}>
          {item.event_type ? (
            <View style={styles.paListItemEventContent}>
              <Image
                source={optionsIconMap[item?.event_type]}
                style={styles.paListItemEventImage}
                resizeMode="contain"
              />
              <Text style={styles.paListItemEventText}>
                {item?.event_type?.toUpperCase()}
              </Text>
            </View>
          ) : (
            <View style={styles.paListItemCalendarContent} />
          )}
          <Text style={styles.paListItemCalendarText}>{date}</Text>
        </View>
        <Text style={styles.paListItemTitle}>{item?.title}</Text>
        <Text style={styles.paListItemNotes}>{item?.notes}</Text>
        <View style={styles.paListItemAssignContent}>
          {item?.assign_to.map((item: any) => {
            return (
              <View style={styles.paListItemAssignListContent}>
                <Image
                  source={item.profile_image && { uri: item.profile_image }}
                  style={styles.paListItemAssignListImage}
                  resizeMode="cover"
                />
              </View>
            );
          })}
          {item?.assign_to.map((item: any) => {
            return (
              <Text style={styles.paListItemAssignTitle}>{item.full_name}</Text>
            );
          })}
        </View>
      </TouchableOpacity>
    );
  };

  renderEmptyList = () => {
    return (
      <View style={styles.emptyDataView}>
        <View style={styles.emptyDataImageView}>
          <Image
            style={styles.emptyDataImage}
            source={close}
            resizeMode="contain"
          />
        </View>
        <Text style={styles.emptyDataText}>No Upcoming Event!</Text>
      </View>
    );
  };
  // Customizable Area Start

  render() {
    // Customizable Area Start
    return (
      <View style={styles.container}>
        <View style={styles.eventListContent}>
          <FlatList
            keyExtractor={(item) => `event-item-${item.id.toString()}`}
            data={[...this.state.allEventData]}
            renderItem={this.renderList}
          />
        </View>
        <TouchableOpacity
          style={styles.btnAddTask}
          onPress={() => this.props.navigation.navigate("Events")}
        >
          <Image style={styles.imgAddTask} source={addEvent} />
        </TouchableOpacity>
      </View>
    );
    // Customizable Area End
  }

  // Customizable Area Start
  // Customizable Area End
}
