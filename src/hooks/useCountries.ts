import { useState, useEffect, useCallback } from 'react';
import { Alert } from 'react-native';
import All, { IGetCountry } from '../services/All';
import Continent from '../services/Continent';
import Name from '../services/Name';

type FilterType = "All" | "Name" | "Continent";

export default function useCountries() {
    const [darkMode, setDarkMode] = useState<boolean>(false);
    const [dataIsLoaded, setDataIsLoaded] = useState<boolean>(false);
    const [filterType, setFilterType] = useState<FilterType>('All');
    const [filter, setFilter] = useState<string|undefined>();
    const [list, setList] = useState<IGetCountry[]>([]);

    const fetchData = async (filter?: string) => {
        setDataIsLoaded(false);
        let response: IGetCountry[];
        switch (filterType) {
            case 'All':
                response = await All.get();
                break;
            case 'Name':
                response = await Name.get(filter);
                break;
            case 'Continent':
                response = await Continent.get(filter);
                break;
            default:
                response = await All.get();
        }
        setList(response);
        setDataIsLoaded(true);
    }

    useEffect(() => {
        (async () => {
            try {
                await fetchData();
            } catch (e: any) {
                Alert.alert(e.message);
            }
        })()
    }, []);

    const onSearch = useCallback(async () => {
        try {
            await fetchData(filter);
        } catch (e: any) {
            Alert.alert(e.message);
        }
    }, [filter]);

    const onRefresh = useCallback(async () => {
        try {
            await fetchData();
        } catch (e: any) {
            Alert.alert(e.message);
        }
    }, []);

    return { darkMode, setDarkMode, dataIsLoaded, setDataIsLoaded, list, setList, filterType, setFilterType, filter, setFilter, onSearch, onRefresh }
}
