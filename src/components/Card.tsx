import React, { ComponentProps, ComponentPropsWithRef, ReactNode, useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Card as CardPaper, Paragraph, Text, Title } from 'react-native-paper';
import { CountriesContext } from '../contexts/CountriesContext';

interface CardProps {
    flag: string;
    name: string;
    population: number;
    region: string;
    capital:string;
    onPress: ()=> void;
};

export function Card({flag, name, population, region, capital, onPress}: CardProps) {

    const { darkMode } = useContext(CountriesContext);

    const styles = StyleSheet.create({
        content: {
            paddingHorizontal: 30,
            paddingVertical: 30,
            backgroundColor: darkMode ? '#2C3743' : '#FFFFFF',
        },
        title: {
            fontSize: 25,
            paddingBottom: 25,
            fontWeight: "bold",
            color: darkMode ? '#FFFFFF' : '#000000'
        },
        titleParagraph: {
            fontSize: 20,
            fontWeight: "bold",
            paddingBottom: 15,
            color: darkMode ? '#FFFFFF' : '#000000'
        },
        paragraph: {
            fontSize: 20,
            paddingBottom: 15,
            color: darkMode ? '#FFFFFF' : '#000000'
        }
    });

    return (
        <CardPaper onPress={onPress}>
            <CardPaper.Cover source={{ uri: flag }} />
            <CardPaper.Content style={styles.content}>
                <Title style={styles.title}>{name}</Title>
                <Paragraph style={styles.paragraph}><Text style={styles.titleParagraph}>Population:</Text> {population}</Paragraph>
                <Paragraph style={styles.paragraph}><Text style={styles.titleParagraph}>Region:</Text> {region}</Paragraph>
                <Paragraph style={styles.paragraph}><Text style={styles.titleParagraph}>Capital:</Text> {capital}</Paragraph>
            </CardPaper.Content>
        </CardPaper>
    );

}


