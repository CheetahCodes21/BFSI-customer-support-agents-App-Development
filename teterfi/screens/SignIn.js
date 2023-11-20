import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Border, FontFamily, Color, FontSize } from "../GlobalStyles";

const SignIn = () => {
  return (
    <View style={styles.signIn}>
      <View style={[styles.signInChild, styles.signLayout]} />
      <Text style={[styles.lanId, styles.lanIdFlexBox]}>Lan ID</Text>
      <View style={[styles.signInItem, styles.signLayout]} />
      <Text style={[styles.login, styles.lanIdFlexBox]}>{`Login `}</Text>
      <Image
        style={styles.logo2Icon}
        contentFit="cover"
        source={require("../assets/logo-2.png")}
      />
      <Image
        style={[styles.undrawLoginRe4vu21Icon, styles.signInInnerPosition]}
        contentFit="cover"
        source={require("../assets/undraw-login-re-4vu2-1.png")}
      />
      <View style={[styles.statusBar, styles.iconPosition]}>
        <Image
          style={[styles.notchIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/notch1.png")}
        />
        <View style={styles.statusIcons}>
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
      <View style={[styles.signInInner, styles.signInInnerPosition]} />
      <Text style={[styles.stationId, styles.stationIdTypo]}>Station ID</Text>
      <Text style={[styles.loginDetails, styles.stationIdTypo]}>
        Login Details
      </Text>
      <Image
        style={[styles.vectorIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/vector1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  signLayout: {
    height: 60,
    width: 330,
    borderRadius: Border.br_8xs,
  },
  lanIdFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  signInInnerPosition: {
    left: 68,
    position: "absolute",
  },
  iconPosition: {
    left: 0,
    position: "absolute",
  },
  lightSpaceBlock: {
    marginLeft: 4,
    height: 14,
  },
  stationIdTypo: {
    left: 88,
    textAlign: "left",
    fontFamily: FontFamily.outfitMedium,
    fontWeight: "500",
    position: "absolute",
  },
  signInChild: {
    top: 488,
    borderWidth: 1,
    borderColor: Color.colorGray_100,
    borderStyle: "solid",
    width: 330,
    borderRadius: Border.br_8xs,
    left: 66,
    position: "absolute",
  },
  lanId: {
    top: 508,
    left: 90,
    color: Color.colorDimgray,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.outfitMedium,
    fontWeight: "500",
    textAlign: "left",
  },
  signInItem: {
    top: 696,
    backgroundColor: "#752f92",
    width: 330,
    borderRadius: Border.br_8xs,
    left: 66,
    position: "absolute",
  },
  login: {
    top: 711,
    left: 194,
    fontWeight: "700",
    fontFamily: FontFamily.outfitBold,
    color: Color.colorWhite,
    fontSize: FontSize.size_5xl,
  },
  logo2Icon: {
    top: 93,
    left: 107,
    width: 216,
    height: 97,
    position: "absolute",
  },
  undrawLoginRe4vu21Icon: {
    top: 214,
    width: 310,
    height: 187,
    overflow: "hidden",
  },
  notchIcon: {
    right: 0,
    maxWidth: "100%",
    height: 30,
    top: 0,
    left: 0,
    overflow: "hidden",
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
    right: 14,
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
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
    left: 21,
    borderRadius: Border.br_xl,
    width: 54,
    height: 21,
    position: "absolute",
    overflow: "hidden",
  },
  statusBar: {
    right: 21,
    height: 44,
    top: 0,
    left: 0,
    overflow: "hidden",
  },
  signInInner: {
    top: 570,
    height: 60,
    width: 330,
    borderRadius: Border.br_8xs,
    borderWidth: 1,
    borderColor: Color.colorGray_100,
    borderStyle: "solid",
  },
  stationId: {
    top: 600,
    color: Color.colorDimgray,
    fontSize: FontSize.size_base,
    left: 88,
  },
  loginDetails: {
    top: 431,
    color: Color.colorBlack,
    fontSize: FontSize.size_5xl,
  },
  vectorIcon: {
    top: 720,
    width: 430,
    height: 212,
    opacity: 0.3,
  },
  signIn: {
    backgroundColor: "#f1d4f9",
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
  },
});

export default SignIn;
