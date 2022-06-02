import React from "react";
import { View, Text, Image } from "react-native";
import { TextInput } from 'react-native-gesture-handler';
import { useNavigation } from "@react-navigation/native";

import { theme } from '../../global/styles/theme';
import { styles } from "./styles";

import logoSmall from "../../assets/app-name-small.png";

import { GradientButton } from "../../components/GradientButton";

export function NewAccountUserData() {

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
                    Insira os dados da sua conta
                </Text>
            </View>
            
            <View style={styles.content}>
                <Text style={styles.label}>
                    E-mail *
                </Text>
                <TextInput style={styles.input}
                    placeholder="Insira seu e-mail"
                    keyboardType='email-address'
                    placeholderTextColor={theme.colors.primary}
                    maxLength={20}
                >
                </TextInput>

                <Text style={styles.label}>
                    Nome de usuário *
                </Text>
                <TextInput style={styles.input}
                    placeholder="Insira seu nome de usuário"
                    keyboardType="default"
                    placeholderTextColor={theme.colors.primary}
                    maxLength={20}
                >
                </TextInput>

                <Text style={styles.label}>
                    Senha *
                </Text>
                <TextInput style={styles.input}
                    secureTextEntry
                    placeholder="Insira sua senha"
                    keyboardType='number-pad'
                    placeholderTextColor={theme.colors.primary}
                    maxLength={6}
                >
                </TextInput>

                <Text style={styles.label}>
                    Confirme a senha *
                </Text>
                <TextInput style={styles.input}
                    secureTextEntry
                    placeholder="Insira sua senha"
                    keyboardType='number-pad'
                    placeholderTextColor={theme.colors.primary}
                    maxLength={6}
                >
                </TextInput>
            </View>

            <View style={styles.controlButton}>
                <GradientButton
                    title="Continuar"
                    onPress={() => handleNavigate('NewAccountPersonalData')}
                />
            </View>
        </View>
    );
}
