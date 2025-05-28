import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/FontAwesome";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import HomeScreen from "../screens/HomeScreen";
import LoadingScreen from "../screens/LoadingScreen";
import ProfileScreen from "../screens/ProfileScreen";
import DetailsScreen from "../screens/DetailsScreen";
import ReviewScreen from "../screens/ReviewScreen";
import FeedbackScreen from "../screens/FeedbackScreen";
import GetLocation from "../screens/GetLocation";
import SaveLocation from "../screens/SaveLocation";


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      headerShown: false, // Hide header tab bar
      tabBarIcon: ({ color, size }) => {
        const icons: any = {
          Home: "home",
          Profile: "user",
          Details: "clipboard",
          History: "history",
          Save: "bookmark",
        };
        return <Icon name={icons[route.name]} size={20} color={color} />;
      },
    })}
  >
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Details" component={DetailsScreen} />
    <Tab.Screen name="Profile" component={ProfileScreen} />
    <Tab.Screen name="History" component={GetLocation} />
    <Tab.Screen name="Save" component={SaveLocation} />
  </Tab.Navigator>
);


const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Loading" component={LoadingScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Main" component={BottomTabNavigator} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
      <Stack.Screen name="Review" component={ReviewScreen} />
      <Stack.Screen name="Feedback" component={FeedbackScreen} />
      <Stack.Screen name="History" component={GetLocation} />
      <Stack.Screen name="Save" component={SaveLocation} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;