import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/RootStack';
import { RouteProp } from '@react-navigation/native';
import { SvgProps } from "react-native-svg";


export type EmailSignUpNavigationProp = StackNavigationProp<RootStackParamList, 'EmailSignUp'>;
export interface EmailSignUpProps {
  navigation: EmailSignUpNavigationProp;
}

export type GenderSelectionNavigationProp = StackNavigationProp<RootStackParamList, 'MasjidLocator'>;
export interface GenderSelectionProps {
  navigation: GenderSelectionNavigationProp;
}

export type MasjidLocatorNavigationProp = StackNavigationProp<RootStackParamList, 'MasjidLocator'>;
export interface MasjidLocatorProps {
  navigation: MasjidLocatorNavigationProp;
}

export type NameformNavigationProp = StackNavigationProp<RootStackParamList, 'MasjidLocator'>;
export interface NameformProps {
  navigation: NameformNavigationProp;
}

export type VerifyEmailNavigationProp = StackNavigationProp<RootStackParamList, 'VerifyEmail'>;
export type VerifyEmailRouteProp = RouteProp<RootStackParamList, 'VerifyEmail'>;
export interface VerifyEmailProps {
  navigation: VerifyEmailNavigationProp;
  route: VerifyEmailRouteProp;
}

export interface ContinueButtonProps {
    onPress: () => void;
  }

export interface LoginOptionButtonProps {
    onPress: () => void;
    title: string
    icon: React.ComponentType<SvgProps>;
  }

export type MaritalProfileModalNavigationProp = StackNavigationProp<RootStackParamList, 'NameForm'>;
export interface MaritalProfileModalProps {
  visible: boolean;
  onClose: () => void;
}

export interface ProgressBarProps {
    progress: number;
  }
  