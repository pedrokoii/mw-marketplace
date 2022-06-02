import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Text } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { theme } from '../../global/styles/theme';
import { styles } from './styles';


type Props = RectButtonProps & {
  title: string,
  onPress?: () => void;
}

export function GradientButton({ title, ...rest }: Props) {

  const { buttonGradientColor1, buttonGradientColor2 } = theme.colors;

  return (
    <RectButton
      style={styles.container}
      {...rest}
    >
      <LinearGradient
      style={styles.container}
      colors={[buttonGradientColor1, buttonGradientColor2]}
      start={{x: 0, y:0.5}}
      end={{x: 1, y:0.5}}
      >
        <Text style={styles.title}>
          {title}
        </Text>
      </LinearGradient>
      
    </RectButton>
  );
}