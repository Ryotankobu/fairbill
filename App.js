import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Text, View } from "react-native";
import { HeaderBackButton } from "@react-navigation/elements";
import MainPage from "./src/screen/MainPage";
import EventCreationPage from "./src/screen/EventCreationPage";
import EventPage from "./src/screen/EventPage";
import EventResultPage from "./src/screen/EventResultPage";
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainPage">
        <Stack.Screen
          name="MainPage"
          component={MainPage}
          options={{ title: "Main Page", headerLeft: null }}
        />
        <Stack.Screen
          name="EventCreationPage"
          component={EventCreationPage}
          options={{ title: "Event Creation" }}
        />
        <Stack.Screen
          name="EventPage"
          component={EventPage}
          options={({ navigation }) => ({
            title: "Event Page",
            headerLeft: (props) => (
              <HeaderBackButton
                {...props}
                onPress={() => navigation.navigate("MainPage")}
              />
            ),
          })}
        />
        <Stack.Screen
          name="EventResultPage"
          component={EventResultPage}
          options={({ navigation }) => ({
            title: "Event Result Page",
            headerLeft: (props) => (
              <HeaderBackButton
                {...props}
                onPress={() => navigation.navigate("MainPage")}
              />
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
