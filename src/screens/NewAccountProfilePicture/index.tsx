import React from "react";
import { View, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { styles } from "./styles";

import logoSmall from "../../assets/app-name-small.png";
import ProfilePicture from "../../assets/ImagemPerfil.png";

import { ButtonWhite } from "../../components/ButtonWhite";
import { GradientButton } from "../../components/GradientButton";


export function NewAccountProfilePicture() {

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
                    Para finalizar, insira uma foto de perfil
                </Text>
            </View>

            <View>
                <View>
                    <Image style={styles.image}
                        source={ProfilePicture}
                        resizeMode="contain"
                    />
                </View>
                
                <View style={styles.content}>
                    <Text style={styles.subtitle}>
                        Selecionar foto de perfil
                    </Text>
                </View>
            </View>

            <View style={styles.controlButton}>
                <ButtonWhite
                    title="Pular esta etapa"
                    onPress={() => handleNavigate('NewAccountComplete')}
                />
                <GradientButton
                    title="Continuar"
                    onPress={() => handleNavigate('NewAccountComplete')}
                />
            </View>
        </View>
    );
}
