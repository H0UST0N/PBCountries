import * as React from 'react';
import { Alert, SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { Card, Paragraph, Text, Title } from "react-native-paper";
import { HeaderBack } from '../components/HeaderBack';
import { Header } from '../components/Header';
import { IGetCountry } from '../services/All';
import { useContext, useEffect, useState } from 'react';
import { CountriesContext } from '../contexts/CountriesContext';
import { Button } from '../components/Button';
import Alpha from '../services/Alpha';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../routes/stack.routes';


export function Details(country: any) {
    const navigation = useNavigation();
    const { flags, name, nativeName, population, region, subregion, capital, topLevelDomain, currencies, languages, borders } = country.route.params;

    const { darkMode } = useContext(CountriesContext);

    const [borderDetails, setBorderDetails] = useState<IGetCountry[]>([]);

    useEffect(() => {
        (async () => {
            try {
                if (borders) {
                    const response = await Alpha.get([{ name: 'codes', value: borders?.map((border: string) => border + ",") }])
                    setBorderDetails(response);
                }
            } catch (e: any) {
                Alert.alert(e.message);
            }
        })()
    }, []);


    const styles = StyleSheet.create({
        container: {
            paddingHorizontal: 30,
            paddingVertical: 30,
        },
        content: {
            paddingVertical: 30,
        },
        title: {
            fontSize: 20,
            paddingBottom: 25,
            fontWeight: "bold",
            color: darkMode ? '#FFFFFF' : '#000000'
        },
        titleParagraph: {
            fontSize: 15,
            fontWeight: "bold",
            paddingBottom: 15,
            color: darkMode ? '#FFFFFF' : '#000000'
        },
        paragraph: {
            fontSize: 15,
            paddingBottom: 15,
            color: darkMode ? '#FFFFFF' : '#000000'
        },
        bordersContent: {
            marginBottom: 200,
        },
        borders: {
            flexDirection: "row",
            flexWrap: "wrap"
        },
    });

    return (
        <>
            <Header />
            <HeaderBack />
            <SafeAreaView>
                <ScrollView>
                    <View style={styles.container}>
                        <Card.Cover source={{ uri: flags.png }} />
                        <View style={styles.content}>
                            <Title style={styles.title}>{name}</Title>
                            <Paragraph style={styles.paragraph}><Text style={styles.titleParagraph}>Native Name:</Text> {nativeName}</Paragraph>
                            <Paragraph style={styles.paragraph}><Text style={styles.titleParagraph}>Population:</Text> {population.toLocaleString('pt-BR', { style: 'decimal' })}</Paragraph>
                            <Paragraph style={styles.paragraph}><Text style={styles.titleParagraph}>Region:</Text> {region}</Paragraph>
                            <Paragraph style={styles.paragraph}><Text style={styles.titleParagraph}>Sub Region:</Text> {subregion}</Paragraph>
                            <Paragraph style={styles.paragraph}><Text style={styles.titleParagraph}>Capital:</Text> {capital}</Paragraph>

                            <View style={styles.content}>
                                <Paragraph style={styles.paragraph}><Text style={styles.titleParagraph}>Top Level Domain:</Text> {topLevelDomain}</Paragraph>
                                <Paragraph style={styles.paragraph}><Text style={styles.titleParagraph}>Currencies:</Text> {currencies?.map((currency: { name: string; }) => currency.name + "; ")}</Paragraph>
                                <Paragraph style={styles.paragraph}><Text style={styles.titleParagraph}>Languages:</Text> {languages?.map((language: { name: string; }) => language.name + "; ")}</Paragraph>
                            </View>
                            <View style={styles.bordersContent}>
                                <Paragraph style={styles.paragraph}><Text style={styles.titleParagraph}>Border Countries:</Text></Paragraph>
                                <View style={styles.borders}>
                                    {borderDetails?.map((border) => <Button
                                        key={border.numericCode}
                                        style={{ marginHorizontal: 3, marginVertical: 2 }}
                                        uppercase={false}
                                        onPress={async () => {
                                            if (border && border.borders) {
                                                const response = await Alpha.get([{ name: 'codes', value: (border.borders.map((border: string) => border + ",")) }])
                                                setBorderDetails(response);
                                            }
                                            navigation.navigate('Details', border);
                                        }}
                                    >
                                        {border?.name}
                                    </Button>)
                                    }
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>

    );
};