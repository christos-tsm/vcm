import { StyleSheet, Text, View, ImageBackground } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { theme } from "../../theme";

const Category = ({ title, imageUrl }) => {
    const image = {
        uri: imageUrl || "https://wallpaperaccess.com/full/1994610.jpg",
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.category} activeOpacity={1}>
                <ImageBackground source={image} style={styles.bgImage}>
                    <View style={styles.overlay}></View>
                    <Text style={styles.title}>{title}</Text>
                </ImageBackground>
            </TouchableOpacity>
        </View>
    );
};

export default Category;

const styles = StyleSheet.create({
    container: {
        flexBasis: "48%",
        marginBottom: 10,
    },
    overlay: {
        position: "absolute",
        backgroundColor: "rgba(0,0,0,0.4)",
        zIndex: 1,
        left: 0,
        top: 0,
        bottom: 0,
        right: 0,
    },
    category: {
        flex: 1,
        height: 250,
        borderRadius: 10,
        overflow: "hidden",
    },
    bgImage: {
        resizeMode: "cover",
        flex: 1,
        justifyContent: "flex-end",
        padding: 20,
        position: "relative",
    },
    title: {
        color: theme.colors.text_light,
        fontSize: 20,
        fontFamily: "Poppins_700Bold",
        position: "relative",
        zIndex: 2,
    },
});
