import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";

export function SELECTHAMPLETS({ navigation }) {
  return (
    <View style={styles.assignPage2}>
      <View style={[styles.assignPage2Child, styles.assignPosition]} />
      <View style={[styles.assignPage2Item, styles.assignPosition]} />
      <View style={styles.assignPage2Inner} />
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
      <View style={[styles.assignPage2Child1, styles.rectangleViewPosition]} />
      <Text style={[styles.beatX, styles.beatTypo]}>BEAT-X</Text>
      <Text style={[styles.selectBeatSubdivisions, styles.beatTypo]}>
        Select Beat-subdivisions
      </Text>
      <Pressable
        style={[styles.rectanglePressable, styles.assignChildLayout1]}
        onPress={() => {
          navigation.navigate("Select");
        }}
      />
      <Pressable
        style={[styles.assignPage2Child2, styles.assignChildLayout1]}
        onPress={() => {
          navigation.navigate("Select");
        }}
      />
      <Pressable
        style={[styles.assignPage2Child3, styles.assignChildLayout1]}
        onPress={() => {
          navigation.navigate("Select");
        }}
      />
      <Pressable
        style={[styles.assignPage2Child4, styles.assignChildLayout]}
        onPress={() => {
          navigation.navigate("Select");
        }}
      />
      <Pressable
        style={[styles.assignPage2Child5, styles.assignChildLayout]}
        onPress={() => {
          navigation.navigate("Select");
        }}
      />
      <Text style={[styles.sd1, styles.sd1Typo]}>SD-1</Text>
      <Text style={[styles.sd2, styles.sd1Typo]}>SD-2</Text>
      <Text style={[styles.sd4, styles.sd4Typo]}>SD-4</Text>
      <Text style={[styles.sd3, styles.sd4Typo]}>SD-3</Text>
      <Text style={[styles.sd5, styles.sd1Typo]}>SD-5</Text>
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
    width: 350,
    backgroundColor: "#bbc7e7",
    marginLeft: -175,
    left: "50%",
    position: "absolute",
  },
  beatTypo: {
    color: "#001097",
    fontFamily: "Roboto",
    textAlign: "left",
    left: "50%",
    position: "absolute",
  },
  assignChildLayout1: {
    height: 100,
    width: 158,
    borderRadius: 10,
    backgroundColor: "#bbc7e7",
    position: "absolute",
  },
  assignChildLayout: {
    left: 188,
    height: 100,
    width: 158,
    borderRadius: 10,
    backgroundColor: "#bbc7e7",
    position: "absolute",
  },
  sd1Typo: {
    color: "#fff",
    fontFamily: "Roboto",
    letterSpacing: 1.5,
    fontSize: 25,
    textAlign: "left",
    position: "absolute",
  },
  sd4Typo: {
    top: 395,
    color: "#fff",
    fontFamily: "Roboto",
    letterSpacing: 1.5,
    fontSize: 25,
    textAlign: "left",
    position: "absolute",
  },
  assignPage2Child: {
    top: 0,
  },
  assignPage2Item: {
    bottom: 0,
  },
  assignPage2Inner: {
    top: 25,
    backgroundColor: "#8b98d8",
    height: 75,
    width: 360,
    left: "50%",
    marginLeft: -180,
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
    borderRadius: 5,
  },
  assignPage2Child1: {
    top: 180,
    borderRadius: 50,
  },
  beatX: {
    marginLeft: -75,
    top: 125,
    letterSpacing: 1.5,
    fontSize: 25,
    color: "#001097",
    fontFamily: "Roboto",
  },
  selectBeatSubdivisions: {
    marginLeft: -128,
    top: 190,
    fontSize: 20,
    letterSpacing: 1.2,
  },
  rectanglePressable: {
    left: 15,
    width: 158,
    borderRadius: 10,
    top: 245,
  },
  assignPage2Child2: {
    top: 360,
    left: 15,
    width: 158,
    borderRadius: 10,
  },
  assignPage2Child3: {
    top: 475,
    left: 14,
  },
  assignPage2Child4: {
    top: 245,
  },
  assignPage2Child5: {
    top: 360,
  },
  sd1: {
    left: 64,
    top: 280,
    color: "#fff",
  },
  sd2: {
    left: 233,
    top: 280,
    color: "#fff",
  },
  sd4: {
    left: 237,
  },
  sd3: {
    left: 64,
  },
  sd5: {
    top: 510,
    left: 64,
  },
  assignPage2: {
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default SELECTHAMPLETS;
