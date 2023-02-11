import { StyleSheet } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import AllExpenses from "./screens/AllExpenses";
import RecentExpenses from "./screens/RecentExpenses";
import ManageExpense from "./screens/ManageExpense";

import GlobalConstants from "./util/GlobalConstants";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function ExpensesOverview() {
  return (
    <Tab.Navigator
      initialRouteName="AllExpenses"
      screenOptions={({ navigation }) => ({
        headerRight: ({ tintColor }) => (
          <Ionicons
            name="add"
            size={34}
            color={tintColor}
            style={styles.headerIcon}
            onPress={() => navigation.navigate("ManageExpenses")}
          />
        ),
      })}
    >
      <Tab.Screen
        name="AllExpenses"
        component={AllExpenses}
        options={{
          tabBarActiveTintColor: GlobalConstants.Colors.chromeYellow,
          tabBarInactiveTintColor: GlobalConstants.Colors.greenLandGreen,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="calendar" size={size} color={color} />
          ),
          tabBarBadge: 3,
        }}
      />
      <Tab.Screen
        name="RecentExpenses"
        component={RecentExpenses}
        options={{
          tabBarActiveTintColor: GlobalConstants.Colors.chromeYellow,
          tabBarInactiveTintColor: GlobalConstants.Colors.greenLandGreen,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="hourglass-end" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ExpensesOverview">
        <Stack.Screen
          name="ExpensesOverview"
          component={ExpensesOverview}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ManageExpenses"
          component={ManageExpense}
          options={{
            presentation: "modal",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerIcon: {
    marginRight: 16,
  },
});
