import React, { ComponentProps, ComponentPropsWithRef, ReactNode, useContext } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Appbar, Searchbar as SearchBarPaper } from "react-native-paper";
import { CountriesContext } from '../contexts/CountriesContext';

type SearchBarProps = ComponentProps<typeof SearchBarPaper>;

export function SearchBar(props: SearchBarProps) {

    const { darkMode } = useContext(CountriesContext);

    return (
        <SearchBarPaper
            placeholder="Search for a country..."
            iconColor={darkMode ? '#FFFFFF' : '#c4c4c4'}
            placeholderTextColor={darkMode ? '#FFFFFF' : '#c4c4c4'}
            {...props}
            style={{
                backgroundColor: darkMode ? '#2C3743' : '#FFFFFF',
                borderRadius: 8
            }}
        />
    );

}


