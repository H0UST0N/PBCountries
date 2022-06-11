import * as React from 'react';
import { useEffect } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import { Text } from "react-native-paper";
import All from '../services/All';

export function Home() {
    
    return (
        <View  style={styles.container}>
            <Text style={styles.text}>
                {'Home'}
            </Text>
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        fontSize: 30
    },
});