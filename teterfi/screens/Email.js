import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const Email = () => {
  return (
    <View style={styles.email}>
      <View style={[styles.image2Parent, styles.image2Position]}>
        <Image
          style={[styles.image2Icon, styles.image2Position]}
          contentFit="cover"
          source={require("../assets/image-2.png")}
        />
        <View style={[styles.statusBarWrapper, styles.statusPosition]}>
          <View style={[styles.statusBar, styles.statusBarPosition]}>
            <Image
              style={[styles.notchIcon, styles.statusBarPosition]}
              contentFit="cover"
              source={require("../assets/notch1.png")}
            />
            <View style={[styles.statusIcons, styles.statusPosition]}>
              <Image
                style={styles.networkSignalLight}
                contentFit="cover"
                source={require("../assets/network-signal-light.png")}
              />
              <Image
                style={[styles.wifiSignalLight, styles.lightSpaceBlock]}
                contentFit="cover"
                source={require("../assets/wifi-signal--light.png")}
              />
              <Image
                style={[styles.batteryLight, styles.lightSpaceBlock]}
                contentFit="cover"
                source={require("../assets/statusnormal-level100.png")}
              />
            </View>
            <Image
              style={styles.indicatorIcon}
              contentFit="cover"
              source={require("../assets/indicator.png")}
            />
            <Image
              style={styles.timeLight}
              contentFit="cover"
              source={require("../assets/colorclear.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupChildBorder]} />
        <Text style={[styles.ccbcc, styles.toTypo]}>CC/BCC</Text>
        <Image
          style={[styles.groupItem, styles.groupLayout]}
          contentFit="cover"
          source={require("../assets/line-8.png")}
        />
        <Image
          style={[styles.groupInner, styles.groupLayout]}
          contentFit="cover"
          source={require("../assets/line-8.png")}
        />
        <Image
          style={[styles.lineIcon, styles.groupLayout]}
          contentFit="cover"
          source={require("../assets/line-10.png")}
        />
        <Text style={[styles.from, styles.toPosition]}>From:</Text>
        <Text style={[styles.tetherfigmailcom, styles.fromTypo]}>
          tetherfi@gmail.com
        </Text>
        <Text style={[styles.to, styles.toPosition]}>To:</Text>
        <Image
          style={[styles.groupChild1, styles.groupLayout]}
          contentFit="cover"
          source={require("../assets/line-8.png")}
        />
        <Text style={[styles.subject, styles.toPosition]}>Subject:</Text>
      </View>
      <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
        <View style={[styles.rectangleView, styles.rectangleLayout]} />
        <Image
          style={[styles.image4Icon, styles.toPosition]}
          contentFit="cover"
          source={require("../assets/image-4.png")}
        />
      </View>
      <Image
        style={[styles.download4Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/download-4.png")}
      />
      <Image
        style={[styles.download8Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/download-8.png")}
      />
      <Image
        style={[styles.images3Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/images-3.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image2Position: {
    width: 430,
    left: 0,
    position: "absolute",
  },
  statusPosition: {
    right: 14,
    position: "absolute",
  },
  statusBarPosition: {
    right: 0,
    left: 0,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  lightSpaceBlock: {
    marginLeft: 4,
    height: 14,
  },
  groupChildLayout: {
    height: 261,
    width: 425,
    position: "absolute",
  },
  groupChildBorder: {
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    left: 0,
    top: 0,
    backgroundColor: Color.colorWhite,
  },
  toTypo: {
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xl,
    color: Color.colorBlack,
  },
  groupLayout: {
    height: 2,
    position: "absolute",
  },
  toPosition: {
    left: 12,
    position: "absolute",
  },
  fromTypo: {
    top: 20,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xl,
  },
  rectangleLayout: {
    height: 383,
    width: 425,
    position: "absolute",
  },
  iconPosition: {
    height: 40,
    top: 861,
    position: "absolute",
  },
  image2Icon: {
    top: 49,
    height: 58,
  },
  notchIcon: {
    maxWidth: "100%",
    height: 30,
  },
  networkSignalLight: {
    width: 20,
    height: 14,
  },
  wifiSignalLight: {
    width: 16,
  },
  batteryLight: {
    width: 25,
  },
  statusIcons: {
    top: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  indicatorIcon: {
    top: 8,
    right: 71,
    width: 6,
    height: 6,
    position: "absolute",
  },
  timeLight: {
    top: 12,
    borderRadius: Border.br_xl,
    width: 54,
    height: 21,
    left: 21,
    position: "absolute",
    overflow: "hidden",
  },
  statusBar: {
    height: 44,
  },
  statusBarWrapper: {
    left: 7,
    height: 44,
    top: 0,
  },
  image2Parent: {
    height: 107,
    top: 0,
  },
  groupChild: {
    height: 261,
    width: 425,
    position: "absolute",
  },
  ccbcc: {
    top: 104,
    left: 341,
    position: "absolute",
  },
  groupItem: {
    top: 126,
    left: 41,
    width: 286,
    height: 2,
  },
  groupInner: {
    top: 192,
    left: 110,
    width: 286,
    height: 2,
  },
  lineIcon: {
    top: 234,
    left: 101,
    width: 295,
  },
  from: {
    top: 20,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xl,
    color: Color.colorBlack,
    left: 12,
  },
  tetherfigmailcom: {
    left: 81,
    color: "#aaa5a5",
    position: "absolute",
  },
  to: {
    top: 62,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xl,
    color: Color.colorBlack,
  },
  groupChild1: {
    top: 84,
    left: 77,
    width: 286,
    height: 2,
  },
  subject: {
    top: 169,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xl,
    color: Color.colorBlack,
  },
  rectangleParent: {
    top: 137,
    left: 2,
  },
  rectangleView: {
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    left: 0,
    top: 0,
    backgroundColor: Color.colorWhite,
  },
  image4Icon: {
    top: 9,
    width: 410,
    height: 49,
  },
  rectangleGroup: {
    top: 438,
    left: 2,
  },
  download4Icon: {
    width: 42,
    left: 21,
  },
  download8Icon: {
    left: 92,
    width: 40,
  },
  images3Icon: {
    left: 339,
    width: 83,
  },
  email: {
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default Email;
