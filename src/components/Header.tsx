import React, { useContext } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Appbar, Button } from "react-native-paper";
import { CountriesContext } from '../contexts/CountriesContext';

export function Header() {

    const { darkMode, setDarkMode } = useContext(CountriesContext);

    const styles = StyleSheet.create({
        header: {
            paddingHorizontal: 10,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: darkMode ? '#2C3743' : '#FAFAFA'
        },
        title: {
            paddingLeft: 5,
            fontSize: 20,
            fontWeight: "bold",
            color: darkMode ? '#FFFFFF' : '#000000'
        }
    });

    return (
        <Appbar.Header style={styles.header} >
            <Text style={styles.title}>{'Where in the world?'}</Text>
            <Button
                icon={darkMode ? "moon" : "moon-outline"}
                mode="text"
                color={darkMode ? '#FFFFFF' : '#000000'}
                onPress={() => setDarkMode(!darkMode)}
                uppercase={false}
            >
                Dark Mode
            </Button>
        </Appbar.Header>
        
    );

}


