import React from "react";
import { View, Text, Image } from "react-native";
import { TextInput } from 'react-native-gesture-handler';
import { useNavigation } from "@react-navigation/native";

import { theme } from '../../global/styles/theme';
import { styles } from "./styles";

import logoSmall from "../../assets/app-name-small.png";

import { GradientButton } from "../../components/GradientButton";

export function NewAccountAddressData() {

    const navigation = useNavigation<any>();

    const handleNavigate = (routeName: string) => {
        navigation.navigate(routeName);
    }

    return (
        <View style={styles.container}>
            <Image style={styles.imageLogo}
                source={logoSmall}
                resizeMode="contain"
            />
            
            <View style={styles.content}>
                <Text style={styles.title}>
                    Para começar, insira seu endereço
                </Text>
            </View>
            
            <View style={styles.content}>
                <TextInput style={styles.input}
                    placeholder="Address Picker"
                    keyboardType="default"
                    placeholderTextColor={theme.colors.primary}
                    maxLength={20}
                >
                </TextInput>

                <Text style={styles.label}>
                    CEP *
                </Text>
                <TextInput style={styles.input}
                    placeholder="Insira seu CEP"
                    keyboardType="number-pad"
                    placeholderTextColor={theme.colors.primary}
                    maxLength={8}
                >
                </TextInput>

                <Text style={styles.label}>
                    Endereço *
                </Text>
                <TextInput style={styles.input}
                    placeholder="Insira seu endereço"
                    keyboardType="default"
                    placeholderTextColor={theme.colors.primary}
                    maxLength={100}
                >
                </TextInput>

                <Text style={styles.label}>
                    Número *
                </Text>
                <TextInput style={styles.input}
                    placeholder="Insira seu número"
                    keyboardType='default'
                    placeholderTextColor={theme.colors.primary}
                    maxLength={11}
                >
                </TextInput>

                <Text style={styles.label}>
                    Complemento
                </Text>
                <TextInput style={styles.input}
                    placeholder="Insira seu complemento"
                    keyboardType='default'
                    placeholderTextColor={theme.colors.primary}
                    maxLength={50}
                >
                </TextInput>
            </View>

            <View style={styles.controlButton}>
                <GradientButton
                    title="Continuar"
                    onPress={() => handleNavigate('NewAccountProfilePicture')}
                />
            </View>
        </View>
    );
}
