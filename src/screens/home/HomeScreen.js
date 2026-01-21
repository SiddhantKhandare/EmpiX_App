// import React from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   ScrollView,
//   Dimensions,
//   StatusBar,
// } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import Icon from 'react-native-vector-icons/Ionicons';
// import { useSelector } from 'react-redux';

// import { COLORS } from '../../styles/colors';
// import { FONTS } from '../../styles/fonts';

// const { width } = Dimensions.get('window');

// const HomeScreen = () => {
//   const { employee } = useSelector(state => state.auth);
//   const firstName = employee?.name?.split(' ')[0] || 'Employee';

//   // Dummy data (API-ready)
//   const data = {
//     todayStatus: 'Present',
//     checkInTime: '09:42 AM',
//     checkOutTime: '--',
//     monthlyAttendance: '18 / 22',
//     pendingLeaves: 1,
//     leaveBalance: 10,
//     salaryAmount: '₹45,000',
//     salaryMonth: 'Jan 2026',
//   };

//   return (
//     <>
//      <StatusBar
//     backgroundColor={COLORS.primary}
//     barStyle="light-content"
//     translucent={false}
//   />
//     <SafeAreaView style={styles.safe}>
//       <StatusBar
//         backgroundColor={COLORS.primary} // same as header
//         barStyle="light-content" // white icons
//       />
//       <ScrollView
//         showsVerticalScrollIndicator={false}
//         contentContainerStyle={{ paddingBottom: 120 }}
//       >
//         {/* 🔷 HEADER SECTION (FULL WIDTH) */}
//         <View style={styles.header}>
//           <Text style={styles.greeting}>Hello, {firstName} 👋</Text>
//           <Text style={styles.subText}>Here’s your work overview today</Text>
//         </View>

//         {/* 🔷 ATTENDANCE SUMMARY (FULL WIDTH) */}
//         <View style={styles.fullCard}>
//           <View style={styles.rowBetween}>
//             <Text style={styles.cardTitle}>Today’s Attendance</Text>
//             <Icon name="checkmark-circle" size={20} color={COLORS.success} />
//           </View>

//           <Text style={styles.attendanceStatus}>{data.todayStatus}</Text>

//           <View style={styles.attendanceRow}>
//             <InfoItem label="Check In" value={data.checkInTime} />
//             <InfoItem label="Check Out" value={data.checkOutTime} />
//           </View>
//         </View>

//         {/* 🔷 GRID SECTION */}
//         <View style={styles.gridRow}>
//           <SmallCard
//             icon="calendar-outline"
//             title="Leaves"
//             value={`${data.pendingLeaves} Pending`}
//             sub={`${data.leaveBalance} Balance`}
//             color={COLORS.warning}
//           />

//           <SmallCard
//             icon="wallet-outline"
//             title="Salary"
//             value={data.salaryAmount}
//             sub={data.salaryMonth}
//             color={COLORS.success}
//           />
//         </View>

//         {/* 🔷 MONTHLY STATS */}
//         <View style={styles.fullCard}>
//           <Text style={styles.cardTitle}>Monthly Attendance</Text>
//           <Text style={styles.bigValue}>{data.monthlyAttendance}</Text>
//           <Text style={styles.smallText}>Present days this month</Text>
//         </View>

//         {/* 🔷 INFO */}
//         <View style={styles.infoBox}>
//           <Icon
//             name="information-circle-outline"
//             size={18}
//             color={COLORS.textLight}
//           />
//           <Text style={styles.infoText}>
//             Attendance, leave, and salary data are synced automatically.
//           </Text>
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//     </>
//   );
// };

// export default HomeScreen;

// /* 🔹 SMALL COMPONENTS */
// const InfoItem = ({ label, value }) => (
//   <View style={styles.infoItem}>
//     <Text style={styles.infoLabel}>{label}</Text>
//     <Text style={styles.infoValue}>{value}</Text>
//   </View>
// );

