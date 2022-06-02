import React from "react";
import { View, Text, Image } from "react-native";
import { TextInput } from 'react-native-gesture-handler';
import { useNavigation } from "@react-navigation/native";

import { theme } from '../../global/styles/theme';
import { styles } from "./styles";

import logoSmall from "../../assets/app-name-small.png";

import { GradientButton } from "../../components/GradientButton";

export function PasswordRecovery() {

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
                    Esqueceu a senha?
                </Text>

                <Text style={styles.subtitle}>
                    Digite seu e-mail abaixo para receber as intruções de recuperação
                </Text>

                <Text style={styles.label}>
                    E-mail
                </Text>
                <TextInput style={styles.input}
                    placeholder="Insira seu e-mail"
                    keyboardType='email-address'
                    placeholderTextColor={theme.colors.primary}
                    maxLength={20}
                >
                </TextInput>
            </View>

            <View style={styles.controlButton}>
                <GradientButton
                    title="Recuperar senha"
                    onPress={() => handleNavigate('PasswordRecoveryComplete')}
                />
            </View>
        </View>
    );
}
