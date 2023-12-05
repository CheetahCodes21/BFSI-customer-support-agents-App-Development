import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const Home = () => {
  // Return the JSX structure for the Home component
  return (
    <View style={styles.home}>
      <View style={styles.homeChild} />
      <View style={[styles.homeItem, styles.homeItemBg]} />
      <View style={styles.rectangleParent}>
        <View style={[styles.groupChild, styles.groupLayout1]} />
        <View style={[styles.groupItem, styles.groupLayout1]} />
        <View style={[styles.groupInner, styles.groupLayout1]} />
      </View>
      <Text style={[styles.labels, styles.labelsTypo]}>Labels</Text>
      <Text style={[styles.allInteraction, styles.interactionTypo]}>
        All Interaction
      </Text>
      <Image
        style={[styles.homeInner, styles.homeInnerPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-19.png")}
      />
      <View style={[styles.rectangleView, styles.textLayout]} />
      <Image
        style={styles.ellipseIcon}
        contentFit="cover"
        source={require("../assets/ellipse-20.png")}
      />
      <View style={[styles.lineView, styles.lineViewLayout]} />
      <Image
        style={styles.lineIcon}
        contentFit="cover"
        source={require("../assets/line-12.png")}
      />
      <Image
        style={[styles.vectorIcon, styles.homeInnerPosition]}
        contentFit="cover"
        source={require("../assets/vector-1.png")}
      />
      <View style={[styles.groupView, styles.groupViewLayout]}>
        <View style={[styles.columnParent, styles.groupViewLayout]}>
          <View style={styles.column}>
            <Image
              style={styles.columnChild}
              contentFit="cover"
              source={require("../assets/rectangle-351.png")}
            />
            <Text style={[styles.user, styles.userTypo]}>User</Text>
            <Text style={[styles.channel, styles.userTypo]}>Channel</Text>
            <Text style={[styles.createdOn, styles.userTypo]}> Created on</Text>
            <Text
              style={[styles.direction, styles.labelsTypo]}
            >{`Direction  `}</Text>
          </View>
          <View style={styles.vectorParent}>
            <Image
              style={[styles.rectangleIcon, styles.groupChild1Layout]}
              contentFit="cover"
              source={require("../assets/rectangle-352.png")}
            />
            <View style={[styles.download5, styles.downloadPosition]} />
            <Text style={[styles.am, styles.amTypo]}>12/11/23,11:50AM</Text>
            <Text style={[styles.text, styles.textTypo]}>+918762...</Text>
            <View style={[styles.outParent, styles.outPosition]}>
              <Text style={styles.out}>OUT</Text>
              <Image
                style={styles.download5Icon}
                contentFit="cover"
                source={require("../assets/download-5.png")}
              />
            </View>
          </View>
          <Image
            style={[styles.phoneIcon, styles.phoneIconLayout]}
            contentFit="cover"
            source={require("../assets/phone.png")}
          />
          <View style={styles.vectorGroup}>
            <Image
              style={[styles.groupChild1, styles.groupChild1Layout]}
              contentFit="cover"
              source={require("../assets/rectangle-3521.png")}
            />
            <View style={[styles.download51, styles.pmPosition]} />
            <Text style={[styles.pm, styles.pmPosition]}>13/11/23,01:50PM</Text>
            <Text style={[styles.text1, styles.pmPosition]}>+918762...</Text>
            <View style={[styles.outGroup, styles.outPosition]}>
              <Text style={styles.out}>OUT</Text>
              <Image
                style={styles.download5Icon}
                contentFit="cover"
                source={require("../assets/download-51.png")}
              />
            </View>
            <Image
              style={[styles.phoneIcon1, styles.phoneIconLayout]}
              contentFit="cover"
              source={require("../assets/phone1.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.rectangleGroup, styles.groupLayout]}>
        <View style={[styles.groupChild2, styles.groupLayout]} />
        <Text style={[styles.interactionDetails, styles.interactionTypo]}>
          Interaction Details
        </Text>
      </View>
      <Image
        style={[styles.maskGroupIcon, styles.lineViewLayout]}
        contentFit="cover"
        source={require("../assets/mask-group.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  homeItemBg: {
    backgroundColor: Color.colorDarkslategray,
    borderRadius: Border.br_31xl,
  },
  groupLayout1: {
    height: 5,
    backgroundColor: Color.colorBlack,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  labelsTypo: {
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  interactionTypo: {
    color: Color.colorWhite,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_mid,
    textAlign: "left",
    position: "absolute",
  },
  homeInnerPosition: {
    left: 90,
    top: 240,
    position: "absolute",
  },
  textLayout: {
    height: 15,
    position: "absolute",
  },
  lineViewLayout: {
    height: 127,
    position: "absolute",
  },
  groupViewLayout: {
    height: 450,
    width: 395,
    position: "absolute",
  },
  userTypo: {
    top: 26,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  groupChild1Layout: {
    height: 32,
    width: 403,
    borderRadius: Border.br_8xs,
    left: -4,
    position: "absolute",
  },
  downloadPosition: {
    left: 133,
    width: 15,
  },
  amTypo: {
    left: 272,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xs,
  },
  textTypo: {
    width: 60,
    left: 175,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xs,
  },
  outPosition: {
    height: 390,
    width: 48,
    marginLeft: -99.5,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  phoneIconLayout: {
    height: 18,
    width: 18,
    left: 24,
    position: "absolute",
  },
  pmPosition: {
    top: 375,
    height: 15,
    position: "absolute",
  },
  groupLayout: {
    height: 61,
    width: 393,
    position: "absolute",
  },
  homeChild: {
    top: 138,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 382,
    height: 396,
    borderRadius: Border.br_3xs,
    left: 24,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  homeItem: {
    top: 157,
    left: 42,
    width: 346,
    height: 54,
    position: "absolute",
  },
  groupChild: {
    left: 32,
    width: 21,
    top: 0,
  },
  groupItem: {
    top: 22,
    left: 0,
    width: 53,
  },
  groupInner: {
    top: 11,
    left: 15,
    width: 38,
  },
  rectangleParent: {
    top: 31,
    left: 353,
    height: 27,
    width: 53,
    position: "absolute",
  },
  labels: {
    left: 71,
    top: 501,
  },
  allInteraction: {
    top: 173,
    left: 67,
  },
  homeInner: {
    width: 250,
    height: 250,
  },
  rectangleView: {
    left: 48,
    backgroundColor: "#d9d9d9",
    borderColor: Color.colorBlack,
    borderWidth: 1,
    width: 15,
    borderStyle: "solid",
    top: 501,
  },
  ellipseIcon: {
    top: 21,
    width: 50,
    height: 50,
    left: 24,
    position: "absolute",
  },
  lineView: {
    top: 239,
    left: 214,
    borderColor: Color.colorWhite,
    borderRightWidth: 2,
    width: 2,
    borderStyle: "solid",
  },
  lineIcon: {
    top: 364,
    left: 136,
    width: 82,
    height: 99,
    position: "absolute",
  },
  vectorIcon: {
    width: 127,
    height: 222,
  },
  columnChild: {
    borderRadius: 27,
    height: 131,
    zIndex: 0,
    width: 395,
  },
  user: {
    left: 184,
    zIndex: 1,
  },
  channel: {
    left: 9,
    zIndex: 2,
  },
  createdOn: {
    left: 266,
    zIndex: 3,
  },
  direction: {
    top: 23,
    left: 98,
    zIndex: 4,
  },
  column: {
    top: 318,
    height: 132,
    left: 0,
    position: "absolute",
  },
  rectangleIcon: {
    top: 369,
  },
  download5: {
    top: 374,
    height: 15,
    position: "absolute",
  },
  am: {
    width: 98,
    top: 374,
    height: 15,
    position: "absolute",
  },
  text: {
    top: 372,
    height: 15,
    position: "absolute",
  },
  out: {
    marginTop: -195.15,
    marginLeft: -24,
    width: 26,
    height: 19,
    left: "50%",
    top: "50%",
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  download5Icon: {
    top: 376,
    left: 33,
    height: 14,
    width: 15,
    position: "absolute",
  },
  outParent: {
    marginTop: -196.65,
  },
  vectorParent: {
    height: 393,
    width: 395,
    left: 0,
    top: 0,
    position: "absolute",
  },
  phoneIcon: {
    top: 372,
  },
  groupChild1: {
    top: 370,
  },
  download51: {
    left: 133,
    width: 15,
  },
  pm: {
    width: 101,
    left: 272,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xs,
  },
  text1: {
    width: 60,
    left: 175,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xs,
  },
  outGroup: {
    marginTop: -197.15,
  },
  phoneIcon1: {
    top: 373,
  },
  vectorGroup: {
    top: 33,
    height: 394,
    width: 395,
    left: 0,
    position: "absolute",
  },
  columnParent: {
    left: 0,
    top: 0,
  },
  groupView: {
    top: 357,
    left: 17,
  },
  groupChild2: {
    left: 0,
    top: 0,
    backgroundColor: Color.colorDarkslategray,
    borderRadius: Border.br_31xl,
  },
  interactionDetails: {
    top: 18,
    left: 30,
    width: 174,
    height: 24,
  },
  rectangleGroup: {
    top: 597,
    left: 13,
  },
  maskGroupIcon: {
    width: 121,
    left: 0,
    top: 0,
  },
  home: {
    flex: 1,
    width: "100%",
    height: 906,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default Home;
