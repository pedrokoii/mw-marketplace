import React from "react";
import { View, Text, Image } from "react-native";
import { TextInput } from 'react-native-gesture-handler';
import { useNavigation } from "@react-navigation/native";

import { theme } from '../../global/styles/theme';
import { styles } from "./styles";

import logoSmall from "../../assets/app-name-small.png";

import { GradientButton } from "../../components/GradientButton";

export function NewAccountPersonalData() {

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
                    Insira seus dados pessoais
                </Text>
            </View>
            
            <View style={styles.content}>
                <Text style={styles.label}>
                    Nome *
                </Text>
                <TextInput style={styles.input}
                    placeholder="Insira seu nome"
                    keyboardType="default"
                    placeholderTextColor={theme.colors.primary}
                    maxLength={20}
                >
                </TextInput>

                <Text style={styles.label}>
                    Sobrenome *
                </Text>
                <TextInput style={styles.input}
                    placeholder="Insira seu sobrenome"
                    keyboardType="default"
                    placeholderTextColor={theme.colors.primary}
                    maxLength={20}
                >
                </TextInput>

                <Text style={styles.label}>
                    Celular *
                </Text>
                <TextInput style={styles.input}
                    placeholder="Insira seu celular"
                    keyboardType='phone-pad'
                    placeholderTextColor={theme.colors.primary}
                    maxLength={11}
                >
                </TextInput>

                <Text style={styles.label}>
                    Telefone
                </Text>
                <TextInput style={styles.input}
                    placeholder="Insira seu telefone"
                    keyboardType='phone-pad'
                    placeholderTextColor={theme.colors.primary}
                    maxLength={10}
                >
                </TextInput>
            </View>

            <View style={styles.controlButton}>
                <GradientButton
                    title="Continuar"
                    onPress={() => handleNavigate('NewAccountAddressData')}
                />
            </View>
        </View>
    );
}
