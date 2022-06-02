import { View, Text, Image } from "react-native";

import { styles } from "./styles";

import IllustrationImg from "../../assets/Illustration.png";
import logoSmall from "../../assets/LogoSmall.png";

import { ButtonWhite } from "../../components/ButtonWhite";
import { Background } from "../../components/Background";

import { useNavigation } from "@react-navigation/native";


export function Home() {
  
    const navigation = useNavigation<any>();

    const handleNavigate = (routeName: string) => {
        navigation.navigate(routeName);
    }

    return (
        <Background>
            <View style={styles.container}>
                <Image style={styles.imageLogo}
                    source={logoSmall}
                    resizeMode="contain"
                />

                <Text style={styles.title}>
                    Marketplace {"\n"}
                    Inteligente para você {"\n"}
                </Text>

                <Image style={styles.image}
                    source={IllustrationImg}
                    resizeMode="contain"
                />

                <View style={styles.content}>
                    <Text style={styles.subtitle}>
                        Sua solução para vender seus produtos {"\n"}
                    </Text>

                    <ButtonWhite 
                        title="Continuar"
                        onPress={() => handleNavigate('SignIn')}
                    />
                </View>
            </View>
        </Background>
    );
}
