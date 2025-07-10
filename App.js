import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import { HeaderBackButton } from "@react-navigation/elements";
import MainPage from "./src/screen/MainPage";
import EventCreationPage from "./src/screen/EventCreationPage";
import EventPage from "./src/screen/EventPage";
import EventResultPage from "./src/screen/EventResultPage";
const Stack = createStackNavigator();

export default function App() {
  const [events, setEvents] = useState([]);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainPage">
        <Stack.Screen
          name="MainPage"
          options={{ title: "Main Page", headerLeft: null }}
        >
          {(props) => (
            <MainPage {...props} events={events} setEvents={setEvents} />
          )}
        </Stack.Screen>
        <Stack.Screen
          name="EventCreationPage"
          options={{ title: "Event Creation" }}
        >
          {(props) => (
            <EventCreationPage
              {...props}
              events={events}
              setEvents={setEvents}
            />
          )}
        </Stack.Screen>
        <Stack.Screen
          name="EventPage"
          // component={EventPage}
          options={({ navigation }) => ({
            title: "Event Page",
            headerLeft: (props) => (
              <HeaderBackButton
                {...props}
                onPress={() => navigation.navigate("MainPage")}
              />
            ),
          })}
        >
          {(props) => (
            <EventPage {...props} events={events} setEvents={setEvents} />
          )}
        </Stack.Screen>
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
