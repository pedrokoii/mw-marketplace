import React from "react";
import { View, Text, Image } from "react-native";
import { TextInput } from 'react-native-gesture-handler';
import { useNavigation } from "@react-navigation/native";

import { theme } from '../../global/styles/theme';
import { styles } from "./styles";

import logoSmall from "../../assets/app-name-small.png";
import linha from "../../assets/linha.png";
import apple from "../../assets/apple.png";
import facebook from "../../assets/facebook.png";
import google from "../../assets/google.png";

import { GradientButton } from "../../components/GradientButton";

export function SignIn() {

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
                    Bem Vindos de Volta {'\n'}
                    Sentimos sua Falta {'\n'}
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

                <Text style={styles.label}>
                    Senha
                </Text>
                <TextInput style={styles.input}
                    keyboardType='number-pad'
                    placeholder="Insira sua senha"
                    maxLength={6}
                    secureTextEntry
                    placeholderTextColor={theme.colors.primary}
                >
                </TextInput>

                <View style={styles.controls}>
                    <Text style={styles.label}
                        onPress={() => handleNavigate('NewAccountUserData')}
                    >
                        Novo por aqui
                    </Text>

                    <Text style={styles.label}
                        onPress={() => handleNavigate('PasswordRecovery')}
                    >
                        Esqueci minha senha
                    </Text>
                </View>
            </View>

            <View style={styles.controlButton}>
                <GradientButton
                    title="Continuar"
                    onPress={() => handleNavigate('Start')}
                />
            </View>

            <Image style={styles.linha}
                source={linha}
            />

            <View style={styles.controls}>
                <Image style={styles.linha}
                    source={google}
                />
                <Image style={styles.linha}
                    source={facebook}
                />
                <Image style={styles.linha}
                    source={apple}
                />
            </View>
        </View>
    );
}
