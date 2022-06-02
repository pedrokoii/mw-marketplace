import React from "react";
import { View, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { styles } from "./styles";

import logoSmall from "../../assets/app-name-small.png";
import IllustrationAccount from "../../assets/CadastroConfirmado.png";

import { GradientButton } from "../../components/GradientButton";


export function NewAccountComplete() {

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

            <Image style={styles.image}
                source={IllustrationAccount}
                resizeMode="contain"
            />
                
            <View style={styles.content}>
                <Text style={styles.title}>
                    Seu perfil foi criado com sucesso!
                </Text>

                <Text style={styles.subtitle}>
                    Realize o login com as credenciais inseridas no momento do cadastro
                </Text>
            </View>

            <View style={styles.controlButton}>
                <GradientButton
                    title="Entrar"
                    onPress={() => handleNavigate('SignIn')}
                />
            </View>
        </View>
    );
}
