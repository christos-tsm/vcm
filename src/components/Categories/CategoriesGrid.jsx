import { StyleSheet, View } from "react-native";
import React from "react";

import Category from "./Category";
import { categories } from "../../../dummy-categories";

const CategoriesGrid = () => {
    return (
        <View style={styles.container}>
            {categories.map((item) => (
                <Category
                    key={item.id}
                    title={item.name}
                    imageUrl={item.imageUrl}
                />
            ))}
        </View>
    );
};

export default CategoriesGrid;

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
    },
});
