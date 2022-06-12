import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import * as React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { Header } from '../components/Header';
import { SearchBar } from '../components/SearchBar';
import { Card } from '../components/Card';
import { RootStackParamList } from '../routes/stack.routes';
import { useContext, useState } from 'react';
import { CountriesContext } from '../contexts/CountriesContext';
import { ActivityIndicator } from 'react-native-paper';
import { Dropdown } from '../components/Dropdown';

type homeScreenProp = StackNavigationProp<RootStackParamList, 'Home'>;

export function Home() {
    
    const navigation = useNavigation<homeScreenProp>();

    const { darkMode, list, dataIsLoaded, fetchData } = useContext(CountriesContext);

    const styles = StyleSheet.create({
        search: {
            paddingVertical: 25,
            paddingHorizontal: 15
        },
        dropdown: {
            paddingHorizontal: 15,
            paddingBottom: 15
        },
        cards: {
            paddingHorizontal: 50,
            paddingVertical: 15
        },
        container: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
        },
        horizontal: {
            flexDirection: "row",
            justifyContent: "space-around",
            padding: 10
        },
        text: {
            fontSize: 30
        },
    });

    const [searchQuery, setSearchQuery] = useState('');

    const onChangeSearch = async (query: string) => {
        setSearchQuery(query);
        if (query.length > 1) {
            await fetchData("Name", query);
        } else {
            await fetchData("All");
        }
    };

    return (
        <>
            <Header />
            <View style={styles.search}>
                <SearchBar
                    onChangeText={onChangeSearch}
                    value={searchQuery}
                />
            </View>

            <View style={styles.dropdown}>
                <Dropdown
                    description='Filter by Region'
                    items={[
                        { label: 'Africa', value: 'africa', key: 'africa' },
                        { label: 'Americas', value: 'americas', key: 'africa' },
                        { label: 'Asia', value: 'asia', key: 'africa' },
                        { label: 'Europe', value: 'europe', key: 'africa' },
                        { label: 'Oceania', value: 'oceania', key: 'africa' },
                    ]}
                    onValueChange={
                        async (value: string) => {
                            if(value) {
                                fetchData("Continent", value);
                            } else {
                                fetchData("All", value);
                            }
                        }
                    }
                />
            </View>

            {dataIsLoaded &&
                <SafeAreaView style={styles.container}>
                    <ScrollView>
                        {list?.length > 0
                            && list.map(
                                (item: any) => {
                                    return (
                                        <View key={item.numericCode} style={styles.cards}>
                                            <Card flag={item.flags.png} name={item.name} population={item.population} region={item.region} capital={item.capital} onPress={() => { navigation.navigate('Details', item) }} />
                                        </View>
                                    )
                                }
                            )
                        }
                    </ScrollView>
                </SafeAreaView>
            }

            {!dataIsLoaded
                && <View style={[styles.container, styles.horizontal]}>
                    <ActivityIndicator animating={true} size={'large'} color={darkMode ? '#FFFFFF' : '#2C3743'} />
                </View>

            }
        </>

    );
};

