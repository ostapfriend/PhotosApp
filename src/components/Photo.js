import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import React from "react";

export const Photo = ({ item, handleActionWithPhotoId, children }) => {
    return (
        <View style={styles.card}>
            <Image source={{ uri: item.url }} style={styles.image} />
            <View style={styles.cardDetails}>
                <Text style={styles.cardTitle}>{item.title}</Text>
                <TouchableOpacity onPress={() => handleActionWithPhotoId(item.id)}>
                    {children}
                </TouchableOpacity>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    card: {
        width: 350,
        backgroundColor: '#ffffff',
        borderRadius: 8,
        padding: 16,
        marginBottom: 16,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginRight: 16,
    },
    cardDetails: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    cardTitle: {
        flex: 1,
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 8,
    },
});
