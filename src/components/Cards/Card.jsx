import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    Platform,
} from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { theme } from "../../theme";

const Card = ({ title, area, imageUrl, description, rating }) => {
    const image = {
        uri: imageUrl || "https://wallpaperaccess.com/full/1994610.jpg",
    };

    return (
        <TouchableOpacity style={styles.container} activeOpacity={1}>
            <ImageBackground source={image} style={styles.bgImage}>
                <View style={styles.overlay}></View>
                <View style={styles.contentContainer}>
                    <Text style={styles.cardTitle}>{title}</Text>
                    <Text style={styles.cardSubtitle}>{area}</Text>
                </View>
            </ImageBackground>
        </TouchableOpacity>
    );
};

export default Card;

const styles = StyleSheet.create({
    container: {
        width: 280,
        height: 450,
        backgroundColor: theme.colors.primary,
        marginHorizontal: 10,
        borderRadius: 20,
        overflow: "hidden",
    },
    bgImage: {
        resizeMode: "cover",
        flex: 1,
    },
    contentContainer: {
        paddingHorizontal: 20,
        paddingVertical: 30,
        flex: 1,
        justifyContent: "flex-end",
        position: "relative",
        zIndex: 2,
    },
    cardTitle: {
        fontFamily: "Poppins_700Bold",
        fontSize: Platform.OS === "android" ? 20 : 18,
        marginBottom: 5,
        color: theme.colors.text_light,
    },
    cardSubtitle: {
        fontFamily: "Poppins_400Regular",
        color: theme.colors.text_light,
        fontSize: 16,
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
});
