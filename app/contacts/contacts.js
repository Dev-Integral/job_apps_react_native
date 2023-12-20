import "react-native-gesture-handler";

import { Stack, useRouter } from "expo-router";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, icons, images } from "../../constants";
import Homer from "../Homer";
import Home from "../home";
import {
  Fontawesome,
  SimpleLineIcons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { ScreenHeaderBtn } from "../../components";

const Drawer = createDrawerNavigator();

const Contact = () => {
  const router = useRouter();

  return (
    // <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
    //   <Stack.Screen
    //     options={{
    //         headerShown: false
    //     }}
    //    />
    //   <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
    //     <Text>Contact goes here</Text>
    //   </View>
    // </SafeAreaView>
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <NavigationContainer independent={true}>
        <Drawer.Navigator
          screenOptions={{
            drawerStyle: {
              backgroundColor: "#fff",
              width: 250,
            },
            headerStyle: {
              backgroundColor: "#f45eee",
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              height: 80,
            },
            headerTintColor: "#fff",
            headerTitleStyle: { fontWeight: "bold" },
            drawerActiveTintColor: "blue",
            drawerLabelStyle: { color: "#111" },
          }}
        >
          <Drawer.Screen
            name="Home"
            options={{
              drawerLabel: "Home",
              title: "Home",
              drawerIcon: () => <SimpleLineIcons name="home" size="20" color="#808080"/>,
              header: (p) => (
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: 12,
                      backgroundColor: "red"
                    }}
                  >
                    <ScreenHeaderBtn
                      iconUrl={icons.menu}
                      dimension={"60%"}
                      handlePress={() => p.navigation.toggleDrawer()}
                    />
                    <ScreenHeaderBtn iconUrl={images.profile} dimension={"100%"} />
                  </View>
              ),
              headerLeftContainerStyle: { backgroundColor: "blue" },
            }}
            component={Home}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default Contact;