// const SmallCard = ({ icon, title, value, sub, color }) => (
//   <View style={styles.smallCard}>
//     <View style={[styles.iconBox, { backgroundColor: color }]}>
//       <Icon name={icon} size={22} color={COLORS.white} />
//     </View>
//     <Text style={styles.smallValue}>{value}</Text>
//     <Text style={styles.smallTitle}>{title}</Text>
//     <Text style={styles.smallSub}>{sub}</Text>
//   </View>
// );

// const styles = StyleSheet.create({
//   safe: {
//     flex: 1,
//     backgroundColor: COLORS.background,
//   },

//   /* HEADER */
//   header: {
//     backgroundColor: COLORS.primary,
//     paddingHorizontal: 20,
//     paddingVertical: 24,
//     borderBottomLeftRadius: 24,
//     borderBottomRightRadius: 24,
//   },

//   greeting: {
//     fontSize: 22,
//     fontFamily: FONTS.bold,
//     color: COLORS.white,
//   },

//   subText: {
//     marginTop: 6,
//     fontSize: 14,
//     fontFamily: FONTS.medium,
//     color: '#CBD5E1',
//   },

//   /* FULL CARD */
//   fullCard: {
//     backgroundColor: COLORS.white,
//     marginHorizontal: 16,
//     marginTop: 16,
//     borderRadius: 20,
//     padding: 18,
//     elevation: 6,
//   },

//   cardTitle: {
//     fontSize: 15,
//     fontFamily: FONTS.semiBold,
//     color: COLORS.textDark,
//   },

//   attendanceStatus: {
//     marginTop: 10,
//     fontSize: 26,
//     fontFamily: FONTS.bold,
//     color: COLORS.success,
//   },

//   attendanceRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginTop: 12,
//   },

//   infoItem: {
//     width: '48%',
//   },

//   infoLabel: {
//     fontSize: 12,
//     fontFamily: FONTS.medium,
//     color: COLORS.textLight,
//   },

//   infoValue: {
//     marginTop: 4,
//     fontSize: 14,
//     fontFamily: FONTS.semiBold,
//     color: COLORS.textDark,
//   },

//   /* GRID */
//   gridRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginHorizontal: 16,
//     marginTop: 16,
//   },

//   smallCard: {
//     width: '48%',
//     backgroundColor: COLORS.white,
//     borderRadius: 18,
//     padding: 16,
//     elevation: 5,
//   },

//   iconBox: {
//     width: 40,
//     height: 40,
//     borderRadius: 12,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 10,
//   },

//   smallValue: {
//     fontSize: 18,
//     fontFamily: FONTS.bold,
//     color: COLORS.textDark,
//   },

//   smallTitle: {
//     fontSize: 13,
//     fontFamily: FONTS.medium,
//     color: COLORS.textLight,
//   },

//   smallSub: {
//     fontSize: 12,
//     fontFamily: FONTS.regular,
//     color: COLORS.textLight,
//   },

//   bigValue: {
//     marginTop: 12,
//     fontSize: 28,
//     fontFamily: FONTS.bold,
//     color: COLORS.secondary,
//   },

//   smallText: {
//     marginTop: 4,
//     fontSize: 12,
//     fontFamily: FONTS.regular,
//     color: COLORS.textLight,
//   },

//   /* COMMON */
//   rowBetween: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },

//   infoBox: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#F1F5F9',
//     borderRadius: 16,
//     padding: 14,
//     margin: 16,
//   },

//   infoText: {
//     marginLeft: 8,
//     fontSize: 12,
//     fontFamily: FONTS.regular,
//     color: COLORS.textLight,
//     flex: 1,
//   },
// });






















// import React from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   ScrollView,
// } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
// import { StatusBar } from "react-native";
// import Icon from "react-native-vector-icons/Ionicons";
// import { useSelector } from "react-redux";

// import { COLORS } from "../../styles/colors";
// import { FONTS } from "../../styles/fonts";

// const HomeScreen = () => {
//   const { employee } = useSelector((state) => state.auth);

