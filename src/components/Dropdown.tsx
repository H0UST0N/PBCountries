import React, { ComponentProps, useContext } from 'react';
import RNPickerSelect from 'react-native-picker-select';
import Icon from 'react-native-vector-icons/Ionicons';
import { CountriesContext } from '../contexts/CountriesContext';

type PickerProps = ComponentProps<typeof RNPickerSelect>;

interface DropdownProps extends PickerProps {
    description: string;
}

export function Dropdown({ description, ...props }: DropdownProps) {

    const { darkMode } = useContext(CountriesContext);

    return (
        <RNPickerSelect
            placeholder={{
                label: description,
                value: null,
                color: '#000000',
                fontSize: 14,
            }}
            Icon={() => {
                return <Icon name="chevron-down" size={20} color="gray" />;
            }}
            style={{
                inputIOS: {
                    backgroundColor: darkMode ? '#2C3743' : '#FFFFFF',
                    fontSize: 16,
                    paddingVertical: 12,
                    paddingHorizontal: 10,
                    borderWidth: 1,
                    borderColor: darkMode ? '#2C3743' : '#FFFFFF',
                    borderRadius: 8,
                    color: darkMode ? '#FFFFFF' : '#000000',
                    paddingRight: 30, // to ensure the text is never behind the icon
                    shadowColor: '#171717',
                    shadowOffset: { width: -2, height: 4 },
                    shadowOpacity: 0.2,
                    shadowRadius: 3,
                },
                inputAndroid: {
                    backgroundColor: darkMode ? '#2C3743' : '#FFFFFF',
                    fontSize: 16,
                    paddingHorizontal: 10,
                    paddingVertical: 8,
                    borderWidth: 0.5,
                    borderColor: darkMode ? '#2C3743' : '#FFFFFF',
                    borderRadius: 8,
                    color: darkMode ? '#FFFFFF' : '#000000',
                    paddingRight: 30, // to ensure the text is never behind the icon
                    shadowColor: '#171717',
                    shadowOffset: { width: -2, height: 4 },
                    shadowOpacity: 0.2,
                    shadowRadius: 3,
                },
                iconContainer: {
                    top: 10,
                    right: 12,
                },
            }}
            {...props}
        />
    );

}


