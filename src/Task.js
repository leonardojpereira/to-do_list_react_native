import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
 
import { FontAwesome } from '@expo/vector-icons';

export default function Task({ data, deleteItem }) {
    return(
        <View style={styles.container}>
            <Text>{data.item}</Text>
            <TouchableOpacity style={styles.button} onPress={deleteItem}>
                <FontAwesome name="trash" size={20} color={"#C51605"} />
            </TouchableOpacity>
        </View>
    );
}

const styles  =StyleSheet.create({
    container:{
        backgroundColor: 'rgba(196,196,196, 0.20)',
        marginTop: 12,
        padding: 12,
        borderRadius: 4,
        flexDirection: 'row',
        justifyContent: 'space-between',
        
    },
    button:{
        marginRight: 8,
    }
});