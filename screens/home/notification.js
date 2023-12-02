//Notification
import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

export function NOTIFICATIONS({ navigation }) {
  return (
    <View style={styles.notifications}>
      <View style={[styles.notificationsChild, styles.notificationsPosition]} />
      <View style={[styles.notificationsItem, styles.notificationsPosition]} />
      <View style={[styles.notificationsInner, styles.rectangleViewPosition]} />
      <Text style={styles.eBeatNotifications}>#E-BEAT-NOTIFICATIONS</Text>
      <View style={[styles.vectorWrapper, styles.vectorSpaceBlock]}>
        <Image
          style={styles.vectorIcon3}
          resizeMode="cover" /*source="Vector.png"*/
        />
      </View>
      <View style={[styles.rectangleView, styles.rectangleViewPosition]} />
      <Text style={[styles.alert, styles.alertTypo]}>ALERT</Text>
      <View style={[styles.vectorParent, styles.vectorSpaceBlock]}>
        <Image
          style={styles.vectorIcon4}
          resizeMode="cover" /*source="Vector.png"*/
        />
        <Image
          style={styles.vectorIcon5}
          resizeMode="cover" /*source="Vector.png"*/
        />
      </View>
      <View style={styles.notificationsChild1} />
      <Image
        style={styles.ellipseIcon}
        resizeMode="cover" /*source="Ellipse 1.png"*/
      />
      <Text
        style={[styles.officer1, styles.officerPosition]}
      >{`OFFICER 1 `}</Text>
      <Text style={[styles.beatOfficer, styles.officerPosition]}>
        Beat Officer
      </Text>
      <Text style={[styles.dearOfficerI1, styles.alertTypo]}>
        {" "}
        Dear officer, I have completeed the tasks that has been...
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  notificationsPosition: {
    height: 25,
    backgroundColor: "#d9d9d9",
    width: 360,
    left: "50%",
    marginLeft: -180,
    position: "absolute",
  },
  rectangleViewPosition: {
    height: 75,
    left: "50%",
    position: "absolute",
  },
  vectorSpaceBlock: {
    padding: 5,
    position: "absolute",
  },
  alertTypo: {
    fontFamily: "Roboto",
    textAlign: "left",
    position: "absolute",
  },
  officerPosition: {
    color: "#002ed0",
    left: 110,
    fontFamily: "Roboto",
    textAlign: "left",
    position: "absolute",
  },
  notificationsChild: {
    top: 0,
  },
  notificationsItem: {
    bottom: 0,
  },
  notificationsInner: {
    top: 25,
    backgroundColor: "#8b98d8",
    width: 360,
    marginLeft: -180,
    height: 75,
  },
  eBeatNotifications: {
    marginLeft: -125,
    top: 50,
    fontFamily: "Roboto",
    width: 235,
    textAlign: "left",
    color: "#000",
    letterSpacing: 1.2,
    fontSize: 20,
    left: "50%",
    position: "absolute",
  },
  vectorIcon3: {
    width: 20,
    height: 20,
  },
  vectorWrapper: {
    top: 45,
    left: 21,
    flexDirection: "row",
  },
  rectangleView: {
    marginLeft: -100,
    top: 617,
    borderRadius: 100,
    backgroundColor: "#f98484",
    width: 200,
  },
  alert: {
    top: 642,
    left: 105,
    color: "#fff",
    fontFamily: "Roboto",
    letterSpacing: 1.2,
    fontSize: 20,
  },
  vectorIcon4: {
    width: 25,
    height: 22,
    zIndex: 0,
  },
  vectorIcon5: {
    height: "40.83%",
    width: "36.41%",
    top: "32.5%",
    right: "31.79%",
    bottom: "26.67%",
    left: "31.79%",
    maxWidth: "100%",
    maxHeight: "100%",
    zIndex: 1,
    position: "absolute",
    overflow: "hidden",
  },
  vectorParent: {
    top: 639,
    left: 217,
  },
  notificationsChild1: {
    marginLeft: -165,
    top: 133,
    borderRadius: 15,
    backgroundColor: "#bbc7e7",
    width: 330,
    height: 90,
    left: "50%",
    position: "absolute",
  },
  ellipseIcon: {
    top: 115,
    left: 35,
    width: 65,
    height: 65,
    position: "absolute",
  },
  officer1: {
    top: 138,
    fontSize: 17,
    letterSpacing: 1,
  },
  beatOfficer: {
    top: 161,
    fontSize: 10,
    letterSpacing: 0.6,
  },
  dearOfficerI1: {
    marginLeft: -150,
    top: 178,
    fontSize: 13,
    letterSpacing: 0.8,
    width: 300,
    height: 39,
    color: "#000",
    fontFamily: "Roboto",
    left: "50%",
  },
  notifications: {
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default NOTIFICATIONS;
