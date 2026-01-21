import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Ionicons";
import { COLORS } from "../../styles/colors";
import { FONTS } from "../../styles/fonts";

const LeaveScreen = () => {
  const [leaveType, setLeaveType] = useState("CASUAL");
  const [fromDate, setFromDate] = useState("2026-01-20");
  const [toDate, setToDate] = useState("2026-01-20");
  const [reason, setReason] = useState("");

  // dummy data (backend next)
  const leaves = [
    {
      id: "1",
      type: "CASUAL",
      from: "20 Jan",
      to: "21 Jan",
      status: "APPROVED",
    },
    {
      id: "2",
      type: "SICK",
      from: "10 Jan",
      to: "10 Jan",
      status: "PENDING",
    },
  ];

  const renderLeaveItem = ({ item }) => {
    const statusColor =
      item.status === "APPROVED"
        ? COLORS.success
        : item.status === "REJECTED"
        ? COLORS.danger
        : COLORS.warning;

    return (
      <View style={styles.leaveCard}>
        <View>
          <Text style={styles.leaveType}>{item.type} Leave</Text>
          <Text style={styles.leaveDate}>
            {item.from} → {item.to}
          </Text>
        </View>
        <Text style={[styles.status, { color: statusColor }]}>
          {item.status}
        </Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* HEADER */}
      <Text style={styles.title}>Leave Management</Text>

      {/* APPLY LEAVE CARD */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Apply Leave</Text>

        {/* Leave Type */}
        <View style={styles.typeRow}>
          {["CASUAL", "SICK", "PAID"].map((type) => (
            <TouchableOpacity
              key={type}
              style={[
                styles.typeBtn,
                leaveType === type && styles.activeType,
              ]}
              onPress={() => setLeaveType(type)}
            >
              <Text
                style={[
                  styles.typeText,
                  leaveType === type && styles.activeTypeText,
                ]}
              >
                {type}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Dates */}
        <View style={styles.dateRow}>
          <View style={styles.dateBox}>
            <Text style={styles.dateLabel}>From</Text>
            <Text style={styles.dateValue}>{fromDate}</Text>
          </View>

          <View style={styles.dateBox}>
            <Text style={styles.dateLabel}>To</Text>
            <Text style={styles.dateValue}>{toDate}</Text>
          </View>
        </View>

        {/* Reason */}
        <TextInput
          placeholder="Reason for leave"
          placeholderTextColor={COLORS.textLight}
          value={reason}
          onChangeText={setReason}
          style={styles.reasonInput}
          multiline
        />

        {/* Submit */}
        <TouchableOpacity style={styles.submitBtn}>
          <Icon name="send-outline" size={18} color={COLORS.white} />
          <Text style={styles.submitText}>Apply Leave</Text>
        </TouchableOpacity>
      </View>

      {/* MY LEAVES */}
      <Text style={styles.sectionTitle}>My Leaves</Text>

      <FlatList
        data={leaves}
        keyExtractor={(item) => item.id}
        renderItem={renderLeaveItem}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default LeaveScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: 20,
  },

  title: {
    fontSize: 22,
    fontFamily: FONTS.bold,
    color: COLORS.textDark,
    marginBottom: 10,
  },

  sectionTitle: {
    fontSize: 16,
    fontFamily: FONTS.semiBold,
    color: COLORS.textDark,
    marginBottom: 12,
    marginTop: 10,
  },

  /* CARD */
  card: {
    backgroundColor: COLORS.white,
    borderRadius: 20,
    padding: 18,
    elevation: 6,
    marginBottom: 20,
  },

  /* LEAVE TYPE */
  typeRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 14,
  },

  typeBtn: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 12,
    backgroundColor: "#F1F5F9",
    marginHorizontal: 4,
    alignItems: "center",
  },

  activeType: {
    backgroundColor: COLORS.secondary,
  },

  typeText: {
    fontFamily: FONTS.medium,
    color: COLORS.textDark,
    fontSize: 13,
  },

  activeTypeText: {
    color: COLORS.white,
  },

  /* DATE */
  dateRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 14,
  },

  dateBox: {
    flex: 1,
    padding: 12,
    backgroundColor: "#F8FAFC",
    borderRadius: 12,
    marginHorizontal: 4,
  },

  dateLabel: {
    fontSize: 12,
    fontFamily: FONTS.medium,
    color: COLORS.textLight,
  },

  dateValue: {
    marginTop: 4,
    fontSize: 14,
    fontFamily: FONTS.semiBold,
    color: COLORS.textDark,
  },

  /* REASON */
  reasonInput: {
    backgroundColor: "#F8FAFC",
    borderRadius: 12,
    padding: 12,
    minHeight: 70,
    fontFamily: FONTS.regular,
    color: COLORS.textDark,
    marginBottom: 16,
  },

  /* SUBMIT */
  submitBtn: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.secondary,
    paddingVertical: 14,
    borderRadius: 14,
  },

  submitText: {
    marginLeft: 8,
    color: COLORS.white,
    fontFamily: FONTS.semiBold,
    fontSize: 15,
  },

  /* LEAVE LIST */
  leaveCard: {
    backgroundColor: COLORS.white,
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    elevation: 4,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  leaveType: {
    fontSize: 14,
    fontFamily: FONTS.semiBold,
    color: COLORS.textDark,
  },

  leaveDate: {
    marginTop: 4,
    fontSize: 12,
    fontFamily: FONTS.regular,
    color: COLORS.textLight,
  },

  status: {
    fontSize: 12,
    fontFamily: FONTS.bold,
  },
});
