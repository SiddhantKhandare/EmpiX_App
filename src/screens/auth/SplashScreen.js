// import React, { useEffect } from "react";
// import { View, Text, StyleSheet } from "react-native";
// import Animated, { FadeIn } from "react-native-reanimated";
// import { COLORS } from "../../styles/colors";
// import { FONTS } from "../../styles/fonts";

// const SplashScreen = ({ navigation }) => {
//   useEffect(() => {
//     setTimeout(() => {
//       navigation.replace("Login");
//     }, 2000);
//   }, []);

//   return (
//     <View style={styles.container}>
//       <Animated.Text entering={FadeIn.duration(1000)} style={styles.logo}>
//         EMPIX
//       </Animated.Text>
//       <Animated.Text entering={FadeIn.delay(500)} style={styles.tagline}>
//         Smart Employee Management
//       </Animated.Text>
//     </View>
//   );
// };

// export default SplashScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: COLORS.primary,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   logo: {
//     fontSize: 36,
//     fontFamily: FONTS.bold,
//     color: COLORS.white,
//     letterSpacing: 2,
//   },
//   tagline: {
//     marginTop: 10,
//     fontSize: 14,
//     fontFamily: FONTS.medium,
//     color: COLORS.textLight,
//   },
// });









// import React, { useEffect } from "react";
// import { View, Text, StyleSheet, Image } from "react-native";
// import Animated, {
//   FadeIn,
//   FadeInUp,
// } from "react-native-reanimated";
// import { COLORS } from "../../styles/colors";
// import { FONTS } from "../../styles/fonts";

// const SplashScreen = ({ navigation }) => {
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       navigation.replace("Login");
//     }, 2200);

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <View style={styles.container}>
//       {/* Logo */}
//       <Animated.View entering={FadeInUp.duration(900)}>
//         <Image
//           source={require("../../assets/images/logo1.png")}
//           style={styles.logo}
//         />
//       </Animated.View>

//       {/* App Name */}
//       {/* <Animated.Text
//         entering={FadeIn.delay(400)}
//         style={styles.appName}
//       >
//         EMPIX
//       </Animated.Text> */}

//       {/* Tagline */}
//       {/* <Animated.Text
//         entering={FadeIn.delay(700)}
//         style={styles.tagline}
//       >
//         Smart Employee Management
//       </Animated.Text> */}
//     </View>
//   );
// };

// export default SplashScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: COLORS.primary,
//     alignItems: "center",
//     justifyContent: "center",
//   },

//   logo: {
//     width: 200,
//     height: 200,
//     resizeMode: "contain",
//   },

//   appName: {
//     marginTop: 16,
//     fontSize: 30,
//     fontFamily: FONTS.bold,
//     color: COLORS.white,
//     letterSpacing: 2,
//   },

//   tagline: {
//     marginTop: 8,
//     fontSize: 13,
//     fontFamily: FONTS.medium,
//     color: COLORS.textLight,
//     letterSpacing: 0.5,
//   },
// });

















// import React, { useEffect } from "react";
// import {
//   View,
//   StyleSheet,
//   Image,
//   Dimensions,
//   StatusBar,
// } from "react-native";
// import Animated, { FadeInUp } from "react-native-reanimated";
// import { COLORS } from "../../styles/colors";

// const { width, height } = Dimensions.get("window");
// const SCREEN_MIN = Math.min(width, height);

// // Professional logo sizing
// const LOGO_SIZE = Math.min(Math.max(SCREEN_MIN * 0.38, 120), 220);

// const SplashScreen = ({ navigation }) => {
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       navigation.replace("Login");
//     }, 2200);

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <View style={styles.container}>
//       <StatusBar
//         barStyle="light-content"
//         backgroundColor={COLORS.primary}
//       />

//       <Animated.View entering={FadeInUp.duration(900)} style={styles.logoBox}>
//         <Image
//           source={require("../../assets/images/logo1.png")}
//           style={{
//             width: LOGO_SIZE,
//             height: LOGO_SIZE,
//             resizeMode: "contain",
//           }}
//         />
//       </Animated.View>
//     </View>
//   );
// };

// export default SplashScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: COLORS.primary,
//     alignItems: "center",
//     justifyContent: "center",
//   },

//   logoBox: {
//     marginTop: -20, // visual centering (very important)
//   },
// });






import React, { useEffect } from "react";
import {
  StyleSheet,
  Image,
  Dimensions,
  StatusBar,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Animated, { FadeInUp } from "react-native-reanimated";
import { COLORS } from "../../styles/colors";

const { width, height } = Dimensions.get("window");
const SCREEN_MIN = Math.min(width, height);
const LOGO_SIZE = Math.min(Math.max(SCREEN_MIN * 0.38, 120), 220);

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("Login");
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={COLORS.primary}
      />

      <Animated.View entering={FadeInUp.duration(900)} style={styles.logoBox}>
        <Image
          source={require("../../assets/images/logo1.png")}
          style={{
            width: LOGO_SIZE,
            height: LOGO_SIZE,
            resizeMode: "contain",
          }}
        />
      </Animated.View>
    </SafeAreaView>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  logoBox: {
    marginTop: -20,
  },
});
