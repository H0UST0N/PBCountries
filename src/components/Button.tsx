import React, { ComponentProps, useContext } from 'react';
import { Button as ButtonPaper } from "react-native-paper";
import { CountriesContext } from '../contexts/CountriesContext';

type ButtonProps = ComponentProps<typeof ButtonPaper>;

export function Button(props: ButtonProps) {

    const { darkMode } = useContext(CountriesContext);

    return (
        <ButtonPaper
            color={darkMode ? '#2C3743' : '#FFFFFF'}
            mode={"contained"}
            {...props}
        >
            {props.children}
        </ButtonPaper>
    );

}


