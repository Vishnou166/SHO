import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";

export function SELECTTIMINGS({ navigation }) {
  return (
    <View style={styles.assignPage4}>
      <View style={[styles.assignPage4Child, styles.assignPosition]} />
      <View style={[styles.assignPage4Item, styles.assignPosition]} />
      <View style={styles.assignPage4Inner} />
      <Text style={styles.eBeat}>#E-BEAT</Text>
      <Pressable
        style={[styles.frame, styles.vectorPosition]}
        onPress={() => {}}
      >
        <Image
          style={styles.vectorIcon3}
          resizeMode="cover" /*source="Vector.png"*/
        />
      </Pressable>
      <View style={[styles.vectorWrapper, styles.vectorPosition]}>
        <Image
          style={styles.vectorIcon4}
          resizeMode="cover" /*source="Vector.png"*/
        />
      </View>
      <Pressable
        style={[styles.vectorContainer, styles.vectorPosition]}
        onPress={() => {}}
      >
        <Image
          style={styles.vectorIcon3}
          resizeMode="cover" /*source="Vector.png"*/
        />
      </Pressable>
      <View style={[styles.rectangleView, styles.rectangleViewPosition]} />
      <View style={[styles.assignPage4Child1, styles.assignChildLayout]} />
      <View style={[styles.rectangleParent, styles.selectPosition]}>
        <View style={styles.frameLayout} />
        <View style={[styles.frameItem, styles.frameLayout]} />
        <View style={[styles.frameItem, styles.frameLayout]} />
      </View>
      <View style={[styles.assignPage4Child2, styles.assignChildLayout]} />
      <Text style={styles.beatXSdY}>BEAT-X SD-Y</Text>
      <Text style={[styles.selectTimings, styles.selectTypo]}>
        Select timings
      </Text>
      <Text style={[styles.selectOfficers, styles.selectTypo]}>
        Select officers
      </Text>
      <Pressable
        style={[styles.wrapper, styles.wrapperLayout]}
        onPress={() => {}}
      >
        <Image
          style={styles.icon}
          resizeMode="cover" /*source="Frame 21.png"*/
        />
      </Pressable>
      <Image
        style={[styles.assignPage4Child3, styles.wrapperLayout]}
        resizeMode="cover" /*source="Frame 22.png"*/
      />
      <View style={[styles.assignPage4Child4, styles.rectangleViewPosition]} />
      <Pressable
        style={styles.confirm}
        onPress={() => {
          navigation.navigate("Select");
        }}
      >
        <Text style={styles.selectTypo}>CONFIRM</Text>
      </Pressable>
      <Text style={[styles.am10am, styles.am2pmTypo]}>6AM-10AM</Text>
      <Text style={[styles.am2pm, styles.am2pmTypo]}>10AM-2PM</Text>
      <Text style={[styles.pm6pm, styles.am2pmTypo]}>2PM-6PM</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  assignPosition: {
    height: 25,
    backgroundColor: "#d9d9d9",
    width: 360,
    left: "50%",
    marginLeft: -180,
    position: "absolute",
  },
  vectorPosition: {
    padding: 5,
    flexDirection: "row",
    top: 47,
    position: "absolute",
  },
  rectangleViewPosition: {
    height: 50,
    left: "50%",
    position: "absolute",
  },
  assignChildLayout: {
    borderRadius: 50,
    height: 50,
    width: 350,
    backgroundColor: "#bbc7e7",
    marginLeft: -175,
    left: "50%",
    position: "absolute",
  },
  selectPosition: {
    left: "50%",
    position: "absolute",
  },
  frameLayout: {
    height: 35,
    width: 300,
    backgroundColor: "#bbc7e7",
  },
  selectTypo: {
    letterSpacing: 1.2,
    fontSize: 20,
    color: "#fff",
    fontFamily: "Roboto",
    textAlign: "left",
  },
  wrapperLayout: {
    height: 21,
    width: 28,
    position: "absolute",
  },
  am2pmTypo: {
    color: "#001097",
    letterSpacing: 1,
    fontSize: 17,
    fontFamily: "Roboto",
    textAlign: "left",
    left: "50%",
    position: "absolute",
  },
  assignPage4Child: {
    top: 0,
  },
  assignPage4Item: {
    bottom: 0,
  },
  assignPage4Inner: {
    top: 25,
    backgroundColor: "#8b98d8",
    height: 75,
    width: 360,
    marginLeft: -180,
    left: "50%",
    position: "absolute",
  },
  eBeat: {
    marginLeft: -120,
    fontSize: 30,
    letterSpacing: 1.8,
    fontFamily: "Roboto",
    color: "#000",
    width: 160,
    textAlign: "left",
    top: 47,
    left: "50%",
    position: "absolute",
  },
  vectorIcon3: {
    width: 20,
    height: 20,
  },
  frame: {
    left: 317,
  },
  vectorIcon4: {
    width: 18,
    height: 20,
  },
  vectorWrapper: {
    left: 279,
  },
  vectorContainer: {
    left: 21,
  },
  rectangleView: {
    top: 115,
    width: 350,
    backgroundColor: "#bbc7e7",
    marginLeft: -175,
    height: 50,
  },
  assignPage4Child1: {
    top: 215,
  },
  frameItem: {
    marginTop: 1,
  },
  rectangleParent: {
    marginLeft: -150,
    top: 266,
    borderRadius: 10,
  },
  assignPage4Child2: {
    top: 382,
  },
  beatXSdY: {
    marginLeft: -89,
    top: 125,
    fontSize: 25,
    letterSpacing: 1.5,
    color: "#fff",
    fontFamily: "Roboto",
    textAlign: "left",
    left: "50%",
    position: "absolute",
  },
  selectTimings: {
    marginLeft: -155,
    top: 228,
    left: "50%",
    position: "absolute",
  },
  selectOfficers: {
    marginLeft: -156,
    top: 395,
    left: "50%",
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: 301,
    top: 230,
  },
  assignPage4Child3: {
    top: 397,
    left: 300,
  },
  assignPage4Child4: {
    marginLeft: -100,
    top: 630,
    borderRadius: 100,
    backgroundColor: "#f98484",
    width: 200,
  },
  confirm: {
    left: 128,
    top: 643,
    position: "absolute",
  },
  am10am: {
    marginLeft: -47,
    top: 273,
  },
  am2pm: {
    marginLeft: -46,
    top: 308,
  },
  pm6pm: {
    marginLeft: -41,
    top: 343,
  },
  assignPage4: {
    backgroundColor: "#fff",
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default SELECTTIMINGS;