//   const firstName = employee?.name?.split(" ")[0] || "Employee";

//   // 🔹 TEMP DATA (API WILL REPLACE THIS)
//   const data = {
//     empId: employee?.employeeId || "EMPX-0001",
//     department: employee?.department || "IT",
//     designation: employee?.designation || "Developer",

//     todayStatus: "Present",
//     checkIn: "09:42 AM",
//     checkOut: "--",

//     monthlyAttendance: "18 / 22",

//     pendingLeaves: 1,
//     leaveBalance: 10,

//     lastSalary: "₹45,000",
//     salaryMonth: "Jan 2026",
//   };

//   return (
//     <>
//       {/* STATUS BAR MATCH HEADER */}
//       <StatusBar
//         backgroundColor={COLORS.primary}
//         barStyle="light-content"
//       />

//       <SafeAreaView style={styles.safe}>
//         <ScrollView
//           showsVerticalScrollIndicator={false}
//           contentContainerStyle={{ paddingBottom: 120 }}
//         >
//           {/* 🔷 HEADER */}
//           <View style={styles.header}>
//             <Text style={styles.greeting}>Hello, {firstName} 👋</Text>
//             <Text style={styles.empInfo}>
//               {data.designation} • {data.department}
//             </Text>
//             <Text style={styles.empId}>ID: {data.empId}</Text>
//           </View>

//           {/* 🔷 TODAY ATTENDANCE */}
//           <View style={styles.fullCard}>
//             <View style={styles.rowBetween}>
//               <Text style={styles.cardTitle}>Today’s Attendance</Text>
//               <Icon
//                 name="checkmark-circle"
//                 size={20}
//                 color={COLORS.success}
//               />
//             </View>

//             <Text style={styles.attendanceStatus}>
//               {data.todayStatus}
//             </Text>

//             <View style={styles.attendanceRow}>
//               <InfoItem label="Check In" value={data.checkIn} />
//               <InfoItem label="Check Out" value={data.checkOut} />
//             </View>
//           </View>

//           {/* 🔷 QUICK STATS */}
//           <View style={styles.gridRow}>
//             <SmallCard
//               icon="calendar-outline"
//               title="Leaves"
//               value={`${data.pendingLeaves} Pending`}
//               sub={`${data.leaveBalance} Balance`}
//               color={COLORS.warning}
//             />

//             <SmallCard
//               icon="wallet-outline"
//               title="Salary"
//               value={data.lastSalary}
//               sub={data.salaryMonth}
//               color={COLORS.success}
//             />
//           </View>

//           {/* 🔷 MONTHLY ATTENDANCE */}
//           <View style={styles.fullCard}>
//             <Text style={styles.cardTitle}>Monthly Attendance</Text>
//             <Text style={styles.bigValue}>
//               {data.monthlyAttendance}
//             </Text>
//             <Text style={styles.smallText}>
//               Present days this month
//             </Text>
//           </View>

//           {/* 🔷 ALERTS */}
//           {data.pendingLeaves > 0 && (
//             <View style={styles.alertBox}>
//               <Icon
//                 name="alert-circle-outline"
//                 size={18}
//                 color={COLORS.warning}
//               />
//               <Text style={styles.alertText}>
//                 You have {data.pendingLeaves} leave request pending approval.
//               </Text>
//             </View>
//           )}
//         </ScrollView>
//       </SafeAreaView>
//     </>
//   );
// };

// export default HomeScreen;

// /* SMALL COMPONENTS */

// const InfoItem = ({ label, value }) => (
//   <View style={styles.infoItem}>
//     <Text style={styles.infoLabel}>{label}</Text>
//     <Text style={styles.infoValue}>{value}</Text>
//   </View>
// );

// const SmallCard = ({ icon, title, value, sub, color }) => (
//   <View style={styles.smallCard}>
//     <View style={[styles.iconBox, { backgroundColor: color }]}>
//       <Icon name={icon} size={22} color={COLORS.white} />
//     </View>
//     <Text style={styles.smallValue}>{value}</Text>
//     <Text style={styles.smallTitle}>{title}</Text>
//     <Text style={styles.smallSub}>{sub}</Text>
//   </View>
// );

