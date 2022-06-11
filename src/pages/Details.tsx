import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from "react-native-paper";
import { HeaderBack } from '../components/HeaderBack';
import { Header } from '../components/Header';

export function Details() {
    return (
        <>
            <Header />
            <HeaderBack />
            <View style={styles.container}>
                <Text style={styles.text}>
                    {'Details'}
                </Text>
            </View>
        </>

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