import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Ionicons";
import { useDispatch, useSelector } from "react-redux";
import Toast from "react-native-toast-message";

import { logoutUser, clearAuth } from "../../redux/slices/authSlice";
import { COLORS } from "../../styles/colors";
import { FONTS } from "../../styles/fonts";

const ProfileScreen = () => {
  const dispatch = useDispatch();
  const { employee } = useSelector((state) => state.auth);

  const handleLogout = async () => {
    await dispatch(logoutUser());
    dispatch(clearAuth());

    Toast.show({
      type: "success",
      text1: "Logged out",
      text2: "You have been logged out successfully",
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* 🔹 HEADER */}
      <View style={styles.header}>
        <View style={styles.avatar}>
          <Icon name="person" size={42} color={COLORS.white} />
        </View>

        <Text style={styles.name}>{employee?.name}</Text>
        <Text style={styles.empId}>{employee?.employeeId}</Text>
      </View>

      {/* 🔹 INFO CARD */}
      <View style={styles.card}>
        <InfoRow icon="mail-outline" label="Email" value={employee?.email} />
        <InfoRow
          icon="briefcase-outline"
          label="Department"
          value={employee?.department}
        />
        <InfoRow
          icon="ribbon-outline"
          label="Designation"
          value={employee?.designation}
        />
      </View>

      {/* 🔹 LOGOUT */}
      <TouchableOpacity style={styles.logoutBtn} onPress={handleLogout}>
        <Icon name="log-out-outline" size={20} color={COLORS.white} />
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ProfileScreen;

/* 🔹 Reusable Info Row */
const InfoRow = ({ icon, label, value }) => (
  <View style={styles.infoRow}>
    <View style={styles.infoLeft}>
      <Icon name={icon} size={20} color={COLORS.secondary} />
      <Text style={styles.infoLabel}>{label}</Text>
    </View>
    <Text style={styles.infoValue}>{value}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: 20,
  },

  /* HEADER */
  header: {
    alignItems: "center",
    marginTop: 20,
    marginBottom: 30,
  },

  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: COLORS.secondary,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },

  name: {
    fontSize: 22,
    fontFamily: FONTS.bold,
    color: COLORS.textDark,
  },

  empId: {
    fontSize: 13,
    fontFamily: FONTS.medium,
    color: COLORS.textLight,
    marginTop: 4,
  },

  /* CARD */
  card: {
    backgroundColor: COLORS.white,
    borderRadius: 18,
    padding: 18,
    elevation: 6,
  },

  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
  },

  infoLeft: {
    flexDirection: "row",
    alignItems: "center",
  },

  infoLabel: {
    marginLeft: 10,
    fontSize: 14,
    fontFamily: FONTS.medium,
    color: COLORS.textLight,
  },

  infoValue: {
    fontSize: 14,
    fontFamily: FONTS.semiBold,
    color: COLORS.textDark,
    maxWidth: "60%",
    textAlign: "right",
  },

  /* LOGOUT */
  logoutBtn: {
    marginTop: 30,
    backgroundColor: COLORS.danger,
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },

  logoutText: {
    marginLeft: 8,
    color: COLORS.white,
    fontFamily: FONTS.semiBold,
    fontSize: 16,
  },
});