// const styles = StyleSheet.create({
//   safe: {
//     flex: 1,
//     backgroundColor: COLORS.background,
//   },

//   /* HEADER */
//   header: {
//     backgroundColor: COLORS.primary,
//     paddingHorizontal: 20,
//     paddingVertical: 24,
//     borderBottomLeftRadius: 24,
//     borderBottomRightRadius: 24,
//   },

//   greeting: {
//     fontSize: 22,
//     fontFamily: FONTS.bold,
//     color: COLORS.white,
//   },

//   empInfo: {
//     marginTop: 6,
//     fontSize: 14,
//     fontFamily: FONTS.medium,
//     color: "#CBD5E1",
//   },

//   empId: {
//     marginTop: 2,
//     fontSize: 12,
//     fontFamily: FONTS.regular,
//     color: "#CBD5E1",
//   },

//   /* FULL CARD */
//   fullCard: {
//     backgroundColor: COLORS.white,
//     marginHorizontal: 16,
//     marginTop: 16,
//     borderRadius: 20,
//     padding: 18,
//     elevation: 6,
//   },

//   cardTitle: {
//     fontSize: 15,
//     fontFamily: FONTS.semiBold,
//     color: COLORS.textDark,
//   },

//   attendanceStatus: {
//     marginTop: 10,
//     fontSize: 26,
//     fontFamily: FONTS.bold,
//     color: COLORS.success,
//   },

//   attendanceRow: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     marginTop: 12,
//   },

//   infoItem: {
//     width: "48%",
//   },

//   infoLabel: {
//     fontSize: 12,
//     fontFamily: FONTS.medium,
//     color: COLORS.textLight,
//   },

//   infoValue: {
//     marginTop: 4,
//     fontSize: 14,
//     fontFamily: FONTS.semiBold,
//     color: COLORS.textDark,
//   },

//   /* GRID */
//   gridRow: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     marginHorizontal: 16,
//     marginTop: 16,
//   },

//   smallCard: {
//     width: "48%",
//     backgroundColor: COLORS.white,
//     borderRadius: 18,
//     padding: 16,
//     elevation: 5,
//   },

//   iconBox: {
//     width: 40,
//     height: 40,
//     borderRadius: 12,
//     justifyContent: "center",
//     alignItems: "center",
//     marginBottom: 10,
//   },

//   smallValue: {
//     fontSize: 18,
//     fontFamily: FONTS.bold,
//     color: COLORS.textDark,
//   },

//   smallTitle: {
//     fontSize: 13,
//     fontFamily: FONTS.medium,
//     color: COLORS.textLight,
//   },

//   smallSub: {
//     fontSize: 12,
//     fontFamily: FONTS.regular,
//     color: COLORS.textLight,
//   },

//   bigValue: {
//     marginTop: 12,
//     fontSize: 28,
//     fontFamily: FONTS.bold,
//     color: COLORS.secondary,
//   },

//   smallText: {
//     marginTop: 4,
//     fontSize: 12,
//     fontFamily: FONTS.regular,
//     color: COLORS.textLight,
//   },

//   /* ALERT */
//   alertBox: {
//     flexDirection: "row",
//     alignItems: "center",
//     backgroundColor: "#FEF3C7",
//     borderRadius: 16,
//     padding: 14,
//     margin: 16,
//   },

//   alertText: {
//     marginLeft: 8,
//     fontSize: 12,
//     fontFamily: FONTS.medium,
//     color: "#92400E",
//     flex: 1,
//   },

//   rowBetween: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//   },
// });
















import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Ionicons";
import { useSelector } from "react-redux";

import AnimatedNumber from "../../components/AnimatedNumber";
import { COLORS } from "../../styles/colors";
import { FONTS } from "../../styles/fonts";

