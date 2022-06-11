import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import * as React from 'react';
import { RefreshControl, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Button } from '../components/Button';
import { Header } from '../components/Header';
import { SearchBar } from '../components/SearchBar';
import { Card } from '../components/Card';
import { RootStackParamList } from '../routes/stack.routes';
import { useContext, useState } from 'react';
import { CountriesContext } from '../contexts/CountriesContext';
import { ActivityIndicator } from 'react-native-paper';

type homeScreenProp = StackNavigationProp<RootStackParamList, 'Home'>;

export function Home() {
    const navigation = useNavigation<homeScreenProp>();

    const { darkMode, list, dataIsLoaded, onRefresh } = useContext(CountriesContext);

    const [searchQuery, setSearchQuery] = useState('');
    const [refreshing, setRefreshing] = useState(false);
    const onChangeSearch = (query: string) => setSearchQuery(query);

    return (
        <>
            <Header />
            <View style={styles.search}>
                <SearchBar
                    onChangeText={onChangeSearch}
                    value={searchQuery}
                />
            </View>

            {dataIsLoaded && !refreshing &&
                <SafeAreaView style={styles.container}>
                    <ScrollView
                        refreshControl={
                            <RefreshControl
                                refreshing={refreshing}
                                onRefresh={onRefresh}
                            />
                        }
                    >
                        {list.length > 0
                            && list.map(
                                (item) => {
                                    return (
                                        <View key={item.numericCode} style={styles.cards}>
                                            <Card flag={item.flags.png} name={item.name} population={item.population} region={item.region} capital={item.capital} onPress={() => { navigation.navigate('Details') }} />
                                        </View>
                                    )
                                }
                            )
                        }
                    </ScrollView>
                </SafeAreaView>
            }

            {!dataIsLoaded && !refreshing
                && <View style={[styles.container, styles.horizontal]}>
                    <ActivityIndicator animating={true} size={'large'} color={darkMode ? '#FFFFFF' : '#2C3743'} />
                </View>

            }
        </>

    );
};

const styles = StyleSheet.create({
    search: {
        paddingVertical: 25,
        paddingHorizontal: 15
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