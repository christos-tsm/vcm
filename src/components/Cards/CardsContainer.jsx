import { StyleSheet, FlatList } from "react-native";
import React from "react";
import Card from "./Card";

const CardsContainer = ({ data }) => {
    const renderItem = ({ item }) => (
        <Card
            key={item.id}
            title={item.name}
            area={item.place}
            imageUrl={item.imageUrl}
        />
    );

    return (
        <FlatList
            horizontal={true}
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            key={(item) => item.id}
            contentContainerStyle={styles.cardsContainer}
        />
    );
};

export default CardsContainer;

const styles = StyleSheet.create({
    cardsContainer: {
        marginVertical: 20,
    },
});