const HomeScreen = ({ navigation }) => {
  const { employee } = useSelector((state) => state.auth);
  const firstName = employee?.name?.split(" ")[0] || "Employee";

  // 🔹 TEMP DATA (API WILL REPLACE)
  const data = {
    empId: employee?.employeeId || "EMPX-0001",
    department: employee?.department || "IT",
    designation: employee?.designation || "Developer",

    todayStatus: "Present",
    checkIn: "09:42 AM",
    checkOut: "--",

    monthlyPresent: 18,
    monthlyTotal: 22,

    pendingLeaves: 1,
    leaveBalance: 10,

    salaryAmount: 45000,
    salaryMonth: "Jan 2026",

    unreadNotifications: 2,
  };

  return (
    <>
      {/* ✅ STATUS BAR */}
      <StatusBar
        backgroundColor={COLORS.primary}
        barStyle="light-content"
      />

      <SafeAreaView style={styles.safe}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 120 }}
        >
          {/* 🔷 HEADER */}
          <View style={styles.header}>
            <View style={styles.headerRow}>
              <View>
                <Text style={styles.greeting}>
                  Hello, {firstName} 👋
                </Text>
                <Text style={styles.empInfo}>
                  {data.designation} • {data.department}
                </Text>
                <Text style={styles.empId}>
                  ID: {data.empId}
                </Text>
              </View>

              {/* 🔔 NOTIFICATION */}
              <TouchableOpacity
                style={styles.notificationBtn}
                activeOpacity={0.7}
              >
                <Icon
                  name="notifications-outline"
                  size={24}
                  color={COLORS.white}
                />
                {data.unreadNotifications > 0 && (
                  <View style={styles.badge}>
                    <Text style={styles.badgeText}>
                      {data.unreadNotifications}
                    </Text>
                  </View>
                )}
              </TouchableOpacity>
            </View>
          </View>

          {/* 🔷 TODAY ATTENDANCE */}
          <TouchableOpacity
            style={styles.fullCard}
            activeOpacity={0.85}
            onPress={() => navigation.navigate("Attendance")}
          >
            <View style={styles.rowBetween}>
              <Text style={styles.cardTitle}>
                Today’s Attendance
              </Text>
              <Icon
                name="checkmark-circle"
                size={20}
                color={COLORS.success}
              />
            </View>

            <Text style={styles.attendanceStatus}>
              {data.todayStatus}
            </Text>

            <View style={styles.attendanceRow}>
              <InfoItem label="Check In" value={data.checkIn} />
              <InfoItem label="Check Out" value={data.checkOut} />
            </View>
          </TouchableOpacity>

          {/* 🔷 QUICK STATS */}
          <View style={styles.gridRow}>
            <DashboardCard
              icon="calendar-outline"
              title="Leaves"
              value={data.leaveBalance}
              sub={`${data.pendingLeaves} Pending`}
              color={COLORS.warning}
              onPress={() => navigation.navigate("Leave")}
            />

            <DashboardCard
              icon="wallet-outline"
              title="Salary"
              value={data.salaryAmount}
              sub={data.salaryMonth}
              color={COLORS.success}
              isMoney
            />
          </View>

          {/* 🔷 MONTHLY ATTENDANCE */}
          <View style={styles.fullCard}>
            <Text style={styles.cardTitle}>
              Monthly Attendance
            </Text>

            <AnimatedNumber
              value={data.monthlyPresent}
              suffix={` / ${data.monthlyTotal}`}
              style={styles.bigValue}
            />

            <Text style={styles.smallText}>
              Present days this month
            </Text>
          </View>

          {/* 🔷 ALERT */}
          {data.pendingLeaves > 0 && (
            <View style={styles.alertBox}>
              <Icon
                name="alert-circle-outline"
                size={18}
                color={COLORS.warning}
              />
              <Text style={styles.alertText}>
                You have {data.pendingLeaves} leave request pending.
              </Text>
            </View>
          )}
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default HomeScreen;

/* 🔹 SMALL COMPONENTS */

