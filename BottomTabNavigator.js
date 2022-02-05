import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import RideScreen from "../screens/Ride";
import RideHistoryScreen from "../screens/RideHistory";

const Tab = createBottomTabNavigator();

export default class BottomTabNavigator extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator>
          {/* 
            <TabScreen name="Viaje" component={RideScreen} />
            <TabScreen name="Historial de viajes" component={RideHistoryScreen} />
          */}

          {/* 
            <Tab.Screen name="Viaje" />
            <Tab.Screen name="Historial de viajes" />
          */}

          {/* 
            <Screen name="Viaje" component={RideScreen} />
            <Screen name="Historial de viajes" component={RideHistoryScreen} />
          */}

          {/* 
            <Tab.Screen name="Viaje" component={RideScreen} />
            <Tab.Screen name="Historial de viajes" component={RideHistoryScreen} />
          */}
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
