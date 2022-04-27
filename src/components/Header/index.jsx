import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
// Theme options
import { theme } from "../../theme";

const Header = () => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.headerImage}
                source={{
                    uri: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
                }}
            />
            <View style={styles.titleContainer}>
                <Text style={styles.subtitle}>Hello</Text>
                <Text style={styles.title}>John Doe</Text>
            </View>
            <View>
                <TouchableOpacity>
                    <MaterialIcons
                        name="favorite"
                        size={24}
                        color={theme.colors.primary}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 10,
        flexDirection: "row",
        alignItems: "center",
    },
    headerImage: {
        width: 60,
        height: 60,
        borderRadius: 50,
        borderWidth: 3,
        borderColor: theme.colors.primary,
        marginRight: 15,
    },
    titleContainer: {
        flex: 1,
    },
    subtitle: {
        fontFamily: "Poppins_400Regular",
        fontSize: 14,
    },
    title: {
        fontFamily: "Poppins_700Bold",
        fontSize: 20,
    },
});