const InfoItem = ({ label, value }) => (
  <View style={styles.infoItem}>
    <Text style={styles.infoLabel}>{label}</Text>
    <Text style={styles.infoValue}>{value}</Text>
  </View>
);

const DashboardCard = ({
  icon,
  title,
  value,
  sub,
  color,
  onPress,
  isMoney,
}) => (
  <TouchableOpacity
    style={styles.smallCard}
    activeOpacity={0.85}
    onPress={onPress}
  >
    <View style={[styles.iconBox, { backgroundColor: color }]}>
      <Icon name={icon} size={22} color={COLORS.white} />
    </View>

    <AnimatedNumber
      value={value}
      prefix={isMoney ? "₹" : ""}
      style={styles.smallValue}
    />

    <Text style={styles.smallTitle}>{title}</Text>
    <Text style={styles.smallSub}>{sub}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  /* HEADER */
  header: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: 20,
    paddingVertical: 24,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },

  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  greeting: {
    fontSize: 22,
    fontFamily: FONTS.bold,
    color: COLORS.white,
  },

  empInfo: {
    marginTop: 6,
    fontSize: 14,
    fontFamily: FONTS.medium,
    color: "#CBD5E1",
  },

  empId: {
    marginTop: 2,
    fontSize: 12,
    fontFamily: FONTS.regular,
    color: "#CBD5E1",
  },

  /* NOTIFICATION */
  notificationBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(255,255,255,0.15)",
    justifyContent: "center",
    alignItems: "center",
  },

  badge: {
    position: "absolute",
    top: 6,
    right: 6,
    backgroundColor: COLORS.danger,
    borderRadius: 8,
    minWidth: 16,
    height: 16,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 4,
  },

  badgeText: {
    fontSize: 10,
    fontFamily: FONTS.bold,
    color: COLORS.white,
  },

  /* FULL CARD */
  fullCard: {
    backgroundColor: COLORS.white,
    marginHorizontal: 16,
    marginTop: 16,
    borderRadius: 20,
    padding: 18,
    elevation: 6,
  },

  cardTitle: {
    fontSize: 15,
    fontFamily: FONTS.semiBold,
    color: COLORS.textDark,
  },

  attendanceStatus: {
    marginTop: 10,
    fontSize: 26,
    fontFamily: FONTS.bold,
    color: COLORS.success,
  },

  attendanceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12,
  },

  infoItem: {
    width: "48%",
  },

  infoLabel: {
    fontSize: 12,
    fontFamily: FONTS.medium,
    color: COLORS.textLight,
  },

  infoValue: {
    marginTop: 4,
    fontSize: 14,
    fontFamily: FONTS.semiBold,
    color: COLORS.textDark,
  },

  /* GRID */
  gridRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 16,
    marginTop: 16,
  },

  smallCard: {
    width: "48%",
    backgroundColor: COLORS.white,
    borderRadius: 18,
    padding: 16,
    elevation: 5,
  },

  iconBox: {
    width: 40,
    height: 40,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },

  smallValue: {
    fontSize: 18,
    fontFamily: FONTS.bold,
    color: COLORS.textDark,
  },

  smallTitle: {
    fontSize: 13,
    fontFamily: FONTS.medium,
    color: COLORS.textLight,
  },

  smallSub: {
    fontSize: 12,
    fontFamily: FONTS.regular,
    color: COLORS.textLight,
  },

  bigValue: {
    marginTop: 12,
    fontSize: 28,
    fontFamily: FONTS.bold,
    color: COLORS.secondary,
  },

  smallText: {
    marginTop: 4,
    fontSize: 12,
    fontFamily: FONTS.regular,
    color: COLORS.textLight,
  },

  alertBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FEF3C7",
    borderRadius: 16,
    padding: 14,
    margin: 16,
  },

  alertText: {
    marginLeft: 8,
    fontSize: 12,
    fontFamily: FONTS.medium,
    color: "#92400E",
    flex: 1,
  },

  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

