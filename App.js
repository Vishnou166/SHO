import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LOGINPAGE from "./screens/login/loginpage";
import HOMEDB from "./screens/home/dashboard";
import SELECTBEAT from "./screens/assign/selectbeat";
import VIEWBEAT from "./screens/view/viewbeat";
import REPORTBEAT from "./screens/reports/reportbeat";
import PROFILE from "./screens/home/profile";
import DIRECTORY from "./screens/home/directory";
import NOTIFICATIONS from "./screens/home/notification";
import WELCOME from "./screens/login/welcome";
import SELECTHAMPLETS from "./screens/assign/selecthamplets";
import SELECTOFFICERS from "./screens/assign/selectofficers";
import SELECTTIMINGS from "./screens/assign/selecttimings";
import VIEWDETAILS from "./screens/view/viewdetails";
import PREVIOUS from "./screens/reports/previous";
import SELECT from "./screens/assign/select";
import TRACKING from "./screens/tracking/tracking";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WELCOME} />
        <Stack.Screen name="LoginPage" component={LOGINPAGE} />
        <Stack.Screen name="Tracking" component={TRACKING} />
        <Stack.Screen name="DashBoard" component={HOMEDB} />
        <Stack.Screen name="SelectBeat" component={SELECTBEAT} />
        <Stack.Screen name="SelectHamplets" component={SELECTHAMPLETS} />
        <Stack.Screen name="Select" component={SELECT} />
        <Stack.Screen name="SelectOfficers" component={SELECTOFFICERS} />
        <Stack.Screen name="SelectTimings" component={SELECTTIMINGS} />
        <Stack.Screen name="ViewBeat" component={VIEWBEAT} />
        <Stack.Screen name="ViewDetails" component={VIEWDETAILS} />
        <Stack.Screen name="ReportBeat" component={REPORTBEAT} />
        <Stack.Screen name="Previous" component={PREVIOUS} />
        <Stack.Screen name="Profile" component={PROFILE} />
        <Stack.Screen name="Directory" component={DIRECTORY} />
        <Stack.Screen name="Notifications" component={NOTIFICATIONS} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
