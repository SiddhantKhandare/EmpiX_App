import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { COLORS } from "../styles/colors";

// Screens
import HomeScreen from "../screens/home/HomeScreen";
import AttendanceScreen from "../screens/attendance/AttendanceScreen";
import LeaveScreen from "../screens/leave/LeaveScreen";
import ProfileScreen from "../screens/profile/ProfileScreen";


const Tab = createBottomTabNavigator();


const AppNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
tabBarHideOnKeyboard: true,

        tabBarShowLabel: true,
        tabBarActiveTintColor: COLORS.secondary,
        tabBarInactiveTintColor: "#94A3B8",

        tabBarStyle: styles.tabBar,
        tabBarLabelStyle: styles.label,

tabBarIcon: ({ focused, color }) => {
  let iconName;

  switch (route.name) {
    case "Home":
      iconName = focused ? "home" : "home-outline";
      break;
    case "Attendance":
      iconName = focused ? "camera" : "camera-outline";
      break;
    case "Leave":
      iconName = focused ? "calendar" : "calendar-outline";
      break;
    case "Profile":
      iconName = focused ? "person" : "person-outline";
      break;
  }

  return (
    <View
      style={[
        styles.iconWrapper,
        focused && styles.activeIcon,
      ]}
    >
      <Icon
        name={iconName}
        size={focused ? 24 : 22}
        color={color}
      />
    </View>
  );
},

      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Attendance" component={AttendanceScreen} />
      <Tab.Screen name="Leave" component={LeaveScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({
  /* 🔥 Floating Tab Bar */
  tabBar: {
    position: "absolute",
    left: 16,
    right: 16,
   bottom: 0,
    height: 70,
    borderRadius: 20,
    backgroundColor: COLORS.white,
    elevation: 15,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
  },

  label: {
    fontSize: 11,
    marginBottom: 6,
  },
  iconWrapper: {
  width: 44,
  height: 44,
  borderRadius: 14,
  justifyContent: "center",
  alignItems: "center",
},


  activeIcon: {
    backgroundColor: "#EEF2FF",
    padding: 10,
    borderRadius: 14,
  },

  placeholder: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
