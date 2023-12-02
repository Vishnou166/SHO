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
        <Stack.Screen
          name="Welcome"
          component={WELCOME}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="LoginPage"
          component={LOGINPAGE}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="Tracking"
          component={TRACKING}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="DashBoard"
          component={HOMEDB}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="SelectBeat"
          component={SELECTBEAT}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="SelectHamplets"
          component={SELECTHAMPLETS}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="Select"
          component={SELECT}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="SelectOfficers"
          component={SELECTOFFICERS}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="SelectTimings"
          component={SELECTTIMINGS}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="ViewBeat"
          component={VIEWBEAT}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="ViewDetails"
          component={VIEWDETAILS}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="ReportBeat"
          component={REPORTBEAT}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="Previous"
          component={PREVIOUS}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="Profile"
          component={PROFILE}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="Directory"
          component={DIRECTORY}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="Notifications"
          component={NOTIFICATIONS}
          options={{ header: () => null }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
