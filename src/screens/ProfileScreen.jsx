import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

const ProfileScreen = ({ navigation }) => {
    return (
        <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
            <Button onPress={() => navigation.goBack()} title="Go back home" />
        </View>
    );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
