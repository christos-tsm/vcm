import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import {
    DrawerContentScrollView,
    DrawerItemList,
} from "@react-navigation/drawer";

const CustomDrawer = (props) => {
    return (
        <DrawerContentScrollView {...props}>
            <View style={styles.headerContainer}>
                <Image
                    style={styles.headerImage}
                    source={{
                        uri: "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHw%3D&w=1000&q=80",
                    }}
                />
                <View style={styles.headerTitleContainer}>
                    <Text style={styles.headerUsername}>John Doe</Text>
                    <Text style={styles.headerEmail}>john@doe.gr</Text>
                </View>
            </View>
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    );
};

export default CustomDrawer;

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        backgroundColor: "cyan",
    },
    headerImage: {
        marginRight: 15,
        width: 50,
        height: 50,
        borderRadius: 50,
    },
    headerUsername: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 5,
    },
    headerTitleContainer: {},
    headerEmail: {
        fontSize: 12,
        fontWeight: "100",
    },
});
