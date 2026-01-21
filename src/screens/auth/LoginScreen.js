// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
// } from "react-native";
// import { useDispatch, useSelector } from "react-redux";
// import { loginUser } from "../../redux/slices/authSlice";
// import { globalStyles } from "../../styles/globalStyles";

// const LoginScreen = () => {
//   const dispatch = useDispatch();
//   const { loading, error } = useSelector((state) => state.auth);

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = () => {
//     dispatch(loginUser({ email, password }));
//   };

//   return (
//     <View style={globalStyles.screen}>
//       <View style={styles.container}>
//         <Text style={globalStyles.title}>Login</Text>

//         <TextInput
//           placeholder="Email"
//           style={styles.input}
//           value={email}
//           onChangeText={setEmail}
//         />

//         <TextInput
//           placeholder="Password"
//           secureTextEntry
//           style={styles.input}
//           value={password}
//           onChangeText={setPassword}
//         />

//         <TouchableOpacity
//           style={globalStyles.button}
//           onPress={handleLogin}
//           disabled={loading}
//         >
//           <Text style={globalStyles.buttonText}>
//             {loading ? "Logging in..." : "Login"}
//           </Text>
//         </TouchableOpacity>

//         {error && <Text style={styles.error}>{error}</Text>}
//       </View>
//     </View>
//   );
// };

// export default LoginScreen;

// const styles = StyleSheet.create({
//   container: {
//     padding: 24,
//     marginTop: 100,
//   },
//   input: {
//     borderWidth: 1,
//     borderRadius: 12,
//     padding: 14,
//     marginTop: 16,
//   },
//   error: {
//     color: "red",
//     marginTop: 10,
//     textAlign: "center",
//   },
// });






















// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   Image,
// } from "react-native";
// import LinearGradient from "react-native-linear-gradient";
// import Icon from "react-native-vector-icons/Ionicons";
// import Animated, {
//   FadeInDown,
//   FadeInUp,
// } from "react-native-reanimated";
// import { useDispatch, useSelector } from "react-redux";
// import { loginUser } from "../../redux/slices/authSlice";
// import { COLORS } from "../../styles/colors";
// import { FONTS } from "../../styles/fonts";

// const LoginScreen = () => {
//   const dispatch = useDispatch();
//   const { loading, error } = useSelector((state) => state.auth);

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = () => {
//     dispatch(loginUser({ email, password }));
//   };

//   return (
//     <LinearGradient
//       colors={[COLORS.primary, COLORS.secondary]}
//       style={styles.container}
//     >
//       {/* Logo Section */}
//       <Animated.View entering={FadeInUp.duration(800)} style={styles.logoBox}>
//         <Image
//           source={require("../../assets/images/logo_icon.png")}
//           style={styles.logo}
//         />
//         <Text style={styles.appName}>EMPIX</Text>
//         <Text style={styles.tagline}>Smart Employee Management</Text>
//       </Animated.View>

//       {/* Card */}
//       <Animated.View entering={FadeInDown.duration(800)} style={styles.card}>
//         <Text style={styles.title}>Welcome Back</Text>
//         <Text style={styles.subtitle}>Login to continue</Text>

//         {/* Email */}
//         <View style={styles.inputContainer}>
//           <Icon name="mail-outline" size={20} color={COLORS.textLight} />
//           <TextInput
//             placeholder="Email address"
//             placeholderTextColor={COLORS.textLight}
//             style={styles.input}
//             value={email}
//             onChangeText={setEmail}
//           />
//         </View>

//         {/* Password */}
//         <View style={styles.inputContainer}>
//           <Icon name="lock-closed-outline" size={20} color={COLORS.textLight} />
//           <TextInput
//             placeholder="Password"
//             placeholderTextColor={COLORS.textLight}
//             secureTextEntry
//             style={styles.input}
//             value={password}
//             onChangeText={setPassword}
//           />
//         </View>

//         {/* Error */}
//         {error && <Text style={styles.error}>{error}</Text>}

//         {/* Button */}
//         <TouchableOpacity
//           activeOpacity={0.8}
//           style={styles.button}
//           onPress={handleLogin}
//           disabled={loading}
//         >
//           <Text style={styles.buttonText}>
//             {loading ? "Signing in..." : "Login"}
//           </Text>
//         </TouchableOpacity>

//         {/* Footer */}
//         <Text style={styles.footer}>
//           Secure login powered by Empix
//         </Text>
//       </Animated.View>
//     </LinearGradient>
//   );
// };

// export default LoginScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//   },

//   logoBox: {
//     alignItems: "center",
//     marginBottom: 30,
//   },

//   logo: {
//     width: 100,
//     height: 100,
//     resizeMode: "contain",
//   },

//   appName: {
//     fontSize: 32,
//     fontFamily: FONTS.bold,
//     color: COLORS.white,
//     // marginTop: 10,
//     letterSpacing: 2,
//   },

//   tagline: {
//     fontSize: 13,
//     fontFamily: FONTS.medium,
//     color: "#CBD5E1",
//     // marginTop: 4,
//   },

//   card: {
//     backgroundColor: COLORS.white,
//     marginHorizontal: 20,
//     borderRadius: 20,
//     padding: 24,
//     elevation: 10,
//   },

//   title: {
//     fontSize: 22,
//     fontFamily: FONTS.bold,
//     color: COLORS.textDark,
//   },

//   subtitle: {
//     fontSize: 13,
//     fontFamily: FONTS.regular,
//     color: COLORS.textLight,
//     marginBottom: 20,
//     marginTop: 4,
//   },

//   inputContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     borderWidth: 1,
//     borderColor: "#E5E7EB",
//     borderRadius: 14,
//     paddingHorizontal: 14,
//     marginTop: 16,
//     backgroundColor: "#F8FAFC",
//   },

//   input: {
//     flex: 1,
//     height: 50,
//     marginLeft: 10,
//     fontFamily: FONTS.medium,
//     color: COLORS.textDark,
//   },

//   button: {
//     backgroundColor: COLORS.secondary,
//     paddingVertical: 14,
//     borderRadius: 14,
//     alignItems: "center",
//     marginTop: 24,
//   },

//   buttonText: {
//     color: COLORS.white,
//     fontFamily: FONTS.semiBold,
//     fontSize: 16,
//   },

//   error: {
//     color: COLORS.danger,
//     textAlign: "center",
//     marginTop: 10,
//     fontSize: 13,
//   },

//   footer: {
//     textAlign: "center",
//     marginTop: 16,
//     fontSize: 12,
//     color: COLORS.textLight,
//   },
// });









import React, { useState } from "react";
import { useEffect } from "react";
import Toast from "react-native-toast-message";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar ,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Icon from "react-native-vector-icons/Ionicons";
import Animated, { FadeInDown, FadeInUp } from "react-native-reanimated";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/slices/authSlice";
import { COLORS } from "../../styles/colors";
import { FONTS } from "../../styles/fonts";

const { width, height } = Dimensions.get("window");
const SCREEN_MIN = Math.min(width, height);
const LOGO_SIZE = Math.min(Math.max(SCREEN_MIN * 0.28, 80), 140);

const LoginScreen = () => {
  const dispatch = useDispatch();
const { loading, error, token, employee } = useSelector(
  (state) => state.auth
);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    dispatch(loginUser({ email, password }));
  };

  useEffect(() => {
  if (token) {
    Toast.show({
      type: "success",
      text1: "Login Successful 🎉",
      text2: `Welcome ${employee?.name || "to Empix"}`,
    });
  }
}, [token]);


return (
  <>
    {/* ✅ LOGIN STATUS BAR */}
    <StatusBar
      backgroundColor={COLORS.primary}
      barStyle="light-content"
      hidden={false}
    />

    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
    >
      <LinearGradient
        colors={[COLORS.primary, COLORS.secondary]}
        style={styles.container}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          {/* 🔹 TOP BRAND SECTION */}
          <Animated.View entering={FadeInUp.duration(700)} style={styles.brand}>
            <Image
              source={require("../../assets/images/logo_icon.png")}
              style={{
                width: LOGO_SIZE,
                height: LOGO_SIZE,
                resizeMode: "contain",
              }}
            />
            <Text style={styles.appName}>EMPIX</Text>
            <Text style={styles.tagline}>
              Smart Employee Management
            </Text>
          </Animated.View>

          {/* 🔹 LOGIN CARD */}
          <Animated.View
            entering={FadeInDown.duration(700)}
            style={styles.card}
          >
            <Text style={styles.title}>Welcome Back</Text>
            <Text style={styles.subtitle}>Login to continue</Text>

            {/* Email */}
            <View style={styles.inputContainer}>
              <Icon name="mail-outline" size={20} color={COLORS.textLight} />
              <TextInput
                placeholder="Email address"
                placeholderTextColor={COLORS.textLight}
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                returnKeyType="next"
              />
            </View>

            {/* Password */}
            <View style={styles.inputContainer}>
              <Icon
                name="lock-closed-outline"
                size={20}
                color={COLORS.textLight}
              />
              <TextInput
                placeholder="Password"
                placeholderTextColor={COLORS.textLight}
                secureTextEntry
                style={styles.input}
                value={password}
                onChangeText={setPassword}
                returnKeyType="done"
              />
            </View>

            {error && <Text style={styles.error}>{error}</Text>}

            <TouchableOpacity
              activeOpacity={0.85}
              style={styles.button}
              onPress={handleLogin}
              disabled={loading}
            >
              <Text style={styles.buttonText}>
                {loading ? "Signing in..." : "Login"}
              </Text>
            </TouchableOpacity>

            <Text style={styles.footer}>
              Secure login powered by Empix
            </Text>
          </Animated.View>
        </ScrollView>
      </LinearGradient>
    </KeyboardAvoidingView>
  </>
);

};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    paddingVertical: 40,
  },

  /* 🔹 BRAND */
  brand: {
    alignItems: "center",
    marginBottom: 24,
  },

  appName: {
    marginTop: 10,
    fontSize: 30,
    fontFamily: FONTS.bold,
    color: COLORS.white,
    letterSpacing: 2,
  },

  tagline: {
    fontSize: 13,
    fontFamily: FONTS.medium,
    color: "#CBD5E1",
    marginTop: 2,
  },

  /* 🔹 CARD */
  card: {
    backgroundColor: COLORS.white,
    marginHorizontal: 20,
    borderRadius: 22,
    padding: 24,
    elevation: 12,
  },

  title: {
    fontSize: 22,
    fontFamily: FONTS.bold,
    color: COLORS.textDark,
  },

  subtitle: {
    fontSize: 13,
    fontFamily: FONTS.regular,
    color: COLORS.textLight,
    marginBottom: 20,
    marginTop: 4,
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 14,
    paddingHorizontal: 14,
    marginTop: 16,
    backgroundColor: "#F8FAFC",
  },

  input: {
    flex: 1,
    height: 50,
    marginLeft: 10,
    fontFamily: FONTS.medium,
    color: COLORS.textDark,
  },

  button: {
    backgroundColor: COLORS.secondary,
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: "center",
    marginTop: 24,
  },

  buttonText: {
    color: COLORS.white,
    fontFamily: FONTS.semiBold,
    fontSize: 16,
  },

  error: {
    color: COLORS.danger,
    textAlign: "center",
    marginTop: 10,
    fontSize: 13,
  },

  footer: {
    textAlign: "center",
    marginTop: 18,
    fontSize: 12,
    color: COLORS.textLight,
  },
});
