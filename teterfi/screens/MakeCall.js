import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const MakeCall = () => {
  return (
    <View style={styles.makeCall}>
      <View style={[styles.makeCallChild, styles.makeShadowBox]} />
      <View style={[styles.makeCallItem, styles.makeShadowBox]} />
      <View style={[styles.makeCallInner, styles.groupItemLayout]} />
      <View style={[styles.rectangleView, styles.groupItemLayout]} />
      <View style={[styles.makeCallChild1, styles.makeChildLayout]} />
      <View style={[styles.makeCallChild2, styles.makeChildLayout]} />
      <View style={[styles.makeCallChild3, styles.makeChildLayout]} />
      <Text style={styles.tejas}>Tejas</Text>
      <Text style={[styles.text, styles.textTypo1]}>1</Text>
      <Text style={[styles.text1, styles.textTypo1]}>1</Text>
      <Text style={[styles.text2, styles.textTypo1]}>0</Text>
      <Text style={[styles.na, styles.textTypo1]}>NA</Text>
      <Text style={[styles.skillName, styles.slTypo]}>Skill Name</Text>
      <Text style={styles.labels}>Labels</Text>
      <Text style={[styles.inteaction, styles.makeCall1Typo]}>Inteaction</Text>
      <Text style={[styles.allInteraction, styles.makeCall1Typo]}>
        All Interaction
      </Text>
      <Text style={[styles.stf, styles.slTypo]}>Stf</Text>
      <Text style={[styles.avl, styles.slTypo]}>Avl</Text>
      <Text style={[styles.ciq, styles.ciqPosition]}>{`CIQ `}</Text>
      <Text style={[styles.sl, styles.slPosition]}>SL%</Text>
      <Image
        style={styles.arrowIcon}
        contentFit="cover"
        source={require("../assets/arrow-1.png")}
      />
      <View style={styles.makeCallChild4} />
      <Image
        style={[styles.ellipseIcon, styles.groupItemPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-20.png")}
      />
      <View style={styles.makeCallChild5} />
      <View style={[styles.rectangleParent, styles.groupChildLayout1]}>
        <View style={[styles.groupChild, styles.groupChildLayout1]} />
        <View style={[styles.groupItem, styles.groupItemPosition]} />
        <Text style={[styles.makeCall1, styles.makeCall1Typo]}>Make Call</Text>
        <View style={[styles.groupInner, styles.groupLayout]} />
        <View style={[styles.groupChild1, styles.groupLayout]} />
        <View style={[styles.groupChild2, styles.groupChildLayout]} />
        <View style={[styles.groupChild3, styles.groupChildLayout]} />
        <View style={[styles.groupChild4, styles.groupChildPosition]} />
        <View style={[styles.groupChild5, styles.groupChildPosition1]} />
        <View style={[styles.groupChild6, styles.groupChildPosition]} />
      </View>
      <Text style={styles.x}>x</Text>
      <Text style={[styles.agentstationnumber, styles.restartIconLayout]}>
        Agent/Station/Number
      </Text>
      <Text style={[styles.enterCommentsHere, styles.restartIconLayout]}>
        Enter Comments here
      </Text>
      <Text style={[styles.searchSkills, styles.restartIconLayout]}>
        Search Skills
      </Text>
      <Image
        style={styles.editIcon}
        contentFit="cover"
        source={require("../assets/edit.png")}
      />
      <Image
        style={[styles.makeCallChild6, styles.childLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-21.png")}
      />
      <Text style={[styles.active, styles.activeTypo]}>Active</Text>
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector.png")}
      />
      <Text style={[styles.speedDial, styles.activeTypo]}>Speed dial</Text>
      <Image
        style={[styles.searchIcon, styles.childLayout]}
        contentFit="cover"
        source={require("../assets/search.png")}
      />
      <View style={[styles.retry, styles.ciqPosition]}>
        <View style={styles.retryInner}>
          <Image
            style={styles.childLayout}
            contentFit="cover"
            source={require("../assets/ellipse-22.png")}
          />
        </View>
        <Image
          style={[styles.restartIcon, styles.restartIconLayout]}
          contentFit="cover"
          source={require("../assets/restart.png")}
        />
      </View>
      <Text style={[styles.firstName, styles.nameTypo]}>First Name</Text>
      <Text style={[styles.id, styles.nameTypo]}>ID</Text>
      <Text style={[styles.status, styles.nameTypo]}>Status</Text>
      <Text style={[styles.lastName, styles.nameTypo]}>Last name</Text>
      <View style={[styles.rowForCallParent, styles.rowLayout]}>
        <View style={[styles.rowForCall, styles.rowLayout]} />
        <Text style={[styles.text3, styles.textTypo]}>5005</Text>
        <Text style={[styles.praveena, styles.praveenaTypo]}>Praveena</Text>
        <Text style={[styles.s, styles.sTypo]}>S</Text>
        <Text style={[styles.available, styles.availableTypo]}>Available</Text>
      </View>
      <View style={styles.parent}>
        <Text style={[styles.text4, styles.textTypo]}>5005</Text>
        <Text style={[styles.praveena1, styles.praveenaTypo]}>Praveena</Text>
        <Text style={[styles.s1, styles.sTypo]}>S</Text>
        <Text style={[styles.available1, styles.availableTypo]}>Available</Text>
        <View style={[styles.rowForCallGroup, styles.rowLayout]}>
          <View style={[styles.rowForCall, styles.rowLayout]} />
          <Text style={[styles.text3, styles.textTypo]}>5007</Text>
          <Text style={[styles.praveena, styles.praveenaTypo]}>Apporva</Text>
          <Text style={[styles.s, styles.sTypo]}>Teterfi</Text>
          <Text style={[styles.available, styles.availableTypo]}>
            Available
          </Text>
        </View>
      </View>
      <Image
        style={styles.maskGroupIcon}
        contentFit="cover"
        source={require("../assets/mask-group.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  makeShadowBox: {
    width: 382,
    backgroundColor: Color.colorGainsboro,
    borderRadius: Border.br_3xs,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: 24,
    position: "absolute",
  },
  groupItemLayout: {
    height: 54,
    width: 346,
    backgroundColor: Color.colorDarkslategray,
    borderRadius: Border.br_31xl,
  },
  makeChildLayout: {
    height: 5,
    backgroundColor: Color.colorBlack,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  textTypo1: {
    top: 231,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  slTypo: {
    top: 201,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xs,
  },
  makeCall1Typo: {
    color: Color.colorWhite,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_mid,
    textAlign: "left",
    position: "absolute",
  },
  ciqPosition: {
    left: 279,
    position: "absolute",
  },
  slPosition: {
    left: 338,
    position: "absolute",
  },
  groupItemPosition: {
    top: 21,
    position: "absolute",
  },
  groupChildLayout1: {
    height: 598,
    width: 382,
    position: "absolute",
  },
  groupLayout: {
    width: 343,
    borderRadius: Border.br_2xl,
    left: 18,
    backgroundColor: Color.colorLavenderblush,
    position: "absolute",
  },
  groupChildLayout: {
    height: 39,
    borderRadius: Border.br_mini,
    position: "absolute",
  },
  groupChildPosition: {
    left: 28,
    borderRadius: Border.br_mini,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  groupChildPosition1: {
    top: 119,
    height: 39,
  },
  restartIconLayout: {
    height: 20,
    position: "absolute",
  },
  childLayout: {
    height: 41,
    width: 41,
  },
  activeTypo: {
    height: 23,
    top: 463,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_mid,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  nameTypo: {
    height: 24,
    width: 84,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  rowLayout: {
    height: 26,
    width: 313,
    position: "absolute",
  },
  textTypo: {
    width: 79,
    left: 168,
    fontSize: FontSize.size_3xs,
    height: 16,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  praveenaTypo: {
    left: 8,
    width: 79,
    fontSize: FontSize.size_3xs,
    height: 16,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  sTypo: {
    left: 92,
    width: 79,
    fontSize: FontSize.size_3xs,
    height: 16,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  availableTypo: {
    left: 234,
    width: 79,
    fontSize: FontSize.size_3xs,
    height: 16,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  makeCallChild: {
    top: 98,
    height: 368,
  },
  makeCallItem: {
    top: 495,
    height: 396,
  },
  makeCallInner: {
    top: 120,
    left: 42,
    width: 346,
    backgroundColor: Color.colorDarkslategray,
    borderRadius: Border.br_31xl,
    position: "absolute",
  },
  rectangleView: {
    top: 514,
    left: 42,
    width: 346,
    backgroundColor: Color.colorDarkslategray,
    borderRadius: Border.br_31xl,
    position: "absolute",
  },
  makeCallChild1: {
    top: 31,
    left: 385,
    width: 21,
  },
  makeCallChild2: {
    top: 53,
    left: 353,
    width: 53,
  },
  makeCallChild3: {
    top: 42,
    left: 368,
    width: 38,
  },
  tejas: {
    top: 228,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xs,
    left: 67,
    position: "absolute",
  },
  text: {
    left: 163,
  },
  text1: {
    left: 221,
  },
  text2: {
    left: 286,
  },
  na: {
    left: 342,
  },
  skillName: {
    left: 52,
    position: "absolute",
  },
  labels: {
    left: 71,
    top: 858,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  inteaction: {
    top: 136,
    left: 69,
  },
  allInteraction: {
    top: 530,
    left: 67,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_mid,
  },
  stf: {
    left: 157,
    position: "absolute",
  },
  avl: {
    left: 215,
    position: "absolute",
  },
  ciq: {
    top: 201,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xs,
  },
  sl: {
    top: 201,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xs,
  },
  arrowIcon: {
    left: 235,
    height: 16,
    width: 15,
    top: 201,
    position: "absolute",
  },
  makeCallChild4: {
    left: 48,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 1,
    height: 15,
    width: 15,
    top: 858,
    backgroundColor: Color.colorGainsboro,
    position: "absolute",
  },
  ellipseIcon: {
    width: 50,
    height: 50,
    left: 24,
  },
  makeCallChild5: {
    backgroundColor: "rgba(11, 11, 11, 0.42)",
    width: 430,
    left: 0,
    top: 0,
    position: "absolute",
    height: 932,
  },
  groupChild: {
    borderRadius: 38,
    backgroundColor: Color.colorLightpink,
    left: 0,
    top: 0,
  },
  groupItem: {
    left: 20,
    height: 54,
    width: 346,
    backgroundColor: Color.colorDarkslategray,
    borderRadius: Border.br_31xl,
  },
  makeCall1: {
    top: 37,
    left: 43,
  },
  groupInner: {
    top: 111,
    height: 144,
  },
  groupChild1: {
    top: 261,
    height: 319,
  },
  groupChild2: {
    top: 267,
    width: 166,
    backgroundColor: Color.colorLightpink,
    left: 25,
  },
  groupChild3: {
    top: 318,
    width: 231,
    left: 24,
    backgroundColor: Color.colorWhite,
  },
  groupChild4: {
    width: 260,
    top: 119,
    height: 39,
  },
  groupChild5: {
    left: 295,
    backgroundColor: "#e0ced1",
    width: 57,
    borderRadius: Border.br_mini,
    top: 119,
    position: "absolute",
  },
  groupChild6: {
    top: 166,
    width: 324,
    height: 81,
  },
  rectangleParent: {
    top: 187,
    left: 25,
  },
  x: {
    top: 210,
    left: 355,
    fontSize: 30,
    height: 32,
    fontFamily: FontFamily.poppinsRegular,
    width: 15,
    color: Color.colorWhite,
    textAlign: "left",
    position: "absolute",
  },
  agentstationnumber: {
    top: 317,
    width: 149,
    color: Color.colorLightgray_100,
    height: 20,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xs,
    left: 66,
  },
  enterCommentsHere: {
    top: 370,
    width: 149,
    color: Color.colorLightgray_100,
    height: 20,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xs,
    left: 66,
  },
  searchSkills: {
    top: 515,
    left: 62,
    width: 149,
    color: Color.colorLightgray_100,
    height: 20,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xs,
  },
  editIcon: {
    top: 310,
    left: 276,
    width: 27,
    height: 27,
    position: "absolute",
  },
  makeCallChild6: {
    top: 508,
    left: 289,
    position: "absolute",
  },
  active: {
    width: 132,
    left: 62,
  },
  vectorIcon: {
    height: "2.36%",
    width: "5.12%",
    top: "33.8%",
    right: "16.28%",
    bottom: "63.84%",
    left: "78.6%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  speedDial: {
    left: 244,
    width: 133,
  },
  searchIcon: {
    top: 509,
    left: 338,
    position: "absolute",
  },
  retryInner: {
    flexDirection: "row",
    padding: 10,
    left: 0,
    top: 0,
    position: "absolute",
  },
  restartIcon: {
    top: 22,
    left: 21,
    width: 20,
  },
  retry: {
    top: 498,
    width: 61,
    height: 61,
  },
  firstName: {
    left: 63,
    top: 568,
    width: 84,
    fontSize: FontSize.size_3xs,
  },
  id: {
    top: 567,
    left: 227,
  },
  status: {
    top: 566,
    left: 280,
  },
  lastName: {
    left: 142,
    top: 568,
    width: 84,
    fontSize: FontSize.size_3xs,
  },
  rowForCall: {
    backgroundColor: Color.colorLavenderblush,
    height: 26,
    left: 0,
    top: 0,
    borderRadius: Border.br_3xs,
  },
  text3: {
    top: 10,
  },
  praveena: {
    top: 10,
  },
  s: {
    top: 10,
  },
  available: {
    top: 10,
  },
  rowForCallParent: {
    top: 602,
    left: 56,
    height: 26,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  text4: {
    top: 0,
  },
  praveena1: {
    top: 0,
  },
  s1: {
    top: 0,
  },
  available1: {
    top: 0,
  },
  rowForCallGroup: {
    top: 26,
    left: 0,
    height: 26,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  parent: {
    top: 612,
    height: 52,
    width: 313,
    left: 56,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
  },
  maskGroupIcon: {
    width: 121,
    height: 127,
    left: 0,
    top: 0,
    position: "absolute",
  },
  makeCall: {
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 932,
    backgroundColor: Color.colorWhite,
  },
});

export default MakeCall;
