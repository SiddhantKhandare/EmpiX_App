// import React, { useEffect } from "react";
// import { Provider, useDispatch } from "react-redux";
// import { store } from "./src/redux/store";
// import RootNavigator from "./src/navigation/RootNavigator";
// import { loadUserFromStorage } from "./src/redux/slices/authSlice";
// import Toast from "react-native-toast-message";
// import { SafeAreaProvider } from "react-native-safe-area-context";


// const InitApp = () => {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(loadUserFromStorage());
//   }, []);

//   return <RootNavigator />;
// };

// const App = () => {
//   return (
//     <Provider store={store}>
//       <SafeAreaProvider>
//         <InitApp />
//         <Toast />
//       </SafeAreaProvider>
//     </Provider>
//   );
// };

// export default App;










import React, { useEffect } from "react";
import { Provider, useDispatch } from "react-redux";
import { StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Toast from "react-native-toast-message";

import { store } from "./src/redux/store";
import RootNavigator from "./src/navigation/RootNavigator";
import { loadUserFromStorage } from "./src/redux/slices/authSlice";
import { COLORS } from "./src/styles/colors";

const InitApp = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUserFromStorage());
  }, []);

  return <RootNavigator />;
};

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>

        {/* ✅ GLOBAL STATUS BAR (VISIBLE EVERYWHERE) */}
        <StatusBar
          hidden={false}
          backgroundColor={COLORS.background}
          barStyle="dark-content"
        />

        <InitApp />
        <Toast />

      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
