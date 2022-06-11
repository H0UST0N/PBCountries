import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from './Button';

interface HeaderBackProps {
    title?: string;
}


export function HeaderBack({ title }: HeaderBackProps) {
    const navigation = useNavigation();

    const styles = StyleSheet.create({
        header: {
            paddingVertical: 15,
            paddingHorizontal: 10,
            flexDirection: "row",
            justifyContent: "flex-start",
        }
    });

    return (
        <View style={styles.header}>
            <Button
                icon="arrow-back"
                onPress={() => {navigation.goBack();}}
            >
                {title ? title : 'Back'}
            </Button>
        </View>
    );

}


