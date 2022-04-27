import { StyleSheet, Text, View, Platform, ScrollView } from "react-native";
import React, { useState } from "react";
import CardsContainer from "../components/Cards/CardsContainer";
import { theme } from "../theme";
import { TouchableOpacity } from "react-native-gesture-handler";
import CategoriesGrid from "../components/Categories/CategoriesGrid";

import { data as featured } from "../../dummy";
import { data as outerLocations } from "../../outer-volos-locations";

const HomeScreen = ({ navigation }) => {
    const [isActiveExperiences, setIsActiveExperiences] = useState(true);
    const [isActiveTours, setIsActiveTours] = useState(false);
    const [isActiveMuseums, setIsActiveMuseums] = useState(false);

    return (
        <ScrollView style={{ backgroundColor: "#fff" }}>
            <View style={styles.container}>
                <Text style={styles.title}>Discover Volos</Text>
                <Text style={styles.text}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                    illum dolorem iure.
                </Text>
            </View>
            <View>
                <View style={styles.cardsTitlesContainer}>
                    <TouchableOpacity
                        style={styles.cardTitleContainer}
                        onPress={() => {
                            setIsActiveExperiences(true);
                            setIsActiveMuseums(false);
                            setIsActiveTours(false);
                        }}
                    >
                        <Text
                            style={[
                                styles.cardsTitle,
                                isActiveExperiences
                                    ? styles.cardsTitleActive
                                    : "",
                            ]}
                        >
                            Experiences
                        </Text>
                        {isActiveExperiences && (
                            <View style={[styles.cardsIndicator]}></View>
                        )}
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.cardTitleContainer}
                        onPress={() => {
                            setIsActiveExperiences(false);
                            setIsActiveMuseums(true);
                            setIsActiveTours(false);
                        }}
                    >
                        <Text
                            style={[
                                styles.cardsTitle,
                                isActiveMuseums ? styles.cardsTitleActive : "",
                            ]}
                        >
                            Museums
                        </Text>
                        {isActiveMuseums && (
                            <View style={[styles.cardsIndicator]}></View>
                        )}
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.cardTitleContainer}
                        onPress={() => {
                            setIsActiveExperiences(false);
                            setIsActiveMuseums(false);
                            setIsActiveTours(true);
                        }}
                    >
                        <Text
                            style={[
                                styles.cardsTitle,
                                isActiveTours ? styles.cardsTitleActive : "",
                            ]}
                        >
                            Tours
                        </Text>
                        {isActiveTours && (
                            <View style={[styles.cardsIndicator]}></View>
                        )}
                    </TouchableOpacity>
                </View>

                <CardsContainer data={featured} />
            </View>
            <Text style={[styles.title, { padding: 20 }]}>
                What are you up to,{"\n"}today?
            </Text>
            <CategoriesGrid />
            <Text style={[styles.title, { padding: 20 }]}>
                Mood for a trip?{"\n"}Explore Volos' outer area.
            </Text>
            <CardsContainer data={outerLocations} />

            {/* <Button
                onPress={() => navigation.navigate("Profile")}
                title="Go to Profile Screen"
            /> */}
        </ScrollView>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },

    title: {
        fontSize: 28,
        fontFamily: "Poppins_700Bold",
    },

    text: {
        marginTop: 20,
        lineHeight: 25,
        letterSpacing: 1.2,
        fontFamily: "Poppins_400Regular",
    },

    cardsTitlesContainer: {
        flexDirection: "row",
        marginVertical: 20,
    },

    cardsTitle: {
        fontSize: Platform.OS === "android" ? 20 : 18,
        fontFamily: "Poppins_700Bold",
        marginHorizontal: 20,
        color: "#000",
    },

    cardsIndicator: {
        position: "absolute",
        width: 8,
        height: 8,
        backgroundColor: theme.colors.primary,
        borderRadius: 8,
        bottom: Platform.OS === "android" ? 0 : -15,
        left: "48%",
        zIndex: 2,
    },

    cardsTitleActive: {
        color: theme.colors.primary,
    },

    cardTitleContainer: {
        position: "relative",
        paddingBottom: Platform.OS === "android" ? 12 : 0,
    },
});
