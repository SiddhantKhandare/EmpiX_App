import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Ionicons";
import { launchCamera } from "react-native-image-picker";
import axios from "axios";
import { useSelector } from "react-redux";
import Animated, {
  FadeIn,
  FadeOut,
  ZoomIn,
} from "react-native-reanimated";

import { COLORS } from "../../styles/colors";
import { FONTS } from "../../styles/fonts";

const API_BASE = "http://10.0.2.2:5000/api/attendance";

const AttendanceScreen = () => {
  const { token } = useSelector((state) => state.auth);

  const [time, setTime] = useState(new Date());
  const [checkedIn, setCheckedIn] = useState(false);
  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState(false);

  // success animation state
  const [showSuccess, setShowSuccess] = useState(false);
  const [successText, setSuccessText] = useState("");

  /* 🕒 Update clock every minute */
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  const formattedTime = time.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const formattedDate = time.toLocaleDateString([], {
    weekday: "long",
    day: "numeric",
    month: "long",
  });

  /* 📸 Open Front Camera */
  const openCamera = async () => {
    const result = await launchCamera({
      cameraType: "front",
      mediaType: "photo",
      quality: 0.7,
      saveToPhotos: false,
    });

    if (result.didCancel || !result.assets) return;

    setPhoto(result.assets[0]);
  };

  /* 🚀 Punch In / Punch Out */
  const submitAttendance = async () => {
    if (!photo) {
      setSuccessText("Please take a selfie first");
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 1200);
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("photo", {
        uri: photo.uri,
        type: photo.type,
        name: photo.fileName || "attendance.jpg",
      });

      const endpoint = checkedIn ? "punch-out" : "punch-in";

      await axios.post(`${API_BASE}/${endpoint}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      // success animation
      setSuccessText(
        checkedIn ? "Punch Out Successful" : "Punch In Successful"
      );
      setShowSuccess(true);

      setCheckedIn(!checkedIn);
      setPhoto(null);

      setTimeout(() => {
        setShowSuccess(false);
      }, 1500);
    } catch (error) {
      console.log(
        "❌ Attendance Error:",
        error.response?.data || error.message
      );
      setSuccessText("Attendance Failed");
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 1500);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* HEADER */}
      <View>
        <Text style={styles.title}>Attendance</Text>
        <Text style={styles.date}>{formattedDate}</Text>
      </View>

      {/* CLOCK CARD */}
      <View style={styles.clockCard}>
        <Text style={styles.time}>{formattedTime}</Text>
        <Text style={styles.status}>
          {checkedIn ? "Checked In" : "Not Checked In"}
        </Text>
      </View>

      {/* PHOTO PREVIEW */}
      {photo && (
        <Image source={{ uri: photo.uri }} style={styles.preview} />
      )}

      {/* CAMERA BUTTON */}
      <TouchableOpacity style={styles.cameraBtn} onPress={openCamera}>
        <Icon name="camera-outline" size={22} color={COLORS.white} />
        <Text style={styles.btnText}>Take Selfie</Text>
      </TouchableOpacity>

      {/* SUBMIT BUTTON */}
      <TouchableOpacity
        style={[
          styles.submitBtn,
          { backgroundColor: checkedIn ? COLORS.danger : COLORS.success },
        ]}
        onPress={submitAttendance}
        disabled={loading}
      >
        <Text style={styles.submitText}>
          {loading
            ? "Processing..."
            : checkedIn
            ? "Punch Out"
            : "Punch In"}
        </Text>
      </TouchableOpacity>

      <Text style={styles.info}>
        Face verification is mandatory for attendance
      </Text>

      {/* ✅ SUCCESS ANIMATION OVERLAY */}
      {showSuccess && (
        <Animated.View
          entering={FadeIn}
          exiting={FadeOut}
          style={styles.successOverlay}
        >
          <Animated.View
            entering={ZoomIn.duration(400)}
            style={styles.successCard}
          >
            <Icon
              name="checkmark-circle"
              size={72}
              color={COLORS.success}
            />
            <Text style={styles.successText}>{successText}</Text>
          </Animated.View>
        </Animated.View>
      )}
    </SafeAreaView>
  );
};

export default AttendanceScreen;

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
  },

  date: {
    marginTop: 4,
    fontSize: 14,
    fontFamily: FONTS.medium,
    color: COLORS.textLight,
  },

  clockCard: {
    marginVertical: 20,
    backgroundColor: COLORS.white,
    borderRadius: 22,
    paddingVertical: 35,
    alignItems: "center",
    elevation: 6,
  },

  time: {
    fontSize: 44,
    fontFamily: FONTS.bold,
    color: COLORS.textDark,
  },

  status: {
    marginTop: 8,
    fontSize: 14,
    fontFamily: FONTS.medium,
    color: COLORS.textLight,
  },

  preview: {
    width: 120,
    height: 120,
    borderRadius: 60,
    alignSelf: "center",
    marginBottom: 16,
  },

  cameraBtn: {
    flexDirection: "row",
    backgroundColor: COLORS.secondary,
    paddingVertical: 14,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
  },

  btnText: {
    marginLeft: 8,
    color: COLORS.white,
    fontFamily: FONTS.semiBold,
  },

  submitBtn: {
    marginTop: 14,
    paddingVertical: 16,
    borderRadius: 18,
    alignItems: "center",
  },

  submitText: {
    color: COLORS.white,
    fontFamily: FONTS.bold,
    fontSize: 16,
  },

  info: {
    marginTop: 12,
    textAlign: "center",
    fontSize: 12,
    fontFamily: FONTS.regular,
    color: COLORS.textLight,
  },

  /* 🔥 SUCCESS ANIMATION */
  successOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.35)",
    justifyContent: "center",
    alignItems: "center",
  },

  successCard: {
    backgroundColor: COLORS.white,
    paddingVertical: 30,
    paddingHorizontal: 40,
    borderRadius: 24,
    alignItems: "center",
    elevation: 12,
  },

  successText: {
    marginTop: 12,
    fontSize: 16,
    fontFamily: FONTS.semiBold,
    color: COLORS.textDark,
  },
});
