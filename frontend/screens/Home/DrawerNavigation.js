import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "./Home"; // Import your Home component

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false, // Hide header if using custom header inside components
        drawerStyle: {
          backgroundColor: "#fff", // Customize drawer background color
          width: 240,
        },
      }}
    >
      <Drawer.Screen name="Home" component={Home} />
      {/* You can add more screens in the drawer here */}
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
