import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Platform, StyleSheet } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
// Screens
import HomeScreen from "./src/screens/HomeScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import CustomDrawer from "./src/components/CustomDrawer";
// Theme Options
import { theme } from "./src/theme";
import Header from "./src/components/Header";

import {
    Poppins_700Bold,
    Poppins_100Thin,
    Poppins_400Regular,
    useFonts,
} from "@expo-google-fonts/poppins";
import AppLoading from "expo-app-loading";

const Drawer = createDrawerNavigator();

export default function App() {
    let [fontsLoaded] = useFonts({
        Poppins_700Bold,
        Poppins_100Thin,
        Poppins_400Regular,
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    return (
        <SafeAreaView style={styles.safeAreaContainer}>
            <Header />
            <NavigationContainer>
                <Drawer.Navigator
                    drawerContent={(props) => {
                        return <CustomDrawer {...props} />;
                    }}
                    initialRouteName="Home"
                    screenOptions={{ headerShown: false }}
                >
                    <Drawer.Screen name="Home" component={HomeScreen} />
                    <Drawer.Screen name="Profile" component={ProfileScreen} />
                </Drawer.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeAreaContainer: {
        flex: 1,
        paddingTop: Platform.OS === "android" ? 40 : 0,
        // backgroundColor: theme.colors.primary,
        backgroundColor: "#fff",
    },
});
