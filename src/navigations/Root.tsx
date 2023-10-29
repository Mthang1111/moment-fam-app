import { StyleSheet } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNav from "./TabNav";
import ErrorOverlay from "../components/ErrorOverlay";
import { useAppSelector } from "../store";
import Article from "../screens/Article";
import { RootStackParams } from "./config";

const Stack = createNativeStackNavigator<RootStackParams>();

const Root = () => {
  const { user } = useAppSelector((state) => state.user);
  return (
    <>
      <ErrorOverlay />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            headerTintColor: "black",
          }}
        >
          {/* {!user && <Stack.Screen name="Auth" component={AuthStack} />} */}
          <Stack.Screen name="TabNav" component={TabNav} />
          <Stack.Screen
            name="Article"
            component={Article}
            options={{
              headerShown: true,
              title: "Article",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Root;

const styles = StyleSheet.create({});
