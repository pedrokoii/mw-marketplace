import React from "react";
import { View, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { styles } from "./styles";

import logoSmall from "../../assets/app-name-small.png";
import IllustrationEmail from "../../assets/EmailConfirmado.png";

import { GradientButton } from "../../components/GradientButton";


export function PasswordRecoveryComplete() {

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

            <View>
                <View>
                    <Image style={styles.image}
                        source={IllustrationEmail}
                        resizeMode="contain"
                    />
                </View>

                <View style={styles.content}>
                    <Text style={styles.title}>
                        Confira seu e-mail
                    </Text>

                    <Text style={styles.subtitle}>
                        Enviamos as instruções em seu e-mail
                    </Text>
                </View>
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
